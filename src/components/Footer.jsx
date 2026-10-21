import { useEffect, useState } from "react";
import { siteConfig } from "../data/site";
import SocialMedia from "./SocialMedia";

const linkGroups = [
  {
    title: "Découvrir",
    links: [
      { label: "Les machines et les packs", href: "/prestations/" },
      { label: "Nos réalisations", href: "/realisations/" },
      { label: "Les tarifs détaillés", href: siteConfig.ratesUrl },
      { label: "Notre équipe", href: "/a-propos/" },
      { label: "Les conseils du blog", href: "/blog/" },
    ],
  },
  {
    title: "Événements et lieux",
    links: [
      { label: "Mariages", href: "/evenements/mariages/" },
      { label: "Entreprises", href: "/evenements/corporates/" },
      { label: "Anniversaires", href: "/evenements/anniversaires/" },
      { label: "Soirées", href: "/evenements/soirees/" },
      { label: "Toutes nos zones d’intervention", href: "/zones-intervention/" },
    ],
  },
  {
    title: "Informations pratiques",
    links: [
      { label: "Confidentialité", href: "/privacy-policy/" },
      { label: "Mentions légales", href: "/terms/" },
      { label: "Conditions de location", href: "/conditions/" },
      { label: "Déjà client ? Laisser un avis", href: siteConfig.reviewCtaUrl },
    ],
  },
];

function FooterGroup({ group, desktop }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(desktop);
  }, [desktop]);

  return (
    <details
      className="footer-group"
      data-navigation-disclosure
      open={expanded}
      onToggle={(event) => setExpanded(event.currentTarget.open)}
    >
      <summary>
        {group.title}
        <span className="footer-expand" aria-hidden="true" />
      </summary>
      <nav className="footer-group-links" aria-label={group.title}>
        {group.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...(link.href === siteConfig.reviewCtaUrl
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </details>
  );
}

export default function Footer() {
  const [desktop, setDesktop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const query = window.matchMedia("(min-width: 761px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <footer id="contact" className="footer">
      <div className="footer-intro">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="/" className="footer-brand-name">{siteConfig.name}</a>
            <p>Des animations photo et vidéo pour vos événements à Paris et en Île-de-France.</p>
            <a
              className="footer-review"
              href={siteConfig.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire les avis de nos clients <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="footer-contact">
            <h2>Parlons de votre événement</h2>
            <a href={siteConfig.phoneHref} data-event="phone_click">{siteConfig.phoneLabel}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="footer-directory">
        <div className="footer-navigation">
          {linkGroups.map((group) => (
            <FooterGroup key={group.title} group={group} desktop={desktop} />
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {year} {siteConfig.name}. Tous droits réservés.</span>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("myselfiebooth:open-cookie-settings"))}
        >
          Gérer les cookies
        </button>
      </div>

      <style jsx global>{`
        .footer { padding: 0; color: #f7f4ec; background: #242d28; text-align: left; font-family: "Roboto", sans-serif; }
        .footer-intro { color: #253b30; background: #f3eee4; border-top: 5px solid #d6b774; }
        .footer-container { width: min(1180px, calc(100% - 48px)); margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 42px 72px; align-items: center; padding: 48px 0; }
        .footer-brand-name { color: #253b30; font-size: 23px; font-weight: 700; text-decoration: none; }
        .footer-brand p { max-width: 340px; margin: 16px 0; color: #586457; font-size: 14px; line-height: 1.7; }
        .footer-review { display: inline-flex; align-items: center; gap: 16px; min-height: 44px; color: #765b2c; font-size: 13px; text-decoration: none; }
        .footer-contact { padding: 24px 28px; background: #fffcf6; border: 1px solid #ddd4c2; border-radius: 8px; }
        .footer-contact h2 { margin: 0 0 14px; color: #253b30; font-size: 15px; font-weight: 600; line-height: 1.5; }
        .footer-contact > a { display: table; min-height: 44px; padding: 10px 0; color: #354a3d; font-size: 14px; line-height: 1.7; text-decoration: none; overflow-wrap: anywhere; }
        .footer-directory { border-top: 1px solid #415047; }
        .footer-navigation { width: min(1180px, calc(100% - 48px)); margin: 0 auto; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; padding: 28px 0; }
        .footer-group { min-width: 0; }
        .footer-group summary { display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 44px; color: #f7f4ec; font-size: 14px; font-weight: 600; line-height: 1.5; list-style: none; cursor: pointer; }
        .footer-group summary::-webkit-details-marker { display: none; }
        .footer-expand { position: relative; flex: 0 0 12px; width: 12px; height: 12px; color: #d6b774; }
        .footer-expand::before, .footer-expand::after { content: ""; position: absolute; top: 5px; left: 0; width: 12px; height: 1px; background: currentColor; }
        .footer-expand::after { transform: rotate(90deg); }
        .footer-group[open] .footer-expand::after { transform: rotate(0deg); }
        .footer-group-links { display: grid; gap: 2px; padding: 8px 0 16px; }
        .footer-group-links a { display: flex; align-items: center; min-height: 44px; color: #c0c9bf; font-size: 13px; line-height: 1.6; text-decoration: none; }
        .footer a:hover { color: #ecd29a; }
        .footer-intro a:hover { color: #60471d; }
        .footer a:focus-visible, .footer button:focus-visible, .footer summary:focus-visible { outline: 2px solid #d6b774; outline-offset: 4px; }
        .footer-intro a:focus-visible { outline-color: #765b2c; }
        .footer-bottom { width: min(1180px, calc(100% - 48px)); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 0 28px; border-top: 1px solid #526055; color: #b8c2b5; font-size: 12px; line-height: 1.6; }
        .footer-bottom button { min-height: 44px; padding: 8px 0; border: 0; color: #c8cbbf; background: transparent; font: inherit; text-decoration: underline; text-underline-offset: 4px; cursor: pointer; }
        @media (max-width: 760px) {
          .footer-container { grid-template-columns: 1fr; gap: 28px; padding: 32px 0; }
          .footer-contact { padding: 22px 20px; }
          .footer-navigation { grid-template-columns: 1fr; gap: 10px; padding: 24px 0; }
          .footer-group { padding: 0 16px; border: 1px solid #526055; border-radius: 6px; background: #303b34; }
          .footer-group summary { min-height: 60px; }
          .footer-group-links { padding: 0 0 16px 14px; border-left: 1px solid #63563a; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 4px; padding-bottom: max(28px, env(safe-area-inset-bottom)); border-top: 0; }
        }
      `}</style>
    </footer>
  );
}
