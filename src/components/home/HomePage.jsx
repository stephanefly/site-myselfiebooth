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
import { homeInstagramMedia } from "../../data/instagramMedia";
import VisualGallery, { VisualImage } from "../VisualGallery";
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
  return <a className={className} href={siteConfig.quoteUrl} data-event="cta_quote_click" data-event-label="Accueil devis">{siteConfig.primaryCtaLabel}</a>;
}

const featuredServices = services.filter((service) =>
  ["photobooth", "miroirbooth", "videobooth", "voguebooth"].includes(service.key)
);

const featuredPacksHome = featuredPacks.filter((pack) =>
  ["souvenirs", "duo-vip", "vogue-premium"].includes(pack.key)
);

const packAiImages = {
  souvenirs: "/images/ai-cards/pack-souvenirs-ai.webp?v=20261013-full",
  "duo-vip": "/images/ai-cards/pack-duo-vip-ai.webp?v=20261013-full",
  "vogue-premium": "/images/ai-cards/pack-vogue-premium-ai.webp?v=20261013-full",
};

const featuredReviews = googleReviews.slice(0, 3);

export default function HomePage() {
  const [heroVideoEnabled, setHeroVideoEnabled] = useState(false);
  const pageRef = useRevealMotion("home");

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 761px)");
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setHeroVideoEnabled(false);
    update();
    desktopQuery.addEventListener?.("change", update);
    motionQuery.addEventListener?.("change", update);
    connection?.addEventListener?.("change", update);
    return () => {
      desktopQuery.removeEventListener?.("change", update);
      motionQuery.removeEventListener?.("change", update);
      connection?.removeEventListener?.("change", update);
    };
  }, []);

  return (
    <div className="home-page" ref={pageRef}>
      <section className="home-hero">
        <div className="home-hero-media" aria-hidden="true">
          <figure className="home-hero-film home-hero-film-primary">
            <video
              key={heroVideoEnabled ? "playing" : "poster"}
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
            <h1>Location de photobooth à Paris et en Île-de-France</h1>
            <p>Vos invités posent, sourient et repartent avec leurs photos. Photobooth à 400 € pour 5 h, miroir photo, vidéo 360 et Vogue Booth pour mariages, anniversaires et entreprises.</p>
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
            <div className="home-hero-offer-media"><img src="/images/ai-from-real/tirages-souvenirs-accueil-v2.webp?v=49915b0" alt="Mise en scène IA de tirages et bandelettes photo personnalisés MySelfieBooth" width="960" height="640" /></div>
            <div className="home-hero-offer-body">
              <div><p>Le plus demandé</p><strong>Photobooth</strong></div>
              <p className="home-offer-price">400 € · 5 heures</p>
              <ul>
                <li>Tirages personnalisés selon la formule</li>
                <li>Livraison et installation cadrées</li>
                <li>Galerie après l'événement</li>
              </ul>
              <a href="/prestations/photobooth/">Découvrir le Photobooth</a>
              <small>Île-de-France · déplacement et options confirmés sur devis</small>
            </div>
          </aside>
        </div>
        <button type="button" className="home-video-control" aria-pressed={heroVideoEnabled} onClick={() => setHeroVideoEnabled(value => !value)}>{heroVideoEnabled ? "Arrêter la vidéo" : "Voir l’ambiance en vidéo"}</button>
      </section>

      <section className="home-trust-band" aria-label="Repères MySelfieBooth">
        <div className="home-container home-trust-band-inner">
          <div className="home-trust-summary">
            <strong>Une équipe dédiée aux animations photo et vidéo événementielles.</strong>
            <span>Photobooth, Miroirbooth, 360 Booth et Vogue Booth pour vos événements.</span>
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
          <div><a href="#prestations">Prestations</a><a href="#tirages">Tirages</a><a href="#packs">Packs</a><a href="#avis">Avis</a><a href="#faq">FAQ</a><a href="/realisations/">Réalisations</a></div>
          <QuoteButton className="home-quick-cta" />
        </div>
      </nav>

      <section id="prestations" className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Nos incontournables" title="Quatre expériences, quatre usages différents" />
          <div className="home-service-grid">
            {featuredServices.map((service) => (
              <article key={service.key} className="home-service-card" style={{ height: "auto", overflow: "hidden" }}>
                <VisualImage name={service.key} sizes="(max-width: 680px) 92vw, (max-width: 1050px) 45vw, 280px" />
                <div className="home-service-body">
                  <span className="home-eyebrow">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="home-service-footer"><strong>{service.price}</strong><a href={service.href}>{service.linkLabel}</a></div>
                </div>
              </article>
            ))}
          </div>
          <div className="home-centered-action"><a href="/prestations/" className="home-button home-button-secondary-dark">Comparer toutes les animations</a></div>
        </div>
      </section>

      <VisualGallery id="tirages" title="De belles photos. De vrais souvenirs à emporter." items={[
        { name: "tirages", title: "Des cadres à votre image", text: "Prénoms, date, couleurs ou logo : le souvenir reprend votre univers." },
        { name: "bandes", title: "Plusieurs poses sur une bandelette", text: "Un format à glisser dans un livre d’or ou à garder près de soi." },
        { name: "papier", title: "Le plaisir du papier", text: "Des photos imprimées pour prolonger la fête. Format et quantité précisés dans votre devis." },
      ]} />

      <section id="packs" className="home-section home-section-muted home-packs-section" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Formules prêtes à réserver" title="Trois packs pour décider plus facilement" />
          <p className="home-section-lead">Photo, vidéo et souvenirs : choisissez la formule qui correspond à votre réception.</p>
          <div className="home-pack-grid">
            {featuredPacksHome.map((pack) => (
              <article key={pack.key} className={`home-pack-card ${pack.featured ? "is-featured" : ""}`} style={{ height: "auto", overflow: "hidden" }}>
                <img
                  src={packAiImages[pack.key]}
                  alt={`Illustration IA premium ${pack.name} MySelfieBooth`}
                  loading="lazy"
                  width="640"
                  height="480"
                  style={{ width: "100%", height: "auto", aspectRatio: "4 / 3", objectFit: "cover", display: "block" }}
                />
                <div className="home-pack-body">
                  <span>{pack.tag}</span>
                  <h3>{pack.name}</h3>
                  <p>{pack.description}</p>
                  <ul>{pack.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <div><strong>{pack.price}</strong><a href="/prestations/#packs">Découvrir le pack</a></div>
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
            <article className="home-market-card"><img src="/images/page-visuals/home-entreprises.jpg" alt="Animation photo MySelfieBooth lors d’un événement" width="640" height="900" loading="lazy" /><div><span>Entreprises</span><h3>Salons, séminaires et soirées</h3><p>Branding, expérience invités et formats partageables.</p><a href="/evenements/corporates/">Voir les solutions entreprise</a></div></article>
            <article className="home-market-card"><img src="/images/page-visuals/home-mariages.jpg" alt="Les mariés profitent du Photobooth" width="640" height="900" loading="lazy" /><div><span>Particuliers</span><h3>Mariages, anniversaires et réceptions</h3><p>Photos, vidéos, tirages et souvenirs adaptés au rythme de votre soirée.</p><a href="/evenements/mariages/">Voir les solutions mariage</a></div></article>
          </div>
        </div>
      </section>

      <section className="home-section home-section-muted" data-reveal>
        <div className="home-container home-option-feature">
          <VisualImage name="phonebooth" sizes="(max-width: 760px) 92vw, 560px" />
          <div>
          <SectionIntro eyebrow="Options" title="Décor, souvenirs et personnalisation" />
          <p className="home-section-lead">Complétez votre animation avec nos options : mur floral, Phonebooth, porte-clés, magnets, livre d'or, panneaux, fond LED et options Vogue.</p>
          <div className="home-centered-action"><a href="/prestations/#options" className="home-button home-button-secondary-dark">Voir toutes les options et leurs visuels</a></div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-dark" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="100 % terrain" title="Découvrez nos animations en situation" />
          <p className="home-section-lead">Découvrez les machines, les invités et les souvenirs de nos événements dans la galerie de réalisations.</p>
          <div className="home-real-media-grid">
            {homeInstagramMedia.map((item) => (
              <figure key={item.sourceId}>
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" width="540" height="675" />
                <figcaption><small>{item.category}</small><strong>{item.title}</strong></figcaption>
              </figure>
            ))}
          </div>
          <div className="home-centered-action home-media-actions"><a href="/realisations/" className="home-button home-button-primary">Voir toutes les photos</a><a href="/realisations-videos/" className="home-button home-button-secondary">Voir les vidéos</a></div>
        </div>
      </section>

      <section className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Références clients" title="Ils nous font confiance" />
          <div id="references" className="home-logo-strip" aria-label="Nos références clients">
            {brandLogos.map((logo) => (
              <figure key={logo.name} className="home-reference-card">
                <img className={["TotalEnergies", "Hermès", "AXA", "Crédit Agricole", "Sephora"].includes(logo.name) ? undefined : "home-reference-wordmark"} src={logo.src} alt={`Logo ${logo.name}`} loading="lazy" decoding="async" width="256" height="256" data-no-load-motion />
                <figcaption>{logo.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="avis" className="home-section home-section-muted" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Avis clients" title="Ce que les clients retiennent" />
          <div className="home-review-grid">
            {featuredReviews.map((review) => (
              <article key={review.name} className="home-review-card"><span className="home-review-stars" aria-label="5 étoiles sur 5">★★★★★</span><blockquote>“{review.text}”</blockquote><footer><strong>{review.name}</strong><span>{review.date}</span></footer></article>
            ))}
          </div>
          <div className="home-centered-action"><a href={siteConfig.reviewsUrl} target="_blank" rel="noreferrer" className="home-button home-button-secondary-dark">Voir les avis Google</a></div>
        </div>
      </section>

      <section className="home-section home-section-light" data-reveal>
        <div className="home-container home-story-grid">
          <figure className="home-story-media"><img src="/images/equipe/fabrication-photobooth-en-famille.webp" alt="Fabrication d’une borne Photobooth MySelfieBooth en atelier" width="900" height="900" loading="lazy" /></figure>
          <div><SectionIntro eyebrow="L’équipe et l’expertise" title="Créée par un ingénieur, portée par une équipe de terrain" /><p>Stéphane Faure a fabriqué les premières bornes avec son père. La même exigence technique guide aujourd’hui la préparation et l’installation de vos animations.</p><a href="/a-propos/" className="home-button home-button-secondary-dark">Découvrir notre histoire</a></div>
        </div>
      </section>

      <section id="faq" className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="FAQ" title="Les questions avant de réserver" />
          <div className="home-faq-list">
            {faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="home-final-cta" data-reveal>
        <div className="home-container"><p className="home-eyebrow">Votre événement</p><h2>Créons les souvenirs de votre prochain événement.</h2><QuoteButton /></div>
      </section>
    </div>
  );
}
