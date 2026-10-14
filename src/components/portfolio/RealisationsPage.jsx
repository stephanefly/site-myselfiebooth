import Layout from "../Layout";
import { siteConfig } from "../../data/site";
import { instagramMedia, instagramUrl } from "../../data/instagramMedia";
import { eventArchivePhotos, eventArchiveVideos } from "../../data/eventArchive";
import {
  portfolioDetailImages,
  portfolioMotionGifs,
  portfolioVideos,
} from "../../data/portfolioMedia";

const uniqueMedia = (items) => {
  const seen = new Set();
  return items.filter((item) => {
    if (!item.image || item.image.includes("/ai-from-real/") || seen.has(item.image)) return false;
    seen.add(item.image);
    return true;
  });
};

const selectedVideoPosters = [
  "duo-photobooth-miroir",
  "tirages-gala",
  "personnalisation-tirages",
  "miroirbooth-invites",
  "photobooth-noel",
];

const selectedArchivePosters = [
  "360-red-carpet",
  "maries-photobooth",
  "miroirbooth-installation",
  "voguebooth-soiree",
];

const selectedInstagramFiles = [
  "air360-en-action.gif",
  "animation-miroirbooth.gif",
  "animation-impression.gif",
  "booth-360-sephora.gif",
  "animation-vogue-invites.gif",
  "tirages-gala.gif",
];

const rawMedia = uniqueMedia([
  ...eventArchivePhotos.map((item) => ({ ...item, sourceType: "Reportage réel" })),
  ...portfolioDetailImages.map((item) => ({ ...item, sourceType: "Réalisation réelle" })),
  ...portfolioVideos
    .filter((item) => selectedVideoPosters.includes(item.slug))
    .map((item) => ({
      sourceId: item.sourceId + "-poster",
      image: item.poster,
      title: item.title,
      category: item.category,
      alt: item.title + ", aperçu d'une prestation réelle MySelfieBooth",
      sourceType: "Aperçu vidéo réel",
    })),
  ...eventArchiveVideos
    .filter((item) => selectedArchivePosters.includes(item.slug))
    .map((item) => ({
      sourceId: item.sourceId + "-poster",
      image: item.poster,
      title: item.title,
      category: item.category,
      alt: item.title + ", aperçu d'un reportage réel MySelfieBooth",
      sourceType: "Aperçu vidéo réel",
    })),
  ...instagramMedia
    .filter((item) => selectedInstagramFiles.includes(item.file))
    .map((item) => ({
      sourceId: item.sourceId,
      image: item.src,
      title: item.title,
      category: item.category,
      alt: item.alt,
      href: item.href,
      sourceType: "Instagram réel",
    })),
  ...portfolioMotionGifs.map((item) => ({ ...item, sourceType: "Séquence réelle" })),
]);

const hero = {
  image: "/images/event-archive/anogini-photobooth-01.webp",
  alt: "Photobooth MySelfieBooth installé à côté des tables d'une réception",
  title: "Le Photobooth en situation",
};

const machineImages = [
  {
    image: "/images/miroirbooth.webp",
    title: "Le Miroirbooth à cadre doré",
    category: "Miroirbooth",
    alt: "Miroirbooth doré installé dans une salle de réception",
    sourceType: "Installation réelle",
  },
  {
    image: "/images/360booth.webp",
    title: "La plateforme vidéo 360",
    category: "360 Booth",
    alt: "Plateforme 360 Booth avec éclairage et rideaux de réception",
    sourceType: "Installation réelle",
  },
  {
    image: "/images/airbooth.webp",
    title: "La structure Air360 Booth",
    category: "Air360 Booth",
    alt: "Structure gonflable Air360 Booth montée pour un événement",
    sourceType: "Installation réelle",
  },
  {
    image: "/images/vogue-real/vogue-booth-mariage-card.webp",
    title: "Le studio Vogue Booth",
    category: "Vogue Booth",
    alt: "Vogue Booth préparé pour les portraits des mariés",
    sourceType: "Installation réelle",
  },
];

const printImages = [
  {
    image: "/images/event-archive/brice-tirages.webp",
    title: "Les tirages remis aux mariés",
    category: "Tirages photo",
    alt: "Tirages photo personnalisés disposés pour les invités d'un mariage",
    sourceType: "Souvenir imprimé",
  },
  {
    image: "/images/realisations-machines/tirages-gala.webp",
    title: "La bande photo du gala",
    category: "Tirages photo",
    alt: "Bande de tirages personnalisée du Gala des Juristes",
    sourceType: "Souvenir imprimé",
  },
  {
    image: "/images/realisations-machines/personnalisation-tirages.webp",
    title: "Différents cadres personnalisés",
    category: "Personnalisation",
    alt: "Exemples de tirages personnalisés pour plusieurs réceptions",
    sourceType: "Souvenir imprimé",
  },
];

const highlightedImages = new Set([
  hero.image,
  ...machineImages.map((item) => item.image),
  ...printImages.map((item) => item.image),
]);
const gallery = rawMedia.filter((item) => !highlightedImages.has(item.image));
const displayedCount = 2 + machineImages.length + printImages.length + gallery.length;

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Réalisations réelles : photobooth, machines et tirages",
  url: siteConfig.baseUrl + "/realisations/",
  description:
    "Galerie de réalisations réelles MySelfieBooth : machines installées, invités en action et tirages personnalisés.",
  isPartOf: { "@id": siteConfig.baseUrl + "/#website" },
};

