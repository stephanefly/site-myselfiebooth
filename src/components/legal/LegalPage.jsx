import Layout from "../Layout";

export default function LegalPage({ title, intro, sections }) {
  return (
    <Layout
      metaProps={{
        title: `${title} | MySelfieBooth`,
        description: intro,
      }}
    >
      <section className="legal-page">
        <div className="legal-container">
          <p className="legal-eyebrow">Informations</p>
          <h1>{title}</h1>
          <p className="legal-intro">{intro}</p>
          <div className="legal-card">
            {sections.map((section) => (
              <article key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .legal-page {
          padding: 124px 0 72px;
          background: #f6f3ec;
          text-align: left;
        }

        .legal-container {
          width: min(900px, calc(100% - 32px));
          margin: 0 auto;
        }

        .legal-eyebrow {
          margin: 0 0 12px;
          color: #b8913f;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.16rem;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          color: #151515;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          line-height: 1;
        }

        .legal-intro {
          max-width: 720px;
          margin: 22px 0 0;
          color: #5d5a52;
          line-height: 1.7;
        }

        .legal-card {
          display: grid;
          gap: 22px;
          margin-top: 34px;
          padding: 30px;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.08);
        }

        h2 {
          margin: 0 0 8px;
          color: #151515;
          font-size: 1.24rem;
        }

        p {
          color: #5d5a52;
          line-height: 1.7;
        }
      `}</style>
    </Layout>
  );
}
