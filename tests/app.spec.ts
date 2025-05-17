import { test, expect } from '@playwright/test';

test('App: счётчик и квадрат работают корректно', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const button = page.getByRole('button', { name: 'click' });
    const count = page.getByTestId('count');
    const square = page.getByTestId('square');

    await expect(count).toHaveText('0');
    await expect(square).toHaveText('0');

    await button.click();
    await expect(count).toHaveText('1');
    await expect(square).toHaveText('1');

    await button.click();
    await expect(count).toHaveText('2');
    await expect(square).toHaveText('4');
});
