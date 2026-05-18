const projectData = [
  {
    category: '🔬 Ongoing Research',
    year: '2025',
    githubUrl: 'https://github.com/severin-ye/CuraView',
    paperUrl: '/papers/CuraView.pdf',
    title: 'CuraView - Medical AI Hallucination Detection & Correction',
    description: 'A multi-agent research platform for detecting, classifying, and correcting hallucinations in medical LLMs. Built with GraphRAG knowledge graphs, Qwen-30B models, and MS-Swift fine-tuning framework. Processed 46,998 MIMIC-IV patient records with automated error synthesis and intelligent correction.',
    tags: [
      { label: '论文项目', tone: 'accent-red' },
      { label: 'GraphRAG', tone: 'accent-blue' },
      { label: 'Qwen3-30B', tone: 'accent-purple' },
      { label: 'Multi-Agent', tone: 'accent-green' },
      { label: 'Medical AI' }
    ],
    layout: 'featured'
  },
  {
    category: '📖 Digital Humanities',
    year: '2025',
    githubUrl: 'https://github.com/Xynovitch/Narrative-Causal-Graph',
    paperUrl: '/papers/Craft-in-the-Loop.pdf',
    title: 'Narrative-Causal-Graph - Causal Event Network for Stories',
    description: 'Converts raw novels into structured causal event graphs with characters, scenes, and thematic links, then exports the results to Neo4j, CSV, and JSON-LD for downstream analysis. A full run on Great Expectations extracts around 4,700 events and 3,200 causal links while preserving a valid DAG narrative structure.',
    tags: [
      { label: '论文项目', tone: 'accent-red' },
      { label: 'Story Graph', tone: 'accent-blue' },
      { label: 'Neo4j Export', tone: 'accent-green' },
      { label: 'Digital Humanities', tone: 'accent-purple' }
    ],
    layout: 'featured'
  },
  {
    category: '📊 Business Analytics',
    year: '2026',
    githubUrl: 'https://github.com/severin-ye/OpenStock--Analyst',
    title: 'OpenStock Analyst - Intelligent Stock Analysis Platform',
    description: 'Generates structured investment reports for US stocks, Hong Kong stocks, and crypto assets using a four-layer ranking framework for valuation, profitability, safety, and growth. Each report includes ranking tables, upside-downside scenarios, F-Score breakdowns, and cross-validated market data in shareable HTML output.',
    tags: [
      { label: 'Investment Reports', tone: 'accent-blue' },
      { label: 'Cross-Market', tone: 'accent-green' },
      { label: 'Ranking Engine' }
    ]
  },
  {
    category: '🎯 Customer Analytics',
    year: '2026',
    githubUrl: 'https://github.com/severin-ye/Decathlon_VOC_Analyzer',
    paperUrl: '/papers/Decathlon_VOC_Analyzer.pdf',
    title: 'Decathlon VOC Analyzer - Voice of Customer Intelligence',
    description: 'Turns product text, images, and customer reviews into evidence-backed VOC reports that highlight strengths, weaknesses, controversies, and actionable suggestions. The system also outputs claim-level citations, HTML reports, replay artifacts, and evaluation manifests for auditable multimodal customer insight analysis.',
    tags: [
      { label: '论文项目', tone: 'accent-red' },
      { label: 'Multimodal VOC', tone: 'accent-purple' },
      { label: 'Evidence Reports', tone: 'accent-orange' },
      { label: 'Attribution' }
    ]
  },
  {
    category: '🛡️ Security Research',
    year: '2026',
    githubUrl: 'https://github.com/severin-ye/Security-Tax',
    title: 'Security-Tax - Multi-Agent Security Defense System',
    description: 'Complete LangChain 1.0 reproduction of multi-agent security tax system. Features 7 collaborative agents with dual-layer defense (Instruction + Vaccine), 12 jailbreak attack prompts, and comprehensive evaluation framework. Includes interactive HTML flow visualization and batch experiment comparison tools.',
    tags: [
      { label: 'Security', tone: 'accent-red' },
      { label: 'Multi-Agent', tone: 'accent-blue' },
      { label: 'LangChain', tone: 'accent-purple' },
      { label: 'Defense AI' }
    ]
  },
  {
    category: '⚡ Energy AI',
    year: '2026',
    githubUrl: 'https://github.com/severin-ye/energy-demand-prediction',
    title: 'Energy Demand Prediction - Causal Explainable AI',
    description: 'CNN-LSTM-Attention architecture achieving 34.84% improvement over serial models. Combines Bayesian Networks with Deep Learning Parameters for stable causal explanation (0.999+ cosine similarity). Features beautiful 10-step HTML visualization and actionable energy-saving recommendations.',
    tags: [
      { label: 'Deep Learning', tone: 'accent-green' },
      { label: 'Bayesian Network', tone: 'accent-blue' },
      { label: 'XAI', tone: 'accent-purple' },
      { label: 'Energy' }
    ]
  },
  {
    category: '🍽️ AI Application',
    year: '2025',
    githubUrl: 'https://github.com/severin-ye/NutriFlow---AI',
    title: 'NutriFlow AI - Intelligent Nutrition Analysis',
    description: 'LangChain + LangGraph nutrition system with Qwen multimodal models for meal image recognition, health scoring, and personalized recommendations. 12 collaborative tools with strict orchestration.',
    tags: [
      { label: 'LangChain', tone: 'accent-green' },
      { label: 'Qwen-VL', tone: 'accent-purple' },
      { label: 'Health AI' }
    ]
  },
  {
    category: '💼 Contract Work',
    year: '2023',
    githubUrl: 'https://github.com/severin-ye/AI-Review-win',
    title: 'AI Review Assistant - Medical Document Processing',
    description: 'First professional contract — Windows desktop app with medical RAG system, batch document processing, and multi-model support (GPT-4o, Qwen). Features intelligent error detection and fact checking.',
    tags: [
      { label: 'RAG', tone: 'accent-blue' },
      { label: 'GPT-4o', tone: 'accent-purple' },
      { label: 'Desktop App' }
    ]
  },
  {
    category: '🎯 Startup Collab',
    year: '2025',
    githubUrl: 'https://github.com/severin-ye/GReSy',
    title: 'GReSy - Game Player Matching System',
    description: "Built intelligent recommendation system for Imperial College graduates' startup. Multi-dimensional matching algorithm analyzing game preferences, personality (MBTI), and gaming habits. Equity offered.",
    tags: [
      { label: 'RecSys', tone: 'accent-purple' },
      { label: 'Matching', tone: 'accent-blue' },
      { label: 'ML' }
    ]
  },
  {
    category: '🏆 Competition',
    year: 'EY ESG Challenge',
    title: 'Team Leadership - Notion Workflow System',
    description: 'Led diverse team with complete Notion-based project management system covering topic selection, data collection, draft writing, and presentation. Judges praised logical clarity and rigor.',
    tags: [
      { label: 'Leadership', tone: 'accent-orange' },
      { label: 'System Design' },
      { label: 'ESG' }
    ]
  }
]

