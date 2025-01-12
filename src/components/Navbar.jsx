import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Texte à la place du logo */}
        <div className="navbar-logo">
          <a href="/" className="brand-name">
            MySelfieBooth
          </a>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="#services">Nos Prestations ▾</a>
          </li>
          <li>
            <a href="#events">Événements ▾</a>
          </li>
          <li>
            {/* Numéro de téléphone */}
            <div className="phone-container">
              <span className="phone-icon">📞</span>
              <a href="tel:0699733998" className="phone-number">
                06 99 73 39 98
              </a>
            </div>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <a
          className="cta-button"
          href="https://reservation.myselfiebooth-paris.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Estimer mon prix
        </a>

        {/* Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Styles CSS */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(45deg, #000000, #675e32);
          color: white;
          padding: 10px 15px 10px 100px;
          z-index: 1000;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
        }

        /* Texte avec Great Vibes et gradient */
        .navbar-logo .brand-name {
          font-family: "Great Vibes", cursive;
          font-size: 1.5rem; /* Augmenté pour plus de présence */
          font-weight: bold;
          letter-spacing: 0.2px; /* Espacement subtil entre les lettres */
          background: linear-gradient(150deg, #ffffff, #cabd8c, #b8860b); /* Gradient raffiné */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          padding: 5px 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Ombre subtile pour donner de la profondeur */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Effet moderne */
        }

        .navbar-logo .brand-name:hover {
          transform: scale(1.05); /* Légère mise en avant au survol */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Accentue l’ombre au survol */
        }


        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          padding: 0 20px;
        }

        .navbar-logo .logo {
          height: 50px;
        }

        .cta-button {
          color: white;
          padding: 10px 10px;
          font-size: 1rem;
          border: 2px solid #897943;
          text-decoration: none;
          border-radius: 10px;
          background-image: linear-gradient(to bottom, #ffef96, #5a4300);
          display: none; /* Cacher sur mobile */
        }

        .menu-button {
          background: none;
          border: none;
          color: white;
          font-size: 22px;
          cursor: pointer;
          display: none; /* Cacher sur écrans larges */
        }

        .navbar-links {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding-left: 20px;
          align-items: center;
        }

        .navbar-links li {
          display: flex;
          align-items: center;
        }

        .navbar-links li a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 1rem;
        }

        .phone-container {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ffc107;
          font-weight: bold;
          font-size: 1rem;
        }

        .phone-icon {
          font-size: 1.2rem;
        }

        .phone-number {
          text-decoration: none;
          color: #ffc107;
        }

        /* Alignement sur écrans larges */
        @media (min-width: 1024px) {

          .navbar-links {
            margin-left: auto; /* Pousse les liens à droite */
          }

          .cta-button {
            display: inline-block; /* Affiche le bouton sur écran large */
            margin-left: 20px;
          }

          .menu-button {
            display: none; /* Masque le menu hamburger */
          }
        }

        /* Menu pour les écrans mobiles */
        @media (max-width: 1024px) {
          .menu-button {
            display: block; /* Affiche le bouton hamburger */
          }

          .navbar {
            padding: 5px 0px 10px 0px; /* Pousse les liens à droite */
            margin-bottom: 5px;
          }

          .navbar-links {
            flex-direction: column;
            display: none; /* Masque les liens par défaut */
            gap: 10px;
            width: 100%;
            text-align: center;
            background: linear-gradient(45deg, #000000, #393400);
            position: absolute;
            top: 60px;
            left: 0;
          }

          .navbar-links.open {
            display: flex; /* Affiche le menu quand ouvert */
            padding: 20px;
          }

          .navbar-logo {
            margin-top: 10px;
          }

          .cta-button {
            display: block; /* Bouton affiché dans le menu mobile */
            margin-top: 10px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
