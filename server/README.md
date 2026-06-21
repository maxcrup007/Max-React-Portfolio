# Backend — Go Contact API

A small Go HTTP server that receives the portfolio contact form submission and delivers it to **vorawut.maggy@gmail.com** as a branded HTML email.

---

## Requirements

- [Go](https://go.dev/dl/) 1.21+
- A Gmail account with an **App Password** (see setup below)

---

## Setup (first time only)

### 1. Copy the example env file

```powershell
cd server
copy .env.example .env
```

### 2. Edit `.env`

Open `.env` and fill in:

```
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx
```

> **SMTP_PASS must be a Gmail App Password, not your normal password.**
> Generate one at: https://myaccount.google.com/apppasswords
> → Select "Mail" → Copy the 16-character password

Leave the other values as-is unless you want to change the destination email or port.

---

## How to Start

Load the `.env` file and run the server:

```powershell
Get-Content .env | ForEach-Object {
    if ($_ -match '^\s*([^#=]+)=(.*)$') {
        Set-Item "env:$($matches[1].Trim())" $matches[2].Trim()
    }
}
go run main.go
```

The server starts on **http://localhost:8080**.

---

## How to Stop

Press `Ctrl + C` in the terminal running the server.

---

## API Reference

### `POST /api/contact`

Receives the contact form, renders an HTML email, and sends it via Gmail SMTP.

**Request body (JSON):**

```json
{
  "firstName": "Max",
  "lastName":  "Autumn",
  "email":     "visitor@example.com",
  "message":   "Hello!"
}
```

| Field | Required | Description |
|---|---|---|
| `firstName` | Yes | Sender's first name |
| `lastName` | No | Sender's last name |
| `email` | Yes | Sender's email (used for Reply-To) |
| `message` | Yes | Message body |

**Success response:**

```json
{ "status": "ok" }
```

**Error responses:**

| Status | Reason |
|---|---|
| `400` | Missing required field |
| `405` | Wrong HTTP method |
| `500` | SMTP send failed |

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `SMTP_HOST` | `smtp.gmail.com` | SMTP server host |
| `SMTP_PORT` | `587` | SMTP server port (STARTTLS) |
| `SMTP_USER` | _(required)_ | Gmail address used to send |
| `SMTP_PASS` | _(required)_ | Gmail App Password |
| `CONTACT_TO_EMAIL` | `vorawut.maggy@gmail.com` | Delivery address |
| `PORT` | `8080` | Port the Go server listens on |

---

## Email Template

The email is a dark-themed HTML template with:
- Orange branded header with "New Message Received"
- Sender name, reply-to email address
- Full message body
- Footer with timestamp and portfolio credit

Reply directly to the email — it automatically sets `Reply-To` to the visitor's address.
