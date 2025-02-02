import Layout from "../../components/Layout";

export default function Phonebooth() {
  return (
    <Layout>
      <div className="container">
        <div className="loader"></div>
        <h1>🚧Page en construction🚧</h1>
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

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
