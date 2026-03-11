# How This Repo Runs

## Overview

This is a static portfolio. The shell is `index.html`; section content lives in `sections/*.html` and is loaded in two ways:

1. **Fetch** — `js/include.js` requests each `sections/*.html` via `fetch(url)`. Works when the site is served over HTTP/HTTPS (e.g. GitHub Pages or a local server).
2. **Fallback** — If `fetch` fails (e.g. opening `index.html` as a file), `include.js` uses `window.SECTIONS[url]` from `js/sections-data.js` to inject HTML.

`build-sections.js` reads `js/sections-data.js` (source of truth for section HTML) and writes each `window.SECTIONS` entry to the corresponding `sections/*.html` file.

---

## Script Load Order

1. `js/sections-data.js` — defines `window.SECTIONS` (source of truth; build-sections writes `sections/*.html` from it)
2. `js/include.js` — replaces each `[data-include="sections/..."]` with fetched or fallback HTML, then fires `sections-loaded`
3. `js/nav-typing.js` — nav typing effect
4. `js/main.js` — listens for `sections-loaded`, then wires nav, back-to-top, experience/timeline, etc.

---

## Will It Run on GitHub Pages and as a Local File?

### GitHub Pages (`https://username.github.io/` or `https://username.github.io/repo-name/`)

**Yes.** When served from GitHub Pages, the page origin is `https://...github.io`. Relative URLs like `sections/nav.html` are same-origin, so `fetch('sections/nav.html')` succeeds and sections load via fetch. All scripts run normally. The built `js/sections-data.js` is optional here but useful if you also open the site as a file or want a single deploy artifact.

### Local file (`file:///path/to/index.html`)

**Yes, if you build first.** Browsers block `fetch()` for `file://` (same-origin policy). So `include.js`’s fetch fails and it uses the fallback: `window.SECTIONS[url]`. That only works when `js/sections-data.js` exists and is up to date. Run `node build-sections.js` so `sections/*.html` are written from current `sections-data.js`; then opening `index.html` in the browser works.

**Summary**

| Context              | Fetch works? | Fallback (SECTIONS) used? | Result |
|----------------------|-------------|---------------------------|--------|
| GitHub Pages (HTTPS) | Yes         | No                        | Works  |
| Local server (HTTP)  | Yes         | No                        | Works  |
| Local file (file://) | No          | Yes (if built)            | Works if `sections-data.js` is built |

---

## Building for production / GitHub Pages

To prepare the static site for GitHub Pages (or any static host), run from the repo root:

```bash
node build-prod.js
```

This (1) runs `build-sections.js` so `sections/*.html` are up to date, (2) copies only production files into `docs/` (`index.html`, `css/`, `js/`, `assets/`, `sections/`), and (3) writes `docs/.nojekyll`. Configure GitHub Pages to publish from the **/docs** folder (Settings → Pages → Deploy from a branch → folder: **/docs**). Dev-only files (`build-sections.js`, `serve.js`) remain at root and are not deployed.

---

## How to Run

### 1. GitHub Pages (username.github.io)

**Production build (recommended):** The site is deployed from the `docs/` folder so dev-only files (e.g. `build-sections.js`, `serve.js`) stay at repo root.

1. Build the production artifact into `docs/`:
   ```bash
   node build-prod.js
   ```
   This runs `build-sections.js` (updates `sections/*.html` from `js/sections-data.js`), then copies `index.html`, `css/`, `js/`, `assets/`, and `sections/` into `docs/`, and adds `docs/.nojekyll`.

2. Commit and push the repo (including the contents of `docs/`) to GitHub.

3. **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` (or `master`), folder: **/docs**.

4. After deploy, open `https://<username>.github.io/` or `https://<username>.github.io/<repo-name>/`.

No server needed on your machine; GitHub serves the static files from `docs/` and fetch works.

---

### 2. Local file (open index.html directly)

1. Sync sections into `js/sections-data.js`:
   ```bash
   node build-sections.js
   ```
2. Open `index.html` in your browser (double-click or `file:///...`).

Sections load from `window.SECTIONS` because fetch is not allowed for file URLs. Re-run the build whenever you change `js/sections-data.js` (or the generated `sections/*.html`).

Optional: watch mode so the file updates on every save:
```bash
node build-sections.js --watch
```
Keep this running in a terminal while you edit; then refresh the browser after saving section files.

---

### 3. Local HTTP server (recommended for development)

Uses `serve.js`, which runs the build on every request so `sections-data.js` is always current:

```bash
node serve.js
```

Then open **http://localhost:3000**. Sections load via fetch; no need to run `build-sections.js` manually. Edit `js/sections-data.js` (or the generated `sections/*.html`) and refresh the page (or run build-sections with `--watch` and refresh).

---

## Build-sections.js Reference

| Command                      | Effect |
|-----------------------------|--------|
| `node build-sections.js`    | Write all `sections/*.html` from `js/sections-data.js` once. |
| `node build-sections.js --watch` | Regenerate `sections/*.html` on every change to `js/sections-data.js`. |

`serve.js` runs the same build on every request so the served `sections/*.html` (and `sections-data.js`) are current when using the local server.
