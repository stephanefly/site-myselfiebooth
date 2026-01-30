import Layout from "../components/Layout";

export default function Conditions() {
  return (
    <Layout>
      <section className="page">
        <div className="container">
          <h1>Conditions générales de location</h1>
          <p>
            Retrouvez ici les conditions principales de réservation et de
            prestation. Notre équipe reste disponible pour toute précision.
          </p>
          <div className="card">
            <h2>Réservation</h2>
            <p>
              La réservation est confirmée après validation du devis et versement
              de l'acompte. Les dates sont bloquées dès réception de la
              confirmation.
            </p>
            <h2>Livraison et installation</h2>
            <p>
              Nous assurons la livraison, l'installation et la reprise du matériel
              selon les horaires convenus.
            </p>
            <h2>Annulation</h2>
            <p>
              Toute annulation doit être notifiée par écrit. Des frais peuvent
              s'appliquer selon le délai.
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
      `}</style>
    </Layout>
  );
}
