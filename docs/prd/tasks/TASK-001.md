# TASK-001 — Repository and Project Setup

## Objective
Create the clean, maintainable Next.js foundation for the Galkayo University public website and future CMS. Do not build business features yet.

## Prompt for Claude AI
You are implementing Task 001 only for the Galkayo University website. Read `README.md`, `01-PROJECT-PRD.md`, `03-UI-BRAND-GUIDE.md`, and `04-TECHNICAL-ARCHITECTURE.md` first. Inspect the existing repository before changing files. Use Next.js App Router, TypeScript, and a currently supported stable dependency set. Keep this task limited to project setup and a minimal working page. Do not implement the database, authentication, CMS, or full website yet. Add scripts for development, linting, type checking, tests if configured, and production build. Create `.env.example` with placeholders only. Add a useful README with setup commands and architecture notes. Never put secrets in source control.

## Deliverables
- Working Next.js TypeScript app
- Clean initial folder structure
- package scripts
- `.gitignore`
- `.env.example`
- README setup instructions
- Minimal home page stating this is the GU website project, not fake institutional content

## Acceptance criteria
- `npm install` completes
- development server starts
- lint/typecheck/production build succeed using configured scripts
- no secret values committed
- existing user files are not deleted without explaining why

## Verification report
Claude must report exact commands run, results, files created, any warnings, and manual steps the user must perform. Stop after Task 001; do not start Task 002.
