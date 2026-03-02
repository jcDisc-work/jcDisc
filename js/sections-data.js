window.EXPERIENCES_DATA = [
  { company: 'R2M IT Solutions, Inc.', dateRange: 'Apr 2023 – Present', title: 'Junior Developer III', description: 'Introduced to admin and more complex tasks. Gained more knowledge in investigation, and formal life cycle of tasks. Also helped in developing major features and upgrading the system to the latest version.' },
  { company: 'Genfinity IT Solutions, Inc.', dateRange: 'Apr 2021 – Mar 2023', title: 'Junior Developer II', description: 'Continuing my journey in programming. I was introduced to medium to high tasks like Timekeeping Calculations, Biometric Logs Reading, and others. I was also given the chance to work on a project that was built from scratch like the Reimbursement System.' },
  { company: 'Genworx IT Solutions, Inc.', dateRange: 'Jul 2020 – Mar 2021', title: 'Junior Developer I', description: 'Landed my first time job in pure coding. Little by little, I built my skills and familiarization in simple UI fixes and backend development.' },
  { company: 'Partner Rural Bank, Inc.', dateRange: 'Sep 2019 – Jul 2020', title: 'IT Staff', description: 'My initial job where I learned the basics of IT in a real-world environment. There I built 2 internal applications used for digitizing bank-related documents and for specially-monitored accounts. I also assisted in the maintenance of the bank\'s network connectivity and other IT-related tasks.' }
];

window.PROJECTS_DATA = [
  {
    title: 'To Do List System',
    description: 'Personal System used for Task Management, and Task Progress Tracking.',
    tech: ['Electron JS', 'Vue JS', 'SQLite', 'HTML', 'Tailwind CSS', 'PHP', 'Laravel 10'],
    img: 'img/projects/to-do-list.png',
    personal: true
  }
  ,{
    title: 'Budget Management System',
    description: 'Personal System used for Budgeting and Monitoring expenses and income.',
    tech: ['PHP 8', 'Laravel 10', 'PostgreSQL', 'HTML', 'Vue JS', 'Tailwind CSS'],
    img: 'img/projects/budget-management.png',
    personal: true
  }
  ,{
    title: 'Eportal v2 System',
    description: 'Upgrade of the existing Eportal System to the latest version.',
    tech: ['PHP 8', 'Laravel', 'PostgreSQL', 'HTML', 'Bootstrap', 'Vue JS'],
    img: 'img/projects/eportal-v2.png'
  }
  ,{
    title: 'Payroll System',
    description: 'Backend system for payroll management and calculations.',
    tech: ['Java', 'PostgreSQL', 'GXT Framework'],
    img: 'img/projects/payroll.png'
  }
  ,{
    title: 'Zetta System',
    description: 'System used for Actuarial Services.',
    tech: ['PHP', 'Laravel', 'PostgreSQL', 'HTML', 'Bootstrap', 'Angular 7', 'Typescript'],
    img: 'img/projects/zetta.png'
  }
  ,{
    title: 'Reimbursement System',
    description: 'System used by HR and admins to manage and process reimbursement requests.',
    tech: ['PHP 7', 'Laravel', 'PostgreSQL', 'HTML', 'Bootstrap', 'Angular JS'],
    img: 'img/projects/reimbursement.png'
  }
  ,{
    title: 'Eportal System',
    description: 'Portal for employee management, timekeeping, and other processes done by HR and employees.',
    tech: ['PHP 5', 'Laravel', 'PostgreSQL', 'HTML', 'Bootstrap', 'Angular JS'],
    img: 'img/projects/eportal.png'
  }
  ,{
    title: 'PRB-CENDRE Monitoring Tool',
    description: 'Internal tool used in bank operations for politically exposed persons and AMLA (Anti-Money Laundering and Counter-Terrorism Financing) monitoring.',
    tech: ['PHP', 'MySQL', 'HTML', 'Bootstrap', 'JavaScript', 'PHPDesktop'],
    images: [
      'assets/images/pj_src/pj-cend-1.jpg',
      'assets/images/pj_src/pj-cend-2.jpg',
      'assets/images/pj_src/pj-cend-3.jpg',
      'assets/images/pj_src/pj-cend-4.jpg',
      'assets/images/pj_src/pj-cend-5.jpg',
      'assets/images/pj_src/pj-cend-6.jpg'
    ]
  }
  ,{
    title: 'Digitization Tool',
    description: 'Internal tool used in bank operations for organizing digitized physical documents of account holder\'s information.',
    tech: ['PHP', 'MySQL', 'HTML', 'Bootstrap', 'JavaScript', 'PHPDesktop'],
    images: [
      'assets/images/pj_src/pj-digi-1.jpg',
      'assets/images/pj_src/pj-digi-2.jpg',
      'assets/images/pj_src/pj-digi-3.jpg'
    ]
  }
];

