import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "../data/site";

const links = [
  { label: "Prestations", href: "/prestations" },
  { label: "Entreprises", href: "/evenements/corporates", professional: true },
  { label: "Packs", href: "/prestations#packs" },
  { label: "Options", href: "/prestations#options" },
  { label: "Événements", href: "/evenements" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Qui sommes-nous", href: "/a-propos" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="nav-shell" aria-label="Navigation principale">
      <div className="nav-container">
        <Link href="/" className="nav-brand" onClick={closeMenu}>
          MySelfieBooth
        </Link>

        <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`} id="menu-principal">
          {links.map((link) => (
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
          Devis en 2 minutes
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
          gap: 18px;
          flex: 1;
        }

        .nav-direct {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          color: #efe9dd;
          font-size: 0.88rem;
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
          padding: 0 17px;
          border-radius: 8px;
          color: #17130a;
          background: #e5c46b;
          font-size: 0.88rem;
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

        @media (max-width: 1180px) {
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
      `}</style>
    </nav>
  );
}
