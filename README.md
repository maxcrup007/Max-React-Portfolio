# Vorawut's Portfolio

A personal portfolio website built with **React + Vite** (frontend) and a **Go REST API** (backend) that delivers contact form submissions to email via Gmail SMTP.

```
React Portfolio/
├── reactport-demo/   → Frontend (React + Vite)
└── server/           → Backend (Go REST API + Email)
```

---

## Quick Start

You need **two terminals** running at the same time — one for the frontend, one for the backend.

### Terminal 1 — Frontend

```powershell
cd reactport-demo
npm install        # first time only
npm run dev
```

Open **http://localhost:5173/React-Portfolio/** in your browser.

### Terminal 2 — Backend (Go server)

```powershell
cd server
copy .env.example .env        # first time only — then fill in credentials
```

Load `.env` and run:

```powershell
Get-Content .env | ForEach-Object {
    if ($_ -match '^\s*([^#=]+)=(.*)$') {
        Set-Item "env:$($matches[1].Trim())" $matches[2].Trim()
    }
}
go run main.go
```

---

## How to Stop

- **Frontend** — press `Ctrl + C` in Terminal 1
- **Backend** — press `Ctrl + C` in Terminal 2

---

## Deploying

```powershell
cd reactport-demo
npm run deploy     # builds and pushes to GitHub Pages
```

Live URL: **https://maxcrup007.github.io/React-Portfolio/**

---

## More Details

| Topic | Guide |
|---|---|
| Frontend (React) | [reactport-demo/README.md](reactport-demo/README.md) |
| Backend (Go API) | [server/README.md](server/README.md) |
