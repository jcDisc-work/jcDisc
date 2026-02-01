const fs = require('fs');
const path = require('path');

const SECTIONS_DIR = path.join(__dirname, 'sections');
const OUT_FILE = path.join(__dirname, 'js', 'sections-data.js');

function escapeForTemplateLiteral(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function build() {
  const files = fs.readdirSync(SECTIONS_DIR).filter(f => f.endsWith('.html'));
  const entries = files.map(file => {
    const key = `sections/${file}`;
    const filePath = path.join(SECTIONS_DIR, file);
    const html = fs.readFileSync(filePath, 'utf8').trim();
    const escaped = escapeForTemplateLiteral(html);
    return `  "${key}": \`${escaped}\``;
  });
  const out = 'window.SECTIONS = {\n' + entries.join(',\n') + '\n};\n';
  fs.writeFileSync(OUT_FILE, out);
  return files.length;
}

if (require.main === module) {
  const n = build();
  console.log('[build-sections] Regenerated js/sections-data.js from', n, 'sections');
  if (process.argv.includes('--watch')) {
    fs.watch(SECTIONS_DIR, { recursive: false }, (event, filename) => {
      if (filename && filename.endsWith('.html')) build();
    });
    console.log('[build-sections] Watching sections/*.html — edit and save to regenerate.');
  }
} else {
  module.exports = build;
}
