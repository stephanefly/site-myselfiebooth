import { useEffect, useState } from "react";
import {
  brandLogos,
  faqs,
  featuredPacks,
  googleReviews,
  proofPoints,
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
  return <a className={className} href={siteConfig.quoteUrl}>{siteConfig.primaryCtaLabel}</a>;
}

const featuredServices = services.filter((service) =>
  ["photobooth", "miroirbooth", "videobooth", "voguebooth"].includes(service.key)
);

const featuredPacksHome = featuredPacks.filter((pack) =>
  ["souvenirs", "duo-vip", "vogue-premium"].includes(pack.key)
);

const featuredReviews = googleReviews.slice(0, 3);

export default function HomePage() {
  const [heroVideoEnabled, setHeroVideoEnabled] = useState(false);
  const pageRef = useRevealMotion("home");

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 761px)");
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const update = () => setHeroVideoEnabled(desktopQuery.matches && !connection?.saveData);
    update();
    desktopQuery.addEventListener?.("change", update);
    connection?.addEventListener?.("change", update);
    return () => {
      desktopQuery.removeEventListener?.("change", update);
      connection?.removeEventListener?.("change", update);
    };
  }, []);

  return (
    <div className="home-page" ref={pageRef}>
      <section className="home-hero">
        <div className="home-hero-media" aria-hidden="true">
          <figure className="home-hero-film home-hero-film-primary">
            <video
              className="home-hero-video-primary"
              autoPlay={heroVideoEnabled}
              loop
              muted
              playsInline
              preload="none"
              poster="/images/hero-pub-2024.webp"
            >
              {heroVideoEnabled ? <source src="/videos/PUB_2024.mp4" type="video/mp4" /> : null}
            </video>
          </figure>
        </div>
        <div className="home-hero-overlay" />
        <div className="home-container home-hero-grid">
          <div className="home-hero-copy" data-reveal>
            <p className="home-eyebrow">Photobooth · Miroir · 360 · Vogue</p>
            <h1>Location de photobooth haut de gamme en Île-de-France</h1>
            <p>Des animations photo et vidéo pensées pour produire de beaux souvenirs, avec une installation maîtrisée et une vraie présence le jour J.</p>
            <ul className="home-hero-facts">
              <li><strong>+700</strong> événements réalisés</li>
              <li><strong>5 ans</strong> d'expertise</li>
              <li><strong>{siteConfig.reviews.rating}</strong> sur Google</li>
            </ul>
            <div className="home-actions">
              <QuoteButton />
              <a className="home-button home-button-secondary" href="/prestations/">Voir toutes les prestations</a>
            </div>
          </div>
          <aside className="home-hero-offer" data-reveal>
            <div className="home-hero-offer-body">
              <div><p>Le plus demandé</p><strong>Photobooth</strong></div>
              <ul>
                <li>Tirages personnalisés selon la formule</li>
                <li>Livraison et installation cadrées</li>
                <li>Galerie après l'événement</li>
              </ul>
              <a href="/prestations/photobooth/">Découvrir le Photobooth</a>
              <small>Île-de-France, Normandie et déplacements selon projet</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-trust-band" aria-label="Repères MySelfieBooth">
        <div className="home-container home-trust-band-inner">
          <div className="home-trust-summary">
            <strong>Une équipe dédiée aux animations photo et vidéo événementielles.</strong>
            <span>Chaque photo réelle est désormais réservée à un seul emplacement sur le site.</span>
          </div>
          <div className="home-proof-grid">
            {proofPoints.map((item) => item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer"><strong>{item.value}</strong><span>{item.label}</span></a>
            ) : (
              <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <nav className="home-quick-nav" aria-label="Accès rapide">
        <div className="home-container home-quick-nav-inner">
          <strong>Accès rapide</strong>
          <div><a href="#prestations">Prestations</a><a href="#packs">Packs</a><a href="#avis">Avis</a><a href="#faq">FAQ</a><a href="/realisations/">Réalisations</a></div>
          <QuoteButton className="home-quick-cta" />
        </div>
      </nav>

      <section id="prestations" className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Nos incontournables" title="Quatre expériences, quatre usages différents" />
          <div className="home-service-grid">
            {featuredServices.map((service) => (
              <article key={service.key} className="home-service-card">
                <div className="home-service-body">
                  <span className="home-eyebrow">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="home-service-footer"><strong>{service.price}</strong><a href={service.href}>{service.linkLabel}</a></div>
                </div>
              </article>
            ))}
          </div>
          <div className="home-centered-action"><a href="/prestations/" className="home-button home-button-secondary-dark">Comparer les animations et voir les vrais visuels</a></div>
        </div>
      </section>

      <section id="packs" className="home-section home-section-muted" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Formules prêtes à réserver" title="Trois packs pour décider plus facilement" />
          <p className="home-section-lead">Les visuels complets des packs sont affichés une seule fois sur la page Prestations.</p>
          <div className="home-pack-grid">
            {featuredPacksHome.map((pack) => (
              <article key={pack.key} className={`home-pack-card ${pack.featured ? "is-featured" : ""}`}>
                <div className="home-pack-body">
                  <span>{pack.tag}</span>
                  <h3>{pack.name}</h3>
                  <p>{pack.description}</p>
                  <ul>{pack.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <div><strong>{pack.price}</strong><a href="/prestations/#packs">Voir le pack et son visuel</a></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-booking-band" data-reveal>
        <div className="home-container home-booking-band-inner">
          <div className="home-booking-heading"><p className="home-eyebrow">Devis clair</p><h2>Votre date, votre lieu, votre formule.</h2></div>
          <ol className="home-booking-steps">
            <li><strong>1. Date et lieu</strong><span>Indiquez où et quand.</span></li>
            <li><strong>2. Machines et options</strong><span>Composez votre expérience.</span></li>
            <li><strong>3. Proposition confirmée</strong><span>Recevez la formule et le tarif.</span></li>
          </ol>
          <QuoteButton />
        </div>
      </section>

      <section className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Pour qui ?" title="Mariages, entreprises et événements privés" />
          <div className="home-market-grid">
            <article className="home-market-card"><div><span>Entreprises</span><h3>Salons, séminaires et soirées</h3><p>Branding, expérience invités et formats partageables.</p><a href="/evenements/corporates/">Voir les solutions entreprise</a></div></article>
            <article className="home-market-card"><div><span>Particuliers</span><h3>Mariages, anniversaires et réceptions</h3><p>Photos, vidéos, tirages et souvenirs adaptés au rythme de votre soirée.</p><a href="/evenements/mariages/">Voir les solutions mariage</a></div></article>
          </div>
        </div>
      </section>

      <section className="home-section home-section-muted" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Options" title="Décor, souvenirs et personnalisation" />
          <p className="home-section-lead">Chaque option possède son visuel dédié sur la page Prestations : mur floral, Phonebooth, porte-clés, magnets, livre d'or, panneaux, fond LED et options Vogue.</p>
          <div className="home-centered-action"><a href="/prestations/#options" className="home-button home-button-secondary-dark">Voir toutes les options et leurs visuels</a></div>
        </div>
      </section>

      <section className="home-section home-section-dark" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="100 % terrain" title="La banque de vraies prestations a sa propre galerie" />
          <p className="home-section-lead">Photos Instagram, invités, machines, tirages et coulisses sont regroupés dans Réalisations au lieu d'être copiés sur plusieurs pages.</p>
          <div className="home-centered-action"><a href="/realisations/" className="home-button home-button-primary">Voir les réalisations réelles</a></div>
        </div>
      </section>

      <section className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Références" title="Des prestations pour particuliers et entreprises" />
          <div className="home-logo-strip">
            {brandLogos.map((logo) => <img key={logo.name} src={logo.src} alt={logo.name} loading="lazy" width="180" height="64" />)}
          </div>
        </div>
      </section>

      <section id="avis" className="home-section home-section-muted" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Avis clients" title="Ce que les clients retiennent" />
          <div className="home-review-grid">
            {featuredReviews.map((review) => (
              <article key={review.name} className="home-review-card"><span>★★★★★</span><p>“{review.text}”</p><strong>{review.name}</strong><small>{review.date}</small></article>
            ))}
          </div>
          <div className="home-centered-action"><a href={siteConfig.reviewsUrl} target="_blank" rel="noreferrer" className="home-button home-button-secondary-dark">Voir les avis Google</a></div>
        </div>
      </section>

      <section id="faq" className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="FAQ" title="Les questions avant de réserver" />
          <div className="home-faq-list">
            {faqs.slice(0, 8).map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="home-final-cta" data-reveal>
        <div className="home-container"><p className="home-eyebrow">Votre événement</p><h2>Une formule claire, des visuels cohérents, une seule utilisation par photo.</h2><QuoteButton /></div>
      </section>
    </div>
  );
}
