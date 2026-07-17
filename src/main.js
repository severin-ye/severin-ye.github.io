import './style.css'
import { renderProjectsMarkup, updateProjectsLanguage, projectData } from './data/projectLayout.js'
import { i18n } from './data/i18n.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

document.querySelector('#app').innerHTML = `
  <!-- Theme Toggle Button -->
  <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
    <span class="icon">🌙</span>
  </button>

  <!-- Language Toggle Button -->
  <button class="lang-toggle" id="lang-toggle" aria-label="Toggle language">
    <span class="lang-text">EN</span>
  </button>

  <!-- Scroll Progress Bar -->
  <div class="scroll-progress" aria-hidden="true"></div>

  <!-- Background Gradient Orbs -->
  <div class="bg-gradient">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <!-- Section Side Navigation -->
  <nav class="section-nav">
    <div class="nav-track"></div>
    <button class="nav-dot" data-target="about" aria-label="About">
      <span class="nav-label" data-i18n="nav.about">About</span>
    </button>
    <button class="nav-dot" data-target="projects" aria-label="Projects">
      <span class="nav-label" data-i18n="nav.projects">Projects</span>
    </button>
    <button class="nav-dot" data-target="stories" aria-label="Stories">
      <span class="nav-label" data-i18n="nav.stories">Stories</span>
    </button>
    <button class="nav-dot" data-target="skills" aria-label="Skills">
      <span class="nav-label" data-i18n="nav.skills">Skills</span>
    </button>
    <button class="nav-dot" data-target="contact" aria-label="Contact">
      <span class="nav-label" data-i18n="nav.contact">Contact</span>
    </button>
  </nav>

  <main>

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
        <p class="hero-belief" data-i18n="hero.belief">
          I believe the world needs people who can stay clear-headed amid complexity — 
          those who create order from chaos and new value from uncertainty.
        </p>
      </div>
      <div class="quick-stats">
        <div class="stat-item glass">
          <span class="stat-value" id="stat-projects">3+</span>
          <span class="stat-label" data-i18n="hero.stat1">Projects</span>
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
    <button class="scroll-cue" aria-label="Scroll to About">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
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
    <div class="bento-item glass span-12 quote-block no-tilt glow-blue" style="margin-top: var(--space-lg);" data-i18n="about.quote">
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
        <h4 data-i18n="stories.train.title">Real Needs Aren't Found at School</h4>
        <p data-i18n="stories.train.desc">
          My first engineering contract came from a chance encounter on a high-speed train.
          <br><br>
          In the summer of 2023, I met a medical journal editor-in-chief who was interested in AI. That conversation wasn't just a casual chat about technology—it was my first exposure to real needs in the medical publishing world: how to use AI to improve content processing efficiency, how to assess whether a system is truly feasible, and how to turn a vague idea into an executable engineering plan.
          <br><br>
          Afterward, I completed a needs analysis, technical feasibility study, and business framework design around this requirement, and landed my first engineering contract.
        </p>
        <em class="highlight" data-i18n="stories.train.highlight">This experience made me realize that opportunities don't always appear in the form of "projects." They might start as just a conversation, a pain point, or a problem that hasn't yet been clearly defined. What truly matters is whether you can identify it and break it down into a deliverable system.</em>
      </div>
      <div class="bento-item glass span-4 story-card">
        <div class="emoji">🏸</div>
        <h4 data-i18n="stories.badminton.title">Opportunity rarely waits until you're ready.</h4>
        <p data-i18n="stories.badminton.desc">
          My first recommendation system project came from a badminton game.
          <br><br>
          At the time, I met two Imperial College graduates while playing badminton. They were looking for a recommendation system solution, and I had just finished my machine learning course. Faced with this opportunity, I didn't limit myself to the identity of a "student." Instead, I treated the problem as a system delivery task.
          <br><br>
          I said: "Give me two weeks."
          <br><br>
          Over the next two weeks, I broke the requirement down into several specific questions: what should the system recommend, what are the user inputs, how to select the model, how to present the results, and how to validate the prototype. Two weeks later, I completed a working demo. One month later, the system entered formal delivery and received an equity offer.
        </p>
        <em class="highlight-purple" data-i18n="stories.badminton.highlight">This experience confirmed for me that the value of learning isn't just mastering concepts—it's whether you can quickly transform newly acquired knowledge into something that others truly need and can actually use.</em>
      </div>
      <div class="bento-item glass span-4 story-card">
        <div class="emoji">🚪</div>
        <h4 data-i18n="stories.door.title">Knocking on the Professor's Door</h4>
        <p data-i18n="stories.door.desc">
          My opportunity to enter a research lab didn't come from a successful email.
          <br><br>
          At the time, I had sent multiple emails to a professor expressing my research interests, but never received a response. Later, I realized that if I just kept waiting, things probably wouldn't change. So I asked a Korean friend to confirm the professor's office and decided to visit directly.
          <br><br>
          During that face-to-face conversation, I introduced my project experience, research interests, and reasons for wanting systematic research training. Compared to email, face-to-face communication gave me the chance to express myself more clearly: I didn't just want to "join a lab," but hoped to transform the problem-awareness I had developed through engineering projects into more long-term, systematic research capabilities.
          <br><br>
          Ultimately, I was offered the opportunity to join the lab.
        </p>
        <em class="highlight-green" data-i18n="stories.door.highlight">This taught me that research opportunities, like entrepreneurial opportunities, require active pursuit. Often, opportunities don't appear automatically—you have to put yourself in front of the problem and the people first, then prove yourself through clear expression and genuine action.</em>
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
      <a href="mailto:6severin9@gmail.com" class="contact-item glass">
        <span class="contact-icon">📧</span>
        <span data-i18n="contact.email">Email</span>
      </a>
      <a href="https://github.com/severin-ye" target="_blank" class="contact-item glass">
        <span class="contact-icon">💻</span>
        <span data-i18n="contact.github">GitHub</span>
      </a>
    </div>
    
    <div class="bento-item glass span-12 no-tilt glow-gold" style="margin-top: var(--space-xl); text-align: center; padding: var(--space-xl);">
      <p style="font-size: 1.1rem; margin-bottom: var(--space-md);" data-i18n="contact.quote1">
        I don't aim to be the smartest person in the room —<br>
        <strong data-i18n="contact.quote2">I aim to be the one who dares to act.</strong>
      </p>
      <p style="color: var(--text-tertiary); font-size: 0.85rem;" data-i18n="contact.quote3">
        To keep learning, keep moving forward, and keep creating in a complex and ever-changing world.
      </p>
    </div>
  </section>
  </main>

  <!-- Footer -->
  <footer>
  </footer>
`

