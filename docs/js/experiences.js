(function () {
  var data = window.EXPERIENCES_DATA || [];

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderListed(container) {
    if (!container) return;
    container.innerHTML = data.map(function (exp) {
      return '<article class="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-colors">' +
        '<div class="flex flex-wrap gap-2 text-slate-500 text-sm mb-2">' +
        '<span>' + escapeHtml(exp.company) + '</span><span>·</span><span>' + escapeHtml(exp.dateRange) + '</span>' +
        '</div>' +
        '<h3 class="font-semibold text-white mb-2">' + escapeHtml(exp.title) + '</h3>' +
        '<p class="text-slate-400 text-sm">' + escapeHtml(exp.description) + '</p>' +
        '</article>';
    }).join('');
  }

  function renderVerticalTimeline(container) {
    var ul = container && container.querySelector('ul');
    if (!ul) return;
    ul.innerHTML = data.map(function (exp, i) {
      var metaLeft = '<div class="pl-6 sm:pl-0 sm:w-1/2 sm:pr-12 sm:text-right order-2 sm:order-1">' +
        '<p class="text-slate-500 text-sm">' + escapeHtml(exp.dateRange) + '</p>' +
        '<h3 class="font-semibold text-white mt-1">' + escapeHtml(exp.title) + '</h3>' +
        '<p class="text-slate-400 text-sm mt-1">' + escapeHtml(exp.company) + '</p></div>';
      var metaRight = '<div class="pl-6 sm:pl-0 sm:w-1/2 sm:pl-12 order-2">' +
        '<p class="text-slate-500 text-sm">' + escapeHtml(exp.dateRange) + '</p>' +
        '<h3 class="font-semibold text-white mt-1">' + escapeHtml(exp.title) + '</h3>' +
        '<p class="text-slate-400 text-sm mt-1">' + escapeHtml(exp.company) + '</p></div>';
      var card = '<div class="rounded-xl border border-slate-800 bg-slate-900/50 p-6 min-w-0 sm:min-w-[240px] w-full max-w-full"><p class="text-slate-400 text-sm">' + escapeHtml(exp.description) + '</p></div>';
      var dot = '<div class="absolute left-4 sm:left-1/2 w-2 h-2 rounded-full bg-cyan-3 -translate-x-1/2 top-1.5 shrink-0" aria-hidden="true"></div>';
      if (i % 2 === 0) {
        return '<li class="relative flex flex-col sm:flex-row gap-4">' + metaLeft + dot + '<div class="pl-6 sm:w-1/2 sm:pl-12 order-1 sm:order-2">' + card + '</div></li>';
      }
      return '<li class="relative flex flex-col sm:flex-row gap-4">' + metaRight + dot +
        '<div class="pl-6 sm:w-1/2 sm:pr-12 order-1"><div class="rounded-xl border border-slate-800 bg-slate-900/50 p-6 min-w-0 sm:min-w-[240px] w-full max-w-full sm:text-right">' +
        '<p class="text-slate-400 text-sm">' + escapeHtml(exp.description) + '</p></div></div></li>';
    }).join('');
  }

  function renderHorizontalTimeline(container) {
    if (!container) return;
    var list = container.querySelector('.timeline-horizontal-list');
    if (!list) return;
    var itemsHtml = data.map(function (exp) {
      return '<div class="timeline-h-item flex flex-col items-center flex-shrink-0 w-72">' +
        '<div class="w-2 h-2 rounded-full bg-cyan-3 relative z-10 shrink-0 mt-3"></div>' +
        '<div class="rounded-xl border border-slate-800 bg-slate-900/50 p-6 min-w-[240px] w-full mt-2">' +
        '<p class="text-slate-500 text-sm">' + escapeHtml(exp.dateRange) + '</p>' +
        '<h3 class="font-semibold text-white mt-1">' + escapeHtml(exp.title) + '</h3>' +
        '<p class="text-slate-400 text-sm mt-1">' + escapeHtml(exp.company) + '</p>' +
        '<p class="text-slate-400 text-sm mt-2">' + escapeHtml(exp.description) + '</p></div></div>';
    }).join('');
    list.innerHTML = itemsHtml;
  }

  function init() {
    var section = document.getElementById('experiences');
    if (!section) return;
    renderListed(document.getElementById('experiences-default'));
    renderVerticalTimeline(document.getElementById('timeline-track-vertical'));
    renderHorizontalTimeline(document.getElementById('timeline-track-horizontal'));
  }

  document.addEventListener('sections-loaded', init);
})();