function MediaCard({ item, index, variant = "gallery" }) {
  const photo = (
    <img
      src={item.image}
      alt={item.alt || item.title}
      loading={index < 3 ? "eager" : "lazy"}
      decoding="async"
      width="720"
      height="900"
    />
  );

  return (
    <figure className={"real-showcase-card real-showcase-card-" + variant}>
      {item.href ? (
        <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.title + " sur Instagram"}>
          {photo}
        </a>
      ) : photo}
      <figcaption>
        <span>{item.sourceType}</span>
        <small>{item.category}</small>
        <strong>{item.title}</strong>
      </figcaption>
    </figure>
  );
}

export default function RealisationsPage() {
  return (
    <Layout
      metaProps={{
        title: "Photos réelles de Photobooth et tirages | MySelfieBooth",
        description:
          "Découvrez les machines, les invités et les tirages personnalisés de nos événements en Île-de-France : Photobooth, Miroirbooth, 360 Booth et Vogue Booth.",
        ogTitle: "Nos réalisations réelles | MySelfieBooth",
        ogDescription:
          "Photobooths installés, invités en action et souvenirs imprimés : explorez les photos réelles de nos événements.",
        ogImage: hero.image,
        ogImageAlt: hero.alt,
        ogUrl: "/realisations/",
        includeOrganization: true,
        jsonLd: [pageJsonLd],
      }}
    >
      <div className="real-showcase-page">
        <section className="real-showcase-hero">
          <div className="real-showcase-wrap real-showcase-hero-grid">
            <div className="real-showcase-hero-copy">
              <p className="real-showcase-eyebrow">Des événements vécus, des images réelles</p>
              <h1>Les machines, les invités et les souvenirs.</h1>
              <p>
                Découvrez nos installations en action et les tirages que les invités emportent chez eux.
                Toutes les images de cette galerie viennent de prestations réelles.
              </p>
              <nav className="real-showcase-jumps" aria-label="Explorer les réalisations">
                <a href="#machines">Machines</a>
                <a href="#tirages">Tirages</a>
                <a href="#galerie">Événements</a>
              </nav>
              <div className="real-showcase-actions">
                <a className="real-showcase-primary" href="/realisations-videos/">Voir les vidéos</a>
                <a className="real-showcase-secondary" href={siteConfig.quoteUrl}>Demander un devis</a>
              </div>
              <p className="real-showcase-area">Des installations préparées en Île-de-France</p>
            </div>
            <div className="real-showcase-hero-visual">
              <figure className="real-showcase-hero-photo">
                <img
                  src={hero.image}
                  alt={hero.alt}
                  width="1000"
                  height="1300"
                  fetchPriority="high"
                />
                <figcaption>{hero.title}</figcaption>
              </figure>
              <figure className="real-showcase-hero-print">
                <img
                  src="/images/event-archive/composition-tirages-reference.webp"
                  alt="Exemples de tirages photo remis aux invités"
                  width="900"
                  height="900"
                />
              </figure>
              <span className="real-showcase-count">{displayedCount}<small>photos &amp; séquences</small></span>
            </div>
          </div>
        </section>

        <section className="real-showcase-section real-showcase-machine-section" id="machines">
          <div className="real-showcase-wrap">
            <header className="real-showcase-heading">
              <p className="real-showcase-eyebrow">Sur le terrain</p>
              <h2>Chaque machine a son ambiance.</h2>
              <p>Un aperçu des installations réelles : du miroir photo à la plateforme 360.</p>
            </header>
            <div className="real-showcase-machine-grid">
              {machineImages.map((item, index) => (
                <MediaCard item={item} index={index} variant="machine" key={item.image} />
              ))}
            </div>
          </div>
        </section>

        <section className="real-showcase-section real-showcase-print-section" id="tirages">
          <div className="real-showcase-wrap">
            <header className="real-showcase-heading real-showcase-heading-row">
              <div>
                <p className="real-showcase-eyebrow">À emporter</p>
                <h2>Le résultat, imprimé sur place.</h2>
              </div>
              <p>Formats, cadres et souvenirs préparés pour chaque événement.</p>
            </header>
            <div className="real-showcase-print-grid">
              {printImages.map((item, index) => (
                <MediaCard item={item} index={index} variant="print" key={item.image} />
              ))}
            </div>
          </div>
        </section>

        <section className="real-showcase-section real-showcase-gallery-section" id="galerie">
          <div className="real-showcase-wrap">
            <header className="real-showcase-heading">
              <p className="real-showcase-eyebrow">En images</p>
              <h2>Les autres moments de nos événements.</h2>
              <p>{gallery.length} photos et séquences de reportages, de machines et de coulisses.</p>
            </header>
            <div className="real-showcase-gallery-grid">
              {gallery.map((item, index) => (
                <MediaCard item={item} index={index} key={item.sourceId + "-" + item.image} />
              ))}
            </div>
            <div className="real-showcase-instagram">
              <div>
                <p className="real-showcase-eyebrow">Les nouvelles prestations</p>
                <h2>Retrouvez-nous sur Instagram.</h2>
                <p>Les séquences intégrées à cette galerie renvoient vers le profil officiel.</p>
              </div>
              <a href={instagramUrl} target="_blank" rel="noreferrer">@myselfiebooth_paris <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="real-showcase-final">
          <div className="real-showcase-wrap">
            <p className="real-showcase-eyebrow">Votre événement</p>
            <h2>Quel souvenir aimeriez-vous créer ?</h2>
            <a href={siteConfig.quoteUrl}>Préparer mon devis <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
