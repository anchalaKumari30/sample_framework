// tests/api.spec.js
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.saucedemo.com';

test.describe('API Tests for SauceDemo', () => {
  test('Login API - success (200)', async ({ request }) => {
    const response = await request.post(BASE_URL + '/', {
      form: {
        username: 'standard_user',
        password: 'secret_sauce',
      },
    });
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body.includes('inventory.html')).toBe(true);
  });

  test('Login API - failure (not 200)', async ({ request }) => {
    const response = await request.post(BASE_URL + '/', {
      form: {
        username: 'invalid_user',
        password: 'wrong_password',
      },
    });
    expect(response.status()).not.toBe(200);
    const body = await response.text();
    expect(body.includes('inventory.html')).toBe(false);
  });

  test('Products API - success (200)', async ({ request }) => {
    const response = await request.get(BASE_URL + '/inventory.html');
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body.includes('inventory_container')).toBe(true);
  });

  test('Products API - failure (not 200)', async ({ request }) => {
    const response = await request.get(BASE_URL + '/nonexistent.html');
    expect(response.status()).not.toBe(200);
    const body = await response.text();
    expect(body.includes('inventory_container')).toBe(false);
  });
});

test('Dashboard loads after login (UI)', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});
