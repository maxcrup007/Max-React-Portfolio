# Deployment Guide — Portfolio Web Application

## Two Deployment Cases

| Case | Option | Contact Form | Cost | Difficulty |
|------|--------|-------------|------|-----------|
| **Case 1** | GitHub Pages (Frontend only) | ❌ No | Free | ⭐ Easy |
| **Case 2** | Vercel + Railway (Full stack) | ✅ Yes | Free tier | ⭐⭐ Medium |

---

---

# CASE 1 — GitHub Pages (Frontend Only)

> Contact form UI shows but emails will NOT be sent.
> Everything else (Skills, Portfolio, Certificates pages) works perfectly.

## Prerequisites

- GitHub account
- Project pushed to a GitHub repository (`git push`)

---

## Step 1: Check `vite.config.js`

Make sure the `base` is set to your repository name:

```js
// reactport-demo/vite.config.js
export default defineConfig({
  base: '/React-Portfolio/',   // ← must match your GitHub repo name exactly
  plugins: [react()],
})
```

---

## Step 2: Check `package.json` has the deploy script

Open `reactport-demo/package.json` and confirm these lines exist:

```json
"homepage": "https://maxcrup007.github.io/React-Portfolio",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

If `gh-pages` is not installed, run:
```
cd reactport-demo
npm install gh-pages --save-dev
```

---

## Step 3: Push your latest code to GitHub

```
git add .
git commit -m "ready for deployment"
git push origin max27
```

> Push to your working branch first. GitHub Pages will serve from `gh-pages` branch (created automatically by the deploy command).

---

## Step 4: Run the deploy command

```
cd reactport-demo
npm run deploy
```

This will:
1. Build the React app (`npm run build` → creates `dist/` folder)
2. Push the `dist/` folder to the `gh-pages` branch on GitHub automatically

Wait about **1–2 minutes** for GitHub to publish it.

---

## Step 5: Enable GitHub Pages on your repository

1. Go to your GitHub repository → **Settings** tab
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Branch"** → select `gh-pages` → folder `/root`
4. Click **Save**

---

## Step 6: Get your live URL

Your portfolio will be live at:
```
https://maxcrup007.github.io/React-Portfolio/
```

---

## Updating GitHub Pages later

Every time you make changes, just run again:
```
cd reactport-demo
npm run deploy
```

No other steps needed — it rebuilds and re-publishes automatically.

---

## Troubleshooting — GitHub Pages

| Problem | Cause | Fix |
|---------|-------|-----|
| Blank page | Wrong `base` in vite.config.js | Set `base: '/React-Portfolio/'` |
| Page not found (404) | HashRouter not set | Already fixed — your app uses HashRouter |
| Old version showing | GitHub cache | Wait 2–3 minutes and hard refresh (Ctrl+Shift+R) |
| Images not loading | Wrong image path | Use absolute paths starting with `/React-Portfolio/images/...` or ibb.co links |
| `gh-pages` not found | Package not installed | Run `npm install gh-pages --save-dev` |

---

## Case 1 Summary Checklist

- [ ] `vite.config.js` has correct `base` set to `/React-Portfolio/`
- [ ] `package.json` has `homepage` and `deploy` script
- [ ] Code pushed to GitHub
- [ ] `npm run deploy` ran successfully
- [ ] GitHub Pages enabled on `gh-pages` branch in repo Settings
- [ ] Live URL opens correctly in browser

---

---

# CASE 2 — Vercel + Railway (Frontend + Backend)

> Full deployment — contact form sends real emails.
> Both services connect to GitHub and **auto-deploy on every `git push`**.

## Overview

| Part | Service | URL Example |
|------|---------|-------------|
| React UI | Vercel | `https://your-portfolio.vercel.app` |
| Go API Server | Railway | `https://your-api.railway.app` |

## Prerequisites

- GitHub account with project pushed
- Gmail App Password (16 characters)
  - Go to: `myaccount.google.com` → Security → 2-Step Verification → App Passwords
  - Select app: **"Mail"** → Select device: **"Other"** → name it "Portfolio"
  - Copy the 16-character password shown (you only see it once)

---

## PART A — Deploy Go Backend on Railway

### A1: Prepare the server folder

Make sure these files exist in `server/`:

