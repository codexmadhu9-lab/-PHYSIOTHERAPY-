import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},ignoreHTTPSErrors:true});
await page.goto('https://nync.co.kr/',{waitUntil:'domcontentloaded'});
await page.waitForTimeout(1500);
const details=await page.evaluate(()=>({animations:[...document.querySelectorAll('[data-animate], [data-animation], .animated')].map(e=>({class:e.className,attrs:[...e.attributes].map(a=>[a.name,a.value])})), headings:[...document.querySelectorAll('h1,h2,h3')].map(e=>({text:e.textContent,font:getComputedStyle(e).font,color:getComputedStyle(e).color})),css:[...document.styleSheets].flatMap(s=>{try{return [...s.cssRules].filter(r=>/keyframes|animation:|transition:/.test(r.cssText)).map(r=>r.cssText)}catch{return []}})}));
await fs.writeFile('reference/details.json',JSON.stringify(details,null,2));
for(let y=0;y<8000;y+=700){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(250)}
await page.waitForTimeout(1200);await page.screenshot({path:'reference/scrolled.png',fullPage:true});
await page.setViewportSize({width:390,height:844});await page.goto('https://nync.co.kr/',{waitUntil:'domcontentloaded'});await page.waitForTimeout(2000);await page.screenshot({path:'reference/mobile.png'});
console.log(await page.locator('header').count());console.log(JSON.stringify(details.headings));
await browser.close();
