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
    img: 'img/projects/to-do-list.png'
  },
  {
    title: 'Budget Management System',
    description: 'Personal System used for Budgeting and Monitoring expenses and income.',
    tech: ['PHP 8', 'Laravel 10', 'PostgreSQL', 'HTML', 'Vue JS', 'Tailwind CSS'],
    img: 'img/projects/budget-management.png'
  }
];

window.CONTRIBUTIONS_DATA = [
  {
    title: 'Enterprise Payroll Management System',
    domain: 'HR / Payroll SaaS',
    systemType: 'Monolithic Payroll System with Reporting Engine',
    role: 'Full Stack Developer',
    duration: 'Multi-year — one of two longest-running systems',
    teamSize: 'Mixed; collaborated with developers, QA, and business analysts',
    tech: ['Java', 'PostgreSQL', 'Biometrics Integration', 'Report Generation'],
    summary: 'Contributed to a production-grade payroll system serving companies ranging from 50 to over 30,000 employees, spanning several critical modules across the platform. Built a biometrics file reader that parsed raw attendance hardware exports into structured time logs for payroll processing, and implemented statutory computation rules in compliance with yearly government regulatory memos to keep client payrolls legally compliant. Developed new report batches including crossover attendance reports and company-specific timekeeping formats, resolved logic and computation issues in the payroll registry report to align output with payslip entries, and implemented audit trailing across employee details, timesheets, and report modifications.',
    highlights: ['Biometrics file reader for raw attendance hardware processing', 'Statutory computation rules per government regulatory memos', 'Report batches: crossover attendance and company-specific timekeeping', 'Payroll registry report logic and computation fixes', 'Audit trailing across employee details, timesheets, and reports'],
    challenge: 'Payroll computation is highly sensitive — errors directly affect employee compensation and regulatory compliance. The system needed to support diverse client configurations while remaining accurate across frequent government-mandated changes to statutory rules, requiring careful scoping before any modification.',
    approach: 'For statutory updates, studied each government memo carefully before touching computation logic, then implemented changes incrementally and validated outputs against expected values before deployment. For the biometrics reader, handled edge cases in raw file formats to ensure reliable parsing across different hardware outputs. Audit trailing was architected to be non-intrusive to existing workflows while capturing a complete and queryable change history per module.',
    outcome: 'The system successfully processed payroll for clients ranging from small businesses to an enterprise with over 30,000 employees. Statutory updates were delivered on schedule with each government memo cycle, maintaining client compliance. The audit trail feature reduced ambiguity in payroll disputes by providing a clear, traceable record of all modifications.',
    collaboration: 'Coordinated with business analysts to interpret regulatory requirements and with QA to validate computation accuracy before each release. Worked across teams in an Agile environment with regular sprint reviews.'
  },
  {
    title: 'HR & Payroll Employee Portal — v1',
    domain: 'HR / Payroll SaaS',
    systemType: 'Multi-tenant HRIS and Employee Self-Service Portal',
    role: 'Full Stack Developer',
    duration: 'Multi-year — one of two longest-running systems',
    teamSize: 'Mixed; collaborated with frontend developers, QA, and support',
    tech: ['PHP', 'Laravel', 'PostgreSQL', 'REST APIs', 'Git'],
    summary: 'Contributed extensively to a multi-tenant HR and payroll portal used by companies with 50 to 30,000+ employees, implementing timekeeping computation logic that converted raw employee logs into accurate minute-based records across a wide range of policy configurations and admin settings. Built several key features including a 1601C Monthly Remittance Report with variance checking optimized by pre-initializing payslip data upfront to avoid repetitive per-request querying, Final Pay computation for Minimum Wage Earners, Bulk Shift Assignment, and Company Logo Upload. Enhanced the employee management query layer — which joined four large database tables — by refactoring using GroupBy and chunking strategies to handle large datasets reliably, along with handling ongoing support fixes across the platform.',
    highlights: ['Timekeeping computation logic (raw logs to minute-based records)', '1601C Monthly Remittance Report with variance checking and optimization', 'Final Pay computation for Minimum Wage Earners (MWEs)', 'Bulk Shift Assignment and Company Logo Upload', 'Employee management query refactoring (4-table join optimization)'],
    challenge: 'The portal served clients of vastly different sizes and configurations, making timekeeping logic particularly complex — a single computation had to account for multiple policy settings, shift types, and edge cases simultaneously. The 4-table employee query was also a bottleneck that degraded performance as client data volumes grew.',
    approach: 'For the timekeeping engine, mapped out all policy permutations before writing computation logic, ensuring each scenario was handled without regressions. For the 1601C report, identified that payslip data was static per period and redesigned the data access pattern to initialize it once per request rather than re-querying it repeatedly — significantly reducing database load. The 4-table query was restructured using GroupBy to reduce row duplication and chunking to process large employee sets in controlled batches.',
    outcome: 'The timekeeping engine handled the full range of client configurations without reported computation errors post-release. The 1601C report optimization reduced database query overhead for high-volume clients. The refactored employee management query handled enterprise-scale datasets reliably where the original approach struggled. Features were delivered within sprint timelines and passed QA with no major post-release rework.',
    collaboration: 'Collaborated with the HRIS feature team for the employee documents checklist module, coordinated with support teams to prioritize and resolve production issues, and worked with QA to validate computation accuracy across client scenarios.'
  },
  {
    title: 'HR & Payroll Employee Portal — v2 (Modernization)',
    domain: 'HR / Payroll SaaS',
    systemType: 'Multi-tenant HRIS — Modernized Stack',
    role: 'Full Stack Developer',
    duration: 'Active migration project',
    teamSize: 'Collaborative team effort',
    tech: ['PHP', 'Laravel 11', 'Vue.js', 'PostgreSQL', 'AI-assisted workflow (Claude, Cursor)'],
    summary: 'Participated in the migration of the employee portal from Laravel 5.2 to Laravel 11.48 — a significant framework version jump requiring careful handling of deprecated APIs, updated dependency chains, and revised architectural patterns, while the frontend was simultaneously migrated from AngularJS to Vue.js. Collaborated on implementing a role-based access control (RBAC) system in the updated platform, and leveraged AI tools such as Claude and Cursor to accelerate identification of deprecated patterns and reduce manual effort in reviewing large volumes of legacy code.',
    highlights: ['Laravel 5.2 to Laravel 11.48 backend migration', 'AngularJS to Vue.js frontend migration', 'Role-based access control (RBAC) implementation', 'AI-assisted workflow using Claude and Cursor'],
    challenge: 'Migrating across multiple major Laravel versions introduced breaking changes at nearly every layer of the stack — configuration, routing, ORM behavior, and third-party package compatibility. Doing this in parallel with a frontend framework swap (AngularJS to Vue.js) compounded the risk of regression across existing features.',
    approach: 'Leveraged AI tools — specifically Claude and Cursor — to accelerate the identification of deprecated patterns, generate migration notes for legacy code sections, and reduce the manual effort of reviewing large volumes of existing code. This allowed the team to move through the migration systematically without losing context across the codebase. AI assistance was used as a productivity layer — all outputs were reviewed and validated before integration.',
    outcome: 'The modernization effort brought the platform to a current, maintainable Laravel version, enabling the team to leverage new framework features and long-term security support. The AI-assisted workflow demonstrably reduced the time spent on manual code investigation during the migration.',
    collaboration: 'Worked collaboratively within the development team, coordinating on RBAC design decisions and aligning on migration priorities across the codebase.'
  },
  {
    title: 'Banking Compliance & Operations Applications',
    domain: 'Banking / Financial Services',
    systemType: 'Internal Compliance and Operations Web Applications',
    role: 'IT Staff',
    duration: '2019 — project-based delivery',
    teamSize: 'Small team environment',
    tech: ['PHP', 'PHPDesktop', 'MySQL'],
    summary: 'Designed and delivered four internal web applications for a banking institution, each targeting a specific compliance or operational need: a Politically Exposed Persons (PEP) System for flagging public official account holders, an AMLA Blacklist System for cross-referencing accounts against anti-money laundering blacklists, an Account Digitization System that converted paper-based records into a searchable database using standardized bank code numbers as index keys, and a Complaint & Service Request System that replaced informal IT contact processes with structured issue intake and full detail capture. Each application was scoped, built, and delivered as a standalone tool designed around the operational context of branch staff, keeping interfaces simple and task-focused.',
    highlights: ['PEP System for identifying politically exposed account holders', 'AMLA Blacklist System for anti-money laundering cross-referencing', 'Account Digitization System with standardized bank code indexing', 'Complaint & Service Request System for structured issue intake'],
    challenge: 'Banking compliance systems operate in a zero-tolerance environment for errors — misidentifying or failing to flag a regulated account carries serious legal and operational consequences. Each application also needed to fit into existing branch workflows without requiring significant retraining of non-technical staff.',
    approach: 'Built each system with the operational context of branch staff in mind — interfaces were kept simple and task-focused. The digitization system was designed around the bank\'s existing account indexing conventions, using standard code numbers to ensure records were searchable in a way consistent with how staff already located accounts. Each application was scoped, built, and delivered as a standalone tool to reduce dependency risk.',
    outcome: 'All four applications were deployed and adopted by branch staff. The Complaint System reduced the volume of informal IT contacts by giving tellers a structured channel for issue reporting. The digitization system made previously paper-bound account records searchable across branches. The PEP and AMLA systems provided compliance teams with a reliable internal reference tool aligned with regulatory requirements.',
    collaboration: 'Coordinated with bank operations staff to understand workflow requirements and ensured each system matched the practical needs of its end users at the branch level.'
  }
];

