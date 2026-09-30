import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AuthDialog from './AuthDialog';
import SocialLinks from './SocialLinks';
import LocationDialog, {LocationButton} from './LocationDialog';
import './AuthDialog.css';
const links=[['Home','/#home'],['About','/#about'],['Physiotherapy','/#physiotherapy'],['Programs','/#programs'],['Contact','/contact/']];
export default function Header({showSocial=false}) {
 const [open,setOpen]=useState(false);
 const [auth,setAuth]=useState(null);
 const [locationOpen,setLocationOpen]=useState(false);
 const dialog=useRef(null); const toggle=useRef(null);
 useEffect(()=>{
  if(!open)return;
  const el=dialog.current;el.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';
  const ctx=gsap.context(()=>{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.from('.menu-link',{y:20,opacity:0,duration:.55,stagger:.07,ease:'power3.out'});},el);
  return ()=>{ctx.revert();el.close();document.body.style.overflow=previous;toggle.current?.focus();};
 },[open]);
 const openAuth=mode=>{setOpen(false);setAuth(mode);};
 const openLocation=()=>{setOpen(false);setLocationOpen(true);};
 return <>
  <header className={`header${showSocial?' header--socials':''}`}>
   {showSocial&&<SocialLinks/>}
   <a className="wordmark" href="/#home" aria-label="Physiotherapy home"><span className="brand-mark" aria-hidden="true">↗</span><span>[PHYSIOTHERAPY BRAND]<small>MOVEMENT · BALANCE · RECOVERY</small></span></a>
   <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,url])=><a key={url} href={url}>{label}</a>)}</nav>
   <div className="auth-actions"><button onClick={()=>openAuth('login')}>Login</button><button onClick={()=>openAuth('join')}>Join us</button><LocationButton onClick={openLocation}/></div>
   <button className="menu-toggle" ref={toggle} aria-label="Open navigation" aria-expanded={open} onClick={()=>setOpen(true)}><i/><i/></button>
  </header>
  <dialog ref={dialog} className="mobile-menu" onCancel={()=>setOpen(false)} aria-label="Navigation">
   <button className="close" onClick={()=>setOpen(false)} aria-label="Close navigation">×</button><p className="eyebrow">MOVE TOWARDS BETTER</p>
   <nav>{links.map(([label,url],i)=><a className="menu-link" key={url} href={url} onClick={()=>setOpen(false)}><small>0{i+1}</small>{label}<span>↗</span></a>)}</nav>
   <div className="auth-actions"><button onClick={()=>openAuth('login')}>Login</button><button onClick={()=>openAuth('join')}>Join us</button><LocationButton onClick={openLocation}/></div>
  </dialog>
  {auth&&<AuthDialog initialMode={auth} onClose={()=>setAuth(null)}/>}
  {locationOpen&&<LocationDialog onClose={()=>setLocationOpen(false)}/>}
 </>;
}
