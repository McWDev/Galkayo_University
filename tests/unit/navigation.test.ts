import { describe, expect, it } from "vitest";
import { footerLinks, isActivePath, mainNavigation, primaryCta, utilityNavigation } from "@/config/navigation";

describe("isActivePath", () => {
  it("matches the exact route and its descendants", () => {
    expect(isActivePath("/academics", "/academics")).toBe(true);
    expect(isActivePath("/academics/programmes/x", "/academics")).toBe(true);
  });

  it("does not match routes that only share a prefix", () => {
    expect(isActivePath("/newsletter", "/news")).toBe(false);
  });

  it("only matches home exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/about", "/")).toBe(false);
  });
});

describe("navigation config", () => {
  const allLinks = [
    ...mainNavigation.flatMap((s) => [s, ...(s.children ?? [])]),
    ...utilityNavigation,
    ...footerLinks.flatMap((g) => g.links),
    primaryCta,
  ];

  it("uses only internal, root-relative hrefs", () => {
    for (const link of allLinks) {
      expect(link.href, link.label).toMatch(/^\/[a-z0-9\-/]*$/);
    }
  });

  it("has unique labels within each section", () => {
    for (const section of mainNavigation) {
      const labels = (section.children ?? []).map((c) => c.label);
      expect(new Set(labels).size).toBe(labels.length);
    }
  });

  it("covers every top-level section from the sitemap", () => {
    expect(mainNavigation.map((s) => s.label)).toEqual([
      "About",
      "Academics",
      "Admissions",
      "Research",
      "University Life",
      "News & Events",
      "Resources",
    ]);
  });
});
