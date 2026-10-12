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
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm audit --audit-level=moderate
pnpm exec playwright install chromium
pnpm test:e2e
pnpm preview
```

`pnpm check` runs formatting, lint, type checking, unit tests, and production build. Browser tests serve the production `dist/` output on port 5199, so run `pnpm build` before `pnpm test:e2e`. [GitHub Actions](https://github.com/JoshkieChan/software-engineering-portfolio/actions/workflows/ci.yml) runs these checks, dependency auditing, and Chromium workflow/accessibility tests at desktop, tablet, and mobile sizes.

## Content and configuration

- `src/content.ts`: project descriptions, engineering notes, source links, skills, and public contact configuration.
- `src/App.tsx`: hero, personal background, approach, and page composition.
- `src/components/`: navigation, project cards, architecture illustrations, and small icons.
- `src/styles.css`: design tokens, layouts, responsive behavior, focus styles, reduced-motion and print rules.
- `docs/ASSETS.md`: screenshot provenance and project attribution.

The contact button opens `mailto:joshkiechan12345@gmail.com`. Contact settings live in `src/content.ts`. The existing one-page résumé is served from `public/resume.pdf`; `resumeUrl` points to `/resume.pdf`.

SignalSource and Stratus One feature real application screenshots from their repositories, with accessible gallery controls and full-size image links. Example booking and demo records are explicitly labeled. Opportunity Scout retains a service architecture illustration. The font and images are served locally; no analytics, cookies, database, or API credentials are required.

## Deployment

`pnpm build` creates a static `dist/` directory. Deploy it to a static host using the root path. The portfolio is not published automatically. Once a public domain is chosen:

1. Set an absolute `og:image` and `twitter:image` URL in `index.html` (the local social card is `/social-card.png`).
2. Add a canonical link and `og:url` for the actual domain; do not use a placeholder domain.
3. Add a sitemap using that domain if desired.
4. Verify the deployed page, social-card preview, contact details, and résumé link.

For a static host, use `pnpm install --frozen-lockfile`, build with `pnpm build`, and publish `dist`. No environment variables or backend provisioning are needed. Navigation uses page anchors, so no application-route rewrites are required. Preview the production artifact locally with `pnpm preview`.

## Design and accessibility

Warm neutral canvas, restrained forest green, generous spacing, and local Manrope typography. SignalSource has a full-width flagship card, with the other projects below. Native disclosure elements expose technical depth without overwhelming a first scan. The site uses semantic landmarks, one primary heading, visible keyboard focus, a skip link, accessible mobile navigation, reduced-motion support, and responsive layouts down to 320px.

## Scope

This repository is the portfolio presentation, not a reimplementation or independent audit of the featured projects. Source review verifies the existence of the described code; it does not establish production security, real users, uptime, or live integrations. No employment history, dates, metrics, or private contact information have been invented.
