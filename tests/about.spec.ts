import { test, expect } from '@playwright/test';

test('about page displays correct content on mobile view', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });

  // Navigate to the About page
  await page.goto('/about');

  // Check that the page title is correct
  await expect(page).toHaveTitle('About Me - Nika Churikova');

  // Check that the main heading is visible
  await expect(page.getByRole('heading', { name: 'about' })).toBeVisible();

  // Check for greeting text
  await expect(page.getByText('Всем привет ;)')).toBeVisible();

  // Check for profile images
  await expect(page.locator('.image-grid img').first()).toBeVisible();
  await expect(page.locator('.image-grid img').nth(1)).toBeVisible();

  // Check for key content sections
  await expect(page.getByText('Я — Ника, лингвист-переводчик')).toBeVisible();
  await expect(page.getByText('Образование:')).toBeVisible();
  await expect(page.getByText('помогу:')).toBeVisible();

  // Check for testimonials button
  await expect(page.getByText('отзывы студентов')).toBeVisible();

  // Check that the navigation is visible with the about item active
  await expect(
    page.locator('.mobile-menu-row:first-child a.active'),
  ).toBeVisible();

  // Take a screenshot
  await page.screenshot({
    path: './tests/screenshots/about-mobile.png',
    fullPage: true,
  });
});

test('visual comparison of about page - mobile', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/about');

  // Wait for any animations or transitions to complete
  await page.waitForTimeout(500);

  // Compare the screenshot with a golden image
  await expect(page).toHaveScreenshot('about-mobile.png', {
    maxDiffPixelRatio: 0.01,
  });
});
