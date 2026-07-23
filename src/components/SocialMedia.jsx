import { siteConfig } from "../data/site";

export default function SocialMedia() {
  return (
    <section className="social-section">
      <div className="social-container">
        <p>Suivre les coulisses, les événements et les réalisations</p>
        <div className="social-links">
          {siteConfig.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <img src={social.icon} alt="" width="20" height="20" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .social-section {
          padding: 28px 0;
          color: #fff;
          background: #111;
          text-align: left;
        }

        .social-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        p {
          margin: 0;
          color: #efe9dd;
          font-weight: 800;
        }

        .social-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-links a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 40px;
          padding: 0 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          background: rgba(255, 255, 255, 0.06);
        }

        img {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 720px) {
          .social-container {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
