export default function CTASection({ title, description, primaryCta, secondaryCta }) {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="cta-actions">
          {primaryCta && (
            <a
              href={primaryCta.href}
              target={primaryCta.external ? "_blank" : undefined}
              rel={primaryCta.external ? "noopener noreferrer" : undefined}
              className="cta"
            >
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className="ghost">
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
      <style jsx>{`
        .cta-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #1a1409, #3b2f0f);
          color: #fff;
        }
        .cta-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        p {
          margin: 1rem auto 2rem;
          max-width: 640px;
          opacity: 0.85;
        }
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .cta {
          background: linear-gradient(to right, #ffef96, #caa85f);
          color: #2b2100;
          padding: 12px 26px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: bold;
        }
        .ghost {
          border: 1px solid #fff;
          color: #fff;
          padding: 12px 26px;
          border-radius: 999px;
          text-decoration: none;
        }
      `}</style>
    </section>
  );
}
