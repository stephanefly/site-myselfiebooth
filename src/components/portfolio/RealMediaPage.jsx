import Layout from "../Layout";
import { siteConfig } from "../../data/site";
import { instagramMedia, instagramUrl } from "../../data/instagramMedia";
import { eventArchivePhotos, eventArchiveVideos } from "../../data/eventArchive";
import {
  portfolioDetailImages,
  portfolioMotionGifs,
  portfolioVideos,
} from "../../data/portfolioMedia";

const teamRealMedia = [
  {
    sourceId: "team-equipe-myselfiebooth",
    image: "/images/equipe/equipe-myselfiebooth.webp",
    title: "L'équipe MySelfieBooth",
    category: "Équipe",
    alt: "Équipe MySelfieBooth lors d'une prestation événementielle",
  },
  {
    sourceId: "team-bras-droit-terrain",
    image: "/images/equipe/bras-droit-terrain.webp",
    title: "Équipe terrain MySelfieBooth",
    category: "Équipe",
    alt: "Membre de l'équipe terrain MySelfieBooth",
  },
  {
    sourceId: "team-conception-famille",
    image: "/images/equipe/conception-en-famille.webp",
    title: "Conception en famille",
    category: "Coulisses",
    alt: "Conception d'une animation MySelfieBooth en famille",
  },
  {
    sourceId: "team-fabrication-famille",
    image: "/images/equipe/fabrication-photobooth-en-famille.webp",
    title: "Fabrication d'un Photobooth",
    category: "Coulisses",
    alt: "Fabrication d'un Photobooth MySelfieBooth en famille",
  },
  {
    sourceId: "team-premier-photobooth",
    image: "/images/equipe/premier-photobooth-en-fabrication.webp",
    title: "Premier Photobooth en fabrication",
    category: "Coulisses",
    alt: "Premier Photobooth MySelfieBooth pendant sa fabrication",
  },
  {
    sourceId: "team-stephane-route",
    image: "/images/equipe/stephane-sur-la-route.webp",
    title: "En route vers les événements",
    category: "Coulisses",
    alt: "MySelfieBooth en déplacement vers une prestation événementielle",
  },
];

const staticRealMedia = [
  ...eventArchivePhotos.map((item) => ({
    ...item,
    sourceType: "Reportage réel",
  })),
  ...portfolioDetailImages.map((item) => ({
    ...item,
    sourceType: "Réalisation réelle",
  })),
  ...teamRealMedia.map((item) => ({
    ...item,
    sourceType: "Coulisses réelles",
  })),
  ...portfolioVideos.map((item) => ({
    sourceId: `${item.sourceId}-poster`,
    image: item.poster,
    title: item.title,
    category: item.category,
    alt: `${item.title}, aperçu d'une prestation réelle MySelfieBooth`,
    sourceType: "Aperçu vidéo réel",
  })),
  ...eventArchiveVideos.map((item) => ({
    sourceId: `${item.sourceId}-poster`,
    image: item.poster,
    title: item.title,
    category: item.category,
    alt: `${item.title}, aperçu d'un reportage vidéo réel MySelfieBooth`,
    sourceType: "Aperçu vidéo réel",
  })),
];

const instagramRealMedia = instagramMedia.map((item) => ({
  sourceId: item.sourceId,
  image: item.src,
  title: item.title,
  category: item.category,
  alt: item.alt,
  href: item.href,
  sourceType: "Instagram réel",
}));

const motionRealMedia = portfolioMotionGifs.map((item) => ({
  ...item,
  sourceType: "Séquence réelle",
}));

function uniqueMedia(items) {
  const seen = new Set();

  return items.filter((item) => {
    if (!item.image || item.image.includes("/ai-from-real/") || seen.has(item.image)) {
      return false;
    }

    seen.add(item.image);
    return true;
  });
}

const allRealMedia = uniqueMedia([
  ...staticRealMedia,
  ...instagramRealMedia,
  ...motionRealMedia,
]);

const staticCount = uniqueMedia(staticRealMedia).length;
const instagramCount = uniqueMedia(instagramRealMedia).length;
const heroImage = eventArchivePhotos[0]?.image || allRealMedia[0]?.image;

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Photos réelles MySelfieBooth",
  url: `${siteConfig.baseUrl}/realisations/`,
  description:
    "Galerie de photos, reportages, coulisses et extraits Instagram issus de prestations réelles MySelfieBooth.",
  isPartOf: {
    "@id": `${siteConfig.baseUrl}/#website`,
  },
};

