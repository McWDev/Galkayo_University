# Galkayo University Website — Project Documentation

## Purpose
This package defines a phased plan to build the official Galkayo University (GU) public website and a separate admin content-management dashboard using Next.js, Node.js capabilities, TypeScript, and Neon PostgreSQL.

## How to use this package
1. Read `01-PROJECT-PRD.md` and `02-SITEMAP-AND-CONTENT.md`.
2. Review the scope, decisions, and assumptions with the university.
3. Give Claude AI **one task file at a time** from the `tasks/` folder.
4. Complete the acceptance criteria and tests for the current task before starting the next.
5. Do not ask Claude to build the whole system in one prompt.
6. Commit working code to Git after each verified task.

## Suggested stack
- Next.js (App Router) + TypeScript
- Node.js runtime through Next.js server features/API routes
- Neon PostgreSQL
- Drizzle ORM and migrations
- Zod for validation
- A maintained authentication solution compatible with Next.js
- Tailwind CSS and accessible UI primitives
- Vitest for unit tests and Playwright for key end-to-end tests
- Object storage for uploaded media/documents; do not store large files directly in PostgreSQL
- GitHub for source control and a Next.js-compatible production host

Versions should be selected at implementation time from currently supported stable releases and recorded in the project README/package files.

## Project boundary
This is a public university website plus CMS. It is not a full HEMIS/student information system. Student admission applications, student accounts, grades, fees, payroll, and LMS functionality require separate approval and scope.

## Reference
Salaam University website: https://salaam.edu.so/
Use it as a structural reference for information architecture and presentation patterns, not as permission to copy its text, imagery, branding, or code.

## Files
- `01-PROJECT-PRD.md` — product requirements
- `02-SITEMAP-AND-CONTENT.md` — navigation and page inventory
- `03-UI-BRAND-GUIDE.md` — colors and design direction based on the supplied GU logo
- `04-TECHNICAL-ARCHITECTURE.md` — architecture and conventions
- `05-DATABASE-PLAN.md` — initial database entities
- `06-ADMIN-ROLES-AND-SECURITY.md` — CMS roles and controls
- `07-TESTING-AND-ACCEPTANCE.md` — quality gates
- `08-DEPLOYMENT-AND-OPERATIONS.md` — environment and release approach
- `09-TASK-ROADMAP.md` — sequential implementation roadmap
- `tasks/TASK-001.md` onward — individual Claude execution prompts
