import './style.css'
import { renderProjectsMarkup, updateProjectsLanguage } from './projectLayout.js'
import { i18n } from './i18n.js'

document.querySelector('#app').innerHTML = `
  <!-- Theme Toggle Button -->
  <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
    <span class="icon">🌙</span>
  </button>

  <!-- Language Toggle Button -->
  <button class="lang-toggle" id="lang-toggle" aria-label="Toggle language">
    <span class="lang-text">EN</span>
  </button>

  <!-- Background Gradient Orbs -->
  <div class="bg-gradient">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <!-- Navigation -->
  <nav class="glass">
    <a href="#about" data-i18n="nav.about">About</a>
    <a href="#projects" data-i18n="nav.projects">Projects</a>
    <a href="#stories" data-i18n="nav.stories">Stories</a>
    <a href="#skills" data-i18n="nav.skills">Skills</a>
    <a href="#contact" data-i18n="nav.contact">Contact</a>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <div class="status-badge glass" data-i18n="hero.status">Open to opportunities</div>
        <h1>Ye Botao</h1>
        <p class="tagline" data-i18n="hero.tagline1">
          Builder who turns <span>ideas into reality</span>.
        </p>
        <p class="tagline" data-i18n="hero.tagline2">
          AI Researcher exploring the frontiers of Medical AI & LLMs.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: var(--space-lg);" data-i18n="hero.belief">
          I believe the world needs people who can stay clear-headed amid complexity — 
          those who create order from chaos and new value from uncertainty.
        </p>
      </div>
      <div class="quick-stats">
        <div class="stat-item glass">
          <span class="stat-value">3+</span>
          <span class="stat-label" data-i18n="hero.stat1">Research Projects</span>
        </div>
        <div class="stat-item glass">
          <span class="stat-value">5+</span>
          <span class="stat-label" data-i18n="hero.stat2">Tech Stacks</span>
        </div>
        <div class="stat-item glass">
          <span class="stat-value">∞</span>
          <span class="stat-label" data-i18n="hero.stat3">Curiosity</span>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about">
    <div class="section-header">
      <h2>🧬 <span data-i18n="about.title">Who I Am</span></h2>
      <div class="line"></div>
    </div>
    <div class="bento-grid">
      <div class="bento-item glass span-8">
        <h3><span class="icon">🎯</span> <span data-i18n="about.focus.title">Current Focus</span></h3>
        <p data-i18n="about.focus.desc">
          Leading research on <strong>Hallucination Detection in Medical Text Summarization</strong> — 
          building systems that make AI more trustworthy in healthcare. From finding supervisors to 
          assembling teams and coordinating progress, I initiated and managed the entire process.
        </p>
        <div class="tags">
          <span class="tag accent-blue">Medical AI</span>
          <span class="tag accent-purple">NLP</span>
          <span class="tag accent-green">LLM Alignment</span>
          <span class="tag accent-orange">LoRA/QLoRA</span>
        </div>
      </div>
      <div class="bento-item glass span-4">
        <h3><span class="icon">💡</span> <span data-i18n="about.philosophy.title">Philosophy</span></h3>
        <p data-i18n="about.philosophy.desc">
          I believe in the <strong>Compounding Effect</strong> — investing time where growth becomes exponential. 
          True resilience isn't dependence on rules, but understanding their logic.
        </p>
      </div>
      <div class="bento-item glass span-4">
        <h3><span class="icon">🔮</span> <span data-i18n="about.vision.title">Future Vision</span></h3>
        <p data-i18n="about.vision.desc">
          Aspiring entrepreneur since high school. I value the <strong>freedom to create</strong> above all else — 
          the courage to venture into the unknown and build what doesn't exist yet.
        </p>
      </div>
      <div class="bento-item glass span-8">
        <h3><span class="icon">📚</span> <span data-i18n="about.learning.title">Self-Directed Learning</span></h3>
        <p data-i18n="about.learning.desc">
          I refuse to be a prisoner of the curriculum. Beyond core courses, I actively explore:
        </p>
        <div class="tags" style="margin-top: var(--space-sm);">
          <span class="tag">Hung-Yi Lee's Deep Learning</span>
          <span class="tag">Andrew Ng's ML</span>
          <span class="tag">Sam Altman's CS183B</span>
          <span class="tag">Prompt Engineering</span>
          <span class="tag">Web Dev</span>
          <span class="tag">Blockchain</span>
          <span class="tag">Cross-platform Apps</span>
        </div>
      </div>
    </div>
    
    <!-- Leadership Quote -->
    <div class="bento-item glass span-12 quote-block" style="margin-top: var(--space-lg);" data-i18n="about.quote">
      Opportunities exist where the concepts have not yet been invented.
      <span class="author" data-i18n="about.quote.author">— My philosophy on leadership</span>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <div class="section-header">
      <h2>🚀 <span data-i18n="projects.title">Research & Projects</span></h2>
      <div class="line"></div>
    </div>
    ${renderProjectsMarkup(i18n.currentLang)}
  </section>

  <!-- Stories Section -->
  <section id="stories">
    <div class="section-header">
      <h2>✨ <span data-i18n="stories.title">Stories That Shaped Me</span></h2>
      <div class="line"></div>
    </div>
    <div class="bento-grid">
      <div class="bento-item glass span-4 story-card">
        <div class="emoji">🚄</div>
        <h4 data-i18n="stories.train.title">The High-Speed Train Encounter</h4>
        <p data-i18n="stories.train.desc">
          Summer 2023: Met an elderly gentleman interested in AI on a train. 
          He turned out to be a medical journal editor-in-chief. I prepared a needs analysis, 
          technical feasibility study, and business framework. Walked away with my first engineering contract.
          <br><br>
          <em class="highlight" data-i18n="stories.train.highlight">Initiative itself is the strongest generator of opportunity.</em>
        </p>
      </div>
      <div class="bento-item glass span-4 story-card">
        <div class="emoji">🏸</div>
        <h4 data-i18n="stories.badminton.title">Badminton Court Deal</h4>
        <p data-i18n="stories.badminton.desc">
          Met two Imperial College graduates while playing badminton. They needed a recommendation system. 
          I said "Give me two weeks" — despite having just finished my ML course. 
          Two weeks later: a working demo. One month later: system delivered + equity offer.
          <br><br>
          <em class="highlight-purple" data-i18n="stories.badminton.highlight">The ability to learn rapidly is my most reliable asset.</em>
        </p>
      </div>
      <div class="bento-item glass span-4 story-card">
        <div class="emoji">🚪</div>
        <h4 data-i18n="stories.door.title">Knocking on the Professor's Door</h4>
        <p data-i18n="stories.door.desc">
          Sent multiple emails to a professor — no reply. Asked a Korean friend to locate his office. 
          One day, I just showed up. Expressed my research interests face-to-face. 
          Got invited to join his lab.
          <br><br>
          <em class="highlight-green" data-i18n="stories.door.highlight">Opportunities hide one step beyond your hesitation.</em>
        </p>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills">
    <div class="section-header">
      <h2>🛠 <span data-i18n="skills.title">Tech Stack & Skills</span></h2>
      <div class="line"></div>
    </div>
    <div class="bento-grid">
      <div class="bento-item glass span-6">
        <h3><span class="icon">🤖</span> <span data-i18n="skills.ai.title">AI & Machine Learning</span></h3>
        <div class="skills-grid">
          <div class="skill-item glass">
            <span class="skill-icon">🧠</span>
            LLMs
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🕸️</span>
            GraphRAG
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🔗</span>
            LangChain
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">👥</span>
            Multi-Agent
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🔧</span>
            LoRA/QLoRA
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">📊</span>
            NLP
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🎯</span>
            GRPO
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🔍</span>
            RAG
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">💬</span>
            Prompt Eng
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🧪</span>
            Fine-tuning
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🔍</span>
            XAI
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🧠</span>
            Bayesian Net
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🛡️</span>
            Security AI
          </div>
        </div>
      </div>
      <div class="bento-item glass span-6">
        <h3><span class="icon">💻</span> <span data-i18n="skills.dev.title">Development</span></h3>
        <div class="skills-grid">
          <div class="skill-item glass">
            <span class="skill-icon">🐍</span>
            Python
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">⚡</span>
            JavaScript
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🌐</span>
            Web Dev
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🏗️</span>
            Microservices
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">📱</span>
            Desktop Apps
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🔄</span>
            CI/CD
          </div>
        </div>
      </div>
      <div class="bento-item glass span-4">
        <h3><span class="icon">🎨</span> <span data-i18n="skills.tools.title">Tools & Frameworks</span></h3>
        <div class="tags">
          <span class="tag">PyTorch</span>
          <span class="tag">TensorFlow</span>
          <span class="tag">HuggingFace</span>
          <span class="tag">MS-Swift</span>
          <span class="tag">Ollama</span>
          <span class="tag">LanceDB</span>
          <span class="tag">Notion</span>
          <span class="tag">Git</span>
          <span class="tag">Linux</span>
          <span class="tag">Docker</span>
        </div>
      </div>
      <div class="bento-item glass span-4">
        <h3><span class="icon">🗣</span> <span data-i18n="skills.languages.title">Languages</span></h3>
        <div class="tags">
          <span class="tag accent-blue">Chinese (Native)</span>
          <span class="tag accent-purple">English (Fluent)</span>
          <span class="tag accent-green">Korean</span>
        </div>
      </div>
      <div class="bento-item glass span-4">
        <h3><span class="icon">✨</span> <span data-i18n="skills.soft.title">Soft Skills</span></h3>
        <div class="tags">
          <span class="tag accent-orange">Leadership</span>
          <span class="tag">Team Building</span>
          <span class="tag">Project Management</span>
          <span class="tag">Fast Learning</span>
          <span class="tag">Initiative</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <div class="section-header">
      <h2>📬 <span data-i18n="contact.title">Let's Connect</span></h2>
      <div class="line"></div>
    </div>
    <div class="contact-grid">
      <a href="mailto:yebotao@example.com" class="contact-item glass">
        <span class="contact-icon">📧</span>
        <span data-i18n="contact.email">Email</span>
      </a>
      <a href="https://github.com/severin-ye" target="_blank" class="contact-item glass">
        <span class="contact-icon">💻</span>
        <span data-i18n="contact.github">GitHub</span>
      </a>
    </div>
    
    <div class="bento-item glass span-12" style="margin-top: var(--space-xl); text-align: center; padding: var(--space-xl);">
      <p style="font-size: 1.1rem; margin-bottom: var(--space-md);" data-i18n="contact.quote1">
        I don't aim to be the smartest person in the room —<br>
        <strong data-i18n="contact.quote2">I aim to be the one who dares to act.</strong>
      </p>
      <p style="color: var(--text-tertiary); font-size: 0.85rem;" data-i18n="contact.quote3">
        To keep learning, keep moving forward, and keep creating in a complex and ever-changing world.
      </p>
    </div>
  </section>

  <!-- Footer -->
  <footer>
  </footer>
`

