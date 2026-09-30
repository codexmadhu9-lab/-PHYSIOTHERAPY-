import {chromium} from 'playwright';
import {createServer} from 'vite';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const server=await createServer({server:{host:'127.0.0.1',port:4176,strictPort:true}});
await server.listen();
let browser;
try{
 browser=await chromium.launch({channel:'chrome',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4176/doctors/',{waitUntil:'networkidle'});
 assert.match(await page.title(),/Doctors/);
 assert.equal(await page.locator('.doctor-profile').count(),12);
 assert.equal(new Set(await page.locator('.doctor-portrait img').evaluateAll(images=>images.map(i=>i.src))).size,12);
 await mkdir('artifacts',{recursive:true});
 for(const card of await page.locator('.doctor-portrait').all()){
  await card.scrollIntoViewIfNeeded();await card.hover();
  assert.equal(await card.getAttribute('aria-expanded'),'true');
  assert.equal(await card.locator('.doctor-description-line').count(),4);
  await page.mouse.move(0,0);await card.focus();
  await page.keyboard.press('Escape');
  assert.equal(await card.getAttribute('aria-expanded'),'false');
  await page.keyboard.press('Enter');assert.equal(await card.getAttribute('aria-expanded'),'true');
  await page.keyboard.press('Escape');
 }
 const widths=[1920,1440,1280,1024,768,430,390,375,360,320];
 for(const width of widths){
  await page.setViewportSize({width,height:900});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);
  for(const card of await page.locator('.doctor-portrait').all()){
   const fits=await card.locator('.doctor-description').evaluate(e=>e.scrollHeight<=e.clientHeight+1);
   assert.ok(fits,`Description overflows portrait at ${width}`);
  }
 }
 assert.deepEqual(await page.locator('.doctor-portrait img').evaluateAll(images=>images.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)),[]);
 await page.setViewportSize({width:1440,height:1000});await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
 await page.screenshot({path:'artifacts/doctors-desktop.png',fullPage:true});
 await page.locator('.doctor-portrait').first().hover();await page.waitForTimeout(550);
 await page.locator('.doctor-profile').first().screenshot({path:'artifacts/doctor-hover.png'});
 await page.getByRole('button',{name:'Enquire about a session'}).click();await page.locator('.detail-dialog').waitFor();await page.keyboard.press('Escape');
 await page.reload({waitUntil:'networkidle'});assert.equal(await page.locator('.doctor-profile').count(),12);
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
 await mobile.goto('http://127.0.0.1:4176/doctors/',{waitUntil:'networkidle'});
 const first=mobile.locator('.doctor-portrait').first();await first.tap();assert.equal(await first.getAttribute('aria-expanded'),'true');
 await mobile.locator('.doctor-profile').first().screenshot({path:'artifacts/doctor-mobile-reveal.png'});
 await first.tap();assert.equal(await first.getAttribute('aria-expanded'),'false');
 await mobile.getByRole('button',{name:'Open navigation'}).click();
 await mobile.locator('.mobile-menu').getByRole('link',{name:/Home/}).click();await mobile.waitForURL('**/#home');
 await mobile.getByRole('button',{name:'Open navigation'}).click();
 await mobile.locator('.mobile-menu').getByRole('link',{name:/Doctors/}).click();await mobile.waitForURL('**/doctors/');
 assert.deepEqual(errors,[]);
 await writeFile('artifacts/doctors-checks.json',JSON.stringify({profiles:12,uniquePortraits:12,widths,hover:'passed',keyboard:'passed',touch:'passed',navigation:'passed',consoleErrors:errors},null,2));
 console.log('PASS: 12 unique portraits and descriptions; hover, keyboard, touch, booking, navigation, direct route, 10 viewport widths.');
}finally{await browser?.close();await server.close();}
