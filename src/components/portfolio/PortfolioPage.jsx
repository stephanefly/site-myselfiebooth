import Layout from "../Layout";
import AiEventGallery from "../AiEventGallery";
import EventArchiveGallery from "../EventArchiveGallery";
import InstagramMediaWall from "../InstagramMediaWall";
import { breadcrumbJsonLd, siteConfig } from "../../data/site";
import {
  portfolioAiImages,
  portfolioDetailImages,
  portfolioMotionGifs,
  portfolioVideos,
} from "../../data/portfolioMedia";
import { eventArchiveVideos } from "../../data/eventArchive";
import useRevealMotion from "../../hooks/useRevealMotion";

const motionMediaCount =
  portfolioVideos.length + eventArchiveVideos.length + portfolioMotionGifs.length;

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Réalisations Photobooth, 360 Booth et Vogue Booth",
  url: `${siteConfig.baseUrl}/realisations/`,
  description:
    "Galerie de prestations MySelfieBooth en photo et en vidéo : mariages, entreprises, Photobooth, 360 Booth, Miroirbooth et Vogue Booth.",
  isPartOf: {
    "@id": `${siteConfig.baseUrl}/#website`,
  },
};

const caseStudies = [
  {
    eyebrow: "Salon",
    title: "Photobooth présenté en conditions réelles",
    text: "Une installation pensée pour faire tester la borne, montrer le parcours invité et donner un aperçu concret du rendu imprimé pendant un salon.",
    image: "/videos/instagram/reel-3-DQxM5TnCOKL.jpg",
    imageAlt: "Photobooth MySelfieBooth présenté pendant un salon du mariage",
    href: "/prestations/photobooth/",
    linkLabel: "Voir le Photobooth",
  },
  {
    eyebrow: "Mariage",
    title: "Vogue Booth Wedding Edition",
    text: "Un couloir lumineux personnalisé pour créer une série de portraits cohérente et une animation visuelle forte pendant la réception.",
    image: "/images/vogue-real/vogue-booth-mariage-card.webp",
    imageAlt: "Vogue Booth Wedding Edition installé pour un mariage",
    href: "/prestations/voguebooth/",
    linkLabel: "Voir le Vogue Booth",
  },
  {
    eyebrow: "Réception",
    title: "Photobooth et Miroirbooth sur le même événement",
    text: "Deux formats complémentaires préparés et installés pour répartir les usages entre borne photo classique et expérience miroir.",
    image: "/images/realisations-machines/duo-photobooth-miroir.webp",
    imageAlt: "Photobooth et Miroirbooth MySelfieBooth installés ensemble",
    href: "/prestations/miroirbooth/",
    linkLabel: "Voir le Miroirbooth",
  },
];

