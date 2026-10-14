import Layout from "../Layout";
import { marketingPages } from "../../data/marketingPages";
import { siteConfig } from "../../data/site";

const page = marketingPages["evenements-index"];

const audiences = [
  {
    eyebrow: "Professionnels",
    title: "Entreprises, marques et agences",
    text: "Soirée d’entreprise, séminaire, salon ou lancement : choisissez une animation visible, personnalisable et adaptée au flux de vos invités.",
    image: "/images/realisations/sephora-360booth.webp",
    alt: "Animation vidéo 360 lors d'un événement professionnel Sephora à Paris",
    href: "/evenements/corporates/",
    link: "Voir les solutions entreprise",
  },
  {
    eyebrow: "Particuliers",
    title: "Mariages et réceptions privées",
    text: "Photobooth, tirages, Miroirbooth ou Vogue Booth : créez de beaux souvenirs que vos proches peuvent garder.",
    image: "/images/vogue-real/vogue-booth-mariage-card.webp",
    alt: "Vogue Booth installé pour un mariage",
    href: "/evenements/mariages/",
    link: "Voir les solutions mariage",
  },
];

const machines = [
  {
    title: "Photobooth",
    tag: "Photos imprimées",
    text: "Des photos personnalisées à emporter et une galerie après l’événement.",
    image: "/images/event-archive/anogini-photobooth-01.webp",
    alt: "Photobooth installé dans une réception fleurie",
    href: "/prestations/photobooth/",
    price: "400 € · 5 h",
  },
  {
    title: "Miroirbooth",
    tag: "Miroir interactif",
    text: "Un grand miroir photo qui devient un point fort de la réception.",
    image: "/images/miroirbooth.webp",
    alt: "Miroirbooth à cadre doré installé dans une salle de réception",
    href: "/prestations/miroirbooth/",
  },
  {
    title: "360 Booth",
    tag: "Vidéos en mouvement",
    text: "Une plateforme vidéo pour créer des séquences dynamiques à partager.",
    image: "/images/360booth.webp",
    alt: "Plateforme vidéo 360 Booth installée pour un événement",
    href: "/prestations/videobooth/",
  },
  {
    title: "Air360 Booth",
    tag: "Format grand groupe",
    text: "Un format vidéo spectaculaire, étudié selon l’espace disponible.",
    image: "/images/airbooth.webp",
    alt: "Structure Air360 Booth MySelfieBooth",
    href: "/prestations/air360booth/",
  },
  {
    title: "iPad Booth",
    tag: "Format compact",
    text: "Une borne légère et discrète pour les stands et les réceptions.",
    image: "/images/ipadbooth.webp",
    alt: "Interface iPad Booth utilisée pour une animation photo",
    href: "/prestations/ipadbooth/",
  },
  {
    title: "Vogue Booth",
    tag: "Portrait éditorial",
    text: "Une mise en scène magazine pour des portraits élégants et personnalisés.",
    image: "/images/vogue-real/vogue-booth-anniversaire-card.webp",
    alt: "Décor Vogue Booth préparé pour un événement",
    href: "/prestations/voguebooth/",
  },
  {
    title: "Pack VIP",
    tag: "Plusieurs expériences",
    text: "Associez plusieurs animations et souvenirs dans une proposition coordonnée.",
    image: "/images/pack.webp",
    alt: "Pack d'animations photo et souvenirs MySelfieBooth",
    href: "/prestations/packvip/",
  },
  {
    title: "Formule personnalisée",
    tag: "Sur mesure",
    text: "Un dispositif adapté à votre lieu, vos invités et au rythme de votre événement.",
    image: "/images/realisations-machines/duo-photobooth-miroir.webp",
    alt: "Installation MySelfieBooth préparée dans une salle de réception",
    href: "/prestations/personnalise/",
  },
];

const printSamples = [
  {
    image: "/images/event-archive/brice-tirages.webp",
    alt: "Tirages personnalisés préparés pour les invités d'un mariage",
    title: "Des photos à garder",
    text: "Un aperçu de vrais tirages remis aux invités.",
  },
  {
    image: "/images/realisations-machines/tirages-gala.webp",
    alt: "Bande de tirages photo du Gala des Juristes",
    title: "La bande photo",
    text: "Une impression personnalisée avec les noms et la date de l’événement.",
  },
  {
    image: "/images/realisations-machines/personnalisation-tirages.webp",
    alt: "Exemples de mises en page personnalisées pour des tirages photo",
    title: "À vos couleurs",
    text: "Un cadre graphique préparé en fonction du thème de votre réception.",
  },
];

