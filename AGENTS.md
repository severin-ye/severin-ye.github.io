# 🤖 AI Agent Instructions

## Project Overview

Personal portfolio website for Ye Botao (AI Researcher) using Vite + Vanilla JavaScript with Apple-inspired glassmorphic design.

**Live Site**: https://severin-ye.github.io  
**Tech Stack**: Vite 7 + Vanilla JS + CSS Variables (no frameworks)

## 🚀 Essential Commands

```bash
./start.sh      # Start dev server (handles nvm, dependencies, opens http://localhost:5173)
./build.sh      # Build for production (output: ./dist)
npm run preview # Preview production build
```

See [RUN.md](RUN.md) for complete command reference.

## 📁 Project Structure

```
src/
  main.js       # App entry point - all HTML content via template strings
  style.css     # Complete styling system with CSS custom properties
  counter.js    # Vite template (unused - can be removed)
public/         # Static assets
.github/workflows/deploy.yml  # Auto-deploy to GitHub Pages on push to main
```

## 🎨 Design System

### Core Principle: Apple Glassmorphic Aesthetic

- **Glass Effect**: Use `.glass` class for frosted glass cards
- **Theme System**: Dark (default) + Light mode via CSS custom properties
- **No Framework**: Pure vanilla JavaScript - avoid introducing React/Vue/etc
- **Single Page App**: All content in `main.js` as HTML strings

### CSS Architecture

All theming controlled by CSS custom properties in `:root` and `[data-theme="light"]`:

```css
/* Key Variables */
--glass-bg: rgba(255, 255, 255, 0.03)    /* Glass background */
--glass-border: rgba(255, 255, 255, 0.08) /* Glass border */
--blur-amount: 40px                       /* Backdrop blur */

/* Accent Colors */
--accent-blue, --accent-purple, --accent-green, 
--accent-orange, --accent-pink, --accent-red
```

**When modifying styles**: Maintain glassmorphic consistency, use existing CSS variables, preserve theme switching functionality.

## 🛠️ Development Workflow

### Environment Setup
- **Node.js**: Version 22 (managed by nvm)
- **Always use**: `./start.sh` and `./build.sh` instead of direct npm commands
- These scripts handle nvm loading and dependency checks

### Code Conventions

1. **HTML Content**: Add/modify content in `main.js` template strings
2. **Styling**: Use CSS custom properties for colors, spacing, effects
3. **Theme Toggle**: Theme logic in `main.js` - uses localStorage + system preference
4. **JavaScript**: Keep vanilla - no build-time transpilation needed

### Adding New Sections

Follow existing pattern in `main.js`:
```javascript
<section id="new-section">
  <div class="section-header">
    <h2>🆕 Title</h2>
    <div class="line"></div>
  </div>
  <div class="bento-grid">
    <div class="bento-item glass">
      <!-- Content -->
    </div>
  </div>
</section>
```

## 🚢 Deployment

- **Automatic**: Pushes to `main` trigger GitHub Actions workflow
- **Process**: Build with Node 22 → Upload `dist/` → Deploy to GitHub Pages
- **Manual**: Just `git push` - no manual deployment needed

## ⚠️ Common Pitfalls

1. **Don't install frameworks**: This is intentionally framework-free
2. **Don't bypass scripts**: Use `./start.sh`, not `npm run dev` directly (nvm setup)
3. **Don't hardcode colors**: Use CSS custom properties for theme compatibility
4. **Don't break glass effect**: Maintain `backdrop-filter: blur()` and rgba colors
5. **Don't remove theme toggle**: Dark/light mode is a core feature

## 🎯 Project Philosophy

- **High Information Density**: Bento-style grid layout, compact sections
- **Performance First**: No dependencies, minimal JavaScript, optimized assets
- **Design Excellence**: Apple-quality glassmorphism, smooth animations
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 📝 Content Guidelines

This is a personal portfolio showcasing:
- AI research (Medical AI, NLP, LLMs)
- Technical projects and side projects
- Personal philosophy and learning journey
- Contact information and social links

**Tone**: Professional yet personal, humble but confident, technical but accessible.
