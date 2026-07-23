import Layout from "../Layout";
import { siteConfig } from "../../data/site";
import useRevealMotion from "../../hooks/useRevealMotion";

const projects = [
  {
    number: "01",
    title: "Fabriquer nos machines",
    text: "Nous concevons, adaptons et testons nos bornes pour garder la main sur le rendu et la fiabilité.",
  },
  {
    number: "02",
    title: "Créer de nouveaux formats",
    text: "Photobooth, Miroirbooth, 360Booth, Air 360, VogueBooth et Vidéobooth : chaque format répond à un usage précis.",
  },
  {
    number: "03",
    title: "Personnaliser l'expérience",
    text: "Habillage, décor, impressions et souvenirs sont préparés selon l'événement ou l'identité de la marque.",
  },
  {
    number: "04",
    title: "Être présents sur place",
    text: "Préparation, transport, montage, essais et accompagnement : notre équipe suit le projet jusqu'au dernier invité.",
  },
];

const values = [
  ["Concevoir", "Des installations pensées et testées par notre équipe."],
  ["Préparer", "Chaque détail est validé avant le jour de l'événement."],
  ["Accompagner", "Une équipe joignable et présente quand il le faut."],
];

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Qui sommes-nous - MySelfieBooth",
  url: `${siteConfig.baseUrl}/a-propos/`,
  primaryImageOfPage: `${siteConfig.baseUrl}/images/equipe/portrait-stephane-faure.webp`,
  about: {
    "@type": "Organization",
    name: siteConfig.name,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
    },
  },
};

