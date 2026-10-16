# Technical Architecture

## Architecture summary
A single Next.js application serves:
1. Public server-rendered website routes.
2. Protected `/admin` CMS routes.
3. Server-side mutations and API endpoints.
4. A shared Neon PostgreSQL database.

Suggested structure (adapt as needed, keep it simple):
- `src/app/(public)/...` — public pages
- `src/app/admin/...` — protected CMS pages
- `src/app/api/...` — APIs/webhooks only where needed
- `src/components/` — shared UI components
- `src/features/` — domain-focused feature modules
- `src/lib/auth/` — authentication and authorization
- `src/lib/db/` — database connection and schema
- `src/lib/validation/` — Zod schemas
- `src/lib/security/` — rate limiting and safe utilities
- `src/lib/seo/` — metadata helpers
- `drizzle/` — migrations
- `tests/` — unit and end-to-end tests

## Technical decisions
- Use Next.js App Router and TypeScript.
- Use Neon PostgreSQL as the hosted relational database.
- Use Drizzle ORM with version-controlled migrations.
- Validate all server-side inputs; client validation is for usability, not security.
- Use a maintained auth library/provider; do not implement password cryptography yourself.
- Keep secrets in environment variables/secrets manager.
- Store media in object storage or an approved media service. Store file metadata and URLs in PostgreSQL.
- Use server components by default; add client components only when interaction requires them.
- Use pagination for long CMS lists.
- Use explicit database constraints, indexes, and foreign keys.
- Add structured error handling and safe logging.
- Add rate limiting and anti-spam controls to public forms.
- Prefer soft deletion/archive for published content and audit-sensitive records.

## Route and data conventions
- Public slugs must be unique per content type or within a shared page namespace.
- Only `PUBLISHED` content is visible publicly.
- Every content mutation must check session, role, and resource permissions on the server.
- Do not trust role names or IDs supplied by the browser.
- Avoid N+1 queries and select only needed fields.
- Generate sitemap and robots rules for public pages; never index admin routes.
- Use metadata and canonical URLs for public pages.
- Use migrations; do not make untracked manual production schema changes.

## Environment variables
Document required variables in `.env.example` with placeholders only, for example:
- `DATABASE_URL`
- Auth provider variables
- Object storage credentials
- Email provider/API key if enabled
- Public site URL
Never commit real values or production credentials.

## External integrations
Do not assume integrations exist. Add only after GU confirms:
- Official email service for contact forms
- Newsletter provider
- Institutional repository
- Student portal/HEMIS
- Maps/social profiles
