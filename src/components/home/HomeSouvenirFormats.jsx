import { instagramUrl } from "../../data/instagramMedia";
import styles from "./HomeSouvenirFormats.module.css";

const formats = [
  {
    key: "porte-cles",
    title: "Porte-clés photo",
    text: "Votre photo en petit format, à emporter avec vos clés.",
    image: "/images/editorial-ai/accueil-souvenir-porte-cles.webp",
    alt: "Porte-clés photo transparents avec des portraits de mariage",
    href: "/prestations/#options",
    linkLabel: "Voir les options",
  },
  {
    key: "magnets",
    title: "Magnets photo",
    text: "Vos portraits transformés en magnets à garder bien en vue.",
    image: "/images/editorial-ai/accueil-souvenir-magnets.webp",
    alt: "Quatre magnets photo personnalisés sur un réfrigérateur crème",
    href: "/prestations/#options",
    linkLabel: "Découvrir les magnets",
  },
  {
    key: "360-mobile",
    title: "Votre vidéo 360 sur téléphone",
    text: "Un clip à retrouver sur mobile et à partager après votre passage.",
    image: "/images/editorial-ai/accueil-souvenir-360-mobile.webp",
    alt: "Téléphone affichant une vidéo 360 de mariage",
    href: "/prestations/videobooth/",
    linkLabel: "Voir le 360 Booth",
  },
  {
    key: "impression-vogue",
    title: "Impression Vogue Booth",
    text: "Le portrait façon magazine en tirage papier, selon l’option choisie.",
    image: "/images/editorial-ai/accueil-souvenir-impression-vogue.webp",
    alt: "Tirages papier Vogue Booth avec des portraits façon magazine",
    href: "/prestations/voguebooth/",
    linkLabel: "Voir le Vogue Booth",
  },
  {
    key: "phonebooth",
    title: "Phonebooth audio",
    text: "Les voix, les rires et les petits mots de vos invités à réécouter.",
    image: "/images/ai-from-real/accueil-souvenir-phonebooth.webp",
    alt: "Téléphone rétro crème avec combiné décroché sur une table fleurie",
    href: "/options/phonebooth/",
    linkLabel: "Découvrir le Phonebooth",
  },
  {
    key: "livre-or-photo",
    title: "Livre d’or photo",
    text: "Vos tirages et leurs messages réunis dans un album à feuilleter.",
    image: "/images/ai-from-real/accueil-souvenir-livre-or-photo.webp",
    alt: "Livre d’or ouvert avec photos de mariage et messages manuscrits dorés",
    href: "/prestations/#options",
    linkLabel: "Voir les options",
  },
  {
    key: "livre-or-video",
    title: "Livre d’or vidéo",
    text: "Des messages filmés pour retrouver les visages et les émotions de la soirée.",
    image: "/images/ai-from-real/accueil-souvenir-livre-or-video.webp",
    alt: "Borne blanche de livre d’or vidéo avec caméra, écran et pupitre à microphone",
    href: "/prestations/#options",
    linkLabel: "Découvrir le livre d’or vidéo",
  },
  {
    key: "panneau-fontaine",
    title: "Panneau fontaine",
    text: "Un accueil fleuri et lumineux, avec un rideau d’eau pour habiller votre entrée.",
    image: "/images/ai-from-real/accueil-souvenir-panneau-fontaine.webp",
    alt: "Panneau fontaine blanc de bienvenue avec rideau d’eau et compositions florales",
    href: "/options/panneau/",
    linkLabel: "Découvrir le panneau",
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
              <img src={format.image} alt={format.alt} width="900" height="900" loading="lazy" decoding="async" data-no-load-motion />
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
