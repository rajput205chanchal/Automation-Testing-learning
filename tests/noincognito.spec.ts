import { test, Page, BrowserContext } from '@playwright/test';
import { chromium } from 'playwright';

test('NOIncognito test', async () => {

  // Non-incognito / persistent context
  const browser: BrowserContext = await chromium.launchPersistentContext(
    'D:\\Playwrite\\chrome-profile',
    {
      headless: false,
      channel: 'chrome'
    }
  );

  const pages = browser.pages();
  const page: Page = pages[0];

  await page.goto(
    'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
  );

  await page.locator('id=input-firstname').fill('naveen');
  await page.locator('id=input-lastname').fill('AAutomation Labs');

  await page.waitForTimeout(3000);

  await browser.close();
});