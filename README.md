# Galkayo University — Website & CMS

Official public website and content management system for Galkayo University (GU).

- **Build plan:** [PLAN.md](PLAN.md)
- **Requirements (PRD package):** [docs/prd/](docs/prd/) — start with `01-PROJECT-PRD.md`
- **Task prompts:** [docs/prd/tasks/](docs/prd/tasks/) — implemented one at a time

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript (strict) |
| Styling | Tailwind CSS 4 with GU brand tokens |
| Database | Neon PostgreSQL (`GalkayoUniversity`) via Drizzle ORM — Task 011 |
| Auth | Custom session auth (Argon2id, hashed DB sessions, TOTP MFA) — Task 012 |
| Validation | Zod |
| Testing | Vitest, Playwright (Task 020) |

Requires **Node.js 20.9+** (developed on Node 24).

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values; never commit .env.local
npm run dev                  # http://localhost:2000
```

## Editing website text

All home page text lives in **[src/content/home.ts](src/content/home.ts)**. Site-wide text (announcement bar, contact details, footer, portal URLs, social links) lives in **[src/config/site.ts](src/config/site.ts)**.

- Anything in `[square brackets]` is a fill-in slot for a GU fact. Replace the whole slot, brackets included.
- In `npm run dev`, unfilled slots are highlighted yellow on the page.
- `npm run content:check` lists every remaining slot with its location. **The site must not launch until it reports none.**
- Photos: put permissioned GU images in `public/images/` and set the matching `image` field.

This content moves into the CMS in Tasks 014–016.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | TypeScript type check |
| `npm test` | Unit tests (Vitest) |
| `npm run test:e2e` | End-to-end tests (Playwright, run after `npm run build`; first time: `npx playwright install chromium`) |
| `npm run content:check` | Lists unfilled `[slots]` in editable content — must pass before launch |
| `npm run check` | Lint + typecheck + tests + build — run before every commit |

## Project structure

```
src/
  app/              Routes: public pages, and /admin (CMS) from Task 012
  components/       Shared UI components
  features/         Domain modules (academics, news, admissions, …)
  lib/
    auth/           Custom authentication & authorization
    db/             Neon connection and Drizzle schema
    validation/     Zod schemas
    security/       Rate limiting and safe utilities
    seo/            Metadata helpers
drizzle/            Version-controlled migrations
tests/              Unit and end-to-end tests
public/brand/       Official GU logo assets (supplied by GU)
docs/prd/           Product requirements and task prompts
```

## Rules for contributors

- Only `PUBLISHED` content may appear on public routes; never present placeholder facts as real.
- Every mutation is authorized on the server — never rely on hidden UI.
- Secrets live in `.env.local` / the hosting secret manager only. `.env.example` contains placeholders.
- Every schema change is a committed Drizzle migration.
- Baseline security headers are set in `next.config.ts`; the site is `noindex` until launch.
