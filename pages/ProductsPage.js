// pages/ProductsPage.js
const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async getItemCount() {
    return await this.inventoryItems.count();
  }

  async getItemNames() {
    return await this.page.$$eval('.inventory_item_name', els => els.map(e => e.textContent));
  }

  async logout() {
    await this.burgerMenu.click();
    await this.page.waitForSelector('#logout_sidebar_link', { state: 'visible' });
    await this.logoutLink.click();
    await this.page.waitForURL('**/'); // Wait for redirect to login or home
  }
}

module.exports = { ProductsPage };