const spanOptionsByLayout = {
  featured: [6, 12],
  standard: [4, 6, 12]
}

function getSpanOptions(project) {
  return spanOptionsByLayout[project.layout] || spanOptionsByLayout.standard
}

function sumFrom(array, mapper) {
  return array.reduce((total, item) => total + mapper(item), 0)
}

function searchRowAssignment(projects, index, chosenSpans, chosenTotal) {
  if (chosenTotal > 12) {
    return null
  }

  if (index === projects.length) {
    return chosenTotal === 12 ? chosenSpans : null
  }

  const remainingProjects = projects.slice(index + 1)
  const minRemaining = sumFrom(remainingProjects, (project) => Math.min(...getSpanOptions(project)))
  const maxRemaining = sumFrom(remainingProjects, (project) => Math.max(...getSpanOptions(project)))

  for (const span of getSpanOptions(projects[index])) {
    const nextTotal = chosenTotal + span
    if (nextTotal > 12) {
      continue
    }

    if (nextTotal + minRemaining > 12) {
      continue
    }

    if (nextTotal + maxRemaining < 12) {
      continue
    }

    const result = searchRowAssignment(projects, index + 1, [...chosenSpans, span], nextTotal)
    if (result) {
      return result
    }
  }

  return null
}

function findRowAssignment(projects) {
  const maxProjectsPerRow = Math.min(3, projects.length)

  for (let count = maxProjectsPerRow; count >= 1; count -= 1) {
    const rowProjects = projects.slice(0, count)
    const spans = searchRowAssignment(rowProjects, 0, [], 0)
    if (spans) {
      return rowProjects.map((project, index) => ({ project, span: spans[index] }))
    }
  }

  return [{ project: projects[0], span: 12 }]
}

export function packProjectRows(projects) {
  const rows = []
  let currentIndex = 0

  while (currentIndex < projects.length) {
    const row = findRowAssignment(projects.slice(currentIndex))
    rows.push(row)
    currentIndex += row.length
  }

  return rows
}

function renderTags(tags) {
  return tags.map((tag) => {
    const toneClass = tag.tone ? ` ${tag.tone}` : ''
    return `<span class="tag${toneClass}">${tag.label}</span>`
  }).join('')
}

function renderProjectCard(project, span) {
  const githubLink = project.githubUrl
    ? `<a href="${project.githubUrl}" target="_blank" class="github-link">GitHub →</a>`
    : ''

  const paperLink = project.paperUrl
    ? `<a href="${project.paperUrl}" target="_blank" class="paper-link">📄 Read Paper</a>`
    : ''

  return `
    <article class="bento-item glass project-card project-span-${span}">
      <div class="project-meta">
        <span>${project.category}</span>
        <span>•</span>
        <span>${project.year}</span>
        ${githubLink}
      </div>
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      <div class="project-actions">
        ${paperLink}
      </div>
      <div class="tags">
        ${renderTags(project.tags)}
      </div>
    </article>
  `
}

export function renderProjectsMarkup() {
  return `
    <div class="projects-layout">
      ${packProjectRows(projectData).map((row) => `
        <div class="project-row">
          ${row.map(({ project, span }) => renderProjectCard(project, span)).join('')}
        </div>
      `).join('')}
    </div>
  `
}