import { expect, test } from "@playwright/test";

// These run against the production build (see playwright.config.ts).
test.describe("home page", () => {
  test("has the reference section structure with a logical heading outline", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Galkayo University");
    for (const name of ["Welcome to Galkayo University", "Faculties & Programmes", "How to Apply", "News & Events", "Ready to Shape Your Future?"]) {
      await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
    }
  });

  test("primary call to action leads to admissions", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("main").getByRole("link", { name: /Apply Now/ }).first();
    await expect(cta).toHaveAttribute("href", /^\/admissions/);
  });

  test("never shows development example content in production", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Example", { exact: true })).toHaveCount(0);
    await expect(page.getByText(/Example Faculty|Example news/)).toHaveCount(0);
  });

  test("shows no invented statistics", async ({ page }) => {
    await page.goto("/");
    const band = page.getByRole("region", { name: "University at a glance" });
    await expect(band.getByText("Figure pending verification")).toHaveCount(5);
  });

  test("hides testimonials and partners until approved content exists", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "What Our Graduates Say" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Our Partnerships" })).toHaveCount(0);
  });

  test("all images have alt attributes", async ({ page }) => {
    await page.goto("/");
    const missing = await page.locator("img:not([alt])").count();
    expect(missing).toBe(0);
  });
});
