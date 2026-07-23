import Layout from "../Layout";
import ImageSlot from "../ImageSlot";
import useRevealMotion from "../../hooks/useRevealMotion";

const bookingUrl = "https://reservation.myselfiebooth-paris.fr/";

const featureVisuals = {
  photobooth: { src: "/images/machines-ai/photobooth-mariage-myselfiebooth.webp", title: "Photobooth en réception" },
  miroirbooth: { src: "/images/machines-ai/miroirbooth-mariage-myselfiebooth.webp", title: "Miroirbooth en réception" },
  videobooth: { src: "/images/machines-ai/360booth-entreprise-myselfiebooth.webp", title: "360 Booth en événement" },
  air360booth: { src: "/images/machines-ai/air360-gala-myselfiebooth.webp", title: "Air360 Booth en gala" },
  ipadbooth: { src: "/images/machines-ai/ipadbooth-reception-myselfiebooth.webp", title: "iPad Booth en réception" },
  voguebooth: { src: "/images/vogue-real/vogue-booth-mariage-card.webp", title: "Vogue Booth Wedding Edition personnalisé" },
  packvip: { src: "/images/ai-fusions/pack-duo-vip.webp", title: "Pack VIP en réception" },
  personnalise: { src: "/images/machines-ai/hero-machines-myselfiebooth.webp", title: "Expérience personnalisée" },
  mariages: { src: "/images/machines-ai/miroirbooth-mariage-myselfiebooth.webp", title: "Ambiance de mariage" },
  anniversaires: { src: "/images/machines-ai/photobooth-mariage-myselfiebooth.webp", title: "Animation d'anniversaire" },
  soirees: { src: "/images/machines-ai/air360-gala-myselfiebooth.webp", title: "Ambiance de soirée" },
  corporates: { src: "/images/machines-ai/360booth-entreprise-myselfiebooth.webp", title: "Installation événementielle" },
  "prestations-index": { src: "/images/machines-ai/hero-machines-myselfiebooth.webp", title: "Les machines MySelfieBooth" },
  "evenements-index": { src: "/images/machines-ai/photobooth-mariage-myselfiebooth.webp", title: "Une animation qui rassemble" },
  "options-index": { src: "/images/machines-ai/options-souvenirs-myselfiebooth.webp", title: "Souvenirs personnalisés" },
  phonebooth: { src: "/images/machines-ai/phonebooth-reception-myselfiebooth.webp", title: "Messages audio des invités" },
  panneau: { src: "/images/machines-ai/panneaux-bienvenue-myselfiebooth.webp", title: "Panneau de bienvenue" },
  paris: { src: "/images/machines-ai/hero-machines-myselfiebooth.webp", title: "MySelfieBooth en événement" },
};

function SectionHeader({ eyebrow, title }) {
  return (
    <header className="marketing-section-header">
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{title}</h2>
    </header>
  );
}

function getSectionVisual(page, section, index) {
  const visuals = page.gallery || [];

  if (!visuals.length) {
    return null;
  }

  if (index === 0 && featureVisuals[page.key]) {
    return {
      image: featureVisuals[page.key].src,
      title: featureVisuals[page.key].title,
    };
  }

  const context = `${page.key} ${section.eyebrow || ""} ${section.title || ""}`.toLowerCase();
  const findByFile = (filename) => visuals.find((visual) =>
    (visual.image || visual.src || "").includes(filename)
  );

  if (/phonebooth|audio|livre d'or/.test(context)) {
    return findByFile("phonebooth-reception") || visuals[index % visuals.length];
  }

  if (/360|vidéo|video|vogue|soirée|soiree|anniversaire/.test(context)) {
    return findByFile("360booth-entreprise") || visuals[index % visuals.length];
  }

  if (/logistique|processus|installation|inclus|prévoir|prevoir|jour j/.test(context)) {
    return findByFile("atelier-machines") || visuals[index % visuals.length];
  }

  if (/option|souvenir|personnalis|tirage|galerie/.test(context)) {
    return findByFile("options-souvenirs") || visuals[index % visuals.length];
  }

  return visuals[index % visuals.length];
}

