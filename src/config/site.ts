/**
 * Site-wide settings. These move to the CMS `site_settings` table in Task 014.
 * Every value that states a fact about GU must be approved by GU — leave it `null` until then.
 */
export const siteConfig = {
  name: "Galkayo University",
  nameArabic: "جامعة جالكعيو",

  /** Announcement bar text. Replace with an approved notice (e.g. admissions period) when available. */
  announcement: "This website is under development. Official university information will be published once approved.",

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

  /** Approved contact details — all pending from GU. */
  contact: {
    address: null as string | null,
    phone: null as string | null,
    email: null as string | null,
    officeHours: null as string | null,
  },
} as const;

/**
 * Development-only example content (faculty cards, news, testimonials, partners) lets the design be
 * reviewed before GU supplies real content. It is visibly labelled "Example" and is never rendered in
 * production builds, where the real (CMS) content or an empty state is shown instead.
 */
export const showDevExamples = process.env.NODE_ENV === "development";
