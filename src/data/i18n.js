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
    'hero.stat1': 'Projects',
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
    'stories.train.title': 'Real Needs Aren\'t Found at School',
    'stories.train.desc': "My first engineering contract came from a chance encounter on a high-speed train. In the summer of 2023, I met a medical journal editor-in-chief who was interested in AI. That conversation wasn't just a casual chat about technology—it was my first exposure to real needs in the medical publishing world: how to use AI to improve content processing efficiency, how to assess whether a system is truly feasible, and how to turn a vague idea into an executable engineering plan. Afterward, I completed a needs analysis, technical feasibility study, and business framework design around this requirement, and landed my first engineering contract.",
    'stories.train.highlight': "This experience made me realize that opportunities don't always appear in the form of \"projects.\" They might start as just a conversation, a pain point, or a problem that hasn't yet been clearly defined. What truly matters is whether you can identify it and break it down into a deliverable system.",
    'stories.badminton.title': 'Opportunity rarely waits until you\'re ready.',
    'stories.badminton.desc': "My first recommendation system project came from a badminton game. At the time, I met two Imperial College graduates while playing badminton. They were looking for a recommendation system solution, and I had just finished my machine learning course. Faced with this opportunity, I didn't limit myself to the identity of a \"student.\" Instead, I treated the problem as a system delivery task. I said: \"Give me two weeks.\" Over the next two weeks, I broke the requirement down into several specific questions: what should the system recommend, what are the user inputs, how to select the model, how to present the results, and how to validate the prototype. Two weeks later, I completed a working demo. One month later, the system entered formal delivery and received an equity offer.",
    'stories.badminton.highlight': "This experience confirmed for me that the value of learning isn't just mastering concepts—it's whether you can quickly transform newly acquired knowledge into something that others truly need and can actually use.",
    'stories.door.title': 'No Reply? Knock on the Door',
    'stories.door.desc': "My opportunity to enter a research lab didn't come from a successful email. At the time, I had sent multiple emails to a professor expressing my research interests, but never received a response. Later, I realized that if I just kept waiting, things probably wouldn't change. So I asked a Korean friend to confirm the professor's office and decided to visit directly. During that face-to-face conversation, I introduced my project experience, research interests, and reasons for wanting systematic research training. Compared to email, face-to-face communication gave me the chance to express myself more clearly: I didn't just want to \"join a lab,\" but hoped to transform the problem-awareness I had developed through engineering projects into more long-term, systematic research capabilities. Ultimately, I was offered the opportunity to join the lab.",
    'stories.door.highlight': "This taught me that research opportunities, like entrepreneurial opportunities, require active pursuit. Often, opportunities don't appear automatically—you have to put yourself in front of the problem and the people first, then prove yourself through clear expression and genuine action.",
    
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
    'hero.stat1': '项目',
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
    'stories.train.title': '真实的需求不在学校',
    'stories.train.desc': '我的第一份工程合同，来自一次高铁上的偶然交流。2023年夏天，我在高铁上遇到了一位对AI感兴趣的医学期刊主编。那次交流让我第一次接触到医学出版场景中的真实需求：如何用AI提升内容处理效率，如何判断系统是否真的可行，以及如何把一个模糊想法转化为可以执行的工程方案。之后，我完成了需求分析、技术可行性研究和商业框架设计，并拿到了自己的第一份工程合同。',
    'stories.train.highlight': '这段经历让我第一次意识到，机会往往并不是以"项目"的形式出现的。它最开始可能只是一段对话、一个痛点，或者一个尚未被清楚定义的问题。真正重要的是，能否把它识别出来，并进一步拆解成可以落地的系统。',
    'stories.badminton.title': '机会，不总在准备好的时候发生',
    'stories.badminton.desc': '我的第一个推荐系统项目，来自一次羽毛球活动。当时，我在打羽毛球时认识了两位帝国理工学院的毕业生。他们正在寻找一个推荐系统方案，而我刚刚完成机器学习课程。面对这个机会，我没有把自己限制在"学生"身份里，而是直接把问题当成一个需要交付的系统任务来处理。我提出："给我两周。"接下来的两周里，我把需求拆成几个具体问题。两周后，我完成了一个可以运行的demo。一个月后，系统进入正式交付阶段，并获得了股权邀约。',
    'stories.badminton.highlight': '这段经历让我确认，学习的价值不只是掌握概念，而是能否把刚学到的知识快速转化为别人真正需要、真正能用的东西。',
    'stories.door.title': '没有回复，就去敲门',
    'stories.door.desc': '我进入实验室的机会，并不是通过一封成功的邮件获得的。当时，我给一位教授发送了多封邮件，希望表达自己的研究兴趣，但一直没有收到回复。后来，我意识到，如果只是继续等待，事情很可能不会发生变化。于是，我请韩国朋友帮忙确认了教授的办公室，并决定直接上门拜访。那次面对面交流中，我介绍了自己的项目经历、研究兴趣，以及希望接受系统性科研训练的原因。最终，我获得了加入其实验室的机会。',
    'stories.door.highlight': '这件事让我明白，研究机会和创业机会一样，都需要主动争取。很多时候，机会不会自动出现，你必须先把自己带到问题和人面前，然后用清晰的表达和真实的行动证明自己。',
    
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