package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"net/smtp"
	"os"
	"strings"
	"time"
)

type contactRequest struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Message   string `json:"message"`
}

type emailData struct {
	FirstName string
	LastName  string
	Email     string
	Message   string
	SentAt    string
}

// HTML email template with portfolio branding
var emailTemplate = template.Must(template.New("email").Parse(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Portfolio Contact</title>
</head>
<body style="margin:0;padding:0;background-color:#111111;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#111111;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1c1c1c;border-radius:16px;overflow:hidden;border:1px solid #2d2d2d;">

          <!-- Header -->
          <tr>
            <td style="background-color:#ff6a00;padding:28px 40px;">
              <p style="margin:0;font-size:13px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.7);">Portfolio Contact</p>
              <h1 style="margin:8px 0 0;font-size:26px;font-weight:900;color:#ffffff;">New Message Received</h1>
            </td>
          </tr>

          <!-- Sender info -->
          <tr>
            <td style="padding:36px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="padding-right:10px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:#888888;">First Name</p>
                    <p style="margin:0;font-size:16px;font-weight:bold;color:#f0f0f0;">{{.FirstName}}</p>
                  </td>
                  <td width="50%" style="padding-left:10px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:#888888;">Last Name</p>
                    <p style="margin:0;font-size:16px;font-weight:bold;color:#f0f0f0;">{{if .LastName}}{{.LastName}}{{else}}—{{end}}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Email -->
          <tr>
            <td style="padding:24px 40px 0;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:#888888;">Reply To</p>
              <a href="mailto:{{.Email}}" style="font-size:16px;font-weight:bold;color:#ff6a00;text-decoration:none;">{{.Email}}</a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:28px 40px 0;">
              <div style="height:1px;background-color:#2d2d2d;"></div>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:#888888;">Message</p>
              <p style="margin:0;font-size:15px;line-height:1.8;color:#cccccc;white-space:pre-wrap;">{{.Message}}</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:36px 40px;">
              <div style="height:1px;background-color:#2d2d2d;margin-bottom:24px;"></div>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:12px;color:#555555;">Sent via <strong style="color:#ff6a00;">Vorawut's Portfolio</strong> contact form</p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-size:12px;color:#555555;">{{.SentAt}}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`))

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/contact", contactHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Contact API listening on :%s\n", port)
	if err := http.ListenAndServe(":"+port, mux); err != nil {
		log.Fatal(err)
	}
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusNoContent)
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req contactRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	req.FirstName = strings.TrimSpace(req.FirstName)
	req.LastName = strings.TrimSpace(req.LastName)
	req.Email = strings.TrimSpace(req.Email)
	req.Message = strings.TrimSpace(req.Message)

	if req.FirstName == "" || req.Email == "" || req.Message == "" {
		http.Error(w, "firstName, email and message are required", http.StatusBadRequest)
		return
	}

	if err := sendEmail(req); err != nil {
		log.Println("send email failed:", err)
		http.Error(w, "failed to send email", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

func sendEmail(req contactRequest) error {
	smtpHost := getenv("SMTP_HOST", "smtp.gmail.com")
	smtpPort := getenv("SMTP_PORT", "587")
	smtpUser := os.Getenv("SMTP_USER")
	smtpPass := os.Getenv("SMTP_PASS")
	toEmail := getenv("CONTACT_TO_EMAIL", "vorawut.maggy@gmail.com")

	if smtpUser == "" || smtpPass == "" {
		return fmt.Errorf("SMTP_USER and SMTP_PASS environment variables are required")
	}

	// Render HTML body
	data := emailData{
		FirstName: req.FirstName,
		LastName:  req.LastName,
		Email:     req.Email,
		Message:   req.Message,
		SentAt:    time.Now().Format("2 Jan 2006, 15:04"),
	}

	var htmlBody bytes.Buffer
	if err := emailTemplate.Execute(&htmlBody, data); err != nil {
		return fmt.Errorf("render template: %w", err)
	}

	subject := fmt.Sprintf("Portfolio contact from %s %s", req.FirstName, req.LastName)

	// Build MIME message with HTML body
	msg := []byte(
		"From: " + smtpUser + "\r\n" +
			"To: " + toEmail + "\r\n" +
			"Reply-To: " + req.Email + "\r\n" +
			"Subject: " + subject + "\r\n" +
			"MIME-Version: 1.0\r\n" +
			"Content-Type: text/html; charset=\"utf-8\"\r\n" +
			"\r\n" +
			htmlBody.String(),
	)

	auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)
	return smtp.SendMail(smtpHost+":"+smtpPort, auth, smtpUser, []string{toEmail}, msg)
}

func getenv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
