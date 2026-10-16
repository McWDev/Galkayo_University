/**
 * Registry of public pages: the single source for page titles, subtitles and breadcrumb hierarchy.
 * Pages without dedicated content are rendered by the catch-all route `src/app/(public)/[...slug]/page.tsx`
 * with a neutral "being prepared" message — never invented facts. Later tasks give pages real content
 * by adding a dedicated route file (which Next.js prefers over the catch-all) or CMS data.
 *
 * Subtitles describe what a page is for; they must not state unverified facts about GU.
 */
import { faculties, facultyHref } from "@/content/faculties";

export type PageKind =
  /** Content page awaiting approved content. */
  | "content"
  /** Section landing page listing its child pages. */
  | "index"
  /** External university system (HEMIS, portals) not yet available online. */
  | "service"
  /** Contact page showing approved contact details. */
  | "contact";

export type PageDef = {
  path: string;
  title: string;
  intro: string;
  kind?: PageKind;
  /** Breadcrumb parent when it isn't the URL's parent path (e.g. /alumni sits under About). */
  parent?: string;
  /** Short label for breadcrumbs/cards when different from the title. */
  label?: string;
  /** Rendered by a dedicated route file instead of the catch-all. */
  dedicated?: true;
};

const defs: PageDef[] = [
  // About
  { path: "/about", title: "About Galkayo University", label: "About Us", intro: "Who we are, our history, and what guides us.", kind: "index", dedicated: true },
  { path: "/about/rectors-message", title: "Rector's Message", intro: "A message from the Rector of Galkayo University.", dedicated: true },
  { path: "/about/governance", title: "University Governance", label: "Governance", intro: "How Galkayo University is led, managed and held accountable.", dedicated: true },
  { path: "/about/structure", title: "Organisational Structure", label: "Structure", intro: "The faculties, offices and units that make up the university.", dedicated: true },
  { path: "/about/staff", title: "Our Staff", intro: "The academic and administrative staff of Galkayo University.", dedicated: true },
  { path: "/alumni", title: "Alumni", intro: "Stay connected with the Galkayo University graduate community.", parent: "/about" },
  { path: "/partnerships", title: "Partnerships", intro: "Institutions and organisations Galkayo University works with.", parent: "/about" },

  // Academics
  { path: "/academics", title: "Academics", intro: "Faculties, programmes and the academic calendar.", kind: "index" },
  { path: "/academics/faculties", title: "Our Faculties", label: "Faculties", intro: "Explore the faculties of Galkayo University.", kind: "index" },
  ...faculties.map<PageDef>((f) => ({
    path: facultyHref(f),
    title: f.name,
    intro: `Programmes, departments and contacts for the ${f.name}.`,
  })),
  { path: "/academics/departments", title: "Departments", intro: "Teaching departments across our faculties." },
  { path: "/academics/programmes", title: "Academic Programmes", label: "Programmes", intro: "Find the programme that matches your goals." },
  { path: "/academics/calendar", title: "Academic Calendar", intro: "Key dates for the academic year." },

  // Admissions
  { path: "/admissions", title: "Admissions", intro: "Everything you need to apply to Galkayo University.", kind: "index" },
  { path: "/admissions/requirements", title: "Admission Requirements", label: "Requirements", intro: "Check the entry criteria for each faculty before you apply." },
  { path: "/admissions/apply", title: "Apply Now", intro: "Start your application to Galkayo University." },
  { path: "/admissions/contact", title: "Admission Contact", intro: "Get in touch with the admissions team." },
  { path: "/admissions/transfer", title: "Transfer Application", intro: "How to transfer to Galkayo University from another institution." },
  { path: "/admissions/guardians", title: "Guideline for Guardians", intro: "Information for parents and guardians of applicants." },
  { path: "/admissions/fees", title: "Tuition Fees", intro: "Approved tuition and fee information." },
  { path: "/admissions/scholarships", title: "Scholarships", intro: "Financial aid and scholarship opportunities." },
  { path: "/admissions/faqs", title: "Admissions FAQs", label: "FAQs", intro: "Answers to common questions about applying." },

  // Graduate School
  { path: "/graduate-school", title: "Graduate School", intro: "Postgraduate study at Galkayo University.", kind: "index" },
  { path: "/graduate-school/programmes", title: "Postgraduate Programmes", label: "Programmes", intro: "Masters programmes offered through the Graduate School." },
  { path: "/graduate-school/partners", title: "Our Partners", intro: "Partner universities for postgraduate programmes." },
  { path: "/graduate-school/apply", title: "Apply for Postgraduate", intro: "How to apply for a postgraduate programme." },

  // Open & Distance Learning
  { path: "/odl", title: "Open & Distance Learning", label: "ODL", intro: "Earn a Galkayo University degree online.", kind: "index" },
  { path: "/odl/programmes", title: "ODL Programmes", intro: "Undergraduate programmes available through Open & Distance Learning." },
  { path: "/odl/apply", title: "Apply for ODL", intro: "How to apply for Open & Distance Learning." },
  { path: "/odl/admission", title: "ODL Admission Form", intro: "The admission form for Open & Distance Learning applicants." },
  { path: "/odl/portal", title: "ODL Student Portal", intro: "Online access for Open & Distance Learning students.", kind: "service" },

  // Research
  { path: "/research", title: "Research", intro: "Research projects, policy and partnerships at Galkayo University.", kind: "index" },
  { path: "/research/projects", title: "Research Projects", intro: "Research activity at the university." },
  { path: "/research/partnerships", title: "Research Partnerships", label: "Partnerships", intro: "Research collaborations with other institutions." },
  { path: "/research/policy", title: "Research Policy", intro: "The policy that governs research at Galkayo University." },
  { path: "/research/ethics", title: "Ethical Clearance", intro: "How to obtain ethical clearance for a research project." },
  { path: "/research/submit", title: "Submit Research", intro: "How to submit research for review." },

  // Policies
  { path: "/policies", title: "Policies", intro: "University policies for students and staff.", kind: "index" },
  { path: "/policies/student", title: "Student Policy", intro: "Rights, responsibilities and rules for students." },
  { path: "/policies/fees-payment", title: "Student Fees Payment Policy", label: "Fees Payment Policy", intro: "How and when student fees are paid." },
  { path: "/policies/thesis", title: "Registration for Thesis", intro: "How to register a thesis or final-year project." },

  // Media
  { path: "/media", title: "Media", intro: "News, events and photos from Galkayo University.", kind: "index" },
  { path: "/news", title: "News", intro: "The latest news and announcements from Galkayo University.", parent: "/media" },
  { path: "/events", title: "Events", intro: "Upcoming and past events at Galkayo University.", parent: "/media" },
  { path: "/media/gallery", title: "Photos & Videos", intro: "Photos and videos from campus life." },

  // Resources & other
  { path: "/resources", title: "Resources", intro: "Downloads, forms and useful documents.", kind: "index" },
  { path: "/resources/downloads", title: "Downloads", intro: "Prospectus, brochures and other approved documents." },
  { path: "/resources/forms", title: "Forms", intro: "Official university forms." },
  { path: "/library", title: "Library", intro: "Library services, opening hours and resources." },
  { path: "/contact", title: "Contact Us", intro: "Get in touch with Galkayo University.", kind: "contact" },
  { path: "/privacy", title: "Privacy Policy", intro: "How Galkayo University handles personal information." },

  // University systems (top bar)
  { path: "/hemis", title: "HEMIS", intro: "The Higher Education Management Information System.", kind: "service" },
  { path: "/student-portal", title: "Student Portal", intro: "Online services for Galkayo University students.", kind: "service" },
  { path: "/verify-certificate", title: "Verify Certificate", label: "Verify", intro: "Check the authenticity of a Galkayo University certificate.", kind: "service" },
];

