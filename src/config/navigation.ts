/**
 * Public navigation. Menu structure mirrors the owner's chosen reference (salaam.edu.so):
 * Home · About · Academics (mega menu) · ODL · Research · Policies · Media · Contact Us,
 * with HEMIS · Verify · Student Portal in a separate top bar above it (owner request).
 * Items become CMS-editable (navigation_items) in Task 014.
 *
 * GU-specific lists (faculties, partner universities, masters programmes) are empty until GU approves them;
 * empty groups are not rendered. External systems (HEMIS, student portal, certificate verification) link to
 * their real URL only when configured in `siteConfig.externalSystems`; otherwise to an internal page explaining
 * the service is not yet available online — never to a fake portal.
 */
import {
  BadgeCheck,
  BookOpen,
  Building2,
  Database,
  ClipboardList,
  FileCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Handshake,
  Images,
  Info,
  LayoutGrid,
  MessageSquareQuote,
  Network,
  Newspaper,
  CalendarDays,
  Receipt,
  Scale,
  ShieldCheck,
  Upload,
  Users,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "./site";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  external?: boolean;
};

export type MegaGroup = { heading: string; links: NavLink[]; style?: "list" | "chips" };
export type MegaColumn = { heading: string; groups: MegaGroup[] };

export type NavItem =
  | ({ kind: "link"; highlight?: boolean } & NavLink)
  | { kind: "dropdown"; label: string; href: string; links: NavLink[] }
  | { kind: "mega"; label: string; href: string; columns: MegaColumn[] };

/** Approved GU data feeding the Academics mega menu (filled from the CMS once published). */
const academicMenuData = {
  faculties: [] as NavLink[],
  partnerUniversities: [] as NavLink[],
  mastersProgrammes: [] as NavLink[],
};

function externalOr(url: string | null, fallback: string): Pick<NavLink, "href" | "external"> {
  return url ? { href: url, external: true } : { href: fallback };
}

export const mainNavigation: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "dropdown",
    label: "About",
    href: "/about",
    links: [
      { label: "About Us", href: "/about", icon: Info },
      { label: "Rector's Message", href: "/about/rectors-message", icon: MessageSquareQuote },
      { label: "Governance", href: "/about/governance", icon: ShieldCheck },
      { label: "Structure", href: "/about/structure", icon: Network },
      { label: "Our Staff", href: "/about/staff", icon: Users },
      { label: "Alumni", href: "/alumni", icon: GraduationCap },
      { label: "Partnerships", href: "/partnerships", icon: Building2 },
    ],
  },
  {
    kind: "mega",
    label: "Academics",
    href: "/academics",
    columns: [
      {
        heading: "Undergraduate",
        groups: [
          {
            heading: "Admissions",
            links: [
              { label: "Admission Requirements", href: "/admissions/requirements" },
              { label: "Admission Contact", href: "/admissions/contact" },
              { label: "Transfer Application", href: "/admissions/transfer" },
              { label: "Guideline for Guardians", href: "/admissions/guardians" },
              { label: "Tuition Fees", href: "/admissions/fees" },
              { label: "Scholarships", href: "/admissions/scholarships" },
              { label: "Apply Now", href: "/admissions/apply" },
            ],
          },
          {
            heading: "Faculties",
            links: academicMenuData.faculties.length
              ? academicMenuData.faculties
              : [
                  { label: "All Faculties", href: "/academics/faculties" },
                  { label: "Departments", href: "/academics/departments" },
                  { label: "Academic Programmes", href: "/academics/programmes" },
                  { label: "Academic Calendar", href: "/academics/calendar" },
                ],
          },
        ],
      },
      {
        heading: "Postgraduate",
        groups: [
          {
            heading: "Graduate School",
            links: [
              { label: "About Graduate School", href: "/graduate-school" },
              { label: "All Programmes", href: "/graduate-school/programmes" },
              { label: "Our Partners", href: "/graduate-school/partners" },
              { label: "Apply for Postgraduate", href: "/graduate-school/apply" },
            ],
          },
          { heading: "Partner Universities", links: academicMenuData.partnerUniversities },
          { heading: "Masters Programmes", links: academicMenuData.mastersProgrammes, style: "chips" },
        ],
      },
    ],
  },
  {
    kind: "dropdown",
    label: "ODL",
    href: "/odl",
    links: [
      { label: "ODL Programmes", href: "/odl/programmes", icon: BookOpen },
      { label: "Apply for ODL", href: "/odl/apply", icon: FileCheck },
      { label: "ODL Admission Form", href: "/odl/admission", icon: ClipboardList },
      { label: "ODL Student Portal", ...externalOr(siteConfig.externalSystems.odlPortal, "/odl/portal"), icon: LayoutGrid },
    ],
  },
  {
    kind: "dropdown",
    label: "Research",
    href: "/research",
    links: [
      { label: "Research Projects", href: "/research/projects", icon: FlaskConical },
      { label: "Partnerships", href: "/research/partnerships", icon: Handshake },
      { label: "Research Policy", href: "/research/policy", icon: FileText },
      { label: "Ethical Clearance", href: "/research/ethics", icon: Scale },
      { label: "Submit Research", href: "/research/submit", icon: Upload },
    ],
  },
  {
    kind: "dropdown",
    label: "Policies",
    href: "/policies",
    links: [
      { label: "Student Policy", href: "/policies/student", icon: FileText },
      { label: "Student Fees Payment Policy", href: "/policies/fees-payment", icon: Receipt },
      { label: "Registration for Thesis", href: "/policies/thesis", icon: GraduationCap },
    ],
  },
  {
    kind: "dropdown",
    label: "Media",
    href: "/media",
    links: [
      { label: "News", href: "/news", icon: Newspaper },
      { label: "Events", href: "/events", icon: CalendarDays },
      { label: "Photos & Videos", href: "/media/gallery", icon: Images },
    ],
  },
  { kind: "link", label: "Contact Us", href: "/contact" },
];

