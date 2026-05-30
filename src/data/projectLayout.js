const projectData = [
  {
    category: '🔬 Ongoing Research',
    categoryZh: '🔬 进行中的研究',
    year: '2025',
    githubUrl: 'https://github.com/severin-ye/CuraView',
    paperUrl: '/papers/CuraView_KBS_Submission_Manuscript.pdf',
    title: 'CuraView - Medical AI Hallucination Detection & Correction',
    titleZh: 'CuraView - 医学AI幻觉检测与修正',
    description: 'A multi-agent research platform for detecting, classifying, and correcting hallucinations in medical LLMs. Built with GraphRAG knowledge graphs, Qwen-30B models, and MS-Swift fine-tuning framework. Processed 46,998 MIMIC-IV patient records with automated error synthesis and intelligent correction.',
    descriptionZh: '多智能体协作的医学LLM幻觉检测与修正平台。基于GraphRAG知识图谱构建证据链，结合Qwen模型与MS-Swift微调框架，处理46,998条MIMIC-IV病历记录，实现受控错误合成与证据驱动的智能修正。',
    tags: [
      { label: '幻觉检测框架', labelEn: 'Hallucination Detection', tone: 'accent-orange' },
      { label: '知识图谱推理', labelEn: 'Knowledge Graph Reasoning', tone: 'accent-blue' },
      { label: '强化学习链路', labelEn: 'RL Fine-tuning Pipeline', tone: 'accent-red' },
      { label: '医学合成数据', labelEn: 'Medical Synthetic Data', tone: 'accent-purple' },
      { label: '端侧模型训练', labelEn: 'On-device Model Training' }
    ],
    layout: 'featured'
  },
  {
    category: '📖 Digital Humanities',
    categoryZh: '📖 数字人文',
    year: '2025',
    githubUrl: 'https://github.com/Xynovitch/Narrative-Causal-Graph',
    paperUrl: '/papers/Craft-in-the-Loop.pdf',
    title: 'Narrative-Causal-Graph - Causal Event Network for Stories',
    titleZh: 'Narrative-Causal-Graph - 叙事因果事件网络',
    description: 'Converts raw novels into structured causal event graphs with characters, scenes, and thematic links, then exports the results to Neo4j, CSV, and JSON-LD for downstream analysis. A full run on Great Expectations extracts around 4,700 events and 3,200 causal links while preserving a valid DAG narrative structure.',
    descriptionZh: '将原始小说转化为结构化因果事件图谱，包含角色、场景与主题链接。输出Neo4j图数据库、CSV和JSON-LD格式，支持下游量化文学分析。完整运行提取约4,700个事件与3,200条因果链，保持有向无环图叙事结构。',
    tags: [
      { label: '叙事因果挖掘', labelEn: 'Narrative Causal Mining', tone: 'accent-orange' },
      { label: '文学理论驱动', labelEn: 'Literary Theory-Driven', tone: 'accent-purple' },
      { label: '结构化知识提取', labelEn: 'Structured Knowledge Extraction', tone: 'accent-blue' },
      { label: '图数据库生成', labelEn: 'Graph DB Generation', tone: 'accent-green' }
    ],
    layout: 'featured'
  },
  {
    category: '📊 Business Analytics',
    categoryZh: '📊 商业分析',
    year: '2026',
    githubUrl: 'https://github.com/severin-ye/OpenStock--Analyst',
    title: 'OpenStock Analyst - Intelligent Stock Analysis Platform',
    titleZh: 'OpenStock Analyst - 智能股票分析平台',
    description: 'Generates structured investment reports for US stocks, Hong Kong stocks, and crypto assets using a four-layer ranking framework for valuation, profitability, safety, and growth. Each report includes ranking tables, upside-downside scenarios, F-Score breakdowns, and cross-validated market data in shareable HTML output.',
    descriptionZh: '基于四层排名框架（估值、盈利、安全、成长）为美股、港股与加密资产生成结构化投资报告。每份报告包含排名表格、涨跌情景、F-Score拆解与交叉验证的市场数据，输出为可分享的HTML报告。',
    tags: [
      { label: '量化价值投资', labelEn: 'Quantitative Value Investing', tone: 'accent-orange' },
      { label: '排名驱动决策', labelEn: 'Rank-Driven Decisions', tone: 'accent-blue' },
      { label: '反幻觉工程', labelEn: 'Anti-Hallucination Engineering', tone: 'accent-red' },
      { label: '跨资产比较', labelEn: 'Cross-Asset Comparison', tone: 'accent-purple' }
    ]
  },
  {
    category: '🎯 Customer Analytics',
    categoryZh: '🎯 客户分析',
    year: '2026',
    githubUrl: 'https://github.com/severin-ye/Decathlon_VOC_Analyzer',
    paperUrl: '/papers/Decathlon_VOC_Analyzer.pdf',
    title: 'Decathlon VOC Analyzer - Voice of Customer Intelligence',
    titleZh: 'Decathlon VOC Analyzer - 客户声音智能分析',
    description: 'Turns product text, images, and customer reviews into evidence-backed VOC reports that highlight strengths, weaknesses, controversies, and actionable suggestions. The system also outputs claim-level citations, HTML reports, replay artifacts, and evaluation manifests for auditable multimodal customer insight analysis.',
    descriptionZh: '将产品文本、图片与用户评论转化为有证据支撑的VOC报告，突出产品优势、缺陷、争议与可操作建议。系统输出包含声明级引用、HTML报告、重放工件与评估清单，实现可审计的多模态客户洞察分析。',
    tags: [
      { label: '多模态客户洞察', labelEn: 'Multimodal Customer Insights', tone: 'accent-orange' },
      { label: '证据溯源链路', labelEn: 'Evidence Traceability', tone: 'accent-red' },
      { label: '审计可追溯', labelEn: 'Audit Trail', tone: 'accent-blue' },
      { label: '容错降级设计', labelEn: 'Graceful Degradation', tone: 'accent-purple' }
    ]
  },
  {
    category: '🛡️ Security Research',
    categoryZh: '🛡️ 安全研究',
    year: '2026',
    githubUrl: 'https://github.com/severin-ye/Security-Tax',
    title: 'Security-Tax - Multi-Agent Security Defense System',
    titleZh: 'Security-Tax - 多智能体安全防御系统',
    description: 'Complete LangChain 1.0 reproduction of multi-agent security tax system. Features 7 collaborative agents with dual-layer defense (Instruction + Vaccine), 12 jailbreak attack prompts, and comprehensive evaluation framework. Includes interactive HTML flow visualization and batch experiment comparison tools.',
    descriptionZh: 'LangChain 1.0复现的多智能体安全税系统。7个协作智能体，双层防御（指令防御+记忆疫苗），12种越狱攻击提示词，完整评估框架。包含交互式HTML传播流图与批量实验对比工具。',
    tags: [
      { label: '智能体安全攻防', labelEn: 'Agent Security Attack/Defense', tone: 'accent-red' },
      { label: '安全-协作权衡', labelEn: 'Safety-Collaboration Tradeoff', tone: 'accent-orange' },
      { label: '传播型攻击模拟', labelEn: 'Propagation Attack Simulation', tone: 'accent-blue' },
      { label: '对比实验框架', labelEn: 'Comparative Experiment Framework', tone: 'accent-purple' }
    ]
  },
  {
    category: '⚡ Energy AI',
    categoryZh: '⚡ 能源AI',
    year: '2026',
    githubUrl: 'https://github.com/severin-ye/energy-demand-prediction',
    title: 'Energy Demand Prediction - Causal Explainable AI',
    titleZh: 'Energy Demand Prediction - 因果可解释AI',
    description: 'CNN-LSTM-Attention architecture achieving 34.84% improvement over serial models. Combines Bayesian Networks with Deep Learning Parameters for stable causal explanation (0.999+ cosine similarity). Features beautiful 10-step HTML visualization and actionable energy-saving recommendations.',
    descriptionZh: 'CNN-LSTM-Attention并行架构，较串行模型性能提升34.84%。将深度学习参数外化为贝叶斯网络因果特征，实现稳定因果解释（余弦相似度0.999+）。10步HTML可视化与可操作节能建议。',
    tags: [
      { label: '深度因果推理', labelEn: 'Deep Causal Reasoning', tone: 'accent-orange' },
      { label: '特征→因果桥接', labelEn: 'Feature-Causal Bridge', tone: 'accent-blue' },
      { label: '稳定可解释性', labelEn: 'Stable Explainability', tone: 'accent-green' },
      { label: '反事实分析', labelEn: 'Counterfactual Analysis', tone: 'accent-purple' }
    ]
  },
  {
    category: '🍽️ AI Application',
    categoryZh: '🍽️ AI应用',
    year: '2025',
    githubUrl: 'https://github.com/severin-ye/NutriFlow---AI',
    title: 'NutriFlow AI - Intelligent Nutrition Analysis',
    titleZh: 'NutriFlow AI - 智能营养分析',
    description: 'LangChain + LangGraph nutrition system with Qwen multimodal models for meal image recognition, health scoring, and personalized recommendations. 12 collaborative tools with strict orchestration.',
    descriptionZh: 'LangChain+LangGraph驱动的智能营养分析系统。Qwen多模态模型实现餐食图像识别、健康评分与个性化推荐，12个协作工具严格编排，支持自主体检与趋势追踪。',
    tags: [
      { label: '端到端饮食感知', labelEn: 'End-to-End Diet Perception', tone: 'accent-orange' },
      { label: '视觉-知识协同', labelEn: 'Vision-Knowledge Synergy', tone: 'accent-purple' },
      { label: '自主Agent流水线', labelEn: 'Autonomous Agent Pipeline', tone: 'accent-blue' },
      { label: '多维度健康评估', labelEn: 'Multi-Dim Health Assessment' }
    ]
  },
  {
    category: '💼 Contract Work',
    categoryZh: '💼 合同项目',
    year: '2023',
    githubUrl: 'https://github.com/severin-ye/AI-Review-win',
    title: 'AI Review Assistant - Medical Document Processing',
    titleZh: 'AI Review Assistant - 医学文档智能审校',
    description: 'First professional contract — Windows desktop app with medical RAG system, batch document processing, and multi-model support (GPT-4o, Qwen). Features intelligent error detection and fact checking.',
    descriptionZh: '首份商业合同项目——Windows桌面端医学文档审校工具。内置医学RAG系统，支持批量文档处理与多模型（GPT-4o、Qwen），实现智能错误检测与事实核查。',
    tags: [
      { label: '医学文档校对', labelEn: 'Medical Document Proofreading', tone: 'accent-orange' },
      { label: '结构化AI输出', labelEn: 'Structured AI Output', tone: 'accent-red' },
      { label: '人机交互审批', labelEn: 'Human-AI Interactive Review', tone: 'accent-blue' },
      { label: '桌面端部署', labelEn: 'Desktop Deployment', tone: 'accent-purple' }
    ]
  },
  {
    category: '🎯 Startup Collab',
    categoryZh: '🎯 创业合作',
    year: '2025',
    githubUrl: 'https://github.com/severin-ye/GReSy',
    title: 'GReSy - Game Player Matching System',
    titleZh: 'GReSy - 游戏玩家匹配系统',
    description: "Built intelligent recommendation system for Imperial College graduates' startup. Multi-dimensional matching algorithm analyzing game preferences, personality (MBTI), and gaming habits. Equity offered.",
    descriptionZh: '为帝国理工毕业生创业项目构建的智能游戏玩家匹配系统。多维匹配算法分析游戏偏好、MBTI性格与游戏习惯，通过五种策略模式解耦匹配逻辑，获股权邀约。',
    tags: [
      { label: '多维偏好匹配', labelEn: 'Multi-Dim Preference Matching', tone: 'accent-orange' },
      { label: '策略模式解耦', labelEn: 'Strategy Pattern Decoupling', tone: 'accent-blue' },
      { label: '双向博弈评分', labelEn: 'Game-Theoretic Scoring', tone: 'accent-purple' },
      { label: '地理感知分组', labelEn: 'Geo-Aware Grouping', tone: 'accent-green' }
    ]
  },
  {
    category: '🏆 Competition',
    categoryZh: '🏆 竞赛',
    year: 'EY ESG Challenge',
    title: 'Team Leadership - Notion Workflow System',
    titleZh: 'Team Leadership - 团队领导力',
    description: 'Led diverse team with complete Notion-based project management system covering topic selection, data collection, draft writing, and presentation. Judges praised logical clarity and rigor.',
    descriptionZh: '领导多元团队，搭建完整Notion项目管理系统，覆盖选题、数据收集、草稿撰写到最终展示全流程。评委称赞逻辑清晰严谨。',
    tags: [
      { label: '全周期项目管理', labelEn: 'Full-Cycle Project Management', tone: 'accent-blue' },
      { label: 'ESG竞赛', labelEn: 'ESG Competition', tone: 'accent-purple' }
    ]
  }
];

