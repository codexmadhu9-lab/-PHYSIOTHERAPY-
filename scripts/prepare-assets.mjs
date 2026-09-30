import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
const base = 'C:/Users/user/.codex/generated_images/01a0f0e4-d2ef-7fe1-afca-f66485abfc75/';
const assets = [
 ['exec-7b46f012-ecef-4f42-9ae1-8fb8d820b188.png','hero/natural-movement'],
 ['exec-98807c77-dcef-4699-b31d-6f2b597865ec.png','treatment/guided-assessment'],
 ['exec-24041e48-cf6f-4de9-a1ba-2013808fb9ba.png','movement/restore-balance'],
];
for(const folder of ['hero','movement','treatment','programs','therapists','contact']) await mkdir(`src/assets/${folder}`,{recursive:true});
for(const [file,name] of assets) await sharp(base+file).resize({width:1536,withoutEnlargement:true}).webp({quality:85}).toFile(`src/assets/${name}.webp`);
console.log('Three original images optimised.');
