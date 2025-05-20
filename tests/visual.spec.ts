import { test, expect } from '@playwright/test';

test('visual comparison of homepage', async ({ page }) => {
  await page.goto('/');

  // Wait for any animations or transitions to complete
  await page.waitForTimeout(500);

  // Compare the screenshot with a golden image
  // First time this runs, it will create the reference screenshot
  // Subsequent runs will compare against it
  await expect(page).toHaveScreenshot('homepage.png', {
    maxDiffPixelRatio: 0.01,
  });
});
