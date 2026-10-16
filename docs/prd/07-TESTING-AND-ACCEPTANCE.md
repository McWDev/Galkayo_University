# Testing and Acceptance Strategy

## Quality gate
A task is not complete merely because code was generated. The developer must run checks, inspect the result, fix failures, and report the exact commands and outcomes before moving on.

## Required checks
- TypeScript/type check
- Lint
- Unit tests for validation, permissions, and domain logic
- Database migration test against development database
- Integration tests for core server actions/API handlers
- Playwright end-to-end tests for key public and CMS journeys
- Responsive checks at mobile/tablet/desktop widths
- Keyboard and accessibility checks
- SEO checks: metadata, canonical URLs, sitemap, robots, 404
- Security checks for authentication, authorization, forms, file uploads, and secrets
- Production build

## Minimum acceptance scenarios
1. Public visitor can navigate all published pages without login.
2. Draft and in-review content never appears on public routes.
3. Programme and news listing pages support empty, loading, and error states.
4. Editor cannot publish without permission.
5. Reviewer can return content with a reason.
6. Authorized publisher can publish and public page updates correctly.
7. Disabled CMS user cannot sign in or continue using an active session.
8. Contact form rejects invalid input and rate-limits abusive submissions.
9. Upload validation blocks unsupported or oversized files.
10. Audit events are created for important actions and cannot be edited through the CMS.
11. Admin routes are not indexed.
12. Mobile navigation and forms work using keyboard and touch.
13. No secrets are included in client bundles or Git history.
14. Database backup can be restored in a documented test.

## Completion report template
- Task ID:
- Files changed:
- Commands run:
- Results:
- Manual checks/screenshots:
- Known issues:
- Security considerations:
- Acceptance criteria passed/failed:
- Recommendation: proceed / fix before proceeding
