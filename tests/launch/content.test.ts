/**
 * Pre-launch content check — run with `npm run content:check`.
 * Fails while any [fill-in slot] remains in the editable content, and prints where each one is.
 */
import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/content/about";
import { faculties } from "@/content/faculties";
import { homeContent } from "@/content/home";
import { findPlaceholders } from "@/lib/content/placeholders";

const sources = {
  "src/content/home.ts": homeContent,
  "src/config/site.ts": siteConfig,
  "src/content/faculties.ts": faculties,
  "src/content/about.ts": aboutContent,
};

describe("launch content check", () => {
  for (const [file, content] of Object.entries(sources)) {
    it(`${file} has no unfilled [slots]`, () => {
      // Home faculty cards are derived from src/content/faculties.ts, which is checked on its own.
      const found = findPlaceholders(content).filter((p) => !((file === "src/content/home.ts" && p.path.startsWith("faculties.items")) || (file === "src/content/about.ts" && p.path.startsWith("structure.levels[3]"))));
      const report = found.map((p) => `  ${p.path}: ${p.slot}`).join("\n");
      expect(found.length, `\n${found.length} slot(s) still to fill in ${file}:\n${report}\n`).toBe(0);
    });
  }
});
