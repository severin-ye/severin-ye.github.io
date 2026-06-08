# Agent Instructions

## Project Overview

Personal portfolio website for Ye Botao (AI Researcher). Vite + Vanilla JavaScript, Apple-inspired glassmorphic design.

**Live Site**: https://severin-ye.github.io
**Tech Stack**: Vite 7 + Vanilla JS + CSS Variables (zero frameworks)

## Commands

```bash
bash scripts/start.sh        # Start dev server (nvm + deps + http://localhost:5173)
bash scripts/build.sh        # Build for production (output: dist/)
bash scripts/export-pdf.mjs zh  # Generate Chinese PDF portfolio
bash scripts/export-pdf.mjs en  # Generate English PDF portfolio
npm run preview              # Preview production build locally
```

## Project Structure

```
src/
  main.js              # App entry — all HTML content via template strings
  style.css            # Styling system with CSS custom properties
  data/
    i18n.js            # Translations (zh / en)
    projectLayout.js   # Project data + render logic
    projectLayout.test.js
scripts/
  start.sh             # Dev server launcher
  build.sh             # Production build
  export-pdf.mjs       # PDF portfolio generator (reads src/data/)
public/
  papers/              # Research papers (PDF)
.github/workflows/
  deploy.yml           # Auto-deploy to GitHub Pages on push to main
output/                # Generated PDFs (gitignored)
personal/              # Personal documents (gitignored)
docs/
  AGENTS.md            # This file
  RUN.md               # 中文运行指南
```

## Design System

### Core: Glassmorphic Aesthetic

- `.glass` class for frosted glass cards (`backdrop-filter: blur()`)
- Dark (default) + Light mode via CSS custom properties
- Theme toggle in top-right corner, persists to localStorage
- Orb gradient background with parallax on mouse move (gsap.quickTo, duration: 0 for instant follow)

### Design Philosophy

**Dark Mode**: Deep space aesthetic. Near-black backgrounds (`#0a0a0f`) with subtle glass reflections. High contrast white text. Colored orbs provide ambient glow.

**Light Mode**: Warm ivory aesthetic, inspired by Anthropic/Claude's design language. Key principles:
- Background uses warm ivory (`#F7F3EE`) and cream (`#EDE8E0`), never pure white
- Glass cards are white semi-transparent (`rgba(255,255,255,0.65)`) to "float" above the warm background
- Soft box-shadow (`--glass-shadow`) creates depth without harsh edges
- Text contrast is slightly reduced (0.87/0.56/0.38) for comfortable reading
- Selection color uses Claude's signature terracotta (`rgba(204,120,92,0.35)`)
- Orb colors are desaturated and lowered opacity to avoid visual noise

### CSS Variables (key ones)

```css
/* Glass system */
--glass-bg, --glass-border, --glass-highlight, --glass-shadow
--blur-amount: 40px

/* Backgrounds */
--bg-primary, --bg-secondary

/* Text */
--text-primary, --text-secondary, --text-tertiary

/* Accents */
--accent-blue, --accent-purple, --accent-green, --accent-orange, --accent-pink, --accent-red

/* Orbs */
--orb-purple, --orb-blue, --orb-green, --orb-opacity
```

When editing styles: use existing variables, preserve dark/light theme, maintain glass consistency.

### Light Mode Color Reference

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-primary` | `#F7F3EE` | Page background, warm ivory |
| `--bg-secondary` | `#EDE8E0` | Section backgrounds, deeper cream |
| `--glass-bg` | `rgba(255,255,255,0.65)` | Card fill, white over ivory |
| `--glass-shadow` | `0 8px 32px rgba(0,0,0,0.06)` | Card depth |
| `--glass-border` | `rgba(0,0,0,0.08)` | Subtle card edges |
| `::selection` | `rgba(204,120,92,0.35)` | Terracotta text selection |

## Code Conventions

1. **HTML content** lives in `src/main.js` template strings
2. **Styling** in `src/style.css`, all colors/spacing via CSS variables
3. **i18n** data in `src/data/i18n.js`, project data in `src/data/projectLayout.js`
4. **Theme toggle** in `src/main.js` — localStorage + system preference fallback
5. **Vanilla JS only** — no frameworks, no transpilation

### Adding a Section

```javascript
<section id="new-section">
  <div class="section-header">
    <h2>Title</h2>
    <div class="line"></div>
  </div>
  <div class="bento-grid">
    <div class="bento-item glass span-6">
      <!-- Content -->
    </div>
  </div>
</section>
```

Use `data-i18n` attributes for translatable text.

## Deployment

- Push to `main` → GitHub Actions builds with Node 22 → deploys `dist/` to GitHub Pages
- No manual steps needed after push

## Common Pitfalls

1. Don't add frameworks — this is intentionally vanilla
2. Use `bash scripts/start.sh`, not bare `npm run dev` (nvm setup required)
3. Use CSS variables for colors, never hardcode hex values
4. Keep `backdrop-filter: blur()` for glass effect
5. Dark/light toggle is a core feature, don't remove
6. `output/` and `personal/` are gitignored — don't commit generated PDFs or personal docs
7. Light mode uses warm ivory tones — never use pure white (`#fff`) or cool grays (`#f5f5f7`) for backgrounds
8. When starting vite programmatically, use detached process (`Start-Process -PassThru`) to avoid timeout killing the server