window.SECTIONS = {
  "sections/about.html": `<section id="about" class="py-24 px-6 border-t border-slate-800/50">
  <div class="max-w-6xl mx-auto w-full min-w-0">
    <h2 class="text-2xl font-semibold text-white mb-6">About</h2>
    <p class="text-slate-400 leading-relaxed mb-4">
      I am a Full Stack Developer with over five years of experience across different IT domains, starting from IT support and progressing into corporate systems development and software engineering.
    </p>
    <p class="text-slate-400 leading-relaxed mb-4">
      I enjoy building applications that automate even the smallest routines, helping teams save time and reduce repetitive work. My technical stack includes PHP, Laravel, Java, MySQL, PostgreSQL, HTML, CSS, JavaScript (Vanilla, Angular, and Vue.js), Bootstrap, Git, and more.
    </p>
    <p class="text-slate-400 leading-relaxed">
      I also make use of AI-assisted tools such as Cursor and Claude to accelerate development, improve code quality, and ensure results meet expectations. My goal is to continuously grow in emerging technologies while staying grounded in collaboration, mentorship, and continuous learning.
    </p>
  </div>
</section>`,
  "sections/back-to-top.html": `<a id="back-to-top" href="#" class="fixed bottom-8 right-8 z-50 flex h-12 min-w-12 items-center justify-center rounded-full bg-cyan-3 px-4 text-slate-950 shadow-lg hover:bg-cyan-2" aria-label="Back to top">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="m18 15-6-6-6 6"/></svg>
  <span class="back-to-top-text font-medium">Back to Top</span>
</a>`,
  "sections/contact.html": `<section id="contact" class="py-24 px-6 border-t border-slate-800/50">
  <div class="max-w-2xl mx-auto">
    <h2 class="text-2xl font-semibold text-white mb-4 text-center">Contact</h2>
    <p class="text-slate-400 mb-8 text-center">Send a message or reach out via email.</p>
    <form class="space-y-5" action="#" method="post">
      <div>
        <label for="contact-email" class="block text-sm font-medium text-slate-300 mb-1.5">Your email</label>
        <input type="email" id="contact-email" name="email" required
          class="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-slate-500 focus:border-cyan-3 focus:ring-1 focus:ring-cyan-3 outline-none transition-colors"
          placeholder="you@example.com">
      </div>
      <div>
        <label for="contact-subject" class="block text-sm font-medium text-slate-300 mb-1.5">Subject</label>
        <input type="text" id="contact-subject" name="subject" required
          class="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-slate-500 focus:border-cyan-3 focus:ring-1 focus:ring-cyan-3 outline-none transition-colors"
          placeholder="What's this about?">
      </div>
      <div>
        <label for="contact-message" class="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
        <textarea id="contact-message" name="message" rows="5" required
          class="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-slate-500 focus:border-cyan-3 focus:ring-1 focus:ring-cyan-3 outline-none transition-colors resize-y"
          placeholder="Your message..."></textarea>
      </div>
      <button type="submit" class="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-cyan-3 text-slate-950 font-medium hover:bg-cyan-2 transition-colors">
        Send message
      </button>
    </form>
    <p class="mt-6 text-slate-500 text-sm text-center">Or email directly: <a href="mailto:johncarldiscaya@gmail.com" class="text-cyan-3 hover:text-cyan-2">johncarldiscaya@gmail.com</a></p>
  </div>
</section>`,
  "sections/experiences.html": `<section id="experiences" class="py-24 px-6 border-t border-slate-800/50 bg-slate-900/30 overflow-x-hidden">
  <div class="max-w-6xl mx-auto w-full min-w-0">
    <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
      <h2 class="text-2xl font-semibold text-white">Experiences</h2>
      <div class="flex items-start gap-2">
        <span class="text-slate-400 text-sm pt-2.5 whitespace-nowrap">View in:</span>
        <div class="flex flex-col items-start gap-1 min-w-0">
          <div id="exp-view-toggle" class="flex rounded-lg border border-slate-700 bg-slate-800/50 p-1 shrink-0">
            <button type="button" id="exp-mode-default" class="exp-mode-btn px-4 py-2 text-sm font-medium rounded-md transition-colors bg-cyan-3 text-slate-950" data-mode="default">Listed</button>
            <button type="button" id="exp-mode-timeline" class="exp-mode-btn px-4 py-2 text-sm font-medium rounded-md transition-colors text-slate-400 hover:text-slate-200" data-mode="timeline">Timeline</button>
          </div>
          <div id="timeline-options-row" class="timeline-options-row overflow-hidden transition-[max-height] duration-300 ease-out w-full" aria-hidden="true">
            <div class="flex flex-col items-start gap-0.5 pt-0.5 w-full">
              <div id="timeline-layout-toggle" class="timeline-layout-toggle relative flex rounded-lg border border-slate-700 bg-slate-800/50 p-1 w-full shrink-0">
                <span class="timeline-layout-pill absolute inset-y-0 left-0 w-1/2 rounded-md bg-cyan-3 transition-[transform] duration-300 ease-out" aria-hidden="true"></span>
                <button type="button" class="timeline-layout-btn relative z-10 flex-1 min-w-0 px-3 py-1.5 text-sm font-medium rounded-md text-slate-950 transition-colors duration-200" data-layout="vertical">Vertical</button>
                <button type="button" class="timeline-layout-btn relative z-10 flex-1 min-w-0 px-3 py-1.5 text-sm font-medium rounded-md text-slate-400 hover:text-slate-200 transition-colors duration-200" data-layout="horizontal">Horizontal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="experiences-default" class="space-y-6 mt-2"><!-- experiences.js --></div>

    <div id="experiences-timeline" class="hidden w-full min-w-0">
      <div id="timeline-viewport" class="timeline-viewport timeline-viewport-vertical relative w-full max-w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 select-none cursor-grab active:cursor-grabbing group">
        <button type="button" id="timeline-prev" class="timeline-frame-nav timeline-frame-nav-left absolute left-0 top-1/2 -translate-y-1/2 z-20 h-full min-w-[3rem] flex items-center justify-center aria-label="Previous"><span>▲</span></button>
        <button type="button" id="timeline-next" class="timeline-frame-nav timeline-frame-nav-right absolute right-0 top-1/2 -translate-y-1/2 z-20 h-full min-w-[3rem] flex items-center justify-center aria-label="Next"><span>▼</span></button>
        <div id="timeline-viewport-inner" class="timeline-viewport-inner flex transition-[transform] duration-300 ease-out">
          <div id="timeline-track-vertical" class="timeline-track-vertical relative w-full flex-shrink-0 px-4 py-4 pb-12">
          <ul class="timeline-vertical-list space-y-12 pb-8"><!-- experiences.js --></ul>
          </div>
          <div id="timeline-track-horizontal" class="timeline-track-horizontal relative flex items-stretch gap-4 px-6 py-6 overflow-x-auto overflow-y-hidden" style="max-height: inherit;">
          <div class="timeline-horizontal-list flex items-stretch gap-4 flex-shrink-0"><!-- experiences.js --></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
  "sections/footer.html": `<footer class="relative z-10 py-8 px-6 border-b border-slate-800/50 bg-slate-950/80 text-center text-slate-500 text-sm">
  © <span id="copyright-year"></span> <span class="text-cyan-2">John Carl Discaya</span>. All ideas and concepts are original, with execution assisted by AI.
</footer>`,
  "sections/hero.html": `<section id="hero" class="min-h-screen flex items-center justify-center px-6 pt-16">
  <div class="max-w-2xl text-center">
    <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
      Hi, I'm <span class="text-cyan-2">John Carl Discaya</span>
    </h1>
    <p class="text-slate-400 text-lg">
      Full Stack Developer — Fascinated by automating even the smallest routine and always hungry for what's new...
    </p>
    <div class="mt-8 flex gap-4 justify-center">
      <a href="#projects" class="px-5 py-2.5 rounded-lg bg-cyan-3 text-slate-950 font-medium hover:bg-cyan-2 transition-colors">
        View work
      </a>
      <a href="#contact" class="px-5 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white transition-colors">
        Get in touch
      </a>
    </div>
  </div>
</section>`,
  "sections/nav.html": `<nav class="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
  <div class="max-w-4xl mx-auto px-6 py-4 flex flex-col min-[650px]:flex-row justify-center min-[450px]:justify-between items-center gap-3 min-[450px]:gap-0">
    <a href="#hero" class="text-lg font-semibold text-white"><span id="nav-typing-text"></span><span id="nav-typing-cursor">_</span></a>
    <!-- Desktop nav (≥450px) -->
    <ul class="hidden min-[450px]:flex gap-8 text-sm text-slate-400">
      <li><a href="#hero" class="nav-link transition-colors" data-section="hero">Home</a></li>
      <li><a href="#about" class="nav-link transition-colors" data-section="about">About</a></li>
      <li><a href="#experiences" class="nav-link transition-colors" data-section="experiences">Experiences</a></li>
      <li><a href="#projects" class="nav-link transition-colors" data-section="projects">Projects</a></li>
      <li><a href="#contact" class="nav-link transition-colors" data-section="contact">Contact</a></li>
    </ul>
    <!-- Mobile trigger + dropdown (≤449px) -->
    <div class="flex flex-col min-[450px]:hidden items-center gap-2 w-full min-[450px]:w-auto">
      <button type="button" id="nav-mobile-trigger" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors" aria-expanded="false" aria-controls="nav-mobile-grid" aria-label="Toggle navigation menu">
        <span id="nav-hamburger" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </span>
        <span id="nav-caret-down" aria-hidden="true">▼</span>
        <span id="nav-caret-up" class="hidden" aria-hidden="true">▲</span>
      </button>
      <ul id="nav-mobile-grid" class="nav-mobile-grid grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-400 pt-2" role="menu">
        <li><a href="#hero" class="nav-link transition-colors" data-section="hero">Home</a></li>
        <li><a href="#about" class="nav-link transition-colors" data-section="about">About</a></li>
        <li><a href="#experiences" class="nav-link transition-colors" data-section="experiences">Experiences</a></li>
        <li><a href="#projects" class="nav-link transition-colors" data-section="projects">Projects</a></li>
        <li><a href="#contact" class="nav-link transition-colors" data-section="contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>`,
  "sections/projects.html": `<section id="projects" class="py-24 px-6 border-t border-slate-800/50 bg-slate-900/30">
  <div class="max-w-6xl mx-auto w-full min-w-0">
    <h2 class="text-2xl font-semibold text-white mb-10">Projects</h2>
    <div id="projects-grid" class="grid gap-6 sm:grid-cols-2"><!-- projects.js --></div>
  </div>
</section>`
};
