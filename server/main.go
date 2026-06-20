package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"
	"strings"
)

type contactRequest struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Message   string `json:"message"`
}

func main() {
	http.HandleFunc("/api/contact", contactHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Contact API listening on :%s\n", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
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

	if err := sendContactEmail(req); err != nil {
		log.Println("send email failed:", err)
		http.Error(w, "failed to send email", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

func sendContactEmail(req contactRequest) error {
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")
	smtpUser := os.Getenv("SMTP_USER")
	smtpPass := os.Getenv("SMTP_PASS")
	toEmail := os.Getenv("CONTACT_TO_EMAIL")

	if smtpHost == "" || smtpPort == "" || smtpUser == "" || smtpPass == "" || toEmail == "" {
		return fmt.Errorf("smtp configuration is missing required environment variables")
	}

	subject := fmt.Sprintf("Portfolio contact from %s %s", req.FirstName, req.LastName)
	body := fmt.Sprintf(
		"You received a new message from your portfolio contact form.\r\n\r\n"+
			"Name: %s %s\r\n"+
			"Email: %s\r\n\r\n"+
			"Message:\r\n%s\r\n",
		req.FirstName, req.LastName, req.Email, req.Message,
	)

	msg := []byte(
		"From: " + smtpUser + "\r\n" +
			"To: " + toEmail + "\r\n" +
			"Reply-To: " + req.Email + "\r\n" +
			"Subject: " + subject + "\r\n" +
			"MIME-Version: 1.0\r\n" +
			"Content-Type: text/plain; charset=\"utf-8\"\r\n" +
			"\r\n" + body,
	)

	auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)
	return smtp.SendMail(smtpHost+":"+smtpPort, auth, smtpUser, []string{toEmail}, msg)
}
