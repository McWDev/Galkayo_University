import type { Metadata } from "next";
import { breadcrumbTrail, getPage, siblingsOf, type PageDef } from "@/config/pages";
import { pageMetadata } from "@/lib/seo/metadata";

/** Looks up a registered page; throws at build time if a dedicated route isn't registered. */
export function requirePage(path: string): PageDef {
  const page = getPage(path);
  if (!page) throw new Error(`Page "${path}" is not registered in src/config/pages.ts`);
  return page;
}

/** Title, subtitle and breadcrumbs for a page's PageHero, from the registry. */
export function heroFor(path: string) {
  const page = requirePage(path);
  return {
    title: page.title,
    intro: page.intro,
    breadcrumbs: [{ label: "Home", href: "/" }, ...breadcrumbTrail(page).map((p) => ({ label: p.label ?? p.title, href: p.path }))],
  };
}

export function metadataFor(path: string): Metadata {
  const page = requirePage(path);
  return pageMetadata({ title: page.title, description: page.intro, path: page.path });
}

/** "In this section" cards for a page's siblings. */
export function siblingCardsFor(path: string) {
  return siblingsOf(requirePage(path)).map((d) => ({ title: d.label ?? d.title, href: d.path, description: d.intro }));
}
