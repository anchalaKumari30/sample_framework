// playwright.config.js
/**
 * Playwright Test Configuration for stage environment only
 */
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'stage',
      use: { baseURL: 'https://www.saucedemo.com/' },
    },
  ],
  reporter: [
    ['list'],
    ['playwright-html-reporter', { outputFolder: 'html-report', open: 'never' }],
  ],
});
