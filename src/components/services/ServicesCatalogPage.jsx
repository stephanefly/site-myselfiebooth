import Layout from "../Layout";
import { machines, options, servicePacks } from "../../data/catalog";
import { siteConfig } from "../../data/site";
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

const quickChoices = [
  {
    need: "Des photos imprimées",
    answer: "Photobooth ou Miroirbooth",
    href: "#machine-photobooth",
    tone: "photo",
    image: "/images/selector/photobooth-en-action-ai.webp",
    realImage: "/videos/instagram/reel-1-DO30-rNiDdA.jpg",
    imageAlt: "Photobooth utilisé pendant une réception",
  },
  {
    need: "Des vidéos à partager",
    answer: "360 Booth ou Air360 Booth",
    href: "#machine-videobooth",
    tone: "video",
    image: "/images/selector/video-360-en-action-ai.webp",
    realImage: "/videos/instagram/reel-3-DQxM5TnCOKL.jpg",
    imageAlt: "Invités filmés sur le 360 Booth",
  },
  {
    need: "Un effet spectaculaire",
    answer: "Vogue Booth ou Pack VIP",
    href: "#machine-voguebooth",
    tone: "premium",
    image: "/images/selector/voguebooth-en-action-ai.webp",
    realImage: "/videos/instagram/reel-2-C9Ftp2ctg4u.jpg",
    imageAlt: "Vogue Booth en utilisation pendant un événement",
  },
  {
    need: "Une solution compacte",
    answer: "iPad Booth",
    href: "#machine-ipadbooth",
    tone: "compact",
    image: "/images/selector/ipadbooth-compact-ai.webp",
    realImage: "/videos/instagram/reel-4-Da-0z-to0VL.jpg",
    imageAlt: "iPad Booth compact devant un mur floral",
  },
];

const machineMotionImages = {
  photobooth: "/images/reel-gifs/photobooth-installation.gif",
  miroirbooth: "/images/reel-gifs/miroirbooth-mariage.gif",
  videobooth: "/images/reel-gifs/booth-360-sephora.gif",
  air360booth: "/images/reel-gifs/air360-en-action.gif",
  ipadbooth: "/images/reel-gifs/animation-ecran-partage.gif",
  voguebooth: "/images/reel-gifs/animation-vogue-femme.gif",
  packvip: "/images/reel-gifs/booth-360-mariage.gif",
  personnalise: "/images/reel-gifs/booth-360-peniche.gif",
};

const optionMotionImages = {
  "Mur floral": "/images/reel-gifs/animation-vogue-invites.gif",
  "Phonebooth audio": "/images/reel-gifs/animation-phonebooth.gif",
  "Porte-clés photo": "/images/reel-gifs/tirages-mariage.gif",
  "Magnets premium": "/images/reel-gifs/tirages-gala.gif",
  "Magnets simples": "/images/reel-gifs/tirages-mariage.gif",
  "Panneau fontaine": "/images/reel-gifs/panneau-fontaine-coulisses.gif",
  "Livre d'or vidéo": "/images/reel-gifs/livre-dor-video-en-action.gif",
  "Holo 3D": "/images/reel-gifs/animation-ecran-partage.gif",
  "Livre d'or physique": "/images/reel-gifs/tirages-gala.gif",
  "Panneau de bienvenue": "/images/reel-gifs/panneau-fontaine-coulisses.gif",
  "Fond LED 360": "/images/reel-gifs/air360-en-action.gif",
  "Photographe Vogue Booth": "/images/reel-gifs/animation-vogue-homme.gif",
  "Impression Vogue Booth": "/images/reel-gifs/animation-tirage.gif",
  "Décoration Vogue Booth": "/images/reel-gifs/animation-vogue-invites.gif",
};

const packMotionImages = {
  souvenirs: "/images/reel-gifs/photobooth-installation.gif",
  "immersion-360": "/images/reel-gifs/booth-360-sephora.gif",
  signature: "/images/reel-gifs/miroirbooth-mariage.gif",
  "duo-vip": "/images/reel-gifs/booth-360-mariage.gif",
  "vogue-premium": "/images/reel-gifs/animation-vogue-femme.gif",
  "mariage-prestige": "/images/reel-gifs/air360-en-action.gif",
};

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
]);

