# Ye Botao — Personal Portfolio

AI Researcher & Builder exploring Medical AI, NLP, and LLMs.

**Live**: [severin-ye.github.io](https://severin-ye.github.io)

## Tech Stack

Vite 7 + Vanilla JS + CSS Variables. Zero frameworks, zero runtime dependencies.

## Quick Start

```bash
bash scripts/start.sh    # Dev server at localhost:5173
bash scripts/build.sh    # Production build → dist/
```

## Commands

| Action | Command |
|--------|---------|
| Dev server | `bash scripts/start.sh` |
| Production build | `bash scripts/build.sh` |
| Preview build | `npm run preview` |
| Export PDF (ZH) | `bash scripts/export-pdf.mjs zh` |
| Export PDF (EN) | `bash scripts/export-pdf.mjs en` |
| Run tests | `node src/data/projectLayout.test.js` |

## Structure

```
src/                   Source code
  main.js              App entry point & HTML content
  style.css            Styling system
  data/                i18n translations & project data
scripts/               Dev / build / export tools
public/papers/         Research PDFs
docs/                  Project documentation
output/                Generated PDFs (gitignored)
```

## Features

- Apple-inspired glassmorphic design with dark/light themes
- Bilingual (Chinese / English) with smooth language switching
- Bento-grid layout with scroll animations
- Parallax background orbs
- PDF portfolio export (editorial-style, no web chrome)
- Auto-deploy to GitHub Pages via Actions

## License

MIT
