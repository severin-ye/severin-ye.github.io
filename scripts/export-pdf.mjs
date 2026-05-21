/**
 * PDF Portfolio Export — Document-First Design
 *
 * Design philosophy: a printed editorial profile, not a web page screenshot.
 * Pure typography. Single-column flow. No emojis. No CSS gimmicks.
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------------------------------------------------------------------------
// Data extraction (unchanged — reads i18n.js and projectLayout.js as-is)
// ---------------------------------------------------------------------------

function extractI18nData() {
  const src = fs.readFileSync(join(__dirname, '..', 'src', 'data', 'i18n.js'), 'utf-8');
  const m = src.match(/const translations = ({[\s\S]*?});\n/);
  if (!m) throw new Error('Failed to extract translations');
  return eval('(' + m[1] + ')');
}

function extractProjectData() {
  const src = fs.readFileSync(join(__dirname, '..', 'src', 'data', 'projectLayout.js'), 'utf-8');
  const m = src.match(/const projectData = ([\s\S]*?]);\n/);
  if (!m) throw new Error('Failed to extract projectData');
  return eval('(' + m[1] + ')');
}

// ---------------------------------------------------------------------------
// Content helpers
// ---------------------------------------------------------------------------

/** Strip leading emoji from a string like "📖 Digital Humanities" */
function stripEmoji(s) {
  return s.replace(/^[\p{Emoji_Presentation}\p{Emoji}\u200d\ufe0f]+\s*/u, '');
}

/** Strip all HTML tags — PDF uses plain text, no inline markup tricks */
function stripHtml(s) {
  return s.replace(/<[^>]+>/g, '');
}

// ---------------------------------------------------------------------------
// Document generator
// ---------------------------------------------------------------------------

