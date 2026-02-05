export default function Steps({ steps = [] }) {
  return (
    <ol className="steps">
      {steps.map((step, index) => (
        <li key={step.title} className="step">
          <span className="index">0{index + 1}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
      <style jsx>{`
        .steps {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 1.2rem;
        }
        .step {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1rem;
          padding: 1.2rem 1.4rem;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          align-items: center;
        }
        .index {
          font-weight: 700;
          color: #a17d2d;
          font-size: 1.2rem;
        }
        .step h3 {
          margin-bottom: 0.4rem;
        }
        .step p {
          color: #555;
        }
      `}</style>
    </ol>
  );
}
