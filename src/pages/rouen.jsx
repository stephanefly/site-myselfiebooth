import Layout from "../components/Layout";

export default function Rouen() {
  return (
    <Layout>
      <section className="page">
        <div className="container">
          <h1>Photobooth à Rouen</h1>
          <p>
            Nous accompagnons vos événements à Rouen avec des photobooths
            élégants et une prestation complète : livraison, installation et
            assistance.
          </p>
          <div className="card">
            <h2>Une prestation sur-mesure</h2>
            <ul>
              <li>Installation rapide sur site.</li>
              <li>Personnalisation des visuels.</li>
              <li>Expérience fun pour tous vos invités.</li>
            </ul>
            <a
              href="https://reservation.myselfiebooth-paris.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Réserver à Rouen
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          padding: 120px 20px 60px;
          background: #f9f7f2;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
        }
        .card {
          margin-top: 2rem;
          background: #fff;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }
        ul {
          padding-left: 1.2rem;
          line-height: 1.8;
        }
        .cta {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 12px 24px;
          background: linear-gradient(to right, #ffef96, #caa85f);
          color: #2b2100;
          border-radius: 999px;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
}
