import Layout from "../components/Layout";
import { absoluteUrl } from "../data/site";

export default function TestDeploiement() {
  return (
    <Layout
      metaProps={{
        title: "Test déploiement MySelfieBooth",
        description: "Page temporaire utilisée pour vérifier le déploiement automatique de MySelfieBooth.",
        ogTitle: "Test déploiement MySelfieBooth",
        ogDescription: "Vérification du déploiement automatique GitHub vers IONOS.",
        ogUrl: absoluteUrl("/test-deploiement/"),
        robots: "noindex, nofollow",
      }}
    >
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          background: "linear-gradient(135deg, #090909 0%, #171717 100%)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "760px",
            textAlign: "center",
            background: "#111",
            border: "1px solid #c8a45d",
            borderRadius: "24px",
            padding: "48px 28px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              border: "1px solid #c8a45d",
              color: "#c8a45d",
              fontSize: "14px",
              marginBottom: "24px",
            }}
          >
            TEST AUTOMATIQUE
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(34px, 6vw, 64px)",
              lineHeight: 1.05,
              margin: "0 0 20px",
            }}
          >
            Déploiement réussi
          </h1>

          <p
            style={{
              color: "#d7d7d7",
              fontSize: "18px",
              lineHeight: 1.7,
              margin: "0 auto 28px",
              maxWidth: "580px",
            }}
          >
            Si tu vois cette page sur le site MySelfieBooth, le flux ChatGPT → GitHub → IONOS fonctionne correctement.
          </p>

          <div
            style={{
              color: "#c8a45d",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            MySelfieBooth — test de mise en production
          </div>
        </div>
      </section>
    </Layout>
  );
}
