import Layout from "../../components/Layout";

const points = [
  "Animation fun pour tous les âges",
  "Impressions instantanées",
  "Accessoires et personnalisation",
  "Galerie en ligne pour revivre la soirée",
];

export default function Anniversaires() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Anniversaires</span>
          <h1>Faites de votre anniversaire un moment inoubliable</h1>
          <p>
            Une animation photo ludique qui fait sourire vos invités et crée des
            souvenirs à partager.
          </p>
          <div className="hero-actions">
            <a
              href="https://reservation.myselfiebooth-paris.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Réserver pour mon anniversaire
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/miroirbooth.webp" alt="Photobooth anniversaire" />
        </div>
      </section>

      <section className="section">
        <h2>Tout pour une fête réussie</h2>
        <ul className="list">
          {points.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section alt">
        <h2>Souvenirs personnalisés</h2>
        <p>
          Créez des cadres photo personnalisés avec votre prénom, votre âge et
          le thème de la soirée.
        </p>
      </section>

      <style jsx>{`
        .hero {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          padding: 120px 20px 60px;
          background: linear-gradient(135deg, #221b12, #5a4300);
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
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        .alt {
          background: #f8f5ef;
        }
        .list {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 0.75rem;
          max-width: 760px;
          margin: 2rem auto 0;
        }
        .list li {
          background: #fff;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </Layout>
  );
}
