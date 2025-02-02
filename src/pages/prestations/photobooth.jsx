import Layout from "../../components/Layout";

export default function Photobooth() {
  return (
    <Layout>
      <div className="container">
        <section className="section orange">
          <h1>📸 MySelfieBooth - L'expérience Photobooth Ultime ! 🎉</h1>
          <p>
            Transformez vos événements en souvenirs inoubliables avec notre photobooth haut de gamme.
            Offrez à vos invités une animation interactive, fun et élégante, idéale pour les mariages,
            anniversaires, soirées d'entreprise et bien plus encore !
          </p>
        </section>

        <section className="section white">
          <h2>✨ Pourquoi choisir le Photobooth ?</h2>
          <ul>
            <li>📷 <strong>Qualité photo professionnelle :</strong> Des clichés nets et lumineux grâce à un équipement dernier cri.</li>
            <li>🎭 <strong>Personnalisation totale :</strong> Filtres, cadres, effets, arrière-plans... tout est personnalisable !</li>
            <li>🚀 <strong>Installation rapide :</strong> Une mise en place efficace pour un événement sans stress.</li>
            <li>💾 <strong>Partage instantané :</strong> Recevez et partagez vos photos en quelques secondes sur vos réseaux sociaux.</li>
            <li>🎨 <strong>Design élégant :</strong> Un photobooth au look moderne qui s’intègre parfaitement à toutes vos ambiances.</li>
          </ul>
        </section>

        <section className="section gray">
          <h2>🎊 Parfait pour tous vos événements</h2>
          <p>
            Que ce soit pour un <strong>mariage</strong>, une <strong>fête privée</strong>, un <strong>séminaire</strong> ou une <strong>inauguration</strong>,
            MySelfieBooth apporte une touche d’originalité et d’élégance à votre événement.
            Laissez vos invités repartir avec des souvenirs imprimés et digitaux inoubliables !
          </p>
        </section>

        <section className="section white">
          <h2>🛠 Nos options sur-mesure</h2>
          <ul>
            <li>🖼 <strong>Personnalisation des impressions :</strong> Ajoutez votre logo, un message ou un design unique.</li>
            <li>🎞 <strong>GIFs et vidéos :</strong> Offrez à vos invités une expérience encore plus immersive.</li>
            <li>🌟 <strong>Effets spéciaux :</strong> Fond vert, filtres dynamiques et animations pour un rendu incroyable.</li>
            <li>📲 <strong>Galerie en ligne :</strong> Accédez à toutes les photos après l’événement via un espace dédié.</li>
          </ul>
        </section>

        <section className="section orange">
          <h2>📅 Réservez votre Photobooth dès maintenant !</h2>
          <p>
            Ne manquez pas l'opportunité d'ajouter une animation unique à votre événement !
            Consultez nos tarifs et réservez en quelques clics :
          </p>
          <a href="https://reservation.myselfiebooth-paris.fr" className="cta-button">
            🎟 Réservez votre photobooth
          </a>
        </section>
      </div>

      {/* Styles en ligne */}
      <style jsx>{`
        .container {
          text-align: center;
          max-width: 100%;
          margin: auto;
          padding-top: 80px;
        }

        .section {
          padding: 60px 20px;
        }

        .orange {
          background-color: #ffdca8;
          color: white;
        }

        .white {
          background-color: white;
          color: #333;
        }

        .gray {
          background-color: #f4f4f4;
          color: #333;
        }

        h1, h2 {
          margin-bottom: 20px;
        }

        p {
          font-size: 24px;
          line-height: 1.8;
          max-width: 80%;
          margin: auto;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          font-size: 22px;
          margin-bottom: 15px;
          text-align: center;
        }

        .cta-button {
          display: inline-block;
          background-color: white;
          color: #ff9800;
          padding: 20px 40px;
          font-size: 24px;
          border-radius: 10px;
          text-decoration: none;
          margin-top: 30px;
          transition: background 0.3s ease;
        }

        .cta-button:hover {
          background-color: #e68900;
          color: white;
        }

        @media (max-width: 768px) {
          p {
            font-size: 18px;
            max-width: 90%;
          }
        }
      `}</style>
    </Layout>
  );
}
