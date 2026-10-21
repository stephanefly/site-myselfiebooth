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
      <div className="visual-container">
        <p className="visual-eyebrow">Votre lieu de réception</p>
        <h2 id="service-area-title">À Paris et dans toute l’Île-de-France</h2>
        <p>Nous préparons la livraison et l’installation selon votre salle, les horaires et les accès. Votre événement se déroule ailleurs en France ? Nous étudions aussi votre projet selon la date et la logistique.</p>
        <a className="service-area-primary" href="/zones-intervention/">
          Voir nos zones d’intervention <span aria-hidden="true">↗</span>
        </a>
        <details className="service-area-details">
          <summary>Le détail par département</summary>
          <nav className="service-area-links" aria-label="Départements d’intervention">
            {areas.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
        </details>
      </div>
      <style jsx>{`
        .service-area-primary { display: inline-flex; align-items: center; gap: 20px; min-height: 44px; margin: 12px 0 28px; color: inherit; font-size: 14px; font-weight: 600; text-decoration: underline; text-underline-offset: 6px; }
        .service-area-details { max-width: 760px; border-top: 1px solid rgba(116, 110, 91, 0.3); }
        .service-area-details summary { min-height: 52px; padding: 14px 0; font-size: 13px; line-height: 1.7; cursor: pointer; }
        .service-area-details nav { padding-bottom: 16px; }
        .service-area-details a { min-height: 44px; display: inline-flex; align-items: center; }
        .service-area-primary:focus-visible, summary:focus-visible { outline: 2px solid currentColor; outline-offset: 5px; }
      `}</style>
    </section>
  );
}
