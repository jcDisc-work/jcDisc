const fs = require('fs');
const path = require('path');

const SECTIONS_DATA_FILE = path.join(__dirname, 'js', 'sections-data.js');

function loadSectionsFromData() {
  // Ensure we always get a fresh copy when watching.
  delete require.cache[SECTIONS_DATA_FILE];

  global.window = {};

  try {
    require(SECTIONS_DATA_FILE);
  } catch (err) {
    throw new Error(`[build-sections] Failed to require js/sections-data.js: ${err.message}`);
  }

  const sections = global.window && global.window.SECTIONS;
  if (!sections || typeof sections !== 'object') {
    throw new Error('[build-sections] window.SECTIONS is missing or not an object after loading js/sections-data.js');
  }

  return sections;
}

function buildFromSectionsData() {
  const sections = loadSectionsFromData();
  const entries = Object.entries(sections);

  entries.forEach(([relativePath, html]) => {
    const outputPath = path.join(__dirname, relativePath);
    const dir = path.dirname(outputPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, (html || '') + '\n', 'utf8');
    console.log('[build-sections] Wrote', relativePath);
  });

  console.log(`[build-sections] Built ${entries.length} section file(s).`);
  return entries.length;
}

function watchSectionsData() {
  console.log('[build-sections] Watching js/sections-data.js — edit and save to regenerate sections/*.html.');

  fs.watch(SECTIONS_DATA_FILE, { persistent: true }, (eventType) => {
    if (eventType !== 'change') return;

    try {
      buildFromSectionsData();
    } catch (err) {
      console.error('[build-sections] Error during rebuild in watch mode:', err.message);
    }
  });
}

if (require.main === module) {
  try {
    buildFromSectionsData();
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  }

  if (process.argv.includes('--watch')) {
    watchSectionsData();
  }
} else {
  module.exports = buildFromSectionsData;
}
