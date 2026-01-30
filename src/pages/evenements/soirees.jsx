import Layout from "../../components/Layout";

const points = [
  "Animation tendance et immersive",
  "Photos et vidéos partageables",
  "Personnalisation du décor",
  "Assistance et installation incluses",
];

export default function Soirees() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Soirées privées</span>
          <h1>Un photobooth qui met l'ambiance</h1>
          <p>
            Apportez une touche fun et élégante à vos soirées privées ou
            événementielles.
          </p>
          <div className="hero-actions">
            <a
              href="https://reservation.myselfiebooth-paris.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Réserver pour ma soirée
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/voguebooth.webp" alt="Photobooth soirée" />
        </div>
      </section>

      <section className="section">
        <h2>Une ambiance mémorable</h2>
        <ul className="list">
          {points.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section alt">
        <h2>Des souvenirs à partager</h2>
        <p>
          Vos invités repartent avec des photos imprimées et une galerie en
          ligne pour revivre la soirée.
        </p>
      </section>

      <style jsx>{`
        .hero {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          padding: 120px 20px 60px;
          background: linear-gradient(135deg, #101010, #3b2f0f);
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
