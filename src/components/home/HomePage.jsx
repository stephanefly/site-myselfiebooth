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
  souvenirs: "/images/ai-from-real/accueil-pack-souvenirs.webp",
  "duo-vip": "/images/ai-from-real/accueil-pack-duo.webp",
  "vogue-premium": "/images/ai-from-real/accueil-pack-vogue.webp",
};

const featuredReviews = googleReviews.slice(0, 3);

export default function HomePage() {
  const [heroVideoEnabled, setHeroVideoEnabled] = useState(true);
  const pageRef = useRevealMotion("home");

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setHeroVideoEnabled(!motionQuery.matches);
    update();
    motionQuery.addEventListener?.("change", update);
    return () => {
      motionQuery.removeEventListener?.("change", update);
    };
  }, []);

  return (
    <div className="home-page" ref={pageRef}>
      <section className="home-showcase" aria-labelledby="home-showcase-title">
        <div className="home-showcase-art">
          <div className="home-showcase-picture">
            <img
              src="/images/ai-from-real/accueil-machines-panorama.webp?v=20261019-livre-video"
              alt="Projection de nos machines : grand Vogue Booth à gauche, photobooth noir et or sur trépied, miroir photo, vidéo 360, borne blanche de livre d’or vidéo avec micro et panneau fontaine de bienvenue à droite, avec Phonebooth et micro sur une table basse"
              width="1915"
              height="821"
              fetchPriority="high"
            />
          </div>
        </div>
        <div className="home-showcase-content">
          <div className="home-showcase-copy">
            <p className="home-showcase-eyebrow">Photobooth · Miroir · 360° · Vogue</p>
            <h1 id="home-showcase-title">Une animation photo pour chaque événement.</h1>
            <p className="home-showcase-lead">Vos invités posent, sourient et repartent avec leurs souvenirs. Nos machines et nos options donnent vie à votre événement, à Paris et en Île-de-France.</p>
            <div className="home-showcase-actions">
              <QuoteButton className="home-showcase-primary" />
              <a href="/prestations/">Voir toutes les animations</a>
            </div>
            <div className="home-showcase-proof">
              <span><strong>+700</strong> événements</span>
              <span><strong>{siteConfig.reviews.rating}</strong> sur Google</span>
              <span>Installation incluse</span>
            </div>
          </div>
          <aside className="home-showcase-film" aria-label="Vidéo de nos événements">
            <video
              id="home-showcase-video"
              key={heroVideoEnabled ? "playing" : "poster"}
              autoPlay={heroVideoEnabled}
              loop
              muted
              playsInline
              controls
              preload="metadata"
              poster="/images/hero-pub-2024.webp"
              aria-label="Les animations MySelfieBooth en situation"
            >
              {heroVideoEnabled ? <source src="/videos/PUB_2024.mp4?v=20261019-fullhd" type="video/mp4" /> : null}
            </video>
            {!heroVideoEnabled && (
              <div className="home-showcase-film-bottom">
                <button
                  type="button"
                  aria-controls="home-showcase-video"
                  onClick={() => setHeroVideoEnabled(true)}
                >Voir la vidéo</button>
              </div>
            )}
          </aside>
        </div>
        <span className="home-showcase-note">Visuel de projection</span>
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

      <VisualGallery id="tirages" eyebrow="Vos souvenirs, votre style" title="De belles photos. De vrais souvenirs à emporter." note="Des souvenirs qui portent votre signature." items={[
        { name: "homeCadres", title: "Des cadres à votre image", text: "Prénoms, date, couleurs ou logo : le souvenir reprend votre univers." },
        { name: "homeBandes", title: "Plusieurs poses sur une bandelette", text: "Un format à glisser dans un livre d’or ou à garder près de soi." },
        { name: "homePapier", title: "Votre équipe, votre identité", text: "Logo, couleurs et message : des tirages personnalisés pour vos soirées d’entreprise." },
      ]} />

      <section className="home-final-cta home-event-invitation" aria-labelledby="home-event-title" data-page-conclusion data-reveal>
        <div className="home-container home-event-inner">
          <div className="home-event-copy">
            <p className="home-eyebrow">Votre événement</p>
            <h2 id="home-event-title">Un événement à votre image.</h2>
            <p className="home-event-description">Parlons de vos envies pour créer un moment qui vous ressemble.</p>
          </div>
          <a className="home-event-button" href={siteConfig.quoteUrl} data-event="cta_quote_click" data-event-label="Accueil événement">
            Parlons de votre événement <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section id="packs" className="home-section home-section-muted home-packs-section" data-reveal>
        <div className="home-container">
          <SectionIntro eyebrow="Formules prêtes à réserver" title="Trois packs pour décider plus facilement" />
          <p className="home-section-lead">Photo, vidéo et souvenirs : choisissez la formule qui correspond à votre réception.</p>
          <div className="home-pack-grid">
            {featuredPacksHome.map((pack) => (
              <article key={pack.key} className={`home-pack-card ${pack.featured ? "is-featured" : ""}`} style={{ height: "auto", overflow: "hidden" }}>
                <img
                  src={packAiImages[pack.key]}
                  alt={`Projection du pack ${pack.name} MySelfieBooth`}
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
          <p className="visual-note">Inspirations pour composer votre événement.</p>
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
            <article className="home-market-card"><VisualImage name="homeEntreprise" sizes="(max-width: 760px) 92vw, 280px" /><div><span>Entreprises</span><h3>Salons, séminaires et soirées</h3><p>Branding, expérience invités et formats partageables.</p><a href="/evenements/corporates/">Voir les solutions entreprise</a></div></article>
            <article className="home-market-card"><VisualImage name="homeMariage" sizes="(max-width: 760px) 92vw, 280px" /><div><span>Particuliers</span><h3>Mariages, anniversaires et réceptions</h3><p>Photos, vidéos, tirages et souvenirs adaptés au rythme de votre soirée.</p><a href="/evenements/mariages/">Voir les solutions mariage</a></div></article>
          </div>
          <p className="visual-note">Des idées pour imaginer votre événement.</p>
        </div>
      </section>

      <section className="home-section home-section-muted" data-reveal>
        <div className="home-container home-option-feature">
          <img src="/images/ai-from-real/accueil-options-collection.webp" alt="Projection de nos options : mur de fleurs, backdrop, livre d’or vidéo blanc avec micro, magnets et porte-clés photo" width="1200" height="800" loading="lazy" decoding="async" />
          <div>
          <SectionIntro eyebrow="Options" title="Décor, souvenirs et personnalisation" />
          <p className="home-section-lead">Mur de fleurs, backdrop, livre d’or vidéo avec micro, magnets et porte-clés : créez un décor à votre image et des souvenirs à emporter.</p>
          <p className="visual-note">Les détails qui rendent votre événement unique.</p>
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



      <aside className="home-coverage-note home-container" aria-labelledby="home-coverage-title">
        <svg className="home-coverage-map" viewBox="0 0 220 230" role="img" aria-label="Carte schématique de France : Île-de-France, Normandie et Lyon">
          <path d="M108 13 L124 25 L140 24 L148 39 L171 44 L180 61 L197 69 L186 89 L183 111 L169 128 L178 147 L169 164 L181 177 L162 192 L145 192 L129 204 L108 199 L91 188 L72 184 L65 163 L59 143 L62 122 L52 109 L45 94 L29 91 L14 79 L19 69 L39 70 L47 61 L67 62 L80 51 L79 32 L93 38 L99 25 Z" fill="#e9dfca" stroke="#b89b63" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M194 193 L200 187 L202 200 L197 217 L192 209 Z" fill="#e9dfca" stroke="#b89b63" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="92" cy="66" r="5" fill="#806231" />
          <circle cx="117" cy="76" r="5" fill="#171717" />
          <circle cx="151" cy="147" r="5" fill="#171717" />
          <text x="36" y="52">Normandie</text>
          <text x="128" y="79">IDF</text>
          <text x="161" y="151">Lyon</text>
        </svg>
        <div className="home-coverage-copy">
          <h2 id="home-coverage-title">Et si on venait jusqu’à vous ?</h2>
          <p>Nous intervenons dans toute l’Île-de-France et les régions limitrophes, ainsi qu’à Lyon et en Normandie. Pour toute autre destination, nous étudions votre projet et vous proposons un devis sur mesure.</p>
        </div>
      </aside>

      <style jsx>{`
        .home-coverage-note {
          display: flex;
          align-items: center;
          gap: 32px;
          margin: 12px auto 40px;
          padding: 22px 36px;
          border: 1px solid #e2d8c6;
          border-radius: 16px;
          background: #f7f3ea;
          text-align: left;
        }
        .home-coverage-map { display: block; flex: 0 0 120px; width: 120px; height: 126px; }
        .home-coverage-map text { fill: #51483a; font: 10px Roboto, sans-serif; }
        .home-coverage-copy { min-width: 0; }
        .home-coverage-copy h2 { margin: 0 0 10px; color: #171717; font-size: 1.25rem; line-height: 1.3; text-align: left; }
        .home-coverage-note p {
          max-width: 820px;
          margin: 0;
          color: #6f6a61;
          font-size: .85rem;
          line-height: 1.8;
        }
        @media (max-width: 600px) {
          .home-coverage-note { gap: 16px; padding: 24px; flex-direction: column; align-items: flex-start; margin-bottom: 28px; }
          .home-coverage-map { flex-basis: auto; width: 92px; height: 96px; }
          .home-coverage-copy h2 { font-size: 1.15rem; }
        }
        .home-page .home-event-invitation {
          width: min(1180px, calc(100% - 32px));
          margin: 32px auto;
          padding: 44px 40px;
          border-radius: 18px;
          color: #171717;
          background: #f7f3ea !important;
          border: 1px solid #ded5c3;
        }
        .home-event-inner {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px 48px;
          text-align: left;
        }
        .home-event-copy { min-width: 0; }
        .home-event-invitation .home-eyebrow { margin-bottom: 10px; color: #806231; }
        .home-event-invitation h2 {
          margin: 0;
          color: #171717;
          font-size: clamp(1.75rem, 3vw, 2.35rem);
          line-height: 1.2;
        }
        .home-event-invitation .home-event-description {
          max-width: 560px;
          margin: 14px 0 0;
          color: #6f6a61;
          font-size: 1rem;
          line-height: 1.65;
        }
        .home-event-button {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          gap: 18px;
          min-height: 50px;
          padding: 14px 24px;
          border: 1px solid #171717;
          border-radius: 999px;
          background: #171717;
          color: #faf7ee;
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1.4;
          text-decoration: none;
        }
        .home-event-button:hover { background: #171717; border-color: #171717; }
        .home-event-button:focus-visible { outline: 3px solid #efd39b; outline-offset: 5px; }
        @media (max-width: 760px) {
          .home-page .home-event-invitation { margin: 20px auto; padding: 30px 24px; border-radius: 14px; }
          .home-event-inner { flex-direction: column; align-items: flex-start; gap: 24px; }
          .home-event-button { width: 100%; padding-inline: 16px; }
        }
      `}</style>
    </div>
  );
}
