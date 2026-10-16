# TASK-018 — Contact Inbox and Audit Log

## Objective
Allow authorized staff to manage contact submissions and inspect audit history.

## Prompt for Claude AI
Implement Task 018 only. Build a restricted inbox for contact submissions with statuses such as New, In Progress, and Resolved. Only authorized staff can access message content. Add a read-only audit log interface with filters and pagination. Do not expose edit/delete controls for audit events. Avoid placing personal message content, secrets, or tokens in audit metadata. Define retention behavior for contact submissions.

## Acceptance criteria
- Unauthorized roles cannot read submissions
- Audit log is read-only through the CMS
- Important actions create audit events
- Lists are paginated
- Tests and build pass

Stop after Task 018.
