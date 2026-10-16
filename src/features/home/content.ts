/**
 * Home page content. Real values come from the CMS (Tasks 014–016); until GU supplies them,
 * facts stay `null` and lists stay empty. `devExamples` exist only so the layout can be reviewed
 * in development — they are labelled "Example" and never rendered in production.
 */
import { showDevExamples } from "@/config/site";

export type Stat = { label: string; value: string | null; icon: "users" | "faculties" | "years" | "campuses" | "alumni" };

export type FacultyCard = { name: string; summary: string; href: string; imageUrl?: string; example?: boolean };

export type NewsCard = {
  title: string;
  summary: string;
  category: "News" | "Announcement" | "Event";
  date: string; // ISO date
  href: string;
  example?: boolean;
};

export type Testimonial = { quote: string; name: string; role: string; example?: boolean };

export type Partner = { name: string; country: string; type: string; example?: boolean };

/** Key facts band — values must be verified by GU before they are filled in (PRD §5.1, §7). */
export const stats: Stat[] = [
  { label: "Students Enrolled", value: null, icon: "users" },
  { label: "Faculties", value: null, icon: "faculties" },
  { label: "Years of Service", value: null, icon: "years" },
  { label: "Campuses", value: null, icon: "campuses" },
  { label: "Alumni", value: null, icon: "alumni" },
];

const approved = {
  faculties: [] as FacultyCard[],
  news: [] as NewsCard[],
  testimonials: [] as Testimonial[],
  partners: [] as Partner[],
};

const devExamples = {
  faculties: [1, 2, 3, 4, 5, 6].map<FacultyCard>((n) => ({
    name: `Example Faculty ${n}`,
    summary: "The approved faculty overview will appear here once Galkayo University supplies it.",
    href: "/academics/faculties",
    example: true,
  })),
  news: [
    { category: "News", title: "Example news headline", date: "2026-10-15" },
    { category: "Event", title: "Example event title", date: "2026-10-12" },
    { category: "Announcement", title: "Example official announcement", date: "2026-10-08" },
    { category: "News", title: "Another example news headline", date: "2026-10-01" },
  ].map<NewsCard>((n) => ({
    ...(n as Pick<NewsCard, "category" | "title" | "date">),
    summary: "A short summary of the published article will appear here. This card is sample layout only.",
    href: "/news",
    example: true,
  })),
  testimonials: ["A", "B", "C"].map<Testimonial>((letter) => ({
    quote: "An approved testimonial from a Galkayo University graduate will appear here, with their permission.",
    name: `Graduate ${letter}`,
    role: "Example testimonial",
    example: true,
  })),
  partners: [1, 2, 3, 4].map<Partner>((n) => ({
    name: `Partner ${n}`,
    country: "Country",
    type: "Example partner",
    example: true,
  })),
};

function pick<K extends keyof typeof approved>(key: K): (typeof approved)[K] {
  if (approved[key].length > 0 || !showDevExamples) return approved[key];
  return devExamples[key] as (typeof approved)[K];
}

export const homeContent = {
  get faculties() {
    return pick("faculties");
  },
  get news() {
    return pick("news");
  },
  get testimonials() {
    return pick("testimonials");
  },
  get partners() {
    return pick("partners");
  },
};
