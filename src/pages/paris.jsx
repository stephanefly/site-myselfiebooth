import Layout from "../components/Layout";

export default function Paris() {
  return (
    <Layout>
      <section className="page">
        <div className="container">
          <h1>Photobooth à Paris</h1>
          <p>
            MySelfieBooth accompagne vos événements parisiens avec des
            photobooths premium, élégants et faciles à installer.
          </p>
          <div className="card">
            <h2>Nos engagements à Paris</h2>
            <ul>
              <li>Livraison rapide et installation discrète.</li>
              <li>Personnalisation des cadres photo.</li>
              <li>Assistance sur place pendant votre événement.</li>
            </ul>
            <a
              href="https://reservation.myselfiebooth-paris.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Réserver à Paris
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
