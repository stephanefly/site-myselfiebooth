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
  return <section className="service-area-section" aria-labelledby="service-area-title">
    <div className="visual-container">
      <p className="visual-eyebrow">Votre lieu de réception</p>
      <h2 id="service-area-title">À Paris et dans toute l’Île-de-France</h2>
      <p>Photobooth, miroir photo, vidéo 360, Vogue Booth et livre d’or audio : nous préparons l’installation selon votre salle, les horaires et les accès. Le devis précise le déplacement et les options.</p>
      <nav className="service-area-links" aria-label="Départements d’intervention">{areas.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <p><strong>Votre événement se déroule ailleurs en France ?</strong> Nous étudions le projet selon la date, les machines demandées et la logistique. <a href="/zones-intervention/">Consulter nos zones d’intervention</a>.</p>
    </div>
  </section>;
}
