# The Pangasinan Heritage Digital Showcase

**Project Title:** The Pangasinan Heritage Digital Showcase
**Student Name:** Moises Rivero III
**Selected Framework:** Next.js 14 (App Router) with Static Site Generation (`output: 'export'`)

**Live Website:** https://YOUR-GITHUB-USERNAME.github.io/pangasinan-heritage-showcase/

---

A fast, mobile-first guide to Pangasinan's heritage sites — the Hundred Islands, Cape Bolinao
Lighthouse, Balungao Hot Spring and more — built with Atomic Design and deployed as a static
site on GitHub Pages.

## Pages

| Route | Page |
|---|---|
| `/` | Home: greeting, search and category filter, grid of heritage sites |
| `/sites/<slug>/` | One page per site (8 pages generated at build time) |
| `/design-system/` | Living component library (atoms, molecules, organisms) |
| `/about/` | How the site meets the project requirements |

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build the static site

```bash
npm run build      # writes plain HTML/CSS/JS to out/
npm start          # preview out/ at http://localhost:3000
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`.

1. Create a **public** repository named `pangasinan-heritage-showcase` on GitHub.
2. Push this folder to it (see below).
3. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to finish (about 1–2 minutes).
5. The site is live at `https://<username>.github.io/pangasinan-heritage-showcase/`.
   Put that address in the **Live Website** line at the top of this file.

```bash
git init
git add .
git commit -m "Pangasinan Heritage Digital Showcase"
git branch -M main
git remote add origin https://github.com/<username>/pangasinan-heritage-showcase.git
git push -u origin main
```

The workflow passes the repository's Pages path to the build as `BASE_PATH`
(see `next.config.mjs`), so links, images and fonts work from the `/pangasinan-heritage-showcase/` sub-folder.

## Project structure (Atomic Design)

```
src/
├── app/                         # pages (Next.js App Router)
│   ├── layout.jsx               # header, skip link, footer, font
│   ├── page.jsx                 # home
│   ├── sites/[slug]/page.jsx    # site detail (generateStaticParams → 8 static pages)
│   ├── design-system/page.jsx   # component library
│   ├── about/page.jsx
│   └── not-found.jsx
├── components/
│   ├── atoms/        Button, Typography (Heading, Text), Icon, Image, ColorTokens
│   ├── molecules/    HeritageCard, SearchForm, NavItem
│   └── organisms/    HeaderNavigation, HeritageGrid
├── data/sites.js                # all site content in one file
├── styles/tokens.css            # colour, type, spacing and radius tokens
├── lib/asset.js                 # adds the GitHub Pages base path to image URLs
└── fonts/                       # Alfa Slab One, subset WOFF2 (SIL Open Font License)
public/images/sites/             # WebP photos at 480, 720, 960 and 1440 px
```

## Adding a heritage site

1. Add an object to `SITES` in `src/data/sites.js` (copy an existing one).
2. Add four photos named `<slug>-480.webp`, `<slug>-720.webp`, `<slug>-960.webp`,
   `<slug>-1440.webp` to `public/images/sites/` — or set `image: false` to show a placeholder.
3. `npm run build`. The home grid, search and a new `/sites/<slug>/` page update automatically.

## Requirements

| Requirement | How it is met |
|---|---|
| Lightning fast | Static HTML; ~91 KB shared JavaScript (gzip); WebP photos sized to the screen; 16 KB font; no third-party scripts |
| Mobile-first | Styles start at 320px; cards use container queries; 44px touch targets |
| Maintainable | Atomic Design components; content in one data file; design tokens |
| Accessible (WCAG 2.1 AA) | ≥ 4.5 : 1 text contrast, skip link, visible focus, labelled form fields, `aria-current`, `aria-expanded`, live region for search results, alt text |
| Deployable | `output: 'export'` + GitHub Actions → GitHub Pages |

## Notes

- **Casa Real photo:** no verified photo yet, so the site shows a placeholder (`image: false` in `sites.js`).
- Contact lines name the tourism office to ask; phone numbers are left out until they can be verified.