window.SECTIONS = {
  "sections/about.html": `<section id="about" class="py-24 px-6 border-t border-slate-800/50 bg-slate-900/30">
  <div class="max-w-6xl mx-auto w-full min-w-0">
    <h2 class="text-2xl font-semibold text-white mb-6">About</h2>
    <div class="mt-8 grid gap-8 items-center md:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
      <div class="mx-auto md:mx-0">
        <div class="h-64 w-64 max-w-full rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg">
          <img src="assets/images/profile_src/profile-about.jpg" alt="Profile portrait" class="h-full w-full object-cover">
        </div>
      </div>
      <div>
        <p class="text-slate-400 leading-relaxed mb-4">
          I am a Full Stack Developer with over six years of experience across different IT domains, starting from IT support and progressing into corporate systems development and software engineering.
        </p>
        <p class="text-slate-400 leading-relaxed mb-4">
          I've spent the years inside systems that handle real payroll, real compliance, real people. It's not glamorous work — but it's the kind that has to be done right, and that's meant meaningful contributions across payroll engines, banking compliance tools, and enterprise HR platforms serving thousands of employees.
        </p>
        <p class="text-slate-400 leading-relaxed mb-4">
          My technical stack includes PHP, Laravel, Java, MySQL, PostgreSQL, HTML, CSS, JavaScript (Vanilla, Angular, and Vue.js), Bootstrap, Git, and more. I also make use of AI-assisted tools such as Cursor and Claude to accelerate development, improve code quality, and ensure results meet expectations.
        </p>
        <p class="text-slate-400 leading-relaxed">
          My goal is to continuously grow in emerging technologies while staying grounded in collaboration, mentorship, and continuous learning.
        </p>
      </div>
    </div>
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
    <form id="contact-form" class="space-y-5" method="post" novalidate>
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
      <div class="hidden" aria-hidden="true">
        <label for="contact-website" class="sr-only">Website</label>
        <input type="text" id="contact-website" name="website" autocomplete="off" tabindex="-1">
      </div>
      <div class="flex justify-end">
        <button type="submit" class="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-lg bg-cyan-3 text-slate-950 font-medium hover:bg-cyan-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          Send message
        </button>
      </div>
      <p id="contact-status" class="mt-3 text-sm text-center text-slate-400"></p>
    </form>
    <p class="mt-6 text-slate-500 text-sm text-center">Or email directly: <a href="mailto:johncarldiscaya@gmail.com" class="text-cyan-3 hover:text-cyan-2">johncarldiscaya@gmail.com</a></p>
  </div>
</section>`,
  "sections/experiences.html": `<section id="experiences" class="py-24 px-6 border-t border-slate-800/50 overflow-x-hidden">
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
    <div class="flex justify-center mb-6">
      <div class="h-40 w-40 rounded-full overflow-hidden border border-slate-700 bg-slate-900 shadow-lg">
        <img src="assets/images/profile_src/profile-hero.jpg" alt="Profile photo" class="h-full w-full object-cover">
      </div>
    </div>
    <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
      Hi, I'm <span class="text-cyan-2">John Carl Discaya</span>
    </h1>
    <p class="text-slate-400 text-lg">
      Full Stack Developer fascinated by complex systems — from payroll engines to banking compliance tools. Six years in, and I'm still finding smarter ways to work. These days, that includes AI.
    </p>
    <div class="mt-8 flex flex-col gap-4 items-center">
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#contributions" class="px-5 py-2.5 rounded-lg border border-cyan-3 text-cyan-3 font-medium hover:bg-cyan-3 hover:text-slate-950 transition-colors">
          View work
        </a>
        <a href="#contact" class="px-5 py-2.5 rounded-lg border border-cyan-3 text-cyan-3 font-medium hover:bg-cyan-3 hover:text-slate-950 transition-colors">
          Get in touch
        </a>
      </div>
      <a href="assets/resume.pdf" download class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cyan-3 text-cyan-3 font-medium hover:bg-cyan-3 hover:text-slate-950 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Resume
      </a>
    </div>
  </div>
</section>`,
  "sections/nav.html": `<nav class="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
  <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col min-[650px]:flex-row justify-center min-[450px]:justify-between items-center gap-3 min-[450px]:gap-0">
    <a href="#hero" class="text-lg font-semibold text-white"><span id="nav-typing-text"></span><span id="nav-typing-cursor">_</span></a>
    <!-- Desktop nav (≥450px) -->
    <ul class="hidden min-[450px]:flex items-center gap-8 text-sm text-slate-400">
      <li><a href="#hero" class="nav-link transition-colors" data-section="hero">Home</a></li>
      <li><a href="#about" class="nav-link transition-colors" data-section="about">About</a></li>
      <li><a href="#experiences" class="nav-link transition-colors" data-section="experiences">Experiences</a></li>
      <li><a href="#contributions" class="nav-link transition-colors" data-section="contributions">Contributions</a></li>
      <li><a href="#contact" class="nav-link transition-colors" data-section="contact">Contact</a></li>
      <li><a href="assets/resume.pdf" download class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-3 text-slate-950 font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download Resume</a></li>
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
        <li><a href="#contributions" class="nav-link transition-colors" data-section="contributions">Contributions</a></li>
        <li><a href="#contact" class="nav-link transition-colors" data-section="contact">Contact</a></li>
        <li class="col-span-2 pt-2"><a href="assets/resume.pdf" download class="flex items-center justify-center gap-2 w-full px-3 py-1.5 rounded-lg bg-cyan-3 text-slate-950 font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download Resume</a></li>
      </ul>
    </div>
  </div>
</nav>`,
  "sections/contributions.html": `<section id="contributions" class="py-24 px-6 border-t border-slate-800/50 bg-slate-900/30">
  <div class="max-w-6xl mx-auto w-full min-w-0">
    <h2 class="text-2xl font-semibold text-white mb-6">Contributions</h2>
    <div class="flex items-start gap-3 rounded-lg border border-red-800/50 bg-red-950/30 px-4 py-3 mb-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 mt-0.5 text-red-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <p class="text-red-300/80 text-sm leading-relaxed">Due to company and client confidentiality agreements, source code and application screenshots for contributed works cannot be shared publicly.</p>
    </div>
    <div id="contributions-grid" class="space-y-8"><!-- contributions.js --></div>
  </div>
</section>`
};
