export default function Hero() {
  return (
    <section className="h-screen bg-black flex flex-col items-center justify-start text-white relative">
      {/* Bannière */}
      <div className="banner">
        <p className="text-lg font-bold uppercase">
          <b>
            PARIS - LYON - ROUEN <br /> Promotion spéciale : jusqu'à -100€ de remise!
          </b>
        </p>
      </div>

      {/* Vidéos */}
      <div className="videos-container flex justify-between items-center flex-wrap mt-4 relative">
        {/* Vidéo 1 */}
        <div className="video-container video-left">
          <video
            className="object-cover"
            src="/videos/PUB_2024.webm"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        {/* Vidéo 2 avec le bouton */}
        <div className="video-container video-center relative">
          <video
            className="object-cover"
            src="/videos/PUB_2024.webm"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          {/* Bouton */}
          <button className="center-button">
            Réservez !
          </button>
        </div>

        {/* Vidéo 3 */}
        <div className="video-container video-right">
          <video
            className="object-cover"
            src="/videos/PUB_2024.webm"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>

      {/* Styles CSS */}
      <style jsx>{`
        /* Bannière */
        .banner {
          background-color: #ffd800;
          color: black;
          width: 100%;
          margin-top: 40px;
          text-align: center;
          font-size: 1.2rem;
          z-index: 10;
        }

        /* Vidéos */
        .videos-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          gap: 0;
        }

        .video-container {
          flex: 1 1 auto;
          margin: 0;
          position: relative; /* Nécessaire pour positionner le bouton */
        }

        video {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        /* Bouton centré */
        .center-button {
          position: absolute;
          top: 85%; /* À 25% plus bas */
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(to top, #60552d, #b19f55, #d6c16b);
          color: #ffffff;
          border: none; /* Ajout d'une bordure noire */
          padding: 1rem 1.5rem; /* Ajusté pour plus de largeur */
          font-size: 1.5rem;
          font-weight: bold;
          border-radius: 20px; /* Bouton bien arrondi */
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 1); /* Ombre plus forte */
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease, box-shadow 0.3s ease;
        }

        /* Effet au survol */
        .center-button:hover {
          background: linear-gradient(to top, #ffdd70, #dbbe60);
          transform: translate(-50%, -50%) scale(1.1); /* Légère mise en avant */
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3); /* Accentue l’ombre */
        }


        /* Assombrir les vidéos sur les côtés */
        .video-left video,
        .video-right video {
          filter: brightness(50%);
        }

        /* Pour les écrans mobiles */
        @media screen and (max-width: 768px) {
          .video-container:nth-child(1),
          .video-container:nth-child(3) {
            display: none;
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
