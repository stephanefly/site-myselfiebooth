import Layout from "../../components/Layout";

export default function Voguebooth() {
  return (
    <Layout>
      <div className="container">
        <div className="loader"></div>
        <h1>🚧Page en construction4🚧</h1>
        <p>Nous travaillons activement sur cette section.</p>
        <p>Revenez bientôt pour découvrir nos offres pour 2025!</p>
      </div>

      {/* Styles en ligne */}
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
          margin-top: 60px;  
        }

        h1 {
          color: #ff9800;
        }
        p {
          color: #333;
          font-size: 18px;
        }
      `}</style>
    </Layout>
  );
}
