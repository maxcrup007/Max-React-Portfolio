# Portfolio Contact API (Go)

A tiny Go REST API that receives the portfolio contact form submission and
emails it to `vorawut.maggy@gmail.com`.

## Prerequisites

- [Go](https://go.dev/dl/) 1.21+
- A Gmail account with an [App Password](https://myaccount.google.com/apppasswords)
  (regular Gmail passwords don't work with SMTP)

## Setup

1. Copy the example env file and fill in your real values:
   ```powershell
   cd server
   copy .env.example .env
   ```
2. Edit `.env`:
   - `SMTP_USER` — the Gmail address that will send the email
   - `SMTP_PASS` — the 16-character Gmail App Password
   - `CONTACT_TO_EMAIL` — where messages are delivered (defaults to `vorawut.maggy@gmail.com`)

## Run

PowerShell loads `.env` manually since Go doesn't read it automatically:

```powershell
cd server
Get-Content .env | ForEach-Object {
    if ($_ -match '^\s*([^#=]+)=(.*)$') {
        Set-Item -Path "env:$($matches[1].Trim())" -Value $matches[2].Trim()
    }
}
go run main.go
```

The server starts on `http://localhost:8080`.

## API

`POST /api/contact`

```json
{
  "firstName": "Max",
  "lastName": "Autumn",
  "email": "visitor@example.com",
  "message": "Hello!"
}
```

Response on success:

```json
{ "status": "ok" }
```

## Frontend Configuration

The React app posts to `VITE_CONTACT_API_URL` (defaults to `http://localhost:8080/api/contact`).
To point the frontend at a deployed server, create `reactport-demo/.env`:

```
VITE_CONTACT_API_URL=https://your-deployed-server.example.com/api/contact
```
