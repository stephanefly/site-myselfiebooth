import visuals from "../data/premiumVisuals.json";

export function VisualImage({ name, sizes = "(max-width: 680px) 92vw, 380px", priority = false, ...props }) {
  const visual = visuals[name];
  if (!visual) return null;
  return <img src={visual.src} srcSet={visual.sources.map(item => `${item.src} ${item.width}w`).join(", ")} sizes={sizes} alt={visual.alt} width={visual.width} height={visual.height} loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : undefined} {...props} />;
}

export const serviceGalleries = {
  photobooth: [
    { name: "borne", title: "La borne photo", text: "Écran tactile, objectif et éclairage pour guider la prise de vue." },
    { name: "tirages", title: "Le souvenir imprimé", text: "Cadres graphiques et formats adaptés au thème de votre événement." },
    { name: "bandes", title: "Les bandelettes", text: "Plusieurs poses sur un même souvenir, avec votre personnalisation." },
  ],
  miroirbooth: [
    { name: "miroir", title: "Le miroir doré", text: "Un grand cadre qui fait aussi partie du décor de réception." },
    { name: "tirages", title: "Les souvenirs photo", text: "Des tirages personnalisés à prévoir dans votre formule." },
  ],
  videobooth: [{ name: "360", title: "Le dispositif vidéo 360", text: "La plateforme et le bras caméra, à installer avec un espace de circulation dégagé." }],
  voguebooth: [
    { name: "vogue", title: "La structure Vogue", text: "Façade transparente, cadre noir et rideaux blancs." },
    { name: "vogueInvite", title: "Le rendu avec vos invités", text: "Une pose dans un décor inspiré de la couverture de magazine." },
  ],
  phonebooth: [{ name: "phone", title: "Le livre d’or audio", text: "Un téléphone à cadran pour garder la voix et les messages de vos proches." }],
};

export default function VisualGallery({ items, title = "Les machines et les souvenirs, en images", id = "photos", eyebrow = "Photos de notre collection", note }) {
  if (!items?.length) return null;
  return <section id={id} className="visual-section" aria-labelledby={`${id}-title`}>
    <div className="visual-container">
      <p className="visual-eyebrow">{eyebrow}</p>
      <h2 id={`${id}-title`}>{title}</h2>
      <div className={`visual-grid visual-grid-${Math.min(items.length, 3)}`}>
        {items.map(item => <figure key={item.name}>
          <VisualImage name={item.name} />
          <figcaption><h3>{item.title}</h3><p>{item.text}</p></figcaption>
        </figure>)}
      </div>
      {note ? <p className="visual-note">{note}</p> : null}
    </div>
  </section>;
}