```
server/
  main.go          ← your Go server code
  go.mod           ← Go module file
  .env             ← NEVER commit this (already in .gitignore)
  .env.example     ← commit this as reference for teammates
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

### A2: Create a Railway account

1. Go to **railway.app**
2. Click **"Start a New Project"**
3. Click **"Sign in with GitHub"**
4. Authorize Railway to access your repositories

### A3: Create a new service from GitHub

1. Inside Railway dashboard → click **"+ New"** → **"GitHub Repo"**
2. Select your portfolio repository
3. Railway detects Go automatically and starts building

### A4: Set the Root Directory

Railway must know Go lives in `server/`, not the root:

1. Click your service → **Settings** tab
2. Find **"Source"** section → **Root Directory** → type `server`
3. Click **Save** → Railway will rebuild

### A5: Add environment variables

1. Click your service → **Variables** tab
2. Click **"+ New Variable"** and add each one:

| Variable | Value |
|----------|-------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | your Gmail address |
| `SMTP_PASS` | your 16-char Gmail App Password |
| `MAIL_TO` | `vorawut.maggy@gmail.com` |
| `PORT` | `8080` |

Railway redeploys automatically after saving.

### A6: Generate a public domain

1. Click your service → **Settings** tab
2. Scroll to **"Networking"** → click **"Generate Domain"**
3. Copy the URL: `https://your-app-name.railway.app`

### A7: Test the backend is running

Open in a browser:
```
https://your-app-name.railway.app/api/contact
```
If you see any response (even an error JSON), the server is alive.

---

## PART B — Deploy React Frontend on Vercel

### B1: Create a Vercel account

1. Go to **vercel.com**
2. Click **"Sign Up"**
3. Click **"Continue with GitHub"**

### B2: Import your project

1. Click **"Add New Project"**
2. Find your portfolio repo → click **"Import"**

### B3: Configure build settings

On the import screen, set:

| Setting | Value |
|---------|-------|
| Framework Preset | `Vite` |
| Root Directory | `reactport-demo` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

> Click **"Edit"** next to Root Directory if it shows the wrong folder.

### B4: Add environment variable

Still on the import screen, expand **"Environment Variables"**:

| Name | Value |
|------|-------|
| `VITE_CONTACT_API_URL` | `https://your-app-name.railway.app/api/contact` |

Replace `your-app-name` with your actual Railway URL from Step A6.
Set environment to **Production**.

### B5: Deploy

1. Click **"Deploy"**
2. Wait 1–2 minutes
3. Your live URL: `https://your-portfolio.vercel.app`

---

## PART C — Test Everything

### Test the frontend
1. Open your Vercel URL
2. Check every page: Home → Skills → Certificates → Contact → Project detail pages
3. Check photo slideshow on Hero section
4. Click a skill icon → verify it opens the skill detail page

### Test the contact form
1. Go to `/contact` page
2. Fill in the form and click **Submit**
3. Check your Gmail inbox (`vorawut.maggy@gmail.com`)
4. If it fails → check Railway: service → **Logs** tab for error messages

---

## PART D — Auto-Deploy After Setup

Once set up, both services watch your GitHub repo.

Every time you update code:
```
git add .
git commit -m "update description"
git push
```

| Service | Auto-rebuilds in |
|---------|-----------------|
| Vercel | ~1 minute |
| Railway | ~30 seconds |

No manual steps after initial setup.

---

## Troubleshooting — Vercel + Railway

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Contact form error | Go server not running | Check Railway Logs tab |
| Contact form error | Wrong API URL | Verify `VITE_CONTACT_API_URL` in Vercel → Settings → Environment Variables |
| Email not arriving | Wrong App Password | Generate a new one from Google Account |
| Email not arriving | Gmail blocked the app | Enable "Less secure app access" or use App Password |
| Railway build fails | Wrong root directory | Set Root Directory to `server` in Railway Settings |
| Vercel build fails | Wrong root directory | Set Root Directory to `reactport-demo` in Vercel Settings |
| Page not found on refresh | Routing issue | Already fixed — HashRouter handles this |
| Images broken | ibb.co link expired | Move images to `public/images/` folder and update paths |

---

## Case 2 Summary Checklist

**Railway (Backend):**
- [ ] Gmail App Password created (16 characters)
- [ ] Railway account created and connected to GitHub
- [ ] Root Directory set to `server`
- [ ] All 6 environment variables added
- [ ] Railway domain generated and working

**Vercel (Frontend):**
- [ ] Vercel account created and connected to GitHub
- [ ] Root Directory set to `reactport-demo`
- [ ] `VITE_CONTACT_API_URL` environment variable added with Railway URL
- [ ] Deploy successful

**Testing:**
- [ ] All pages load correctly on Vercel URL
- [ ] Contact form sends email successfully
- [ ] Project detail pages open from portfolio cards
- [ ] Skill detail pages open from skills grid
