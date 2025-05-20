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

  // Check for greeting text (specifically in mobile container)
  await expect(page.locator('.mobile-container .greeting')).toBeVisible();

  // Check for profile images
  await expect(page.locator('.image-grid img').first()).toBeVisible();
  await expect(page.locator('.image-grid img').nth(1)).toBeVisible();

  // Check for key content sections
  await expect(page.locator('.mobile-container .introduction')).toBeVisible();
  await expect(page.locator('.mobile-container .education')).toBeVisible();
  await expect(page.locator('.mobile-container .help-list')).toBeVisible();

  // Check for testimonials button
  await expect(
    page.locator('.mobile-container .testimonials-button'),
  ).toBeVisible();

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

test('about page displays correct content on desktop view', async ({
  page,
}) => {
  // Set desktop viewport
  await page.setViewportSize({ width: 1280, height: 800 });

  // Navigate to the About page
  await page.goto('/about');

  // Check that the page title is correct
  await expect(page).toHaveTitle('About Me - Nika Churikova');

  // Check that the main heading is visible
  await expect(page.getByRole('heading', { name: 'about me' })).toBeVisible();

  // Check for greeting text (specifically in desktop container)
  await expect(
    page.locator('.desktop-container .greeting-desktop'),
  ).toBeVisible();

  // Check for profile image in desktop layout
  await expect(page.locator('.image-section img')).toBeVisible();
  await expect(page.locator('.image-background')).toBeVisible();

  // Check for key content sections
  await expect(
    page.locator('.desktop-container .content-section'),
  ).toBeVisible();
  await expect(
    page.locator('.desktop-container .content-section .education'),
  ).toBeVisible();
  await expect(
    page.locator('.desktop-container .content-section .help-list'),
  ).toBeVisible();

  // Check for testimonials button
  await expect(
    page.locator('.desktop-container .testimonials-button'),
  ).toBeVisible();

  // Check that the navigation is visible with the about item active
  await expect(page.locator('.desktop-menu a.active')).toBeVisible();

  // Take a screenshot
  await page.screenshot({
    path: './tests/screenshots/about-desktop.png',
    fullPage: true,
  });
});

test('visual comparison of about page - mobile', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/about');

  // Wait for any animations or transitions to complete
  await page.waitForTimeout(500);

  // Compare the screenshot with a golden image - using options to handle changing dimensions
  await expect(page).toHaveScreenshot('about-mobile.png', {
    maxDiffPixelRatio: 0.05, // Increase threshold
    timeout: 10000,
    fullPage: true, // Make sure we capture the full page
  });
});

test('visual comparison of about page - desktop', async ({ page }) => {
  // Set desktop viewport
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/about');

  // Wait for any animations or transitions to complete
  await page.waitForTimeout(500);

  // Compare the screenshot with a golden image - using options to handle changing dimensions
  await expect(page).toHaveScreenshot('about-desktop.png', {
    maxDiffPixelRatio: 0.05, // Increase threshold
    timeout: 10000,
    fullPage: true, // Make sure we capture the full page
  });
});
