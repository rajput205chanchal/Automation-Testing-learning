import { test ,expect,Browser,Page,Locator,FrameLocator} from '@playwright/test'; 
import{log} from 'console';
   
import {webkit,chromium,firefox} from '@playwright/test';
     

 test ('ARia role locator test',async()=>{
   const browser :Browser = await chromium.launch ({headless:false,channel:'chrome'});
  const page:Page =  await browser.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  await expect (page.getByRole('heading',{name:'Register Account'})).toBeVisible();

  await expect (page.getByRole('link',{name:'forgotten password'})).toBeVisible();

 await expect(page .getByRole('radio',{name:'yes'})).toBeVisible();

 await page.getByRole('radio',{name:'yes'}).click();


 await expect
 (page.getByRole('checkbox')).toBeVisible();
 await page .getByRole('checkbox').click(); 
 await  page.waitForTimeout(3000);
});