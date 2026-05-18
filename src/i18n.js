/**
 * Simple i18n system for the portfolio
 */

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.stories': 'Stories',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.status': 'Open to opportunities',
    'hero.tagline1': 'Builder who turns <span>ideas into reality</span>.',
    'hero.tagline2': 'AI Researcher exploring the frontiers of Medical AI & LLMs.',
    'hero.belief': 'I believe the world needs people who can stay clear-headed amid complexity — those who create order from chaos and new value from uncertainty.',
    'hero.stat1': 'Research Projects',
    'hero.stat2': 'Tech Stacks',
    'hero.stat3': 'Curiosity',
    
    // About
    'about.title': 'Who I Am',
    'about.focus.title': 'Current Focus',
    'about.focus.desc': 'Leading research on <strong>Hallucination Detection in Medical Text Summarization</strong> — building systems that make AI more trustworthy in healthcare. From finding supervisors to assembling teams and coordinating progress, I initiated and managed the entire process.',
    'about.philosophy.title': 'Philosophy',
    'about.philosophy.desc': 'I believe in the <strong>Compounding Effect</strong> — investing time where growth becomes exponential. True resilience isn\'t dependence on rules, but understanding their logic.',
    'about.vision.title': 'Future Vision',
    'about.vision.desc': 'Aspiring entrepreneur since high school. I value the <strong>freedom to create</strong> above all else — the courage to venture into the unknown and build what doesn\'t exist yet.',
    'about.learning.title': 'Self-Directed Learning',
    'about.learning.desc': 'I refuse to be a prisoner of the curriculum. Beyond core courses, I actively explore:',
    'about.quote': 'Opportunities exist where the concepts have not yet been invented.',
    'about.quote.author': '— Ye Botao',
    
    // Projects
    'projects.title': 'Research & Projects',

    // Stories
    'stories.title': 'Stories That Shaped Me',
    'stories.train.title': 'The High-Speed Train Encounter',
    'stories.train.desc': 'Summer 2023: Met an elderly gentleman interested in AI on a train. He turned out to be a medical journal editor-in-chief. I prepared a needs analysis, technical feasibility study, and business framework. Walked away with my first engineering contract.',
    'stories.train.highlight': 'Initiative itself is the strongest generator of opportunity.',
    'stories.badminton.title': 'Badminton Court Deal',
    'stories.badminton.desc': 'Met two Imperial College graduates while playing badminton. They needed a recommendation system. I said "Give me two weeks" — despite having just finished my ML course. Two weeks later: a working demo. One month later: system delivered + equity offer.',
    'stories.badminton.highlight': 'The ability to learn rapidly is my most reliable asset.',
    'stories.door.title': 'Knocking on the Professor\'s Door',
    'stories.door.desc': 'Sent multiple emails to a professor — no reply. Asked a Korean friend to locate his office. One day, I just showed up. Expressed my research interests face-to-face. Got invited to join his lab.',
    'stories.door.highlight': 'Opportunities hide one step beyond your hesitation.',
    
    // Skills
    'skills.title': 'Tech Stack & Skills',
    'skills.ai.title': 'AI & Machine Learning',
    'skills.dev.title': 'Development',
    'skills.tools.title': 'Tools & Frameworks',
    'skills.languages.title': 'Languages',
    'skills.soft.title': 'Soft Skills',
    
    // Contact
    'contact.title': 'Let\'s Connect',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.quote1': 'I don\'t aim to be the smartest person in the room —',
    'contact.quote2': 'I aim to be the one who dares to act.',
    'contact.quote3': 'To keep learning, keep moving forward, and keep creating in a complex and ever-changing world.',
  },
  zh: {
    // Navigation
    'nav.about': '关于我',
    'nav.projects': '项目',
    'nav.stories': '故事',
    'nav.skills': '技能',
    'nav.contact': '联系方式',
    
    // Hero
    'hero.status': '开放机会',
    'hero.tagline1': '将<span>想法变为现实</span>的构建者。',
    'hero.tagline2': '探索医学AI与LLM前沿的AI研究者。',
    'hero.belief': '我相信世界需要能在复杂中保持清醒的人——那些能在混沌中创造秩序、在不确定中创造新价值的人。',
    'hero.stat1': '研究项目',
    'hero.stat2': '技术栈',
    'hero.stat3': '好奇心',
    
    // About
    'about.title': '我是谁',
    'about.focus.title': '当前聚焦',
    'about.focus.desc': '主导<strong>医学文本摘要中的幻觉检测</strong>研究——构建让AI在医疗领域更可信的系统。从寻找导师到组建团队、协调进度，我发起并管理了整个过程。',
    'about.philosophy.title': '哲学',
    'about.philosophy.desc': '我相信<strong>复利效应</strong>——在增长呈指数级的地方投入时间。真正的韧性不是依赖规则，而是理解规则背后的逻辑。',
    'about.vision.title': '未来愿景',
    'about.vision.desc': '从高中起就立志成为创业者。我最看重<strong>创造的自由</strong>——敢于踏入未知、构建尚不存在之物的勇气。',
    'about.learning.title': '自主学习',
    'about.learning.desc': '我拒绝成为课程的囚徒。除了核心课程，我还主动探索：',
    'about.quote': '机会存在于概念尚未被发明的地方。',
    'about.quote.author': '—— Ye Botao',
    
    // Projects
    'projects.title': '研究与项目',

    // Stories
    'stories.title': '塑造我的故事',
    'stories.train.title': '高铁奇遇',
    'stories.train.desc': '2023年夏天：在高铁上遇到一位对AI感兴趣的老人家。原来是医学期刊主编。我准备了需求分析、技术可行性研究和商业框架。拿到了我的第一份工程合同。',
    'stories.train.highlight': '主动性本身就是最强的机会生成器。',
    'stories.badminton.title': '羽毛球场的交易',
    'stories.badminton.desc': '打羽毛球时遇到两位帝国理工毕业生。他们需要推荐系统。我说"给我两周"——尽管刚上完ML课。两周后：工作demo。一个月后：系统交付+股权邀约。',
    'stories.badminton.highlight': '快速学习的能力是我最可靠的资产。',
    'stories.door.title': '敲开教授的门',
    'stories.door.desc': '给教授发了多封邮件——没有回复。请韩国朋友帮忙找到他的办公室。有一天，我直接上门。面对面表达了研究兴趣。被邀请加入他的实验室。',
    'stories.door.highlight': '机会就藏在犹豫之外的一步。',
    
    // Skills
    'skills.title': '技术栈与技能',
    'skills.ai.title': 'AI与机器学习',
    'skills.dev.title': '开发',
    'skills.tools.title': '工具与框架',
    'skills.languages.title': '语言',
    'skills.soft.title': '软技能',
    
    // Contact
    'contact.title': '联系我',
    'contact.email': '邮箱',
    'contact.github': 'GitHub',
    'contact.quote1': '我不追求成为房间里最聪明的人——',
    'contact.quote2': '我追求成为敢于行动的人。',
    'contact.quote3': '在复杂多变的世界里，保持学习、保持前进、保持创造。',
  }
};

class I18n {
  constructor() {
    this.currentLang = this.getPreferredLanguage();
    this.listeners = [];
  }

  getPreferredLanguage() {
    // Check saved preference first
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) {
      return saved;
    }
    
    // Check system language
    const systemLang = navigator.language || navigator.userLanguage;
    if (systemLang && systemLang.startsWith('zh')) {
      return 'zh';
    }
    
    return 'en';
  }

  setLanguage(lang) {
    if (translations[lang] && this.currentLang !== lang) {
      this.currentLang = lang;
      localStorage.setItem('language', lang);
      this.updatePage();
      this.listeners.forEach(cb => cb(lang));
    }
  }

  t(key) {
    const translation = translations[this.currentLang];
    return translation && translation[key] ? translation[key] : key;
  }

  toggle() {
    const newLang = this.currentLang === 'en' ? 'zh' : 'en';
    this.setLanguage(newLang);
  }

  updatePage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text !== key) {
        if (text.includes('<')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
  }

  onChange(callback) {
    this.listeners.push(callback);
  }
}

export const i18n = new I18n();
export default i18n;