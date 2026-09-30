import {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailDialog from '../components/DetailDialog';
import {doctors} from '../doctors';
import './Doctors.css';

function DoctorProfile({doctor,index}) {
 const [hovered,setHovered]=useState(false);
 const [focused,setFocused]=useState(false);
 const [opened,setOpened]=useState(false);
 const expanded=hovered||focused||opened;
 return <article className="doctor-profile">
  <button className={`doctor-portrait${expanded?' is-revealed':''}`} type="button" aria-label={`About ${doctor.name}, ${doctor.specialty}`} aria-expanded={expanded} aria-controls={`${doctor.id}-description`}
   onPointerEnter={e=>{if(e.pointerType==='mouse')setHovered(true);}}
   onPointerLeave={()=>setHovered(false)}
   onFocus={e=>setFocused(e.currentTarget.matches(':focus-visible'))}
   onBlur={()=>{setFocused(false);setOpened(false);}}
   onClick={()=>setOpened(value=>!value)}
   onKeyDown={e=>{if(e.key==='Escape'){setHovered(false);setFocused(false);setOpened(false);}}}>
   <img src={doctor.image} alt={`AI-generated illustrative portrait for ${doctor.name}`} width="768" height="1152" loading={index<3?'eager':'lazy'}/>
   <span className="doctor-index">{String(index+1).padStart(2,'0')}</span>
   <span className="doctor-reveal-icon" aria-hidden="true">{expanded?'−':'+'}</span>
   <span className="doctor-description" id={`${doctor.id}-description`} aria-hidden={!expanded}>
    <span className="eyebrow">CARE & EXPERTISE</span>
    {doctor.description.map(line=><span className="doctor-description-line" key={line}>{line}</span>)}
   </span>
   <span className="doctor-reveal-hint" aria-hidden="true">{expanded?'ABOUT THIS SPECIALTY':'EXPLORE PROFILE'}</span>
  </button>
  <div className="doctor-caption"><p className="doctor-specialty">{doctor.specialty}</p><h2>{doctor.name}</h2><p className="doctor-qualification">{doctor.qualification}</p></div>
 </article>;
}

export default function Doctors(){
 const [booking,setBooking]=useState(false);
 return <div className="doctors-page" id="top"><a className="skip-link" href="#main">Skip to content</a><Header/>
  <main id="main"><section className="doctors-intro"><p className="eyebrow">DOCTORS & SPECIALISTS</p><div className="doctors-intro-grid"><h1>Expertise for every<br/><span>way you move.</span></h1><p>Different specialties. A shared focus on movement, recovery, and everyday confidence.<br/><br/>Explore the people and areas of care below.</p></div><div className="doctors-intro-bottom"><p>Illustrative profiles supplied as examples. Portraits are AI-generated and do not represent verified clinic staff.</p><span>Hover, focus, or tap a portrait to explore ↗</span></div></section>
  <section className="doctors-grid" aria-label="Physiotherapist profiles">{doctors.map((doctor,index)=><DoctorProfile key={doctor.id} doctor={doctor} index={index}/>)}</section>
  <section className="doctors-cta"><p className="eyebrow">FIND YOUR NEXT STEP</p><h2>Care that starts<br/>with understanding you.</h2><p>Discuss your needs with the clinic to find the right care.</p><button className="text-link" onClick={()=>setBooking(true)}>Enquire about a session <span>↗</span></button></section>
  </main><Footer/>{booking&&<DetailDialog content="booking" onClose={()=>setBooking(false)}/>}
 </div>;
}
