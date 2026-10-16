# TASK-013 — Roles and Server-Side Permissions

## Objective
Implement the approved CMS role and permission model.

## Prompt for Claude AI
Implement Task 013 only using `06-ADMIN-ROLES-AND-SECURITY.md`. Add roles and permission checks on the server for view, create, edit, review, publish, archive, manage users, and view audit events. Do not rely on hidden buttons or client-side checks. Add tests proving that users without permission cannot call protected mutations directly. Document the final role-permission matrix for GU review.

## Acceptance criteria
- Server-side authorization is used for every protected action
- Editor cannot publish unless granted permission
- Disabled users lose access
- Permission tests cover allowed and denied cases
- lint/typecheck/tests/build pass

Stop after Task 013.
