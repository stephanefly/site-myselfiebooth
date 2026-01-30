import React from "react";
import Link from "next/link";

const needs = [
  {
    title: "Mariages",
    href: "/evenements/mariages",
    image: "/images/mariages/mariage1.JPG",
  },
  {
    title: "Entreprises",
    href: "/evenements/corporates",
    image: "/images/photobooth.webp",
  },
  {
    title: "Anniversaires",
    href: "/evenements/anniversaires",
    image: "/images/miroirbooth.webp",
  },
  {
    title: "Soirées",
    href: "/evenements/soirees",
    image: "/images/voguebooth.webp",
  },
];

const Besoins = () => {
  return (
    <section id="douleur" className="douleur-section">
      <div className="container">
        <h2 className="title fade-up">
          Immortalisez vos événements avec MySelfieBooth
        </h2>
        <p className="description fade-up stagger-1">
          Mariages, anniversaires, soirées privées ou événements d&apos;entreprise,
          chaque occasion est unique et mérite d&apos;être gravée dans les
          mémoires. Offrez à vos invités une animation ludique et originale avec
          nos photobooths, pour des souvenirs à partager et à conserver.
        </p>
        <p className="description fade-up stagger-2">
          Nous orchestrons toute la logistique, de la livraison à la mise en
          scène, pour que vous profitiez de votre moment sans stress. Résultat :
          un rendu élégant, une expérience fluide et des visuels dignes d&apos;un
          magazine.
        </p>

        <div className="needs-grid">
          {needs.map((item, index) => (
            <Link key={item.title} href={item.href} legacyBehavior>
              <a className={`needs-item fade-${index % 2 === 0 ? "left" : "right"}`}>
                <img
                  src={item.image}
                  alt={`Événement ${item.title}`}
                  className="background-image"
                />
                <div className="overlay">
                  <h3>{item.title}</h3>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="trust-grid fade-up">
          <div>
            <strong>0 souci technique</strong>
            <span>Assistance sur place + backup complet.</span>
          </div>
          <div>
            <strong>Livraison premium</strong>
            <span>Installation anticipée et check qualité.</span>
          </div>
          <div>
            <strong>Galerie privée</strong>
            <span>Accès sécurisé pour vos invités.</span>
          </div>
        </div>
        <div className="cta fade-up">
          <a href="https://reservation.myselfiebooth-paris.fr" className="cta-btn">
            Obtenir un devis personnalisé
          </a>
        </div>
      </div>

      <style jsx>{`
        .douleur-section {
          padding: 30px 20px;
          background: linear-gradient(45deg, #dddacb, #675e32);
          color: #fff;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #ffffff;
        }

        .description {
          font-size: 1.2rem;
          color: #ddd;
          margin-bottom: 15px;
          line-height: 1.5;
        }

        .needs-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }

        .needs-item {
          flex: 1 1 calc(50% - 30px);
          max-width: 550px;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          text-decoration: none;

        }

        .needs-item:hover {
          transform: translateY(-10px);
          cursor: pointer; /* Ajout pour changer le pointeur */
          box-shadow: 0 10px 25px rgb(255, 255, 255);
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
          padding: 120px 20px;
          background: rgb(248 248 248 / 73%);
          color: #fff;
          text-align: center;
          border-radius: 15px;
        }

        .overlay h3 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: #493f0d;
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
          border-radius: 14px;
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
          padding: 20px 40px;
          font-size: 1.6rem;
          background-image: linear-gradient(to bottom, #ffef96, #5a4300);
          color: #fff;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 5px 15px rgb(11, 11, 11);
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: linear-gradient(to bottom, #a69850, #e8d07a);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.99);
        }

        @media (max-width: 768px) {
          .needs-item {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Besoins;
