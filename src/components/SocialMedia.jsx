import { siteConfig } from "../data/site";

export default function SocialMedia() {
  return (
    <nav className="social-section" aria-label="Nos réseaux sociaux">
      <p>Les coulisses de nos événements</p>
        <div className="social-links">
          {siteConfig.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <span>{social.name}</span>
            </a>
          ))}
        </div>

      <style jsx>{`
        .social-section { margin-top: 28px; text-align: left; }
        p { margin: 0 0 8px; color: #92978d; font-size: 12px; line-height: 1.6; }
        .social-links { display: flex; flex-wrap: wrap; gap: 4px 20px; }
        .social-links a { display: inline-flex; align-items: center; min-height: 44px; color: #d6b774; font-size: 13px; text-decoration: none; }
        .social-links a:hover { text-decoration: underline; text-underline-offset: 5px; }
        .social-links a:focus-visible { outline: 2px solid #d6b774; outline-offset: 4px; }
      `}</style>
    </nav>
  );
}
