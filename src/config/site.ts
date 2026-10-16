/**
 * Site-wide settings and text. These move to the CMS `site_settings` table in Task 014.
 * [Square-bracket] values are fill-in slots — see src/content/home.ts and `npm run content:check`.
 */
export const siteConfig = {
  name: "Galkayo University",
  nameArabic: "جامعة جالكعيو",

  /** Announcement bar text. Set to null to hide the bar. */
  announcement: "Applications for the [Year–Year] academic year are now open. Apply before [Deadline]." as string | null,

  /**
   * Real URLs of GU's external systems. Leave `null` until GU supplies them: the menu then links to an
   * internal page explaining the service is not yet available online.
   */
  externalSystems: {
    hemis: null as string | null,
    studentPortal: null as string | null,
    odlPortal: null as string | null,
    verifyCertificate: null as string | null,
  },

  /** Contact details. Email and phone supplied by the site owner (2026-10-16). */
  contact: {
    address: "[Street / District], Galkayo, Somalia" as string | null,
    /** Display format; `phoneHref` is the dialable E.164 form used for tel: links. */
    phone: "+252 61 538 6858" as string | null,
    phoneHref: "+252615386858" as string | null,
    email: "info@galkayo.edu.so" as string | null,
    officeHours: "[Days]: [Opening hours]" as string | null,
  },

  footer: {
    description: "A [non-profit] university in Galkayo, Somalia. Founded in 2010 with 5 faculties, [Number] campuses and 1000+ students.",
    newsletterTitle: "Stay Updated",
    newsletterText: "Follow the latest news, events and announcements from Galkayo University.",
    applyPrompt: "Ready to start your academic journey?",
  },

  /** Official social media profile URLs. Icons appear only for entries that are set. */
  social: {
    facebook: null as string | null,
    youtube: null as string | null,
    x: null as string | null,
  },
};
