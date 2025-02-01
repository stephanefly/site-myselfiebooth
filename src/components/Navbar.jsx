import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [PrestationdropdownOpen, setPrestationDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [OptionsDropdownOpen, setOptionsDropdownOpen] = useState(false);
  const router = useRouter();

    // BasePath dynamique (utile si basePath est défini dans next.config.js)
  const basePath = router.basePath || '';

  const togglePrestationDropdown = () => {
    setPrestationDropdownOpen(!PrestationdropdownOpen);
  };

  const toggleEventsDropdown = () => {
    setEventsDropdownOpen(!eventsDropdownOpen);
  };

  const toggleOptionDropdown = () => {
    setOptionsDropdownOpen(!OptionsDropdownOpen);
  };
    
    return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="brand-name">MySelfieBooth</a>
        </div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li className="dropdown">
            <a href="#prestation" onClick={togglePrestationDropdown}>
              Nos Prestations ▾
            </a>
            <ul className={`dropdown-menu ${PrestationdropdownOpen ? 'show' : ''}`}>
              <li><Link href={`${basePath}/prestation/photobooth`} legacyBehavior><a>Photobooth</a></Link></li>
              <li><Link href={`${basePath}/prestation/miroirbooth`} legacyBehavior><a>Miroirbooth</a></Link></li>
              <li><Link href={`${basePath}/prestation/360booth`} legacyBehavior><a>360 Booth</a></Link></li>
              <li><Link href={`${basePath}/prestation/ipadbooth`} legacyBehavior><a>iPad Booth</a></Link></li>
              <li><Link href={`${basePath}/prestation/voguebooth`} legacyBehavior><a>Vogue Booth</a></Link></li>
              <li><Link href={`${basePath}/prestation/air360booth`} legacyBehavior><a>Air360 Booth</a></Link></li>
              <li><Link href={`${basePath}/prestation/packvip`} legacyBehavior><a>Pack VIP</a></Link></li>
              <li><Link href={`${basePath}/prestation/options`} legacyBehavior><a>Options Supplémentaires</a></Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#evenement" onClick={toggleEventsDropdown}>
              Nos Événements ▾
            </a>
            <ul className={`dropdown-menu ${eventsDropdownOpen ? 'show' : ''}`}>
              <li><Link href={`${basePath}/evenement/mariages`} legacyBehavior><a>Mariages</a></Link></li>
              <li><Link href={`${basePath}/evenement/corporate`} legacyBehavior><a>Corporate</a></Link></li>
              <li><Link href={`${basePath}/evenement/anniversaires`} legacyBehavior><a>Anniversaires</a></Link></li>
              <li><Link href={`${basePath}/evenement/soirees`} legacyBehavior><a>Soirées</a></Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#evenement" onClick={toggleOptionDropdown}>
              Nos Options ▾
            </a>
            <ul className={`dropdown-menu ${OptionsDropdownOpen ? 'show' : ''}`}>
              <li><Link href={`${basePath}/option/phonebooth`} legacyBehavior><a>Phonebooth</a></Link></li>
            </ul>
          </li>
          <li>
            <div className="phone-container">
              <span className="phone-icon">📞</span>
              <a href="tel:0699733998" className="phone-number">06 99 73 39 98</a>
            </div>
          </li>
        </ul>

        <a className="cta-button" href="https://reservation.myselfiebooth-paris.fr" target="_blank"
           rel="noopener noreferrer">
          Estimer mon prix
        </a>

        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(45deg, #000000, #675e32);
          color: white;
          padding: 15px 20px;
          z-index: 1000;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .navbar-logo .brand-name {
          font-family: "Great Vibes", cursive;
          font-size: 1.8rem;
          font-weight: bold;
          background: linear-gradient(150deg, #ffffff, #cabd8c, #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
        }

        .navbar-links {
          list-style: none;
          display: flex;
          gap: 20px;
          color: #fff !important; /* Forcer la couleur blanche */
          margin-top: 20px;
          padding: 0;
          align-items: center;
        }


        .navbar-links li a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 1rem;
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }

        .navbar-links li a:hover {
          color: #855f00;
        }

        .dropdown {
          position: relative;
        }

        /* Positionnement du menu sur les écrans larges */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: rgb(38 32 0 / 90%);
          border-radius: 10px;
          padding: 0;
          list-style: none;
          min-width: 220px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          max-height: 0;
          transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out;
          transform: translateY(-10px);
        }

        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          max-height: 500px;
          transform: translateY(0);
          padding: 10px 0;
        }

        .dropdown-menu li {
          padding: 12px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dropdown-menu li:last-child {
          border-bottom: none;
        }

        .dropdown-menu li {
          text-decoration: none;
          color: #fff !important; /* Forcer la couleur blanche */
          font-size: 1rem;
          font-weight: bold;
          display: block;
          transition: all 0.2s ease-in-out;
        }

        /* Empêcher le navigateur de changer la couleur après clic */
        .dropdown-menu li a:visited,
        .dropdown-menu li a:active,
        .dropdown-menu li a:focus {
          color: #fff !important; /* Reste blanc */
        }

        .dropdown-menu li:hover {
          background: linear-gradient(to right, #ffef96, #5a4300);
          color: #855f00;
          padding-left: 25px;
        }

        .cta-button {
          color: white;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 10px;
          background-image: linear-gradient(to bottom, #ffef96, #5a4300);
          text-decoration: none;
          box-shadow: 0 5px 15px rgb(11, 11, 11);
        }

        .cta-button:hover {
          background: linear-gradient(to bottom, #77611f, #ffef96);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.99);
        }

        .menu-button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          display: none;
        }

        .phone-container {
          display: flex;
          align-items: center;
          color: #ffc107;
        }

        .phone-number {
          text-decoration: none;
          color: #ffc107;
          font-weight: bold;
        }
          
        @media (max-width: 1024px) {
          .menu-button {
            display: block;
          }
        
          /* Menu caché par défaut */
          .navbar-links {
            flex-direction: column;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: linear-gradient(45deg, #000000, #393400);
            padding: 20px 0;
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          }
        
          /* Menu visible avec animation */
          .navbar-links.open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
        }
          

          .dropdown-menu {
            position: relative;
            width: 100%;
            text-align: center;
          }

          .cta-button {
            display: block;
            margin-top: 10px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
