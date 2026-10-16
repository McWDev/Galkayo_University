# Sequential Task Roadmap

## Working rule
**Build one task, test it, review its results, and only then start the next task.** Never ask Claude to implement all tasks at once. Each task file contains its own prompt and acceptance criteria.

| Task | Deliverable | Gate before next task |
|---|---|---|
| 001 | Repository and project setup | App starts; lint/typecheck/build pass |
| 002 | Design tokens and shared layout | Responsive header/footer and logo verified |
| 003 | Public route skeleton and navigation | All planned routes render |
| 004 | Home page | Approved content and responsive tests pass |
| 005 | About, campus, and facilities pages | Content templates and links pass |
| 006 | Faculties, departments, programmes | Directory/detail pages and filters pass |
| 007 | Admissions information | Requirements/deadline presentation verified |
| 008 | News and events public pages | Listing/detail/status behavior passes |
| 009 | Research, library, resources, downloads | Metadata and download safety pass |
| 010 | Contact form and privacy controls | Validation, spam controls, delivery tested |
| 011 | Database schema and migrations | Migrations and constraints tested |
| 012 | Authentication and protected admin shell | Unauthenticated access blocked |
| 013 | Roles and permissions | Server-side authorization tests pass |
| 014 | CMS pages and site settings | Authorized CRUD and preview pass |
| 015 | Academic content CMS | Faculty/department/programme editing passes |
| 016 | News/events CMS and approval workflow | Draft-review-publish workflow passes |
| 017 | Media and documents management | Upload validation and permissions pass |
| 018 | Contact inbox and audit log | Access restrictions and audit tests pass |
| 019 | SEO, accessibility, performance hardening | Audit issues resolved or documented |
| 020 | Security review and end-to-end regression | Critical/high issues fixed |
| 021 | Deployment, backups, and production launch | Release checklist signed off |
| 022 | Handover and staff guide | GU staff can manage content independently |

## Separate later projects (not part of initial website)
- Student information system / HEMIS
- Online application processing with applicant accounts
- Student portal, results, attendance, fees, payments
- LMS/e-learning
- Certificate verification
- Alumni CRM, donations, or staff HR/finance
Each needs a separate PRD, privacy/security review, integrations plan, and acceptance tests.
