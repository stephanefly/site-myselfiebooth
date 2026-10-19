import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "../data/site";

const links = [
  { label: "Prestations", href: "/prestations" },
  { label: "Entreprises", href: "/evenements/corporates", professional: true },
  { label: "Event-Tech", href: "/event-tech", professional: true },
  { label: "Packs", href: "/prestations#packs" },
  { label: "Options", href: "/prestations#options" },
  { label: "Événements", href: "/evenements" },
  { label: "Zones", href: "/zones-intervention" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Qui sommes-nous", href: "/a-propos" },
];

const homeLinks = [
  { label: "Machines", href: "/prestations" },
  { label: "Mariages", href: "/evenements/mariages" },
  { label: "Entreprises", href: "/evenements/corporates" },
  { label: "Réalisations", href: "/realisations" },
];

export default function Navbar({ variant }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const isHomeVariant = variant === "home";
  const visibleLinks = isHomeVariant ? homeLinks : links;

  return (
    <nav className={`nav-shell ${isHomeVariant ? "nav-shell-home" : ""}`} aria-label="Navigation principale">
      <div className="nav-container">
        <Link href="/" className="nav-brand" onClick={closeMenu}>
          {isHomeVariant ? <>MySelfie<span>Booth</span></> : "MySelfieBooth"}
        </Link>

        <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`} id="menu-principal">
          {visibleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-direct ${link.professional ? "nav-direct-pro" : ""}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/evenements/corporates"
          className="nav-business-mobile"
          onClick={closeMenu}
        >
          Entreprises
        </Link>

        <a className="nav-cta" href={siteConfig.quoteUrl} onClick={closeMenu} data-event="cta_quote_click">
          {isHomeVariant ? "Mon devis →" : "Devis en 2 minutes"}
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
          background: rgba(8, 8, 8, 0.94);
          backdrop-filter: blur(18px);
        }

        .nav-container {
          width: min(1320px, calc(100% - 32px));
          min-height: 72px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .nav-brand {
          color: #fff;
          font-size: 1.24rem;
          font-weight: 900;
          letter-spacing: 0;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          flex: 1;
        }

        .nav-direct {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          color: #efe9dd;
          font-size: 0.8rem;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-direct:hover {
          color: #e5c46b;
        }

        .nav-direct-pro {
          color: #e5c46b;
        }

        .nav-cta {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          border-radius: 8px;
          color: #17130a;
          background: #e5c46b;
          font-size: 0.84rem;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-business-mobile {
          display: none;
        }

        .nav-toggle {
          display: none;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
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

        @media (max-width: 1320px) {
          .nav-links {
            position: absolute;
            top: 72px;
            left: 0;
            width: 100%;
            display: none;
            padding: 12px 16px 18px;
            align-items: stretch;
            flex-direction: column;
            gap: 2px;
            background: #090909;
          }

          .nav-links.is-open {
            display: flex;
          }

          .nav-direct {
            width: 100%;
            padding: 0 8px;
          }

          .nav-cta {
            display: none;
          }

          .nav-business-mobile {
            min-height: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            padding: 0 12px;
            border: 1px solid rgba(229, 196, 107, 0.7);
            border-radius: 8px;
            color: #e5c46b;
            font-size: 0.78rem;
            font-weight: 900;
            text-decoration: none;
            white-space: nowrap;
          }

          .nav-toggle {
            display: block;
          }
        }

        @media (max-width: 460px) {
          .nav-container {
            width: calc(100% - 20px);
            gap: 8px;
          }

          .nav-brand {
            font-size: 1.05rem;
          }

          .nav-business-mobile {
            padding: 0 9px;
            font-size: 0.72rem;
          }
        }

        .nav-shell-home {
          border-bottom-color: rgba(67, 51, 26, 0.12);
          background: rgba(255, 253, 248, 0.96);
        }

        .nav-shell-home .nav-container {
          width: min(1180px, calc(100% - 40px));
          min-height: 64px;
        }

        .nav-shell-home .nav-brand {
          color: #211d16;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.32rem;
          letter-spacing: -0.04em;
        }

        .nav-shell-home .nav-brand span {
          color: #ad8136;
        }

        .nav-shell-home .nav-links {
          gap: clamp(18px, 3vw, 34px);
        }

        .nav-shell-home .nav-direct {
          color: #312c24;
          font-size: 0.82rem;
          font-weight: 700;
        }

        .nav-shell-home .nav-direct:hover {
          color: #9d742f;
        }

        .nav-shell-home .nav-cta {
          border-radius: 8px;
          color: #fff;
          background: #b58a42;
          font-size: 0.78rem;
          padding: 0 18px;
        }

        @media (max-width: 1320px) {
          .nav-shell-home .nav-links {
            top: 64px;
            border-top: 1px solid #eee7d9;
            background: #fffdf8;
          }

          .nav-shell-home .nav-direct {
            color: #312c24;
          }

          .nav-shell-home .nav-cta {
            display: inline-flex;
            min-height: 40px;
          }

          .nav-shell-home .nav-business-mobile {
            display: none;
          }

          .nav-shell-home .nav-toggle {
            border-color: rgba(55, 44, 25, 0.24);
          }

          .nav-shell-home .nav-toggle span {
            background: #211d16;
          }
        }

        @media (max-width: 460px) {
          .nav-shell-home .nav-container {
            width: calc(100% - 20px);
          }

          .nav-shell-home .nav-brand {
            font-size: 1.12rem;
          }

          .nav-shell-home .nav-cta {
            min-height: 38px;
            padding: 0 11px;
            font-size: 0.72rem;
          }
        }

      `}</style>
    </nav>
  );
}
