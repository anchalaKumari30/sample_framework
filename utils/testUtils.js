// utils/testUtils.js
const { test } = require('@playwright/test');

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`, fullPage: true });
  }
});
