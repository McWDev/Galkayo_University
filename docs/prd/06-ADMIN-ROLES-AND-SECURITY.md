# Admin Roles, Workflow, and Security

## Proposed roles
- **Super Administrator:** manages CMS users, roles, settings, and all content.
- **Content Administrator:** manages content areas assigned by GU; may publish only if granted publishing permission.
- **Editor:** creates and edits content, previews, and submits for review; cannot publish by default.
- **Publisher/Reviewer:** reviews submitted content, returns it for changes, approves, publishes, schedules, or archives where authorized.
- **Admissions Editor:** manages approved admissions pages and deadlines.
- **Read-only Auditor:** views audit events and content history without changing content.

These roles are proposals. GU must approve the final permissions matrix before implementation.

## Workflow
1. Editor creates or edits a draft.
2. Editor previews and submits for review.
3. Reviewer approves or returns with a comment.
4. Authorized publisher publishes immediately or schedules publication.
5. Expired or outdated content is reviewed and archived/updated.
6. Important actions are recorded in the audit log.

## Minimum controls
- Server-side authorization on every protected route and mutation
- Strong password policy or trusted identity provider; MFA for privileged accounts where available
- Rate limiting for sign-in and public forms
- Secure session cookies, HTTPS, and session expiry/revocation
- Validate and sanitize user-provided content
- Escape output; prevent stored XSS
- Protect against CSRF where applicable
- Restrict file extensions, MIME types, size, and storage permissions; scan uploads if available
- Prevent open redirects and unsafe URL handling
- Use least-privilege database credentials
- Log role changes, publishing, deletion/archive, login failures, and settings changes
- Do not allow UI-only permission enforcement
- Admin routes must be excluded from search engine indexing
- Provide a documented process for disabling a compromised user

## Audit log fields
Actor user ID, action, entity type, entity ID, timestamp, outcome, request/correlation ID, and limited safe metadata. Never store passwords or session secrets.

## Privacy
Contact form records should be visible only to designated staff. Define retention, access, export, and deletion procedures with GU. Display a privacy notice before collecting personal data.
