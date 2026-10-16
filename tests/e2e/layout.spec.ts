import { expect, test } from "@playwright/test";

test.describe("shared layout", () => {
  test("renders header, main landmark and footer", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  });

  test("logo keeps its square aspect ratio", async ({ page }) => {
    await page.goto("/");
    const logo = page.getByRole("banner").locator('img[src*="gu.png"]').first();
    const box = await logo.boundingBox();
    expect(box).not.toBeNull();
    expect(Math.abs(box!.width - box!.height)).toBeLessThanOrEqual(1);
  });

  test("skip link is the first focusable element and moves focus to main", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to main content" });
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test("security headers are present", async ({ request }) => {
    const res = await request.get("/");
    const headers = res.headers();
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["strict-transport-security"]).toContain("max-age=");
    expect(headers["x-powered-by"]).toBeUndefined();
  });
});

test.describe("desktop navigation", () => {
  test.skip(({ isMobile }) => isMobile, "desktop only");

  test("menus open with keyboard, expose state, and close on Escape", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main" });
    const trigger = nav.getByRole("button", { name: "Academics" });

    await trigger.focus();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    const firstLink = nav.getByRole("link", { name: /Faculties/ });
    await expect(firstLink).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(firstLink).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
    await expect(firstLink).toBeHidden();
  });

  test("only one menu is open at a time and outside click closes it", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main" });
    await nav.getByRole("button", { name: "About" }).click();
    await nav.getByRole("button", { name: "Research" }).click();
    await expect(nav.getByRole("button", { name: "About" })).toHaveAttribute("aria-expanded", "false");
    await expect(nav.getByRole("button", { name: "Research" })).toHaveAttribute("aria-expanded", "true");
    await page.locator("h1").click();
    await expect(nav.getByRole("button", { name: "Research" })).toHaveAttribute("aria-expanded", "false");
  });

  test("mobile menu button is hidden", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: "Menu" })).toBeHidden();
  });
});

test.describe("mobile navigation", () => {
  test.skip(({ isMobile }) => !isMobile, "mobile only");

  test("menu opens as a modal dialog, works with touch, and closes", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Menu" }).tap();
    const dialog = page.getByRole("dialog", { name: "Site menu" });
    await expect(dialog).toBeVisible();

    await dialog.getByText("Admissions", { exact: true }).tap();
    await expect(dialog.getByRole("link", { name: "How to Apply" })).toBeVisible();

    await dialog.getByRole("button", { name: "Close" }).tap();
    await expect(dialog).toBeHidden();
  });

  test("Escape closes the menu and returns focus to the trigger", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Menu" });
    await trigger.focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog", { name: "Site menu" });
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("page has no horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});
