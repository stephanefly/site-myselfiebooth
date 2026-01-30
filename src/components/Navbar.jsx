import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [PrestationdropdownOpen, setPrestationDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [OptionsDropdownOpen, setOptionsDropdownOpen] = useState(false);
  const router = useRouter();

  // BasePath dynamique (utile si basePath est défini dans next.config.js)
  const basePath = router.basePath || "";

  const togglePrestationDropdown = () => {
    setPrestationDropdownOpen(!PrestationdropdownOpen);
    setEventsDropdownOpen(false);
    setOptionsDropdownOpen(false);
  };

  const toggleEventsDropdown = () => {
    setEventsDropdownOpen(!eventsDropdownOpen);
    setPrestationDropdownOpen(false);
    setOptionsDropdownOpen(false);
  };

  const toggleOptionDropdown = () => {
    setOptionsDropdownOpen(!OptionsDropdownOpen);
    setPrestationDropdownOpen(false);
    setEventsDropdownOpen(false);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setPrestationDropdownOpen(false);
    setEventsDropdownOpen(false);
    setOptionsDropdownOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="brand-name">MySelfieBooth</a>
        </div>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li className="dropdown">
            <button
              type="button"
              className="dropdown-toggle"
              onClick={togglePrestationDropdown}
              aria-expanded={PrestationdropdownOpen}
              aria-controls="prestations-menu"
            >
              Nos Prestations <span aria-hidden="true">▾</span>
            </button>
            <ul
              id="prestations-menu"
              className={`dropdown-menu ${PrestationdropdownOpen ? "show" : ""}`}
            >
              <li>
                <Link href={`${basePath}/prestations/photobooth`} legacyBehavior>
                  <a onClick={closeMenus}>Photobooth</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/prestations/miroirbooth`} legacyBehavior>
                  <a onClick={closeMenus}>Miroirbooth</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/prestations/videobooth`} legacyBehavior>
                  <a onClick={closeMenus}>360Booth</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/prestations/ipadbooth`} legacyBehavior>
                  <a onClick={closeMenus}>iPadBooth</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/prestations/voguebooth`} legacyBehavior>
                  <a onClick={closeMenus}>VogueBooth</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/prestations/air360booth`} legacyBehavior>
                  <a onClick={closeMenus}>Air360Booth</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/prestations/packvip`} legacyBehavior>
                  <a onClick={closeMenus}>Pack VIP</a>
                </Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <button
              type="button"
              className="dropdown-toggle"
              onClick={toggleEventsDropdown}
              aria-expanded={eventsDropdownOpen}
              aria-controls="events-menu"
            >
              Nos Événements <span aria-hidden="true">▾</span>
            </button>
            <ul
              id="events-menu"
              className={`dropdown-menu ${eventsDropdownOpen ? "show" : ""}`}
            >
              <li>
                <Link href={`${basePath}/evenements/mariages`} legacyBehavior>
                  <a onClick={closeMenus}>Mariages</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/evenements/corporates`} legacyBehavior>
                  <a onClick={closeMenus}>Corporates</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/evenements/anniversaires`} legacyBehavior>
                  <a onClick={closeMenus}>Anniversaires</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/evenements/soirees`} legacyBehavior>
                  <a onClick={closeMenus}>Soirées</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <button
              type="button"
              className="dropdown-toggle"
              onClick={toggleOptionDropdown}
              aria-expanded={OptionsDropdownOpen}
              aria-controls="options-menu"
            >
              Nos Options <span aria-hidden="true">▾</span>
            </button>
            <ul
              id="options-menu"
              className={`dropdown-menu ${OptionsDropdownOpen ? "show" : ""}`}
            >
              <li>
                <Link href={`${basePath}/options/phonebooth`} legacyBehavior>
                  <a onClick={closeMenus}>Phonebooth</a>
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/options/panneau`} legacyBehavior>
                  <a onClick={closeMenus}>Panneau de bienvenue</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="phone-container">
              <span className="phone-icon">📞</span>
              <a href="tel:0699733998" className="phone-number">06 99 73 39 98</a>
            </div>
          </li>
        </ul>

        <a
          className="cta-button"
          href="https://reservation.myselfiebooth-paris.fr"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenus}
        >
          Estimer mon prix
        </a>

        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
        >
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
          padding-top: 10px;
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


        .navbar-links li a,
        .dropdown-toggle {
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 1rem;
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .navbar-links li a:hover,
        .dropdown-toggle:hover {
          color: #af983f;
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
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
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
          transition: all 0.3s ease-in-out;
        }

        /* Empêcher le navigateur de changer la couleur après clic */
        .dropdown-menu li a:visited,
        .dropdown-menu li a:active,
        .dropdown-menu li a:focus {
          color: #fff !important; /* Reste blanc */
        }

        .dropdown-menu li:hover {
          background: linear-gradient(to right, #ffef96, #5a4300);
          color: #000;
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

          .navbar-links.open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
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
