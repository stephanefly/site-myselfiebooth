import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          {/* Section Logo */}
          <a href="/" className="brand-name">
            MySelfieBooth
          </a>
          <p className="footer-tagline">
            Photobooths premium pour mariages, soirées privées et événements
            professionnels.
          </p>

          {/* Section Informations */}
          <div className="footer-section">
            <h3 className="footer-title">Information</h3>
            <ul className="footer-list">
              <li><a href="/prestations/photobooth">Prestations</a></li>
              <li><a href="/evenements/mariages">Événements</a></li>
              <li><a href="/options/phonebooth">Options</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/privacy-policy">Politique de confidentialité</a></li>
              <li><a href="/terms">Mentions légales</a></li>
              <li><a href="/conditions">Conditions générales</a></li>
              <li><a href="https://reservation.myselfiebooth-paris.fr">Réservation</a></li>
              <li><a href="mailto:contact@myselfiebooth-paris.fr">Nous contacter</a></li>
              <li><a href="tel:+33699733998">Appelez-nous</a></li>
            </ul>
          </div>

          {/* Section Contact */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <span className="footer-icon">📞</span>
                <a href="tel:+33699733998">Téléphone : 06 99 73 39 98</a>
              </li>
              <li className="footer-item">
                <span className="footer-icon">📧</span>
                <a href="mailto:contact@myselfiebooth-paris.fr">contact@myselfiebooth-paris.fr</a>
              </li>
              <li className="footer-item">
                <span className="footer-icon">📍</span>
                <span>
                  <a href="/paris">Paris</a> • <a href="/lyon">Lyon</a> •{" "}
                  <a href="/rouen">Rouen</a>
                </span>
              </li>
              <li className="footer-item">
                <span className="footer-icon">📸</span>
                <a href="https://instagram.com/myselfiebooth_paris">Instagram</a>
              </li>
              <li className="footer-item">
                <span className="footer-icon">🔗</span>
                <a href="https://linkedin.com/myselfiebooth_paris">LinkedIn</a>
              </li>
            </ul>

            {/* Google Reviews */}
            <div className="google-reviews">
              <img src="/icons/google.png" alt="Google Logo" className="google-icon"/>
              <div>
                <p className="google-title">MySelfieBooth</p>
                <p className="google-rating">
                  <span className="rating-value">4.9</span> ★★★★★ (167 avis)
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .brand-name {
          font-family: "Great Vibes", cursive;
          font-size: 3rem; /* Augmenté pour plus de présence */
          font-weight: bold;
          letter-spacing: 0.2px; /* Espacement subtil entre les lettres */
          background: linear-gradient(to right, #ffffff, #cabd8c, #b8860b); /* Gradient raffiné */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          padding: 5px 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Effet moderne */
        }
        .footer-container {
          background: linear-gradient(to right, #000000, #675e32)  ;
          color: white;
          padding: 2.5rem 1rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }

        .footer-logo img {
          width: 150px;
          margin-bottom: 1rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-tagline {
          margin: 0;
          max-width: 280px;
          font-size: 0.95rem;
          color: #d7d7d7;
          line-height: 1.5;
        }

        .footer-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 0.5rem;
        }

        .footer-item {
          display: flex;
          align-items: center;
        }

        .footer-icon {
          margin-right: 0.5rem;
        }

        .footer-list a {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-list a:hover {
          color: #c4c4c4;
        }

        .google-reviews {
          display: flex;
          align-items: center;
          background-color: white;
          color: black;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-top: 1.5rem;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .google-icon {
          width: 40px;
          height: 40px;
          margin-right: 1rem;
        }

        .google-title {
          font-size: 0.875rem;
          font-weight: bold;
        }

        .google-rating {
          font-size: 0.875rem;
        }

        .rating-value {
          color: #f4b400;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
