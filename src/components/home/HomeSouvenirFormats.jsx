import { instagramUrl } from "../../data/instagramMedia";
import styles from "./HomeSouvenirFormats.module.css";

const formats = [
  {
    key: "porte-cles",
    title: "Porte-clés photo",
    text: "Votre photo en petit format, à emporter avec vos clés.",
    type: "video",
    video: "/videos/home-souvenirs/porte-cles-photo.mp4",
    poster: "/images/event-archive/porte-cles-fabrication.webp",
    href: "/prestations/#options",
    linkLabel: "Voir les options",
  },
  {
    key: "magnets",
    title: "Magnets photo",
    text: "Vos portraits transformés en magnets à garder bien en vue.",
    type: "image",
    image: "/images/option-magnet-premium.webp",
    alt: "Quatre magnets photo personnalisés présentés sur un réfrigérateur",
    href: "/prestations/#options",
    linkLabel: "Découvrir les magnets",
  },
  {
    key: "360-mobile",
    title: "Votre vidéo 360 sur téléphone",
    text: "Un clip à retrouver sur mobile et à partager après votre passage.",
    type: "phone",
    video: "/videos/home-souvenirs/video-360-mobile.mp4",
    poster: "/images/event-archive/video-posters/360-red-carpet.webp",
    href: "/prestations/videobooth/",
    linkLabel: "Voir le 360 Booth",
  },
  {
    key: "impression-vogue",
    title: "Impression Vogue Booth",
    text: "Le portrait façon magazine en tirage papier, selon l’option choisie.",
    type: "print",
    image: "/images/collection-2026/portrait-vogue-booth-900.webp",
    alt: "Portrait Vogue Booth personnalisé pour un mariage, présenté dans un cadre papier",
    href: "/prestations/voguebooth/",
    linkLabel: "Voir le Vogue Booth",
  },
];

export default function HomeSouvenirFormats() {
  return (
    <section className={styles.section} aria-labelledby="souvenirs-formats-title">
      <h3 id="souvenirs-formats-title" className={styles.title}>À garder ou à partager</h3>
      <div className={styles.grid}>
        {formats.map((format) => (
          <article className={styles.card} key={format.key} data-souvenir-format={format.key}>
            <div className={styles.media}>
              {format.video ? (
                <div className={format.type === "phone" ? styles.phone : styles.videoFrame}>
                  <video controls muted loop playsInline preload="none" poster={format.poster} aria-label={format.title} data-no-load-motion>
                    <source src={format.video} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className={format.type === "print" ? styles.paper : styles.imageFrame}>
                  <img src={format.image} alt={format.alt} width="900" height="900" loading="lazy" decoding="async" data-no-load-motion />
                </div>
              )}
            </div>
            <div className={styles.body}>
              <h4>{format.title}</h4>
              <p>{format.text}</p>
              <a href={format.href}>{format.linkLabel}</a>
            </div>
          </article>
        ))}
      </div>
      <a className={styles.instagram} href={instagramUrl} target="_blank" rel="noopener noreferrer">D’autres idées sur notre Instagram ↗</a>
    </section>
  );
}
