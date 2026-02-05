import Image from "next/image";

export default function HeroSplit({
  tag,
  title,
  description,
  bullets = [],
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}) {
  return (
    <section className="hero">
      <div className="hero-content">
        {tag && <span className="tag">{tag}</span>}
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {bullets.length > 0 && (
          <ul className="bullets">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="hero-actions">
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
      <div className="hero-media">
        <div className="image-wrap">
          <Image
            src={image}
            alt={imageAlt}
            width={960}
            height={720}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: grid;
          gap: 1.75rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          padding: 90px 20px 50px;
          background: linear-gradient(135deg, #0f0f0f, #4b3a13);
          color: #fff;
          align-items: center;
        }
        .hero-content {
          max-width: 520px;
        }
        .tag {
          display: inline-block;
          background: linear-gradient(to right, #ffef96, #caa85f);
          color: #2b2100;
          padding: 6px 14px;
          border-radius: 999px;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .lead {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        .bullets {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0 0;
          display: grid;
          gap: 0.6rem;
        }
        .bullets li {
          padding-left: 1.2rem;
          position: relative;
        }
        .bullets li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffef96;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.2rem;
        }
        .cta {
          background: linear-gradient(to right, #ffef96, #caa85f);
          color: #2b2100;
          padding: 12px 24px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: bold;
        }
        .ghost {
          border: 1px solid #fff;
          color: #fff;
          padding: 12px 24px;
          border-radius: 999px;
          text-decoration: none;
        }
        .hero-media {
          display: flex;
          justify-content: center;
        }
        .image-wrap {
          width: min(520px, 100%);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45);
        }
      `}</style>
    </section>
  );
}
