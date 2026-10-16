# TASK-006 — Faculties, Departments, and Programmes

## Objective
Build public academic directory and detail-page templates.

## Prompt for Claude AI
Implement Task 006 only. Create faculty, department, and programme listing/detail page templates based on the sitemap and content model. Add search/filter UI only if it can be implemented cleanly and accessibly. For now, use a small typed fixture dataset clearly marked as development-only, or empty states if GU has not supplied real academic data. Do not present invented programme names as real. Prepare data access behind a repository/service layer so it can later be replaced by database queries.

## Acceptance criteria
- Listing and detail templates work
- Search/filter behavior is tested if included
- Empty state works
- Programme details include relevant fields without invented values
- lint/typecheck/build pass

Stop after Task 006.
