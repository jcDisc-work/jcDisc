const fs = require('fs');
const path = require('path');

const SECTIONS_DIR = path.join(__dirname, 'sections');
const OUT_FILE = path.join(__dirname, 'js', 'sections-data.js');

const DEFAULT_EXPERIENCES_DATA = `window.EXPERIENCES_DATA = [
  { company: '[Default] Company A', dateRange: 'Jan 2024 – Present', title: '[Default] Job title', description: 'This is default experience data from build-sections, not from sections-data. Edit EXPERIENCES_DATA in js/sections-data.js to use your own entries.' },
  { company: '[Default] Company B', dateRange: 'Jun 2022 – Dec 2023', title: '[Default] Previous role', description: 'Default placeholder. Replace EXPERIENCES_DATA in sections-data.js with your real experience list.' },
  { company: '[Default] Company C', dateRange: '2019 – 2020', title: '[Default] Earlier role', description: 'System default entry. Your experience content lives in js/sections-data.js (EXPERIENCES_DATA); this block is only used when that data is missing.' }
];
`;

function escapeForTemplateLiteral(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function extractExperiencesData(content) {
  const start = content.indexOf('window.EXPERIENCES_DATA');
  if (start === -1) return null;
  const end = content.indexOf('window.SECTIONS', start);
  if (end === -1) return null;
  return content.slice(start, end).trim() + '\n\n';
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
  let experiencesBlock = DEFAULT_EXPERIENCES_DATA;
  try {
    const existing = fs.readFileSync(OUT_FILE, 'utf8');
    const extracted = extractExperiencesData(existing);
    if (extracted) experiencesBlock = extracted;
  } catch (_) {}
  const out = experiencesBlock + 'window.SECTIONS = {\n' + entries.join(',\n') + '\n};\n';
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
