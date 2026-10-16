import { expect, test } from "@playwright/test";

// These run against the production build (see playwright.config.ts).
test.describe("home page", () => {
  test("follows the reference section structure with a logical heading outline", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    const h2s = await page.getByRole("heading", { level: 2 }).filter({ hasNot: page.locator("footer *") }).allTextContents();
    const main = h2s.slice(0, 9);
    expect(main).toEqual([
      "Welcome to Galkayo University",
      expect.stringContaining("Faculties"),
      "How to Apply",
      expect.stringContaining("Postgraduate Degree"),
      "Study Online with Galkayo University",
      "News & Events",
      "What Our Graduates Say",
      "Our International Partnerships",
      "Ready to Shape Your Future",
    ]);
  });

  test("primary call to action leads to admissions", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("main").getByRole("link", { name: /Apply/ }).first();
    await expect(cta).toHaveAttribute("href", /^\/admissions/);
  });

  test("does not highlight fill-in slots in production builds", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main mark")).toHaveCount(0);
  });

  test("testimonial selector switches the quote", async ({ page }) => {
    await page.goto("/");
    const section = page.getByRole("region", { name: "What Our Graduates Say" }).or(page.locator("section[aria-labelledby=testimonials-title]"));
    await section.getByRole("button", { name: /testimonial 2 of 4/ }).click();
    await expect(section.getByRole("button", { name: /testimonial 2 of 4/ })).toHaveAttribute("aria-current", "true");
  });

  test("all images have alt attributes", async ({ page }) => {
    await page.goto("/");
    expect(await page.locator("img:not([alt])").count()).toBe(0);
  });
});
