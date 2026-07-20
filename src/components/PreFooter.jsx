const bookingUrl = "https://reservation.myselfiebooth-paris.fr";

export default function PreFooter() {
  return (
    <section className="prefooter">
      <div className="prefooter-container">
        <div>
          <p className="prefooter-eyebrow">Pret a cadrer votre evenement ?</p>
          <h2>Recevez une proposition claire pour votre date, votre lieu et votre format.</h2>
        </div>
        <div className="prefooter-actions">
          <a className="prefooter-primary" href={bookingUrl}>
            Obtenir un devis
          </a>
          <a className="prefooter-secondary" href="tel:+33699733998">
            Appeler
          </a>
        </div>
      </div>

      <style jsx>{`
        .prefooter {
          padding: 56px 0;
          color: #fff;
          background: #0b0b0b;
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
