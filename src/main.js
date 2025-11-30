import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Background Gradient Orbs -->
  <div class="bg-gradient">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <!-- Navigation -->
  <nav class="glass">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#stories">Stories</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <div class="status-badge glass">Open to opportunities</div>
        <h1>Ye Botao</h1>
        <p class="tagline">
          Builder who turns <span>ideas into reality</span>.<br>
          AI Researcher exploring the frontiers of Medical AI & LLMs.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: var(--space-lg);">
          I believe the world needs people who can stay clear-headed amid complexity — 
          those who create order from chaos and new value from uncertainty.
        </p>
      </div>
      <div class="quick-stats">
        <div class="stat-item glass">
          <span class="stat-value">3+</span>
          <span class="stat-label">Research Projects</span>
        </div>
        <div class="stat-item glass">
          <span class="stat-value">5+</span>
          <span class="stat-label">Tech Stacks</span>
        </div>
        <div class="stat-item glass">
          <span class="stat-value">∞</span>
          <span class="stat-label">Curiosity</span>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about">
    <div class="section-header">
      <h2>🧬 Who I Am</h2>
      <div class="line"></div>
    </div>
    <div class="bento-grid">
      <div class="bento-item glass span-8">
        <h3><span class="icon">🎯</span> Current Focus</h3>
        <p>
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
        <h3><span class="icon">💡</span> Philosophy</h3>
        <p>
          I believe in the <strong>Compounding Effect</strong> — investing time where growth becomes exponential. 
          True resilience isn't dependence on rules, but understanding their logic.
        </p>
      </div>
      <div class="bento-item glass span-4">
        <h3><span class="icon">🔮</span> Future Vision</h3>
        <p>
          Aspiring entrepreneur since high school. I value the <strong>freedom to create</strong> above all else — 
          the courage to venture into the unknown and build what doesn't exist yet.
        </p>
      </div>
      <div class="bento-item glass span-8">
        <h3><span class="icon">📚</span> Self-Directed Learning</h3>
        <p>
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
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <div class="section-header">
      <h2>🚀 Research & Projects</h2>
      <div class="line"></div>
    </div>
    <div class="bento-grid">
      <div class="bento-item glass span-6 project-card">
        <div class="project-meta">
          <span>🔬 Ongoing Research</span>
          <span>•</span>
          <span>2025</span>
        </div>
        <h4>Unsupervised Preference Alignment (UPA)</h4>
        <p>
          Developing methods for Medical Multi-turn Dialogue Models — automatically extracting 
          high-quality preference samples without costly human annotations. Introducing Solution 
          Routing and Dual-level Preference Ranking.
        </p>
        <div class="tags">
          <span class="tag accent-blue">GRPO</span>
          <span class="tag accent-purple">Qwen3-32B</span>
          <span class="tag accent-green">H100 GPU</span>
        </div>
      </div>
      <div class="bento-item glass span-6 project-card">
        <div class="project-meta">
          <span>🏆 Competition</span>
          <span>•</span>
          <span>EY ESG Challenge</span>
        </div>
        <h4>Team Leadership & Notion Workflow</h4>
        <p>
          Led a diverse team by building a complete project management system in Notion — 
          with topic selection, data collection, draft writing, and final presentation phases. 
          Judges praised our logical clarity and organizational rigor.
        </p>
        <div class="tags">
          <span class="tag accent-orange">Leadership</span>
          <span class="tag">System Design</span>
          <span class="tag">ESG</span>
        </div>
      </div>
      <div class="bento-item glass span-4 project-card">
        <div class="project-meta">
          <span>💼 Contract Work</span>
          <span>•</span>
          <span>2023</span>
        </div>
        <h4>Medical Journal AI Integration</h4>
        <p>
          First professional engineering contract — introduced AI products to a medical journal company.
        </p>
        <div class="tags">
          <span class="tag accent-blue">AI Products</span>
          <span class="tag">Medical</span>
        </div>
      </div>
      <div class="bento-item glass span-4 project-card">
        <div class="project-meta">
          <span>🎯 Startup Collab</span>
          <span>•</span>
          <span>2025</span>
        </div>
        <h4>Recommendation System</h4>
        <p>
          Built a lightweight recommendation system demo for Imperial College London graduates' startup. 
          Received equity offer (politely declined).
        </p>
        <div class="tags">
          <span class="tag accent-purple">RecSys</span>
          <span class="tag">ML</span>
        </div>
      </div>
      <div class="bento-item glass span-4 project-card">
        <div class="project-meta">
          <span>📖 Digital Humanities</span>
        </div>
        <h4>Causal Graph System</h4>
        <p>
          Developed systems to analyze event logic and causal relationships in long-form narratives.
        </p>
        <div class="tags">
          <span class="tag accent-green">NLP</span>
          <span class="tag">Visualization</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Stories Section -->
  <section id="stories">
    <div class="section-header">
      <h2>✨ Stories That Shaped Me</h2>
      <div class="line"></div>
    </div>
    <div class="bento-grid">
      <div class="bento-item glass span-4 story-card">
        <div class="emoji">🚄</div>
        <h4>The High-Speed Train Encounter</h4>
        <p>
          Summer 2023: Met an elderly gentleman interested in AI on a train. 
          He turned out to be a medical journal editor-in-chief. I prepared a needs analysis, 
          technical feasibility study, and business framework. Walked away with my first engineering contract.
          <br><br>
          <em class="highlight">Initiative itself is the strongest generator of opportunity.</em>
        </p>
      </div>
      <div class="bento-item glass span-4 story-card">
        <div class="emoji">🏸</div>
        <h4>Badminton Court Deal</h4>
        <p>
          Met two Imperial College graduates while playing badminton. They needed a recommendation system. 
          I said "Give me two weeks" — despite having just finished my ML course. 
          Two weeks later: a working demo. One month later: system delivered + equity offer.
          <br><br>
          <em class="highlight-purple">The ability to learn rapidly is my most reliable asset.</em>
        </p>
      </div>
      <div class="bento-item glass span-4 story-card">
        <div class="emoji">🚪</div>
        <h4>Knocking on the Professor's Door</h4>
        <p>
          Sent multiple emails to a professor — no reply. Asked a Korean friend to locate his office. 
          One day, I just showed up. Expressed my research interests face-to-face. 
          Got invited to join his lab.
          <br><br>
          <em class="highlight-green">Opportunities hide one step beyond your hesitation.</em>
        </p>
      </div>
    </div>
    
    <!-- Quote -->
    <div class="bento-item glass span-12 quote-block" style="margin-top: var(--space-lg);">
      A true leader is not a commander, but a designer of order and an amplifier of collective energy.
      <span class="author">— My philosophy on leadership</span>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills">
    <div class="section-header">
      <h2>🛠 Tech Stack & Skills</h2>
      <div class="line"></div>
    </div>
    <div class="bento-grid">
      <div class="bento-item glass span-6">
        <h3><span class="icon">🤖</span> AI & Machine Learning</h3>
        <div class="skills-grid">
          <div class="skill-item glass">
            <span class="skill-icon">🧠</span>
            LLMs
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
        </div>
      </div>
      <div class="bento-item glass span-6">
        <h3><span class="icon">💻</span> Development</h3>
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
            <span class="skill-icon">📱</span>
            Cross-platform
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">⛓️</span>
            Blockchain
          </div>
          <div class="skill-item glass">
            <span class="skill-icon">🔗</span>
            APIs
          </div>
        </div>
      </div>
      <div class="bento-item glass span-4">
        <h3><span class="icon">🎨</span> Tools & Systems</h3>
        <div class="tags">
          <span class="tag">Notion</span>
          <span class="tag">Git</span>
          <span class="tag">Linux</span>
          <span class="tag">Docker</span>
          <span class="tag">HuggingFace</span>
          <span class="tag">PyTorch</span>
        </div>
      </div>
      <div class="bento-item glass span-4">
        <h3><span class="icon">🗣</span> Languages</h3>
        <div class="tags">
          <span class="tag accent-blue">Chinese (Native)</span>
          <span class="tag accent-purple">English (Fluent)</span>
          <span class="tag accent-green">Korean</span>
        </div>
      </div>
      <div class="bento-item glass span-4">
        <h3><span class="icon">✨</span> Soft Skills</h3>
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
      <h2>📬 Let's Connect</h2>
      <div class="line"></div>
    </div>
    <div class="contact-grid">
      <a href="mailto:yebotao@example.com" class="contact-item glass">
        <span class="contact-icon">📧</span>
        <span>Email</span>
      </a>
      <a href="https://github.com/severin-ye" target="_blank" class="contact-item glass">
        <span class="contact-icon">💻</span>
        <span>GitHub</span>
      </a>
      <a href="#" class="contact-item glass">
        <span class="contact-icon">💼</span>
        <span>LinkedIn</span>
      </a>
      <a href="#" class="contact-item glass">
        <span class="contact-icon">🐦</span>
        <span>Twitter</span>
      </a>
    </div>
    
    <div class="bento-item glass span-12" style="margin-top: var(--space-xl); text-align: center; padding: var(--space-xl);">
      <p style="font-size: 1.1rem; margin-bottom: var(--space-md);">
        I don't aim to be the smartest person in the room —<br>
        <strong>I aim to be the one who dares to act.</strong>
      </p>
      <p style="color: var(--text-tertiary); font-size: 0.85rem;">
        To keep learning, keep moving forward, and keep creating in a complex and ever-changing world.
      </p>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>
      Designed & Built by <a href="https://github.com/severin-ye">Ye Botao</a> · 2025
    </p>
    <p style="margin-top: var(--space-sm);">
      Built with Vite · Inspired by Apple's Design Language
    </p>
  </footer>
`

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
