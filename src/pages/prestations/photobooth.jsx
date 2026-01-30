import Layout from "../../components/Layout";

const tarifs = [
  { label: "Formule 3h", price: "350€" },
  { label: "Formule 5h", price: "450€" },
];

const inclus = [
  "Impressions illimitées",
  "Livraison et installation",
  "Animateur sur place",
  "Photos numériques illimitées",
  "Personnalisation des cadres",
  "Galerie web privée",
];

const options = [
  "GIFs et vidéos",
  "Fond vert",
  "Arrière-plans premium",
  "Livre d'or numérique",
];

export default function Photobooth() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Best seller</span>
          <h1>Photobooth Classique</h1>
          <p>
            L'animation photo incontournable pour vos mariages, soirées privées
            et événements d'entreprise. Des souvenirs imprimés en illimité et
            une expérience fluide pour vos invités.
          </p>
          <div className="hero-actions">
            <a
              href="https://reservation.myselfiebooth-paris.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Réserver le photobooth
            </a>
            <a href="/options/phonebooth" className="ghost">
              Voir les options
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/photobooth.webp" alt="Photobooth MySelfieBooth" />
        </div>
      </section>

      <section className="section">
        <h2>Tarifs transparents</h2>
        <div className="grid">
          {tarifs.map((item) => (
            <div key={item.label} className="card">
              <h3>{item.label}</h3>
              <p className="price">{item.price}</p>
              <p>Impressions et photos numériques illimitées.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <h2>Tout est inclus</h2>
        <ul className="list">
          {inclus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Options disponibles</h2>
        <ul className="list">
          {options.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section cta-section">
        <h2>Prêt à réserver ?</h2>
        <p>
          Nous répondons rapidement et personnalisons chaque prestation selon
          votre événement.
        </p>
        <a
          href="https://reservation.myselfiebooth-paris.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          Estimer mon prix
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
        .ghost {
          border: 1px solid #fff;
          color: #fff;
          padding: 12px 24px;
          border-radius: 999px;
          text-decoration: none;
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
        .grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .card {
          background: #fff;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          text-align: center;
        }
        .price {
          font-size: 2rem;
          font-weight: bold;
          color: #5a4300;
          margin: 0.5rem 0 1rem;
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