// Initialize i18n
i18n.updatePage();

// ============================================
// Animation System (GSAP + ScrollTrigger)
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Hero Title Character Animation ----
  function animateHeroTitle() {
    const h1 = document.querySelector('.hero-text h1')
    if (!h1) return
    const text = h1.textContent.trim()
    h1.textContent = ''
    const chars = [...text]
    chars.forEach((char, i) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.className = 'char-animate'
      span.style.animationDelay = `${0.3 + i * 0.05}s`
      h1.appendChild(span)
    })
  }

  // ---- Card Hover Effects: 3D Tilt for display cards, lift for cards with links ----
  function initCardTilt() {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cards = document.querySelectorAll('.bento-item.glass:not(.no-tilt), .project-card, .stat-item.glass')
    cards.forEach(card => {
      const children = Array.from(card.childNodes)
      const inner = document.createElement('div')
      inner.className = 'tilt-card-inner'
      children.forEach(c => inner.appendChild(c))
      card.appendChild(inner)

      const hasInteractive = card.querySelector('a, button, .paper-link, .github-link')

      if (hasInteractive) {
        card.classList.add('tilt-card')
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-6px)'
          card.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'
        })
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0px)'
          card.style.boxShadow = ''
        })
      } else {
        card.classList.add('tilt-3d')
        const gloss = document.createElement('div')
        gloss.className = 'card-gloss'
        card.appendChild(gloss)

        card.addEventListener('mouseenter', () => {
          card._tilt = null
        })

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          let deltaX = (x - centerX) / (centerX * 1.8)
          let deltaY = (y - centerY) / (centerY * 1.8)

          const isFirst = !card._tilt
          const cooling = card._cooldown && (Date.now() - card._cooldown) < 200
          if (!isFirst) {
            const dz = cooling ? 0.10 : 0
            if (Math.abs(deltaX - card._tilt.dx) < dz && Math.abs(deltaY - card._tilt.dy) < dz) return
          }
          card._tilt = { dx: deltaX, dy: deltaY }
          card._cooldown = Date.now()

          card.style.transition = isFirst ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
          card.style.transform = `perspective(800px) rotateX(${deltaY * -3}deg) rotateY(${deltaX * 3}deg) translateY(-2px)`
          card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`)
          card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`)
        })

        card.addEventListener('mouseleave', () => {
          card._tilt = null
          card._cooldown = null
          card.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)'
        })
      }
    })
  }

  // ---- Section Side Navigation ----
  function initSectionNav() {
    const nav = document.querySelector('.section-nav')
    const dots = document.querySelectorAll('.nav-dot')
    const sections = document.querySelectorAll('section[id]')
    if (!nav || dots.length === 0) return

    // Active section tracking via scroll
    function updateActiveDot() {
      // If locked to a target (click-to-jump in progress), show that dot
      if (nav.dataset.locked) {
        dots.forEach(d => d.classList.remove('active'))
        const locked = nav.querySelector(`[data-target="${nav.dataset.locked}"]`)
        if (locked) locked.classList.add('active')
        return
      }
      // Normal scroll-based tracking
      let current = sections[0].id
      const viewTop = window.scrollY + 120
      sections.forEach(s => {
        if (s.offsetTop <= viewTop) current = s.id
      })
      dots.forEach(d => d.classList.remove('active'))
      const dot = nav.querySelector(`[data-target="${current}"]`)
      if (dot) dot.classList.add('active')
    }

    // Unlock after scrolling settles (click-to-jump completed)
    let scrollTimer = null
    window.addEventListener('scroll', () => {
      if (!nav.dataset.locked) return
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        delete nav.dataset.locked
        updateActiveDot()
      }, 400)
    }, { passive: true })

    window.addEventListener('scroll', updateActiveDot, { passive: true })
    updateActiveDot()

    // Click-to-jump — lock active dot immediately
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        if (nav.dataset.dragged === 'true') return
        const targetId = dot.dataset.target
        nav.dataset.locked = targetId
        updateActiveDot()
        const target = document.getElementById(targetId)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })

    // Drag to scrub — snap to nearest dot's section
    nav.addEventListener('mousedown', (e) => {
      e.preventDefault()
      delete nav.dataset.locked
      delete nav.dataset.dragged
      nav.classList.add('dragging')

      const startY = e.clientY

      // Pre-compute each dot's section scroll position (clamped)
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const targets = Array.from(dots).map(d => {
        const s = document.getElementById(d.dataset.target)
        return { dot: d, top: s ? Math.min(s.getBoundingClientRect().top + window.scrollY, maxScroll) : 0 }
      })

      let moved = false
      let prevTarget = null

      function onMove(ev) {
        const y = ev.touches ? ev.touches[0].clientY : ev.clientY
        if (Math.abs(y - startY) > 5) moved = true
        if (moved) nav.dataset.dragged = 'true'

        // Find two nearest dots for interpolation
        let best = targets[0]
        let bestDist = Math.abs(y - best.dot.getBoundingClientRect().top - 18)

        for (let i = 1; i < targets.length; i++) {
          const center = targets[i].dot.getBoundingClientRect().top + 18
          const dist = Math.abs(y - center)
          if (dist < bestDist) { bestDist = dist; best = targets[i] }
        }

        if (best !== prevTarget) {
          prevTarget = best
          window.scrollTo(0, best.top)
        }
      }

      function onUp() {
        nav.classList.remove('dragging')
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('touchmove', onMove)
        document.removeEventListener('mouseup', onUp)
        document.removeEventListener('touchend', onUp)
        setTimeout(() => delete nav.dataset.dragged, 100)
      }

      document.addEventListener('mousemove', onMove)
      document.addEventListener('touchmove', onMove, { passive: true })
      document.addEventListener('mouseup', onUp)
      document.addEventListener('touchend', onUp)
    })

    nav.addEventListener('touchstart', (e) => {
      const t = e.touches[0]
      const me = new MouseEvent('mousedown', { clientX: t.clientX, clientY: t.clientY })
      nav.dispatchEvent(me)
    }, { passive: true })
  }

  // ---- ScrollTrigger Entrance Animations ----
  function initScrollTriggers() {
    // Section entrance (exclude hero)
    document.querySelectorAll('section').forEach(section => {
      if (section.classList.contains('hero')) return
      gsap.fromTo(section,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.45, ease: 'power1.out',
          scrollTrigger: { trigger: section, start: 'top bottom-=80', toggleActions: 'play none none none' }
        }
      )
    })

    // Bento items — directional stagger
    document.querySelectorAll('.bento-item').forEach((item, i) => {
      const mod = i % 4
      let fromX = 0, fromY = 20, fromScale = 1
      if (mod === 0)      { fromX = -30; fromY = 15 }
      else if (mod === 1) { fromX = 30; fromY = 15 }
      else if (mod === 2) { fromY = 35; fromScale = 0.92 }
      else                { fromY = 20; fromScale = 0.95 }

      gsap.fromTo(item,
        { opacity: 0, x: fromX, y: fromY, scale: fromScale },
        {
          opacity: 1, x: 0, y: 0, scale: 1, duration: 0.45, delay: i * 0.03, ease: 'power1.out',
          scrollTrigger: { trigger: item, start: 'top bottom-=60', toggleActions: 'play none none none' }
        }
      )
    })

    // Project cards — snap with slight overshoot
    document.querySelectorAll('.project-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.45, delay: i * 0.05, ease: 'power1.out',
          scrollTrigger: { trigger: card, start: 'top bottom-=60', toggleActions: 'play none none none' }
        }
      )
    })

    // Stat items — quick elastic
    document.querySelectorAll('.stat-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30, scale: 0.85 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.35, delay: i * 0.06, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: item, start: 'top bottom-=40', toggleActions: 'play none none none' }
        }
      )
    })

    // Contact items
    document.querySelectorAll('.contact-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.3, delay: i * 0.06, ease: 'power1.out',
          scrollTrigger: { trigger: item, start: 'top bottom-=40', toggleActions: 'play none none none' }
        }
      )
    })

    // Story cards
    document.querySelectorAll('.story-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.4, delay: i * 0.08, ease: 'power1.out',
          scrollTrigger: { trigger: card, start: 'top bottom-=60', toggleActions: 'play none none none' }
        }
      )
    })
  }

  // ---- Ripple Effect ----
  function initRipple() {
    document.querySelectorAll('.tag, .skill-item, .contact-item, .stat-item').forEach(el => {
      el.classList.add('ripple-container')
      el.addEventListener('click', function(e) {
        const existing = el.querySelector('.ripple-effect')
        if (existing) existing.remove()
        const ripple = document.createElement('span')
        ripple.className = 'ripple-effect'
        const rect = el.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height) * 2
        ripple.style.width = ripple.style.height = `${size}px`
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`
        el.appendChild(ripple)
      })
    })
  }

  // ---- Theme & Lang Buttons Entrance ----
  function animateHeaderButtons() {
    gsap.fromTo('.theme-toggle',
      { opacity: 0, scale: 0.5, rotation: -30 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.6, delay: 0.5, ease: 'back.out(1.7)' }
    )
    gsap.fromTo('.lang-toggle',
      { opacity: 0, scale: 0.5, rotation: 30 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.6, delay: 0.6, ease: 'back.out(1.7)' }
    )
  }

  // ---- Scroll-away: subtle upward suction at viewport edge ----
  function initScrollAway() {
    document.querySelectorAll('section').forEach(section => {
      if (section.classList.contains('hero')) return
      gsap.to(section, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 0%',
          end: 'top -40%',
          scrub: 0.3
        }
      })
    })
  }

  // ---- Custom Cursor ----
  function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const ring = document.createElement('div')
    ring.className = 'cursor-ring'
    const dot = document.createElement('div')
    dot.className = 'cursor-dot'
    document.body.appendChild(ring)
    document.body.appendChild(dot)

    const ringX = gsap.quickTo(ring, 'x', { duration: 0.12, ease: 'power2.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.12, ease: 'power2.out' })
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.04, ease: 'none' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.04, ease: 'none' })

    document.addEventListener('mousemove', (e) => {
      const interactive = e.target.closest('a, button, .nav-dot')
      ring.classList.toggle('cursor-hover', !!interactive)

      const ringSize = ring.classList.contains('cursor-hover') ? 42 : 28
      ringX(e.clientX - ringSize / 2)
      ringY(e.clientY - ringSize / 2)
      dotX(e.clientX - 3)
      dotY(e.clientY - 3)
    })

    document.addEventListener('mouseleave', () => {
      ring.style.opacity = '0'
      dot.style.opacity = '0'
    })
    document.addEventListener('mouseenter', () => {
      ring.style.opacity = '1'
      dot.style.opacity = '1'
    })
  }

  // ---- Scroll Progress Bar ----
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress')
    if (!bar) return
    gsap.to(bar, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.3 }
    })
  }

  // ---- Hero Scroll Cue ----
  function initScrollCue() {
    const cue = document.querySelector('.scroll-cue')
    if (!cue) return
    const toggleVisibility = () => cue.classList.toggle('hidden', window.scrollY > 60)
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility()
    cue.addEventListener('click', () => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  // ---- Dynamic Stats ----
  function initDynamicStats() {
    const stat = document.getElementById('stat-projects')
    if (stat) stat.textContent = `${projectData.length}+`
  }

  // Execute all
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  animateHeroTitle()
  initSectionNav()
  initScrollProgress()
  initScrollCue()
  initDynamicStats()
  initRipple()
  animateHeaderButtons()
  if (!reduceMotion) {
    initCardTilt()
    initScrollTriggers()
    initScrollAway()
    initCursor()
  }
})

// Enhanced orb parallax with GSAP quickTo for smooth mouse follow
const reduceOrbMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const orbQuickTos = []
document.querySelectorAll('.orb').forEach((orb, i) => {
  orbQuickTos.push({
    x: gsap.quickTo(orb, 'x', { duration: 0.6, ease: 'power2.out' }),
    y: gsap.quickTo(orb, 'y', { duration: 0.6, ease: 'power2.out' })
  })
})

if (!reduceOrbMotion) {
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    orbQuickTos.forEach((qt, i) => {
      const speed = (i + 1) * 28
      qt.x((x - 0.5) * speed)
      qt.y((y - 0.5) * speed)
    })
  })
}

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