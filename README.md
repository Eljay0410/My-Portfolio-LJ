# Larry Cruz Portfolio

A static portfolio built with React 19, Vite 8, Tailwind CSS 4, Framer Motion, and Lucide icons. It has no server-side runtime, database, or API dependency. The contact options use `mailto:` and `tel:` links; sending email depends on the visitor having a mail app or webmail handler configured.

## Run locally

Use Node.js 22.12+ or 24 and npm:

```sh
npm ci
npm run dev
```

Create and preview the production build with:

```sh
npm run build
npm run preview
```

## Publish with GitHub Pages

This repository is configured to deploy automatically to GitHub Pages from the `main` branch. The workflow in `.github/workflows/deploy.yml` installs the locked dependencies, builds the site, and publishes `dist/`.

1. In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Commit and push the site source and `.github/workflows/deploy.yml` to `main`. Include `index.html`, `package.json`, `package-lock.json`, `vite.config.js`, `src/`, and `public/`.
3. Open the repository's **Actions** tab and wait for **Deploy to GitHub Pages** to finish successfully. The default project URL is `https://eljay0410.github.io/My-Portfolio-LJ/`.
4. Open that URL and run through the checks listed below.

Git and GitHub are required for this automatic workflow. Review `git status` before committing; only commit files intended for publication. The deployed site is generated from source, so do not upload `node_modules/` or `dist/`. Do not commit `.env` files, credentials, or private files. `.gitignore` excludes these local/development files.

## Custom domain

In **Settings → Pages**, enter the custom domain and configure the DNS records GitHub shows for that domain. For a `www` subdomain, this is generally a CNAME to `eljay0410.github.io`; apex domains use the A/AAAA records GitHub lists. Wait for DNS verification, then enable **Enforce HTTPS** when available.

The current `vite.config.js` base path (`/My-Portfolio-LJ/`) is correct for the default project URL. If the site is served from the root of a custom domain, change it to `/` and update the canonical and `og:url` values in `index.html` to the custom URL before committing and deploying. Keep the existing project path and URLs when using the default GitHub Pages URL.

## Before and after deployment

- Check that all sections, project previews, and external project links load.
- Test the mobile menu and in-page navigation at phone and tablet widths.
- Test the email and phone links on devices with the relevant apps configured.
- Confirm the browser title, favicon, and social preview metadata.
- After deployment, inspect the browser console and network panel for missing assets or errors.

The portfolio has no contact form submission backend: the email buttons open the visitor's email application rather than sending a message directly from the website.

## Troubleshooting

- **Page loads without styling or images:** confirm `vite.config.js` uses `/My-Portfolio-LJ/` for the default Pages URL. Use `/` only when deploying at a custom domain root.
- **No deployment starts:** confirm the changes were pushed to `main` and Pages is set to **GitHub Actions**.
- **Workflow fails during install/build:** check the Actions log; the workflow requires the committed `package-lock.json` to match `package.json`.
- **The site is stale or shows a 404:** wait for the latest Actions deployment to complete, then check the published URL and hard-refresh the browser.
- **Email button does not open a compose window:** configure a default mail handler, or copy the displayed email address. A static site cannot deliver email without a separately configured form service or backend.