function MediaCard({ item, index }) {
  const image = (
    <img
      src={item.image}
      alt={item.alt || `${item.title}, réalisation réelle MySelfieBooth`}
      loading={index < 3 ? "eager" : "lazy"}
      decoding="async"
      width="720"
      height="900"
    />
  );

  return (
    <figure className="real-media-card">
      {item.href ? (
        <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.title} sur Instagram`}>
          {image}
        </a>
      ) : image}
      <figcaption>
        <span>{item.sourceType}</span>
        <small>{item.category}</small>
        <strong>{item.title}</strong>
      </figcaption>
    </figure>
  );
}

export default function RealMediaPage() {
  return (
    <Layout
      metaProps={{
        title: "Photos réelles Photobooth, 360 & Vogue | MySelfieBooth",
        description:
          "Découvrez les vraies prestations MySelfieBooth : Photobooth, Miroirbooth, 360 Booth, Vogue Booth, mariages, entreprises et coulisses issues de nos événements et d'Instagram.",
        ogImage: heroImage,
        ogImageAlt: "Prestation réelle MySelfieBooth lors d'un événement",
        ogUrl: "/realisations/",
        includeOrganization: true,
        jsonLd: [pageJsonLd],
      }}
    >
      <main className="real-media-page">
        <header className="real-media-hero">
          <div className="real-media-container hero-grid">
            <div>
              <p className="eyebrow">100 % terrain</p>
              <h1>Nos vraies prestations, en images.</h1>
              <p className="hero-copy">
                Cette galerie rassemble les médias réels déjà disponibles dans notre banque :
                événements, machines, tirages, coulisses et contenus issus de notre Instagram.
                Les créations IA sont volontairement exclues de cette page.
              </p>
              <div className="hero-stats" aria-label="Contenu de la galerie">
                <div><strong>{allRealMedia.length}</strong><span>médias réels affichés</span></div>
                <div><strong>{instagramCount}</strong><span>moments Instagram</span></div>
                <div><strong>{staticCount}</strong><span>photos et aperçus terrain</span></div>
              </div>
              <div className="hero-actions">
                <a href="#galerie">Voir toute la galerie</a>
                <a className="secondary" href={siteConfig.quoteUrl}>Demander un devis</a>
              </div>
            </div>
            {heroImage ? (
              <figure className="hero-image">
                <img
                  src={heroImage}
                  alt="Photobooth MySelfieBooth installé pendant une prestation réelle"
                  width="900"
                  height="1125"
                  fetchPriority="high"
                />
              </figure>
            ) : null}
          </div>
        </header>

        <section className="real-media-intro">
          <div className="real-media-container intro-grid">
            <article>
              <span>Photobooth</span>
              <h2>Des installations réelles</h2>
              <p>Machines, décors, impressions et mise en place vus sur de vrais événements.</p>
            </article>
            <article>
              <span>360 · Vogue · Miroir</span>
              <h2>Des invités en action</h2>
              <p>Les expériences sont montrées dans les conditions où elles sont réellement utilisées.</p>
            </article>
            <article>
              <span>Instagram</span>
              <h2>Notre banque sociale intégrée</h2>
              <p>Les séquences Instagram déjà archivées sont présentes ici avec un lien vers le profil officiel.</p>
            </article>
          </div>
        </section>

        <section id="galerie" className="real-media-gallery-section">
          <div className="real-media-container">
            <div className="section-heading">
              <p className="eyebrow">Galerie complète</p>
              <h2>{allRealMedia.length} médias réels, sans doublon.</h2>
              <p>
                Chaque fichier n'est affiché qu'une fois dans cette galerie. Les images sont chargées progressivement
                pour conserver de bonnes performances sur mobile.
              </p>
            </div>
            <div className="real-media-grid">
              {allRealMedia.map((item, index) => (
                <MediaCard key={`${item.sourceId}-${item.image}`} item={item} index={index} />
              ))}
            </div>
            <div className="instagram-cta">
              <div>
                <p className="eyebrow">Encore plus de contenu</p>
                <h2>Suivre les nouvelles prestations sur Instagram</h2>
              </div>
              <a href={instagramUrl} target="_blank" rel="noreferrer">@myselfiebooth_paris</a>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="real-media-container">
            <p className="eyebrow">Votre événement</p>
            <h2>Choisissez l'expérience que vous voulez reproduire.</h2>
            <a href={siteConfig.quoteUrl}>Obtenir mon devis</a>
          </div>
        </section>
      </main>

      <style jsx>{`
        .real-media-page {
          background: #f7f4ed;
          color: #17130a;
        }

        .real-media-container {
          width: min(1180px, calc(100% - 36px));
          margin: 0 auto;
        }

        .real-media-hero {
          padding: 72px 0 48px;
          background: #11100d;
          color: #fff;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 48px;
          align-items: center;
        }

        .eyebrow {
          margin: 0 0 12px;
          color: #c9a24d;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        h1,
        h2,
        p {
          margin-top: 0;
        }

        h1 {
          max-width: 760px;
          margin-bottom: 20px;
          font-size: clamp(2.5rem, 5vw, 5.2rem);
          line-height: 0.96;
          letter-spacing: -0.045em;
        }

        .hero-copy {
          max-width: 720px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 1.08rem;
          line-height: 1.7;
        }

        .hero-image {
          margin: 0;
          overflow: hidden;
          border-radius: 24px;
          aspect-ratio: 4 / 5;
          background: #27231b;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin: 28px 0;
        }

        .hero-stats div {
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
        }

        .hero-stats strong,
        .hero-stats span {
          display: block;
        }

        .hero-stats strong {
          font-size: 1.6rem;
        }

        .hero-stats span {
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.78rem;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero-actions a,
        .final-cta a,
        .instagram-cta a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 20px;
          border-radius: 999px;
          background: #c9a24d;
          color: #11100d;
          font-weight: 900;
          text-decoration: none;
        }

        .hero-actions a.secondary {
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: transparent;
          color: #fff;
        }

        .real-media-intro {
          padding: 28px 0 0;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .intro-grid article {
          padding: 24px;
          border: 1px solid rgba(23, 19, 10, 0.09);
          border-radius: 20px;
          background: #fff;
        }

        .intro-grid span {
          color: #9a7721;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .intro-grid h2 {
          margin: 8px 0 9px;
          font-size: 1.25rem;
        }

        .intro-grid p {
          margin-bottom: 0;
          color: #6a6256;
          line-height: 1.55;
        }

        .real-media-gallery-section {
          padding: 72px 0;
        }

        .section-heading {
          max-width: 760px;
          margin-bottom: 30px;
        }

        .section-heading h2,
        .instagram-cta h2,
        .final-cta h2 {
          margin-bottom: 12px;
          font-size: clamp(2rem, 4vw, 3.6rem);
          line-height: 1.02;
          letter-spacing: -0.035em;
        }

        .section-heading p:not(.eyebrow) {
          color: #6a6256;
          line-height: 1.65;
        }

        .real-media-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }

        .real-media-card {
          margin: 0;
          overflow: hidden;
          border: 1px solid rgba(23, 19, 10, 0.08);
          border-radius: 18px;
          background: #fff;
          content-visibility: auto;
          contain-intrinsic-size: 360px 520px;
        }

        .real-media-card > a {
          display: block;
        }

        .real-media-card img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 5;
          display: block;
          object-fit: cover;
          background: #e9e2d6;
        }

        .real-media-card figcaption {
          display: grid;
          gap: 4px;
          padding: 14px 15px 16px;
        }

        .real-media-card figcaption span {
          color: #9a7721;
          font-size: 0.67rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .real-media-card figcaption small {
          color: #81796c;
          font-size: 0.74rem;
        }

        .real-media-card figcaption strong {
          font-size: 0.95rem;
          line-height: 1.3;
        }

        .instagram-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 44px;
          padding: 30px;
          border-radius: 24px;
          background: #17130a;
          color: #fff;
        }

        .instagram-cta h2 {
          max-width: 720px;
          margin-bottom: 0;
          font-size: clamp(1.8rem, 3vw, 3rem);
        }

        .instagram-cta a {
          flex: 0 0 auto;
        }

        .final-cta {
          padding: 72px 0;
          text-align: center;
          background: #e9e1d2;
        }

        .final-cta h2 {
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 1000px) {
          .real-media-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 820px) {
          .hero-grid,
          .intro-grid {
            grid-template-columns: 1fr;
          }

          .hero-image {
            max-height: 620px;
          }

          .real-media-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .instagram-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .real-media-container {
            width: min(100% - 24px, 1180px);
          }

          .real-media-hero {
            padding-top: 48px;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .real-media-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .real-media-card figcaption {
            padding: 10px;
          }

          .real-media-card figcaption strong {
            font-size: 0.82rem;
          }

          .real-media-card figcaption span {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </Layout>
  );
}
