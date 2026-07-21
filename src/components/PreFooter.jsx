import { siteConfig } from "../data/site";

export default function PreFooter() {
  return (
    <section className="prefooter">
      <div className="prefooter-container">
        <div>
          <p className="prefooter-eyebrow">Pret a cadrer votre evenement ?</p>
          <h2>Recevez une proposition claire pour votre date, votre lieu et votre format.</h2>
          <span>{siteConfig.microcopy}</span>
        </div>
        <div className="prefooter-actions">
          <a className="prefooter-primary" href={siteConfig.quoteUrl} data-event="cta_quote_click">
            {siteConfig.primaryCtaLabel}
          </a>
          <a className="prefooter-secondary" href={siteConfig.phoneHref} data-event="phone_click">
            {siteConfig.phoneCtaLabel}
          </a>
        </div>
      </div>

      <style jsx>{`
        .prefooter {
          position: relative;
          padding: 56px 0;
          overflow: hidden;
          color: #fff;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.7)),
            url("/images/ai/fond-cta-noir-dore-ivoire.webp") center / cover;
          text-align: left;
        }

        .prefooter-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: center;
        }

        .prefooter-eyebrow {
          margin: 0 0 12px;
          color: #e5c46b;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.16rem;
          text-transform: uppercase;
        }

        h2 {
          max-width: 760px;
          margin: 0;
          color: #fff;
          font-size: clamp(1.8rem, 3vw, 3rem);
          line-height: 1.08;
        }

        span {
          display: block;
          margin-top: 14px;
          color: #d8d1c4;
          font-weight: 700;
        }

        .prefooter-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .prefooter-primary,
        .prefooter-secondary {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
        }

        .prefooter-primary {
          color: #17130a;
          background: #e5c46b;
        }

        .prefooter-secondary {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        @media (max-width: 760px) {
          .prefooter-container {
            grid-template-columns: 1fr;
          }

          .prefooter-actions {
            justify-content: stretch;
          }

          .prefooter-primary,
          .prefooter-secondary {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
