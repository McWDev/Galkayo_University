# TASK-021 — Deployment, Backups, and Launch

## Objective
Deploy the approved site safely to production.

## Prompt for Claude AI
Implement Task 021 only. Follow `08-DEPLOYMENT-AND-OPERATIONS.md`. Document deployment provider, domain/DNS steps, environment variables, Neon configuration, migrations, storage, email delivery, HTTPS, monitoring, backup/restore, rollback, and release verification. Never request that the user paste production secrets into chat. Use staging first and ask the user to perform provider account actions when required. Do not claim deployment succeeded unless the provider confirms it.

## Acceptance criteria
- Staging smoke tests pass
- Production environment uses secrets manager
- Migration/rollback approach documented
- Backup restoration has been tested
- GU signs off content and launch checklist

Stop after Task 021.
