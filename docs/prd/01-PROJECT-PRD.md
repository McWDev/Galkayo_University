# Product Requirements Document (PRD)
## Galkayo University Official Website and Content Management System

**Status:** Draft for institutional review  
**Product owner:** Galkayo University  
**Primary audience:** Prospective students, current students seeking public information, parents/guardians, alumni, academic staff, researchers, partners, media, and the public.

## 1. Product vision
Create a credible, accessible, mobile-friendly official university website that presents verified university information and lets authorized university staff update public content through a secure CMS without editing source code.

## 2. Goals
1. Establish a clear official online identity for Galkayo University.
2. Make faculties, departments, academic programmes, admission guidance, research, news, events, library resources, campuses, and contacts easy to find.
3. Enable designated staff to manage website content with approvals and an audit trail.
4. Improve mobile usability, accessibility, search-engine visibility, loading performance, and trust.
5. Keep content management separate from student records and other operational systems.

## 3. Non-goals for this project
Unless separately approved, do not build:
- Student information system / HEMIS
- Student login portal or self-service dashboard
- Online exams, attendance, grading, or transcripts
- Tuition invoicing, payment collection, payroll, HR, or accounting
- Full online admission application processing and applicant accounts
- LMS / online course delivery
- Digital certificate issuance or verification
- Alumni CRM or donor management

The public website may display verified admission instructions, fee information, scholarship notices, application links, and contact forms. A real online application workflow must be treated as a separately scoped feature with privacy, data-retention, and operational requirements.

## 4. Core user journeys
- A prospective student finds a programme, reviews entry requirements and admission instructions, then contacts admissions or follows the approved application link.
- A visitor learns about GU's history, mission, leadership, campuses, and facilities.
- A researcher discovers research publications, centres, conferences, and repository links.
- A visitor reads university announcements and filters news by category.
- A staff editor signs in, drafts content, previews it, and submits it for approval.
- An authorized publisher reviews content and publishes or returns it for correction.
- An administrator manages user access and reviews audit events.

## 5. Public website requirements
### 5.1 Home
- University identity, logo, primary navigation, and clear hero message
- Featured programmes/faculties
- Verified university facts and statistics only
- Admission call-to-action
- Latest news and upcoming events
- Research/library highlights
- Campus/contact summary
- Footer with useful links and social links, where verified

### 5.2 About
- Overview, history, mission, vision, values, objectives
- Leadership/governance only when approved and current
- Campus/facilities pages
- Quality assurance/accreditation claims only with verifiable approved information

### 5.3 Academics
- Faculties and departments
- Programme directory with degree/award, duration, study mode, entry requirements, description, and contact
- Search/filter by faculty, level, and mode where useful
- Each page must be editable in CMS
- Do not invent programme names or accreditation claims

### 5.4 Admissions
- Admission process and general requirements
- Faculty/programme-specific requirements when confirmed
- Application periods and deadlines with expiry/review dates
- Scholarships/financial aid notices
- Fees information only when formally approved
- Transfer guidance only if provided by the university
- Admissions contact information and approved external application links

### 5.5 Research and publications
- Research office/centres, research priorities, publications, conferences, and partnership information when supplied
- Link to institutional repository if one exists
- Metadata and downloadable files must have clear authorship, date, and usage/copyright notes
- Do not imply the CMS is a full institutional repository

### 5.6 News and events
- News articles, announcements, event listings, category, author/byline, publish date, featured image, and optional attachments
- Draft, review, scheduled, published, and archived states
- Search and category filters
- Past events can be archived rather than silently deleted

### 5.7 Library
- Library overview, opening hours, services, contact, and approved links to catalogue/repository
- No book-circulation system in this project

### 5.8 Downloads and policies
- Approved public documents: prospectus, academic calendar, policies, forms, brochures
- File type and size shown
- Uploads restricted to permitted formats and size limits
- Superseded documents can be archived while preserving links/records where practical

### 5.9 Contact
- Main contact details and location
- Contact form with validation, spam protection, consent notice, and clear destination mailbox
- Contact submissions are private and accessible only to authorized staff
- Do not expose personal staff phone numbers/emails without permission

## 6. CMS requirements
- Secure login and logout
- Role-based access control
- Dashboard with content counts and pending reviews
- Create/edit/preview/publish/archive content
- Reusable management areas for pages, faculties, departments, programmes, news, events, documents, media, contacts, navigation, and site settings
- Image/file upload with validation and alternative text
- SEO title, meta description, slug, canonical URL where appropriate, and social preview metadata
- Workflow: Draft → In Review → Approved/Published, or Returned for Changes
- Publishing permissions must be distinct from editing permissions
- Audit events for login/security and important content/user actions
- User deactivation must revoke future access; retain audit records
- Backups and recovery process documented
- Avoid hard deletion of published records when archive/soft-delete is safer

## 7. Content governance
- Each content type has an owner and reviewer.
- Content must be fact-checked by GU before publication.
- Leadership, programme names, tuition, deadlines, accreditations, partnerships, and statistics require explicit approval.
- Content must include a review date for information that can become stale.
- The website must not launch with placeholder facts presented as real.

## 8. Non-functional requirements
- Responsive at mobile, tablet, laptop, and large desktop widths
- Keyboard navigation, visible focus, semantic HTML, form labels, and meaningful image alt text
- Aim for WCAG 2.2 AA practices; validate with automated and manual checks
- SEO-friendly server-rendered public pages and clean URLs
- Good Core Web Vitals; optimize images and avoid unnecessary client-side JavaScript
- Secure headers, input validation, rate limiting for public forms, CSRF protections as applicable, and safe upload handling
- No secrets committed to Git
- Error messages should be useful but not leak internal details
- Use database migrations and tested backup/restore procedures
- Logs must avoid unnecessary personal or sensitive form content

## 9. Analytics and privacy
- Add privacy-respecting analytics only after university approval and disclosure where required.
- Publish privacy notice and contact details for privacy queries.
- Collect only information needed by the contact form.
- Define retention and deletion procedures for enquiries.
- Obtain consent for newsletter subscriptions and provide an unsubscribe method if newsletters are implemented.

## 10. Success measures
- Visitors can find a programme or admission information within a few clear navigation steps.
- GU staff can publish a reviewed news item without a code change.
- Public pages render correctly on mobile and desktop.
- No critical/high security findings remain at launch.
- Forms, CMS permissions, backups, and restore procedure pass acceptance tests.
- Content owners approve all launch-critical information.

## 11. Assumptions and open decisions
- The logo supplied by GU is the authoritative visual reference.
- Primary launch language is assumed to be English; confirm whether Somali and Arabic are required at launch.
- Official address, phone numbers, email addresses, campuses, programmes, leaders, statistics, policies, and social links must be supplied/approved by GU.
- Confirm domain and hosting provider before deployment.
- Confirm whether public contact enquiries should go to one mailbox or different departments.
- Confirm who can approve and publish content.
