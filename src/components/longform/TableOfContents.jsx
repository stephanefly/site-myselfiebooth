export default function TableOfContents({ items = [] }) {
  if (!items.length) return null;
  return (
    <aside className="toc" aria-label="Sommaire">
      <p className="toc-title">Sommaire</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .toc {
          position: sticky;
          top: 120px;
          align-self: start;
          background: #fff;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
          max-width: 240px;
          margin-top: 1rem;
          display: none;
        }
        .toc-title {
          font-weight: 700;
          margin-bottom: 0.8rem;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.6rem;
        }
        a {
          text-decoration: none;
          color: #3b2f0f;
        }
        @media (min-width: 1024px) {
          .toc {
            display: block;
          }
        }
      `}</style>
    </aside>
  );
}
