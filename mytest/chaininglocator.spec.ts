import { test ,expect,Browser,Page,Locator, } from '@playwright/test'; 
   
import {webkit,chromium,firefox} from '@playwright/test';
     

 test ('locator test',async()=>{
   const browser :Browser = await chromium.launch ({headless:false,channel:'chrome'});

   const page:Page=await browser.newPage();


  await page.goto("https://www.orangehrm.com/30-day-free-trial");

// await page.locator('form#Form_getForm>>#Form_getForm_Name').fill('Naveen');

// await page.locator('form#Form_getForm>>text=Get Your Free Trial').click();

const form= page.locator('form#Form_getForm');
const getfreetrbutton=page.getByRole('button',{name:'Get Your Free Trial'});

await form.locator(getfreetrbutton).click();



  await page.waitForTimeout(3000);
  browser.close();
 });