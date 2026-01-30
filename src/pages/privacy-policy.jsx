import Layout from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="page">
        <div className="container">
          <h1>Politique de confidentialité</h1>
          <p>
            Chez MySelfieBooth, la confidentialité de vos données est une
            priorité. Cette page explique quelles informations nous collectons
            et comment elles sont utilisées.
          </p>
          <div className="card">
            <h2>Données collectées</h2>
            <p>
              Nous collectons uniquement les informations nécessaires à la
              gestion de votre réservation et à l'amélioration de nos services
              (coordonnées, informations sur l'événement, préférences).
            </p>
            <h2>Utilisation des données</h2>
            <p>
              Vos données servent à vous répondre, planifier l'événement et vous
              proposer des solutions personnalisées. Elles ne sont jamais
              revendues.
            </p>
            <h2>Vos droits</h2>
            <p>
              Vous pouvez demander l'accès, la modification ou la suppression
              de vos données à tout moment via{" "}
              <a href="mailto:contact@myselfiebooth-paris.fr">
                contact@myselfiebooth-paris.fr
              </a>
              .
            </p>
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
          text-align: left;
        }
        h1 {
          margin-bottom: 1rem;
        }
        .card {
          background: #fff;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }
        h2 {
          margin-top: 1.5rem;
        }
        p {
          line-height: 1.7;
        }
        a {
          color: #5a4300;
        }
      `}</style>
    </Layout>
  );
}
