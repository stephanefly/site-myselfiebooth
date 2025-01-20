import React from 'react';

const Besoins = () => {
  return (
    <section id="douleur" className="douleur-section">
      <div className="container">
        <h2 className="title">Immortaliser vos évènnement avec MySelfieBooth</h2>
        <p className="description">
          Mariages, anniversaires, soirées privées ou événements d'entreprise, chaque occasion est unique et mérite
          d’être gravée dans les mémoires. Offrez à vos invités une animation ludique et originale avec nos photobooths,
          pour des souvenirs à partager et à conserver.
        </p>


        <div className="needs-grid">
          <div className="needs-item">
            <img src="/images/template_model.jpg" alt="Particulier" className="background-image"/>
            <div className="overlay">
              <h3>Mariage</h3>
            </div>
          </div>

          <div className="needs-item">
            <img src="/images/template_model.jpg" alt="Entreprise" className="background-image"/>
            <div className="overlay">
              <h3>Anniversaire</h3>
            </div>
          </div>
          <div className="needs-item">
            <img src="/images/template_model.jpg" alt="Entreprise" className="background-image"/>
            <div className="overlay">
              <h3>Corporate</h3>
            </div>
          </div>
          <div className="needs-item">
            <img src="/images/template_model.jpg" alt="Entreprise" className="background-image"/>
            <div className="overlay">
              <h3>Soirée</h3>
            </div>
          </div>
        </div>
        <br/>
        <div className="cta">
          <a href="https://reservation.myselfiebooth-paris.fr" className="cta-btn">
            Obtenir un devis personnalisé
          </a>
        </div>
      </div>

      <style jsx>{`
        .douleur-section {
          padding: 20px 20px;
          background: linear-gradient(45deg, #dddacb, #675e32);
          color: #fff;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #ffffff;
        }

        .description {
          font-size: 1.2rem;
          color: #ddd;
          margin-bottom: 10px;
          line-height: 1.5;
        }

        .needs-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }

        .needs-item {
          flex: 1 1 calc(50% - 30px);
          max-width: 550px;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .needs-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }

        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .overlay {
          position: relative;
          z-index: 2;
          padding: 120px 20px;
          background: rgba(248, 248, 248, 0.81);
          color: #fff;
          text-align: center;
          border-radius: 15px;
        }

        .overlay h3 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: #493f0d;
        }


        .cta-btn {
          display: inline-block;
          padding: 20px 40px;
          font-size: 1.6rem;
          background-image: linear-gradient(to bottom, #ffef96, #5a4300);
          color: #fff;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 5px 15px rgb(11, 11, 11);
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: #fbe9a3;
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.99);
        }

        @media (max-width: 768px) {
          .needs-item {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Besoins;
