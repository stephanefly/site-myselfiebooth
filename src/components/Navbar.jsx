import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <img src="/images/logo.png" alt="MySelfieBooth" className="logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="#services">Location photobooth ▾</a>
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
        <button className="cta-button">Estimer mon prix</button>

        {/* Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Styles CSS */}
      <style jsx>{`
        .navbar {
          position: fixed; /* Navbar fixée en haut */
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(45deg, #000000, #393400);
          color: white;
          padding: 10px 0; /* Réduit la hauteur */
          z-index: 1000; /* Assure que la navbar est au-dessus des autres éléments */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Optionnel : ajoute une ombre */
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
          height: 50px; /* Taille légèrement réduite */
        }

        .cta-button {
          background: linear-gradient(to top, #514514, #ffe57e);
          color: white;
          border: none;
          padding: 10px 10px 10px 10px; /* Taille réduite */
          margin-left: 20px;
          border-radius: 4px;
          font-size: 1rem; /* Taille légèrement réduite */
          cursor: pointer;
        }

        .menu-button {
          background: none;
          border: none;
          color: white;
          font-size: 22px; /* Taille réduite */
          cursor: pointer;
          display: none; /* Cacher sur écrans larges */
          padding-left: 60px;
        }

        .navbar-links {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding-left: 60px;
        }

        .navbar-links li {
          display: flex;
          align-items: center;
        }

        .navbar-links li a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 1rem; /* Taille légèrement réduite */
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

        /* Menu pour les écrans mobiles */
        @media (max-width: 768px) {
          .menu-button {
            display: block; /* Afficher le bouton hamburger */
          }

          .navbar-links {
            flex-direction: column;
            display: none; /* Masquer les liens par défaut */
            gap: 10px;
            width: 100%;
            text-align: center;
            background: linear-gradient(45deg, #000000, #393400);
            position: absolute;
            top: 60px; /* Sous la navbar */
            left: 0;
          }

          .navbar-links.open {
            display: flex; /* Afficher le menu quand ouvert */
            padding: 20px;
            margin-top: 0px;
          }

          .navbar-container {
            justify-content: space-between;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
