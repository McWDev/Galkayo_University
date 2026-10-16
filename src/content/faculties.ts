/**
 * GU faculties: the single list used by the home page cards, the Academics menu and the footer.
 * Names supplied by the site owner (2026-10-16). Fill in each faculty's [slots]; add or remove entries freely.
 * Faculty pages (/academics/faculties/<slug>) are built in Task 006 and become CMS-managed in Task 015.
 */
export type Faculty = {
  name: string;
  /** URL segment, lowercase-with-dashes. */
  slug: string;
  established: string;
  summary: string;
  image: string | null;
};

const summary = "[Two sentences about this faculty: its focus, its departments, and the graduates it prepares.]";

export const faculties: Faculty[] = [
  { name: "Faculty of Health Sciences", slug: "health-sciences", established: "[Year]", summary, image: null },
  { name: "Faculty of Medicine & Surgery", slug: "medicine-surgery", established: "[Year]", summary, image: null },
  { name: "Faculty of Computer Science", slug: "computer-science", established: "[Year]", summary, image: null },
  { name: "Faculty of Education", slug: "education", established: "[Year]", summary, image: null },
  { name: "Faculty of Economics & Management Sciences", slug: "economics-management", established: "[Year]", summary, image: null },
];

export const facultyHref = (f: Pick<Faculty, "slug">) => `/academics/faculties/${f.slug}`;

/** Short menu label, e.g. "Faculty of Medicine & Surgery" → "Medicine & Surgery". */
export const facultyShortName = (f: Pick<Faculty, "name">) => f.name.replace(/^Faculty of /i, "");
