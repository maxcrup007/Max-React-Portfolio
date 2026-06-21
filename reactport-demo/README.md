# Frontend — React + Vite

The portfolio website built with **React 18**, **Vite 5**, and **CSS Modules**.
Theme: black and orange bento-grid layout.

---

## Requirements

- [Node.js](https://nodejs.org/) 18+
- npm (comes with Node)

---

## How to Start

```powershell
cd reactport-demo
npm install        # install dependencies (first time only)
npm run dev        # start dev server
```

Open **http://localhost:5173/React-Portfolio/** in your browser.
Changes you save reload the page automatically (hot reload).

---

## How to Stop

Press `Ctrl + C` in the terminal running `npm run dev`.

---

## How to Edit

### Page sections

Each section has its own folder inside `src/components/`:

| Folder | What it controls |
|---|---|
| `Navbar/` | Navigation bar, logo, Download CV button |
| `Hero/` | Bento grid intro — name, photo, bio, social links, CV download |
| `Skills/` | Skill icons row |
| `Services/` | Three service cards with tool lists |
| `Portfolio/` | Project image grid |
| `Number/` | Animated stats (projects, clients, years) |
| `Stakeholder/` | Stakeholder / testimonial cards |
| `Contact/` | Contact form (sends via Go backend) |
| `Footer/` | Copyright bar |

Each folder has:
- `ComponentName.jsx` — content, text, icons, links
- `ComponentName.module.css` — styles for that section only

### Page order

Open `src/App.jsx` and reorder, add, or remove `<Component />` lines.

### Color theme

All theme colors are CSS variables in `src/index.css`:

```css
--color-bg-page       /* page background (black) */
--color-bg-card       /* card background */
--color-orange        /* primary orange accent */
--color-orange-light  /* hover orange */
--color-text-light    /* primary text */
--color-text-muted    /* secondary/label text */
```

Change any value to update the color across the whole site.

### CV file

Replace `public/Max_Resume.pdf` with your updated PDF.
If you rename the file, also update the `href` in:
- `src/components/Navbar/Navbar.jsx`
- `src/components/Hero/Hero.jsx`

---

## Other Commands

| Command | What it does |
|---|---|
| `npm run build` | Build production-ready files into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code for linting errors |
| `npm run deploy` | Build and publish to GitHub Pages |

---

## Deploy to GitHub Pages

```powershell
npm run deploy
```

Live site: **https://maxcrup007.github.io/React-Portfolio/**

> The contact form needs the Go backend running to actually send emails.
> On GitHub Pages only the static site is hosted — you must deploy the Go server separately.
