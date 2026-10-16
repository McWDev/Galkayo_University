# TASK-015 — Academic Content CMS

## Objective
Manage faculties, departments, and programmes through the CMS.

## Prompt for Claude AI
Implement Task 015 only. Add create/edit/preview/review/publish/archive workflows for faculties, departments, and programmes. Enforce relationships and validation. A department must reference a valid faculty; a programme must reference valid academic units. Avoid deleting records that have linked content; prefer archive and clear dependency messages. Public pages must query only published records.

## Acceptance criteria
- CRUD operations follow permissions
- Relationship constraints are enforced
- Drafts remain private
- Public directories update after publication
- Unit/integration tests and build pass

Stop after Task 015.
