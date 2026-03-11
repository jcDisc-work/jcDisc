(function () {
  var data = window.PROJECTS_DATA || [];

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function getMediaUrls(p) {
    var urls = [];
    if (p.img) urls.push(p.img);
    if (p.images && p.images.length) urls = urls.concat(p.images);
    if (p.gifs && p.gifs.length) urls = urls.concat(p.gifs);
    return urls;
  }

  function openViewMore(urls, title) {
    var overlay = document.getElementById('projects-view-more');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'projects-view-more';
      overlay.className = 'fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 hidden';
      overlay.innerHTML =
        '<button type="button" aria-label="Close" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center">&times;</button>' +
        '<div class="view-more-content relative flex flex-col items-center w-full max-w-8xl max-h-[95vh]">' +
        '<div class="flex items-center justify-center gap-3 flex-1 min-h-0 min-w-0 w-full">' +
        '<button type="button" class="view-more-prev shrink-0 w-12 h-12 rounded-full bg-slate-800/80 text-slate-300 hover:text-white flex items-center justify-center transition-colors" aria-label="Previous">&larr;</button>' +
        '<div class="flex items-center justify-center flex-1 min-w-0 min-h-0"><img src="" alt="" class="view-more-img max-w-full max-h-[92vh] object-contain rounded-lg"></div>' +
        '<button type="button" class="view-more-next shrink-0 w-12 h-12 rounded-full bg-slate-800/80 text-slate-300 hover:text-white flex items-center justify-center transition-colors" aria-label="Next">&rarr;</button>' +
        '</div>' +
        '<span class="view-more-counter mt-2 px-3 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-sm"></span>' +
        '</div>';
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay || e.target.closest('button[aria-label="Close"]')) overlay._close();
      });
      document.body.appendChild(overlay);
    }
    var img = overlay.querySelector('img');
    var prevBtn = overlay.querySelector('.view-more-prev');
    var nextBtn = overlay.querySelector('.view-more-next');
    var counterEl = overlay.querySelector('.view-more-counter');
    var idx = 0;

    function closeViewMore() {
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeydown);
    }
    function onKeydown(e) {
      if (e.key === 'Escape') closeViewMore();
      else if (urls.length > 1) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      }
    }
    function go(delta) {
      idx = (idx + delta + urls.length) % urls.length;
      update();
    }
    function update() {
      if (urls[idx]) { img.src = urls[idx]; img.alt = title; }
      prevBtn.style.display = urls.length > 1 ? '' : 'none';
      nextBtn.style.display = urls.length > 1 ? '' : 'none';
      counterEl.textContent = urls.length > 1 ? (idx + 1) + ' / ' + urls.length : '';
      counterEl.style.display = urls.length > 1 ? '' : 'none';
    }

    overlay._close = closeViewMore;
    idx = 0;
    update();
    prevBtn.onclick = function () { go(-1); };
    nextBtn.onclick = function () { go(1); };
    document.addEventListener('keydown', onKeydown);
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function renderProject(p, i) {
    var urls = getMediaUrls(p);
    var hasMedia = urls.length > 0;
    var thumbHtml = hasMedia
      ? '<div class="relative rounded-lg overflow-hidden mb-4 bg-slate-800/50 aspect-video">' +
        '<img src="' + escapeHtml(urls[0]) + '" alt="' + escapeHtml(p.title) + '" class="w-full h-full object-cover">' +
        '<a href="#" class="view-more-btn absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 hover:opacity-100 transition-opacity text-cyan-2 font-medium" data-index="' + i + '">View More</a>' +
        '</div>'
      : '';
    var linkHtml = p.link
      ? '<a href="' + escapeHtml(p.link) + '" target="_blank" rel="noopener noreferrer" class="text-cyan-2 text-sm font-medium hover:text-cyan-1">View project →</a>'
      : '';
    var techHtml = (p.tech && p.tech.length)
      ? '<p class="text-slate-300 text-xs mt-3">' + p.tech.map(function (t) { return escapeHtml(t); }).join(' · ') + '</p>'
      : '';
    return '<article class="rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-colors" data-project-index="' + i + '">' +
      thumbHtml +
      '<h3 class="font-semibold text-white mb-2">' + escapeHtml(p.title) + '</h3>' +
      '<p class="text-slate-400 text-sm mb-4">' + escapeHtml(p.description) + '</p>' +
      linkHtml + techHtml +
      '</article>';
  }

  function render(container) {
    if (!container) return;
    var personal = data.filter(function (p) { return p.personal; });
    var involved = data.filter(function (p) { return !p.personal; });
    var panelClass = 'rounded-xl border border-slate-700 bg-slate-900/50 p-6 col-span-full';
    var labelClass = 'inline-flex items-center rounded-lg border border-cyan-3 bg-cyan-2 px-3 py-1.5 text-slate-950 text-xs font-medium uppercase tracking-wider mb-4';
    var personalHtml = personal.length
      ? '<div class="' + panelClass + '"><div class="' + labelClass + '">Personal</div><div class="grid gap-6 sm:grid-cols-2">' + personal.map(function (p) { return renderProject(p, data.indexOf(p)); }).join('') + '</div></div>'
      : '';
    var involvedHtml = involved.length
      ? '<div class="' + panelClass + '"><div class="' + labelClass + '">Involved</div><div class="grid gap-6 sm:grid-cols-2">' + involved.map(function (p) { return renderProject(p, data.indexOf(p)); }).join('') + '</div></div>'
      : '';
    container.innerHTML = personalHtml + involvedHtml;
    container.querySelectorAll('.view-more-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var i = parseInt(btn.getAttribute('data-index'), 10);
        var urls = getMediaUrls(data[i]);
        openViewMore(urls, data[i].title);
      });
    });
  }

  function init() {
    render(document.getElementById('projects-grid'));
  }

  document.addEventListener('sections-loaded', init);
})();