/** Top bar above the main menu: links to GU's external systems. */
export const topBarLinks: NavLink[] = [
  { label: "HEMIS", ...externalOr(siteConfig.externalSystems.hemis, "/hemis"), icon: Database },
  { label: "Verify", ...externalOr(siteConfig.externalSystems.verifyCertificate, "/verify-certificate"), icon: BadgeCheck },
  { label: "Student Portal", ...externalOr(siteConfig.externalSystems.studentPortal, "/student-portal"), icon: LayoutGrid },
];

export const primaryCta: NavLink = { label: "Apply Now", href: "/admissions/apply" };

export const footerLinks: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Academics",
    links: [
      { label: "Faculties", href: "/academics/faculties" },
      { label: "Academic Programmes", href: "/academics/programmes" },
      { label: "Graduate School", href: "/graduate-school" },
      { label: "Open & Distance Learning", href: "/odl" },
      { label: "Academic Calendar", href: "/academics/calendar" },
      { label: "Our Library", href: "/library" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "About GU", href: "/about" },
      { label: "Admissions", href: "/admissions/requirements" },
      { label: "Scholarships", href: "/admissions/scholarships" },
      { label: "Tuition Fees", href: "/admissions/fees" },
      { label: "Latest News", href: "/news" },
      { label: "Photo Gallery", href: "/media/gallery" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

/** True when `pathname` is `href` or a descendant route of it. */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Every link inside a nav item, flattened (used for active-state checks and tests). */
export function linksOf(item: NavItem): NavLink[] {
  if (item.kind === "link") return [item];
  if (item.kind === "dropdown") return item.links;
  return item.columns.flatMap((c) => c.groups.flatMap((g) => g.links));
}

export function isItemActive(pathname: string, item: NavItem): boolean {
  if (item.kind === "link") return !item.external && isActivePath(pathname, item.href);
  return isActivePath(pathname, item.href) || linksOf(item).some((l) => !l.external && l.href !== "/" && isActivePath(pathname, l.href));
}

