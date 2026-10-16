import { expect, test } from "@playwright/test";
import { pages } from "../../src/config/pages";

// Route rendering doesn't depend on viewport; run once on desktop.
test.describe("public routes", () => {
  test.skip(({ isMobile }) => isMobile, "desktop only");

  test("every registered page renders with one h1, breadcrumb, title and canonical URL", async ({ page }) => {
    test.setTimeout(180_000);
    for (const def of pages.values()) {
      const res = await page.goto(def.path);
      expect(res?.status(), def.path).toBe(200);
      await expect(page.getByRole("heading", { level: 1 }), def.path).toHaveText(def.title);
      await expect(page.getByRole("navigation", { name: "Breadcrumb" }), def.path).toBeVisible();
      await expect(page, def.path).toHaveTitle(`${def.title} | Galkayo University`);
      await expect(page.locator('link[rel="canonical"]'), def.path).toHaveAttribute("href", new RegExp(`${def.path}$`));
    }
  });

  test("unknown URLs return a 404 page inside the site layout", async ({ page }) => {
    for (const path of ["/does-not-exist", "/about/nope", "/academics/faculties/not-a-faculty"]) {
      const res = await page.goto(path);
      expect(res?.status(), path).toBe(404);
      await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
      await expect(page.getByRole("banner")).toBeVisible();
    }
  });

  test("menu links navigate to working pages", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main" });
    await nav.getByRole("button", { name: "About" }).click();
    await nav.getByRole("link", { name: "Governance" }).click();
    await expect(page).toHaveURL(/\/about\/governance$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("University Governance");
  });

  test("section landing pages list their child pages", async ({ page }) => {
    await page.goto("/academics/faculties");
    await expect(page.getByRole("main").getByRole("link", { name: "Faculty of Education" })).toBeVisible();
  });

  test("portal pages explain the service is not yet online instead of faking it", async ({ page }) => {
    await page.goto("/student-portal");
    await expect(page.getByRole("heading", { name: "This service is not yet available online" })).toBeVisible();
  });
});
