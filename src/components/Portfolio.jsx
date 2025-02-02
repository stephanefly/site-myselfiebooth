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
          <h2 style={styles.title}>Ils nous ont fait confiance!</h2>
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
      </section>
  );
}
