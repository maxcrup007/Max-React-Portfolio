# Deployment Guide: Vercel (Frontend) + Railway (Backend)

## Overview

| Part | Service | Cost | URL Example |
|------|---------|------|-------------|
| React UI | Vercel | Free | `https://your-portfolio.vercel.app` |
| Go API | Railway | Free tier | `https://your-api.railway.app` |

Both services connect to your GitHub repository and **auto-deploy every time you push code**.

---

## Prerequisites

- GitHub account
- Your project pushed to a GitHub repository
- Gmail App Password (16 characters) — for the Go backend to send emails
  - Get one at: `myaccount.google.com` → Security → 2-Step Verification → App Passwords

---

## Part 1 — Deploy the Go Backend on Railway

### Step 1: Prepare the Go server

Make sure `server/` has these files:

```
server/
  main.go
  .env          ← never commit this (already in .gitignore)
  .env.example  ← commit this as a reference
```

Create `server/.env.example` if it does not exist:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
MAIL_TO=your-email@gmail.com
PORT=8080
```

### Step 2: Create a Railway account

1. Go to **railway.app**
2. Click **"Start a New Project"**
3. Sign in with your GitHub account

### Step 3: Deploy the Go server

1. Click **"Deploy from GitHub repo"**
2. Select your portfolio repository
3. Railway will detect Go automatically

### Step 4: Set the Root Directory

Railway needs to know the server is inside the `server/` folder:

1. Go to your service → **Settings** tab
2. Under **"Source"** → set **Root Directory** to `server`
3. Click **Save**

### Step 5: Add environment variables

1. Go to your service → **Variables** tab
2. Add each variable one by one:

| Variable | Value |
|----------|-------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | your Gmail address |
| `SMTP_PASS` | your 16-char Gmail App Password |
| `MAIL_TO` | `vorawut.maggy@gmail.com` |
| `PORT` | `8080` |

3. Railway will automatically redeploy after saving variables

### Step 6: Get your Railway public URL

1. Go to your service → **Settings** tab
2. Under **"Networking"** → click **"Generate Domain"**
3. Copy the URL — it looks like `https://your-app-name.railway.app`
4. Test it: open `https://your-app-name.railway.app/api/contact` in a browser — you should see a response (even an error message means the server is running)

---

## Part 2 — Deploy the React Frontend on Vercel

### Step 1: Set the API URL environment variable locally

In `reactport-demo/`, create a `.env.production` file (if it does not exist):

```
VITE_CONTACT_API_URL=https://your-app-name.railway.app/api/contact
```

Replace `your-app-name` with your actual Railway URL from Part 1 Step 6.

> Do NOT commit `.env.production` if it contains secrets. For Vercel, you set this as an environment variable in the dashboard instead (see Step 5).

### Step 2: Create a Vercel account

1. Go to **vercel.com**
2. Click **"Sign Up"**
3. Sign in with your GitHub account

### Step 3: Import your project

1. Click **"Add New Project"**
2. Click **"Import"** next to your portfolio GitHub repository
3. Vercel will detect it as a Vite/React project automatically

### Step 4: Configure the build settings

Vercel should auto-detect these, but verify:

| Setting | Value |
|---------|-------|
| Framework Preset | `Vite` |
| Root Directory | `reactport-demo` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

### Step 5: Add environment variable in Vercel

1. On the import page, expand **"Environment Variables"**
2. Add:

| Name | Value |
|------|-------|
| `VITE_CONTACT_API_URL` | `https://your-app-name.railway.app/api/contact` |

3. Make sure the environment is set to **Production** (and optionally Preview)

### Step 6: Deploy

1. Click **"Deploy"**
2. Wait 1–2 minutes for the build to complete
3. Vercel gives you a public URL: `https://your-portfolio.vercel.app`

---

## Part 3 — Test Everything

### Test the frontend
1. Open your Vercel URL in a browser
2. Check all pages load: Home, Skills, Certificates, Contact
3. Check the photo slideshow works on the Hero section
4. Click portfolio cards and verify detail pages open

### Test the contact form
1. Go to the Contact page
2. Fill in the form and click Submit
3. Check your Gmail inbox (`vorawut.maggy@gmail.com`) for the message
4. If it fails, check Railway logs: service → **Logs** tab

---

## Part 4 — Auto-Deploy on Every Push (Already Included)

Both Vercel and Railway watch your GitHub repository.

Every time you run:
```
git add .
git commit -m "your message"
git push
```

- **Vercel** rebuilds the React frontend automatically (~1 min)
- **Railway** restarts the Go server automatically (~30 sec)

No manual steps needed after the initial setup.

---

## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Contact form shows error | Go server not running or wrong URL | Check Railway logs, verify `VITE_CONTACT_API_URL` |
| Page not found on refresh | Router config | Already handled — HashRouter is used |
| Images not loading | ibb.co links expired or broken | Re-upload images to ibb.co and update `projects.js` / `certificates.js` |
| Railway build fails | Wrong root directory | Set Root Directory to `server` in Railway settings |
| Vercel build fails | Wrong root directory | Set Root Directory to `reactport-demo` in Vercel settings |
| Email not received | Wrong App Password | Generate a new App Password from Google Account settings |

---

## Summary Checklist

- [ ] Gmail App Password created
- [ ] Go server root directory set to `server` in Railway
- [ ] All 6 environment variables added in Railway
- [ ] Railway domain generated and copied
- [ ] Vercel root directory set to `reactport-demo`
- [ ] `VITE_CONTACT_API_URL` added in Vercel environment variables
- [ ] Vercel deployment successful
- [ ] Contact form tested and email received
