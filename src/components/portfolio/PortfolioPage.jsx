import Layout from "../Layout";
import AiEventGallery from "../AiEventGallery";
import EventArchiveGallery from "../EventArchiveGallery";
import InstagramMediaWall from "../InstagramMediaWall";
import { breadcrumbJsonLd, siteConfig } from "../../data/site";
import {
  portfolioAiImages,
  portfolioDetailImages,
  portfolioVideos,
} from "../../data/portfolioMedia";
import useRevealMotion from "../../hooks/useRevealMotion";

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
                <a href="#videos">Voir les vidéos</a>
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
            <a href="#videos">Vidéos</a>
            <a href="#moments">Moments réels</a>
            <a href="#reportages">Reportages</a>
            <a href="#creations-ia">Créations IA</a>
            <a href="#details">Détails</a>
          </div>
        </nav>

        <section id="videos" className="portfolio-section is-dark" data-reveal>
          <div className="portfolio-container">
            <header className="portfolio-heading">
              <p className="portfolio-eyebrow">13 séquences distinctes</p>
              <h2>Les prestations en mouvement.</h2>
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
      </article>
    </Layout>
  );
}
