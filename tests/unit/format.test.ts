import { describe, expect, it } from "vitest";
import { formatDate } from "@/lib/format";

describe("formatDate", () => {
  it("formats date-only ISO strings without shifting the day", () => {
    expect(formatDate("2026-10-15")).toBe("15 October 2026");
    expect(formatDate("2026-01-01")).toBe("1 January 2026");
  });

  it("formats full timestamps in the institution time zone", () => {
    // 22:30 UTC on 31 Dec is already 1 Jan in Mogadishu (UTC+3)
    expect(formatDate("2026-12-31T22:30:00Z")).toBe("1 January 2027");
  });

  it("returns an empty string for invalid input", () => {
    expect(formatDate("not-a-date")).toBe("");
  });
});
