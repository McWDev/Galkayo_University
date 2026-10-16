# TASK-010 — Contact Form and Privacy Controls

## Objective
Implement a secure public contact form with server-side validation.

## Prompt for Claude AI
Implement Task 010 only. Add a contact form with name, email, topic/department (optional if approved), and message. Validate server-side with Zod, add basic spam/rate-limit protection using a production-appropriate method, show clear success/error states, and ensure the destination email is configured through environment variables. If no email provider/destination is configured, do not pretend messages were delivered; use a safe development-only mode and document setup. Add a privacy notice and retention assumptions for GU approval. Avoid logging full message contents.

## Acceptance criteria
- Invalid data is rejected server-side
- Rate limiting or equivalent anti-abuse control is documented and tested
- Success is shown only when the submission is accepted by the configured backend/provider
- No secrets exposed
- lint/typecheck/tests/build pass

Stop after Task 010.
