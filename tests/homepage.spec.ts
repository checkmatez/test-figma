import { test, expect } from '@playwright/test';

test('homepage has correct title and elements', async ({ page }) => {
  await page.goto('/');

  // Check that the page title contains the expected text
  await expect(page).toHaveTitle('Nika Churikova - English Tutor');

  // Desktop version checks (will be skipped on small viewports)
  const isDesktop = await page.evaluate(() => window.innerWidth > 768);

  if (isDesktop) {
    // Check that the main heading is visible
    await expect(
      page.getByRole('heading', { name: "hello, i'm nika" }),
    ).toBeVisible();

    // Check that the description text is visible using more specific selector
    await expect(page.locator('.info-section .description')).toBeVisible();

    // Check that navigation menu is visible
    await expect(
      page.locator('.desktop-menu').getByText('about me'),
    ).toBeVisible();
    await expect(
      page.locator('.desktop-menu').getByText('classes'),
    ).toBeVisible();

    // Check that the footer is visible with more specific selector
    // Use nth(0) to specify the first matching element
    await expect(
      page.locator('.footer-content .copyright').nth(0),
    ).toBeVisible();
  } else {
    // Mobile version checks
    await expect(page.locator('.mobile-description')).toBeVisible();

    // Use more specific selectors for mobile menu items
    await expect(
      page.locator('.mobile-menu-row:first-child').getByText('about'),
    ).toBeVisible();
    await expect(
      page.locator('.mobile-menu-row:first-child').getByText('classes'),
    ).toBeVisible();
    await expect(
      page.locator('.mobile-menu-row:last-child').getByText('booking'),
    ).toBeVisible();
  }

  // Check that the profile image is loaded - use more specific selector
  await expect(
    page.locator(isDesktop ? '.profile-image' : '.mobile-profile-image').nth(0),
  ).toBeVisible();

  // Take a screenshot of the homepage
  await page.screenshot({
    path: './tests/screenshots/homepage.png',
    fullPage: true,
  });
});
