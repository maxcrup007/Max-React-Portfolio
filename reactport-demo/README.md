# Vorawut's Portfolio (React + Vite)

A personal portfolio website built with React and Vite.

## Project Structure

```
reactport-demo/
├── public/              # Static assets (CV, images, favicon)
├── src/
│   ├── components/      # One folder per section (Navbar, Hero, Skills, ...)
│   │   └── ComponentName/
│   │       ├── ComponentName.jsx
│   │       └── ComponentName.module.css
│   ├── App.jsx          # Combines all sections into the page
│   ├── index.css        # Global styles + theme color variables
│   └── main.jsx         # App entry point
├── index.html
├── vite.config.js
└── package.json
```

## How to Start the Project

1. Open a terminal in this folder (`reactport-demo/`).
2. Install dependencies (only needed the first time, or after pulling changes that update `package.json`):
   ```powershell
   npm install
   ```
3. Start the development server:
   ```powershell
   npm run dev
   ```
4. Open the printed local URL in your browser (usually `http://localhost:5173/`).
   - Any changes you save to the code will automatically reload in the browser (hot reload).

## How to Stop the Project

- In the terminal running the dev server, press `Ctrl + C`.

## How to Edit the Project

- Each section of the page (Navbar, Hero, Skills, Services, Portfolio, Number, Stakeholder, Contact, Footer) lives in its own folder under `src/components/`.
  - The `.jsx` file controls the content/structure (text, images, icons, links).
  - The `.module.css` file controls the styling for that section only.
- The page order is defined in `src/App.jsx` — reorder, add, or remove `<Component />` lines to change which sections appear and in what order.
- Global colors (the black/orange theme) are defined as CSS variables at the top of `src/index.css`:
  ```css
  --color-bg-dark
  --color-orange
  --color-orange-light
  --color-text-light
  ```
  Change these values to update the color scheme across the whole site.
- To update your CV, replace `public/Max_Resume.pdf` with your new file (keep the same filename, or update the `href` in `Navbar.jsx` and `Hero.jsx` if you rename it).
- After editing, check the browser to confirm the change looks correct (dev server must be running).

## Other Useful Commands

| Command | Purpose |
|---|---|
| `npm run build` | Build the production-ready site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code for linting errors |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch (GitHub Pages) |

## Deploying Updates

1. Make and save your edits.
2. Commit your changes with git as usual.
3. Run:
   ```powershell
   npm run deploy
   ```
4. The live site at `https://maxcrup007.github.io/React-Portfolio/` will update with the new build.