export const pages: ReadonlyMap<string, PageDef> = new Map(defs.map((d) => [d.path, d]));

export function getPage(path: string): PageDef | undefined {
  return pages.get(path);
}

/** Breadcrumb parent: explicit `parent`, else the nearest registered ancestor path. */
export function parentOf(page: PageDef): PageDef | undefined {
  if (page.parent) return pages.get(page.parent);
  const segments = page.path.split("/").filter(Boolean);
  for (let i = segments.length - 1; i > 0; i--) {
    const candidate = pages.get(`/${segments.slice(0, i).join("/")}`);
    if (candidate) return candidate;
  }
  return undefined;
}

/** Trail from the top-level section down to (and including) this page. */
export function breadcrumbTrail(page: PageDef): PageDef[] {
  const trail: PageDef[] = [];
  for (let p: PageDef | undefined = page; p; p = parentOf(p)) trail.unshift(p);
  return trail;
}

export function childrenOf(path: string): PageDef[] {
  return defs.filter((d) => d.path !== path && parentOf(d)?.path === path);
}

/** Other pages in the same section, for "In this section" links. */
export function siblingsOf(page: PageDef): PageDef[] {
  const parent = parentOf(page);
  return parent ? childrenOf(parent.path).filter((d) => d.path !== page.path) : [];
}
