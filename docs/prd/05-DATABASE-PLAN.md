# Initial Database Plan

This is a starting model, not a finalized migration. Review naming and retention needs before creating production tables.

## Main entities
- `users`: CMS user identity, name, email, auth-provider identifier, active status, timestamps
- `roles`: named role definitions
- `user_roles`: user-to-role assignment
- `pages`: general editable pages
- `faculties`: academic faculties
- `departments`: departments linked to faculties
- `programmes`: academic programmes linked to faculty/department
- `news_articles`: news and announcements
- `events`: event listings
- `documents`: public files and policies
- `research_items`: publication metadata and links
- `media_assets`: file metadata, URL, alt text, uploader
- `navigation_items`: editable navigation links and order
- `site_settings`: approved contact details, social links, branding options
- `contact_submissions`: contact form submissions and status
- `newsletter_subscriptions`: only if newsletter feature is approved
- `content_reviews`: review decisions/comments
- `audit_logs`: append-only application audit events

## Common fields
Content tables generally need:
- `id` (UUID)
- `title`/`name`
- `slug` (unique constraint)
- `summary` or description
- `status` (`DRAFT`, `IN_REVIEW`, `PUBLISHED`, `ARCHIVED`)
- `created_at`, `updated_at`
- `created_by`, `updated_by`
- `published_at`, `published_by` where relevant
- `reviewed_at`, `reviewed_by`, `review_date` where relevant

Use actual timestamp-with-time-zone types where appropriate. Establish the institution's preferred time zone for display and scheduled publishing.

## Relationships and constraints
- One faculty has many departments and programmes.
- A department belongs to one faculty.
- A programme belongs to a faculty and may belong to a department.
- A news article may have one author and one featured media asset.
- Events and documents may reference media assets.
- Contact submissions are not public content and require restricted access.
- Audit logs should not have edit/delete actions exposed in the application.
- Use foreign keys and indexes for relation fields, status, slug, publication date, and frequently searched columns.

## Security and privacy notes
- Do not store passwords in custom tables if an auth provider handles credentials.
- Do not store uploaded binary files in PostgreSQL by default.
- Restrict access to contact submissions and minimize retained personal data.
- Audit logs must not contain passwords, secrets, full authentication tokens, or unnecessary form content.
- For append-only audit logs, restrict database/application permissions and consider external log export for higher assurance.
- Add backups and test restoration before launch.

## Migrations
Each schema change must be represented by a migration committed to Git. Test migrations against a non-production database before production.
