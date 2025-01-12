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
      image: "/images/photobooth.jpg",
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
      image: "/images/miroirbooth.jpg",
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
      image: "/images/360booth.jpg",
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
      image: "/images/ipadbooth.jpg",
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
      image: "/images/voguebooth.jpg",
    },
    {
      title: "Air360 Booth",
      description:
        "Le Air360 Booth est une expérience unique avec des vidéos 4K illimitées et une capacité d'accueil jusqu'à 10 personnes par session. Parfait pour les événements modernes et immersifs.",
      features: [
        "Vidéo 4K illimitées",
        "Jusqu'à 10 personnes",
        "Livraison et installation",
        "Animateur sur place",
        "Personnalisation",
        "Galerie Web",
      ],
      image: "/images/360booth.jpg",
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
      image: "/images/pack.jpg",
    },
    {
      title: "Options Supplémentaires",
      description:
        "Enrichissez votre événement avec des options supplémentaires comme les murs floraux, les fonds personnalisés, ou encore des livres d'or numériques. Ces extras apportent une touche d'élégance et de divertissement supplémentaire.",
      features: [
        "Murs floraux et arrière-plans personnalisés",
        "Livre d'or numérique",
        "Hologrammes 3D",
        "Accessoires sur mesure",
      ],
      image: "/images/all_options.jpg",
    },
  ];

  const styles = {
    section: {
      backgroundColor: "#f9f9f9",
      padding: "1rem 1rem",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    title: {
      textAlign: "center",
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#333",
      margin: "1rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
    },
    card: {
      backgroundColor: "#fff",
      border: "2px solid #d3a14a",
      borderRadius: "15px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      padding: "1.5rem",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
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
      marginBottom: "1rem",
    },
    cardDescription: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "1rem",
    },
    featuresList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      textAlign: "left",
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "0.5rem",
      fontSize: "1rem",
      color: "#333",
    },
    featureIcon: {
      color: "#d3a14a",
      fontSize: "1.2rem",
      marginRight: "0.5rem",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <hr/>
        <h2 style={styles.title}>Nos Prestations</h2>
        <div style={styles.grid}>
          {services.map((service, index) => (
              <div
                  key={index}
                  style={styles.card}
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
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
