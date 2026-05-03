// vrt.test.js
const { test, expect } = require("@playwright/test");
const { createTestServer } = require("@storybook/test-server");
const { injectAxe, checkA11y } = require("axe-playwright");

let server;

beforeAll(async () => {
  server = await createTestServer();
});

afterAll(async () => {
  await server.close();
});

describe("VRT", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(server.url);
    await injectAxe(page);
  });

  // Storybookの全Storyに対してテストを実行
  server.stories.forEach((story) => {
    test(story.id, async ({ page }) => {
      await page.goto(server.url + "?path=/story/" + story.id);
      // アクセシビリティチェック
      await checkA11y(page, "#storybook-root", {
        detailedReport: true,
        detailedReportOptions: {
          html: true,
        },
      });
      // スクリーンショット比較
      await expect(page).toHaveScreenshot(`${story.id}.png`);
    });
  });
});
