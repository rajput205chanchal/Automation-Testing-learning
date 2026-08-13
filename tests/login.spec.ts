import { test, firefox } from '@playwright/test';

test('login test', async () => {

  // Launch Firefox
  const browser = await firefox.launch({
    headless: false
  });

  // Create a new page/tab
  const page = await browser.newPage();

  // Open OpenCart login page
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

  // Locate elements
  const emailId = page.locator('#input-email');
  const password = page.locator('#input-password');
  const loginButton = page.locator('input[type="submit"]');

  // Enter email
  await emailId.fill('naveen@gmail.com');

  // Enter password
  await password.fill('naveen@123');

  // Click Login
  await loginButton.click();

  // Get page title
  const title = await page.title();

  console.log(title);

  // Take screenshot
  await page.screenshot({
    path: 'example.png'
  });

  // Close browser();
  await browser.close();
});