export default function EventsLandingPage() {
  return (
    <Layout
      metaProps={{
        ...page.meta,
        title: "Photobooth pour mariage et entreprise en Île-de-France | MySelfieBooth",
        description:
          "Location de Photobooth, Miroirbooth, 360 Booth et Vogue Booth pour mariage, entreprise et soirée. Installation en Île-de-France ; autres régions sur étude.",
        ogTitle: "Vos événements, vos souvenirs | MySelfieBooth",
        ogDescription:
          "Découvrez les animations photo et vidéo MySelfieBooth pour les entreprises, les mariages et les réceptions privées en Île-de-France.",
        ogImage: "/images/event-archive/brice-equipe-01.webp",
        ogImageAlt: "Photobooth MySelfieBooth installé dans une réception",
        ogUrl: "/evenements/",
      }}
    >
      <div className="events-landing">
        <section className="events-hero">
          <div className="events-wrap events-hero-grid">
            <div className="events-hero-copy">
              <p className="events-eyebrow">Mariages · entreprises · soirées privées</p>
              <h1>Une animation qui devient un vrai souvenir.</h1>
              <p className="events-lead">
                Photobooth, Miroirbooth, vidéos 360 et Vogue Booth : trouvez le format qui correspond à votre événement et à vos invités.
              </p>
              <div className="events-actions">
                <a className="events-button events-button-dark" href="#machines">Trouver mon animation</a>
                <a className="events-button events-button-light" href="/realisations/">Voir les réalisations</a>
              </div>
              <p className="events-area-note">Installation en Île-de-France · autres régions sur étude du projet</p>
            </div>
            <div className="events-hero-visual" aria-label="Photobooth et tirages photo réels">
              <figure className="events-hero-main">
                <img
                  src="/images/event-archive/brice-equipe-01.webp"
                  alt="Invités réunis dans un Vogue Booth installé lors d'une réception"
                  width="900"
                  height="1200"
                  fetchPriority="high"
                />
                <figcaption>Une installation réelle</figcaption>
              </figure>
              <figure className="events-hero-print">
                <img
                  src="/images/event-archive/composition-tirages-reference.webp"
                  alt="Exemples de tirages personnalisés remis aux invités"
                  width="900"
                  height="900"
                />
                <figcaption>Des souvenirs imprimés</figcaption>
              </figure>
              <span className="events-hero-stamp">+700<br />événements</span>
            </div>
          </div>
        </section>

        <section className="events-audience-section" id="publics">
          <div className="events-wrap">
            <header className="events-section-heading">
              <p className="events-eyebrow">Pour qui ?</p>
              <h2>Des solutions pensées pour votre événement</h2>
              <p>Le lieu, le nombre d’invités et le souvenir recherché nous aident à préparer la bonne configuration.</p>
            </header>
            <div className="events-audience-grid">
              {audiences.map((item) => (
                <article className="events-audience-card" key={item.href}>
                  <a className="events-audience-image" href={item.href} tabIndex="-1" aria-hidden="true">
                    <img src={item.image} alt="" loading="lazy" width="900" height="700" />
                  </a>
                  <div className="events-audience-copy">
                    <span>{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <a href={item.href}>{item.link}<span aria-hidden="true"> ↗</span></a>
                  </div>
                </article>
              ))}
            </div>
            <nav className="events-type-links" aria-label="Types d'événements">
              <span>Vous préparez plutôt :</span>
              <a href="/evenements/mariages/">un mariage</a>
              <a href="/evenements/corporates/">un événement d’entreprise</a>
              <a href="/evenements/anniversaires/">un anniversaire</a>
              <a href="/evenements/soirees/">une soirée</a>
            </nav>
          </div>
        </section>

        <section className="events-machine-section" id="machines">
          <div className="events-wrap">
            <header className="events-section-heading events-heading-split">
              <div>
                <p className="events-eyebrow">Nos animations</p>
                <h2>Trouvez la machine pour votre événement.</h2>
              </div>
              <p>Des photos imprimées aux vidéos en mouvement, chaque format a sa propre ambiance.</p>
            </header>
            <div className="events-machine-grid">
              {machines.map((item) => (
                <a className="events-machine-card" href={item.href} key={item.title}>
                  <div className="events-machine-image">
                    <img src={item.image} alt={item.alt} loading="lazy" width="720" height="900" />
                    <span>{item.tag}</span>
                  </div>
                  <div className="events-machine-copy">
                    <div className="events-machine-title"><h3>{item.title}</h3>{item.price && <strong>{item.price}</strong>}</div>
                    <p>{item.text}</p>
                    <span className="events-card-link">Découvrir <span aria-hidden="true">↗</span></span>
                  </div>
                </a>
              ))}
            </div>
            <p className="events-machine-footnote">Le Photobooth est proposé à 400 € pour 5 h. Les autres formats sont chiffrés selon la durée et la configuration.</p>
          </div>
        </section>

        <section className="events-print-section" id="tirages">
          <div className="events-wrap">
            <div className="events-print-intro">
              <div>
                <p className="events-eyebrow">Le souvenir, en vrai</p>
                <h2>Des images qui quittent l’écran.</h2>
                <p>Découvrez des tirages et des créations personnalisées réalisés pendant nos événements.</p>
              </div>
              <a href="/realisations/">Voir les réalisations réelles <span aria-hidden="true">↗</span></a>
            </div>
            <div className="events-print-grid">
              {printSamples.map((item) => (
                <article className="events-print-card" key={item.image}>
                  <div className="events-print-image">
                    <img src={item.image} alt={item.alt} loading="lazy" width="800" height="1000" />
                  </div>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {(page.faq || []).length > 0 && (
          <section className="events-faq-section" id="faq">
            <div className="events-wrap events-faq-grid">
              <header className="events-section-heading">
                <p className="events-eyebrow">Avant de choisir</p>
                <h2>Questions fréquentes</h2>
              </header>
              <div className="events-faq-list">
                {page.faq.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="events-final-cta">
          <div className="events-wrap events-final-cta-inner">
            <div><p className="events-eyebrow">Votre date, votre lieu</p><h2>Racontez-nous l’événement que vous préparez.</h2></div>
            <a className="events-button events-button-gold" href={siteConfig.quoteUrl}>Demander mon devis <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
