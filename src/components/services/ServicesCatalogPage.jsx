import Layout from "../Layout";
import { machines, options, selectorNeeds, servicePacks } from "../../data/catalog";
import { absoluteUrl, breadcrumbJsonLd, siteConfig } from "../../data/site";
import useRevealMotion from "../../hooks/useRevealMotion";

const machineGuide = {
  photobooth: { type: "Photo + tirage", capacity: "Petits et grands groupes", ideal: "Le choix polyvalent" },
  miroirbooth: { type: "Photo + tirage", capacity: "Du duo au groupe", ideal: "Réception élégante" },
  videobooth: { type: "Vidéo 4K", capacity: "Jusqu'à 5 personnes", ideal: "Contenu dynamique" },
  air360booth: { type: "Vidéo 4K", capacity: "Jusqu'à 10 personnes", ideal: "Grand événement" },
  ipadbooth: { type: "Photo numérique", capacity: "Très compact", ideal: "Petit espace ou stand" },
  voguebooth: { type: "Studio photo", capacity: "Petits groupes", ideal: "Effet magazine" },
  packvip: { type: "Photo + vidéo", capacity: "Fort passage", ideal: "Expérience complète" },
  personnalise: { type: "Sur mesure", capacity: "Selon votre événement", ideal: "Plusieurs espaces" },
};

const packVisuals = {
  souvenirs: "/images/event-archive/brice-tirages.webp",
  "immersion-360": "/images/event-archive/video-posters/360-red-carpet.webp",
  signature: "/images/event-archive/video-posters/miroirbooth-installation.webp",
  "duo-vip": "/images/realisations-machines/photobooth-miroir-espace-eden.webp",
  "vogue-premium": "/images/event-archive/video-posters/voguebooth-soiree.webp",
  "mariage-prestige": "/images/event-archive/caftan-portrait-01.webp",
};

const selectorVisuals = {
  "Photo imprimée": "/images/realisations-machines/tirages-gala.webp",
  "Vidéo 360": "/images/event-archive/video-posters/invites-en-fete.webp",
  "Photo Vogue": "/images/vogue-real/vogue-booth-anniversaire-card.webp",
};

const catalogPacks = servicePacks.map((pack) => ({
  ...pack,
  fusionImage: packVisuals[pack.key],
  fusionAlt: `${pack.name} illustré par une prestation réelle MySelfieBooth`,
}));

const catalogSelectorNeeds = selectorNeeds.map((choice) => ({
  ...choice,
  image: selectorVisuals[choice.need],
  imageAlt: `${choice.need} MySelfieBooth sur une prestation réelle`,
}));

const souvenirOptions = new Set([
  "Phonebooth audio",
  "Porte-clés photo",
  "Magnets premium",
  "Magnets simples",
  "Livre d'or vidéo",
  "Livre d'or physique",
]);

const decorOptions = new Set([
  "Mur floral",
  "Panneau fontaine",
  "Panneau de bienvenue",
  "Fond LED 360",
  "Décoration Vogue Booth",
]);

function optionLabel(name) {
  if (souvenirOptions.has(name)) return "Souvenir";
  if (decorOptions.has(name)) return "Décor";
  return "Expérience";
}

function MachineCard({ machine }) {
  const guide = machineGuide[machine.key];
  return (
    <article id={`machine-${machine.key}`} className="catalog-machine-card">
      <div className="catalog-machine-media">
        <img src={machine.image} alt={machine.alt} loading="lazy" width="720" height="480" />
        <span>{machine.tag}</span>
      </div>
      <div className="catalog-machine-body">
        <div className="catalog-machine-heading">
          <div><p>{guide.type}</p><h3>{machine.name}</h3></div>
          <strong>{machine.catalogPrice || machine.price || "Sur devis"}</strong>
        </div>
        <p className="catalog-machine-summary">{machine.short}</p>
        <dl className="catalog-facts">
          <div><dt>Capacité</dt><dd>{guide.capacity}</dd></div>
          <div><dt>Idéal pour</dt><dd>{guide.ideal}</dd></div>
        </dl>
        <a className="catalog-card-cta" href={machine.bookingUrl || siteConfig.quoteUrl}>Choisir {machine.name}</a>
        <a className="catalog-detail-link" href={`${machine.href.replace(/\/$/, "")}/`}>Photos et détails du {machine.name}</a>
      </div>
    </article>
  );
}

