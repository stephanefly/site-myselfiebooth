import Link from "next/link";
import { useState } from "react";

const bookingUrl = "https://reservation.myselfiebooth-paris.fr";

const navGroups = [
  {
    label: "Prestations",
    links: [
      { label: "Photobooth", href: "/prestations/photobooth" },
      { label: "Miroirbooth", href: "/prestations/miroirbooth" },
      { label: "360 Booth", href: "/prestations/videobooth" },
      { label: "Vogue Booth", href: "/prestations/voguebooth" },
      { label: "Air360 Booth", href: "/prestations/air360booth" },
      { label: "Pack VIP", href: "/prestations/packvip" },
    ],
  },
  {
    label: "Evenements",
    links: [
      { label: "Entreprises", href: "/evenements/corporates" },
      { label: "Mariages", href: "/evenements/mariages" },
      { label: "Anniversaires", href: "/evenements/anniversaires" },
      { label: "Soirees", href: "/evenements/soirees" },
    ],
  },
  {
    label: "Options",
    links: [
      { label: "Phonebooth", href: "/options/phonebooth" },
      { label: "Panneau de bienvenue", href: "/options/panneau" },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <nav className="nav-shell">
      <div className="nav-container">
        <Link href="/" className="nav-brand" onClick={closeMenus}>
          MySelfieBooth
        </Link>

        <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <button
                type="button"
                className="nav-link"
                onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                aria-expanded={openGroup === group.label}
              >
                {group.label}
                <span aria-hidden="true">+</span>
              </button>
              <div className={`nav-menu ${openGroup === group.label ? "is-open" : ""}`}>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenus}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <a className="nav-phone" href="tel:+33699733998">
            06 99 73 39 98
          </a>
        </div>

        <a className="nav-cta" href={bookingUrl} onClick={closeMenus}>
          Estimer mon prix
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      <style jsx>{`
        .nav-shell {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(6, 6, 6, 0.86);
          backdrop-filter: blur(18px);
        }

        .nav-container {
          width: min(1180px, calc(100% - 32px));
          min-height: 72px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .nav-brand {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: 0;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          flex: 1;
        }

        .nav-group {
          position: relative;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #efe9dd;
          border: 0;
          background: transparent;
          font: inherit;
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
        }

        .nav-link span {
          color: #d8b65b;
        }

        .nav-menu {
          position: absolute;
          top: calc(100% + 18px);
          left: 0;
          min-width: 220px;
          display: grid;
          gap: 4px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: #111;
          box-shadow: 0 22px 44px rgba(0, 0, 0, 0.32);
          opacity: 0;
          pointer-events: none;
          transform: translateY(-6px);
          transition: opacity 160ms ease, transform 160ms ease;
        }

        .nav-menu.is-open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .nav-menu :global(a) {
          color: #f8f4eb;
          padding: 10px 12px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 700;
        }

        .nav-menu :global(a:hover) {
          color: #17130a;
          background: #e5c46b;
        }

        .nav-phone {
          color: #e5c46b;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 18px;
          border-radius: 999px;
          color: #17130a;
          background: #e5c46b;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-toggle {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          background: transparent;
          padding: 0;
        }

        .nav-toggle span {
          display: block;
          width: 18px;
          height: 2px;
          margin: 5px auto;
          background: #fff;
        }

        @media (max-width: 980px) {
          .nav-links {
            position: absolute;
            top: 72px;
            left: 0;
            width: 100%;
            display: none;
            padding: 18px 16px 24px;
            align-items: stretch;
            flex-direction: column;
            background: #090909;
          }

          .nav-links.is-open {
            display: flex;
          }

          .nav-menu {
            position: static;
            min-width: 0;
            margin-top: 10px;
            display: none;
            opacity: 1;
            pointer-events: auto;
            transform: none;
            box-shadow: none;
          }

          .nav-menu.is-open {
            display: grid;
          }

          .nav-link,
          .nav-phone {
            width: 100%;
            justify-content: space-between;
            padding: 10px 0;
          }

          .nav-cta {
            display: none;
          }

          .nav-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
