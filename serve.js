const http = require('http');
const fs = require('fs');
const path = require('path');

const build = require('./build-sections.js');

const ROOT = __dirname;
const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  build();
  const url = req.url === '/' ? '/index.html' : req.url;
  const file = path.join(ROOT, url.split('?')[0]);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(file);
  res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
  res.end(fs.readFileSync(file));
});

const port = 3000;
server.listen(port, () => {
  console.log('Serving at http://localhost:' + port + ' — sections-data.js regenerates on every request/reload.');
});
