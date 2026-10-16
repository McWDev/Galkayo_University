import { expect, test } from "@playwright/test";

test.describe("About pages", () => {
  test("About Us follows the reference structure with jump links", async ({ page }) => {
    await page.goto("/about");
    const h2s = await page.getByRole("main").getByRole("heading", { level: 2 }).allTextContents();
    for (const title of ["Built to Serve Galkayo and Somalia", "Vision & Mission", "Our Core Values", "Governance", "Our Three Campuses", "Our Facilities"]) {
      expect(h2s).toContain(title);
    }
    await expect(page.getByRole("navigation", { name: "On this page" }).getByRole("link")).toHaveCount(6);
  });

  test("jump link moves to the campuses section", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop only");
    await page.goto("/about");
    await page.getByRole("navigation", { name: "On this page" }).getByRole("link", { name: "Campuses" }).click();
    await expect(page).toHaveURL(/#campuses$/);
    await expect(page.getByRole("heading", { level: 2, name: "Our Three Campuses" })).toBeInViewport();
  });

  test("shows only approved facts (founded 2010, 3 campuses)", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("2010", { exact: true }).first()).toBeVisible();
    await expect(page.locator("#campuses li")).toHaveCount(3);
  });

  test("structure chart lists all five faculties", async ({ page }) => {
    await page.goto("/about/structure");
    for (const name of ["Faculty of Health Sciences", "Faculty of Medicine & Surgery", "Faculty of Computer Science", "Faculty of Education", "Faculty of Economics & Management Sciences"]) {
      await expect(page.getByRole("main").getByText(name, { exact: true })).toBeVisible();
    }
  });

  test("staff page shows the privacy note and no personal contact details", async ({ page }) => {
    await page.goto("/about/staff");
    await expect(page.getByText(/published only with their permission/)).toBeVisible();
    await expect(page.getByRole("main").locator('a[href^="mailto:"], a[href^="tel:"]')).toHaveCount(2); // only the general contact strip
  });

  test("rector's message has the leadership layout", async ({ page }) => {
    await page.goto("/about/rectors-message");
    await expect(page.getByRole("heading", { level: 2, name: "Welcome to Galkayo University" })).toBeVisible();
    await expect(page.getByRole("main").getByRole("img", { name: "Rector's photo" })).toBeVisible();
  });
});
