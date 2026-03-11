const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DOCS = path.join(ROOT, 'docs');

const PROD_ENTRIES = [
  { src: 'index.html', dest: 'index.html', isDir: false },
  { src: 'css', dest: 'css', isDir: true },
  { src: 'js', dest: 'js', isDir: true },
  { src: 'assets', dest: 'assets', isDir: true },
  { src: 'sections', dest: 'sections', isDir: true },
];

function copyFile(srcPath, destPath) {
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(srcPath, destPath);
}

function copyDirRecursive(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const ent of entries) {
    const srcPath = path.join(srcDir, ent.name);
    const destPath = path.join(destDir, ent.name);
    if (ent.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function cleanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      fs.rmSync(full, { recursive: true });
    } else {
      fs.unlinkSync(full);
    }
  }
}

function buildProd() {
  console.log('[build-prod] Running build-sections...');
  const buildSections = require('./build-sections.js');
  buildSections();

  if (!fs.existsSync(DOCS)) {
    fs.mkdirSync(DOCS, { recursive: true });
  } else {
    console.log('[build-prod] Cleaning docs/ (keeping RUNNING.md if present)...');
    const keep = ['RUNNING.md'];
    const entries = fs.readdirSync(DOCS, { withFileTypes: true });
    for (const ent of entries) {
      if (keep.includes(ent.name)) continue;
      const full = path.join(DOCS, ent.name);
      if (ent.isDirectory()) {
        fs.rmSync(full, { recursive: true });
      } else {
        fs.unlinkSync(full);
      }
    }
  }

  console.log('[build-prod] Copying prod files to docs/...');
  for (const { src, dest, isDir } of PROD_ENTRIES) {
    const srcFull = path.join(ROOT, src);
    const destFull = path.join(DOCS, dest);
    if (!fs.existsSync(srcFull)) {
      console.warn('[build-prod] Skip (missing):', src);
      continue;
    }
    if (isDir) {
      copyDirRecursive(srcFull, destFull);
    } else {
      copyFile(srcFull, destFull);
    }
    console.log('[build-prod] Copied', src, '→', dest);
  }

  const nojekyllPath = path.join(DOCS, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '', 'utf8');
  console.log('[build-prod] Wrote docs/.nojekyll');

  console.log('[build-prod] Done. docs/ is ready for GitHub Pages (publish source: /docs).');
}

if (require.main === module) {
  try {
    buildProd();
  } catch (err) {
    console.error('[build-prod]', err.message);
    process.exitCode = 1;
  }
} else {
  module.exports = buildProd;
}
