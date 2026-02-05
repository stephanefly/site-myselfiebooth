export default function BackToTop() {
  return (
    <a href="#top" className="back-to-top" aria-label="Retour en haut de page">
      Haut de page
      <style jsx>{`
        .back-to-top {
          position: fixed;
          right: 20px;
          bottom: 24px;
          background: #3b2f0f;
          color: #fff;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 0.85rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          z-index: 20;
        }
        @media (max-width: 600px) {
          .back-to-top {
            right: 12px;
            bottom: 16px;
          }
        }
      `}</style>
    </a>
  );
}
