import Header from '../components/Header';
import Footer from '../components/Footer';
import {contact} from '../contact';
import candles from '../assets/body-balancing/candles-flowers.jpg';
import './Contact.css';

export default function Contact() {
 return <div className="contact-page" id="top">
  <a className="skip-link" href="#main">Skip to content</a>
  <Header/>
  <main id="main">
   <section className="contact-intro" aria-labelledby="contact-title">
    <p className="eyebrow">LET’S FIND YOUR WAY FORWARD</p>
    <h1 id="contact-title">Let’s talk.<br/><span>Let’s get moving.</span></h1>
    <p>Have a question about physiotherapy or your first visit?<br/>Get in touch. We’re here to help you take the next step.</p>
   </section>
   <section className="contact-methods" aria-label="Contact details">
    <div className="contact-method"><span className="contact-number">01</span><div><h2>Give us a call</h2><p>Speak with us about your visit.</p><a className="contact-phone" href={contact.phoneHref}>{contact.phone}<span aria-hidden="true">↗</span></a></div></div>
    <div className="contact-method"><span className="contact-number">02</span><div><h2>WhatsApp</h2><p>Book a session or ask about availability.</p><a className="text-link" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">Message on WhatsApp <span aria-hidden="true">↗</span></a><p className="contact-small">+91 {contact.whatsappNumber}</p></div></div>
    <div className="contact-method"><span className="contact-number">03</span><div><h2>Twitter / X</h2><p>Stay connected with our clinic.</p>{contact.twitterHref?<a className="text-link" href={contact.twitterHref} target="_blank" rel="noopener noreferrer">Follow us on X <span aria-hidden="true">↗</span></a>:<p className="social-pending">Profile link coming soon.</p>}</div></div>
   </section>
   <section className="contact-photo" aria-label="A calm space for your recovery"><img src={candles} alt="Candles and orchids in a warm, calming setting" width="1918" height="540"/><div><p className="eyebrow">A LITTLE MOVEMENT. A NEW BEGINNING.</p><h2>Your next step<br/>starts with a conversation.</h2><a href={contact.phoneHref} className="text-link">Call {contact.phone} <span aria-hidden="true">↗</span></a></div></section>
  </main>
  <Footer/>
 </div>;
}
