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
    {
      src: "/images/ia/home/tile-01_r1c1.webp",
      alt: "Photobooth premium dans un decor raffine",
      label: "Reception premium",
    },
    {
      src: "/images/ia/home/tile-05_r2c2.webp",
      alt: "Invites elegants autour d'un photobooth de luxe",
      label: "Experience invite",
    },
    {
      src: "/images/ia/home/tile-09_r3c3.webp",
      alt: "Details lumineux d'une animation photobooth",
      label: "Animation de marque",
    },
  ];

  const styles = {
    section: {
      background: "linear-gradient(#ffffff, #838383)",
      padding: "3rem 2rem",
    },
    container: {
      maxWidth: "1500px",
      margin: "0 auto",
      overflow: "hidden",
      position: "relative",
    },
    title: {
      textAlign: "center",
      fontSize: "clamp(2rem, 3vw, 2.7rem)",
      fontWeight: "bold",
      color: "#2f2f2f",
      marginTop: "0",
      marginBottom: "0.75rem",
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
      transition: "transform 0.3s ease, filter 0.3s ease",
    },
    logoHover: {
      transform: "scale(1.05)",
      filter: "grayscale(0%)",
    },
  };

  return (
    <section style={styles.section}>
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
        <p className="portfolio-kicker fade-up">References et confiance</p>
        <h2 style={styles.title} className="fade-up">
          Des marques, agences et particuliers nous confient leurs evenements
        </h2>
        <p className="portfolio-subtitle fade-up stagger-1">
          MySelfieBooth accompagne aussi bien les receptions privees que les
          operations professionnelles: soirees d'entreprise, activations de
          marque, salons, lancements produit et evenements VIP.
        </p>

        <div className="proof-grid fade-up stagger-2">
          <div>
            <strong>+500</strong>
            <span>evenements accompagnes</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>note moyenne annoncee</span>
          </div>
          <div>
            <strong>B2B + prive</strong>
            <span>parcours adapte a chaque public</span>
          </div>
        </div>

        <div className="portfolio-gallery fade-up">
          {moments.map((moment) => (
            <div key={moment.src} className="portfolio-gallery-card">
              <img src={moment.src} alt={moment.alt} />
              <span>{moment.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
          <div style={styles.logoWrapper}>
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo client ${index + 1}`}
                style={styles.logo}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, styles.logoHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, {
                    transform: "scale(1)",
                    filter: "grayscale(100%)",
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .portfolio-kicker {
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.24rem;
          font-size: 0.82rem;
          color: #7b621c;
          margin-bottom: 0.75rem;
        }

        .portfolio-subtitle {
          text-align: center;
          margin: 0.5rem auto 1.5rem;
          max-width: 820px;
          color: #3f3f3f;
          line-height: 1.6;
        }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          max-width: 920px;
          margin: 0 auto 2rem;
        }

        .proof-grid div {
          background: rgba(255, 255, 255, 0.68);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          padding: 1.1rem;
          text-align: center;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }

        .proof-grid strong {
          display: block;
          color: #2f2f2f;
          font-size: 1.45rem;
          margin-bottom: 0.35rem;
        }

        .proof-grid span {
          color: #5a5a5a;
        }

        .portfolio-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.2rem;
          margin: 1.5rem auto 2rem;
        }

        .portfolio-gallery-card {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
          position: relative;
          min-height: 260px;
        }

        .portfolio-gallery-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .portfolio-gallery-card span {
          position: absolute;
          left: 1rem;
          bottom: 1rem;
          color: #fff;
          background: rgba(0, 0, 0, 0.62);
          border-radius: 999px;
          padding: 0.45rem 0.8rem;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
