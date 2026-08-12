import { useEffect } from "react";
import Layout from "../components/Layout";
import { absoluteUrl, siteConfig } from "../data/site";

export default function Merci() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.mySelfieBoothTrack === "function") {
      window.mySelfieBoothTrack("lead_confirmation_view", {
        event_category: "conversion",
        event_label: "Page de remerciement",
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <Layout
      metaProps={{
        title: "Merci pour votre demande | MySelfieBooth",
        description:
          "Votre demande MySelfieBooth a bien été transmise. Notre équipe revient vers vous avec une proposition adaptée à votre événement.",
        ogUrl: absoluteUrl("/merci/"),
        robots: "noindex, follow",
      }}
    >
      <section className="thanks-page">
        <div className="thanks-card">
          <p className="thanks-eyebrow">Demande reçue</p>
          <h1>Merci, votre demande est bien partie.</h1>
          <p className="thanks-lead">
            Nous allons vérifier votre date, votre lieu et la formule demandée avant de revenir vers vous avec une proposition claire.
          </p>

          <div className="thanks-next">
            <article>
              <strong>1</strong>
              <span>Nous vérifions la disponibilité.</span>
            </article>
            <article>
              <strong>2</strong>
              <span>Nous cadrons les options utiles.</span>
            </article>
            <article>
              <strong>3</strong>
              <span>Vous recevez une proposition personnalisée.</span>
            </article>
          </div>

          <div className="thanks-actions">
            <a href="/realisations/">Voir nos réalisations</a>
            <a href={siteConfig.phoneHref} className="is-secondary" data-event="phone_click">
              Une urgence ? Appeler
            </a>
          </div>
        </div>

        <style jsx>{`
          .thanks-page {
            min-height: 62vh;
            display: grid;
            place-items: center;
            padding: 72px 16px;
            background: #f7f4ed;
          }

          .thanks-card {
            width: min(820px, 100%);
            padding: clamp(30px, 6vw, 62px);
            border: 1px solid #e4dccd;
            border-radius: 22px;
            background: #fff;
            box-shadow: 0 24px 70px rgba(22, 18, 10, 0.08);
            text-align: center;
          }

          .thanks-eyebrow {
            margin: 0 0 12px;
            color: #8b6e24;
            font-size: 0.78rem;
            font-weight: 900;
            letter-spacing: 0.16rem;
            text-transform: uppercase;
          }

          h1 {
            max-width: 680px;
            margin: 0 auto;
            color: #17130a;
            font-size: clamp(2rem, 5vw, 3.5rem);
            line-height: 1.04;
          }

          .thanks-lead {
            max-width: 650px;
            margin: 20px auto 0;
            color: #625b50;
            font-size: 1.05rem;
            line-height: 1.7;
          }

          .thanks-next {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin: 34px 0;
            text-align: left;
          }

          .thanks-next article {
            padding: 18px;
            border-radius: 14px;
            background: #f7f4ed;
          }

          .thanks-next strong,
          .thanks-next span {
            display: block;
          }

          .thanks-next strong {
            color: #9c7a24;
            font-size: 1.35rem;
          }

          .thanks-next span {
            margin-top: 8px;
            color: #403b33;
            line-height: 1.5;
          }

          .thanks-actions {
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          .thanks-actions a {
            min-height: 46px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0 22px;
            border-radius: 999px;
            color: #17130a;
            background: #e5c46b;
            font-weight: 900;
            text-decoration: none;
          }

          .thanks-actions .is-secondary {
            border: 1px solid #d8cebc;
            background: #fff;
          }

          @media (max-width: 680px) {
            .thanks-next {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
}
