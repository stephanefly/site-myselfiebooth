const areas = [
  ["Paris · 75", "/paris/"],
  ["Seine-et-Marne · 77", "/location-photobooth/seine-et-marne/"],
  ["Yvelines · 78", "/location-photobooth/yvelines/"],
  ["Essonne · 91", "/location-photobooth/essonne/"],
  ["Hauts-de-Seine · 92", "/location-photobooth/hauts-de-seine/"],
  ["Seine-Saint-Denis · 93", "/location-photobooth/seine-saint-denis/"],
  ["Val-de-Marne · 94", "/location-photobooth/val-de-marne/"],
  ["Val-d’Oise · 95", "/location-photobooth/val-doise/"],
];

export default function ServiceAreaLinks() {
  return (
    <section className="service-area-section" aria-labelledby="service-area-title">
      <div className="visual-container service-area-layout">
        <div className="service-area-copy">
        <p className="visual-eyebrow">Votre lieu de réception</p>
        <h2 id="service-area-title">À Paris et dans toute l’Île-de-France</h2>
        <p>Nous préparons la livraison et l’installation selon votre salle, les horaires et les accès. Votre événement se déroule ailleurs en France ? Nous étudions aussi votre projet selon la date et la logistique.</p>
        <a className="service-area-primary" href="/zones-intervention/">
          Voir nos zones d’intervention <span aria-hidden="true">↗</span>
        </a>
        </div>
        <details className="service-area-details" data-navigation-disclosure open>
          <summary>Nos départements d’intervention <span aria-hidden="true">+</span></summary>
          <nav className="service-area-links" aria-label="Départements d’intervention">
            {areas.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
        </details>
      </div>
      <style jsx>{`
        .service-area-section { padding: 72px 0; background: #fffdf9; text-align: left; border-top: 1px solid #e7dfd1; }
        .service-area-layout { display: grid; grid-template-columns: 1.1fr 1fr; gap: 40px 80px; align-items: center; }
        .service-area-copy { min-width: 0; }
        .service-area-copy .visual-eyebrow { color: #806231; font-size: .72rem; font-weight: 700; letter-spacing: .16em; margin: 0 0 16px; }
        .service-area-copy h2 { max-width: 540px; margin: 0 0 20px; color: #171717; font-size: clamp(1.8rem, 3vw, 2.6rem); line-height: 1.15; letter-spacing: -.035em; text-align: left; }
        .service-area-copy > p:not(.visual-eyebrow) { margin: 0; max-width: 530px; color: #6f6a61; font-size: .95rem; line-height: 1.8; }
        .service-area-primary { display: inline-flex; align-items: center; gap: 24px; min-height: 48px; margin-top: 20px; color: #171717; font-size: .86rem; font-weight: 700; text-decoration: none; border-bottom: 1px solid #b89445; }
        .service-area-primary span { font-size: 1.2rem; }
        .service-area-details { align-self: stretch; padding: 28px; background: #f7f3ea; border: 1px solid #e7dfd1; border-radius: 16px; }
        .service-area-details summary { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 48px; color: #171717; font-size: .95rem; font-weight: 700; list-style: none; cursor: pointer; }
        summary::-webkit-details-marker { display: none; }
        summary span { font-size: 1.4rem; font-weight: 400; }
        details[open] summary span { transform: rotate(45deg); }
        .service-area-links { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 24px; margin: 16px 0 0; }
        .service-area-links a { display: flex; align-items: center; min-height: 48px; padding: 10px 0; border: 0; border-bottom: 1px solid #ded5c3; border-radius: 0; color: #514c44; background: transparent; font-size: .8rem; font-weight: 500; }
        .service-area-links a:hover { color: #171717; background: transparent; border-bottom-color: #806231; }
        a:focus-visible, summary:focus-visible { outline: 2px solid #806231; outline-offset: 5px; }
        @media (max-width: 760px) {
          .service-area-section { padding: 44px 0; }
          .service-area-layout { grid-template-columns: 1fr; gap: 28px; }
          .service-area-details { padding: 16px 22px; }
        }
      `}</style>
    </section>
  );
}
