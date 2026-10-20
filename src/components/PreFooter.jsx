import { siteConfig } from "../data/site";

export default function PreFooter() {
  return (
    <section
      className="prefooter marketing-prefooter"
      aria-labelledby="prefooter-title"
    >
      <div className="prefooter-container">
        <div className="prefooter-copy">
          <p className="prefooter-eyebrow">À vous de jouer</p>
          <h2 id="prefooter-title">Imaginons votre événement.</h2>
          <p className="prefooter-description">
            Parlez-nous de votre projet, nous préparons votre devis sur mesure.
          </p>
        </div>
        <a
          className="prefooter-primary"
          href={siteConfig.quoteUrl}
          data-event="cta_quote_click"
        >
          {siteConfig.primaryCtaLabel}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M5 19 19 5M5 5h14v14" />
          </svg>
        </a>
      </div>
      <style jsx>{`
        .prefooter {
          padding: 44px 0;
          border-top: 1px solid #35372d;
          color: #f7f4ec;
          background: #111310;
          font-family: "Roboto", sans-serif;
          text-align: left;
        }
        .prefooter-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 32px;
          align-items: center;
        }
        .prefooter-eyebrow {
          margin: 0 0 10px;
          color: #d6b774;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.7;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .prefooter h2 {
          margin: 0;
          color: #f7f4ec;
          font-size: clamp(1.65rem, 3vw, 2.5rem);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: normal;
          text-wrap: balance;
        }
        .prefooter-description {
          max-width: 520px;
          margin: 12px 0 0;
          color: #bec0b5;
          font-size: 14px;
          line-height: 1.65;
        }
        .prefooter-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          gap: 24px;
          min-height: 50px;
          padding: 14px 22px;
          border: 1px solid #d6b774;
          border-radius: 4px;
          color: #15160f;
          background: #d6b774;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.5;
          text-decoration: none;
          transition: background 0.2s;
        }
        .prefooter-primary:hover {
          background: #ecd29a;
        }
        .prefooter-primary:focus-visible {
          outline: 3px solid #f7f4ec;
          outline-offset: 5px;
        }
        @media (max-width: 760px) {
          .prefooter {
            padding: 32px 0;
          }
          .prefooter-container {
            align-items: flex-start;
            flex-direction: column;
            gap: 22px;
          }
          .prefooter-description {
            font-size: 13px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .prefooter-primary {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
