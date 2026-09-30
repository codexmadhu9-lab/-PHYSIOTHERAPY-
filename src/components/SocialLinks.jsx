import {useState} from 'react';
import {contact} from '../contact';
import {LocationButton} from './LocationDialog';
import './SocialLinks.css';

function InstagramIcon(){return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;}

export default function SocialLinks({onLocation}){
 const [notice,setNotice]=useState(false);
 return <nav className="header-socials" aria-label="Social media and location">
  <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp: book a session" title="WhatsApp: +91 9281339363"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.6a8.6 8.6 0 0 1-12.7 7.6L3 20.5l1.3-4.6A8.6 8.6 0 1 1 20.5 11.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="m8.2 7.6 1.5 2.3-1 1.1c.7 1.5 1.8 2.6 3.3 3.3l1.1-1 2.3 1.5c.3.2.4.6.2.9-.4.8-1.1 1.3-2 1.2-3.6-.4-6.6-3.4-7-7-.1-.9.4-1.6 1.2-2 .3-.2.7-.1.9.2Z" fill="currentColor"/></svg></a>
  {contact.instagramHref?<a href={contact.instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><InstagramIcon/></a>:<button type="button" aria-label="Instagram" title="Instagram profile coming soon" aria-expanded={notice} aria-controls="instagram-notice" onClick={()=>setNotice(value=>!value)} onBlur={()=>setNotice(false)} onKeyDown={e=>{if(e.key==='Escape')setNotice(false);}}><InstagramIcon/></button>}
  <LocationButton onClick={onLocation}/>
  {notice&&<p id="instagram-notice" className="social-notice" role="status">Instagram profile coming soon.</p>}
 </nav>;
}
