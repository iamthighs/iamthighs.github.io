<!-- .github/copilot-instructions.md - guidance for AI coding agents working on this repo -->
# Copilot / AI agent instructions — iamthighs.github.io

This repository is a simple static personal portfolio/site. The guidance below covers the "big picture", key files, development workflow, and small concrete examples an AI agent should follow when making changes.

- Big picture
  - Type: Static single-page portfolio built with plain HTML/CSS/JS (no Node build or bundler present). Main entry: `index.html`.
  - Styling: `css/styles.css` is a compiled Bootstrap + Start Bootstrap theme file (very large). Prefer adding small overrides rather than editing the generated Bootstrap rules directly.
  - Scripts: `js/scripts.js` contains site initialization (feather icons, Bootstrap tooltips/popovers, scrollspy, sidebar toggle). Other utilities are in `js/*.js` (e.g., `toasts.js`, `markdown.js`).
  - Assets: images, fonts and docs live under `assets/` (e.g. `assets/img/`, `assets/docs/`, `assets/fonts/`). Paths in HTML are relative — preserve that pattern.

- What to modify and where (concrete examples)
  - Add a new project: edit `index.html` and find the section with `id="projects"` (there are anchors referencing `#projects` from the navbar). Follow surrounding markup (Bootstrap cards, `list-group` items) to keep consistent structure.
  - Change icons: icons use Feather (`<i data-feather="star"></i>`) and Font Awesome via CDN. To add a Feather icon, insert the `data-feather` markup and ensure `feather.replace()` runs (it does in `js/scripts.js`).
  - Edit behavior: update `js/scripts.js` for global UI behaviors (tooltips, popovers, sidebar). Keep changes minimal and well-commented.
  - Styling tweaks: prefer adding a small override block near the top of `index.html` (there is already an inline `.bg-tys` style) or create a new small `css/overrides.css` and load it after `css/styles.css` to avoid editing the large compiled file.

- Development and preview workflow (no build step)
  - There is no package.json or build configured — the site is served as static files. For local preview:

    - Using VS Code Live Server extension: open the workspace and click "Go Live".

    - Using Python (PowerShell):

      python -m http.server 8000

      Then open http://localhost:8000 in your browser.

  - Deployment: this repository appears to be a GitHub Pages site (repo name `iamthighs.github.io`). If so, pushing to the `main` branch will publish changes. If you are unsure, ask the repo owner before changing deployment-related files.

- Project-specific conventions and gotchas
  - Relative paths: all links and asset references use relative paths (e.g., `assets/img/...`, `css/styles.css`), so keep files in-place or update references carefully.
  - Large compiled CSS: `css/styles.css` includes Bootstrap and theme rules. Prefer small overrides over modifying the compiled file to avoid accidental regressions.
  - Third-party CDN usage: Font Awesome and Feather are loaded via CDN in `index.html` head — when modifying icons or scripts, keep this in mind.
  - Analytics/GTM: Google Tag Manager is injected inline in the head. Avoid removing it unless asked.

- Examples to include in PR descriptions
  - "Added a new project card to `#projects` using existing card markup and assets/img/demo.png; updated `index.html` only; previewed with python -m http.server." 
  - "Added small CSS override in `css/overrides.css` and loaded it after `css/styles.css` to change `.bg-tys` color without editing the compiled theme file."

- Assumptions made (confirm with repo owner if unsure)
  - Repository is intended to be hosted on GitHub Pages from the `main` branch (common for `username.github.io` repos).
  - No automated tests or linters are configured.

If anything here is unclear or you want more coverage (for example: converting the project to a small build pipeline with Vite or adding a preview script), tell me what you'd like and I will update these instructions. 
