# TASK-020 — Security Review and End-to-End Regression

## Objective
Run a security-focused review and test all critical user journeys.

## Prompt for Claude AI
Implement Task 020 only. Review authentication, authorization, input validation, XSS, CSRF where applicable, rate limiting, file uploads, secrets, contact privacy, audit logging, database permissions, dependency advisories, error messages, and admin indexing. Add Playwright end-to-end tests for public navigation, programme/news browsing, contact form, CMS login, draft/review/publish, role denial, and disabled user access. Do not claim a security audit is complete unless the actual checks were run. Fix critical/high issues before launch.

## Acceptance criteria
- Critical/high findings are fixed or launch is blocked
- End-to-end tests pass
- Production build passes
- Security findings and unresolved risks are documented

Stop after Task 020.
