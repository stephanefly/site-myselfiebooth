export default function Services() {
  const services = [
    {
      title: "Photobooth",
      description:
        "Le Photobooth Classique est l'option parfaite pour capturer des souvenirs inoubliables. Offrant des impressions illimitées, des animations en direct et une personnalisation complète, il est idéal pour tout type d'événement.",
      features: [
        "Impressions illimitées",
        "Animateur sur place",
        "Galerie Web",
        "Livraison et installation",
      ],
      image: "/images/photobooth.webp",
      infoLink: "/prestations/photobooth", // Lien vers plus d'infos
      reserveLink: "https://reservation.myselfiebooth-paris.fr/", // Lien vers réservation
      price: "À partir de 350€",
    },
    {
      title: "Miroirbooth",
      description:
        "Le Miroirbooth est une solution élégante et interactive qui combine technologie et divertissement. Vos invités seront éblouis par ce miroir tactile qui capture des photos et des souvenirs de manière unique.",
      features: [
        "Écran tactile interactif",
        "Animations personnalisées",
        "Accessoires de déguisement",
        "Service complet sur place",
      ],
      image: "/images/miroirbooth.webp",
      infoLink: "/prestations/miroirbooth", // Lien vers plus d'infos
      reserveLink: "https://reservation.myselfiebooth-paris.fr/", // Lien vers réservation
      price: "À partir de 450€",
    },
    {
      title: "360 Booth",
      description:
        "Le 360 Booth permet de capturer des vidéos à 360° pour une expérience immersive. Idéal pour les événements modernes, ce stand propose des effets visuels dynamiques que vos invités pourront partager sur les réseaux sociaux.",
      features: [
        "Vidéo HD à 360°",
        "Personnalisation des effets",
        "Partage instantané sur les réseaux sociaux",
        "Gestion complète sur place",
      ],
      image: "/images/360booth.webp",
      infoLink: "/prestations/videobooth", // Lien vers plus d'infos
      reserveLink: "https://reservation.myselfiebooth-paris.fr/", // Lien vers réservation
      price: "À partir de 400€",
    },
    {
      title: "Vogue Booth",
      description:
        "Le Vogue Booth vous permet d’apporter une touche de glamour à votre événement. Inspiré des tapis rouges, ce stand est parfait pour les événements VIP avec des effets lumineux spectaculaires et des prises de vue professionnelles.",
      features: [
        "Éclairage de style passerelle",
        "Photos de qualité professionnelle",
        "Personnalisation des décors",
        "Équipe d'assistance sur place",
      ],
      image: "/images/voguebooth.webp",
      infoLink: "/prestations/voguebooth", // Lien vers plus d'infos
      reserveLink: "https://reservation.myselfiebooth-paris.fr/", // Lien vers réservation
      price: "À partir de 500€",
    },
    {
      title: "iPad Booth",
      description:
        "Le iPad Booth est une option simple et efficace pour les petits événements. Compact et rapide à installer, il permet de capturer des photos numériques de haute qualité, avec la possibilité de les partager immédiatement.",
      features: [
        "Installation rapide",
        "Partage numérique instantané",
        "Personnalisation des photos",
        "Conception compacte pour les petits espaces",
      ],
      image: "/images/ipadbooth.webp",
      infoLink: "/prestations/ipadbooth", // Lien vers plus d'infos
      reserveLink: "https://reservation.myselfiebooth-paris.fr/", // Lien vers réservation
      price: "À partir de 250€",
    },
    {
      title: "Air360 Booth",
      description:
        "Le Air360 Booth est une expérience unique avec des vidéos 4K illimitées et une capacité d'accueil jusqu'à 10 personnes par session. Parfait pour les événements modernes et immersifs.",
      features: [
        "Vidéos 4K illimitées",
        "Jusqu'à 10 personnes",
        "Livraison et installation",
        "Animateur sur place",
        "Personnalisation",
        "Galerie Web",
      ],
      image: "/images/airbooth.webp",
      infoLink: "/prestations/air360booth", // Lien vers plus d'infos
      reserveLink: "https://reservation.myselfiebooth-paris.fr/", // Lien vers réservation
      price: "À partir de 400€",
    },
    {
      title: "Pack VIP",
      description:
        "Combinez le Miroirbooth et le 360 Booth pour une expérience exclusive. Parfait pour les grandes réceptions ou les événements professionnels de haut niveau.",
      features: [
        "Livraison et installation",
        "2 Animateurs sur place",
        "Vidéo et impressions illimitées",
        "Galerie Web",
        "Personnalisation",
      ],
      image: "/images/pack.webp",
      infoLink: "/prestations/packvip", // Lien vers plus d'infos
      reserveLink: "https://reservation.myselfiebooth-paris.fr/", // Lien vers réservation
      price: "À partir de 850€",
    },
    {
      title: "Options Supplémentaires",
      description:
        "Enrichissez votre événement avec des options supplémentaires comme le phonebooth, les panneaux de bienvenue, les murs floraux ou encore les livres d'or numériques. Ces extras apportent une touche d'élégance et de divertissement supplémentaire.",
      features: [
        "Panneaux de bienvenue personnalisés",
        "Phonebooth",
        "Murs floraux et arrière-plans personnalisés",
        "Livre d'or numérique",
        "Hologrammes 3D",
        "Accessoires sur mesure",
      ],
      image: "/images/all_options.webp",
      infoLink: "/options/phonebooth", // Lien vers plus d'infos
      reserveLink: "https://reservation.myselfiebooth-paris.fr/", // Lien vers réservation
      price: "À partir de 50€",
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
    padding: "2rem 1rem",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "2rem",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1.1rem",
    color: "#666",
    maxWidth: "760px",
    margin: "0 auto 2.5rem",
    lineHeight: "1.6",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive grid
    gap: "2rem",
  },
  card: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "15px",
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
    borderRadius: "10px",
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
    marginTop: "1rem",
  },
  button: {
    color: "#fff",
    padding: "10px 20px",
    fontSize: "1rem",
    textDecoration: "none",
    borderRadius: "10px",
    background: "linear-gradient(rgb(236 219 133), rgb(126 104 32))",
    boxShadow: "0 2px 5px rgb(11, 11, 11)",
    transition: "transform 0.2s ease, background-color 0.3s ease",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",

  },
  buttonHover: {
    background: "#fbe9a3",
    transform: "translateY(-5px)",
    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.99)",
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
          Nos Prestations
        </h2>
        <p style={styles.subtitle} className="fade-up stagger-2">
          Des solutions clés en main pour tous vos événements, avec livraison,
          installation, personnalisation graphique et accompagnement sur place.
        </p>
        <p style={styles.subtitle} className="fade-up stagger-3">
          Choisissez le format parfait, ajoutez vos options et laissez-nous
          orchestrer l&apos;expérience complète : du premier brief créatif à la
          galerie finale.
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
                  key={index}
                  style={styles.card}
                  className={index % 2 === 0 ? "fade-left" : "fade-right"}
                  onMouseEnter={(e) =>
                      Object.assign(e.currentTarget.style, styles.cardHover)
                  }
                  onMouseLeave={(e) =>
                      Object.assign(e.currentTarget.style, {
                        transform: "translateY(0)",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                      })
                  }
              >
                <img
                    src={service.image}
                    alt={service.title}
                    style={styles.image}
                />
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDescription}>{service.description}</p>
                <ul style={styles.featuresList}>
                  {service.features.map((feature, i) => (
                      <li key={i} style={styles.featureItem}>
                        <span style={styles.featureIcon}>✔</span>
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
                    + d'info
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
                    Réserver !
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
          border-radius: 18px;
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
