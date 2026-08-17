import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from '@playwright/test';

test('locator test', async ({ page }) => {

  // Open OpenCart register page
  await page.goto(
    'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  );

  // Create web elements using locators

  // 1. ID - unique locator
  const firstname: Locator = page.locator('id=input-firstname');
  const lastname: Locator = page.locator('id=input-lastname');

  // Perform actions
  await firstname.fill('chanchal');
  await lastname.fill('rajput');



//   2 classname:
 const logo:Locator= page.locator('.img-responsive');
  const logoExist=await logo.isEnabled();
  console.log(logoExist);

//   3 textselector
const header:Locator= page.locator('text=Register Account');
const headerExist=await header .isEnabled();
console.log('logoExit');


// 4:Css selector
 const email:Locator=page.locator('cssinput#input-email');
  const telephone:Locator=page.locator('css=input[name="telephone"]');
  const checkbox:Locator=page.locator('css=input[type="checkbox"]');

  await email.fill("chanchal@gmail.com");
  await telephone.fill("5327813783");
  await checkbox.click();





  await new Promise(()=>{});
});