import { machines, options } from "../data/catalog";
import { siteConfig, trustSignals } from "../data/site";

const eventLinks = [
  { label: "Entreprises", href: "/evenements/corporates" },
  { label: "Mariages", href: "/evenements/mariages" },
  { label: "Anniversaires", href: "/evenements/anniversaires" },
  { label: "Soirees", href: "/evenements/soirees" },
];

const infoLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Confidentialite", href: "/privacy-policy" },
  { label: "Mentions legales", href: "/terms" },
  { label: "Conditions", href: "/conditions" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const review = trustSignals.find((signal) => signal.value === "4.9/5");
  const reviewCount = trustSignals.find((signal) => signal.value === "167");
  const visibleOptions = options.slice(0, 6);
  const linkGroups = [
    {
      title: "Animations",
      links: machines.map((machine) => ({
        label: machine.name,
        href: machine.href,
      })),
    },
    {
      title: "Evenements",
      links: eventLinks,
    },
    {
      title: "Options",
      links: [
        { label: "Toutes les options", href: "/options" },
        ...visibleOptions.map((option) => ({
          label: option.name,
          href: option.href || "/options",
        })),
      ],
    },
    {
      title: "Infos",
      links: infoLinks,
    },
  ];

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/">{siteConfig.name}</a>
          <p>
            Photobooths premium pour entreprises, marques, mariages et evenements
            prives a Paris, Lyon et Rouen.
          </p>
          <div className="footer-review">
            <img src="/icons/google.png" alt="Google" />
            <div>
              <strong>{review?.value || "4.9/5"} affiche sur Google</strong>
              <span>{reviewCount?.value || "167"} avis clients affiches</span>
            </div>
          </div>
          <a className="footer-quote" href={siteConfig.quoteUrl}>
            {siteConfig.primaryCtaLabel}
          </a>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title} className="footer-group">
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <a key={`${group.title}-${link.href}-${link.label}`} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-group footer-contact">
          <h3>Contact</h3>
          <a href={siteConfig.phoneHref}>{siteConfig.phoneLabel}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {siteConfig.servedAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {year} {siteConfig.name}. Tous droits reserves.</span>
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
          grid-template-columns: minmax(240px, 1.25fr) repeat(5, minmax(0, 1fr));
          gap: 28px;
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
          max-width: 280px;
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

        .footer-quote {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          margin-top: 18px;
          padding: 0 18px;
          border-radius: 8px;
          color: #17130a;
          background: #e5c46b;
          font-size: 0.9rem;
          font-weight: 900;
          text-decoration: none;
          text-align: center;
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

        .footer-group a,
        .footer-group span {
          color: #efe9dd;
          text-decoration: none;
          line-height: 1.35;
        }

        .footer-group a:hover {
          color: #e5c46b;
        }

        .footer-contact span {
          color: #b8afa0;
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

        @media (max-width: 1100px) {
          .footer-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .footer-brand {
            grid-column: span 3;
          }
        }

        @media (max-width: 720px) {
          .footer-container {
            grid-template-columns: 1fr;
          }

          .footer-brand {
            grid-column: span 1;
          }

          .footer-bottom {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
