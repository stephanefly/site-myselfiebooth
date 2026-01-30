import Layout from "../components/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="page">
        <div className="container">
          <h1>Mentions légales</h1>
          <p>
            Ce site est édité par MySelfieBooth. Pour toute question, contactez
            notre équipe à{" "}
            <a href="mailto:contact@myselfiebooth-paris.fr">
              contact@myselfiebooth-paris.fr
            </a>
            .
          </p>
          <div className="card">
            <h2>Éditeur</h2>
            <p>MySelfieBooth — Photobooths premium pour événements.</p>
            <h2>Hébergement</h2>
            <p>Ce site est hébergé par un prestataire professionnel.</p>
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus (textes, images, logos) est protégé par
              le droit d'auteur. Toute reproduction est interdite sans accord
              écrit.
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
        }
        .card {
          margin-top: 2rem;
          background: #fff;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }
        a {
          color: #5a4300;
        }
      `}</style>
    </Layout>
  );
}