const spanOptionsByLayout = {
  featured: [6, 12],
  standard: [4, 6, 12]
};

function getSpanOptions(project) {
  return spanOptionsByLayout[project.layout] || spanOptionsByLayout.standard;
}

function sumFrom(array, mapper) {
  return array.reduce((total, item) => total + mapper(item), 0);
}

function searchRowAssignment(projects, index, chosenSpans, chosenTotal) {
  if (chosenTotal > 12) {
    return null;
  }

  if (index === projects.length) {
    return chosenTotal === 12 ? chosenSpans : null;
  }

  const remainingProjects = projects.slice(index + 1);
  const minRemaining = sumFrom(remainingProjects, (project) => Math.min(...getSpanOptions(project)));
  const maxRemaining = sumFrom(remainingProjects, (project) => Math.max(...getSpanOptions(project)));

  for (const span of getSpanOptions(projects[index])) {
    const nextTotal = chosenTotal + span;
    if (nextTotal > 12) {
      continue;
    }

    if (nextTotal + minRemaining > 12) {
      continue;
    }

    if (nextTotal + maxRemaining < 12) {
      continue;
    }

    const result = searchRowAssignment(projects, index + 1, [...chosenSpans, span], nextTotal);
    if (result) {
      return result;
    }
  }

  return null;
}