function MediaGrid({ items, className = "" }) {
  return (
    <div className={`portfolio-image-grid ${className}`}>
      {items.map((item) => (
        <figure className="portfolio-image-card" key={item.sourceId}>
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            width="900"
            height="1125"
          />
          {item.animated ? <span className="portfolio-motion-label">GIF réel</span> : null}
          <figcaption>
            <small>{item.category}</small>
            <strong>{item.title}</strong>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function PortfolioPage() {
  const pageRef = useRevealMotion("realisations");

  return (
    <Layout
      metaProps={{
        title: "Réalisations Photobooth et 360 Booth | MySelfieBooth",
        description:
          "Découvrez nos réalisations Photobooth, 360 Booth, Miroirbooth et Vogue Booth en photos et vidéos réelles, avec des créations IA fidèles à nos installations.",
        ogImage: "/images/ai/b2b-case-salon-ai.webp",
        ogImageAlt: "Photobooth MySelfieBooth installé dans un salon professionnel",
        ogUrl: "/realisations/",
        includeOrganization: true,
        jsonLd: [
          portfolioJsonLd,
          breadcrumbJsonLd([
            { label: "Accueil", href: "/" },
            { label: "Réalisations", href: "/realisations/" },
          ]),
        ],
      }}
    >
      <article className="portfolio-page" ref={pageRef}>
        <header className="portfolio-hero">
          <div className="portfolio-container portfolio-hero-grid">
            <div data-reveal>
              <p className="portfolio-eyebrow">Photos, vidéos et coulisses</p>
              <h1>Nos réalisations Photobooth en images.</h1>
              <p>
                Des installations réelles, des invités en action et des créations IA
                fidèles à nos machines. Chaque média présenté ici vient d'une scène
                distincte.
              </p>
              <div className="portfolio-actions">
                <a href="#cas-reels">Voir les cas réels</a>
                <a href={siteConfig.quoteUrl} className="is-secondary" data-event="cta_quote_click">
                  Demander un devis
                </a>
              </div>
            </div>
            <figure data-reveal data-reveal-variant="scale">
              <img
                src="/images/ai/b2b-case-salon-ai.webp"
                alt="Photobooth MySelfieBooth installé dans un salon professionnel"
                width="900"
                height="1125"
                fetchPriority="high"
              />
            </figure>
          </div>
        </header>

        <nav className="portfolio-nav" aria-label="Accès rapide aux galeries">
          <div className="portfolio-container">
            <a href="#cas-reels">Cas réels</a>
            <a href="#videos">Vidéos</a>
            <a href="#moments">Moments réels</a>
            <a href="#reportages">Reportages</a>
            <a href="#creations-ia">Créations IA</a>
            <a href="#details">Détails</a>
          </div>
        </nav>

        <section id="cas-reels" className="portfolio-section portfolio-cases" data-reveal>
          <div className="portfolio-container">
            <header className="portfolio-heading">
              <p className="portfolio-eyebrow">Études de cas</p>
              <h2>Trois configurations réellement utilisées sur le terrain.</h2>
              <p className="portfolio-heading-copy">
                Pas de chiffres inventés : uniquement des installations documentées par nos photos et vidéos,
                avec un lien direct vers la prestation correspondante.
              </p>
            </header>

            <div className="portfolio-case-grid">
              {caseStudies.map((item) => (
                <article className="portfolio-case-card" key={item.title}>
                  <a href={item.href} className="portfolio-case-media">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                      width="720"
                      height="540"
                    />
                  </a>
                  <div className="portfolio-case-body">
                    <small>{item.eyebrow}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <a href={item.href}>{item.linkLabel}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="portfolio-section is-dark" data-reveal>
          <div className="portfolio-container">
            <header className="portfolio-heading">
              <p className="portfolio-eyebrow">{motionMediaCount} séquences distinctes</p>
              <h2>Les prestations en mouvement.</h2>
              <p className="portfolio-heading-copy">
                Photobooth, Miroirbooth, impressions et fabrication des souvenirs :
                les gestes et les machines sont montrés en conditions réelles.
              </p>
            </header>
            <div className="portfolio-video-grid">
              {portfolioVideos.map((item) => (
                <article className="portfolio-video-card" key={item.sourceId}>
                  <video
                    controls
                    controlsList="nodownload"
                    muted
                    playsInline
                    preload="none"
                    poster={item.poster}
                    aria-label={item.title}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <div>
                    <small>{item.category}</small>
                    <strong>{item.title}</strong>
                  </div>
                </article>
              ))}
              {portfolioMotionGifs.map((item) => (
                <article className="portfolio-video-card" key={item.sourceId}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="466"
                  />
                  <span className="portfolio-motion-label">GIF réel</span>
                  <div>
                    <small>{item.category}</small>
                    <strong>{item.title}</strong>
                  </div>
                </article>
              ))}
            </div>
            <EventArchiveGallery videosOnly />
          </div>
        </section>

        <section id="moments" className="portfolio-section" data-reveal>
          <div className="portfolio-container">
            <header className="portfolio-heading">
              <p className="portfolio-eyebrow">26 moments réels</p>
              <h2>Photobooth, 360, Vogue et souvenirs.</h2>
            </header>
            <InstagramMediaWall showAll />
          </div>
        </section>

        <section id="reportages" className="portfolio-section is-muted" data-reveal>
          <div className="portfolio-container">
            <header className="portfolio-heading">
              <p className="portfolio-eyebrow">Reportages du terrain</p>
              <h2>Des installations et des souvenirs réellement livrés.</h2>
            </header>
            <EventArchiveGallery photosOnly />
          </div>
        </section>

        <section id="creations-ia" className="portfolio-section is-dark" data-reveal>
          <div className="portfolio-container">
            <header className="portfolio-heading">
              <p className="portfolio-eyebrow">Créations IA fidèles</p>
              <h2>Des mises en scène inspirées de nos vraies prestations.</h2>
            </header>
            <AiEventGallery />
            <MediaGrid items={portfolioAiImages} className="is-ai" />
          </div>
        </section>

        <section id="details" className="portfolio-section" data-reveal>
          <div className="portfolio-container">
            <header className="portfolio-heading">
              <p className="portfolio-eyebrow">Machines, décors et options</p>
              <h2>Les détails qui changent l'expérience.</h2>
            </header>
            <MediaGrid items={portfolioDetailImages} />
          </div>
        </section>

        <section className="portfolio-final-cta" data-reveal>
          <div className="portfolio-container">
            <p className="portfolio-eyebrow">Votre événement</p>
            <h2>Choisissez les images qui correspondent à votre ambiance.</h2>
            <a href={siteConfig.quoteUrl} data-event="cta_quote_click">
              Obtenir une proposition
            </a>
          </div>
        </section>

        <style jsx>{`
          .portfolio-case-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 22px;
          }

          .portfolio-case-card {
            overflow: hidden;
            border: 1px solid rgba(29, 24, 16, 0.12);
            border-radius: 18px;
            background: #fff;
            box-shadow: 0 16px 44px rgba(24, 20, 12, 0.07);
          }

          .portfolio-case-media {
            display: block;
            aspect-ratio: 4 / 3;
            overflow: hidden;
            background: #ece7dd;
          }

          .portfolio-case-media img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }

          .portfolio-case-body {
            padding: 22px;
          }

          .portfolio-case-body small {
            color: #9a7721;
            font-weight: 900;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
          }

          .portfolio-case-body h3 {
            margin: 9px 0 10px;
            color: #17130a;
            font-size: 1.25rem;
          }

          .portfolio-case-body p {
            margin: 0 0 18px;
            color: #625b50;
            line-height: 1.6;
          }

          .portfolio-case-body a {
            color: #17130a;
            font-weight: 900;
            text-decoration: underline;
            text-underline-offset: 4px;
          }

          @media (max-width: 860px) {
            .portfolio-case-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </article>
    </Layout>
  );
}
