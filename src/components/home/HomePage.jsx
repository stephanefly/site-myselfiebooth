import {
  brandLogos,
  faqs,
  galleryHighlights,
  marketPaths,
  optionHighlights,
  processSteps,
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
    ["#prestations", "Animations"],
    ["#options", "Options"],
    ["#realisations", "Photos"],
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
          <img
            src="/images/ai/hero-photobooth-evenement-premium.webp"
            alt=""
            width="1672"
            height="941"
            fetchPriority="high"
          />
        </div>
        <div className="home-hero-overlay" />

        <div className="home-container home-hero-grid">
          <div className="home-hero-copy" data-reveal>
            <p className="home-eyebrow">Photobooth premium - {siteConfig.mainArea}</p>
            <h1>Location de photobooth pour mariages, entreprises et grands événements.</h1>
            <p>Photos, vidéos et souvenirs personnalisés, installés clé en main.</p>
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

          <aside className="home-hero-panel" aria-label="Preuves MySelfieBooth" data-reveal data-reveal-variant="scale">
            <p>Ils nous font confiance</p>
            <LogoStrip />
            <div className="home-proof-grid">
              {proofPoints.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <HomeQuickNavigation />

      <section className="home-section home-section-muted" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Votre événement"
            title="Choisissez votre parcours"
          />
          <div className="home-path-grid">
            {marketPaths.map((path) => (
              <a
                key={path.href}
                href={path.href}
                className="home-path-card"
                data-event="market_path_click"
                data-event-label={path.eyebrow}
              >
                <span>{path.eyebrow}</span>
                <h3>{path.title}</h3>
                <strong>{path.cta}</strong>
              </a>
            ))}
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
                <span>{item.need}</span>
                <strong>{item.answer}</strong>
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
                  <img src={service.image} alt={service.title} loading="lazy" width="520" height="390" />
                  <span>{service.tag}</span>
                </a>
                <div className="home-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="home-service-footer">
                    <strong>{service.price}</strong>
                    <a href={service.href}>Details</a>
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

      <section className="home-section home-section-dark" data-reveal>
        <div className="home-container home-split">
          <div>
            <p className="home-eyebrow">Tout est pris en charge</p>
            <h2>Simple du devis au jour J.</h2>
            <QuoteButton className="home-button home-button-primary home-inline-cta" />
          </div>
          <div className="home-process-grid">
            {processSteps.slice(0, 4).map((step, index) => (
              <article key={step.title} className="home-process-card">
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="options" className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Options"
            title="Personnalisez l'expérience"
          />
          <div className="home-option-grid">
            {optionHighlights.slice(0, 4).map((option) => (
              <article key={option.name} className="home-option-card">
                <img src={option.image} alt={option.name} loading="lazy" width="360" height="360" />
                <div>
                  <h3>{option.name}</h3>
                  {option.href && <a href={option.href}>En savoir plus</a>}
                </div>
              </article>
            ))}
          </div>
          <div className="home-centered-action">
            <a href="/options" className="home-button home-button-secondary-dark">
              Voir toutes les options
            </a>
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
            {galleryHighlights.slice(0, 8).map((item) => (
              <article key={item.title} className="home-gallery-card" data-event="gallery_open">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-light" data-reveal>
        <div className="home-container home-zone-layout">
          <div>
            <p className="home-eyebrow">Zone d'intervention</p>
            <h2>Interventions en Île-de-France, à Lyon et à Rouen.</h2>
          </div>
          <div className="home-zone-links">
            <a href="/paris">Paris</a>
            <a href="/lyon">Lyon</a>
            <a href="/rouen">Rouen</a>
          </div>
        </div>
      </section>

      <section id="faq" className="home-section home-section-light" data-reveal>
        <div className="home-container home-faq-layout">
          <div>
            <p className="home-eyebrow">Questions rapides</p>
            <h2>L'essentiel avant de réserver</h2>
            <QuoteButton />
          </div>
          <div className="home-faq-list">
            {faqs.slice(0, 3).map((item) => (
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
