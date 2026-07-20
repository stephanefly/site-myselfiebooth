export default function Services() {
  const services = [
    {
      title: "Photobooth",
      description:
        "Une valeur sure pour capturer des photos imprimees et digitales lors d'un mariage, d'une soiree d'entreprise ou d'un salon.",
      features: [
        "Impressions illimitees",
        "Animateur sur place",
        "Galerie web privee",
        "Livraison et installation",
      ],
      image: "/images/photobooth.webp",
      infoLink: "/prestations/photobooth",
      reserveLink: "https://reservation.myselfiebooth-paris.fr/",
      price: "A partir de 350 euros",
    },
    {
      title: "Miroirbooth",
      description:
        "Un miroir interactif elegant pour creer un point photo premium, ideal pour les receptions, galas et evenements VIP.",
      features: [
        "Ecran tactile interactif",
        "Animations personnalisees",
        "Accessoires de deguisement",
        "Service complet sur place",
      ],
      image: "/images/miroirbooth.webp",
      infoLink: "/prestations/miroirbooth",
      reserveLink: "https://reservation.myselfiebooth-paris.fr/",
      price: "A partir de 450 euros",
    },
    {
      title: "360 Booth",
      description:
        "Une animation video immersive pour generer des contenus dynamiques, partageables et adaptes aux reseaux sociaux.",
      features: [
        "Video HD a 360 degres",
        "Effets personnalises",
        "Partage instantane",
        "Gestion complete sur place",
      ],
      image: "/images/360booth.webp",
      infoLink: "/prestations/videobooth",
      reserveLink: "https://reservation.myselfiebooth-paris.fr/",
      price: "A partir de 400 euros",
    },
    {
      title: "Vogue Booth",
      description:
        "Un couloir lumineux inspire des tapis rouges pour donner une dimension spectaculaire a vos photos et videos.",
      features: [
        "Eclairage de style passerelle",
        "Photos de qualite professionnelle",
        "Decor personnalisable",
        "Equipe d'assistance sur place",
      ],
      image: "/images/voguebooth.webp",
      infoLink: "/prestations/voguebooth",
      reserveLink: "https://reservation.myselfiebooth-paris.fr/",
      price: "A partir de 500 euros",
    },
    {
      title: "iPad Booth",
      description:
        "Une solution compacte pour collecter rapidement des photos digitales, signatures, GIF ou contenus de marque.",
      features: [
        "Installation rapide",
        "Partage numerique instantane",
        "Personnalisation des photos",
        "Format compact",
      ],
      image: "/images/ipadbooth.webp",
      infoLink: "/prestations/ipadbooth",
      reserveLink: "https://reservation.myselfiebooth-paris.fr/",
      price: "A partir de 250 euros",
    },
    {
      title: "Air360 Booth",
      description:
        "Une experience 360 plus aerienne, pensee pour les grandes ambiances, les scenes marquees et les evenements modernes.",
      features: [
        "Videos 4K illimitees",
        "Jusqu'a 10 personnes",
        "Livraison et installation",
        "Animateur sur place",
        "Personnalisation",
        "Galerie web",
      ],
      image: "/images/airbooth.webp",
      infoLink: "/prestations/air360booth",
      reserveLink: "https://reservation.myselfiebooth-paris.fr/",
      price: "A partir de 400 euros",
    },
    {
      title: "Pack VIP",
      description:
        "Une combinaison Miroirbooth et 360 Booth pour les grandes receptions, activations de marque et evenements haut de gamme.",
      features: [
        "Livraison et installation",
        "2 animateurs sur place",
        "Video et impressions illimitees",
        "Galerie web",
        "Personnalisation",
      ],
      image: "/images/pack.webp",
      infoLink: "/prestations/packvip",
      reserveLink: "https://reservation.myselfiebooth-paris.fr/",
      price: "A partir de 850 euros",
    },
    {
      title: "Options supplementaires",
      description:
        "Ajoutez un phonebooth, un panneau de bienvenue, un mur floral, un livre d'or numerique ou un decor sur mesure.",
      features: [
        "Panneaux personnalises",
        "Phonebooth",
        "Murs floraux et arriere-plans",
        "Livre d'or numerique",
        "Hologrammes 3D",
        "Accessoires sur mesure",
      ],
      image: "/images/all_options.webp",
      infoLink: "/options/phonebooth",
      reserveLink: "https://reservation.myselfiebooth-paris.fr/",
      price: "A partir de 50 euros",
    },
  ];

  const showcaseImages = [
    "/images/photobooth.webp",
    "/images/miroirbooth.webp",
    "/images/voguebooth.webp",
  ];

  const styles = {
    section: {
      background: "linear-gradient(to bottom, #ffffff, #f5f5f5)",
      padding: "4rem 1rem",
    },
    container: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    title: {
      textAlign: "center",
      fontSize: "clamp(2rem, 3vw, 2.6rem)",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "1rem",
    },
    subtitle: {
      textAlign: "center",
      fontSize: "1.1rem",
      color: "#555",
      maxWidth: "820px",
      margin: "0 auto 1.25rem",
      lineHeight: "1.6",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    card: {
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "1.5rem",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      marginBottom: "1rem",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "0.5rem",
    },
    cardDescription: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "1rem",
      lineHeight: "1.5",
    },
    price: {
      textAlign: "center",
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#444",
      margin: "1rem 0",
    },
    featuresList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      textAlign: "left",
      fontSize: "0.9rem",
      color: "#555",
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0.5rem",
    },
    featureIcon: {
      color: "#d3a14a",
      fontSize: "1.2rem",
      marginRight: "0.5rem",
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "space-around",
      gap: "0.75rem",
      marginTop: "1rem",
      flexWrap: "wrap",
    },
    button: {
      color: "#fff",
      padding: "10px 18px",
      fontSize: "1rem",
      textDecoration: "none",
      borderRadius: "8px",
      background: "linear-gradient(rgb(236 219 133), rgb(126 104 32))",
      boxShadow: "0 2px 5px rgb(11, 11, 11)",
      transition: "transform 0.2s ease, background-color 0.3s ease",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
    },
    buttonHover: {
      background: "#fbe9a3",
      color: "#2b2100",
      transform: "translateY(-5px)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.18)",
    },
    ctaWrapper: {
      marginTop: "2.5rem",
      display: "flex",
      justifyContent: "center",
    },
    cta: {
      padding: "14px 28px",
      borderRadius: "999px",
      background: "linear-gradient(to right, #ffef96, #caa85f)",
      color: "#2b2100",
      textDecoration: "none",
      fontWeight: "bold",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.2s ease",
    },
  };

  return (
    <section id="prestations" style={styles.section}>
      <div style={styles.container}>
        <p className="services-kicker fade-up">Prestations premium</p>
        <h2 style={styles.title} className="fade-up stagger-1">
          Des formats pour chaque evenement
        </h2>
        <p style={styles.subtitle} className="fade-up stagger-2">
          Photobooth, Miroirbooth, 360 Booth, Vogue Booth ou Pack VIP: chaque
          prestation peut etre adaptee a un mariage, une soiree d'entreprise, un
          salon, une activation de marque ou une reception privee.
        </p>
        <p style={styles.subtitle} className="fade-up stagger-3">
          Nous gerons la logistique et la personnalisation pour vous livrer une
          experience elegante, fiable et exploitable avant, pendant et apres
          l'evenement.
        </p>

        <div className="services-gallery fade-up">
          {showcaseImages.map((src, index) => (
            <div
              key={src}
              className={`services-gallery-item ${index === 1 ? "is-center" : ""}`}
            >
              <img src={src} alt="Photobooth MySelfieBooth" />
            </div>
          ))}
        </div>

        <div style={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.title}
              style={styles.card}
              className={index % 2 === 0 ? "fade-left" : "fade-right"}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.cardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(0)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                })
              }
            >
              <img src={service.image} alt={service.title} style={styles.image} />
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDescription}>{service.description}</p>
              <ul style={styles.featuresList}>
                {service.features.map((feature) => (
                  <li key={feature} style={styles.featureItem}>
                    <span style={styles.featureIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <h3 style={styles.price}>{service.price}</h3>
              <div style={styles.buttonWrapper}>
                <a
                  href={service.infoLink}
                  style={styles.button}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, styles.buttonHover)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, styles.button)
                  }
                >
                  Plus d'infos
                </a>
                <a
                  href={service.reserveLink}
                  style={styles.button}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, styles.buttonHover)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, styles.button)
                  }
                >
                  Reserver
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.ctaWrapper}>
          <a
            href="https://reservation.myselfiebooth-paris.fr/"
            style={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Obtenir un devis en 2 minutes
          </a>
        </div>
      </div>

      <style jsx>{`
        .services-kicker {
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          font-size: 0.85rem;
          color: #9b7b1f;
          margin-bottom: 0.6rem;
        }

        .services-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin: 2.5rem auto 3rem;
        }

        .services-gallery-item {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: #fff;
        }

        .services-gallery-item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .services-gallery-item.is-center {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}
