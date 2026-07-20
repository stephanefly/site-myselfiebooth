export default function Hero() {
  const audienceCards = [
    {
      title: "Entreprises",
      text: "Soirees corporate, salons, lancements produit, seminaires et animations de marque.",
      href: "/evenements/corporates",
      cta: "Voir l'offre B2B",
    },
    {
      title: "Particuliers",
      text: "Mariages, anniversaires et receptions privees avec installation cle en main.",
      href: "/evenements/mariages",
      cta: "Preparer mon evenement",
    },
  ];

  return (
    <section className="hero">
      <div className="videos-container flex items-center mt-4 relative fade-up">
        <div className="video-container">
          <video
            className="object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-min.jpg"
            aria-label="Video promotionnelle de Paris"
          >
            <source
              src="https://stephanefly.github.io/site-myselfiebooth/public/videos/compress-TOUR-EIFFEL-FINAL.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la video.
          </video>
        </div>

        <div className="video-container relative">
          <video
            className="object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-min.jpg"
            aria-label="Video promotionnelle centrale"
          >
            <source
              src="https://stephanefly.github.io/site-myselfiebooth/public/videos/PUB_2024.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la video.
          </video>
          <a
            href="https://reservation.myselfiebooth-paris.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="center-button"
            title="Demander un devis MySelfieBooth"
            aria-label="Demander un devis MySelfieBooth"
          >
            Devis rapide
          </a>
        </div>

        <div className="video-container">
          <video
            className="object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-min.jpg"
            aria-label="Video promotionnelle de Rouen"
          >
            <source
              src="https://stephanefly.github.io/site-myselfiebooth/public/videos/compress-voguebooth.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la video.
          </video>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-kicker fade-up">MySelfieBooth - Paris, Lyon, Rouen</p>
        <h1 className="hero-title fade-up stagger-1">
          Photobooth premium pour entreprises, mariages et evenements prives
        </h1>
        <p className="hero-subtitle fade-up stagger-2">
          Creez une experience photo elegante et cle en main pour vos invites,
          vos collaborateurs ou vos clients: installation, personnalisation,
          assistance sur place et galerie en ligne.
        </p>
        <p className="hero-subtitle fade-up stagger-3">
          Du salon professionnel a la reception privee, chaque animation est
          adaptee a votre image avec des visuels soignes, un parcours fluide et
          des souvenirs faciles a partager.
        </p>

        <div className="hero-actions fade-up stagger-4">
          <a
            href="https://reservation.myselfiebooth-paris.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button primary"
          >
            Estimer mon prix
          </a>
          <a href="/evenements/corporates" className="hero-button secondary">
            Offre entreprise
          </a>
          <a href="#prestations" className="hero-button secondary">
            Voir les prestations
          </a>
        </div>

        <div className="audience-grid fade-up">
          {audienceCards.map((card) => (
            <a key={card.title} href={card.href} className="audience-card">
              <span>{card.title}</span>
              <p>{card.text}</p>
              <strong>{card.cta}</strong>
            </a>
          ))}
        </div>

        <div className="hero-highlights">
          <div className="highlight-card fade-left">
            <span>Logo</span>
            <p>Templates personnalises a votre marque</p>
          </div>
          <div className="highlight-card fade-up">
            <span>Staff</span>
            <p>Installation et assistance sur place</p>
          </div>
          <div className="highlight-card fade-right">
            <span>Web</span>
            <p>Galerie privee et partage instantane</p>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card fade-left stagger-1">
            <h3>+500</h3>
            <p>Evenements accompagnes en France.</p>
          </div>
          <div className="stat-card fade-up stagger-2">
            <h3>4.9/5</h3>
            <p>Experience client orientee qualite et confiance.</p>
          </div>
          <div className="stat-card fade-right stagger-3">
            <h3>100%</h3>
            <p>Personnalisation possible pour votre marque.</p>
          </div>
        </div>

        <p className="brand-proof fade-up">
          Deja choisi par des marques et equipes comme Sephora, Prada, Safran,
          Decathlon, Air France, Renault et Veolia.
        </p>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 6.5rem 1rem 1.5rem;
          text-align: center;
          position: relative;
        }

        .hero-content {
          max-width: 1040px;
        }

        .hero-kicker {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.18rem;
          color: #ffef96;
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.22rem);
          color: #dcdcdc;
          line-height: 1.6;
          margin: 0 auto 1.35rem;
          max-width: 900px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin: 2rem 0;
        }

        .hero-button {
          padding: 0.9rem 1.45rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }

        .hero-button.primary {
          color: #000;
          background: linear-gradient(to right, #ffef96, #caa85f);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-button.secondary {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.75);
          background: rgba(255, 255, 255, 0.06);
        }

        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.18);
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
          margin: 0 auto 2rem;
        }

        .audience-card {
          color: #fff;
          text-decoration: none;
          text-align: left;
          padding: 1.25rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .audience-card:hover {
          transform: translateY(-4px);
          border-color: #ffef96;
        }

        .audience-card span {
          display: block;
          color: #ffef96;
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .audience-card p {
          color: #e8e4dc;
          line-height: 1.55;
          margin-bottom: 0.75rem;
        }

        .audience-card strong {
          color: #fff;
        }

        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .highlight-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-weight: 600;
          color: #f7f7f7;
        }

        .highlight-card span {
          color: #ffef96;
          font-weight: 800;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-card {
          padding: 1rem 1.25rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .stat-card h3 {
          font-size: 1.6rem;
          color: #ffef96;
          margin-bottom: 0.4rem;
        }

        .stat-card p {
          color: #ddd;
        }

        .brand-proof {
          color: #d6d0c5;
          font-size: 0.98rem;
          line-height: 1.55;
          margin: 0 auto 2.5rem;
          max-width: 800px;
        }

        .videos-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 1200px;
        }

        .video-container {
          flex: 1 1 3%;
          margin: 0;
          position: relative;
          overflow: hidden;
        }

        video {
          width: 100%;
          height: auto;
          border-radius: 8px;
          transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
        }

        .center-button {
          position: absolute;
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #ffffff;
          text-decoration: none;
          padding: 1rem 1.35rem;
          font-size: clamp(1rem, 2vw, 1.35rem);
          font-weight: bold;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 1);
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease, box-shadow 0.3s ease;
          border-radius: 8px;
          background-image: linear-gradient(to bottom, #ffef96, #5a4300);
          white-space: nowrap;
        }

        .center-button:hover {
          background: linear-gradient(to top, #ffdd70, #dbbe60);
          transform: translate(-50%, -50%) scale(1.06);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.7);
        }

        .video-container:first-child video,
        .video-container:last-child video {
          filter: brightness(20%);
        }

        @media screen and (max-width: 768px) {
          .hero {
            padding-top: 7rem;
          }

          .video-container:first-child,
          .video-container:last-child {
            display: none;
          }

          .video-container {
            flex: 0 1 100%;
          }

          .audience-card {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
