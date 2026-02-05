export default function ProofSection({ stats = [], testimonials = [] }) {
  return (
    <div className="proof">
      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name}>
            <p>“{testimonial.quote}”</p>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
      <style jsx>{`
        .proof {
          display: grid;
          gap: 2.5rem;
        }
        .stats {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }
        .stat {
          background: #fff;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }
        .stat strong {
          font-size: 2rem;
          color: #3b2f0f;
          display: block;
        }
        .stat span {
          color: #666;
        }
        .testimonials {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }
        blockquote {
          margin: 0;
          background: #fff;
          border-radius: 18px;
          padding: 1.6rem;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
        }
        blockquote p {
          color: #444;
        }
        footer {
          margin-top: 1rem;
          display: grid;
          gap: 0.2rem;
        }
        footer span {
          color: #888;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
