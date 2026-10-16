import { describe, expect, it } from "vitest";
import { footerLinks, isActivePath, isItemActive, linksOf, mainNavigation, primaryCta, topBarLinks } from "@/config/navigation";

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
  it("mirrors the reference top-level menu", () => {
    expect(mainNavigation.map((i) => i.label)).toEqual([
      "Home",
      "About",
      "Academics",
      "ODL",
      "Research",
      "Policies",
      "Media",
      "Contact Us",
    ]);
  });

  it("uses root-relative internal hrefs, or https for configured external systems", () => {
    const all = [...mainNavigation.flatMap(linksOf), ...topBarLinks, ...footerLinks.flatMap((g) => g.links), primaryCta];
    for (const link of all) {
      if (link.external) expect(link.href, link.label).toMatch(/^https:\/\//);
      else expect(link.href, link.label).toMatch(/^\/[a-z0-9\-/]*$/);
    }
  });

  it("puts HEMIS, Verify and Student Portal in the top bar, not the main menu", () => {
    expect(topBarLinks.map((l) => l.label)).toEqual(["HEMIS", "Verify", "Student Portal"]);
    expect(mainNavigation.map((i) => i.label)).not.toContain("HEMIS");
  });

  it("never links unconfigured portals to an external site", () => {
    for (const link of topBarLinks) expect(link.external, link.label).toBeFalsy();
  });

  it("marks a menu active when the current page is inside it", () => {
    const academics = mainNavigation.find((i) => i.label === "Academics")!;
    expect(isItemActive("/admissions/fees", academics)).toBe(true);
    expect(isItemActive("/research/policy", academics)).toBe(false);
  });

  it("has unique labels within each menu", () => {
    for (const item of mainNavigation) {
      const labels = linksOf(item).map((l) => l.label);
      expect(new Set(labels).size, item.label).toBe(labels.length);
    }
  });
});
