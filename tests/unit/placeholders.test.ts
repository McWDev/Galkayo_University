import { describe, expect, it } from "vitest";
import { findPlaceholders, splitPlaceholders } from "@/lib/content/placeholders";

describe("findPlaceholders", () => {
  it("finds slots in nested objects and arrays with their paths", () => {
    const found = findPlaceholders({ hero: { badge: "Est. [Year] · Galkayo" }, stats: [{ value: "[Number]+" }, { value: "12" }] });
    expect(found.map((p) => [p.path, p.slot])).toEqual([
      ["hero.badge", "[Year]"],
      ["stats[0].value", "[Number]"],
    ]);
  });

  it("ignores filled-in text and non-string values", () => {
    expect(findPlaceholders({ a: "Founded in 1997", b: 3, c: null, d: true })).toEqual([]);
  });
});

describe("splitPlaceholders", () => {
  it("splits text into plain and slot parts", () => {
    expect(splitPlaceholders("Join [Number]+ students at [Name].")).toEqual([
      { text: "Join ", slot: false },
      { text: "[Number]", slot: true },
      { text: "+ students at ", slot: false },
      { text: "[Name]", slot: true },
      { text: ".", slot: false },
    ]);
  });

  it("returns the whole string when there are no slots", () => {
    expect(splitPlaceholders("No slots here")).toEqual([{ text: "No slots here", slot: false }]);
  });
});
