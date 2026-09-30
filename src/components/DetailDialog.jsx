import {useEffect,useRef,useState} from 'react';
import {programs} from '../data';
import {contact} from '../contact';
import './BookingForm.css';
export default function DetailDialog({content,onClose,onBook}) {
 const ref=useRef(null);const [saved,setSaved]=useState(false);
 const [program,setProgram]=useState('Initial movement assessment');
 const [date,setDate]=useState('');
 const [time,setTime]=useState('');
 const today=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 const formattedDate=date?new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'long',year:'numeric'}).format(new Date(`${date}T12:00:00`)):'';
 const [name,setName]=useState('');
 const [phone,setPhone]=useState('');
 const [email,setEmail]=useState('');
 const bookingMessage=`PHYSIOTHERAPY SESSION REQUEST\n\nName: ${name.trim()}\nPhone: ${phone.trim()}${email.trim()?`\nEmail: ${email.trim()}`:''}\nProgram: ${program}\nPreferred date: ${formattedDate||'Not selected'}\nPreferred time: ${time||'Not selected'} IST (UTC+05:30)\n\nPlease confirm availability for this date and time.`;
 const bookingUrl=`${contact.whatsappHref}?text=${encodeURIComponent(bookingMessage)}`;
 function validateBooking(form){
  const nameInput=form.querySelector('#booking-name');
  const phoneInput=form.querySelector('#booking-phone');
  nameInput.setCustomValidity(name.trim()?'':'Enter your full name.');
  phoneInput.setCustomValidity(phone.replace(/\D/g,'').length>=7?'':'Enter a valid phone number.');
  return form.reportValidity();
 }
 function submitBooking(e){
  e.preventDefault();
  if(!validateBooking(e.currentTarget))return;
  window.location.assign(bookingUrl);
 }
 useEffect(()=>{const el=ref.current;const active=document.activeElement;el.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{el.close();document.body.style.overflow=previous;active?.focus();};},[]);
 function save(e){const form=e.currentTarget.closest('form');if(!validateBooking(form))return;const data=new FormData(form);const text=`PHYSIOTHERAPY ENQUIRY DRAFT\n\nName: ${name.trim()}\nPhone: ${phone.trim()}\nEmail: ${email.trim() || 'Not supplied'}\nProgram: ${data.get('program')}\nPreferred date: ${formattedDate}\nPreferred time: ${time} IST (UTC+05:30)\n\nThis is a personal draft. It has not been sent to a clinic and is not a confirmed appointment.\nClinic contact: 9550541177 | WhatsApp booking: 9281339363`;const url=URL.createObjectURL(new Blob([text],{type:'text/plain'}));const link=document.createElement('a');link.href=url;link.download='physiotherapy-enquiry.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setSaved(true);}
 return <dialog ref={ref} className="detail-dialog" onCancel={onClose} onClick={e=>{if(e.target===ref.current)onClose();}} aria-labelledby="dialog-title"><div className="dialog-inner"><button className="close" onClick={onClose} aria-label="Close dialog">×</button>{content==='booking'?<><p className="eyebrow">YOUR FIRST STEP</p><h2 id="dialog-title">Let’s get you<br/>moving.</h2><p>Book a session on WhatsApp at +91 9281339363. Choose your preferences below to start a conversation.</p><form onSubmit={submitBooking}><label htmlFor="booking-name">Full name<input id="booking-name" autoComplete="name" value={name} onChange={e=>{setName(e.target.value);e.target.setCustomValidity('');}} required maxLength={100}/></label><label htmlFor="booking-phone">Phone number<input id="booking-phone" type="tel" autoComplete="tel" value={phone} onChange={e=>{setPhone(e.target.value);e.target.setCustomValidity(e.target.value.replace(/\D/g,'').length<7?'Enter a valid phone number.':'');}} required maxLength={20}/></label><label htmlFor="booking-email">Email address <span>(optional)</span><input id="booking-email" type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} maxLength={254}/></label><label>Interested in<select name="program" value={program} onChange={e=>setProgram(e.target.value)}><option>Initial movement assessment</option>{programs.map(p=><option key={p.name}>{p.name}</option>)}</select></label><div className="booking-datetime"><label htmlFor="booking-date">Date<input id="booking-date" name="date" type="date" value={date} min={today} onChange={e=>setDate(e.target.value)} required aria-describedby="booking-date-hint"/></label><label htmlFor="booking-time">Time<input id="booking-time" name="time" type="time" value={time} onChange={e=>setTime(e.target.value)} required aria-describedby="booking-time-hint"/></label></div><p id="booking-date-hint" className="form-note">Use the calendar to choose a day, month, and year.</p><p id="booking-time-hint" className="form-note">Appointment times are in India Standard Time (IST). Availability will be confirmed by the clinic.</p><button className="solid-button" type="submit">Continue on WhatsApp <span aria-hidden="true">&#8599;</span></button><p className="form-note">Review and send your message in WhatsApp. Your session is confirmed only after the clinic replies.</p><button className="text-link" type="button" onClick={save}>Save enquiry draft <span>↓</span></button><p className="form-note" role="status">{saved?'Your draft has been downloaded. Nothing has been sent and no appointment is booked.':'Your details are included in the WhatsApp message. This website does not store them.'}</p></form></>:<><p className="eyebrow">{content.tag}</p><h2 id="dialog-title">{content.name}</h2><p>{content.description}</p><ul>{content.points.map(p=><li key={p}>{p}</li>)}</ul><button className="text-link" onClick={onBook}>Discuss your first session ↗</button></>}</div></dialog>;
}
