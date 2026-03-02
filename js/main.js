document.addEventListener('sections-loaded', function () {
  document.getElementById('copyright-year').textContent = new Date().getFullYear();

  var defaultView = document.getElementById('experiences-default');
  var timelineView = document.getElementById('experiences-timeline');
  var timelineOptionsRow = document.getElementById('timeline-options-row');
  var expButtons = document.querySelectorAll('.exp-mode-btn');
  if (defaultView && timelineView && expButtons.length) {
    function setExpMode(mode) {
      var isTimeline = mode === 'timeline';
      defaultView.classList.toggle('hidden', isTimeline);
      timelineView.classList.toggle('hidden', !isTimeline);
      if (timelineOptionsRow) {
        timelineOptionsRow.classList.toggle('open', isTimeline);
        timelineOptionsRow.setAttribute('aria-hidden', !isTimeline);
      }
      expButtons.forEach(function (btn) {
        var active = btn.getAttribute('data-mode') === mode;
        btn.classList.toggle('bg-cyan-3', active);
        btn.classList.toggle('text-slate-950', active);
        btn.classList.toggle('text-slate-400', !active);
        btn.classList.toggle('hover:text-slate-200', !active);
      });
    }
    expButtons.forEach(function (btn) {
      btn.addEventListener('click', function () { setExpMode(btn.getAttribute('data-mode')); });
    });
  }

  var viewport = document.getElementById('timeline-viewport');
  var trackVertical = document.getElementById('timeline-track-vertical');
  var trackHorizontal = document.getElementById('timeline-track-horizontal');
  var layoutToggle = document.getElementById('timeline-layout-toggle');
  var layoutBtns = document.querySelectorAll('.timeline-layout-btn');
  var prevBtn = document.getElementById('timeline-prev');
  var nextBtn = document.getElementById('timeline-next');
  if (viewport && trackVertical && trackHorizontal && layoutBtns.length && prevBtn && nextBtn) {
    var timelineLayout = 'vertical';
    var activeTrack = trackVertical;
    var drag = { active: false, startX: 0, startY: 0, startScrollLeft: 0, startScrollTop: 0 };

    function setTimelineLayout(layout) {
      timelineLayout = layout;
      var isHorizontal = layout === 'horizontal';
      viewport.classList.toggle('timeline-viewport-vertical', !isHorizontal);
      viewport.classList.toggle('timeline-viewport-horizontal', isHorizontal);
      activeTrack = isHorizontal ? trackHorizontal : trackVertical;
      trackVertical.scrollTop = 0;
      trackVertical.scrollLeft = 0;
      trackHorizontal.scrollTop = 0;
      trackHorizontal.scrollLeft = 0;
      if (layoutToggle) layoutToggle.classList.toggle('layout-horizontal', isHorizontal);
      layoutBtns.forEach(function (btn) {
        var active = btn.getAttribute('data-layout') === layout;
        btn.classList.toggle('text-slate-950', active);
        btn.classList.toggle('text-slate-400', !active);
        btn.classList.toggle('hover:text-slate-200', !active);
      });
      var prevSpan = prevBtn.querySelector('span');
      var nextSpan = nextBtn.querySelector('span');
      if (prevSpan) prevSpan.textContent = isHorizontal ? '\u25C0' : '\u25B2';
      if (nextSpan) nextSpan.textContent = isHorizontal ? '\u25B6' : '\u25B6';
    }

    function timelinePrev() {
      if (timelineLayout === 'vertical') {
        var li = trackVertical.querySelector('li');
        var step = li ? li.offsetHeight + 48 : 300;
        activeTrack.scrollBy({ top: -step, behavior: 'smooth' });
      } else {
        activeTrack.scrollBy({ left: -(288 + 0), behavior: 'smooth' });
      }
    }
    function timelineNext() {
      if (timelineLayout === 'vertical') {
        var li = trackVertical.querySelector('li');
        var step = li ? li.offsetHeight + 48 : 300;
        activeTrack.scrollBy({ top: step, behavior: 'smooth' });
      } else {
        activeTrack.scrollBy({ left: 288 + 0, behavior: 'smooth' });
      }
    }

    setTimelineLayout(timelineLayout);
    layoutBtns.forEach(function (btn) {
      btn.addEventListener('click', function () { setTimelineLayout(btn.getAttribute('data-layout')); });
    });
    prevBtn.addEventListener('click', timelinePrev);
    nextBtn.addEventListener('click', timelineNext);

    viewport.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      if (e.target.closest('.timeline-frame-nav')) return;
      drag.active = true;
      drag.startX = e.clientX;
      drag.startY = e.clientY;
      drag.startScrollLeft = activeTrack.scrollLeft;
      drag.startScrollTop = activeTrack.scrollTop;
      viewport.style.cursor = 'grabbing';
      viewport.style.userSelect = 'none';
      e.preventDefault();
    });
    document.addEventListener('mousemove', function (e) {
      if (!drag.active) return;
      activeTrack.scrollLeft = drag.startScrollLeft + drag.startX - e.clientX;
      activeTrack.scrollTop = drag.startScrollTop + drag.startY - e.clientY;
    });
    document.addEventListener('mouseup', function () {
      if (drag.active) {
        drag.active = false;
        viewport.style.cursor = 'grab';
        viewport.style.userSelect = '';
      }
    });
    document.addEventListener('mouseleave', function () {
      if (drag.active) {
        drag.active = false;
        viewport.style.cursor = 'grab';
        viewport.style.userSelect = '';
      }
    });
  }

  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('section[id]');
  var backToTop = document.getElementById('back-to-top');
  var trigger = window.innerHeight * 0.35;

  var mobileTrigger = document.getElementById('nav-mobile-trigger');
  var mobileGrid = document.getElementById('nav-mobile-grid');
  var navHamburger = document.getElementById('nav-hamburger');
  var navCaretDown = document.getElementById('nav-caret-down');
  var navCaretUp = document.getElementById('nav-caret-up');
  if (mobileTrigger && mobileGrid && navHamburger && navCaretDown && navCaretUp) {
    function setMobileMenuOpen(open) {
      mobileGrid.classList.toggle('open', open);
      navHamburger.classList.toggle('hidden', open);
      navCaretDown.classList.toggle('hidden', open);
      navCaretUp.classList.toggle('hidden', !open);
      mobileTrigger.setAttribute('aria-expanded', open);
    }
    mobileTrigger.addEventListener('click', function () {
      setMobileMenuOpen(!mobileGrid.classList.contains('open'));
    });
    navLinks.forEach(function (link) {
      if (mobileGrid.contains(link)) {
        link.addEventListener('click', function () {
          setMobileMenuOpen(false);
        });
      }
    });
  }

  function setActiveNav() {
    var activeId = '';
    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= trigger && rect.bottom >= trigger) activeId = section.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-section') === activeId);
    });
  }

  function toggleBackToTop() {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('data-section');
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  backToTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    setActiveNav();
    toggleBackToTop();
  });
  setActiveNav();
  toggleBackToTop();
});
