import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import DetailDialog from './DetailDialog';
import SocialLinks from './SocialLinks';
import LocationDialog from './LocationDialog';
import './AuthDialog.css';
import './StickyHeader.css';
const links=[['Home','/#home'],['About','/#about'],['Physiotherapy','/#physiotherapy'],['Programs','/#programs'],['Doctors','/doctors/'],['Contact','/contact/']];
export default function Header({showSocial=false}) {
 const [open,setOpen]=useState(false);
 const [booking,setBooking]=useState(false);
 const [locationOpen,setLocationOpen]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{
  const update=()=>setScrolled(window.scrollY>24);
  update();window.addEventListener('scroll',update,{passive:true});
  return ()=>window.removeEventListener('scroll',update);
 },[]);
 const dialog=useRef(null); const toggle=useRef(null);
 useEffect(()=>{
  if(!open)return;
  const el=dialog.current;el.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';
  const ctx=gsap.context(()=>{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.from('.menu-link',{y:20,opacity:0,duration:.55,stagger:.07,ease:'power3.out'});},el);
  return ()=>{ctx.revert();el.close();document.body.style.overflow=previous;toggle.current?.focus();};
 },[open]);
 const openBooking=()=>{setOpen(false);setBooking(true);};
 const openLocation=()=>{setOpen(false);setLocationOpen(true);};
 return <>
  {!showSocial&&<div className="header-spacer" aria-hidden="true"/>}
  <header className={`header header--sticky header--socials${scrolled?' header--scrolled':''}`}>
   <SocialLinks onLocation={openLocation}/>
   <a className="wordmark" href="/#home" aria-label="Physiotherapy home"><span className="brand-mark" aria-hidden="true">↗</span><span>[PHYSIOTHERAPY BRAND]<small>MOVEMENT · BALANCE · RECOVERY</small></span></a>
   <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,url])=><a key={url} href={url}>{label}</a>)}</nav>
   <div className="auth-actions"><button className="header-booking" onClick={openBooking} aria-haspopup="dialog">Book a session</button></div>
   <button className="menu-toggle" ref={toggle} aria-label="Open navigation" aria-expanded={open} onClick={()=>setOpen(true)}><i/><i/></button>
  </header>
  <dialog ref={dialog} className="mobile-menu" onCancel={()=>setOpen(false)} aria-label="Navigation">
   <button className="close" onClick={()=>setOpen(false)} aria-label="Close navigation">×</button><p className="eyebrow">MOVE TOWARDS BETTER</p>
   <nav>{links.map(([label,url],i)=><a className="menu-link" key={url} href={url} onClick={()=>setOpen(false)}><small>0{i+1}</small>{label}<span>↗</span></a>)}</nav>
   <div className="auth-actions"><button className="header-booking" onClick={openBooking} aria-haspopup="dialog">Book a session</button></div>
  </dialog>
  {booking&&<DetailDialog content="booking" onClose={()=>setBooking(false)}/>}
  {locationOpen&&<LocationDialog onClose={()=>setLocationOpen(false)}/>}
 </>;
}
