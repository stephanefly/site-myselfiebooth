import {
  brandLogos,
  featuredReels,
  galleryHighlights,
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
        <img key={logo.name} src={logo.src} alt={logo.name} width="140" height="42" />
      ))}
    </div>
  );
}

export default function HomePage() {
  const pageRef = useRevealMotion("home");

  return (
    <div className="home-page" ref={pageRef}>
      <section className="home-hero">
        <div className="home-hero-media" aria-hidden="true">
          <video
            className="home-hero-video-side home-hero-video-vogue"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/voguebooth.webp"
          >
            <source src="/videos/compress-voguebooth.webm" type="video/webm" />
            <source src="/videos/compress-voguebooth.mp4" type="video/mp4" />
          </video>
          <video
            className="home-hero-video-primary"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero-pub-2024.webp"
          >
            <source src="/videos/PUB_2024.mp4" type="video/mp4" />
          </video>
          <video
            className="home-hero-video-side home-hero-video-paris"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/videos/instagram/reel-1-DO30-rNiDdA.jpg"
          >
            <source src="/videos/compress-TOUR-EIFFEL-FINAL.webm" type="video/webm" />
            <source src="/videos/compress-TOUR-EIFFEL-FINAL.mp4" type="video/mp4" />
          </video>
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
            {proofPoints.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeQuickNavigation />

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
                  <img src={item.image} alt={item.imageAlt} loading="lazy" width="480" height="360" />
                  <img src={item.realImage} alt="" loading="lazy" width="360" height="480" />
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
                    <picture>
                      <source media="(prefers-reduced-motion: reduce)" srcSet={service.stillImage} />
                      <img
                        src={service.motionImage}
                        alt={`${service.title} en utilisation`}
                        loading="lazy"
                        width="520"
                        height="390"
                      />
                    </picture>
                    <img
                      src={service.stillImage}
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
                    <picture>
                      <source media="(prefers-reduced-motion: reduce)" srcSet={option.image} />
                      <img
                        src={option.motionImage}
                        alt={`${option.name} en situation`}
                        loading="lazy"
                        width="420"
                        height="315"
                      />
                    </picture>
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
                  <h3>{reel.title}</h3>
                  <a href={reel.href} target="_blank" rel="noreferrer">
                    Voir sur Instagram
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="realisations" className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="En images"
            title="Voyez le rendu"
          />
          <div className="home-gallery-grid">
            {galleryHighlights.slice(0, 6).map((item) => (
              <article key={item.title} className="home-gallery-card" data-event="gallery_open">
                <picture>
                  {item.fallbackImage && (
                    <source media="(prefers-reduced-motion: reduce)" srcSet={item.fallbackImage} />
                  )}
                  <img src={item.image} alt={item.title} loading="lazy" />
                </picture>
                <div>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
