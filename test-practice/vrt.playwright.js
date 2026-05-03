// vrt.test.js - Playwrightを使ったビジュアルリグレッションテスト
// 実行方法: npm run test:vrt:pw (Storybookが起動中であること)
const { test, expect } = require("@playwright/test");

const STORYBOOK_URL = "http://localhost:6006";

test.describe("VRT - Button", () => {
  test("Primary variant", async ({ page }) => {
    await page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-button--primary&viewMode=story`,
    );
    await page.waitForSelector("#storybook-root");
    await expect(page.locator("#storybook-root")).toHaveScreenshot(
      "button-primary.png",
    );
  });

  test("Secondary variant", async ({ page }) => {
    await page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-button--secondary&viewMode=story`,
    );
    await page.waitForSelector("#storybook-root");
    await expect(page.locator("#storybook-root")).toHaveScreenshot(
      "button-secondary.png",
    );
  });

  test("Destructive variant", async ({ page }) => {
    await page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-button--destructive&viewMode=story`,
    );
    await page.waitForSelector("#storybook-root");
    await expect(page.locator("#storybook-root")).toHaveScreenshot(
      "button-destructive.png",
    );
  });
});
