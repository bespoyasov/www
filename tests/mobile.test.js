import { expect, test } from '@playwright/test';
import { pages } from './pages';

pages.forEach(({ path, name }) => {
	test(`“${name}” matches mobile screenshot`, async ({ page }) => {
		await page.setViewportSize({ width: 420, height: 680 });
		await page.goto(path);
		await expect(page).toHaveScreenshot(`${name} Mobile.png`, { fullPage: true });
	});
});
