import { describe, expect, it } from "vitest";
import { faculties, facultyHref } from "@/content/faculties";
import { homeContent } from "@/content/home";
import { footerLinks, linksOf, mainNavigation, primaryCta, topBarLinks } from "@/config/navigation";
import { breadcrumbTrail, childrenOf, getPage, pages, parentOf } from "@/config/pages";
import { findPlaceholders } from "@/lib/content/placeholders";

/** Every href value found anywhere in a content object. */
function hrefsIn(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(hrefsIn);
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => (k === "href" && typeof v === "string" ? [v] : hrefsIn(v)));
  }
  return [];
}

describe("page registry", () => {
  const internalLinks = [
    ...mainNavigation.flatMap(linksOf),
    ...topBarLinks,
    ...footerLinks.flatMap((g) => g.links),
    primaryCta,
  ]
    .filter((l) => !l.external)
    .map((l) => l.href);

  it("has a page for every internal menu, top bar and footer link", () => {
    const missing = internalLinks.filter((href) => href !== "/" && !getPage(href));
    expect(missing).toEqual([]);
  });

  it("has a page for every link on the home page", () => {
    const missing = hrefsIn(homeContent).filter((href) => href.startsWith("/") && href !== "/" && !getPage(href));
    expect(missing).toEqual([]);
  });

  it("has a page for each faculty", () => {
    for (const f of faculties) expect(getPage(facultyHref(f))?.title).toBe(f.name);
  });

  it("builds breadcrumbs from the section down to the page", () => {
    const trail = breadcrumbTrail(getPage("/about/governance")!).map((p) => p.path);
    expect(trail).toEqual(["/about", "/about/governance"]);
    expect(parentOf(getPage("/alumni")!)?.path).toBe("/about");
    expect(breadcrumbTrail(getPage("/academics/faculties/education")!).map((p) => p.path)).toEqual([
      "/academics",
      "/academics/faculties",
      "/academics/faculties/education",
    ]);
  });

  it("gives every section landing page at least one child", () => {
    for (const page of pages.values()) {
      if (page.kind === "index") expect(childrenOf(page.path).length, page.path).toBeGreaterThan(0);
    }
  });

  it("uses clean lowercase paths", () => {
    for (const path of pages.keys()) expect(path).toMatch(/^\/[a-z0-9-]+(\/[a-z0-9-]+)*$/);
  });

  it("states no unverified facts in page titles or subtitles", () => {
    // Registry text must be neutral; GU facts belong in content files with [slots].
    expect(findPlaceholders([...pages.values()])).toEqual([]);
  });
});