export default function AboutPage() {
  const pageRef = useRevealMotion("about");

  return (
    <Layout
      metaProps={{
        title: "Qui sommes-nous | MySelfieBooth",
        description:
          "Découvrez l'histoire familiale de MySelfieBooth, Stéphane Faure, la conception de nos machines et l'équipe qui accompagne chaque événement.",
        ogImage: "/images/equipe/portrait-stephane-faure.webp",
        ogUrl: "/a-propos/",
        includeOrganization: true,
        jsonLd: [aboutPageJsonLd],
      }}
    >
      <article className="about-page" ref={pageRef}>
        <section className="about-hero">
          <div className="about-container about-hero-grid">
            <div className="about-hero-copy" data-reveal>
              <p className="about-eyebrow">Qui sommes-nous</p>
              <h1>Une aventure familiale devenue une équipe événementielle.</h1>
              <p>
                MySelfieBooth est née en 2021 autour d'une idée simple : construire nos
                propres expériences photo et vidéo, puis les rendre faciles à vivre pour
                nos clients.
              </p>
              <p>
                Nous avons appris le métier en fabriquant, transportant et installant
                nous-mêmes nos premières bornes. Cette expérience guide encore chaque
                choix de matériel et chaque intervention.
              </p>
              <div className="about-actions">
                <a className="about-button is-primary" href="/prestations">
                  Découvrir nos prestations
                </a>
                <a className="about-button is-secondary" href={siteConfig.quoteUrl}>
                  Parler de votre projet
                </a>
              </div>
            </div>

            <figure className="about-founder" data-reveal data-reveal-variant="scale">
              <img
                src="/images/equipe/portrait-stephane-faure.webp"
                alt="Stéphane Faure, fondateur de MySelfieBooth"
                width="1600"
                height="1066"
                fetchPriority="high"
              />
              <figcaption>
                <strong>{siteConfig.founder.name}</strong>
                <span>Fondateur de MySelfieBooth</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <nav className="about-quick-nav" aria-label="Accès rapide à notre histoire">
          <div className="about-container">
            <a href="#histoire">Notre histoire</a>
            <a href="#projets">Nos projets</a>
            <a href="#terrain">Le terrain</a>
            <a href="#equipe">L'équipe</a>
          </div>
        </nav>

        <section id="histoire" className="about-section">
          <div className="about-container about-origin-grid">
            <div className="about-origin-copy" data-reveal>
              <p className="about-eyebrow">Le point de départ</p>
              <h2>Des premiers plans à la première borne.</h2>
              <p>
                Tout a commencé à la maison, entre plans, essais et pièces assemblées à la
                main. Avec mon père, nous avons transformé une idée en machine fonctionnelle.
              </p>
              <p>
                Cette culture du prototype est restée : tester, corriger et fiabiliser avant
                de proposer une expérience à nos clients.
              </p>
              <p>
                Nous avons ainsi appris chaque contrainte de l'intérieur : l'accès aux
                composants, l'éclairage, le câblage, le transport et la remise en service
                rapide lorsqu'un événement ne laisse aucune place à l'improvisation.
              </p>
            </div>

            <div className="about-origin-media" data-reveal>
              <figure>
                <img
                  src="/images/equipe/conception-en-famille.webp"
                  alt="Conception informatique des premières machines MySelfieBooth en famille"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
                <figcaption>Conception et mise au point en famille.</figcaption>
              </figure>
              <figure>
                <img
                  src="/images/equipe/fabrication-photobooth-en-famille.webp"
                  alt="Fabrication artisanale d'une borne MySelfieBooth"
                  width="1200"
                  height="1600"
                  loading="lazy"
                />
                <figcaption>Fabrication de l'une de nos bornes.</figcaption>
              </figure>
              <figure>
                <img
                  src="/images/equipe/premier-photobooth-en-fabrication.webp"
                  alt="Premier caisson Photobooth MySelfieBooth pendant sa fabrication"
                  width="1200"
                  height="1600"
                  loading="lazy"
                />
                <figcaption>Le premier caisson prend forme dans l'atelier familial.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="projets" className="about-section is-muted">
          <div className="about-container">
            <header className="about-section-heading" data-reveal>
              <p className="about-eyebrow">Nos projets</p>
              <h2>Faire évoluer l'expérience, pas seulement le matériel.</h2>
            </header>
            <div className="about-project-grid">
              {projects.map((project, index) => (
                <article
                  key={project.number}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 55}ms` }}
                >
                  <span>{project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="terrain" className="about-section about-field-section">
          <div className="about-container about-field-grid">
            <figure data-reveal>
              <img
                src="/images/equipe/stephane-sur-la-route.webp"
                alt="Stéphane Faure sur la route pour une installation MySelfieBooth"
                width="1600"
                height="900"
                loading="lazy"
              />
              <figcaption>Transport et installation font partie du métier.</figcaption>
            </figure>

            <div className="about-field-copy" data-reveal>
              <p className="about-eyebrow">Du garage au terrain</p>
              <h2>Une belle animation commence avant l'arrivée des invités.</h2>
              <p>
                Sur la route, dans les lieux de réception et en coulisses, nous gérons la
                partie que nos clients ne devraient pas avoir à surveiller : protection du
                matériel, horaires, accès, montage et essais.
              </p>
              <p>
                Cette expérience nous permet de recommander une machine adaptée au lieu et
                au nombre d'invités, puis d'arriver avec une organisation déjà cadrée.
              </p>
              <ul>
                <li><strong>Transport maîtrisé</strong><span>Machines protégées et vérifiées avant le départ.</span></li>
                <li><strong>Installation testée</strong><span>Éclairage, cadrage et parcours invités contrôlés sur place.</span></li>
                <li><strong>Présence fiable</strong><span>Une équipe joignable avant et pendant l'événement.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="equipe" className="about-section is-dark">
          <div className="about-container">
            <header className="about-section-heading" data-reveal>
              <p className="about-eyebrow">L'équipe</p>
              <h2>Les mêmes personnes préparent, installent et suivent votre projet.</h2>
            </header>

            <div className="about-team-grid">
              <figure className="about-team-main" data-reveal>
                <img
                  src="/images/equipe/equipe-myselfiebooth.webp"
                  alt="Une partie de l'équipe MySelfieBooth réunie dans un VogueBooth"
                  width="1350"
                  height="1800"
                  loading="lazy"
                />
                <figcaption>
                  <strong>L'équipe terrain</strong>
                  <span>Montage, réglages et accompagnement pendant l'événement.</span>
                </figcaption>
              </figure>

              <article className="about-right-hand" data-reveal data-reveal-variant="scale">
                <img
                  src="/images/equipe/bras-droit-terrain.webp"
                  alt="Le bras droit opérationnel de MySelfieBooth lors d'un événement"
                  width="1066"
                  height="1600"
                  loading="lazy"
                />
                <div>
                  <p className="about-eyebrow">Le bras droit sur le terrain</p>
                  <h3>Un relais fiable pour chaque installation.</h3>
                  <p>
                    Il coordonne avec l'équipe les préparatifs, le montage et les derniers
                    contrôles pour que tout soit prêt à l'heure.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container about-values-grid">
            {values.map(([title, text]) => (
              <article key={title} data-reveal>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-final-cta" data-reveal>
          <div className="about-container">
            <p className="about-eyebrow">Votre événement</p>
            <h2>Parlez directement avec l'équipe qui va le préparer.</h2>
            <a href={siteConfig.quoteUrl} data-event="cta_quote_click">
              Obtenir mon devis en 2 minutes
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
