import { test, expect } from '@playwright/test';

test('homepage has correct title and layout', async ({ page }) => {
  await page.goto('/');

  // Check that the page title contains the expected text
  await expect(page).toHaveTitle('Home Page');

  // Check that the main heading is visible
  await expect(page.getByRole('heading', { name: 'Home Page' })).toBeVisible();

  // Check that the welcome text is visible
  await expect(page.getByText('Welcome to your new Astro site')).toBeVisible();

  // Take a screenshot of the homepage
  await page.screenshot({
    path: './tests/screenshots/homepage.png',
    fullPage: true,
  });
});
