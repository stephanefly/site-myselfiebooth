export default function Portfolio() {
  const logos = [
    "/logos/sephora.webp",
    "/logos/prada.webp",
    "/logos/fitnesspark.webp",
    "/logos/safran.webp",
    "/logos/decathlon.webp",
    "/logos/leclerc.webp",
    "/logos/leroymerlin.webp",
    "/logos/bouygues.webp",
    "/logos/airfrance.webp",
    "/logos/renault.webp",
    "/logos/sncf.webp",
    "/logos/veolia.webp",
    "/logos/orange.webp",
    "/logos/axa.webp",
  ];

  const moments = [
    "/images/mariages/mariage1.JPG",
    "/images/photobooth.webp",
    "/images/miroirbooth.webp",
  ];

const styles = {
  portfolioImage: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "1rem",
    transition: "transform 0.3s ease",
  },
  portfolioImageHover: {
    transform: "scale(1.05)",
  },
    section: {
      background: "linear-gradient(#ffffff, #838383)",
      padding: "1rem 2rem",
    },
    container: {
      maxWidth: "1500px",
      margin: "0 auto",
      overflow: "hidden",
      position: "relative",
    },
    title: {
      textAlign: "center",
      fontSize: "1.7rem",
      fontWeight: "bold",
      color: "#3e3e3e",
      marginTop: "1rem",
    },
    logoWrapper: {
      display: "flex",
      alignItems: "center",
      animation: "scroll 120s linear infinite",
    },
    logo: {
      flex: "0 0 auto",
      width: "200px",
      height: "auto",
      margin: "0 30px",
      filter: "grayscale(100%)",
      transition: "transform 0.3s ease",
    },
    logoHover: {
      transform: "scale(0.5)",
    },
  };

  return (
      <section style={styles.section}>
        <hr/>
        <style>
          {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
        </style>
        <div style={styles.container}>
          <h2 style={styles.title} className="fade-up">
            Ils nous ont fait confiance!
          </h2>
          <p className="portfolio-subtitle fade-up stagger-1">
            Des maisons iconiques et des marques ambitieuses choisissent
            MySelfieBooth pour sublimer leurs événements et créer des souvenirs
            premium.
          </p>
          <div className="portfolio-gallery fade-up">
            {moments.map((src) => (
              <div key={src} className="portfolio-gallery-card">
                <img src={src} alt="Moment photobooth" />
              </div>
            ))}
          </div>
          <div style={{display: "flex", overflow: "hidden", width: "100%"}}>
            <div style={styles.logoWrapper}>
              {logos.concat(logos).map((logo, index) => (
                  <img
                      key={index}
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      style={styles.logo}
                      onMouseEnter={(e) =>
                          Object.assign(e.currentTarget.style, styles.logoHover)
                      }
                      onMouseLeave={(e) =>
                          Object.assign(e.currentTarget.style, {transform: "scale(1)"})
                      }
                  />
              ))}
            </div>
          </div>
        </div>
        <hr/>
        <style jsx>{`
          .portfolio-subtitle {
            text-align: center;
            margin: 0.5rem auto 1.5rem;
            max-width: 760px;
            color: #444;
          }

          .portfolio-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.2rem;
            margin: 1.5rem auto 2rem;
          }

          .portfolio-gallery-card {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
          }

          .portfolio-gallery-card img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }
        `}</style>
      </section>
  );
}
