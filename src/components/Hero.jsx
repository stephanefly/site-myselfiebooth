export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-kicker fade-up">MySelfieBooth • Paris, Lyon, Rouen</p>
        <h1 className="hero-title fade-up stagger-1">
          Louez un photobooth premium pour des souvenirs inoubliables
        </h1>
        <p className="hero-subtitle fade-up stagger-2">
          Offrez une animation élégante et clé en main à vos invités : livraison,
          installation, personnalisation et galerie en ligne pour revivre vos
          moments.
        </p>
        <p className="hero-subtitle fade-up stagger-3">
          Ambiance 2025, transitions douces, impression instantanée et partage
          mobile : tout est pensé pour une expérience fluide, chic et mémorable.
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
          <a href="#prestations" className="hero-button secondary">
            Voir les prestations
          </a>
        </div>
        <div className="hero-highlights">
          <div className="highlight-card fade-left">
            <span>📸</span>
            <p>Photos & impressions illimitées</p>
          </div>
          <div className="highlight-card fade-up">
            <span>🛠️</span>
            <p>Installation & assistance sur place</p>
          </div>
          <div className="highlight-card fade-right">
            <span>⭐</span>
            <p>Expérience premium et personnalisée</p>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card fade-left stagger-1">
            <h3>+500</h3>
            <p>Événements accompagnés en France.</p>
          </div>
          <div className="stat-card fade-up stagger-2">
            <h3>24h</h3>
            <p>Support réactif avant, pendant et après.</p>
          </div>
          <div className="stat-card fade-right stagger-3">
            <h3>100%</h3>
            <p>Personnalisation sur mesure pour votre marque.</p>
          </div>
        </div>
      </div>

      {/* Vidéos */}
      <div className="videos-container flex items-center mt-4 relative fade-up">
        {/* Vidéo 1 */}
        <div className="video-container">
          <video
            className="object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-min.jpg"
            aria-label="Vidéo promotionnelle de Paris"
          >
            <source
              src="https://stephanefly.github.io/site-myselfiebooth/public/videos/compress-TOUR-EIFFEL-FINAL.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>

        {/* Vidéo 2 avec bouton */}
        <div className="video-container relative">
          <video
            className="object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-min.jpg"
            aria-label="Vidéo promotionnelle centrale"
          >
            <source
              src="https://stephanefly.github.io/site-myselfiebooth/public/videos/PUB_2024.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          <a
            href="https://reservation.myselfiebooth-paris.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="center-button"
            title="Réservez votre photobooth sur notre plateforme"
            aria-label="Réservez votre photobooth"
          >
            Réservez !
          </a>
        </div>

        {/* Vidéo 3 */}
        <div className="video-container">
          <video
            className="object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-min.jpg"
            aria-label="Vidéo promotionnelle de Rouen"
          >
            <source
              src="https://stephanefly.github.io/site-myselfiebooth/public/videos/compress-voguebooth.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </div>

      {/* Bannière */}
        <div className="banner fade-up">
          <p className="text-lg font-bold uppercase" style={{ color: "#990000" }}>
            <b>
              PARIS - LYON - ROUEN <br /> Promotion spéciale : jusqu'à -100€ de
            remise!
          </b>
        </p>
      </div>

      {/* Styles CSS */}
      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 6.5rem 1.5rem 2rem;
          text-align: center;
          position: relative;
        }

        .hero-content {
          max-width: 980px;
        }

        .hero-kicker {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          color: #ffef96;
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.2vw, 1.3rem);
          color: #dcdcdc;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .hero-button {
          padding: 0.9rem 1.6rem;
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
          border: 1px solid #fff;
          background: transparent;
        }

        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.2);
        }

        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .highlight-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-weight: 600;
          color: #f7f7f7;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .stat-card {
          padding: 1rem 1.25rem;
          border-radius: 14px;
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

        /* Bannière */
        .banner {
          background: linear-gradient(to left, #ac9b56, #eee0a2);
          width: 100%;
          margin-top: -12px;
          text-align: center;
          font-size: 1.2rem;
          z-index: 10;
          padding: 5px 2px;
          border: #5a4300 2px solid;
        }

        /* Vidéos */
        .videos-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 1200px;
        }

        .video-container {
          flex: 1 1 3%;
          margin: 0; /* Supprime tout espace entre les vidéos */
          position: relative;
          overflow: hidden;
        }

        video {
          width: 100%;
          height: auto;
          border-radius: 8px;
          transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
        }

        /* Bouton centré */
        .center-button {
          position: absolute;
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #ffffff;
          text-decoration: none;
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
          font-weight: bold;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 1);
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease, box-shadow 0.3s ease;
          border-radius: 10px;
          background-image: linear-gradient(to bottom, #ffef96, #5a4300);
        }

        .center-button:hover {
          background: linear-gradient(to top, #ffdd70, #dbbe60);
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.99);
        }

        /* Assombrir les vidéos sur les côtés */
        .video-container:first-child video,
        .video-container:last-child video {
          filter: brightness(20%);
        }

        /* Responsive pour les mobiles */
        @media screen and (max-width: 768px) {
          .hero {
            padding-top: 7rem;
          }

          .video-container:first-child,
          .video-container:last-child {
            display: none; /* Cache les vidéos gauche et droite */
          }

          .video-container {
            flex: 0 1 100%;
          }

          .banner {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
