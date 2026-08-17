import { test ,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test'; 
   
import {webkit,chromium,firefox} from '@playwright/test';

test('auth test',async()=>{
    const browser:Browser =await chromium.launch({headless:false ,channel:'chrome'});
    const  context:BrowserContext=await browser.newContext();
    const page:Page=await context.newPage();



const username='admin';
const password='admin';
const authHeader='basic' + btoa(username+password);
page.setExtraHTTPHeaders({Authorization:authHeader});

// pass and username directly link m n use krke can be used like this  by initialization

    await page.goto('https://the-internet.herokuapp.com/basis_auth');
// await new Promise (()=>{});
})  