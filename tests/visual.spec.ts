import { test, expect } from '@playwright/test';

test('visual comparison of homepage - desktop', async ({ page }) => {
  // Set desktop viewport
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/');

  // Wait for any animations or transitions to complete
  await page.waitForTimeout(500);

  // Compare the screenshot with a golden image
  // First time this runs, it will create the reference screenshot
  // Subsequent runs will compare against it
  await expect(page).toHaveScreenshot('homepage-desktop.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('visual comparison of homepage - mobile', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  // Wait for any animations or transitions to complete
  await page.waitForTimeout(500);

  // Compare the screenshot with a golden image
  await expect(page).toHaveScreenshot('homepage-mobile.png', {
    maxDiffPixelRatio: 0.01,
  });
});
