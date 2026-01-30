import Layout from "../components/Layout";

export default function Blog() {
  return (
    <Layout>
      <section className="page">
        <div className="container">
          <h1>Blog MySelfieBooth</h1>
          <p>
            Retrouvez bientôt nos conseils, inspirations et retours
            d'expérience pour réussir vos événements.
          </p>
          <div className="card">
            <h2>Articles à venir</h2>
            <ul>
              <li>Comment choisir un photobooth pour son mariage ?</li>
              <li>Nos idées d'animations pour entreprises</li>
              <li>Les meilleures tendances photo de l'année</li>
            </ul>
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
      `}</style>
    </Layout>
  );
}
