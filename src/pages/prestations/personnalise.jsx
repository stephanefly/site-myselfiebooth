import Layout from "../../components/Layout";

const options = [
  "Photobooth + Miroirbooth",
  "360 Booth + Vogue Booth",
  "Pack photo + livre d'or vidéo",
  "Décors et personnalisation sur-mesure",
];

export default function Personnalise() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Offre personnalisée</span>
          <h1>Créez votre pack sur-mesure</h1>
          <p>
            Combinez plusieurs animations et bénéficiez d'une offre adaptée à
            votre budget et à votre événement.
          </p>
          <div className="hero-actions">
            <a
              href="mailto:contact@myselfiebooth-paris.fr"
              className="cta"
            >
              Demander un devis personnalisé
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/all_presta.webp" alt="Offre personnalisée" />
        </div>
      </section>

      <section className="section">
        <h2>Exemples de combinaisons</h2>
        <ul className="list">
          {options.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section alt">
        <h2>Parlons de votre événement</h2>
        <p>
          Indiquez-nous la date, la ville et le format de votre événement pour
          recevoir une proposition détaillée.
        </p>
        <a
          href="mailto:contact@myselfiebooth-paris.fr"
          className="cta"
        >
          Contacter l'équipe
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
          display: inline-block;
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
