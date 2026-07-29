import { useState } from "react";
import {
  brandLogos,
  caseStudies,
  faqs,
  featuredPacks,
  featuredReels,
  galleryHighlights,
  googleReviews,
  marketPaths,
  optionHighlights,
  proofPoints,
  selectorNeeds,
  services,
} from "../../data/home";
import { blogArticles } from "../../data/blogArticles";
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
    ["#prestations", "Animations & tarifs"],
    ["#packs", "Packs"],
    ["#realisations", "Photos"],
    ["#avis", "Avis"],
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
        <img
          key={logo.name}
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          decoding="async"
          width="180"
          height="64"
        />
      ))}
    </div>
  );
}

const galleryFilters = ["Tous", "Mariages", "Entreprises", "Machines"];
const featuredHomeServices = services.filter((service) =>
  ["photobooth", "miroirbooth", "videobooth", "voguebooth"].includes(service.key)
);
const featuredHomePacks = featuredPacks.filter((pack) =>
  ["souvenirs", "duo-vip", "vogue-premium"].includes(pack.key)
);
const featuredHomeOptions = optionHighlights.slice(0, 8);
const featuredHomeReviews = googleReviews.slice(0, 3);
const heroPhotobooth = services.find((service) => service.key === "photobooth");

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
            <img
              src="/images/vogue-real/vogue-booth-mariage-lydia-vincent.webp"
              alt=""
              width="934"
              height="700"
            />
            <figcaption>
              <strong>Vogue Booth réel</strong>
              <span>Wedding Edition personnalisée pour Lydia et Vincent</span>
            </figcaption>
          </figure>
          <figure className="home-hero-film home-hero-film-paris">
            <img
              src="/images/realisations/sephora-360booth.webp"
              alt=""
              width="720"
              height="540"
            />
            <figcaption>
              <strong>Activation de marque</strong>
              <span>Le 360 Booth MySelfieBooth pour Sephora</span>
            </figcaption>
          </figure>
          <figure className="home-hero-film home-hero-film-primary">
            <video
              className="home-hero-video-primary"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/hero-pub-2024.webp"
            >
              <source src="/videos/PUB_2024.mp4" type="video/mp4" />
            </video>
            <figcaption>
              <strong>MySelfieBooth en action</strong>
              <span>Nos machines en action sur de vrais événements</span>
            </figcaption>
          </figure>
        </div>
        <div className="home-hero-overlay" />

        <div className="home-container home-hero-grid">
          <div className="home-hero-copy" data-reveal>
            <p className="home-eyebrow">Photobooth · Miroir · 360 · Vogue</p>
            <h1>Location de photobooth premium à Paris et en Île-de-France</h1>
            <p>
              Des souvenirs imprimés ou filmés, une installation maîtrisée et une
              expérience qui attire naturellement vos invités.
            </p>
            <ul className="home-hero-facts" aria-label="Repères MySelfieBooth">
              <li><strong>+700</strong> événements réalisés</li>
              <li><strong>5 ans</strong> d'expertise</li>
              <li><strong>{siteConfig.reviews.rating}</strong> sur Google</li>
            </ul>
            <div className="home-actions">
              <QuoteButton />
              <a className="home-button home-button-secondary" href="/prestations/photobooth">
                Découvrir le Photobooth
              </a>
            </div>
            <p className="home-microcopy">
              {siteConfig.microcopy} Besoin d'échanger ? <a href={siteConfig.phoneHref} data-event="phone_click">{siteConfig.phoneLabel}</a>
            </p>
          </div>

          <aside className="home-hero-offer" data-reveal aria-label="Offre Photobooth la plus demandée">
            <a className="home-hero-offer-media" href="/prestations/photobooth">
              <img
                src={heroPhotobooth.image}
                alt="Photobooth MySelfieBooth installé pendant une réception"
                width="640"
                height="480"
              />
              <span>Le plus demandé</span>
            </a>
            <div className="home-hero-offer-body">
              <div>
                <p>Photobooth</p>
                <strong>Dès 350 €</strong>
              </div>
              <ul>
                <li>Tirages personnalisés selon la formule</li>
                <li>Installation préparée avant le jour J</li>
                <li>Galerie privée après l'événement</li>
              </ul>
              <a href="/prestations/photobooth">Voir la formule Photobooth</a>
              <small>Paris, Île-de-France et déplacements selon projet</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-trust-band" aria-label="Preuves MySelfieBooth">
        <div className="home-container home-trust-band-inner">
          <div className="home-trust-summary">
            <strong>Une équipe technique, un accompagnement de terrain.</strong>
            <span>Conception, livraison, installation et suivi réunis.</span>
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

      <section className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Choisir par résultat"
            title="Quel souvenir voulez-vous offrir à vos invités ?"
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
            eyebrow="Nos incontournables"
            title="Les 4 expériences les plus demandées"
          />
          <div className="home-service-grid">
            {featuredHomeServices.map((service) => (
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
                    <a href={service.href}>{service.linkLabel}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="home-service-note">
            Chaque proposition détaille la durée, la livraison, l'installation,
            la personnalisation et les fichiers remis. Vous savez ce qui est prévu avant de réserver.
          </p>
          <div className="home-centered-action">
            <a href="/prestations" className="home-button home-button-secondary-dark">
              Voir toutes les animations
            </a>
          </div>
        </div>
      </section>

      <section id="packs" className="home-section home-section-muted" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Formules prêtes à réserver"
            title="Trois packs pour décider plus facilement"
          />
          <p className="home-section-lead">
            Photo, vidéo, décor et souvenirs sont réunis dans des formules lisibles,
            avec un prix de départ clairement affiché.
          </p>
          <div className="home-pack-grid">
            {featuredHomePacks.map((pack) => (
              <article key={pack.key} className={`home-pack-card ${pack.featured ? "is-featured" : ""}`}>
                <a className="home-pack-media" href="/prestations#packs">
                  <img
                    src={pack.fusionImage || pack.image}
                    alt={pack.fusionAlt}
                    loading="lazy"
                    width="720"
                    height="540"
                  />
                  <span className="home-visual-note">Visuel d'ambiance</span>
                </a>
                <div className="home-pack-body">
                  <span>{pack.tag}</span>
                  <h3>{pack.name}</h3>
                  <p>{pack.description}</p>
                  <ul>
                    {pack.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <div>
                    <strong>{pack.price}</strong>
                    <a href="/prestations#packs">Découvrir le pack</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-booking-band" data-reveal>
        <div className="home-container home-booking-band-inner">
          <div className="home-booking-heading">
            <p className="home-eyebrow">Devis clair</p>
            <h2>Votre date, votre lieu, votre formule.</h2>
          </div>
          <ol className="home-booking-steps">
            <li>
              <strong>1. Date et lieu</strong>
              <span>Indiquez où et quand.</span>
            </li>
            <li>
              <strong>2. Machines et options</strong>
              <span>Composez votre expérience.</span>
            </li>
            <li>
              <strong>3. Proposition confirmée</strong>
              <span>Recevez la formule et le tarif.</span>
            </li>
          </ol>
          <a className="home-button home-button-primary" href={siteConfig.quoteUrl} data-event="cta_quote_click">
            Vérifier ma date et demander mon devis
          </a>
        </div>
      </section>

      <section id="entreprises" className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Deux expertises événementielles"
            title="Une expérience adaptée à votre public"
          />
          <div className="home-market-grid">
            {marketPaths.map((path) => (
              <article key={path.eyebrow} className="home-market-card">
                <img src={path.image} alt={path.imageAlt} loading="lazy" width="720" height="540" />
                <div>
                  <span>{path.eyebrow}</span>
                  <h3>{path.title}</h3>
                  <p>{path.text}</p>
                  <a href={path.href}>{path.cta}</a>
                </div>
              </article>
            ))}
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
            {featuredHomeOptions.map((option) => (
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
            eyebrow="Cas réels"
            title="Des installations qui montrent le résultat, pas seulement la machine"
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
          <div className="home-centered-action home-case-action">
            <a href="/evenements/corporates" className="home-button home-button-secondary-dark">
              Voir nos solutions pour les entreprises
            </a>
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

      <section className="home-section home-client-section" data-reveal>
        <div className="home-container home-client-layout">
          <div>
            <p className="home-eyebrow">Références</p>
            <h2>Des marques exigeantes nous ont fait confiance.</h2>
            <p>
              Activations, salons, séminaires et soirées internes : chaque installation
              est préparée pour s'intégrer au lieu et à l'identité de l'événement.
            </p>
            <a href="/evenements/corporates">Découvrir l'offre entreprises</a>
          </div>
          <LogoStrip />
        </div>
      </section>

      <section id="avis" className="home-section home-reviews" data-reveal>
        <div className="home-container">
          <div className="home-reviews-heading">
            <SectionIntro
              eyebrow="Avis Google"
              title={`${siteConfig.reviews.rating} selon nos clients`}
            />
            <div className="home-review-actions">
              <a href={siteConfig.reviewsUrl} target="_blank" rel="noreferrer">
                Voir les {siteConfig.reviews.count} avis Google
              </a>
              <a href={siteConfig.reviewCtaUrl} target="_blank" rel="noreferrer">
                Laisser un avis
              </a>
            </div>
          </div>
          <div className="home-review-grid">
            {featuredHomeReviews.map((review) => (
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

      <section className="home-section home-section-light" data-reveal>
        <div className="home-container home-story-grid">
          <figure className="home-story-media">
            <img
              src="/images/equipe/equipe-myselfiebooth.webp"
              alt="Une partie de l'équipe MySelfieBooth réunie sur le terrain"
              width="1350"
              height="1800"
              loading="lazy"
            />
          </figure>
          <div>
            <p className="home-eyebrow">L'équipe et l'expertise</p>
            <h2>Créée par un ingénieur, portée par une équipe de terrain.</h2>
            <p>
              Ingénieur en aéronautique, Stéphane Faure a fabriqué les premières bornes
              avec son père. Cinq ans plus tard, la même exigence technique guide toute
              l'équipe, de la conception des machines à l'installation le jour J.
            </p>
            <ul className="home-story-points">
              <li>Machines développées et améliorées en interne</li>
              <li>Préparation, livraison, montage et tests coordonnés</li>
              <li>Accompagnement réactif avant, pendant et après l'événement</li>
            </ul>
            <a href="/a-propos">Découvrir notre histoire et notre équipe</a>
          </div>
        </div>
      </section>

      <section className="home-section home-section-light" data-reveal>
        <div className="home-container">
          <SectionIntro
            eyebrow="Conseils d'experts"
            title="Préparez une animation qui fonctionne vraiment"
          />
          <div className="home-blog-grid">
            {blogArticles.slice(0, 3).map((article) => (
              <article key={article.slug} className="home-blog-card">
                <span>{article.category} · {article.readTime}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a href={`/blog/${article.slug}`}>Lire le guide</a>
              </article>
            ))}
          </div>
          <div className="home-centered-action">
            <a href="/blog" className="home-button home-button-secondary-dark">Voir tous les conseils</a>
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

      <section className="home-final-cta" data-reveal>
        <div className="home-container home-final-cta-inner">
          <div>
            <p className="home-eyebrow">Votre événement mérite mieux qu'une animation générique</p>
            <h2>Créons l'expérience MySelfieBooth adaptée à votre date, votre lieu et vos invités.</h2>
          </div>
          <div>
            <QuoteButton />
            <a href={siteConfig.phoneHref} data-event="phone_click">Ou appelez le {siteConfig.phoneLabel}</a>
          </div>
        </div>
      </section>

      <nav className="home-mobile-cta" aria-label="Actions rapides">
        <a href={siteConfig.phoneHref} data-event="phone_click">Appeler</a>
        <a href={siteConfig.quoteUrl} data-event="cta_quote_click">Vérifier ma date</a>
      </nav>

    </div>
  );
}