// Initialize i18n
i18n.updatePage();

// Smooth reveal animation on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
}, observerOptions)

// Add initial styles and observe elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.bento-item, .stat-item, .contact-item')
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.6s ease ' + (index * 0.05) + 's, transform 0.6s ease ' + (index * 0.05) + 's'
    observer.observe(el)
  })
})

// Parallax effect for orbs
document.addEventListener('mousemove', (e) => {
  const orbs = document.querySelectorAll('.orb')
  const x = e.clientX / window.innerWidth
  const y = e.clientY / window.innerHeight
  
  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 20
    orb.style.transform = 'translate(' + (x * speed) + 'px, ' + (y * speed) + 'px)'
  })
})

// ============================================
// Language Toggle Functionality
// ============================================

function updateLangToggleButton() {
  const langToggle = document.getElementById('lang-toggle')
  if (langToggle) {
    const langText = langToggle.querySelector('.lang-text')
    if (langText) {
      langText.textContent = i18n.currentLang === 'en' ? '中' : 'EN'
    }
  }
}

function initLangToggle() {
  const langToggle = document.getElementById('lang-toggle')
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      i18n.toggle()
      updateLangToggleButton()
    })
  }
  updateLangToggleButton()
}

// Initialize language toggle immediately
initLangToggle()

// Update projects when language changes
i18n.onChange((lang) => {
  updateProjectsLanguage(lang)
})

// ============================================
// Theme Toggle Functionality
// ============================================

// Get the current theme from localStorage or system preference
function getPreferredTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    return savedTheme
  }
  // Check system preference
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

// Apply theme to document
function applyTheme(theme) {
  const root = document.documentElement
  const toggleIcon = document.querySelector('#theme-toggle .icon')
  
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light')
    if (toggleIcon) toggleIcon.textContent = '☀️'
  } else {
    root.setAttribute('data-theme', 'dark')
    if (toggleIcon) toggleIcon.textContent = '🌙'
  }
}

// Initialize theme on page load
function initTheme() {
  const theme = getPreferredTheme()
  applyTheme(theme)
}

// Toggle theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  
  localStorage.setItem('theme', newTheme)
  applyTheme(newTheme)
}

// Initialize theme immediately
initTheme()

// Set up theme toggle button
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle')
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme)
  }
  
  // Re-apply theme after DOM is ready (in case icon wasn't ready)
  applyTheme(getPreferredTheme())
})

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
  // Only auto-switch if user hasn't set a preference
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'light' : 'dark')
  }
})