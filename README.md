# Highball Technomancy

**Binary Spirits, Digital Alchemy.** 🥃

This is the website for Highball Technomancy, an independent lab that builds AI systems mostly to find out whether they can be built. Some of it is alive. The rest is design documents, strong opinions, and the scribblings of madmen.

Live at [technomancyai.com](https://technomancyai.com).

## What's on the site

| Page | What it is |
|------|------------|
| `/` | The front door |
| `/ontap` | Every project, and `/ontap/<slug>` for each one |
| `/alembic` | The Alembic: essays and rounds (update posts), each with comments |
| `/lab` | How the lab started |
| `/contact` | The menu behind the bar |
| `/technomancers` | The people |

Open discussion (the Open Bar) lives on [GitHub Discussions](https://github.com/highball-technomancy/highball-technomancy.github.io/discussions), not on the site.

## Stack

- [Astro 5](https://astro.build), a static site generator. Content lives in markdown collections.
- Plain CSS with design tokens in `src/styles/tokens.css`. Tailwind is still wired in through the Astro integration.
- [Giscus](https://giscus.app) for comments, backed by GitHub Discussions.
- GitHub Pages for hosting, served from `/docs`.

## Running it locally

```powershell
npm install        # first time only
npm run dev        # live-reloading dev server at http://localhost:4321
npm run build      # builds the site into /docs
npm run preview    # serves /docs locally, the closest thing to production
```

A few things only happen at build time, so check them with `preview`, not `dev`:

- The sitemap (`/sitemap-index.xml`) is generated.
- Entries marked `draft: true` are left out. On the dev server they still show, labelled as drafts.

Changes to `src/content.config.ts` need a dev server restart.

## Deploying

1. `npm run build`
2. `npm run preview` and look it over, including at phone width.
3. Commit both the source and the regenerated `/docs`, then push to `main`.
4. Give GitHub Pages a minute or two, then hard refresh (Ctrl+Shift+R) before judging anything.

The custom domain comes from `public/CNAME`, which the build copies to `docs/CNAME`. It must contain exactly one line, `technomancyai.com`. If a merge conflict ever lands on that file, keep one copy of the domain, never both.

## Project structure

```
src/
├── content/
│   ├── projects/     # one .md per project; drives the header, footer, On Tap and /ontap pages
│   ├── essays/       # E001.md, E002.md ...
│   └── rounds/       # R001.md, R002.md ...
├── content.config.ts # the schemas for all three collections
├── components/       # Header, Footer, AlembicHome, AlembicReader, Giscus
├── data/             # projects.js (URLs), stages.js (status ladder), giscus.js, alembic.js, accent.js
├── layouts/
│   └── Base.astro    # the shell every page sits in: head tags, header, footer
├── pages/            # every file here becomes a URL
└── styles/           # tokens.css, alembic.css, menu-card.css
public/               # copied into /docs as-is: images, fonts, favicon, CNAME, robots.txt
docs/                 # build output. Don't edit by hand.
```

`planning/` is gitignored. It holds notes, backups and `planning/archive/`, where retired components and pages from the old site are kept.

## Writing for the Alembic

Add a markdown file to `src/content/essays/` or `src/content/rounds/`. The file name becomes the URL (`E002.md` → `/alembic/essays/e002`).

```yaml
---
title: The title.
description: One or two sentences. Shown under the title and used as the link preview.
date: 2026-09-24            # set by hand for now
author: Patrick Hill        # optional; this is the default
draft: true                 # flip to false to publish
projects: [permafrost]      # optional; project slugs, shown as tags that link to the project
tags: [Architecture]        # optional; plain topic tags
number: 2                   # rounds only
---
```

A line of `* * *` in the body renders as the gem divider.

## Adding a project

Add `src/content/projects/<slug>.md`. The slug becomes `/ontap/<slug>`. The frontmatter holds the short fields and the markdown body is the project page.

```yaml
---
order: 7                    # position on the On Tap star
name: Project Name
status: Concept             # Concept, Design, Build, Alpha or Released
icon: /project-icon.png     # file in public/
scale: 1                    # optical-weight correction for the icon
line: "One-line jot for the star."
accent: "#9b2aee"           # sampled from the icon's main colour
glass: Private              # where it's served: Private, or a link
ingredients: [Python, TypeScript]
---
```

## Comments

Each essay and round gets its own Giscus thread, mapped by page path. Essays post into the **Ideas** discussion category and rounds into **Show and tell**. The ids live in `src/data/giscus.js`.

Don't change those category ids once an entry has comments. Giscus looks for a page's thread inside a single category, so moving categories orphans every existing thread.

## Troubleshooting

- **Site loads with no styling:** GitHub Pages runs Jekyll by default, and Jekyll drops any file starting with `_`. Astro names some bundles that way (`_slug_.*.css`). `public/.nojekyll` switches Jekyll off. It's an empty file, and the site breaks without it.
- **Page looks stale after a deploy:** hard refresh (Ctrl+Shift+R). A deploy that's still propagating can cache a 404 for a single file.
- **Sitemap or a draft behaving oddly on the dev server:** those are build-time features. Use `npm run build` then `npm run preview`.
- **Custom domain stops working:** check Settings → Pages. The custom domain should be `technomancyai.com`, the source should be `main` at `/docs`, and HTTPS should be enforced. Then check `public/CNAME` holds a single line.
- **Port 4321 already in use:** another dev server is still running. Stop it, or run `npx astro dev --port 4322`.

## The projects

Every project on the site is private for now, so the site doesn't link to any repositories. When one goes public, its project file's `glass` field gets the link.

---

Made with ❄️ and 🥃 by the Highball Technomancy technomancers.
