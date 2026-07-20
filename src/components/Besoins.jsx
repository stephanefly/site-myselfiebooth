import React from "react";
import Link from "next/link";

const needs = [
  {
    title: "Entreprises",
    subtitle: "Salons, seminaires, soirees internes, lancements produit",
    href: "/evenements/corporates",
    image: "/images/photobooth.webp",
  },
  {
    title: "Mariages",
    subtitle: "Une animation elegante pour vos invites",
    href: "/evenements/mariages",
    image: "/images/mariages/mariage1.JPG",
  },
  {
    title: "Anniversaires",
    subtitle: "Des souvenirs instantanes et faciles a partager",
    href: "/evenements/anniversaires",
    image: "/images/miroirbooth.webp",
  },
  {
    title: "Soirees",
    subtitle: "Une experience festive, immersive et premium",
    href: "/evenements/soirees",
    image: "/images/voguebooth.webp",
  },
];

const Besoins = () => {
  return (
    <section id="douleur" className="douleur-section">
      <div className="container">
        <p className="kicker fade-up">A chaque objectif son experience</p>
        <h2 className="title fade-up">
          Un photobooth adapte aux entreprises comme aux evenements prives
        </h2>
        <p className="description fade-up stagger-1">
          MySelfieBooth accompagne les marques, agences, equipes RH, couples et
          particuliers avec une prestation cle en main: livraison, installation,
          personnalisation, animation et galerie finale.
        </p>
        <p className="description fade-up stagger-2">
          Le bon format depend de votre public, de votre lieu et de l'effet
          recherche. Choisissez votre contexte, nous vous orientons vers la
          prestation la plus efficace.
        </p>

        <div className="needs-grid">
          {needs.map((item, index) => (
            <Link key={item.title} href={item.href} legacyBehavior>
              <a
                className={`needs-item ${index === 0 ? "is-featured" : ""} fade-${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <img
                  src={item.image}
                  alt={`Evenement ${item.title}`}
                  className="background-image"
                />
                <div className="overlay">
                  <span>{index === 0 ? "B2B" : "Prive"}</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>

        <div className="trust-grid fade-up">
          <div>
            <strong>Brief dedie</strong>
            <span>Conseil sur le format, le decor et les options.</span>
          </div>
          <div>
            <strong>Installation controlee</strong>
            <span>Arrivee anticipee, tests et assistance sur place.</span>
          </div>
          <div>
            <strong>Galerie securisee</strong>
            <span>Acces prive pour vos invites ou votre equipe.</span>
          </div>
        </div>

        <div className="cta fade-up">
          <a href="https://reservation.myselfiebooth-paris.fr" className="cta-btn">
            Obtenir un devis personnalise
          </a>
        </div>
      </div>

      <style jsx>{`
        .douleur-section {
          padding: 4rem 1.25rem;
          background: linear-gradient(45deg, #dddacb, #675e32);
          color: #fff;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .kicker {
          text-transform: uppercase;
          letter-spacing: 0.25rem;
          font-size: 0.82rem;
          color: #fff5bf;
          margin-bottom: 0.75rem;
        }

        .title {
          font-size: clamp(2rem, 3vw, 2.7rem);
          font-weight: bold;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .description {
          font-size: 1.15rem;
          color: #f2f2f2;
          margin: 0 auto 1rem;
          line-height: 1.6;
          max-width: 860px;
        }

        .needs-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .needs-item {
          min-height: 280px;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .needs-item.is-featured {
          grid-column: span 2;
          min-height: 340px;
        }

        .needs-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.45);
        }

        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .overlay {
          position: relative;
          z-index: 2;
          min-height: inherit;
          padding: 2rem;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.78),
            rgba(0, 0, 0, 0.28)
          );
          color: #fff;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .overlay span {
          color: #ffef96;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.16rem;
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .overlay h3 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .overlay p {
          color: #f2ead9;
          font-size: 1.05rem;
          max-width: 620px;
        }

        .trust-grid {
          margin: 2.5rem auto 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          color: #fff;
        }

        .trust-grid div {
          background: rgba(0, 0, 0, 0.35);
          border-radius: 8px;
          padding: 1rem 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .trust-grid strong {
          font-size: 1.1rem;
        }

        .trust-grid span {
          color: #f4f4f4;
        }

        .cta-btn {
          display: inline-block;
          padding: 1rem 1.7rem;
          font-size: clamp(1rem, 2vw, 1.25rem);
          background-image: linear-gradient(to bottom, #ffef96, #5a4300);
          color: #fff;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 5px 15px rgb(11, 11, 11);
          transition: all 0.3s ease;
          font-weight: 800;
        }

        .cta-btn:hover {
          background: linear-gradient(to bottom, #a69850, #e8d07a);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.65);
        }

        @media (max-width: 768px) {
          .needs-grid {
            grid-template-columns: 1fr;
          }

          .needs-item.is-featured {
            grid-column: span 1;
          }

          .overlay {
            text-align: center;
            background: rgba(0, 0, 0, 0.62);
          }
        }
      `}</style>
    </section>
  );
};

export default Besoins;
