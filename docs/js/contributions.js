(function () {
  var data = window.CONTRIBUTIONS_DATA || [];

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderHighlights(highlights) {
    if (!highlights || !highlights.length) return '';
    var items = highlights.map(function (h) {
      return '<li class="flex items-start gap-2">' +
        '<span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-3 shrink-0"></span>' +
        '<span>' + escapeHtml(h) + '</span>' +
      '</li>';
    }).join('');
    return '<ul class="text-slate-300 text-sm space-y-1.5 mt-4">' + items + '</ul>';
  }

  function renderDetails(c) {
    var sections = [];
    if (c.challenge) sections.push({ label: 'The Challenge', text: c.challenge });
    if (c.approach) sections.push({ label: 'My Approach', text: c.approach });
    if (c.outcome) sections.push({ label: 'Outcome', text: c.outcome });
    if (c.collaboration) sections.push({ label: 'Collaboration', text: c.collaboration });
    if (!sections.length) return '';

    var inner = sections.map(function (s) {
      return '<div>' +
        '<h4 class="text-slate-300 text-sm font-medium mb-1">' + escapeHtml(s.label) + '</h4>' +
        '<p class="text-slate-400 text-sm leading-relaxed">' + escapeHtml(s.text) + '</p>' +
      '</div>';
    }).join('');

    return '<div class="contrib-details-panel overflow-hidden" aria-hidden="true" style="max-height:0;">' +
      '<div class="pt-4 space-y-3 border-t border-slate-800 mt-4">' + inner + '</div>' +
    '</div>';
  }

  function renderCard(c, idx) {
    var techHtml = (c.tech && c.tech.length)
      ? '<div class="flex flex-wrap gap-2 mt-4">' + c.tech.map(function (t) { return '<span class="inline-block rounded-full bg-slate-800/80 border border-slate-700/50 text-cyan-2 text-xs px-2.5 py-0.5">' + escapeHtml(t) + '</span>'; }).join('') + '</div>'
      : '';

    var hasDetails = c.challenge || c.approach || c.outcome || c.collaboration;
    var toggleHtml = hasDetails
      ? '<button type="button" class="contrib-toggle-btn inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-400 text-sm hover:text-cyan-2 hover:border-cyan-3/50 transition-colors" data-index="' + idx + '">' +
          '<span class="contrib-toggle-label">View Details</span>' +
          '<svg class="contrib-toggle-icon w-4 h-4 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>' +
        '</button>'
      : '';

    return '<article class="contrib-card rounded-xl border border-slate-800 p-6 transition-colors" data-contrib-index="' + idx + '">' +
      '<div class="flex flex-wrap items-center gap-3 mb-3">' +
        '<h3 class="font-semibold text-white text-lg">' + escapeHtml(c.title) + '</h3>' +
        '<span class="inline-block rounded-full bg-cyan-3/10 border border-cyan-3/30 text-cyan-2 text-xs px-3 py-0.5">' + escapeHtml(c.domain) + '</span>' +
      '</div>' +
      '<p class="text-slate-400 text-sm mb-3">' + escapeHtml(c.role) + ' &nbsp;&middot;&nbsp; ' + escapeHtml(c.duration) + '</p>' +
      '<p class="text-slate-400 text-sm leading-relaxed">' + escapeHtml(c.summary) + '</p>' +
      renderHighlights(c.highlights) +
      techHtml +
      toggleHtml +
      renderDetails(c) +
    '</article>';
  }

  function bindToggles(container) {
    container.querySelectorAll('.contrib-toggle-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.contrib-card');
        var panel = card.querySelector('.contrib-details-panel');
        if (!panel) return;

        var isOpen = panel.classList.contains('open');
        var label = btn.querySelector('.contrib-toggle-label');
        var icon = btn.querySelector('.contrib-toggle-icon');

        if (isOpen) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.offsetHeight; // force reflow
          panel.style.maxHeight = '0';
          panel.classList.remove('open');
          panel.setAttribute('aria-hidden', 'true');
          label.textContent = 'View Details';
          icon.style.transform = '';
        } else {
          panel.classList.add('open');
          panel.setAttribute('aria-hidden', 'false');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          label.textContent = 'Hide Details';
          icon.style.transform = 'rotate(180deg)';
          panel.addEventListener('transitionend', function handler() {
            if (panel.classList.contains('open')) panel.style.maxHeight = 'none';
            panel.removeEventListener('transitionend', handler);
          });
        }
      });
    });
  }

  function render(container) {
    if (!container) return;
    container.innerHTML = data.map(function (c, i) { return renderCard(c, i); }).join('');
    bindToggles(container);
  }

  function init() {
    render(document.getElementById('contributions-grid'));
  }

  document.addEventListener('sections-loaded', init);
})();
