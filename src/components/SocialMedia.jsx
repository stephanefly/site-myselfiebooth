export default function SocialMediaSection() {
  const socialLinks = [
    { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://www.linkedin.com/myselfiebooth_paris/" },
    { name: "Instagram", icon: "/icons/instagram.png", link: "https://www.instagram.com/myselfiebooth_paris/" },
    { name: "TikTok", icon: "/icons/tiktok.png", link: "https://www.tiktok.com/@myselfiebooth_paris" },
  ];

  return (
    <>
      <section className="social-media-section">
        <div className="social-media-container">
          <h2 className="social-media-title">Rejoignez-nous sur les réseaux sociaux</h2>
          <div className="social-media-icons-wrapper">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-icon-container"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="social-media-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Section générale */
        .social-media-section {
          background: linear-gradient(to right, #000000, #675e32)  ;
          padding: 2rem 1rem;
        }

        /* Conteneur centré */
        .social-media-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        /* Titre */
        .social-media-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 1rem;
        }

        /* Conteneur des icônes */
        .social-media-icons-wrapper {
          display: flex;
          justify-content: center;
          gap: 1rem; /* Espacement entre les icônes */
        }

        /* Conteneur individuel des icônes */
        .social-media-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem; /* Taille du conteneur (48px) */
          height: 3rem;
          background-color: #fff; /* Fond blanc */
          border-radius: 50%; /* Cercle */
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Ombre */
          transition: transform 0.3s ease; /* Animation au survol */
        }

        /* Icônes */
        .social-media-icon {
          width: 1.5rem; /* Taille de l'icône (24px) */
          height: 1.5rem;
        }

        /* Effet au survol */
        .social-media-icon-container:hover {
          transform: scale(1.2); /* Agrandissement au survol */
        }
      `}</style>
    </>
  );
}
