# TASK-012 — Authentication and Protected Admin Shell

## Objective
Add secure CMS authentication and a protected admin layout.

## Prompt for Claude AI
Implement Task 012 only. Select and document a maintained authentication solution compatible with the project's Next.js version. Do not invent or hand-roll password hashing/session security. Create sign-in/sign-out flows, protected `/admin` routes, session checks on the server, secure cookie settings, and a minimal admin shell. Do not add all CMS CRUD screens yet. Include a safe initial-admin provisioning process that does not expose a public registration route.

## Acceptance criteria
- Anonymous users cannot access admin routes or protected data
- Invalid sign-in is handled safely
- Session termination works
- Admin routes are noindex
- Auth and route-guard tests pass

Stop after Task 012.
