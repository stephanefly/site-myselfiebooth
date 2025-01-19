import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleEventsDropdown = () => {
    setEventsDropdownOpen(!eventsDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="brand-name">MySelfieBooth</a>
        </div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li className="dropdown">
            <a href="#services" onClick={toggleDropdown}>
              Nos Prestations ▾
            </a>
            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <li><a href="/photobooth">Photobooth</a></li>
              <li><a href="/miroirbooth">Miroirbooth</a></li>
              <li><a href="/360booth">360 Booth</a></li>
              <li><a href="/ipadbooth">iPad Booth</a></li>
              <li><a href="/voguebooth">Vogue Booth</a></li>
              <li><a href="/air360booth">Air360 Booth</a></li>
              <li><a href="/packvip">Pack VIP</a></li>
              <li><a href="/options">Options Supplémentaires</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#events" onClick={toggleEventsDropdown}>
              Nos Événements ▾
            </a>
            <ul className={`dropdown-menu ${eventsDropdownOpen ? 'show' : ''}`}>
              <li><a href="/mariages">Mariages</a></li>
              <li><a href="/anniversaires">Anniversaires</a></li>
              <li><a href="/corporate">Corporate</a></li>
              <li><a href="/soirees">Soirées</a></li>
              <li><a href="/baptemes">Baptêmes</a></li>
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
          padding: 0 20px;
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
          margin-top: 20px;
          padding: 0;
          align-items: center;
        }

        .navbar-links li a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .navbar-links li a:hover {
          color: #ffcc00;
        }
        
        .dropdown {
  position: relative;
}
        
/* Positionnement du menu sur les écrans larges */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  padding: 0;
  list-style: none;
  min-width: 220px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  transition: all 0.4s ease-in-out;
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

        .dropdown-menu li a {
          text-decoration: none;
          color: #fff;
          font-size: 1rem;
          font-weight: bold;
          display: block;
          transition: all 0.3s ease-in-out;
        }

        .dropdown-menu li a:hover {
          background: linear-gradient(to right, #ffef96, #5a4300);
          color: #000;
          padding-left: 25px;
        }

        .cta-button {
          color: white;
          padding: 10px 20px;
          font-size: 1rem;
          border: 2px solid #897943;
          border-radius: 10px;
          background-image: linear-gradient(to bottom, #ffef96, #5a4300);
          text-decoration: none;
        }

        .cta-button:hover {
          background-image: linear-gradient(to bottom, #ffcc00, #dbbe60);
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
            display: none;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: linear-gradient(45deg, #000000, #393400);
            padding: 20px 0;
          }

          .navbar-links.open {
            display: flex;
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
