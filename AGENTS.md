# Agent Instructions

## Project Overview

Personal portfolio website for Ye Botao (AI Researcher). Vite + Vanilla JavaScript, Apple-inspired glassmorphic design.

**Live Site**: https://severin-ye.github.io
**Tech Stack**: Vite 7 + Vanilla JS + CSS Variables (zero frameworks)

## Commands

```bash
bash scripts/start.sh        # Start dev server (nvm + deps + http://localhost:5173)
bash scripts/build.sh        # Build for production (output: dist/)
node 简历相关/scripts/export-cv.mjs      # Generate CV PDF (Botao_Ye_CV.pdf)
node 简历相关/scripts/export-pdf.mjs zh  # Generate Chinese PDF portfolio
node 简历相关/scripts/export-pdf.mjs en  # Generate English PDF portfolio
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
简历相关/
  scripts/
    export-cv.mjs        # CV PDF generator (→ Botao_Ye_CV.pdf)
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
- Orb gradient background with parallax on mouse move

### CSS Variables (key ones)

```css
--glass-bg, --glass-border, --glass-highlight
--accent-blue, --accent-purple, --accent-green, --accent-orange, --accent-pink, --accent-red
--text-primary, --text-secondary, --text-tertiary
--blur-amount: 40px
```

When editing styles: use existing variables, preserve dark/light theme, maintain glass consistency.

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

## AI 环境清单

`Plugins, MCP, Skills.md` 记录了当前已安装的所有插件、MCP 服务器和代理技能。

- 安装/卸载任何组件后必须同步更新该文件
- 需要了解环境能力时直接读取该文件
