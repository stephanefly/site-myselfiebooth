import Link from "next/link";
import { useState } from "react";
import { machines } from "../data/catalog";
import { siteConfig } from "../data/site";

const navGroups = [
  {
    label: "Nos animations",
    links: machines.map((machine) => ({ label: machine.name, href: machine.href })),
  },
  {
    label: "Vos événements",
    links: [
      { label: "Entreprises", href: "/evenements/corporates" },
      { label: "Mariages", href: "/evenements/mariages" },
      { label: "Anniversaires", href: "/evenements/anniversaires" },
      { label: "Soirées privées", href: "/evenements/soirees" },
    ],
  },
  {
    label: "Nos options",
    links: [
      { label: "Toutes les options", href: "/options" },
      { label: "Phonebooth", href: "/options/phonebooth" },
      { label: "Panneau de bienvenue", href: "/options/panneau" },
    ],
  },
];

const directLinks = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Entreprises", href: "/evenements/corporates" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

function navId(label) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setOpenGroup(null);
  };

  const toggleGroup = (label) => {
    setOpenGroup(openGroup === label ? null : label);
  };

  return (
    <nav className="nav-shell" aria-label="Navigation principale">
      <div className="nav-container">
        <Link href="/" className="nav-brand" onClick={closeMenus}>
          MySelfieBooth
        </Link>

        <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`} id="menu-principal">
          {directLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-direct" onClick={closeMenus}>
              {link.label}
            </Link>
          ))}

          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <button
                type="button"
                className="nav-link"
                onClick={() => toggleGroup(group.label)}
                aria-expanded={openGroup === group.label}
                aria-controls={`nav-${navId(group.label)}`}
              >
                {group.label}
                <span aria-hidden="true">+</span>
              </button>
              <div
                id={`nav-${navId(group.label)}`}
                className={`nav-menu ${openGroup === group.label ? "is-open" : ""}`}
              >
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenus}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <a className="nav-phone" href={siteConfig.phoneHref} data-event="phone_click">
            {siteConfig.phoneLabel}
          </a>
        </div>

        <a className="nav-cta" href={siteConfig.quoteUrl} onClick={closeMenus} data-event="cta_quote_click">
          {siteConfig.primaryCtaLabel}
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
        >
          <span />
          <span />
        </button>
      </div>

      <style jsx global>{`
        .nav-shell {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(8, 8, 8, 0.9);
          backdrop-filter: blur(18px);
        }

        .nav-container {
          width: min(1220px, calc(100% - 32px));
          min-height: 72px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .nav-brand {
          color: #fff;
          font-size: 1.28rem;
          font-weight: 900;
          letter-spacing: 0;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex: 1;
        }

        .nav-direct,
        .nav-link {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #efe9dd;
          border: 0;
          background: transparent;
          font: inherit;
          font-size: 0.9rem;
          font-weight: 800;
          text-decoration: none;
          cursor: pointer;
        }

        .nav-link span {
          color: #d8b65b;
        }

        .nav-group {
          position: relative;
        }

        .nav-menu {
          position: absolute;
          top: calc(100% + 14px);
          left: 0;
          min-width: 240px;
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

        .nav-menu a {
          min-height: 42px;
          display: flex;
          align-items: center;
          color: #f8f4eb;
          padding: 8px 12px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 700;
        }

        .nav-menu a:hover {
          color: #17130a;
          background: #e5c46b;
        }

        .nav-phone {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          color: #e5c46b;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
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
          width: 44px;
          height: 44px;
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

        @media (max-width: 1120px) {
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
            margin-top: 6px;
            display: none;
            opacity: 1;
            pointer-events: auto;
            transform: none;
            box-shadow: none;
          }

          .nav-menu.is-open {
            display: grid;
          }

          .nav-direct,
          .nav-link,
          .nav-phone {
            width: 100%;
            justify-content: space-between;
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
