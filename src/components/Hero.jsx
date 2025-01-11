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
      <div className="videos-container flex justify-between items-center flex-wrap mt-4">
        {/* Vidéo 1 */}
        <div className="video-container">
          <video
            className="object-cover"
            src="/videos/PUB_2024.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>

        {/* Vidéo 2 */}
        <div className="video-container">
          <video
            className="object-cover"
            src="/videos/PUB_2024.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>

        {/* Vidéo 3 */}
        <div className="video-container">
          <video
            className="object-cover"
            src="/videos/PUB_2024.mp4"
            autoPlay
            loop
            muted
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
          margin-top: 15px;
          margin-bottom: 0px;
          text-align: center;
          font-size: 1.2rem;
          z-index: 10;
        }

        /* Vidéos */
        .videos-container {
          display: flex;
          justify-content: space-between; /* Espace égal entre les vidéos */
          flex-wrap: wrap; /* Permet aux vidéos de passer à la ligne si nécessaire */
        }

        .video-container {
          flex: 0 1 calc(33.33% - 16px); /* Assure trois vidéos sur une ligne */
          margin: 8px;
        }

        video {
          width: 100%;
          height: auto;
          border-radius: 8px; /* Coins arrondis */
        }

        /* Pour les écrans mobiles */
        @media screen and (max-width: 768px) {
          .video-container:nth-child(1),
          .video-container:nth-child(3) {
            display: none; /* Cache les vidéos 1 et 3 */
          }

          .video-container {
            flex: 0 1 100%; /* La vidéo restante occupe toute la largeur */
          }

          .banner {
            font-size: 1rem; /* Taille réduite pour mobile */
          }
        }
      `}</style>
    </section>
  );
}
