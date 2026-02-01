(function () {
  var placeholders = document.querySelectorAll('[data-include]');
  var load = function (el, url) {
    return fetch(url)
      .then(function (res) { return res.text(); })
      .then(function (html) { el.outerHTML = html; })
      .catch(function () {
        if (window.SECTIONS && window.SECTIONS[url]) {
          el.outerHTML = window.SECTIONS[url];
        }
      });
  };
  var promises = Array.from(placeholders).map(function (el) {
    return load(el, el.getAttribute('data-include'));
  });
  Promise.all(promises).then(function () {
    document.dispatchEvent(new CustomEvent('sections-loaded'));
  });
})();
