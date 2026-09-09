import { test, expect, type Page } from '@playwright/test';

const BASE_URL = 'https://phptravels.net';

async function acceptDemoPopup(page: Page) {
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  const popupButton = page.locator('button').filter({ hasText: /I Understand.*Continue/i }).first();
  await expect(popupButton).toBeVisible({ timeout: 20000 });
  await popupButton.click({ force: true });
}

test.describe('PHPTravels UI flows', () => {
  test('signup page loads after accepting the demo popup', async ({ page }) => {
    await acceptDemoPopup(page);
    await page.goto(`${BASE_URL}/signup`, { waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { name: /sign up|signup/i }).first()).toBeVisible({ timeout: 20000 });
    await expect(page.getByLabel(/first name/i)).toBeVisible();
    await expect(page.getByLabel(/last name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
  });

  test('login form is usable after popup dismissal', async ({ page }) => {
    await acceptDemoPopup(page);
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { name: /login/i }).first()).toBeVisible({ timeout: 20000 });
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();
  });

  test('flight search form opens after popup dismissal', async ({ page }) => {
    await acceptDemoPopup(page);
    await page.goto(`${BASE_URL}/flights`, { waitUntil: 'domcontentloaded' });
    await expect(page.getByText(/flight search|find flights|flights/i).first()).toBeVisible({ timeout: 20000 });
    await expect(page.getByRole('button', { name: /search/i }).first()).toBeVisible();
  });
});