function CardGrid({ cards = [] }) {
  return (
    <div className="marketing-card-grid">
      {cards.slice(0, 4).map((card, index) => (
        <article
          key={`${card.title}-${index}`}
          className="marketing-card"
          data-reveal
          style={{ "--reveal-delay": `${Math.min(index, 5) * 45}ms` }}
        >
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </div>
  );
}

function getSectionId(section, index) {
  return section.anchor || `section-${index + 1}`;
}

function QuickNavigation({ page }) {
  const links = (page.sections || []).slice(0, 3).map((section, index) => ({
    href: `#${getSectionId(section, index)}`,
    label: section.eyebrow || section.title,
  }));

  if ((page.comparison || []).length) {
    links.push({ href: "#comparatif", label: "Comparer" });
  }

  if ((page.gallery || []).length) {
    links.push({ href: "#galerie", label: "Photos" });
  }

  if ((page.caseStudies || []).length) {
    links.push({ href: "#cas-entreprise", label: "Études de cas" });
  }

  if ((page.faq || []).length) {
    links.push({ href: "#faq", label: "FAQ" });
  }

  return (
    <nav className="marketing-quick-nav" aria-label="Accès rapide">
      <div className="marketing-container marketing-quick-nav-inner">
        <strong>Accès rapide</strong>
        <div>
          {links.slice(0, 6).map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <a className="marketing-quick-cta" href={bookingUrl}>Devis</a>
      </div>
    </nav>
  );
}

function Breadcrumbs({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <nav className="marketing-breadcrumbs" aria-label="Fil d'Ariane">
      {items.map((item, index) => (
        <span key={`${item.href}-${item.label}`}>
          {index > 0 && <span aria-hidden="true">/</span>}
          <a href={item.href}>{item.label}</a>
        </span>
      ))}
    </nav>
  );
}

function ComparisonGrid({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section id="comparatif" className="marketing-section is-muted" data-reveal>
      <div className="marketing-container">
        <SectionHeader
          eyebrow="Comparer"
          title="Comparez les formats"
        />
        <div className="marketing-comparison-grid">
          {items.map((item) => (
            <article key={item.title} className="marketing-comparison-card">
              <img src={item.image} alt={item.title} loading="lazy" width="720" height="480" />
              <div>
                <h3>{item.title}</h3>
                <dl>
                  {item.rows.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <a href={item.href}>Voir cette animation</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OptionGrid({ items = [] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section id="options-detail" className="marketing-section" data-reveal>
      <div className="marketing-container">
        <SectionHeader
          eyebrow="Options"
          title="Choisissez vos options"
        />
        <div className="marketing-option-grid">
          {items.map((item) => (
            <article key={item.name} className="marketing-option-card">
              <img src={item.image} alt={item.name} loading="lazy" width="640" height="480" />
              <h3>{item.name}</h3>
              {item.href && <a href={item.href}>Details</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PathwayGrid({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section id="parcours" className="marketing-section is-muted" data-reveal>
      <div className="marketing-container">
        <SectionHeader
          eyebrow="Parcours"
          title="Choisissez votre objectif"
        />
        <div className="marketing-pathway-grid">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="marketing-pathway-card">
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyGrid({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section id="cas-entreprise" className="marketing-section is-muted" data-reveal>
      <div className="marketing-container">
        <SectionHeader
          eyebrow="Études de cas réelles"
          title="Des dispositifs installés sur de vrais événements"
        />
        <div className="marketing-case-grid">
          {items.map((item) => (
            <article key={item.title} className="marketing-case-card">
              <div className="marketing-case-media">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    loading="lazy"
                    width="720"
                    height="540"
                  />
                ) : (
                  <ImageSlot slotId={item.imageSlotId} />
                )}
              </div>
              <div className="marketing-case-copy">
                {item.client && <span>Cas réel · {item.client}</span>}
                <h3>{item.title}</h3>
                <p><strong>Contexte :</strong> {item.context}</p>
                <p><strong>Dispositif :</strong> {item.solution}</p>
                <p><strong>Rendu livré :</strong> {item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderStory({ story }) {
  if (!story) {
    return null;
  }

  return (
    <section id="histoire" className="marketing-section" data-reveal>
      <div className="marketing-container marketing-story-grid">
        <ImageSlot slotId={story.imageSlotId} />
        <div>
          <p className="marketing-eyebrow">{story.eyebrow}</p>
          <h2>{story.title}</h2>
          <p>{story.text}</p>
          <a href={story.href}>{story.linkLabel}</a>
        </div>
      </div>
    </section>
  );
}

export default function MarketingPage({ page }) {
  const pageRef = useRevealMotion(page.key);

  return (
    <Layout metaProps={page.meta}>
      <article className="marketing-page" ref={pageRef}>
        <section className="marketing-hero">
          <div className="marketing-container marketing-hero-grid">
            <div className="marketing-hero-copy" data-reveal>
              <Breadcrumbs items={page.breadcrumbs} />
              <p className="marketing-eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p>{page.description}</p>
              <div className="marketing-actions">
                <a
                  className="marketing-button primary"
                  href={page.primaryCta?.href || bookingUrl}
                  data-event={page.primaryCta?.event || "cta_quote_click"}
                  data-event-label={page.primaryCta?.label || "Demander un devis"}
                >
                  {page.primaryCta?.label || "Demander un devis"}
                </a>
                <a
                  className="marketing-button secondary"
                  href={page.secondaryCta?.href || "/prestations"}
                  data-event={page.secondaryCta?.event}
                  data-event-label={page.secondaryCta?.label}
                >
                  {page.secondaryCta?.label || "Voir les prestations"}
                </a>
                {page.phoneCta && (
                  <a
                    className="marketing-button ghost"
                    href={page.phoneCta.href}
                    data-event="phone_click"
                    data-event-label={page.phoneCta.label}
                  >
                    {page.phoneCta.label}
                  </a>
                )}
              </div>
            </div>
            <div className="marketing-hero-media" data-reveal data-reveal-variant="scale">
              <div className="marketing-hero-media-pair">
                <img src={page.image} alt={page.imageAlt || page.title} width="934" height="700" />
              </div>
              <div className="marketing-hero-proof">
                {(page.highlights || []).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {(page.proof || []).length > 0 && (
          <section className="marketing-proof-band">
            <div className="marketing-container marketing-proof-grid">
              {page.proof.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <QuickNavigation page={page} />

        <PathwayGrid items={page.pathways} />

        {(page.sections || []).map((section, index) => {
          const visual = getSectionVisual(page, section, index);

          return (
            <section
              key={section.title}
              id={getSectionId(section, index)}
              className={`marketing-section ${index % 2 === 1 ? "is-muted" : ""}`}
            >
              <div className="marketing-container">
                <div className={`marketing-section-heading-row ${visual ? "has-visual" : ""}`} data-reveal>
                  <SectionHeader
                    eyebrow={section.eyebrow}
                    title={section.title}
                  />
                  {visual && (
                    <figure className="marketing-section-visual">
                      <div className={`marketing-section-media-pair ${visual.fallbackImage ? "is-pair" : ""}`}>
                        <picture>
                          {visual.fallbackImage && (
                            <source media="(prefers-reduced-motion: reduce)" srcSet={visual.fallbackImage} />
                          )}
                          <img
                            src={visual.image || visual.src}
                            alt={visual.title || visual.alt}
                            loading="lazy"
                          />
                        </picture>
                        {visual.fallbackImage && (
                          <img
                            src={visual.fallbackImage}
                            alt={page.imageAlt || page.title}
                            loading="lazy"
                          />
                        )}
                      </div>
                      {visual.title && <figcaption>{visual.title}</figcaption>}
                    </figure>
                  )}
                </div>
                <CardGrid cards={section.cards} />
              </div>
            </section>
          );
        })}

        <ComparisonGrid items={page.comparison} />
        <OptionGrid items={page.optionGrid} />
        <CaseStudyGrid items={page.caseStudies} />

        {(page.gallery || []).length > 0 && (
          <section id="galerie" className="marketing-section is-dark" data-reveal>
            <div className="marketing-container">
              <SectionHeader
                eyebrow="Photos"
                title="En images"
              />
              <div className="marketing-gallery">
                {page.gallery.slice(0, 8).map((image) => (
                  <figure key={image.image || image.src}>
                    <img
                      src={image.image || image.src}
                      alt={image.title || image.alt}
                      loading="lazy"
                      width="720"
                      height="540"
                    />
                    {image.title && (
                      <figcaption>
                        <strong>{image.title}</strong>
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {(page.faq || []).length > 0 && (
          <section id="faq" className="marketing-section" data-reveal>
            <div className="marketing-container marketing-faq-layout">
              <SectionHeader
                eyebrow="FAQ"
                title="Questions fréquentes"
              />
              <div className="marketing-faq-list">
                {page.faq.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {(page.relatedLinks || []).length > 0 && (
          <section id="liens-utiles" className="marketing-section is-muted" data-reveal>
            <div className="marketing-container">
              <SectionHeader
                eyebrow="À découvrir"
                title="Continuez votre visite"
              />
              <div className="marketing-related-grid">
                {page.relatedLinks.map((link) => (
                  <a key={link.href} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          </section>
        )}

        <FounderStory story={page.story} />

        <section className="marketing-final-cta" data-reveal>
          <div className="marketing-container">
            <p>{page.finalEyebrow || "Votre événement"}</p>
            <h2>{page.finalTitle || "Recevez votre proposition personnalisée."}</h2>
            <a href={bookingUrl} data-event="cta_quote_click" data-event-label="CTA final">
              Obtenir mon devis en 2 minutes
            </a>
          </div>
        </section>
      </article>

      <style jsx global>{`
        .marketing-page {
          background: #f7f3ea;
          color: #161616;
          text-align: left;
        }

        .marketing-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .marketing-hero {
          padding: 96px 0 36px;
          color: #fff;
          background: #070707;
        }

        .marketing-breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
          color: #d8d1c4;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .marketing-breadcrumbs a {
          color: inherit;
          text-decoration: none;
        }

        .marketing-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 36px;
          align-items: center;
        }

        .marketing-eyebrow,
        .marketing-section-header p,
        .marketing-final-cta p {
          margin: 0 0 14px;
          color: #b8913f;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.16rem;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .marketing-hero h1,
        .marketing-section-header h2,
        .marketing-final-cta h2 {
          margin: 0;
          color: inherit;
          font-size: 3rem;
          line-height: 1.03;
          letter-spacing: 0;
        }

        .marketing-hero-copy > p:not(.marketing-eyebrow) {
          max-width: 640px;
          margin: 20px 0 0;
          color: #e8e0d3;
          font-size: 1.02rem;
          line-height: 1.55;
        }

        .marketing-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .marketing-button,
        .marketing-final-cta a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 20px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
        }

        .marketing-button.primary,
        .marketing-final-cta a {
          color: #17130a;
          background: #e5c46b;
        }

        .marketing-button.secondary {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.34);
        }

        .marketing-button.ghost {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .marketing-microcopy {
          margin: 14px 0 0;
          color: #d8d1c4;
          font-size: 0.92rem;
        }

        .marketing-hero-media {
          position: relative;
          width: min(100%, 500px);
          justify-self: end;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.36);
          background: #181818;
        }

        .marketing-hero-media img {
          width: 100%;
          height: clamp(280px, 34vw, 370px);
          display: block;
          object-fit: cover;
        }

        .marketing-hero-media-pair {
          display: grid;
          grid-template-columns: 1fr;
        }

        .marketing-hero-media.has-motion .marketing-hero-media-pair {
          grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
        }

        .marketing-hero-media picture {
          min-width: 0;
          border-right: 2px solid #fff;
        }

        @media (prefers-reduced-motion: no-preference) {
          .marketing-page.motion-ready .marketing-hero-media-pair > img {
            animation: marketingHeroDrift 16s ease-in-out infinite alternate;
          }
        }

        @keyframes marketingHeroDrift {
          from { transform: scale(1.01); }
          to { transform: scale(1.05); }
        }

        .marketing-hero-proof {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .marketing-hero-proof span {
          padding: 8px 10px;
          border-radius: 999px;
          color: #fff;
          background: rgba(0, 0, 0, 0.62);
          backdrop-filter: blur(10px);
          font-size: 0.88rem;
          font-weight: 800;
        }

        .marketing-proof-band {
          padding: 14px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          background: #f5f1e8;
        }

        .marketing-proof-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .marketing-proof-grid div {
          padding: 14px;
          border-radius: 8px;
          background: #fff;
        }

        .marketing-proof-grid strong {
          display: block;
          color: #111;
          font-size: 1.45rem;
          line-height: 1;
        }

        .marketing-proof-grid span {
          display: block;
          margin-top: 8px;
          color: #5d5a52;
          font-weight: 700;
          font-size: 0.88rem;
        }

        .marketing-quick-nav {
          position: sticky;
          top: 72px;
          z-index: 40;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(14px);
        }

        .marketing-quick-nav-inner {
          min-height: 52px;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          gap: 22px;
          align-items: center;
        }

        .marketing-quick-nav-inner > strong {
          color: #171717;
          font-size: 0.82rem;
        }

        .marketing-quick-nav-inner > div {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .marketing-quick-nav-inner > div::-webkit-scrollbar {
          display: none;
        }

        .marketing-quick-nav-inner > div a {
          position: relative;
          flex: 0 0 auto;
          color: #4f4a42;
          font-size: 0.86rem;
          font-weight: 800;
          text-decoration: none;
        }

        .marketing-quick-nav-inner > div a::after {
          position: absolute;
          right: 0;
          bottom: -7px;
          left: 0;
          height: 2px;
          content: "";
          background: #b8913f;
          transform: scaleX(0);
          transition: transform 180ms ease;
        }

        .marketing-quick-nav-inner > div a:hover::after,
        .marketing-quick-nav-inner > div a:focus-visible::after {
          transform: scaleX(1);
        }

        .marketing-quick-cta {
          color: #17130a;
          font-size: 0.84rem;
          font-weight: 900;
          text-decoration: none;
        }

        .marketing-section {
          padding: 44px 0;
        }

        .marketing-section.is-muted {
          background: #f6f3ec;
        }

        .marketing-section.is-dark {
          color: #fff;
          background: #0b0b0b;
        }

        .marketing-section-header {
          max-width: 760px;
          margin-bottom: 20px;
        }

        .marketing-section-heading-row {
          display: block;
          gap: 32px;
          align-items: end;
          margin-bottom: 20px;
        }

        .marketing-section-heading-row.has-visual {
          display: grid;
          grid-template-columns: minmax(220px, 1fr) minmax(0, 3fr);
          align-items: stretch;
        }

        .marketing-section-heading-row .marketing-section-header {
          margin-bottom: 0;
        }

        .marketing-section-visual {
          position: relative;
          height: 230px;
          margin: 0;
          overflow: hidden;
          border-radius: 8px;
          background: #111;
        }

        .marketing-section-visual img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .marketing-section-media-pair {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr;
        }

        .marketing-section-media-pair.is-pair {
          grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
        }

        .marketing-section-media-pair picture {
          min-width: 0;
          border-right: 2px solid #fff;
        }

        .marketing-section-visual picture {
          width: 100%;
          height: 100%;
          display: block;
        }

        .marketing-section-visual figcaption {
          position: absolute;
          inset: auto 0 0;
          padding: 22px 12px 10px;
          color: #fff;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.78), transparent);
          font-size: 0.82rem;
          font-weight: 800;
        }

        .marketing-section-header h2,
        .marketing-final-cta h2 {
          font-size: 2.35rem;
          line-height: 1.1;
        }

        .marketing-section-header span {
          display: block;
          margin-top: 12px;
          color: #5d5a52;
          font-size: 0.98rem;
          line-height: 1.55;
        }

        .is-dark .marketing-section-header span {
          color: #d8d1c4;
        }

        .marketing-card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .marketing-card,
        .marketing-faq-list article,
        .marketing-faq-list details,
        .marketing-comparison-card,
        .marketing-option-card,
        .marketing-pathway-card,
        .marketing-case-card {
          padding: 18px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.08);
        }

        .marketing-card h3,
        .marketing-faq-list h3,
        .marketing-option-card h3,
        .marketing-comparison-card h3,
        .marketing-pathway-card h3,
        .marketing-case-card h3 {
          margin: 0;
          color: #151515;
          font-size: 1.08rem;
        }

        .marketing-card p,
        .marketing-faq-list p,
        .marketing-option-card p,
        .marketing-comparison-card p,
        .marketing-pathway-card p,
        .marketing-case-card p {
          margin: 12px 0 0;
          color: #5d5a52;
          font-size: 0.94rem;
          line-height: 1.52;
        }

        .marketing-comparison-grid,
        .marketing-option-grid,
        .marketing-pathway-grid,
        .marketing-case-grid,
        .marketing-related-grid {
          display: grid;
          gap: 18px;
        }

        .marketing-pathway-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .marketing-pathway-card {
          color: #151515;
          text-decoration: none;
          transition: transform 180ms ease, border-color 180ms ease;
        }

        .marketing-pathway-card:hover {
          border-color: #b8913f;
          transform: translateY(-3px);
        }

        .marketing-pathway-card span {
          display: block;
          margin-bottom: 18px;
          color: #b8913f;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.14rem;
          text-transform: uppercase;
        }

        .marketing-case-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .marketing-case-card {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 0;
          overflow: hidden;
        }

        .marketing-case-media {
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #111;
        }

        .marketing-case-media img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .marketing-case-copy {
          padding: 18px;
        }

        .marketing-case-copy > span {
          display: block;
          margin-bottom: 9px;
          color: #9a7324;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.06rem;
          text-transform: uppercase;
        }

        .marketing-case-card strong {
          color: #151515;
        }

        .marketing-story-grid {
          display: grid;
          grid-template-columns: minmax(260px, 0.45fr) 1fr;
          gap: 44px;
          align-items: center;
        }

        .marketing-story-grid h2 {
          max-width: 760px;
          margin: 0;
          color: #151515;
          font-size: 2.35rem;
          line-height: 1.1;
        }

        .marketing-story-grid p:not(.marketing-eyebrow) {
          max-width: 720px;
          margin: 20px 0 0;
          color: #5d5a52;
          font-size: 0.98rem;
          line-height: 1.55;
        }

        .marketing-story-grid a {
          display: inline-flex;
          margin-top: 24px;
          color: #8a6520;
          font-weight: 900;
          text-decoration: none;
        }

        .marketing-comparison-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .marketing-comparison-card {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 18px;
        }

        .marketing-comparison-card img,
        .marketing-option-card img {
          width: 100%;
          border-radius: 6px;
          object-fit: cover;
        }

        .marketing-comparison-card img {
          height: 160px;
          min-height: 0;
        }

        .marketing-comparison-card dl {
          display: grid;
          gap: 8px;
          margin: 0;
        }

        .marketing-comparison-card dl div {
          display: grid;
          grid-template-columns: 104px 1fr;
          gap: 10px;
        }

        .marketing-comparison-card dt {
          color: #b8913f;
          font-weight: 900;
        }

        .marketing-comparison-card dd {
          margin: 0;
          color: #5d5a52;
        }

        .marketing-comparison-card a,
        .marketing-option-card a,
        .marketing-related-grid a {
          color: #8a6520;
          font-weight: 900;
          text-decoration: none;
        }

        .marketing-option-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .marketing-option-card img {
          height: 150px;
          margin-bottom: 18px;
        }

        .marketing-gallery {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .marketing-gallery figure {
          position: relative;
          height: 190px;
          min-height: 0;
          margin: 0;
          overflow: hidden;
          border-radius: 8px;
          background: #111;
        }

        .marketing-gallery img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .marketing-gallery figcaption {
          position: absolute;
          inset: auto 0 0;
          display: grid;
          gap: 4px;
          padding: 18px;
          color: #fff;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0));
        }

        .marketing-faq-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 48px;
          align-items: start;
        }

        .marketing-faq-list {
          display: grid;
          gap: 14px;
        }

        .marketing-faq-list summary {
          min-height: 44px;
          display: flex;
          align-items: center;
          color: #151515;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 900;
        }

        .marketing-related-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .marketing-related-grid a {
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 999px;
          background: #fff;
        }

        .marketing-final-cta {
          position: relative;
          padding: 42px 0;
          overflow: hidden;
          color: #fff;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.72)),
            url("/images/machines-ai/hero-machines-myselfiebooth.webp") center / cover;
        }

        .marketing-final-cta h2 {
          max-width: 780px;
        }

        .marketing-final-cta a {
          margin-top: 28px;
        }

        @media (max-width: 980px) {
          .marketing-hero h1 {
            font-size: 3.05rem;
          }

          .marketing-section-header h2,
          .marketing-final-cta h2,
          .marketing-story-grid h2 {
            font-size: 2.15rem;
          }

          .marketing-hero-grid,
          .marketing-faq-layout {
            grid-template-columns: 1fr;
          }

          .marketing-proof-grid,
          .marketing-card-grid,
          .marketing-gallery,
          .marketing-comparison-grid,
          .marketing-option-grid,
          .marketing-pathway-grid,
          .marketing-case-grid,
          .marketing-related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .marketing-story-grid,
          .marketing-case-card {
            grid-template-columns: 1fr;
          }

          .marketing-hero-media {
            width: min(100%, 620px);
            justify-self: start;
          }

          .marketing-section-heading-row.has-visual {
            grid-template-columns: minmax(200px, 1fr) minmax(0, 3fr);
          }
        }

        @media (max-width: 680px) {
          .marketing-hero {
            padding: 96px 0 44px;
          }

          .marketing-hero h1 {
            font-size: 2.25rem;
          }

          .marketing-section-header h2,
          .marketing-story-grid h2 {
            font-size: 1.85rem;
          }

          .marketing-final-cta h2 {
            font-size: 1.95rem;
          }

          .marketing-quick-nav-inner {
            grid-template-columns: minmax(0, 1fr);
            gap: 0;
          }

          .marketing-quick-nav-inner > strong,
          .marketing-quick-cta {
            display: none;
          }

          .marketing-quick-nav-inner > div {
            gap: 18px;
          }

          .marketing-quick-nav-inner > div a {
            min-height: 48px;
            display: inline-flex;
            align-items: center;
          }

          .marketing-actions,
          .marketing-button {
            width: 100%;
          }

          .marketing-hero-media img {
            height: 270px;
          }

          .marketing-section-heading-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .marketing-section-heading-row.has-visual {
            grid-template-columns: 1fr;
          }

          .marketing-section-visual {
            width: 100%;
            height: 260px;
          }

          .marketing-proof-grid,
          .marketing-card-grid,
          .marketing-gallery,
          .marketing-comparison-grid,
          .marketing-option-grid,
          .marketing-pathway-grid,
          .marketing-case-grid,
          .marketing-related-grid {
            grid-template-columns: 1fr;
          }

          .marketing-gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .marketing-gallery figure {
            height: 160px;
          }

          .marketing-gallery figcaption {
            padding: 14px 10px 10px;
            font-size: 0.78rem;
          }

          .marketing-comparison-card {
            grid-template-columns: 1fr;
          }

          .marketing-comparison-card dl div {
            grid-template-columns: 1fr;
            gap: 2px;
          }
        }
      `}</style>
    </Layout>
  );
}
