import Layout from "../components/Layout";
import { siteConfig } from "../data/site";

export default function Custom404() {
  return (
    <Layout
      metaProps={{
        title: "Page introuvable | MySelfieBooth",
        description:
          "La page demandee est introuvable. Retrouvez les prestations photobooth ou demandez un devis MySelfieBooth.",
        robots: "noindex, follow",
        ogUrl: null,
      }}
    >
      <section className="not-found-page">
        <div className="not-found-container">
          <p>404</p>
          <h1>Cette page n'existe plus, mais votre evenement peut encore etre bien cadre.</h1>
          <div className="not-found-actions">
            <a href={siteConfig.quoteUrl}>{siteConfig.primaryCtaLabel}</a>
            <a href="/prestations">Comparer les animations</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .not-found-page {
          min-height: 74vh;
          display: flex;
          align-items: center;
          padding: 128px 0 72px;
          color: #fff;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.72)),
            url("/images/machines-ai/hero-machines-myselfiebooth.webp") center / cover;
          text-align: left;
        }

        .not-found-container {
          width: min(860px, calc(100% - 32px));
          margin: 0 auto;
        }

        p {
          margin: 0 0 14px;
          color: #e5c46b;
          font-size: 0.85rem;
          font-weight: 900;
          letter-spacing: 0.18rem;
        }

        h1 {
          max-width: 780px;
          margin: 0;
          color: #fff;
          font-size: clamp(2.3rem, 5vw, 4.7rem);
          line-height: 0.98;
        }

        .not-found-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        a {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          border-radius: 999px;
          color: #17130a;
          background: #e5c46b;
          font-weight: 900;
          text-decoration: none;
        }

        a:last-child {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.26);
          background: rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 640px) {
          .not-found-actions,
          a {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
}
