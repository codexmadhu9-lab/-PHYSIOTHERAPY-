import {useEffect,useRef} from 'react';
import {contact} from '../contact';
import './LocationDialog.css';

export function LocationButton({onClick}) {
 return <button className="location-button" onClick={onClick} aria-label="View location" title="View location" aria-haspopup="dialog"><svg width="21" height="24" viewBox="0 0 24 28" fill="none" aria-hidden="true"><path d="M21 11c0 7-9 14-9 14S3 18 3 11a9 9 0 1 1 18 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/></svg></button>;
}

export default function LocationDialog({onClose}) {
 const ref=useRef(null);
 useEffect(()=>{
  const el=ref.current;const active=document.activeElement;const previous=document.body.style.overflow;
  el.showModal();document.body.style.overflow='hidden';
  return ()=>{el.close();document.body.style.overflow=previous;if(active?.isConnected)active.focus();};
 },[]);
 const location=contact.location;
 return <dialog ref={ref} className="location-dialog" aria-labelledby="location-title" aria-describedby="location-note" onCancel={onClose} onClick={e=>{if(e.target===ref.current)onClose();}}>
  <div className="location-heading"><button className="close" aria-label="Close location" onClick={onClose}>×</button><p className="eyebrow">FIND US</p><h2 id="location-title">{location.isSample?'Sample location':'Our location'}</h2><p>{location.name}</p><p id="location-note" className="location-note">{location.isSample?'Temporary map preview — this is not the clinic address. The actual location will be added soon.':'Find our location on the map below.'}</p></div>
  <iframe title={location.isSample?'Sample location map of Hyderabad':'Clinic location map'} src={location.mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
  <div className="location-footer"><a className="text-link" href={location.directionsUrl} target="_blank" rel="noopener noreferrer">Open {location.isSample?'sample ':''}location in Maps <span aria-hidden="true">↗</span></a><p>If the map does not load, use the link above.</p></div>
 </dialog>;
}
