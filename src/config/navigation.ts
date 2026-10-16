/**
 * Public navigation, derived from docs/prd/02-SITEMAP-AND-CONTENT.md.
 * Routes are created in Task 003; items become CMS-editable (navigation_items) in Task 014.
 */
export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavSection = NavLink & {
  children?: NavLink[];
};

export const mainNavigation: NavSection[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Overview", href: "/about", description: "Who we are" },
      { label: "History", href: "/about/history", description: "Our story" },
      { label: "Mission, Vision & Values", href: "/about/mission-vision-values", description: "What guides us" },
      { label: "Leadership & Governance", href: "/about/leadership", description: "University leadership" },
      { label: "Campuses & Facilities", href: "/about/campuses", description: "Where we teach and learn" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Faculties", href: "/academics/faculties", description: "Our academic faculties" },
      { label: "Departments", href: "/academics/departments", description: "Teaching departments" },
      { label: "Academic Programmes", href: "/academics/programmes", description: "Find a programme" },
      { label: "Academic Calendar", href: "/academics/calendar", description: "Key academic dates" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "How to Apply", href: "/admissions/how-to-apply", description: "Step-by-step guidance" },
      { label: "Entry Requirements", href: "/admissions/requirements", description: "What you need" },
      { label: "Tuition & Fees", href: "/admissions/fees", description: "Approved fee information" },
      { label: "Scholarships & Financial Aid", href: "/admissions/scholarships", description: "Support for students" },
      { label: "FAQs", href: "/admissions/faqs", description: "Common questions" },
      { label: "Contact Admissions", href: "/admissions/contact", description: "Talk to our team" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research Office & Centres", href: "/research/centres", description: "Research at GU" },
      { label: "Publications", href: "/research/publications", description: "Research highlights" },
      { label: "Conferences & Seminars", href: "/research/conferences", description: "Academic events" },
    ],
  },
  {
    label: "University Life",
    href: "/university-life",
    children: [
      { label: "Student Activities", href: "/university-life/student-activities", description: "Campus life" },
      { label: "Library", href: "/library", description: "Resources and services" },
      { label: "Alumni", href: "/university-life/alumni", description: "Our graduates" },
    ],
  },
  {
    label: "News & Events",
    href: "/news",
    children: [
      { label: "News", href: "/news", description: "Latest from GU" },
      { label: "Announcements", href: "/news/announcements", description: "Official notices" },
      { label: "Events", href: "/events", description: "What is coming up" },
      { label: "Gallery", href: "/gallery", description: "Photos from campus" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Downloads", href: "/resources/downloads", description: "Prospectus, brochures and more" },
      { label: "Policies", href: "/resources/policies", description: "University policies" },
      { label: "Forms", href: "/resources/forms", description: "Official forms" },
    ],
  },
];

/** Utility links in the top bar. No portal link until GU supplies a real one. */
export const utilityNavigation: NavLink[] = [
  { label: "Library", href: "/library" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavLink = { label: "Apply", href: "/admissions" };

export const footerLinks: { heading: string; links: NavLink[] }[] = [
  {
    heading: "University",
    links: [
      { label: "About GU", href: "/about" },
      { label: "Campuses & Facilities", href: "/about/campuses" },
      { label: "News & Events", href: "/news" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Study",
    links: [
      { label: "Academic Programmes", href: "/academics/programmes" },
      { label: "Faculties", href: "/academics/faculties" },
      { label: "Admissions", href: "/admissions" },
      { label: "Scholarships", href: "/admissions/scholarships" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Library", href: "/library" },
      { label: "Research", href: "/research" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "Policies", href: "/resources/policies" },
    ],
  },
];

/** True when `pathname` is `href` or a descendant route of it. */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
