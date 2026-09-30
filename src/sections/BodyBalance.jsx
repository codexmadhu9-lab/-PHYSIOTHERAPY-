import therapy from '../assets/body-balancing/body-therapy.jpg';
import candles from '../assets/body-balancing/candles-flowers.jpg';
import './BodyBalance.css';

export default function BodyBalance() {
  return <section id="physiotherapy" className="body-balancing" aria-label="Body balancing and relaxation therapies">
    <article className="therapy-panel therapy-panel--body" aria-labelledby="body-therapy-title">
      <img className="therapy-background" src={therapy} alt="Hands-on soft tissue treatment of the lower leg" width="1920" height="426" loading="lazy" />
      <div className="therapy-panel-inner"><div className="therapy-copy" data-reveal>
        <h2 id="body-therapy-title">Holistic Body Balancing Therapy</h2>
        <p>Explore a more comfortable way to move. Individual assessment considers your mobility, strength and everyday movement patterns. Hands-on care and guided exercises can form part of a personalised plan to support your recovery and body awareness.</p>
      </div></div>
    </article>
    <article className="therapy-panel therapy-panel--aroma" aria-labelledby="aroma-therapy-title">
      <img className="therapy-background" src={candles} alt="Lit ivory candles, purple orchids and green diffuser reeds on a warm amber background" width="1918" height="540" loading="lazy" />
      <div className="therapy-panel-inner"><div className="therapy-copy" data-reveal>
        <h2 id="aroma-therapy-title">Holistic Deep Tissue &amp; Aromatherapy</h2>
        <p>A quiet moment to unwind. Soft tissue care is tailored to your comfort, with time to discuss your preferences and any sensitivities. A warm, calming setting creates space to pause, reconnect with your body and complement your individual movement and recovery plan.</p>
      </div></div>
    </article>
  </section>;
}
