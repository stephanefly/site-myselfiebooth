export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 MySelfieBooth. Tous droits réservés.</p>
      </footer>

      <style jsx>{`
        footer {
          background: linear-gradient(to right, #000000, #675e32)  ;
          color: #ffffff;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}