function findRowAssignment(projects) {
  const maxProjectsPerRow = Math.min(3, projects.length);

  for (let count = maxProjectsPerRow; count >= 1; count -= 1) {
    const rowProjects = projects.slice(0, count);
    const spans = searchRowAssignment(rowProjects, 0, [], 0);
    if (spans) {
      return rowProjects.map((project, index) => ({ project, span: spans[index] }));
    }
  }

  return [{ project: projects[0], span: 12 }];
}

export function packProjectRows(projects) {
  const rows = [];
  let currentIndex = 0;

  while (currentIndex < projects.length) {
    const row = findRowAssignment(projects.slice(currentIndex));
    rows.push(row);
    currentIndex += row.length;
  }

  return rows;
}

function renderTags(tags, lang) {
  return tags.map((tag) => {
    const toneClass = tag.tone ? ` ${tag.tone}` : '';
    const label = lang === 'zh' ? tag.label : (tag.labelEn || tag.label);
    return `<span class="tag${toneClass}">${label}</span>`;
  }).join('');
}

function renderProjectCard(project, span, lang) {
  const githubLink = project.githubUrl
    ? `<a href="${project.githubUrl}" target="_blank" class="github-link">GitHub →</a>`
    : '';

  const paperLink = project.paperUrl
    ? `<a href="${project.paperUrl}" target="_blank" class="paper-link">PDF →</a>`
    : '';

  const category = lang === 'zh' ? (project.categoryZh || project.category) : project.category;
  const title = lang === 'zh' ? (project.titleZh || project.title) : project.title;
  const description = lang === 'zh' ? (project.descriptionZh || project.description) : project.description;

  return `
    <article class="bento-item glass project-card project-span-${span}">
      <div class="project-meta">
        <span>${category}</span>
        <span>•</span>
        <span>${project.year}</span>
        ${paperLink}
        ${githubLink}
      </div>
      <h4>${title}</h4>
      <p>${description}</p>
      <div class="tags">
        ${renderTags(project.tags, lang)}
      </div>
    </article>
  `;
}

