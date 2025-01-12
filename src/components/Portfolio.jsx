export default function Portfolio() {
  const logos = [
    "/logos/sephora.png",
    "/logos/prada.png",
    "/logos/fitnesspark.png",
    "/logos/safran.png",
    "/logos/decathlon.png",
    "/logos/leclerc.png",
    "/logos/leroymerlin.png",
    "/logos/bouygues.png",
    "/logos/airfrance.png",
    "/logos/renault.png",
    "/logos/sncf.png",
    "/logos/veolia.png",
    "/logos/orange.png",
    "/logos/axa.png",
  ];

  const styles = {
    section: {
      backgroundColor: "#c1c1c1",
      padding: "1rem 1rem",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      overflow: "hidden",
      position: "relative",
    },
    title: {
      textAlign: "center",
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#333",
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
      transform: "scale(1.1)",
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
          <h2 style={styles.title}>Ils nous ont fait confiance !</h2>
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
