import { expect, test } from '@playwright/test';
import { pages } from './pages';

pages.forEach(({ path, name }) => {
	test(`“${name}” matches desktop screenshot`, async ({ page }) => {
		await page.goto(path);
		await expect(page).toHaveScreenshot(`${name} Desktop.png`, { fullPage: true });
	});
});
