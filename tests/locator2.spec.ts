import { test, expect, Browser, Page } from '@playwright/test';
import { chromium } from '@playwright/test';

test('locator test', async () => {

    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    });

    const page: Page = await browser.newPage();

    await page.goto('file:///D:/Playwrite/login.html');
    // await page.locator('[data-chanchalid=username').fill('chanchal');
    await page.getByTestId('username').fill('chanchalrajput');
  await page .getByTestId('password').fill('chanchal123');
  await page.getByTestId('login').click();


//  await new Promise(() => {});
});