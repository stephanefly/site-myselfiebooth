export default function Experience() {
  const highlights = [
    {
      title: "Image de marque respectee",
      description:
        "Habillage graphique, ecran d'accueil, templates photo et galerie peuvent reprendre vos couleurs, votre logo et votre campagne.",
      accent: "fade-left",
    },
    {
      title: "Parcours invite fluide",
      description:
        "Installation anticipee, cadrage, impression, partage instantane et accompagnement sur place pour garder un rythme naturel.",
      accent: "fade-up",
    },
    {
      title: "Preuves et souvenirs",
      description:
        "Photos, GIF, videos et galerie privee livree apres l'evenement pour prolonger l'impact de votre reception ou operation.",
      accent: "fade-right",
    },
  ];

  const steps = [
    {
      title: "Brief et recommandation",
      text: "Nous cadrons votre objectif: animation de marque, mariage, salon, lancement produit ou soiree interne.",
    },
    {
      title: "Preparation graphique",
      text: "Nous adaptons les visuels, les formats de partage et les options pour un rendu coherent avec votre univers.",
    },
    {
      title: "Exploitation le jour J",
      text: "Livraison, montage, tests, assistance et galerie finale: l'experience reste simple pour vous comme pour vos invites.",
    },
  ];

  const galleryImages = [
    "/images/ia/home/tile-02_r1c2.webp",
    "/images/ia/home/tile-03_r1c3.webp",
    "/images/ia/home/tile-07_r3c1.webp",
    "/images/ia/home/tile-12_r4c3.webp",
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="experience-header fade-up">
          <p className="experience-kicker">Experience signature</p>
          <h2>Une animation photo premium, prete pour le B2B comme pour le prive</h2>
          <p className="experience-lead">
            MySelfieBooth transforme un simple coin photo en experience de marque:
            design soigne, materiel elegant, equipe presente et contenus faciles
            a partager. Le resultat est visible, fluide et memorable.
          </p>
        </div>

        <div className="experience-gallery fade-up">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className={`gallery-tile ${index % 2 === 0 ? "fade-left" : "fade-right"}`}
            >
              <img src={src} alt="Ambiance photobooth premium" />
            </div>
          ))}
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <div key={item.title} className={`highlight-card ${item.accent}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="step-grid">
          {steps.map((step, index) => (
            <div key={step.title} className={`step-card fade-up stagger-${index + 1}`}>
              <span className="step-index">0{index + 1}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          padding: 5rem 1.5rem;
          background: linear-gradient(120deg, #0d0d0d 0%, #201b13 100%);
          color: #fff;
        }

        .experience-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .experience-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .experience-kicker {
          text-transform: uppercase;
          letter-spacing: 0.28rem;
          font-size: 0.8rem;
          color: #ffef96;
          margin-bottom: 1rem;
        }

        .experience-header h2 {
          font-size: clamp(2rem, 3.4vw, 3rem);
          margin-bottom: 1rem;
        }

        .experience-lead {
          color: #d8d2c4;
          max-width: 820px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .experience-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.2rem;
          margin: 2.5rem auto 3rem;
        }

        .gallery-tile {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.25);
        }

        .gallery-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .highlight-card {
          padding: 1.8rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.25);
        }

        .highlight-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.6rem;
          color: #ffef96;
        }

        .highlight-card p {
          color: #ede7dd;
          line-height: 1.6;
        }

        .step-grid {
          display: grid;
          gap: 1.5rem;
        }

        .step-card {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          padding: 1.5rem 2rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .step-index {
          font-size: 2rem;
          font-weight: 700;
          color: #ffef96;
        }

        .step-card h4 {
          margin-bottom: 0.4rem;
        }

        .step-card p {
          color: #e3dccf;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .step-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
