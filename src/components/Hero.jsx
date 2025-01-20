export default function Hero() {
  return (
    <section className="h-screen bg-black flex flex-col items-center justify-start text-white relative">
      <h1 className="text-center text-3xl font-bold my-4">
        Louez un photobooth à Paris, Lyon et Rouen
      </h1>

      {/* Vidéos */}
      <div className="videos-container flex items-center mt-4 relative">
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
      <div className="banner">
        <p className="text-lg font-bold uppercase" style={{ color: "#990000" }}>
          <b>
            PARIS - LYON - ROUEN <br /> Promotion spéciale : jusqu'à -100€ de
            remise!
          </b>
        </p>
      </div>

      {/* Styles CSS */}
      <style jsx>{`
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
          border: 2px solid #897943;
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
