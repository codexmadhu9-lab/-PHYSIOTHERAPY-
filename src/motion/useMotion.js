import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function useMotion(root) {
 useLayoutEffect(() => {
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
   const ctx = gsap.context(() => {
    const tl=gsap.timeline({defaults:{ease:'power3.out'}});
    tl.from('.hero-image',{scale:1.035,duration:1.6})
      .from('.hero-copy .reveal-line',{yPercent:110,opacity:0,duration:1,stagger:.16},.2)
      .from('.hero-copy .hero-detail',{y:15,opacity:0,duration:.9},.65);
    gsap.utils.toArray('[data-reveal]').forEach(el=>gsap.from(el,{y:22,opacity:0,duration:.95,scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
    gsap.utils.toArray('[data-image]').forEach(el=>gsap.from(el,{scale:1.035,opacity:.5,duration:1.25,scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
    gsap.utils.toArray('[data-line]').forEach(el=>gsap.from(el,{scaleX:0,transformOrigin:'left',duration:1,scrollTrigger:{trigger:el,start:'top 95%',once:true}}));
   },root);
   return ()=>ctx.revert();
  });
  return ()=>mm.revert();
 },[root]);
}
