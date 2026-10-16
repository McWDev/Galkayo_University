/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  HOME PAGE TEXT — edit this file to change what the home page says.
 * ─────────────────────────────────────────────────────────────────────────────
 *  Structure follows the reference site (salaam.edu.so) section by section.
 *  Text is written for Galkayo University; nothing is copied from the reference.
 *
 *  Anything in [square brackets] is a fill-in slot for a GU fact
 *  (a year, number, name, etc.). Replace the whole slot including the brackets.
 *  In development, slots are highlighted yellow on the page so they're easy to find.
 *  Run `npm run content:check` to list every slot that still needs filling —
 *  the site must not launch until it reports none.
 *
 *  Images: add photos to /public/images/... and set the `image` fields (optional).
 *  This content moves into the CMS in Tasks 014–016.
 */

export type IconName = "users" | "faculties" | "years" | "campuses" | "alumni";

export const homeContent = {
  hero: {
    badge: "Est. [Year] · Galkayo, Somalia",
    titleLine1: "Shaping a Brighter Future",
    titleLine2: "Study with Galkayo University",
    intro: "A university in Galkayo, Somalia, preparing the next generation of professionals, researchers and leaders since [Year].",
    primaryCta: { label: "Apply for [Year]", href: "/admissions/apply" },
    secondaryCta: { label: "Explore Programmes", href: "/academics/programmes" },
    /** Optional background photo, e.g. "/images/hero.jpg" (must be a GU photo you have permission to use). */
    image: null as string | null,
  },

  stats: [
    { value: "[Number]+", label: "Students Enrolled", icon: "users" },
    { value: "[Number]", label: "Faculties", icon: "faculties" },
    { value: "[Number]+", label: "Years of Excellence", icon: "years" },
    { value: "[Number]", label: "Campuses in Galkayo", icon: "campuses" },
    { value: "[Number]+", label: "Alumni", icon: "alumni" },
  ] satisfies { value: string; label: string; icon: IconName }[],

  about: {
    eyebrow: "Who We Are",
    title: "Welcome to Galkayo University",
    foundedValue: "[Year]",
    foundedLabel: "Founded",
    image: null as string | null,
    paragraphs: [
      "Galkayo University (GU) is a [non-profit / private / public] higher education institution in Galkayo, Somalia. It was founded in [Year], beginning with [founding faculties or programmes] to train the [doctors, teachers, administrators, etc.] the region needed. Today the university operates [Number] campuses: [campus names].",
      "Since then, GU has grown steadily, building a supportive learning environment with facilities that include [classrooms, computer laboratories, a library, science laboratories]. A culture of teamwork and collaboration has shaped the university's academic and professional development.",
    ],
    objectivesTitle: "University Objectives",
    objectives: [
      "To offer high-quality academic and professional programmes that meet the needs of our students.",
      "To equip young people with the knowledge and skills needed for employment and for the development of Somalia.",
      "To widen access to higher education and capacity building for every qualified student.",
    ],
    cta: { label: "Learn More About GU", href: "/about" },
    highlights: [
      {
        title: "Years of GU History",
        text: "Since its founding, Galkayo University has pursued excellence in teaching, research and innovation. Today it offers [Number] faculties and [Number] departments.",
      },
      {
        title: "Leading Academics in Various Fields",
        text: "GU offers an up-to-date range of study options across [list your main fields], supported by its library and research centres.",
      },
      {
        title: "Relationship with the Society",
        text: "The university is committed to serving its community, working with local and international partners, and sharing knowledge that supports peace and development.",
      },
    ],
  },

  faculties: {
    eyebrow: "Our Academics",
    title: "[Number] Faculties",
    intro: "Choose from faculties designed to equip you with the knowledge and skills Somalia and the world need most.",
    /** One entry per faculty. Copy a block to add more. */
    items: [1, 2, 3, 4, 5, 6].map((n) => ({
      name: `Faculty of [Name ${n}]`,
      established: "[Year]",
      summary: "[Two sentences about this faculty: its focus, its departments, and the graduates it prepares.]",
      href: "/academics/faculties",
      image: null as string | null,
    })),
    cta: { label: "View All Faculties", href: "/academics/faculties" },
  },

  admissions: {
    eyebrow: "Admissions",
    title: "How to Apply",
    intro: "Joining Galkayo University is simple. Follow these four steps to start your academic journey with us.",
    steps: [
      { title: "Browse Programmes", text: "Explore our [Number] faculties and find the programme that matches your interests and career goals.", href: "/academics/programmes" },
      { title: "Check Requirements", text: "Review the admission requirements, tuition fees and available scholarships for your chosen programme.", href: "/admissions/requirements" },
      { title: "Submit Application", text: "Complete the application with your personal details, academic history and required documents.", href: "/admissions/apply" },
      { title: "Await Decision", text: "The admissions team will review your application and contact you with a decision within [timeframe].", href: "/admissions/contact" },
    ],
    info: {
      title: "Admissions Info",
      subtitle: "Get in touch with our team",
      /** Phone/email come from siteConfig.contact; add extra rows here. */
      extraContacts: [
        { label: "Alt. Phone", value: "[Alternative phone]", href: null as string | null },
        { label: "Registrar", value: "[registrar email]", href: null as string | null },
      ],
      scholarshipsTitle: "Scholarships Available",
      scholarshipsText: "Financial aid and merit-based scholarships are available for qualifying students. Ask our admissions team for details.",
      scholarshipsCta: { label: "View Scholarships", href: "/admissions/scholarships" },
      applyCta: { label: "Apply Now", href: "/admissions/apply" },
    },
  },

  graduateSchool: {
    eyebrow: "GU Graduate School",
    titleLine1: "Advance Your Career with a",
    titleLine2: "Postgraduate Degree",
    intro: "Study [online / on campus] in Somalia and graduate with a degree recognised in [countries].",
    partnersLabel: "In partnership with",
    partners: ["[Partner University]", "[Partner University]"],
    primaryCta: { label: "Explore Programmes", href: "/graduate-school/programmes" },
    secondaryCta: { label: "Learn About the Graduate School", href: "/graduate-school" },
    programmes: [1, 2, 3, 4].map((n) => ({
      level: "Masters",
      partner: "[Partner]",
      name: `Master of [Programme ${n}]`,
      duration: "[Duration]",
      mode: "[Online / On campus]",
      href: "/graduate-school/programmes",
    })),
  },

  odl: {
    eyebrow: "Open & Distance Learning",
    title: "Study Online with Galkayo University",
    intro: "Can't attend campus? Our ODL programme lets you earn a Galkayo University degree online. [Number] programmes are available across [Number] faculties.",
    stats: [
      { value: "[Number]", label: "Programmes" },
      { value: "[Number]", label: "Faculties" },
      { value: "Online", label: "Delivery" },
      { value: "[Years]", label: "Policy Period" },
    ],
    card: {
      eyebrow: "Undergraduate ODL",
      title: "Earn Your Degree Online",
      text: "Choose from [Number] fully online undergraduate programmes across [list faculties].",
      examples: "[Programme], [Programme], [Programme], and more…",
      cta: { label: "View Programmes", href: "/odl/programmes" },
    },
    steps: {
      title: "How to Apply",
      items: [
        "Submit your ODL application",
        "Get reviewed by the admissions team ([timeframe])",
        "Receive your acceptance and complete enrolment",
        "Start studying online at your own pace",
      ],
      cta: { label: "Apply Now", href: "/odl/apply" },
    },
  },

  news: {
    eyebrow: "Latest Updates",
    title: "News & Events",
    viewAll: { label: "View All News", href: "/news" },
    /** Replaced by published CMS articles in Task 016. */
    items: [
      { category: "Academic", date: "2026-10-15", title: "[News headline]", summary: "[A short summary of the news article in one or two sentences.]", href: "/news", image: null as string | null },
      { category: "Events", date: "2026-10-12", title: "[Event headline]", summary: "[A short summary of the event in one or two sentences.]", href: "/events", image: null as string | null },
      { category: "Events", date: "2026-10-08", title: "[Announcement headline]", summary: "[A short summary of the announcement in one or two sentences.]", href: "/news", image: null as string | null },
    ],
  },

  testimonials: {
    eyebrow: "Alumni Voices",
    title: "What Our Graduates Say",
    /** Only publish testimonials with the graduate's permission. */
    items: [1, 2, 3, 4].map((n) => ({
      quote: "[A short quote from a graduate about how studying at Galkayo University shaped their career.]",
      name: `[Graduate Name ${n}]`,
      role: "[Job Title]",
      image: null as string | null,
    })),
  },

  partners: {
    eyebrow: "Partnerships & Linkages",
    title: "Our International Partnerships",
    intro: "Galkayo University works with academic institutions, research networks and associations to advance education and research.",
    items: [
      { name: "[Partner Name]", country: "[Country]", type: "Partner University" },
      { name: "[Partner Name]", country: "[Country]", type: "Partner University" },
      { name: "[Partner Name]", country: "[Country]", type: "Research Network" },
      { name: "[Partner Name]", country: "[Country]", type: "National Association" },
    ],
    cta: { label: "View All Partnerships", href: "/partnerships" },
  },

  cta: {
    title: "Ready to Shape Your Future",
    text: "Join [Number]+ students at Galkayo University and take the first step toward a career that makes a difference in Somalia and beyond.",
    button: { label: "Apply Now", href: "/admissions/apply" },
  },
};
