# Joshua Caburian — Software Engineering Portfolio

A focused portfolio built with React, strict TypeScript, Vite, and custom responsive CSS. Three source-backed case studies demonstrate full-stack applications, backend automation, and frontend architecture.

## Run locally

Requires Node.js 22.12+ (24 recommended) and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Vite prints the local URL. No database, account, secret, or API key is needed.

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm audit --audit-level=moderate
pnpm exec playwright install chromium
pnpm test:e2e
pnpm preview
```

`pnpm check` runs lint, type checking, unit tests, and production build. Browser tests serve the production `dist/` output on port 5199, so run `pnpm build` before `pnpm test:e2e`. GitHub Actions also runs the dependency audit, Chromium browser tests, and automated axe accessibility checks on desktop and mobile. The workflow must be pushed to GitHub before hosted CI can execute.

## Content and configuration

- `src/content.ts`: project descriptions, engineering notes, source links, skills, and public contact configuration.
- `src/App.tsx`: hero, personal background, approach, and page composition.
- `src/components/`: navigation, project cards, architecture illustrations, and small icons.
- `src/styles.css`: design tokens, layouts, responsive behavior, focus styles, reduced-motion and print rules.
- `docs/SOURCES.md`: repository evidence, claim boundaries, and review date.

The contact button opens `mailto:joshkiechan12345@gmail.com`, as approved by the owner. Contact settings live in `src/content.ts`. A résumé can live at `public/resume.pdf` with the URL `/resume.pdf`. Empty values hide these links; the résumé link remains hidden until a résumé is supplied. There is no fake contact form or missing résumé link.

All project graphics are original architecture illustrations, explicitly labeled. They do not represent product screenshots, real users, transactions, or measured outcomes. The font is bundled locally; there are no external fonts, analytics, cookies, or backend requests.

## Deployment

`pnpm build` creates a static `dist/` directory. Deploy it to a static host using the root path. The portfolio is not published automatically. Once a public domain is chosen:

1. Set an absolute `og:image` and `twitter:image` URL in `index.html` (the local social card is `/social-card.png`).
2. Add a canonical link and `og:url` for the actual domain; do not use a placeholder domain.
3. Add a sitemap using that domain if desired.
4. Verify the deployed page, social-card preview, contact details, and résumé link.

## Design and accessibility

Warm neutral canvas, restrained forest green, generous spacing, and local Manrope typography. SignalSource has a full-width flagship card, with the other projects below. Native disclosure elements expose technical depth without overwhelming a first scan. The site uses semantic landmarks, one primary heading, visible keyboard focus, a skip link, accessible mobile navigation, reduced-motion support, and responsive layouts down to 320px.

## Scope

This repository is the portfolio presentation, not a reimplementation or independent audit of the featured projects. Source review verifies the existence of the described code; it does not establish production security, real users, uptime, or live integrations. No employment history, dates, metrics, or private contact information have been invented.
