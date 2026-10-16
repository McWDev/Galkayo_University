# Deployment and Operations Plan

## Environments
- Local development
- Preview/staging
- Production

Use separate database branches/instances or credentials for non-production and production. Never test destructive migrations on production first.

## Deployment sequence
1. Create Git repository and protect main branch.
2. Set up development and preview hosting.
3. Create Neon project and least-privilege database credentials.
4. Configure secrets in the hosting provider, not in source files.
5. Apply reviewed migrations to staging.
6. Run type checks, lint, tests, and production build.
7. Review content and test contact delivery.
8. Configure production domain, HTTPS, redirects, sitemap, and robots.
9. Apply production migrations through a controlled release.
10. Verify key pages, CMS login, publishing workflow, forms, logs, and backups.

## Operational requirements
- Maintain `.env.example` without real secrets.
- Document how to rotate keys and revoke access.
- Configure database backups and periodically test restoration.
- Monitor uptime, server errors, form abuse, and database connection errors.
- Keep dependencies patched; review security advisories.
- Document who owns production access.
- Have a rollback plan for app deployments and migrations.
- Keep an inventory of domain, hosting, database, storage, email, and analytics providers.
- Confirm data residency, privacy obligations, and university policy before selecting vendors.

## Launch checklist
- GU has approved all visible content and imagery.
- Logo and brand colors are confirmed.
- No placeholder links or fabricated statistics remain.
- Contact form destination is verified.
- Admin accounts are individual accounts, not shared credentials.
- Least-privilege roles and MFA for privileged users are configured where available.
- Backup and restore procedure has been tested.
- Accessibility, mobile, SEO, and security checks are complete.
- Privacy notice and content governance process are published.
