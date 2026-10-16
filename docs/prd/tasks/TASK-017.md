# TASK-017 — Media and Documents Management

## Objective
Add secure upload and media/document management.

## Prompt for Claude AI
Implement Task 017 only. Use approved object storage rather than storing binary uploads in PostgreSQL. Validate file size, extension, MIME type, filenames, access rights, and image dimensions where applicable. Generate safe storage keys rather than trusting user filenames. Require alt text for meaningful images. Prevent executable/script uploads and unauthorized replacement. Document malware scanning options and operational limits.

## Acceptance criteria
- Unsupported/oversized files are rejected
- Upload authorization is enforced
- Stored file URLs are not guessed from user filenames
- Media metadata is persisted safely
- Tests and build pass

Stop after Task 017.
