import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// One page per template, plus the home page and 404.
const routes = ["/", "/about", "/about/governance", "/about/rectors-message", "/about/structure", "/about/staff", "/academics/faculties/education", "/contact", "/student-portal", "/this-page-does-not-exist"];

test.describe("accessibility (axe, WCAG 2.2 A/AA)", () => {
  for (const path of routes) {
    test(`no violations on ${path}`, async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"]).analyze();
      const summary = results.violations.map((v) => `${v.id} (${v.impact}): ${v.help}\n  ${v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join("\n  ")}`);
      expect(summary, summary.join("\n\n")).toEqual([]);
    });
  }

  test("heading levels never skip on any page template", async ({ page }) => {
    for (const path of routes) {
      await page.goto(path);
      const levels = await page.locator("h1, h2, h3, h4, h5, h6").evaluateAll((els) => els.map((e) => Number(e.tagName[1])));
      expect(levels[0], `${path} starts with h1`).toBe(1);
      for (let i = 1; i < levels.length; i++) {
        expect(levels[i]! - levels[i - 1]!, `${path}: h${levels[i - 1]} → h${levels[i]}`).toBeLessThanOrEqual(1);
      }
    }
  });
});
