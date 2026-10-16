# Galkayo University Website — Build Plan

This plan implements the PRD package in [`docs/prd/`](docs/prd/) in the order of `docs/prd/09-TASK-ROADMAP.md`.
Each task is built, verified against its acceptance criteria, committed, and reported before the next one starts.

## Confirmed decisions

| Area | Decision |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript (strict) |
| Styling | Tailwind CSS 4 with GU design tokens (`03-UI-BRAND-GUIDE.md`) |
| Database | Neon PostgreSQL — database **`GalkayoUniversity`**, separate Neon branches for dev / staging / production |
| ORM | Drizzle ORM + drizzle-kit migrations committed to Git |
| Validation | Zod on every server action / route handler |
| Auth | **Custom (in-house) auth**, no third-party auth provider (details below) |
| Tests | Vitest (unit/integration), Playwright (end-to-end) |
| Source control | GitHub — `https://github.com/McWDev/Galkayo_University.git`, commit after each verified task |
| Media storage | S3-compatible object storage (e.g. Cloudflare R2) — confirmed at Task 017 |
| Email | Transactional provider (e.g. Resend/SMTP) — confirmed at Task 010; dev mode never fakes delivery |

## Custom authentication design (Task 012–013)

Built in-house so that users and sessions live in our own Neon tables. We use audited libraries for the cryptography and never write our own:

- **Passwords:** Argon2id via `@node-rs/argon2` (OWASP parameters), minimum length 12, checked against a breached-password list. Plaintext passwords are never stored or logged.
- **Sessions:** 256-bit random tokens. Only a SHA-256 hash is stored in the `sessions` table, so a database leak cannot be used to hijack sessions. Cookie is `__Host-` prefixed, `HttpOnly`, `Secure`, `SameSite=Lax`. Idle expiry is 8h and absolute expiry 7 days. The session rotates on login and privilege change.
- **Revocation:** sessions are validated against the DB on every request, so deactivating a user or signing out kills every session immediately.
- **MFA:** TOTP (authenticator app) is mandatory for Super Administrator and Publisher roles, with hashed one-time recovery codes.
- **Brute force:** per-IP and per-account rate limits backed by Postgres, progressive lockout, and identical error messages for wrong email and wrong password (no user enumeration).
- **CSRF:** Server Actions are protected by Next.js origin checks, and an explicit Origin check is added to every route handler that mutates state.
- **No public registration:** the first Super Admin is created with a CLI script (`npm run admin:create`). After that, admins invite users.
- **Audit:** logins, failures, lockouts, role changes and deactivations are written to the append-only `audit_logs` table.

## Security baseline (applies to every task)
- Strict security headers: nonce-based CSP, HSTS, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy.
- Authorization is checked server-side on every admin page and mutation, never in the UI only.
- Only `PUBLISHED` content is queried by public routes.
- Rich text is sanitized on save and escaped on render.
- Uploads are checked by size, extension and magic-byte MIME type, and stored under random storage keys.
- `/admin` is marked `noindex` and disallowed in robots.txt.
- Secrets live only in `.env.local` and the host's secret manager. `.env.example` holds placeholders.
- The app uses a least-privilege DB role. Migrations run under a separate owner role.

## Task sequence

| # | Task | Key output | Gate |
|---|---|---|---|
| 001 | Project setup | Next.js/TS/Tailwind scaffold, scripts, README, `.env.example`, Git + GitHub remote | install, lint, typecheck, build pass |
| 002 | Design tokens & layout | Tokens, header, accessible mobile nav, footer, GU logo | responsive + keyboard + contrast |
| 003 | Route skeleton | All sitemap routes, breadcrumb/page-title/empty-state, 404, metadata helpers | all routes render |
| 004 | Home page | Hero, CTAs, academics, admissions steps, news/events, research/library, campus/contact | no fabricated facts |
| 005 | About pages | Overview, history, mission, leadership, campuses, facilities templates | links + no invented facts |
| 006 | Academics | Faculty/department/programme lists, details, filters behind a repository layer | filters tested, empty states |
| 007 | Admissions | How to apply, requirements, fees, scholarships, FAQs, contact; configurable deadlines | unverified data clearly marked |
| 008 | News & events | Listing/detail, categories, pagination, 404 on bad slug | dates/alt text consistent |
| 009 | Research, library, resources | Publications, library, downloads/policies/forms with safe links | download URL allow-list |
| 010 | Contact form | Zod validation, honeypot + rate limit, privacy notice, honest delivery status | tests pass |
| 011 | Neon + Drizzle | Full schema from `05-DATABASE-PLAN.md`, migrations, data-access layer | migration runs on dev branch |
| 012 | Custom auth + admin shell | Sign in/out, sessions, MFA, CLI admin provisioning, protected `/admin` | anon access blocked |
| 013 | Roles & permissions | Permission matrix, `requirePermission()` guards, tests | denied cases tested |
| 014 | CMS pages & settings | Page CRUD, preview, site settings, audit events | drafts never public |
| 015 | Academic CMS | Faculty/department/programme management with relations | constraints enforced |
| 016 | News/events workflow | Draft → review → return/approve → publish/schedule → archive | no bypass |
| 017 | Media & documents | Object-storage uploads, validation, alt text | bad files rejected |
| 018 | Inbox & audit log | Contact inbox with statuses, read-only audit viewer | restricted access |
| 019 | SEO/a11y/perf | Sitemap, OG, canonical, Lighthouse/axe fixes | findings documented |
| 020 | Security & E2E | Security review, Playwright regression suite | no critical/high open |
| 021 | Deployment | Staging → production, backups, restore test, rollback | checklist signed |
| 022 | Handover | Staff guide matching the real implementation | GU sign-off |

Tasks 004–010 use clearly labelled development fixtures behind repository interfaces, as the PRD requires. Task 011 swaps those fixtures for Neon queries without changing the page components.

## Inputs needed from GU / the owner
1. **Before Task 002:** the official GU logo file (SVG preferred, or a high-res PNG) placed at `public/brand/gu-logo.svg` or `.png`.
2. **Before Task 011:** the Neon connection strings for `GalkayoUniversity`, put in `.env.local` (never in chat or Git): a pooled `DATABASE_URL` for the app and a direct `DATABASE_URL_UNPOOLED` for migrations.
3. **Before launch:** approved content (programmes, leadership, contacts, fees, deadlines), the contact mailbox, the domain, and the hosting provider.
4. **Open questions:** whether Somali/Arabic are needed at launch, and who holds approval/publish rights.

## Completion report (per task)
Each task ends with: files changed, commands run with their results, manual checks, known issues, security notes, and acceptance criteria passed or failed.
