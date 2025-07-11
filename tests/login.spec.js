// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
require('../utils/testUtils');

test.describe('SauceDemo Login/Logout', () => {
  test('should login, verify products, and logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Go to login page and login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify inventory items are visible after login
    await page.waitForSelector('.inventory_item');
    const itemCount = await productsPage.getItemCount();
    expect(itemCount).toBeGreaterThan(0);

    // Logout
    await productsPage.logout();
    await expect(page.locator('#login-button')).toBeVisible();
  });
});
