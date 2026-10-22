import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  const { pathname } = useRouter();
  const showInstagramPhotos = pathname !== "/realisations-videos";
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
      <section className="footer-instagram" aria-labelledby="footer-instagram-title">
        <div className={`footer-instagram-inner${showInstagramPhotos ? "" : " footer-instagram-text-only"}`}>
          <div className="footer-instagram-copy">
            <p className="footer-instagram-kicker">Suivez les coulisses</p>
            <h2 id="footer-instagram-title">La suite se passe<br />sur Instagram.</h2>
            <p>Nos événements, vos sourires et les idées pour votre prochain moment.</p>
            <a className="footer-instagram-button" href={siteConfig.socialLinks.find((social) => social.name === "Instagram").href} target="_blank" rel="noopener noreferrer">
              @myselfiebooth_paris <span aria-hidden="true">↗</span>
            </a>
          </div>
          {showInstagramPhotos && <a className="footer-instagram-photos" href={siteConfig.socialLinks.find((social) => social.name === "Instagram").href} target="_blank" rel="noopener noreferrer" aria-label="Découvrez nos événements sur Instagram (nouvel onglet)">
            <img src="/videos/instagram/reel-1-DO30-rNiDdA.jpg" alt="Les coulisses de MySelfieBooth sur Instagram" width="360" height="480" loading="lazy" />
            <img src="/videos/instagram/reel-2-C9Ftp2ctg4u.jpg" alt="Une célébration haute en couleur sur Instagram" width="360" height="480" loading="lazy" />
            <img src="/videos/instagram/reel-3-DQxM5TnCOKL.jpg" alt="Notre Photobooth au salon du mariage" width="360" height="480" loading="lazy" />
          </a>}
        </div>
      </section>
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
            <h2>On en parle ?</h2>
            <a href={siteConfig.phoneHref} data-event="phone_click">{siteConfig.phoneLabel} <span aria-hidden="true">↗</span></a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href="/contact/">Envoyer un message <span aria-hidden="true">↗</span></a>
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
        .footer-instagram { background: #f7f3ea; color: #171717; padding: 32px 0; }
        .footer-instagram-inner { width: min(1180px, calc(100% - 48px)); margin: 0 auto; display: grid; grid-template-columns: .9fr 1.1fr; gap: 56px; align-items: center; }
        .footer-instagram-text-only { grid-template-columns: 1fr; }
        .footer-instagram-kicker { margin: 0 0 14px; color: #806231; text-transform: uppercase; letter-spacing: .16em; font-size: .72rem; font-weight: 700; }
        .footer-instagram h2 { margin: 0; color: #171717; font-size: clamp(1.9rem, 3.6vw, 3rem); line-height: 1.1; letter-spacing: -.04em; text-align: left; }
        .footer-instagram-copy > p:not(.footer-instagram-kicker) { max-width: 340px; margin: 18px 0 22px; color: #6f6a61; font-size: .95rem; line-height: 1.75; }
        .footer .footer-instagram-button { display: inline-flex; align-items: center; gap: 24px; min-height: 48px; padding: 12px 20px; border: 1px solid #171717; border-radius: 999px; color: #faf7ee; background: #171717; font-size: .88rem; font-weight: 600; text-decoration: none; }
        .footer .footer-instagram-button:hover { background: #39342c; color: #fff; }
        .footer-instagram-photos { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; padding: 12px 0; }
        .footer-instagram-photos img { display: block; width: 100%; height: auto; aspect-ratio: 3 / 4; object-fit: cover; border-radius: 10px; }
        .footer-instagram-photos img:nth-child(2) { transform: translateY(-12px); }
        @media (max-width: 760px) {
          .footer-instagram { padding: 24px 0; }
          .footer-instagram-inner { grid-template-columns: 1fr; gap: 28px; }
          .footer-instagram-photos { gap: 8px; }
        }
        .footer { padding: 0; color: #f7f3ea; background: #171717; text-align: left; font-family: "Roboto", sans-serif; }
        .footer-intro { background: #171717; border-top: 0; }
        .footer-container { width: min(1180px, calc(100% - 48px)); margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 28px 64px; align-items: start; padding: 32px 0 24px; }
        .footer-brand-name { color: #f7f3ea; font-size: clamp(1.7rem, 3vw, 2.4rem); letter-spacing: -.04em; font-weight: 700; text-decoration: none; }
        .footer-brand p { max-width: 330px; margin: 10px 0; color: #bcb6ac; font-size: 14px; line-height: 1.6; }
        .footer-review { display: inline-flex; align-items: center; gap: 20px; min-height: 36px; color: #d6b774; font-size: 13px; text-decoration: none; }
        .footer-contact { padding: 0 0 0 40px; border: 0; border-left: 1px solid #45413b; border-radius: 0; background: transparent; }
        .footer-contact h2 { margin: 0 0 6px; color: #d6b774; font-size: .72rem; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; line-height: 1.5; }
        .footer-contact > a { display: table; min-height: 36px; padding: 4px 0; color: #f7f3ea; font-size: 14px; line-height: 1.6; text-decoration: none; overflow-wrap: anywhere; }
        .footer-contact > a:first-of-type { font-size: clamp(1.5rem, 3vw, 2rem); letter-spacing: -.025em; }
        .footer-contact > a span { padding-left: 20px; color: #d6b774; }
        .footer-directory { border-top: 1px solid #393630; }
        .footer-navigation { width: min(1180px, calc(100% - 48px)); margin: 0 auto; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; padding: 20px 0; }
        .footer-group { min-width: 0; }
        .footer-group summary { display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 36px; color: #f7f3ea; font-size: 14px; font-weight: 600; line-height: 1.5; list-style: none; cursor: pointer; }
        .footer-group summary::-webkit-details-marker { display: none; }
        .footer-expand { position: relative; flex: 0 0 12px; width: 12px; height: 12px; color: #d6b774; }
        .footer-expand::before, .footer-expand::after { content: ""; position: absolute; top: 5px; left: 0; width: 12px; height: 1px; background: currentColor; }
        .footer-expand::after { transform: rotate(90deg); }
        .footer-group[open] .footer-expand::after { transform: rotate(0deg); }
        .footer-group-links { display: grid; gap: 0; padding: 4px 0; }
        .footer-group-links a { display: flex; align-items: center; min-height: 32px; color: #bcb6ac; font-size: 13px; line-height: 1.6; text-decoration: none; }
        .footer a:hover { color: #ecd29a; }
        .footer a:focus-visible, .footer button:focus-visible, .footer summary:focus-visible { outline: 2px solid #d6b774; outline-offset: 4px; }
        .footer .social-section { margin-top: 12px; }
        .footer .social-section p { color: #a49e94; }
        .footer .social-links a { min-height: 32px; color: #d6b774; }
        .footer-bottom { width: min(1180px, calc(100% - 48px)); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 0 16px; border-top: 1px solid #393630; color: #a49e94; font-size: 12px; line-height: 1.6; }
        .footer-bottom button { min-height: 36px; padding: 4px 0; border: 0; color: #bcb6ac; background: transparent; font: inherit; text-decoration: underline; text-underline-offset: 4px; cursor: pointer; }
        @media (max-width: 760px) {
          .footer-container { grid-template-columns: 1fr; gap: 20px; padding: 24px 0 20px; }
          .footer-contact { padding: 20px 0 0; border-left: 0; border-top: 1px solid #393630; }
          .footer-contact > a, .footer-review, .footer-group-links a, .footer .social-links a, .footer-bottom button { min-height: 44px; }
          .footer-navigation { grid-template-columns: 1fr; gap: 0; padding: 12px 0; }
          .footer-group { border-bottom: 1px solid #393630; }
          .footer-group summary { min-height: 48px; }
          .footer-group-links { padding: 0 0 8px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 4px; padding-bottom: max(20px, env(safe-area-inset-bottom)); border-top: 0; }
        }
      `}</style>
    </footer>
  );
}