function PackCard({ pack }) {
  return (
    <article className={`catalog-pack-card ${pack.featured ? "is-featured" : ""}`}>
      <div className="catalog-pack-media-fusion">
        <img src={pack.fusionImage} alt={pack.fusionAlt} loading="lazy" width="1200" height="900" />
      </div>
      <div className="catalog-pack-body">
        <span>{pack.tag}</span>
        <h3>{pack.name}</h3>
        <p className="catalog-pack-description">{pack.description}</p>
        <ul>{pack.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="catalog-pack-price">
          <div><small>{pack.oldPrice}</small><strong>{pack.price}</strong></div>
          <em>{pack.saving}</em>
        </div>
        <a href={pack.bookingUrl || siteConfig.quoteUrl}>Demander ce pack</a>
      </div>
    </article>
  );
}

function ComparisonTable() {
  return (
    <section id="comparatif" className="catalog-section catalog-compare-section" data-reveal>
      <div className="catalog-container">
        <header className="catalog-section-heading catalog-heading-row">
          <div><p className="catalog-eyebrow">Comparer</p><h2>Prix et prestations en un coup d'œil.</h2></div>
          <p>Les éléments variables sont confirmés dans votre devis selon la durée, le lieu et les options.</p>
        </header>
        <div className="catalog-compare-scroll" tabIndex="0">
          <table className="catalog-compare-table">
            <thead><tr><th>Animation</th><th>Tarif</th><th>Rendu</th><th>Tirage</th><th>Capacité</th><th>Animateur</th></tr></thead>
            <tbody>
              {machines.map((machine) => (
                <tr key={machine.key}>
                  <th scope="row"><a href={`#machine-${machine.key}`}>{machine.name}</a></th>
                  <td><strong>{machine.catalogPrice || machine.price || "Sur devis"}</strong></td>
                  <td>{machineGuide[machine.key].type}</td>
                  <td>{machine.print}</td>
                  <td>{machine.participants}</td>
                  <td>{machine.attendant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function ServicesCatalogPage() {
  const pageRef = useRevealMotion("catalog");
  const catalogJsonLd = [
    breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Prestations", href: "/prestations/" }]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Animations MySelfieBooth",
      numberOfItems: machines.length,
      itemListElement: machines.map((machine, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: machine.name,
        url: absoluteUrl(`${machine.href}/`),
      })),
    },
  ];

  return (
    <Layout metaProps={{
      title: "Prestations et tarifs Photobooth | MySelfieBooth",
      description: "Comparez les animations, packs, options et tarifs MySelfieBooth avant de demander votre devis.",
      ogImage: "/images/event-archive/goldbooth-gala.webp",
      ogUrl: "/prestations/",
      jsonLd: catalogJsonLd,
    }}>
      <div className="catalog-page" ref={pageRef}>
        <section className="catalog-hero">
          <div className="catalog-container catalog-hero-grid">
            <div data-reveal>
              <p className="catalog-eyebrow">Toutes nos prestations</p>
              <h1>Choisissez l'expérience qui correspond vraiment à votre événement.</h1>
              <p className="catalog-hero-copy">Chaque carte montre un visuel réel différent et directement lié à la prestation présentée.</p>
              <div className="catalog-actions">
                <a className="catalog-button primary" href="#choisir">Choisir selon mon besoin</a>
                <a className="catalog-button secondary" href={siteConfig.ratesUrl}>Voir les tarifs détaillés</a>
                <a className="catalog-button secondary" href={siteConfig.quoteUrl}>Obtenir mon devis</a>
              </div>
            </div>
            <figure className="catalog-hero-media" data-reveal>
              <img src="/images/event-archive/goldbooth-gala.webp" alt="Installation premium MySelfieBooth lors d'un gala réel" width="1600" height="900" />
            </figure>
          </div>
        </section>

        <div className="catalog-benefit-band">
          <div className="catalog-container catalog-benefits">
            <span>Livraison & installation</span><span>Personnalisation</span><span>Animateur selon formule</span><span>Galerie après l'événement</span>
          </div>
        </div>

        <nav className="catalog-jump-nav" aria-label="Accès rapide aux prestations">
          <div className="catalog-container">
            <a href="#choisir">Choisir vite</a><a href="#comparatif">Comparer</a><a href="#machines">Machines</a><a href="#packs">Packs</a><a href="#options">Options</a><a href="/realisations/">Réalisations</a><a className="catalog-jump-cta" href={siteConfig.quoteUrl}>Devis</a>
          </div>
        </nav>

        <section id="choisir" className="catalog-section catalog-choice-section" data-reveal>
          <div className="catalog-container">
            <header className="catalog-section-heading"><p className="catalog-eyebrow">Choisir vite</p><h2>Quel résultat voulez-vous obtenir ?</h2></header>
            <div className="catalog-choice-grid">
              {catalogSelectorNeeds.map((choice) => (
                <a key={choice.need} href={choice.href} className={`catalog-choice ${choice.tone}`}>
                  <div className="catalog-choice-media"><img src={choice.image} alt={choice.imageAlt} loading="lazy" width="640" height="480" /></div>
                  <div className="catalog-choice-copy"><span>{choice.need}</span><strong>{choice.answer}</strong></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable />

        <section id="machines" className="catalog-section catalog-machines-section" data-reveal>
          <div className="catalog-container">
            <header className="catalog-section-heading catalog-heading-row"><div><p className="catalog-eyebrow">8 animations</p><h2>Trouvez la machine pour votre événement.</h2></div><p>Photos imprimées, vidéo immersive ou portrait magazine : comparez le rendu et les formules.</p></header>
            <div className="catalog-machine-grid">{machines.map((machine) => <MachineCard key={machine.key} machine={machine} />)}</div>
          </div>
        </section>

        <section id="packs" className="catalog-section catalog-packs-section" data-reveal>
          <div className="catalog-container">
            <header className="catalog-section-heading catalog-heading-row"><div><p className="catalog-eyebrow">6 formules</p><h2>Associez les expériences et les souvenirs.</h2></div><p>Des packs pour réunir plusieurs animations autour de votre réception.</p></header>
            <div className="catalog-pack-grid">{catalogPacks.map((pack) => <PackCard key={pack.key} pack={pack} />)}</div>
          </div>
        </section>

        <section id="options" className="catalog-section catalog-options-section" data-reveal>
          <div className="catalog-container">
            <header className="catalog-section-heading catalog-heading-row"><div><p className="catalog-eyebrow">14 options</p><h2>Personnalisez le décor et les souvenirs.</h2></div><p>Mur floral, livre d’or, magnets et porte-clés : complétez l’expérience de vos invités.</p></header>
            <div className="catalog-option-grid">
              {options.map((option) => (
                <article key={option.name} className="catalog-option-card">
                  <div className="catalog-option-media-pair"><img src={option.image} alt={option.name} loading="lazy" width="420" height="315" /></div>
                  <div className="catalog-option-body"><span>{optionLabel(option.name)}</span><h3>{option.name}</h3><p>{option.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="catalog-section catalog-real-results" data-reveal>
          <div className="catalog-container">
            <header className="catalog-section-heading catalog-heading-row"><div><p className="catalog-eyebrow">Banque réelle</p><h2>Toutes les autres photos sont dans Réalisations.</h2></div><p>La banque Instagram n'est plus dupliquée sur plusieurs pages.</p></header>
            <div className="catalog-booking-action"><a className="catalog-button secondary" href="/realisations/">Voir les réalisations réelles</a></div>
          </div>
        </section>

        <section className="catalog-final-cta" data-reveal>
          <div className="catalog-container"><div><p className="catalog-eyebrow">Votre événement</p><h2>Donnez-nous la date, le lieu et le nombre d'invités.</h2></div><div className="catalog-actions"><a className="catalog-button primary" href={siteConfig.quoteUrl}>Recevoir une proposition</a><a className="catalog-button secondary" href={siteConfig.phoneHref}>{siteConfig.phoneLabel}</a></div></div>
        </section>
      </div>
    </Layout>
  );
}
