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
  const src = fs.readFileSync(join(__dirname, '..', '..', 'src', 'data', 'i18n.js'), 'utf-8');
  const m = src.match(/const translations = ({[\s\S]*?});\n/);
  if (!m) throw new Error('Failed to extract translations');
  return eval('(' + m[1] + ')');
}

function extractProjectData() {
  const src = fs.readFileSync(join(__dirname, '..', '..', 'src', 'data', 'projectLayout.js'), 'utf-8');
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
// Print-optimised short-form content — separate from website i18n/projects
// ---------------------------------------------------------------------------

function getPrintContent(lang) {
  const zh = lang === 'zh';
  return {
    hero: {
      subline: zh ? 'AI 研究者 & 建造者' : 'AI Researcher & Builder',
    },
    sections: zh
      ? { about:'关于', projects:'项目', stories:'故事', skills:'技能', contact:'联系' }
      : { about:'About', projects:'Projects', stories:'Stories', skills:'Skills', contact:'Contact' },

    about: {
      flow: zh
        ? '当前聚焦医学文本幻觉检测——构建让AI在医疗领域更可信的系统。我相信复利效应：在增长呈指数级的地方投入时间。真正的韧性不是依赖规则，而是理解规则背后的逻辑。从高中起立志创业，最看重创造的自由——踏入未知、构建尚不存在之物的勇气。'
        : 'Currently focused on medical text hallucination detection — building systems that make AI trustworthy in healthcare. I believe in the compounding effect: invest time where growth becomes exponential. True resilience isn\'t dependence on rules — it\'s understanding their logic. Aspiring entrepreneur since high school. I value the freedom to create above all else.',
    },

    projectDescs: [
      zh
        ? '多智能体医学LLM幻觉检测平台。GraphRAG知识图谱 + Qwen + MS-Swift，46,998条MIMIC-IV病历。证据驱动的受控错误合成与修正。'
        : 'Multi-agent hallucination detection for medical LLMs. GraphRAG + Qwen + MS-Swift, 46,998 MIMIC-IV records. Evidence-driven error synthesis and correction.',
      zh
        ? '将小说转化为结构化因果事件图谱。4,700个事件，3,200条因果链。Neo4j + CSV + JSON-LD输出，支持量化文学分析。'
        : 'Novels into structured causal event graphs. 4,700 events, 3,200 causal links. Neo4j + CSV + JSON-LD output for quantitative literary analysis.',
      zh
        ? '四层排名框架（估值/盈利/安全/成长）为美股、港股与加密资产生成结构化投资报告。F-Score拆解与涨跌情景分析。'
        : 'Four-layer ranking framework (valuation/profitability/safety/growth) generates structured reports for US stocks, HK stocks, and crypto. F-Score breakdown and scenario analysis.',
      zh
        ? '将产品文本、图片与用户评论转化为有证据支撑的VOC报告。声明级引用，可审计多模态客户洞察。'
        : 'Product text, images, and reviews into evidence-backed VOC reports. Claim-level citations, auditable multimodal customer insights.',
      zh
        ? 'LangChain多智能体安全防御系统。7个Agent双层防御，12种越狱攻击测试。交互式流图与批量对比工具。'
        : 'LangChain multi-agent security defense. 7 agents, dual-layer defense, 12 jailbreak attacks. Interactive flow visualization and batch comparison.',
      zh
        ? 'CNN-LSTM-Attention并行架构，较串行模型提升34.84%。贝叶斯网络因果解释（余弦相似度0.999+），含可视化与节能建议。'
        : 'CNN-LSTM-Attention parallel architecture, 34.84% improvement over serial. Bayesian network causal explanations (0.999+ cosine similarity). Visualization and energy-saving recommendations.',
      zh
        ? 'LangChain + Qwen多模态饮食分析。餐食图像识别、健康评分、12个协作工具编排，个性化推荐。'
        : 'LangChain + Qwen multimodal nutrition analysis. Meal image recognition, health scoring, 12 collaborative tools, personalized recommendations.',
      zh
        ? '首份商业合同。Windows桌面端医学RAG审校工具，GPT-4o + Qwen，批量文档智能纠错。'
        : 'First professional contract. Windows desktop medical RAG proofreading tool, GPT-4o + Qwen, batch document error detection.',
      zh
        ? '帝国理工毕业生创业项目。多维匹配算法分析游戏偏好 + MBTI人格，五种策略模式，获股权邀约。'
        : 'Startup project for Imperial College graduates. Multi-dimensional matching for game preferences + MBTI, five strategy patterns. Equity offer received.',
      zh
        ? 'EY ESG竞赛团队领导。Notion全流程项目管理系统，评委称赞逻辑清晰严谨。'
        : 'EY ESG competition team lead. Notion full-cycle project management system. Praised for logical clarity and rigor.',
    ],

    stories: {
      train: {
        title: zh ? '本来会略过我的机会' : 'A Chance That Would Have Passed Me By',
        body: zh
          ? '高铁上遇到一位医学期刊主编。聊了AI在出版中的应用。完成需求分析、可行性研究和框架设计。拿到了第一份工程合同。'
          : 'Met a medical journal editor on a train. Discussed AI in publishing. Completed needs analysis, feasibility study, and framework design. Landed my first engineering contract.',
        pull: zh
          ? '机会往往不是以"项目"的形式出现的。它最开始可能只是一段对话、一个痛点，或者一个尚未被清楚定义的问题。真正重要的是，能否把它识别出来并拆解成可以落地的系统。'
          : 'Opportunities don\'t always appear as "projects." They start as a conversation, a pain point, or an undefined problem. What matters is recognizing it and breaking it down into something deliverable.',
      },
      badminton: {
        title: zh ? '先接住，再学会，再交付' : 'Catch It, Learn It, Deliver It',
        body: zh
          ? '打球认识了两位帝国理工毕业生。他们在找推荐系统方案。我说："给我两周。"两周后demo交付，一个月后股权邀约。'
          : 'Met two Imperial College grads at badminton. They needed a recommendation system. I said: "Give me two weeks." Demo delivered in two weeks. Equity offer in one month.',
        pull: zh
          ? '学习的价值不只是掌握概念——是把刚学到的知识快速转化为别人真正需要、真正能用的东西。'
          : 'Learning\'s value isn\'t mastering concepts — it\'s transforming new knowledge into something others actually need and can use.',
      },
      door: {
        title: zh ? '没有回复，就去敲门' : 'No Reply? Knock on the Door',
        body: zh
          ? '给教授发了多封邮件，没有回复。请朋友确认办公室地址，直接上门。面对面交流后，拿到了实验室offer。'
          : 'Emailed a professor multiple times. No reply. Asked a friend for the office address. Showed up in person. Got the lab offer after a real conversation.',
        pull: zh
          ? '研究机会和创业机会一样，都需要主动争取。机会不会自动出现——你必须先把自己带到问题和人面前，然后用清晰的表达和真实的行动证明自己。'
          : 'Research and entrepreneurship share this: opportunities require active pursuit. They don\'t appear automatically — you put yourself in front of the problem and the people first, then prove yourself through clear expression and real action.',
      },
    },
  };
}

// ---------------------------------------------------------------------------
// Document generator
// ---------------------------------------------------------------------------

function buildDocument(lang = 'zh') {
  const tr   = extractI18nData();
  const proj = extractProjectData();
  const t    = (k) => tr[lang][k] || k;
  const zh   = lang === 'zh';
  const pc   = getPrintContent(lang);

  const tagMarkup = (tags) => tags.map(tag => {
    const label = zh ? tag.label : (tag.labelEn || tag.label);
    const tone  = tag.tone ? ' ' + tag.tone : '';
    return `<span class="tag${tone}">${label}</span>`;
  }).join('');

  const projMarkup = proj.map((p, i) => {
    const cat   = stripEmoji(zh ? (p.categoryZh || p.category) : p.category);
    const title = zh ? (p.titleZh || p.title) : p.title;
    const desc  = pc.projectDescs[i] || (zh ? p.descriptionZh : p.description);
    const feat  = p.layout === 'featured' ? ' featured' : '';
    return `
      <div class="proj${feat}">
        <div class="proj-left">
          <span class="proj-cat">${cat}</span>
          <span class="proj-year">${p.year}</span>
          <h4 class="proj-title">${title}</h4>
        </div>
        <div class="proj-right">
          <p class="proj-desc">${desc}</p>
          <div class="proj-tags">${tagMarkup(p.tags)}</div>
        </div>
      </div>`;
  }).join('\n');

  const storiesList = ['train','badminton','door'];
  const storiesMarkup = storiesList.map(k => `
    <div class="story">
      <h4 class="story-title">${pc.stories[k].title}</h4>
      <p class="story-body">${pc.stories[k].body}</p>
      <p class="story-pull">${pc.stories[k].pull}</p>
    </div>`).join('\n');

  const skillPills = (arr) => arr.map(s => `<span class="tag">${s}</span>`).join('');
  const langPills = () =>
    `<span class="tag accent-blue">${zh?'中文 (母语)':'Chinese (Native)'}</span>` +
    `<span class="tag accent-purple">${zh?'英语 (流利)':'English (Fluent)'}</span>` +
    `<span class="tag accent-green">${zh?'韩语':'Korean'}</span>`;

  const subline = pc.hero.subline;

  const sections = pc.sections;

  return `<!DOCTYPE html>
<html lang="${zh?'zh-CN':'en'}">
<head>
<meta charset="UTF-8">
<title>Ye Botao</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600;8..60,700&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600&display=swap" rel="stylesheet">
<style>
  /* =============================================================
     DESIGN SYSTEM — 研究者札记
     Typeface: Source Serif 4 (headings) + Inter (body)
     Palette: warm white + near-black + teal accent
     ============================================================= */

  @page { size: A4; margin: 28mm 24mm 28mm 24mm; }

  :root {
    --c-text:   #1a1a1a;
    --c-sub:    #78716c;
    --c-accent: #0d4f4f;
    --c-rule:   #e7e5e4;
    --c-bg:     #f0fdfa;
    --c-bg-sub: #fafaf9;
  }

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: 'Inter','WenQuanYi Micro Hei','Noto Sans CJK SC',sans-serif;
    font-size: 9pt;
    line-height: 1.75;
    color: var(--c-text);
    background: #fff;
    font-feature-settings: 'cv11','ss01';
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ---- helpers ---- */
  .ch { page-break-before: always; padding-top: 12px; }
  .ch-num {
    font: 300 96pt/0.65 'Source Serif 4',serif;
    color: #e7e5e4;
    text-align: right;
    margin-bottom: -8px;
    margin-right: -8px;
    user-select: none;
  }
  .ch-title {
    font: 600 26pt/1.1 'Source Serif 4','Source Han Serif SC',serif;
    color: var(--c-text);
    padding-bottom: 20px;
    border-bottom: 2px solid var(--c-text);
    margin-bottom: 32px;
    letter-spacing: -0.3px;
  }

  /* ============================================================
     COVER
     ============================================================ */
  .cover {
    text-align: center;
    padding-top: 140px;
    page-break-after: always;
  }
  .cover-name {
    font: 400 56pt/1 'Source Serif 4','Source Han Serif SC',serif;
    color: var(--c-text);
    letter-spacing: -0.5px;
  }
  .cover-sub {
    font: 300 12pt/1.5 'Inter',sans-serif;
    color: var(--c-sub);
    margin-top: 18px;
    letter-spacing: 0.5px;
  }
  .cover-lines {
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-top: 120px;
  }
  .cover-line {
    display: block;
    width: 1px;
    height: 120px;
    background: var(--c-text);
    opacity: 0.10;
  }

  /* ============================================================
     ABOUT
     ============================================================ */
  .about-lede {
    font: 400 13pt/1.7 'Source Serif 4','Source Han Serif SC',serif;
    color: var(--c-text);
    margin-bottom: 28px;
    max-width: 85%;
  }
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 40px;
    margin-bottom: 28px;
    page-break-inside: avoid;
  }
  .about-col {
    padding: 16px 0;
    border-top: 1px solid var(--c-rule);
  }
  .about-col-label {
    font: 600 7.5pt 'Inter',sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--c-accent);
    margin-bottom: 8px;
    display: block;
  }
  .about-col-body {
    font-size: 9pt;
    color: var(--c-sub);
    line-height: 1.8;
  }
  .about-learning {
    padding: 14px 0;
    border-top: 1px solid var(--c-rule);
    border-bottom: 1px solid var(--c-rule);
    margin-bottom: 28px;
    page-break-inside: avoid;
  }
  .about-learning-label {
    font: 600 7.5pt 'Inter',sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--c-accent);
    margin-bottom: 10px;
    display: block;
  }
  .about-learning-list {
    font-size: 8.5pt;
    color: var(--c-sub);
    line-height: 2;
  }
  .about-quote {
    padding: 20px 0;
    font: italic 400 12pt/1.7 'Source Serif 4','Source Han Serif SC',serif;
    color: var(--c-text);
  }
  .about-quote-author {
    display: block;
    margin-top: 10px;
    font: 600 8.5pt 'Inter',sans-serif;
    color: var(--c-accent);
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* ============================================================
     PROJECTS — two-column grid
     ============================================================ */
  .proj {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px 32px;
    padding: 18px 0;
    border-bottom: 1px solid var(--c-rule);
    page-break-inside: avoid;
  }
  .proj:last-child { border-bottom: none; padding-bottom: 0; }
  .proj.featured {
    background: var(--c-bg);
    padding: 18px 12px;
    margin: 0 -12px 8px -12px;
    border-radius: 1px;
    border-bottom: none;
  }
  .proj.featured:last-child { margin-bottom: 0; }
  .proj-left { }
  .proj-cat {
    font: 600 7pt 'Inter',sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--c-accent);
    display: block;
    margin-bottom: 2px;
  }
  .proj-year {
    font: 400 7pt 'Inter',sans-serif;
    color: #a8a29e;
    display: inline-block;
    margin-bottom: 8px;
  }
  .proj-title {
    font: 600 11pt/1.3 'Source Serif 4','Source Han Serif SC',serif;
    color: var(--c-text);
    margin-bottom: 0;
  }
  .proj-right { }
  .proj-desc {
    font-size: 8.5pt;
    color: var(--c-sub);
    line-height: 1.8;
    margin-bottom: 8px;
  }
  .proj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  /* ============================================================
     STORIES
     ============================================================ */
  .story {
    padding: 20px 0 20px 20px;
    border-left: 2px solid var(--c-accent);
    margin-bottom: 20px;
    page-break-inside: avoid;
  }
  .story:last-child { margin-bottom: 0; padding-bottom: 0; }
  .story-title {
    font: 600 13pt/1.4 'Source Serif 4','Source Han Serif SC',serif;
    color: var(--c-text);
    margin-bottom: 8px;
  }
  .story-body {
    font-size: 9pt;
    color: var(--c-sub);
    line-height: 1.85;
    margin-bottom: 10px;
  }
  .story-pull {
    font: italic 400 9.5pt/1.6 'Source Serif 4','Source Han Serif SC',serif;
    color: var(--c-accent);
  }

  /* ============================================================
     SKILLS — category blocks
     ============================================================ */
  .sk-block {
    padding: 14px 0;
    border-bottom: 1px solid var(--c-rule);
    page-break-inside: avoid;
  }
  .sk-block:last-child { border-bottom: none; padding-bottom: 0; }
  .sk-label {
    font: 600 9pt 'Inter',sans-serif;
    color: var(--c-text);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .sk-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  /* ============================================================
     CONTACT
     ============================================================ */
  .contact-links {
    padding: 24px 0;
    text-align: center;
    border-bottom: 1px solid var(--c-rule);
    margin-bottom: 24px;
  }
  .contact-links a {
    color: var(--c-accent);
    text-decoration: none;
    font-weight: 500;
  }
  .contact-links p {
    font-size: 9.5pt;
    margin-bottom: 6px;
    color: var(--c-sub);
  }
  .contact-close {
    text-align: center;
    padding: 20px 0;
  }
  .contact-close p {
    font: 400 12pt/1.9 'Source Serif 4','Source Han Serif SC',serif;
    color: var(--c-text);
  }
  .contact-close .ct-em {
    display: block;
    color: var(--c-accent);
    font-weight: 600;
  }
  .contact-close .ct-note {
    font-family: 'Inter',sans-serif;
    font-size: 8pt;
    color: var(--c-sub);
    margin-top: 14px;
  }

  /* ============================================================
     TAGS
     ============================================================ */
  .tag {
    display: inline-block;
    padding: 2px 7px;
    font-family: 'Inter',sans-serif;
    font-size: 6.5pt;
    font-weight: 500;
    background: var(--c-bg-sub);
    color: var(--c-sub);
    border-radius: 2px;
    letter-spacing: 0.2px;
  }
  .tag.accent-blue   { background: #dbeafe; color: #1e40af; }
  .tag.accent-purple { background: #ede9fe; color: #6b21a8; }
  .tag.accent-green  { background: #dcfce7; color: #15803d; }
  .tag.accent-orange { background: #ffedd5; color: #9a3412; }
  .tag.accent-red    { background: #fee2e2; color: #991b1b; }
</style>
</head>
<body>

<!-- ============= COVER ============= -->
<div class="cover">
  <h1 class="cover-name">Ye Botao</h1>
  <p class="cover-sub">${subline}</p>
  <div class="cover-lines">
    <span class="cover-line"></span>
    <span class="cover-line"></span>
    <span class="cover-line"></span>
  </div>
</div>

<!-- ============= ABOUT ============= -->
<div class="ch">
  <div class="ch-num">01</div>
  <h2 class="ch-title">${sections.about}</h2>

  <p class="about-lede">${pc.about.flow}</p>

  <div class="about-quote">
    ${t('about.quote')}
    <span class="about-quote-author">${t('about.quote.author')}</span>
  </div>
</div>

<!-- ============= PROJECTS ============= -->
<div class="ch">
  <div class="ch-num">02</div>
  <h2 class="ch-title">${sections.projects}</h2>
  ${projMarkup}
</div>

<!-- ============= STORIES ============= -->
<div class="ch">
  <div class="ch-num">03</div>
  <h2 class="ch-title">${sections.stories}</h2>
  ${storiesMarkup}
</div>

<!-- ============= SKILLS ============= -->
<div class="ch">
  <div class="ch-num">04</div>
  <h2 class="ch-title">${sections.skills}</h2>

  <div class="sk-block">
    <div class="sk-label">${t('skills.ai.title')}</div>
    <div class="sk-tags">${skillPills(['LLMs','GraphRAG','LangChain','Multi-Agent','LoRA/QLoRA','NLP','GRPO','RAG','Prompt Eng','Fine-tuning','XAI','Bayesian Net','Security AI'])}</div>
  </div>
  <div class="sk-block">
    <div class="sk-label">${t('skills.dev.title')}</div>
    <div class="sk-tags">${skillPills(['Python','JavaScript','Web Dev','Microservices','Desktop Apps','CI/CD'])}</div>
  </div>
  <div class="sk-block">
    <div class="sk-label">${t('skills.tools.title')}</div>
    <div class="sk-tags">${skillPills(['PyTorch','TensorFlow','HuggingFace','MS-Swift','Ollama','LanceDB','Notion','Git','Linux','Docker'])}</div>
  </div>
  <div class="sk-block">
    <div class="sk-label">${t('skills.languages.title')}</div>
    <div class="sk-tags">${langPills()}</div>
  </div>
  <div class="sk-block">
    <div class="sk-label">${t('skills.soft.title')}</div>
    <div class="sk-tags">${skillPills(['Leadership','Team Building','Project Management','Fast Learning','Initiative'])}</div>
  </div>
</div>

<!-- ============= CONTACT ============= -->
<div class="ch">
  <div class="ch-num">05</div>
  <h2 class="ch-title">${sections.contact}</h2>

  <div class="contact-links">
    <p>Email &nbsp; <a href="mailto:6severin9@gmail.com">6severin9@gmail.com</a></p>
    <p>GitHub &nbsp; <a href="https://github.com/severin-ye">github.com/severin-ye</a></p>
  </div>

  <div class="contact-close">
    <p>${stripHtml(t('contact.quote1'))}<br>
    <span class="ct-em">${stripHtml(t('contact.quote2'))}</span></p>
    <p class="ct-note">${t('contact.quote3')}</p>
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
  const htmlPath = join(__dirname, '..', 'portfolio-export.html');
  fs.writeFileSync(htmlPath, html, 'utf-8');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox','--font-render-hinting=none']
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluate(async () => { await document.fonts.ready; });

    const out = join(__dirname, '..', `portfolio-${lang}.pdf`);
    await page.pdf({
      path: out,
      format: 'A4',
      printBackground: true,
      margin: { top: '28mm', bottom: '28mm', left: '24mm', right: '24mm' },
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `
        <div style="font-size:7pt; font-family:'Inter','WenQuanYi Micro Hei',sans-serif; color:#a8a29e; width:100%; padding-left:24mm; padding-right:24mm;">
          <span style="float:left;">Ye Botao</span>
          <span style="float:right;"><span class="pageNumber"></span></span>
        </div>
      `,
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