export function renderProjectsMarkup(lang = 'en') {
  return `
    <div class="projects-layout">
      ${packProjectRows(projectData).map((row) => `
        <div class="project-row">
          ${row.map(({ project, span }) => renderProjectCard(project, span, lang)).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

export function updateProjectsLanguage(lang) {
  const projectsSection = document.querySelector('#projects');
  if (projectsSection) {
    const sectionHeader = projectsSection.querySelector('.section-header h2');
    // Keep the emoji and update the text
    const headerText = projectsSection.querySelector('.section-header h2 span');
    
    // Update project cards
    const cards = projectsSection.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      if (index < projectData.length) {
        const project = projectData[index];
        const cat = lang === 'zh' ? (project.categoryZh || project.category) : project.category;
        const titl = lang === 'zh' ? (project.titleZh || project.title) : project.title;
        const desc = lang === 'zh' ? (project.descriptionZh || project.description) : project.description;
        
        // Update category in meta
        const metaSpan = card.querySelector('.project-meta span:first-child');
        if (metaSpan) metaSpan.textContent = cat;
        
        // Update title
        const titleEl = card.querySelector('h4');
        if (titleEl) titleEl.textContent = titl;
        
        // Update description
        const descEl = card.querySelector('p');
        if (descEl) descEl.textContent = desc;
        
        // Update tags
        const tagSpans = card.querySelectorAll('.tag');
        tagSpans.forEach((tagEl, tagIndex) => {
          if (tagIndex < project.tags.length) {
            const tag = project.tags[tagIndex];
            tagEl.textContent = lang === 'zh' ? tag.label : (tag.labelEn || tag.label);
          }
        });
      }
    });
  }
}