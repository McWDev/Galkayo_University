import { describe, expect, it } from "vitest";
import { faculties } from "@/content/faculties";
import { homeContent } from "@/content/home";
import { footerLinks, mainNavigation, topBarLinks } from "@/config/navigation";
import { pages } from "@/config/pages";
import { siteConfig } from "@/config/site";

/** All string values in a structure. */
function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

// Names and facts specific to the structural reference site (salaam.edu.so). The site follows its layout
// only; none of its text, names or facts may appear in GU content (PRD, README "Reference").
const REFERENCE_TERMS = [/salaam/i, /mogadishu/i, /hodan/i, /\bSU\b/, /unisza/i, /nilai/i, /mycampus/i, /605062/, /655062/];

describe("no reference-site content", () => {
  const text = strings([homeContent, siteConfig, faculties, [...pages.values()], mainNavigation, topBarLinks, footerLinks]);

  for (const term of REFERENCE_TERMS) {
    it(`contains no "${term.source}"`, () => {
      expect(text.filter((s) => term.test(s))).toEqual([]);
    });
  }
});
