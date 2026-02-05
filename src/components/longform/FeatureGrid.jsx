export default function FeatureGrid({ items = [], columns = 3 }) {
  return (
    <div className={`grid cols-${columns}`}>
      {items.map((item) => (
        <article key={item.title} className="card">
          <h3>{item.title}</h3>
          {item.description && <p>{item.description}</p>}
          {item.list && (
            <ul>
              {item.list.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
      <style jsx>{`
        .grid {
          display: grid;
          gap: 1.5rem;
        }
        .grid.cols-2 {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
        .grid.cols-3 {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .grid.cols-4 {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        .card {
          background: #fff;
          padding: 1.5rem;
          border-radius: 18px;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
          text-align: left;
        }
        .card h3 {
          margin-bottom: 0.6rem;
          font-size: 1.2rem;
        }
        .card p {
          color: #555;
        }
        .card ul {
          margin-top: 0.8rem;
          padding-left: 1.1rem;
          color: #555;
        }
      `}</style>
    </div>
  );
}
