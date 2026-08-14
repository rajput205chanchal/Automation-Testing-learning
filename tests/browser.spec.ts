import { test ,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test'; 
   
import {webkit,chromium,firefox} from '@playwright/test';
     

 test ('login test',async()=>{
   const browser :Browser = await firefox.launch ({headless:false});


//    browser context 1

   const browserContext_1:BrowserContext=await browser.newContext();

   const page1:Page=await browserContext_1.newPage();

//    browser context 2
const browserContext_2:BrowserContext=await browser.newContext();

   const page2:Page=await browserContext_2.newPage();

  
//    browser1
  await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   const emailId :Locator =await page1.locator('#input-email');
   const password :Locator=await page1.locator('#input-password');
   const loginButton :Locator =await page1.locator ("[ value='Login']");

 await emailId.fill("pwtest@opencart.com");
 await password.fill("playwright@123");
 await loginButton.click();

 
//  browser2

await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   const emailId2 :Locator =await page2.locator('#input-email');
   const password2 :Locator=await  page2 .locator('#input-password');
   const loginButton2 :Locator =await page2.locator ("[ value='Login']");

 await emailId2.fill("userpw@pw.com");
 await password2.fill("Test@123");
 await loginButton2.click();

 

browserContext_1.close();
 browserContext_2.close();
 browser.close();
// await new Promise(()=>{});


 });
