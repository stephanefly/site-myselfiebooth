import Layout from "../../components/Layout";

const inclus = [
  "Livraison et installation",
  "2 animateurs sur place",
  "Vidéos et impressions illimitées",
  "Galerie web",
  "Personnalisation complète",
];

export default function Packvip() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Pack VIP</span>
          <h1>Pack VIP</h1>
          <p>
            Combinez le Miroirbooth et le 360 Booth pour une expérience
            spectaculaire et haut de gamme.
          </p>
          <div className="hero-actions">
            <a
              href="https://reservation.myselfiebooth-paris.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Réserver le Pack VIP
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/pack.webp" alt="Pack VIP" />
        </div>
      </section>

      <section className="section">
        <div className="card price-card">
          <h2>Tarif unique</h2>
          <p className="price">850€ / 5h</p>
          <p>Deux animations pour un événement inoubliable.</p>
        </div>
      </section>

      <section className="section alt">
        <h2>Inclus dans la prestation</h2>
        <ul className="list">
          {inclus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section cta-section">
        <h2>Une offre exclusive</h2>
        <p>
          Idéal pour les grandes réceptions, les soirées d'entreprise ou les
          événements VIP.
        </p>
        <a
          href="https://reservation.myselfiebooth-paris.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          Demander un devis
        </a>
      </section>

      <style jsx>{`
        .hero {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          padding: 120px 20px 60px;
          background: linear-gradient(135deg, #0f0f0f, #3b2f0f);
          color: #fff;
          align-items: center;
        }
        .hero-content {
          max-width: 520px;
        }
        .tag {
          display: inline-block;
          background: linear-gradient(to right, #ffef96, #caa85f);
          color: #2b2100;
          padding: 6px 14px;
          border-radius: 999px;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .cta {
          background: linear-gradient(to right, #ffef96, #caa85f);
          color: #2b2100;
          padding: 12px 24px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: bold;
        }
        .hero-image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .section {
          padding: 60px 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .section h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .alt {
          background: #f8f5ef;
        }
        .price-card {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }
        .price {
          font-size: 2.4rem;
          font-weight: bold;
          color: #5a4300;
          margin: 1rem 0;
        }
        .list {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 0.75rem;
          max-width: 760px;
          margin: 0 auto;
        }
        .list li {
          background: #fff;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }
        .cta-section {
          text-align: center;
        }
        .cta-section p {
          max-width: 640px;
          margin: 0 auto 1.5rem;
        }
      `}</style>
    </Layout>
  );
}
