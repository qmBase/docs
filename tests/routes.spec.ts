import { expect, test } from '@playwright/test';

test.describe('Main Routes', () => {
  test('should navigate to the home page', async ({ page }) => {
    await page.goto('/');
    // Check for a known element or title
    await expect(page).toHaveTitle(/qmBase - Hilfe/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate to the tutorials page', async ({ page }) => {
    await page.goto('/tutorials');
    await expect(page).toHaveURL(/\/tutorials/);
    // Based on docusaurus.config.ts, the link label is "Tutorials"
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate to the documentation page', async ({ page }) => {
    await page.goto('/docs/general');
    await expect(page).toHaveURL(/\/docs\/general/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate to the blog (changelog) page', async ({ page }) => {
    await page.goto('/blog');
    await expect(page).toHaveURL(/\/blog/);
    // Blog list page might not have an h1, but should have h2 for post titles
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('should navigate to the roadmap page', async ({ page }) => {
    await page.goto('/roadmap');
    await expect(page).toHaveURL(/\/roadmap/);
    // Roadmap list page might not have an h1, but should have h2 for entries
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });
});
