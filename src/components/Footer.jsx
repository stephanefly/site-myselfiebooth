const linkGroups = [
  {
    title: "Prestations",
    links: [
      { label: "Photobooth", href: "/prestations/photobooth" },
      { label: "Miroirbooth", href: "/prestations/miroirbooth" },
      { label: "360 Booth", href: "/prestations/videobooth" },
      { label: "Pack VIP", href: "/prestations/packvip" },
    ],
  },
  {
    title: "Evenements",
    links: [
      { label: "Entreprises", href: "/evenements/corporates" },
      { label: "Mariages", href: "/evenements/mariages" },
      { label: "Anniversaires", href: "/evenements/anniversaires" },
      { label: "Soirees", href: "/evenements/soirees" },
    ],
  },
  {
    title: "Infos",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Confidentialite", href: "/privacy-policy" },
      { label: "Mentions legales", href: "/terms" },
      { label: "Conditions", href: "/conditions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/">MySelfieBooth</a>
          <p>
            Photobooths premium pour entreprises, marques, mariages et evenements
            prives a Paris, Lyon et Rouen.
          </p>
          <div className="footer-review">
            <img src="/icons/google.png" alt="Google" />
            <div>
              <strong>4.9/5 sur Google</strong>
              <span>167 avis clients</span>
            </div>
          </div>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title} className="footer-group">
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-group">
          <h3>Contact</h3>
          <a href="tel:+33699733998">06 99 73 39 98</a>
          <a href="mailto:contact@myselfiebooth-paris.fr">
            contact@myselfiebooth-paris.fr
          </a>
          <a href="/paris">Paris</a>
          <a href="/lyon">Lyon</a>
          <a href="/rouen">Rouen</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 MySelfieBooth. Tous droits reserves.</span>
        <span>Location photobooth premium en France.</span>
      </div>

      <style jsx>{`
        .footer {
          color: #fff;
          background: #050505;
          text-align: left;
        }

        .footer-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr repeat(4, 1fr);
          gap: 32px;
          padding: 56px 0 36px;
        }

        .footer-brand > a {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 900;
          text-decoration: none;
        }

        .footer-brand p {
          max-width: 320px;
          margin: 14px 0 20px;
          color: #cfc8ba;
          line-height: 1.6;
        }

        .footer-review {
          display: flex;
          gap: 12px;
          align-items: center;
          max-width: 260px;
          padding: 12px;
          border-radius: 8px;
          color: #17130a;
          background: #fff;
        }

        .footer-review img {
          width: 34px;
          height: 34px;
        }

        .footer-review strong,
        .footer-review span {
          display: block;
          line-height: 1.3;
        }

        .footer-review span {
          color: #5f5a50;
          font-size: 0.88rem;
        }

        .footer-group {
          display: grid;
          align-content: start;
          gap: 10px;
        }

        .footer-group h3 {
          margin: 0 0 6px;
          color: #e5c46b;
          font-size: 0.88rem;
          letter-spacing: 0.12rem;
          text-transform: uppercase;
        }

        .footer-group a {
          color: #efe9dd;
          text-decoration: none;
          line-height: 1.35;
        }

        .footer-group a:hover {
          color: #e5c46b;
        }

        .footer-bottom {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 0 26px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          color: #9f9787;
          font-size: 0.9rem;
        }

        @media (max-width: 980px) {
          .footer-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .footer-brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .footer-container,
          .footer-bottom {
            grid-template-columns: 1fr;
            flex-direction: column;
          }

          .footer-brand {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
}