function optionLabel(name) {
  if (souvenirOptions.has(name)) return "Souvenir";
  if (decorOptions.has(name)) return "Décor";
  return "Expérience";
}

function MachineCard({ machine }) {
  const guide = machineGuide[machine.key];
  const stillImage = machine.image;
  const motionImage = machineMotionImages[machine.key];

  return (
    <article id={`machine-${machine.key}`} className="catalog-machine-card">
      <div className="catalog-machine-media">
        <div className="catalog-machine-media-pair">
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet={stillImage} />
            <img
              src={motionImage}
              alt={`${machine.name} en utilisation`}
              loading="lazy"
              width="720"
              height="480"
            />
          </picture>
          <img
            src={stillImage}
            alt={machine.alt}
            loading="lazy"
            width="720"
            height="480"
          />
        </div>
        <span>{machine.tag}</span>
      </div>
      <div className="catalog-machine-body">
        <div className="catalog-machine-heading">
          <div>
            <p>{guide.type}</p>
            <h3>{machine.name}</h3>
          </div>
          <strong>{machine.price || "Sur devis"}</strong>
        </div>

        <p className="catalog-machine-summary">{machine.short}</p>

        <dl className="catalog-facts">
          <div>
            <dt>Capacité</dt>
            <dd>{guide.capacity}</dd>
          </div>
          <div>
            <dt>Idéal pour</dt>
            <dd>{guide.ideal}</dd>
          </div>
        </dl>

        <details className="catalog-machine-details">
          <summary>Ce qui est inclus</summary>
          <ul>
            {machine.includes.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>

        <a className="catalog-card-cta" href={siteConfig.quoteUrl} data-event="cta_quote_click">
          Voir
        </a>
      </div>
    </article>
  );
}

function PackCard({ pack }) {
  const motionImage = packMotionImages[pack.key];

  return (
    <article className={`catalog-pack-card ${pack.featured ? "is-featured" : ""}`}>
      <div className="catalog-pack-media-pair">
        <picture>
          <source media="(prefers-reduced-motion: reduce)" srcSet={pack.image} />
          <img
            src={motionImage}
            alt={`${pack.name} en utilisation`}
            loading="lazy"
            width="640"
            height="420"
          />
        </picture>
        <img src={pack.image} alt={pack.name} loading="lazy" width="640" height="420" />
      </div>
      <div className="catalog-pack-body">
        <span>{pack.tag}</span>
        <h3>{pack.name}</h3>
        <ul>
          {pack.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="catalog-pack-price">
          <div>
            <small>{pack.oldPrice}</small>
            <strong>{pack.price}</strong>
          </div>
          <em>{pack.saving}</em>
        </div>
        <a href={siteConfig.quoteUrl} data-event="cta_quote_click">Voir</a>
      </div>
    </article>
  );
}

export default function ServicesCatalogPage() {
  const pageRef = useRevealMotion("catalog");

  return (
    <Layout
      metaProps={{
        title: "Toutes nos prestations photobooth | MySelfieBooth",
        description:
          "Comparez en une page les 8 animations MySelfieBooth, 6 packs événementiels et toutes les options disponibles.",
        ogImage: "/images/machines-ai/hero-machines-myselfiebooth.webp",
        ogUrl: "/prestations/",
      }}
    >
      <div className="catalog-page" ref={pageRef}>
        <section className="catalog-hero">
          <div className="catalog-container catalog-hero-grid">
            <div data-reveal>
              <p className="catalog-eyebrow">Toutes nos prestations</p>
              <h1>Trouvez votre animation en moins d'une minute.</h1>
              <p className="catalog-hero-copy">
                8 animations, 6 packs et 14 options réunis sur une seule page.
              </p>
              <div className="catalog-actions">
                <a className="catalog-button primary" href="#choisir">Choisir selon mon besoin</a>
                <a className="catalog-button secondary" href={siteConfig.quoteUrl}>Obtenir mon devis</a>
              </div>
            </div>
            <figure className="catalog-hero-media" data-reveal data-reveal-variant="scale">
              <img
                src="/images/machines-ai/hero-machines-myselfiebooth.webp"
                alt="Photobooth, Miroirbooth et 360 Booth MySelfieBooth"
                width="1600"
                height="900"
              />
            </figure>
          </div>
        </section>

        <div className="catalog-benefit-band">
          <div className="catalog-container catalog-benefits">
            <span>Livraison & installation</span>
            <span>Personnalisation</span>
            <span>Animateur selon formule</span>
            <span>Galerie après l'événement</span>
          </div>
        </div>

        <nav className="catalog-jump-nav" aria-label="Accès rapide aux prestations">
          <div className="catalog-container">
            <a href="#choisir">Choisir vite</a>
            <a href="#machines">Machines</a>
            <a href="#packs">Packs</a>
            <a href="#options">Options</a>
            <a className="catalog-jump-cta" href={siteConfig.quoteUrl}>Devis</a>
          </div>
        </nav>

        <section id="choisir" className="catalog-section catalog-choice-section" data-reveal>
          <div className="catalog-container">
            <header className="catalog-section-heading">
              <p className="catalog-eyebrow">Choisir vite</p>
              <h2>Que voulez-vous créer ?</h2>
            </header>
            <div className="catalog-choice-grid">
              {quickChoices.map((choice) => (
                <a key={choice.need} href={choice.href} className={`catalog-choice ${choice.tone}`}>
                  <div className="catalog-choice-media">
                    <img src={choice.image} alt={choice.imageAlt} loading="lazy" width="480" height="360" />
                    <img src={choice.realImage} alt="" loading="lazy" width="360" height="480" />
                  </div>
                  <div className="catalog-choice-copy">
                    <span>{choice.need}</span>
                    <strong>{choice.answer}</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="machines" className="catalog-section catalog-machines-section" data-reveal>
          <div className="catalog-container">
            <header className="catalog-section-heading catalog-heading-row">
              <div>
                <p className="catalog-eyebrow">8 animations</p>
                <h2>Nos machines, clairement expliquées.</h2>
              </div>
              <p>Photo, vidéo, capacité et usage : l'essentiel est visible immédiatement.</p>
            </header>
            <div className="catalog-machine-grid">
              {machines.map((machine) => (
                <MachineCard key={machine.key} machine={machine} />
              ))}
            </div>
          </div>
        </section>

        <section id="packs" className="catalog-section catalog-packs-section" data-reveal>
          <div className="catalog-container">
            <header className="catalog-section-heading catalog-heading-row">
              <div>
                <p className="catalog-eyebrow">6 formules prêtes</p>
                <h2>Les packs qui simplifient le choix.</h2>
              </div>
              <p>Des combinaisons cohérentes avec un tarif plus avantageux que les prestations séparées.</p>
            </header>
            <div className="catalog-pack-grid">
              {servicePacks.map((pack) => (
                <PackCard key={pack.key} pack={pack} />
              ))}
            </div>
          </div>
        </section>

        <section id="options" className="catalog-section catalog-options-section" data-reveal>
          <div className="catalog-container">
            <header className="catalog-section-heading catalog-heading-row">
              <div>
                <p className="catalog-eyebrow">14 options</p>
                <h2>Décor, messages et souvenirs.</h2>
              </div>
              <p>Ajoutez uniquement ce qui apporte quelque chose à votre événement.</p>
            </header>
            <div className="catalog-option-grid">
              {options.map((option) => {
                const motionImage = optionMotionImages[option.name];

                return (
                  <article key={option.name} className="catalog-option-card">
                    <div className="catalog-option-media-pair">
                      <picture>
                        <source media="(prefers-reduced-motion: reduce)" srcSet={option.image} />
                        <img
                          src={motionImage}
                          alt={`${option.name} en situation`}
                          loading="lazy"
                          width="420"
                          height="315"
                        />
                      </picture>
                      <img
                        src={option.image}
                        alt={option.name}
                        loading="lazy"
                        width="420"
                        height="315"
                      />
                    </div>
                    <div className="catalog-option-body">
                      <span>{optionLabel(option.name)}</span>
                      <h3>{option.name}</h3>
                      <p>{option.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="catalog-final-cta" data-reveal>
          <div className="catalog-container">
            <div>
              <p className="catalog-eyebrow">Besoin d'aide ?</p>
              <h2>Donnez-nous la date, le lieu et le nombre d'invités.</h2>
            </div>
            <div className="catalog-actions">
              <a className="catalog-button primary" href={siteConfig.quoteUrl}>Recevoir une proposition</a>
              <a className="catalog-button secondary" href={siteConfig.phoneHref}>{siteConfig.phoneLabel}</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
