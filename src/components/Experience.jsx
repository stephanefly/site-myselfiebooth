export default function Experience() {
  const highlights = [
    {
      title: "Ambiance 2025",
      description:
        "Design lumineux, transitions douces et une narration visuelle qui met vos invités au cœur de l'expérience.",
      accent: "fade-left",
    },
    {
      title: "Parcours ultra fluide",
      description:
        "Une prise en main en 2 minutes : installation, cadrage, impression et partage instantané, tout est optimisé.",
      accent: "fade-up",
    },
    {
      title: "Premium & humain",
      description:
        "Une équipe dédiée, des accessoires soignés et un suivi personnalisé pour rendre chaque événement unique.",
      accent: "fade-right",
    },
  ];

  const steps = [
    {
      title: "On prépare ensemble",
      text: "Brief créatif, choix des fonds, templates sur-mesure et plan de salle pour un rendu impeccable.",
    },
    {
      title: "On installe sans stress",
      text: "Livraison, montage, réglages lumière et tests : tout est prêt avant l'arrivée des invités.",
    },
    {
      title: "On crée des souvenirs",
      text: "Photos, GIF et vidéos partagés en direct + galerie privée livrée après l'événement.",
    },
  ];

  const galleryImages = [
    "/images/decoration-voguebooth.webp",
    "/images/ALL-MURS.webp",
    "/images/fond 360.webp",
    "/images/Welcomeboard.webp",
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="experience-header fade-up">
          <p className="experience-kicker">Expérience signature</p>
          <h2>Un photobooth complet, esthétique et ultra moderne</h2>
          <p className="experience-lead">
            Nous concevons des expériences photobooth premium qui mixent style,
            technologie et émotions. Le résultat : un flow continu, des visuels
            impeccables et des invités conquis du premier flash au dernier
            souvenir partagé.
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
          letter-spacing: 0.3rem;
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
          border-radius: 18px;
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
          border-radius: 16px;
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
          border-radius: 20px;
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
