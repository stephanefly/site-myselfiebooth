import Layout from "../Layout";

const bookingUrl = "https://reservation.myselfiebooth-paris.fr/";

function SectionHeader({ eyebrow, title, text }) {
  return (
    <header className="marketing-section-header">
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </header>
  );
}

function CardGrid({ cards = [] }) {
  return (
    <div className="marketing-card-grid">
      {cards.map((card, index) => (
        <article key={`${card.title}-${index}`} className="marketing-card">
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </div>
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
    <section className="marketing-section is-muted">
      <div className="marketing-container">
        <SectionHeader
          eyebrow="Comparer"
          title="Les criteres utiles avant de demander un devis"
          text="Les donnees restent prudentes lorsque le format depend de la formule, de l'espace ou du volume d'invites."
        />
        <div className="marketing-comparison-grid">
          {items.map((item) => (
            <article key={item.title} className="marketing-comparison-card">
              <img src={item.image} alt={item.title} loading="lazy" />
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
    <section className="marketing-section">
      <div className="marketing-container">
        <SectionHeader
          eyebrow="Options"
          title="Toutes les options restent decouvrables"
          text="Les pages dediees existantes sont conservees, les autres options sont presentees dans le hub."
        />
        <div className="marketing-option-grid">
          {items.map((item) => (
            <article key={item.name} className="marketing-option-card">
              <img src={item.image} alt={item.name} loading="lazy" />
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              {item.href && <a href={item.href}>Details</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MarketingPage({ page }) {
  return (
    <Layout metaProps={page.meta}>
      <article className="marketing-page">
        <section className="marketing-hero">
          <div className="marketing-container marketing-hero-grid">
            <div className="marketing-hero-copy">
              <Breadcrumbs items={page.breadcrumbs} />
              <p className="marketing-eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p>{page.description}</p>
              <div className="marketing-actions">
                <a className="marketing-button primary" href={page.primaryCta?.href || bookingUrl}>
                  {page.primaryCta?.label || "Demander un devis"}
                </a>
                <a className="marketing-button secondary" href={page.secondaryCta?.href || "/prestations"}>
                  {page.secondaryCta?.label || "Voir les prestations"}
                </a>
                {page.phoneCta && (
                  <a className="marketing-button ghost" href={page.phoneCta.href}>
                    {page.phoneCta.label}
                  </a>
                )}
              </div>
              <p className="marketing-microcopy">Formulaire rapide, proposition personnalisee.</p>
            </div>
            <div className="marketing-hero-media">
              <img src={page.image} alt={page.imageAlt || page.title} width="934" height="700" />
              <div className="marketing-hero-proof">
                {(page.highlights || []).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              {page.aiNote && <p className="marketing-ai-note">{page.aiNote}</p>}
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

        {(page.sections || []).map((section, index) => (
          <section
            key={section.title}
            className={`marketing-section ${index % 2 === 1 ? "is-muted" : ""}`}
          >
            <div className="marketing-container">
              <SectionHeader
                eyebrow={section.eyebrow}
                title={section.title}
                text={section.text}
              />
              <CardGrid cards={section.cards} />
            </div>
          </section>
        ))}

        <ComparisonGrid items={page.comparison} />
        <OptionGrid items={page.optionGrid} />

        {(page.gallery || []).length > 0 && (
          <section className="marketing-section is-dark">
            <div className="marketing-container">
              <SectionHeader
                eyebrow="Apercu"
                title="Une image premium, des souvenirs exploitables"
                text="Les visuels doivent rassurer avant meme la demande de devis."
              />
              <div className="marketing-gallery">
                {page.gallery.map((image) => (
                  <figure key={image.image || image.src}>
                    <img src={image.image || image.src} alt={image.title || image.alt} loading="lazy" />
                    {(image.note || image.title) && (
                      <figcaption>
                        {image.title && <strong>{image.title}</strong>}
                        {image.note && <span>{image.note}</span>}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {(page.faq || []).length > 0 && (
          <section className="marketing-section">
            <div className="marketing-container marketing-faq-layout">
              <SectionHeader
                eyebrow="FAQ"
                title="Questions frequentes"
                text="Les reponses importantes pour reserver sans friction."
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
          <section className="marketing-section is-muted">
            <div className="marketing-container">
              <SectionHeader
                eyebrow="Continuer"
                title="Pages utiles pour finaliser votre choix"
                text="Le maillage interne garde les anciennes URLs accessibles et guide vers le devis."
              />
              <div className="marketing-related-grid">
                {page.relatedLinks.map((link) => (
                  <a key={link.href} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="marketing-final-cta">
          <div className="marketing-container">
            <p>{page.finalEyebrow || "Votre evenement merite une experience claire"}</p>
            <h2>{page.finalTitle || "Recevez une proposition adaptee a votre date et votre lieu."}</h2>
            <a href={bookingUrl}>Obtenir mon devis en 2 minutes</a>
          </div>
        </section>
      </article>

      <style jsx>{`
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
          padding: 124px 0 72px;
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
          grid-template-columns: 0.95fr 1.05fr;
          gap: 48px;
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
          font-size: clamp(2.2rem, 5vw, 4.9rem);
          line-height: 0.98;
          letter-spacing: 0;
        }

        .marketing-hero-copy > p:not(.marketing-eyebrow) {
          max-width: 640px;
          margin: 26px 0 0;
          color: #e8e0d3;
          font-size: 1.12rem;
          line-height: 1.7;
        }

        .marketing-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
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
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.36);
          background: #181818;
        }

        .marketing-ai-note {
          position: absolute;
          right: 16px;
          bottom: 16px;
          max-width: 320px;
          margin: 0;
          padding: 8px 10px;
          border-radius: 999px;
          color: #fff;
          background: rgba(0, 0, 0, 0.62);
          font-size: 0.78rem;
        }

        .marketing-hero-media img {
          width: 100%;
          height: min(64vh, 620px);
          display: block;
          object-fit: cover;
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
          padding: 24px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          background: #f5f1e8;
        }

        .marketing-proof-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .marketing-proof-grid div {
          padding: 18px;
          border-radius: 8px;
          background: #fff;
        }

        .marketing-proof-grid strong {
          display: block;
          color: #111;
          font-size: 1.8rem;
          line-height: 1;
        }

        .marketing-proof-grid span {
          display: block;
          margin-top: 8px;
          color: #5d5a52;
          font-weight: 700;
        }

        .marketing-section {
          padding: 84px 0;
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
          margin-bottom: 34px;
        }

        .marketing-section-header h2,
        .marketing-final-cta h2 {
          font-size: clamp(2rem, 3.6vw, 3.5rem);
        }

        .marketing-section-header span {
          display: block;
          margin-top: 18px;
          color: #5d5a52;
          line-height: 1.7;
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
        .marketing-option-card {
          padding: 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.08);
        }

        .marketing-card h3,
        .marketing-faq-list h3,
        .marketing-option-card h3,
        .marketing-comparison-card h3 {
          margin: 0;
          color: #151515;
          font-size: 1.24rem;
        }

        .marketing-card p,
        .marketing-faq-list p,
        .marketing-option-card p,
        .marketing-comparison-card p {
          margin: 12px 0 0;
          color: #5d5a52;
          line-height: 1.65;
        }

        .marketing-comparison-grid,
        .marketing-option-grid,
        .marketing-related-grid {
          display: grid;
          gap: 18px;
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
          height: 100%;
          min-height: 220px;
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
          aspect-ratio: 1;
          margin-bottom: 18px;
        }

        .marketing-gallery {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr;
          gap: 16px;
        }

        .marketing-gallery figure {
          position: relative;
          min-height: 280px;
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

        .marketing-gallery figure:first-child {
          grid-row: span 2;
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

        .marketing-gallery figcaption span {
          color: #d8d1c4;
          font-size: 0.78rem;
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
          padding: 72px 0;
          overflow: hidden;
          color: #fff;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.72)),
            url("/images/ai/fond-cta-noir-dore-ivoire.webp") center / cover;
        }

        .marketing-final-cta h2 {
          max-width: 780px;
        }

        .marketing-final-cta a {
          margin-top: 28px;
        }

        @media (max-width: 980px) {
          .marketing-hero-grid,
          .marketing-faq-layout {
            grid-template-columns: 1fr;
          }

          .marketing-proof-grid,
          .marketing-card-grid,
          .marketing-gallery,
          .marketing-comparison-grid,
          .marketing-option-grid,
          .marketing-related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .marketing-hero {
            padding-top: 104px;
          }

          .marketing-actions,
          .marketing-button {
            width: 100%;
          }

          .marketing-proof-grid,
          .marketing-card-grid,
          .marketing-gallery,
          .marketing-comparison-grid,
          .marketing-option-grid,
          .marketing-related-grid {
            grid-template-columns: 1fr;
          }

          .marketing-gallery figure:first-child {
            grid-row: auto;
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
