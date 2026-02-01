document.addEventListener('sections-loaded', function () {
  var el = document.getElementById('nav-typing-text');
  var cursor = document.getElementById('nav-typing-cursor');
  if (!el || !cursor) return;
  var text = "jcDisc's Portfolio";
  var typingMs = 90;
  var eraseMs = 60;
  var holdMs = 1200;

  function type(i) {
    if (i < text.length) {
      el.textContent += text[i];
      setTimeout(function () { type(i + 1); }, typingMs);
    } else {
      cursor.style.animation = 'nav-cursor-blink 0.6s step-end infinite';
      setTimeout(erase, holdMs);
    }
  }
  function erase() {
    cursor.style.animation = 'none';
    if (el.textContent.length > 0) {
      el.textContent = el.textContent.slice(0, -1);
      setTimeout(erase, eraseMs);
    } else {
      setTimeout(function () { type(0); }, typingMs);
    }
  }
  type(0);
});
