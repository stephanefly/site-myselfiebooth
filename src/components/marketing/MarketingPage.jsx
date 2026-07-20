import Layout from "../Layout";

const bookingUrl = "https://reservation.myselfiebooth-paris.fr";

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
      {cards.map((card) => (
        <article key={card.title} className="marketing-card">
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function MarketingPage({ page }) {
  return (
    <Layout metaProps={page.meta}>
      <article className="marketing-page">
        <section className="marketing-hero">
          <div className="marketing-container marketing-hero-grid">
            <div className="marketing-hero-copy">
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
              </div>
            </div>
            <div className="marketing-hero-media">
              <img src={page.image} alt={page.imageAlt || page.title} />
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
                  <img key={image.src} src={image.src} alt={image.alt} />
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
                  <article key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="marketing-final-cta">
          <div className="marketing-container">
            <p>{page.finalEyebrow || "Votre evenement merite une experience claire"}</p>
            <h2>{page.finalTitle || "Recevez une proposition adaptee a votre date et votre lieu."}</h2>
            <a href={bookingUrl}>Obtenir un devis</a>
          </div>
        </section>
      </article>

      <style jsx>{`
        .marketing-page {
          background: #fff;
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

        .marketing-hero-media {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.36);
          background: #181818;
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
        .marketing-faq-list article {
          padding: 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.08);
        }

        .marketing-card h3,
        .marketing-faq-list h3 {
          margin: 0;
          color: #151515;
          font-size: 1.24rem;
        }

        .marketing-card p,
        .marketing-faq-list p {
          margin: 12px 0 0;
          color: #5d5a52;
          line-height: 1.65;
        }

        .marketing-gallery {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr;
          gap: 16px;
        }

        .marketing-gallery img {
          width: 100%;
          min-height: 280px;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .marketing-gallery img:first-child {
          grid-row: span 2;
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

        .marketing-final-cta {
          padding: 72px 0;
          color: #fff;
          background: #070707;
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
          .marketing-gallery {
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
          .marketing-gallery {
            grid-template-columns: 1fr;
          }

          .marketing-gallery img:first-child {
            grid-row: auto;
          }
        }
      `}</style>
    </Layout>
  );
}