function buildDocument(lang = 'zh') {
  const tr   = extractI18nData();
  const proj = extractProjectData();
  const t    = (k) => tr[lang][k] || k;
  const zh   = lang === 'zh';

  // ------- tag pills -------
  const tagsMarkup = (tags) => tags.map(tag => {
    const label = zh ? tag.label : (tag.labelEn || tag.label);
    const tone  = tag.tone ? ' t-' + tag.tone.split('-')[1] : '';
    return `<span class="pill${tone}">${label}</span>`;
  }).join('');

  // ------- project items -------
  const projectsMarkup = proj.map(p => {
    const cat  = stripEmoji(zh ? (p.categoryZh || p.category) : p.category);
    const title = zh ? (p.titleZh || p.title) : p.title;
    const desc  = zh ? (p.descriptionZh || p.description) : p.description;
    return `
      <div class="proj">
        <div class="proj-head">
          <span class="proj-cat">${cat}</span>
          <span class="proj-year">${p.year}</span>
        </div>
        <h4 class="proj-title">${title}</h4>
        <p class="proj-desc">${desc}</p>
        <div class="proj-tags">${tagsMarkup(p.tags)}</div>
      </div>`;
  }).join('\n');

  // ------- story items -------
  const stories = ['train','badminton','door'];
  const storiesMarkup = stories.map(k => `
    <div class="story">
      <h4 class="story-title">${t('stories.'+k+'.title')}</h4>
      <p class="story-body">${t('stories.'+k+'.desc')}</p>
      <div class="pull">${t('stories.'+k+'.highlight')}</div>
    </div>`).join('\n');

  // ------- skill tags -------
  const skillTagList = (arr) => arr.map(s => `<span class="pill">${s}</span>`).join('');
  const langPills = () => `<span class="pill t-blue">${zh?'中文 (母语)':'Chinese (Native)'}</span><span class="pill t-purple">${zh?'英语 (流利)':'English (Fluent)'}</span><span class="pill t-green">${zh?'韩语':'Korean'}</span>`;

  return `<!DOCTYPE html>
<html lang="${zh?'zh-CN':'en'}">
<head><meta charset="UTF-8"><title>Ye Botao</title>
<style>
  /* ============================================================
     DOCUMENT STYLES — editorial print, not web page
     ============================================================ */

  @page { size: A4; margin: 25mm 22mm; }

  :root {
    --c-text:   #111827;
    --c-sub:    #6b7280;
    --c-accent: #1d4ed8;
    --c-rule:   #e5e7eb;
    --c-bg:     #f3f4f6;
  }

  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: 'WenQuanYi Micro Hei','Noto Sans CJK SC','Source Han Sans SC',sans-serif;
    font-size:   10pt;
    line-height: 1.7;
    color:       var(--c-text);
    background:  #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ------ helpers ------ */
  .rule { border:none; border-top:1px solid var(--c-rule); margin:24px 0; }

  /* ============================================================
     COVER
     ============================================================ */
  .cover {
    padding:      60px 0;
    page-break-after: always;
  }
  .cover-label {
    font-size:9pt; letter-spacing:3px; text-transform:uppercase;
    color:var(--c-sub); margin-bottom:32px;
  }
  .cover-name {
    font-size:52pt; font-weight:800; line-height:1.05;
    letter-spacing:-2px; color:var(--c-text); margin-bottom:24px;
  }
  .cover-line {
    font-size:15pt; color:var(--c-sub); line-height:1.6; max-width:70%;
  }
  .cover-line b { color:var(--c-text); }
  .cover-stats {
    display:flex; gap:40px; margin-top:48px; padding-top:32px;
    border-top:2px solid var(--c-text);
  }
  .cover-stat-num {
    font-size:36pt; font-weight:800; color:var(--c-accent); display:block; line-height:1;
  }
  .cover-stat-lbl {
    font-size:8pt; color:var(--c-sub); text-transform:uppercase;
    letter-spacing:1px; margin-top:6px; display:block;
  }

  /* ============================================================
     SECTION HEADER
     ============================================================ */
  .sec {
    page-break-before: always;
    padding-top:8px;
  }
  .sec-num {
    font-size:8pt; letter-spacing:2px; text-transform:uppercase;
    color:var(--c-accent); display:block; margin-bottom:4px;
  }
  .sec-title {
    font-size:26pt; font-weight:800; letter-spacing:-0.5px;
    color:var(--c-text); padding-bottom:20px;
    border-bottom:2px solid var(--c-text); margin-bottom:28px;
  }

  /* ============================================================
     ABOUT
     ============================================================ */
  .ab-block {
    padding:18px 0; border-bottom:1px solid var(--c-rule);
    page-break-inside: avoid;
  }
  .ab-block:last-child { border-bottom:none; }
  .ab-label {
    font-size:8pt; letter-spacing:1.5px; text-transform:uppercase;
    color:var(--c-accent); margin-bottom:6px; display:block;
  }
  .ab-head {
    font-size:13pt; font-weight:700; margin-bottom:8px; color:var(--c-text);
  }
  .ab-body {
    font-size:9.5pt; color:var(--c-sub); line-height:1.8; max-width:90%;
  }
  .ab-pills { margin-top:10px; display:flex; flex-wrap:wrap; gap:5px; }
  .ab-quote {
    margin-top:28px; padding:24px 0;
    font-size:13pt; font-style:italic; color:var(--c-text); line-height:1.6;
  }
  .ab-author {
    display:block; margin-top:10px; font-size:9pt; color:var(--c-accent);
    font-style:normal; font-weight:700;
  }

  /* ============================================================
     PROJECTS
     ============================================================ */
  .proj {
    padding:20px 0; border-bottom:1px solid var(--c-rule);
    page-break-inside: avoid;
  }
  .proj:last-child { border-bottom:none; padding-bottom:0; }
  .proj-head {
    display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;
  }
  .proj-cat {
    font-size:8pt; letter-spacing:1px; text-transform:uppercase;
    color:var(--c-accent); font-weight:700;
  }
  .proj-year {
    font-size:8pt; color:#9ca3af;
  }
  .proj-title {
    font-size:12pt; font-weight:700; margin-bottom:6px; color:var(--c-text);
  }
  .proj-desc {
    font-size:9.5pt; color:var(--c-sub); line-height:1.8; margin-bottom:10px; max-width:92%;
  }
  .proj-tags { display:flex; flex-wrap:wrap; gap:5px; }

  /* ============================================================
     STORIES
     ============================================================ */
  .story {
    padding:20px 0; border-bottom:1px solid var(--c-rule);
  }
  .story:last-child { border-bottom:none; padding-bottom:0; }
  .story-title {
    font-size:12pt; font-weight:700; margin-bottom:10px; color:var(--c-text);
  }
  .story-body {
    font-size:9.5pt; color:var(--c-sub); line-height:1.9; margin-bottom:12px;
  }
  .pull {
    padding:12px 16px; background:var(--c-bg); border-left:3px solid var(--c-accent);
    font-size:9pt; color:var(--c-accent); font-style:italic; line-height:1.7;
  }

  /* ============================================================
     SKILLS
     ============================================================ */
  .sk-group {
    padding:16px 0; border-bottom:1px solid var(--c-rule);
    page-break-inside: avoid;
  }
  .sk-group:last-child { border-bottom:none; padding-bottom:0; }
  .sk-label {
    font-size:10pt; font-weight:700; margin-bottom:10px; color:var(--c-text);
  }
  .sk-pills { display:flex; flex-wrap:wrap; gap:5px; }

  /* ============================================================
     CONTACT
     ============================================================ */
  .ct-block {
    padding:32px 0; text-align:center; border-bottom:1px solid var(--c-rule);
  }
  .ct-block a { color:var(--c-accent); text-decoration:none; font-weight:600; }
  .ct-block p { font-size:10pt; margin-bottom:8px; color:var(--c-sub); }
  .ct-close {
    text-align:center; padding:32px 0;
  }
  .ct-close p { font-size:13pt; line-height:2; color:var(--c-text); }
  .ct-close .ct-accent { display:block; color:var(--c-accent); font-weight:700; }
  .ct-close .ct-small { font-size:9pt; color:var(--c-sub); margin-top:12px; }

  /* ============================================================
     PILLS / TAGS
     ============================================================ */
  .pill {
    display:inline-block; padding:2px 8px; font-size:7.5pt; font-weight:500;
    background:var(--c-bg); color:var(--c-sub); border-radius:3px;
  }
  .pill.t-blue   { background:#dbeafe; color:#1e40af; }
  .pill.t-purple { background:#ede9fe; color:#6b21a8; }
  .pill.t-green  { background:#dcfce7; color:#15803d; }
  .pill.t-orange { background:#ffedd5; color:#9a3412; }
  .pill.t-red    { background:#fee2e2; color:#991b1b; }
</style>
</head>
<body>

<!-- ============= COVER ============= -->
<div class="cover">
  <div class="cover-label">${t('hero.status')}</div>
  <h1 class="cover-name">Ye Botao</h1>
  <p class="cover-line">${stripHtml(t('hero.tagline1'))}</p>
  <p class="cover-line">${stripHtml(t('hero.tagline2'))}</p>
  <div class="cover-stats">
    <div><span class="cover-stat-num">3+</span><span class="cover-stat-lbl">${t('hero.stat1')}</span></div>
    <div><span class="cover-stat-num">5+</span><span class="cover-stat-lbl">${t('hero.stat2')}</span></div>
    <div><span class="cover-stat-num">&infin;</span><span class="cover-stat-lbl">${t('hero.stat3')}</span></div>
  </div>
</div>

<!-- ============= ABOUT ============= -->
<div class="sec">
  <span class="sec-num">01</span>
  <h2 class="sec-title">${t('about.title')}</h2>

  <div class="ab-block">
    <span class="ab-label">${t('about.focus.title')}</span>
    <p class="ab-body">${stripHtml(t('about.focus.desc'))}</p>
    <div class="ab-pills">
      <span class="pill t-blue">Medical AI</span>
      <span class="pill t-purple">NLP</span>
      <span class="pill t-green">LLM Alignment</span>
      <span class="pill t-orange">LoRA / QLoRA</span>
    </div>
  </div>

  <div class="ab-block">
    <span class="ab-label">${t('about.philosophy.title')}</span>
    <p class="ab-body">${stripHtml(t('about.philosophy.desc'))}</p>
  </div>

  <div class="ab-block">
    <span class="ab-label">${t('about.vision.title')}</span>
    <p class="ab-body">${stripHtml(t('about.vision.desc'))}</p>
  </div>

  <div class="ab-block">
    <span class="ab-label">${t('about.learning.title')}</span>
    <p class="ab-body">${t('about.learning.desc')}</p>
    <div class="ab-pills">
      <span class="pill">Hung-Yi Lee &middot; Deep Learning</span>
      <span class="pill">Andrew Ng &middot; ML</span>
      <span class="pill">Sam Altman &middot; CS183B</span>
      <span class="pill">Prompt Engineering</span>
      <span class="pill">Web Dev</span>
      <span class="pill">Blockchain</span>
      <span class="pill">Cross-platform Apps</span>
    </div>
  </div>

  <div class="ab-quote">
    ${t('about.quote')}
    <span class="ab-author">${t('about.quote.author')}</span>
  </div>
</div>

<!-- ============= PROJECTS ============= -->
<div class="sec">
  <span class="sec-num">02</span>
  <h2 class="sec-title">${t('projects.title')}</h2>
  ${projectsMarkup}
</div>

<!-- ============= STORIES ============= -->
<div class="sec">
  <span class="sec-num">03</span>
  <h2 class="sec-title">${t('stories.title')}</h2>
  ${storiesMarkup}
</div>

<!-- ============= SKILLS ============= -->
<div class="sec">
  <span class="sec-num">04</span>
  <h2 class="sec-title">${t('skills.title')}</h2>

  <div class="sk-group">
    <div class="sk-label">${t('skills.ai.title')}</div>
    <div class="sk-pills">${skillTagList(['LLMs','GraphRAG','LangChain','Multi-Agent','LoRA/QLoRA','NLP','GRPO','RAG','Prompt Eng','Fine-tuning','XAI','Bayesian Net','Security AI'])}</div>
  </div>
  <div class="sk-group">
    <div class="sk-label">${t('skills.dev.title')}</div>
    <div class="sk-pills">${skillTagList(['Python','JavaScript','Web Dev','Microservices','Desktop Apps','CI/CD'])}</div>
  </div>
  <div class="sk-group">
    <div class="sk-label">${t('skills.tools.title')}</div>
    <div class="sk-pills">${skillTagList(['PyTorch','TensorFlow','HuggingFace','MS-Swift','Ollama','LanceDB','Notion','Git','Linux','Docker'])}</div>
  </div>
  <div class="sk-group">
    <div class="sk-label">${t('skills.languages.title')}</div>
    <div class="sk-pills">${langPills()}</div>
  </div>
  <div class="sk-group">
    <div class="sk-label">${t('skills.soft.title')}</div>
    <div class="sk-pills">${skillTagList(['Leadership','Team Building','Project Management','Fast Learning','Initiative'])}</div>
  </div>
</div>

<!-- ============= CONTACT ============= -->
<div class="sec">
  <span class="sec-num">05</span>
  <h2 class="sec-title">${t('contact.title')}</h2>

  <div class="ct-block">
    <p>Email &nbsp; <a href="mailto:6severin9@gmail.com">6severin9@gmail.com</a></p>
    <p>GitHub &nbsp; <a href="https://github.com/severin-ye">github.com/severin-ye</a></p>
  </div>

  <div class="ct-close">
    <p>${stripHtml(t('contact.quote1'))}<br>
    <span class="ct-accent">${stripHtml(t('contact.quote2'))}</span></p>
    <p class="ct-small">${t('contact.quote3')}</p>
  </div>
</div>

</body></html>`;
}

// ---------------------------------------------------------------------------
// PDF generation
// ---------------------------------------------------------------------------

async function generatePDF(lang = 'zh') {
  console.log(`Generating PDF (${lang.toUpperCase()}) ...`);

  const html = buildDocument(lang);
  const htmlPath = join(__dirname, '..', 'output', 'portfolio-export.html');
  fs.writeFileSync(htmlPath, html, 'utf-8');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox','--font-render-hinting=none']
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluate(async () => { await document.fonts.ready; });

    const out = join(__dirname, '..', 'output', `portfolio-${lang}.pdf`);
    await page.pdf({
      path: out,
      format: 'A4',
      printBackground: true,
      margin: { top: '25mm', bottom: '25mm', left: '22mm', right: '22mm' },
      displayHeaderFooter: false,
    });

    const kb = (fs.statSync(out).size / 1024).toFixed(0);
    console.log(`Done: ${out}  (${kb} KB)`);
  } finally {
    await browser.close();
  }
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const lang = process.argv[2] || 'zh';
if (!['zh','en'].includes(lang)) {
  console.error('Usage: node export-pdf.mjs [zh|en]');
  process.exit(1);
}
generatePDF(lang).catch(e => { console.error(e.message); process.exit(1); });
