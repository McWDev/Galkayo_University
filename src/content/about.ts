/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ABOUT PAGES TEXT — About Us, Rector's Message, Governance, Structure, Our Staff
 * ─────────────────────────────────────────────────────────────────────────────
 *  Structure follows the reference site's About pages; text is written for GU.
 *  [Square brackets] are fill-in slots for GU facts — replace them, brackets included.
 *  `npm run content:check` lists what is left. Leadership, governance and staff details
 *  must be approved by GU before publishing (PRD §5.2, §7).
 */
import { faculties } from "./faculties";

export type ValueIcon = "excellence" | "integrity" | "community" | "innovation" | "inclusion" | "accountability";
export type FacilityIcon = "library" | "computer" | "lab" | "classroom" | "wifi" | "sports";

export const aboutContent = {
  overview: {
    history: {
      eyebrow: "Our History",
      title: "Built to Serve Galkayo and Somalia",
      image: null as string | null,
      paragraphs: [
        "Galkayo University was founded in 2010 to [describe the founding purpose, e.g. train the professionals the region needed]. It began with [founding faculties or programmes] and [Number] students.",
        "Since then the university has grown to 5 faculties across 3 campuses in Galkayo, serving more than 1000 students and over 1500 alumni. [Add a sentence about what makes GU distinctive.]",
      ],
      timeline: [
        { year: "2010", title: "Galkayo University founded", text: "[What happened when the university opened.]" },
        { year: "[Year]", title: "[Milestone]", text: "[Describe this milestone, e.g. a new faculty or campus.]" },
        { year: "[Year]", title: "[Milestone]", text: "[Describe this milestone.]" },
        { year: "[Year]", title: "[Milestone]", text: "[Describe this milestone.]" },
      ],
    },
    purpose: {
      eyebrow: "Our Purpose",
      title: "Vision & Mission",
      vision: "[Galkayo University's vision statement.]",
      mission: "[Galkayo University's mission statement.]",
      objectivesTitle: "University Objectives",
      /** The same objectives appear on the home page; edit them in src/content/home.ts. */
    },
    values: {
      eyebrow: "What Guides Us",
      title: "Our Core Values",
      items: [
        { icon: "excellence", title: "Excellence", text: "[What excellence means at GU.]" },
        { icon: "integrity", title: "Integrity", text: "[What integrity means at GU.]" },
        { icon: "community", title: "Service to Community", text: "[How GU serves its community.]" },
        { icon: "innovation", title: "Innovation", text: "[How GU encourages innovation.]" },
        { icon: "inclusion", title: "Inclusiveness", text: "[How GU welcomes every qualified student.]" },
        { icon: "accountability", title: "Accountability", text: "[How GU holds itself accountable.]" },
      ] satisfies { icon: ValueIcon; title: string; text: string }[],
    },
    governance: {
      eyebrow: "How We Are Run",
      title: "Governance",
      text: "Galkayo University is governed by [name of the highest governing body] and led by the Rector, supported by [Vice-Rectors / the University Senate]. [One more sentence about how decisions are made.]",
      cta: { label: "Learn About Our Governance", href: "/about/governance" },
      secondaryCta: { label: "View Our Structure", href: "/about/structure" },
    },
    campuses: {
      eyebrow: "Where We Are",
      title: "Our Three Campuses",
      intro: "Galkayo University teaches and operates across three campuses in Galkayo.",
      items: [1, 2, 3].map((n) => ({
        type: "[Academic / Administrative] Campus",
        name: `[Campus ${n} name]`,
        location: "[District], Galkayo",
        text: "[What is on this campus: faculties, offices or facilities.]",
        image: null as string | null,
      })),
    },
    facilities: {
      eyebrow: "Learning Environment",
      title: "Our Facilities",
      intro: "Facilities that support teaching, learning and research at Galkayo University.",
      items: [
        { icon: "library", title: "Library", text: "[Describe the library: collections, study space, opening hours.]" },
        { icon: "computer", title: "Computer Laboratories", text: "[Describe the computer labs and internet access.]" },
        { icon: "lab", title: "Science & Medical Laboratories", text: "[Describe the laboratories used by health and medical students.]" },
        { icon: "classroom", title: "Classrooms", text: "[Describe the teaching rooms.]" },
      ] satisfies { icon: FacilityIcon; title: string; text: string }[],
    },
  },

  rector: {
    eyebrow: "A Message From Leadership",
    title: "Welcome to Galkayo University",
    name: "[Rector's full name]",
    role: "Rector, Galkayo University",
    image: null as string | null,
    paragraphs: [
      "[Opening: welcome the reader to Galkayo University.]",
      "[Middle: the university's purpose, achievements since 2010 and priorities.]",
      "[Closing: an invitation to prospective students, partners and the community.]",
    ],
  },

  governance: {
    framework: {
      eyebrow: "Our Framework",
      title: "Good Governance at GU",
      text: "Galkayo University is committed to the principles of good governance: transparency, accountability, participation and the rule of law. [Describe how GU's governance structure ensures decisions are made by the right bodies with proper oversight.]",
    },
    bodies: {
      eyebrow: "Structure",
      title: "Governing Bodies",
      items: [1, 2, 3, 4].map((n) => ({
        name: `[Governing body ${n}, e.g. Board of Trustees]`,
        text: "[Role, responsibilities and membership of this body.]",
      })),
    },
    principles: {
      eyebrow: "Principles",
      title: "Our Governance Principles",
      items: [
        { title: "Transparency", text: "[How GU makes decisions and information open.]" },
        { title: "Accountability", text: "[Who GU answers to and how.]" },
        { title: "Participation", text: "[How staff and students take part in decisions.]" },
        { title: "Rule of Law", text: "[The laws and regulations GU operates under.]" },
      ],
    },
  },

  structure: {
    eyebrow: "Governance",
    title: "University Structure",
    intro: "How Galkayo University is organised, from its governing body to its faculties and offices.",
    levels: [
      { label: "Governance", units: ["[Highest governing body]"] },
      { label: "Leadership", units: ["Rector"] },
      { label: "Vice-Rectors", units: ["[Vice-Rector, Academic Affairs]", "[Vice-Rector, Administration & Finance]"] },
      { label: "Faculties", units: faculties.map((f) => f.name) },
      { label: "Offices", units: ["[Registrar's Office]", "[Finance Office]", "[Library]", "[Quality Assurance Office]"] },
    ],
  },

  staff: {
    intro: "The people who lead and teach at Galkayo University.",
    privacyNote: "Contact details for individual staff are published only with their permission. For general enquiries, please contact the university.",
    groups: [
      {
        title: "University Leadership",
        people: [
          { name: "[Full name]", role: "Rector", unit: "Office of the Rector", image: null as string | null },
          { name: "[Full name]", role: "[Vice-Rector, Academic Affairs]", unit: "[Office]", image: null as string | null },
          { name: "[Full name]", role: "[Vice-Rector, Administration & Finance]", unit: "[Office]", image: null as string | null },
        ],
      },
      {
        title: "Deans of Faculties",
        people: faculties.map((f) => ({ name: "[Dean's full name]", role: "Dean", unit: f.name, image: null as string | null })),
      },
    ],
  },
};
