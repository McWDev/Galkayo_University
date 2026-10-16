# TASK-011 — Neon Database and Drizzle Migrations

## Objective
Connect the application to Neon PostgreSQL and create initial schema/migrations.

## Prompt for Claude AI
Implement Task 011 only. Read `05-DATABASE-PLAN.md`. Configure Drizzle ORM and a Neon-compatible database connection. Add schema and migrations for the approved initial entities needed for public content, media metadata, contact submissions, users/roles foundations, reviews, and audit logs. Use UUIDs, foreign keys, indexes, timestamps, constraints, and appropriate status enums. Never run destructive migrations on production. Provide `.env.example` placeholders and instructions for creating a development Neon database. Do not add real credentials.

## Acceptance criteria
- Schema and migrations are version-controlled
- Migration can run against a development database
- Database errors are handled safely
- No secret credentials in Git
- Basic repository/data-access tests pass

Stop after Task 011.
