import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://google.com');
  const searchArea = await page.getByLabel('Buscar', {exact: true})
    await searchArea.type("Test Automation");

    await Promise.all([
      page.waitForResponse(req => req.url().includes('/search') && req.status() === 200 ),
      page.keyboard.press('Enter')
    ])
});

test.describe('Google', () => {
  test('Valid search', async ({ page }) => {
    const searchResultEl = await page.locator('#search')
    expect(searchResultEl).toBeVisible()
  });

  test('Search result navigation', async ({ page }) => {
    
  });
});