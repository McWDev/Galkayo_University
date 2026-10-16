# TASK-014 — CMS Pages and Site Settings

## Objective
Build CMS management for standard pages and approved site settings.

## Prompt for Claude AI
Implement Task 014 only. Build admin screens and server actions for creating, editing, previewing, and archiving standard pages and approved site settings (contact details, footer links, social links, metadata). Validate all inputs server-side. Enforce roles. Use a safe slug strategy and warn about duplicate slugs. Draft content must never appear publicly. Add audit events for important changes.

## Acceptance criteria
- Authorized users can manage pages/settings
- Unauthorized users are blocked server-side
- Draft/archived pages are not public
- Preview is protected and does not leak drafts to anonymous users
- Tests and build pass

Stop after Task 014.
