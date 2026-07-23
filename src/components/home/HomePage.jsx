import { useState } from "react";
import {
  brandLogos,
  caseStudies,
  faqs,
  featuredReels,
  galleryHighlights,
  googleReviews,
  optionHighlights,
  proofPoints,
  selectorNeeds,
  services,
} from "../../data/home";
import { siteConfig } from "../../data/site";
import useRevealMotion from "../../hooks/useRevealMotion";

function SectionIntro({ eyebrow, title }) {
  return (
    <div className="home-section-intro">
      <p className="home-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function QuoteButton({ className = "home-button home-button-primary" }) {
  return (
    <a
      className={className}
      href={siteConfig.quoteUrl}
      data-event="cta_quote_click"
    >
      {siteConfig.primaryCtaLabel}
    </a>
  );
}

function HomeQuickNavigation() {
  const links = [
    ["/prestations#machines", "Animations"],
    ["/prestations#packs", "Packs"],
    ["#options", "Options"],
    ["#reels", "Vidéos"],
    ["#realisations", "Photos"],
    ["#entreprises", "Entreprises"],
    ["#faq", "FAQ"],
  ];

  return (
    <nav className="home-quick-nav" aria-label="Accès rapide">
      <div className="home-container home-quick-nav-inner">
        <strong>Accès rapide</strong>
        <div>
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <QuoteButton className="home-quick-cta" />
      </div>
    </nav>
  );
}

function LogoStrip() {
  return (
    <div className="home-logo-strip" aria-label="References clients affichees">
      {brandLogos.map((logo) => (
        <img key={logo.name} src={logo.src} alt={logo.name} width="180" height="64" />
      ))}
    </div>
  );
}

const galleryFilters = ["Tous", "Mariages", "Entreprises", "Machines"];

export default function HomePage() {
  const [galleryFilter, setGalleryFilter] = useState("Tous");
  const visibleGallery = galleryFilter === "Tous"
    ? galleryHighlights
    : galleryHighlights.filter((item) => item.category === galleryFilter);
  const pageRef = useRevealMotion("home");

  return (
    <div className="home-page" ref={pageRef}>
      <section className="home-hero">
        <div className="home-hero-media" aria-hidden="true">
          <figure className="home-hero-film home-hero-film-vogue">
            <video
              className="home-hero-video-side home-hero-video-vogue"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/machines-ai/voguebooth-studio-myselfiebooth.webp"
            >
              <source
                media="(min-width: 721px)"
                src="/videos/compress-voguebooth.mp4"
                type="video/mp4"
              />
            </video>
            <figcaption>
              <strong>Film Vogue Booth</strong>
              <span>Studio lumineux, poses guidées, rendu magazine</span>
            </figcaption>
          </figure>
          <figure className="home-hero-film home-hero-film-paris">
            <video
              className="home-hero-video-side home-hero-video-paris"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/machines-ai/360booth-entreprise-myselfiebooth.webp"
            >
              <source
                media="(min-width: 721px)"
                src="/videos/compress-TOUR-EIFFEL-FINAL.mp4"
                type="video/mp4"
              />
            </video>
            <figcaption>
              <strong>Film Tour Eiffel</strong>
              <span>Une animation événementielle au cœur de Paris</span>
            </figcaption>
          </figure>
          <figure className="home-hero-film home-hero-film-primary">
            <video
              className="home-hero-video-primary"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/machines-ai/hero-machines-myselfiebooth.webp"
            >
              <source src="/videos/PUB_2024.mp4" type="video/mp4" />
            </video>
            <figcaption>
              <strong>Film MySelfieBooth 2024</strong>
              <span>Nos machines en action sur de vrais événements</span>
            </figcaption>
          </figure>
        </div>
        <div className="home-hero-overlay" />

        <div className="home-container home-hero-grid">
          <div className="home-hero-copy" data-reveal>
            <p className="home-eyebrow">Photobooth premium - {siteConfig.mainArea}</p>
            <h1>L'animation photo ou vidéo qu'il faut à votre événement.</h1>
            <p>8 machines, des packs clairs et une installation clé en main.</p>
            <div className="home-actions">
              <QuoteButton />
              <a className="home-button home-button-secondary" href="/prestations">
                {siteConfig.secondaryCtaLabel}
              </a>
              <a className="home-button home-button-ghost" href={siteConfig.phoneHref} data-event="phone_click">
                {siteConfig.phoneCtaLabel}
              </a>
            </div>
            <p className="home-microcopy">{siteConfig.microcopy}</p>
          </div>
        </div>
      </section>

      <section className="home-trust-band" aria-label="Preuves MySelfieBooth">
        <div className="home-container home-trust-band-inner">
          <div className="home-trust-brands">
            <p>Ils nous font confiance</p>
            <LogoStrip />
          </div>
          <div className="home-proof-grid">
            {proofPoints.map((item) => {
              const content = (
                <>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <HomeQuickNavigation />

      <section id="entreprises" className="home-pro-band" data-reveal>
        <div className="home-container home-pro-band-inner">
          <picture>
            <img
              src="/images/machines-ai/360booth-entreprise-myselfiebooth.webp"
              alt="Animation MySelfieBooth personnalisée pour un événement professionnel"
              width="720"
              height="540"
              loading="lazy"
            />
          </picture>
          <div>
            <p className="home-eyebrow">Entreprises et agences</p>
            <h2>Une animation qui porte votre marque.</h2>
            <p>
              Salon, séminaire, lancement ou soirée interne : habillage à vos couleurs,
              installation cadrée et contenus prêts à partager.
            </p>
            <div className="home-pro-tags" aria-label="Événements professionnels couverts">
              <span>Salons</span>
              <span>Séminaires</span>
              <span>Lancements</span>
              <span>Soirées</span>
            </div>
            <div className="home-actions">
              <a className="home-button home-button-primary" href="/evenements/corporates">
                Voir les solutions entreprises
              </a>
              <a
                className="home-button home-button-secondary"
                href={siteConfig.quoteUrl}
                data-event="cta_quote_click"
              >
                {siteConfig.professionalCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Choisir vite"
            title="Que voulez-vous créer ?"
          />
          <div className="home-selector-grid">
            {selectorNeeds.map((item) => (
              <a key={item.need} href={item.href} className="home-selector-card">
                <div className="home-selector-media">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    width="640"
                    height="480"
                  />
                </div>
                <div className="home-selector-copy">
                  <span>{item.need}</span>
                  <strong>{item.answer}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="prestations" className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Nos animations"
            title="Choisissez votre animation"
          />
          <div className="home-service-grid">
            {services.map((service) => (
              <article key={service.title} className="home-service-card">
                <a href={service.href} className="home-service-image" data-event="machine_view">
                  <div className="home-service-media-pair">
                    <img
                      src={service.image}
                      alt={`Machine ${service.title}`}
                      loading="lazy"
                      width="520"
                      height="390"
                    />
                  </div>
                  <span>{service.tag}</span>
                </a>
                <div className="home-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="home-service-footer">
                    <strong>{service.price}</strong>
                    <a href={service.href}>Voir</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="home-centered-action">
            <a href="/prestations" className="home-button home-button-secondary-dark">
              Voir toutes les animations
            </a>
          </div>
        </div>
      </section>

      <section id="options" className="home-section home-section-muted" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Nos options"
            title="Personnalisez votre animation"
          />
          <div className="home-option-grid">
            {optionHighlights.map((option) => (
              <article key={option.name} className="home-option-card">
                <a href="/prestations#options">
                  <div className="home-option-media-pair">
                    <img
                      src={option.image}
                      alt={option.name}
                      loading="lazy"
                      width="420"
                      height="315"
                    />
                  </div>
                  <div className="home-option-body">
                    <h3>{option.name}</h3>
                    <p>{option.text}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <div className="home-centered-action">
            <a href="/prestations#options" className="home-button home-button-secondary-dark">
              Voir toutes les options
            </a>
          </div>
        </div>
      </section>

      <section className="home-section home-section-muted" data-reveal>
        <div className="home-container home-story-grid">
          <figure className="home-story-media">
            <img
              src="/images/equipe/equipe-myselfiebooth.webp"
              alt="Une partie de l'équipe MySelfieBooth"
              width="1350"
              height="1800"
              loading="lazy"
            />
          </figure>
          <div>
            <p className="home-eyebrow">Qui sommes-nous</p>
            <h2>Une aventure familiale, une équipe de terrain.</h2>
            <p>
              De la fabrication de nos premières bornes jusqu'au montage sur votre événement,
              nous suivons chaque projet avec la même équipe.
            </p>
            <a href="/a-propos">Découvrir notre histoire</a>
          </div>
        </div>
      </section>

      <section id="reels" className="home-section home-section-dark" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="En vidéo" title="Nos Reels" />
          <div className="home-reels-grid">
            {featuredReels.map((reel) => (
              <article key={reel.video} className="home-reel-card">
                <video
                  controls
                  controlsList="nodownload"
                  muted
                  playsInline
                  preload="none"
                  poster={reel.poster}
                  aria-label={reel.title}
                >
                  <source src={reel.video} type="video/mp4" />
                </video>
                <div>
                  <div>
                    <h3>{reel.title}</h3>
                    <p>{reel.description}</p>
                  </div>
                  <a href={reel.href} target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="realisations" className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Inspirations"
            title="Nos machines dans leur univers"
          />
          <div className="home-case-grid">
            {caseStudies.map((study) => (
              <article key={study.title} className="home-case-card">
                <picture className="home-case-media">
                  <img src={study.image} alt={study.title} loading="lazy" width="720" height="540" />
                </picture>
                <div className="home-case-body">
                  <span>{study.category}</span>
                  <h3>{study.title}</h3>
                  <strong>{study.setup}</strong>
                  <p>{study.result}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="home-gallery-heading">
            <div>
              <p className="home-eyebrow">Mises en scène</p>
              <h3>Mariages, entreprises et machines</h3>
            </div>
            <div className="home-gallery-filters" role="group" aria-label="Filtrer les réalisations">
              {galleryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={galleryFilter === filter ? "is-active" : ""}
                  aria-pressed={galleryFilter === filter}
                  onClick={() => setGalleryFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="home-gallery-grid">
            {visibleGallery.map((item) => (
              <article key={item.title} className="home-gallery-card" data-event="gallery_open">
                <picture>
                  <img src={item.image} alt={item.title} loading="lazy" width="720" height="540" />
                </picture>
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="avis" className="home-section home-reviews" data-reveal>
        <div className="home-container">
          <div className="home-reviews-heading">
            <SectionIntro
              eyebrow="Avis Google"
              title={`${siteConfig.reviews.rating} selon nos clients`}
            />
            <a href={siteConfig.reviewsUrl} target="_blank" rel="noreferrer">
              Voir les {siteConfig.reviews.count} avis Google
            </a>
          </div>
          <div className="home-review-grid">
            {googleReviews.map((review) => (
              <article key={review.name}>
                <div className="home-review-stars" aria-label={`${review.rating} étoiles sur 5`}>
                  {"★".repeat(review.rating)}
                </div>
                <blockquote>“{review.text}”</blockquote>
                <footer>
                  <strong>{review.name}</strong>
                  <span>{review.date} · Google</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="home-section home-section-muted" data-reveal>
        <div className="home-container home-faq-layout">
          <div>
            <p className="home-eyebrow">Questions fréquentes</p>
            <h2>Réserver sans zone d'ombre.</h2>
            <p>Installation, espace, personnalisation et livraison des fichiers : l'essentiel avant de demander un devis.</p>
            <QuoteButton />
          </div>
          <div className="home-faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
