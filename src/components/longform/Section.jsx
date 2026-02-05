export default function Section({ id, eyebrow, title, lead, children, variant = "default" }) {
  return (
    <section id={id} className={`section ${variant}`}>
      <div className="section-inner">
        {(eyebrow || title || lead) && (
          <header className="section-header">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
            {lead && <p className="lead">{lead}</p>}
          </header>
        )}
        {children}
      </div>
      <style jsx>{`
        .section {
          padding: 54px 20px;
        }
        .section.default {
          background: #fff;
        }
        .section.alt {
          background: #f7f5f0;
        }
        .section.dark {
          background: #131313;
          color: #fff;
        }
        .section-inner {
          max-width: 1120px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 1.8rem;
        }
        .section-header h2 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          margin-bottom: 0.8rem;
          letter-spacing: -0.01em;
        }
        .eyebrow {
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
          font-size: 0.75rem;
          color: #a17d2d;
          margin-bottom: 0.6rem;
        }
        .lead {
          max-width: 720px;
          margin: 0 auto;
          font-size: 1.05rem;
          color: inherit;
          opacity: 0.8;
        }
        .dark .lead {
          opacity: 0.85;
        }
      `}</style>
    </section>
  );
}
