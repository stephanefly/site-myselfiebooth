import { useEffect, useRef, useState } from "react";
import Layout from "../Layout";
import useRevealMotion from "../../hooks/useRevealMotion";
import { breadcrumbJsonLd, siteConfig } from "../../data/site";
import { googleReviews } from "../../data/home";
import { instagramUrl } from "../../data/instagramMedia";
import {
  openingFilm,
  projects,
  keepsakes,
  backstage,
} from "./realisationsSelection";

const categories = [
  "Tout",
  ...new Set(projects.map((project) => project.category)),
];
const allMedia = [openingFilm, ...projects, ...keepsakes, backstage];
const reviews = [googleReviews[0], googleReviews[1], googleReviews[4]];

function Arrow({ down = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {down ? (
        <path d="M12 4v16m-6-6 6 6 6-6" />
      ) : (
        <path d="m6 18 12-12M6 6h12v12" />
      )}
    </svg>
  );
}
function Play() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m9 5 11 7-11 7V5Z" />
    </svg>
  );
}
function Photo({ item, priority = false }) {
  return (
    <img
      src={item.image}
      alt={item.alt}
      width="900"
      height="1200"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      {...(priority
        ? {
            srcSet:
              "/images/realisations-2026/cynthia-ashok-600.webp 600w, /images/realisations-2026/cynthia-ashok.webp 720w",
            sizes: "(max-width: 600px) 76vw, (max-width: 1100px) 43vw, 490px",
          }
        : {})}
      data-no-load-motion
    />
  );
}
function MediaViewer({ activeId, onClose, onChange }) {
  const dialog = useRef(null);
  const item = allMedia.find((media) => media.id === activeId);
  const returnFocus = useRef(null);
  useEffect(() => {
    if (!activeId) return undefined;
    returnFocus.current = document.activeElement;
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog.current?.close();
      returnFocus.current?.focus();
    };
  }, [Boolean(activeId)]);
  const move = (direction) => {
    const index = allMedia.findIndex((media) => media.id === activeId);
    onChange(
      allMedia[(index + direction + allMedia.length) % allMedia.length].id,
    );
  };
  return (
    <dialog
      ref={dialog}
      className="rl-viewer"
      aria-labelledby="rl-viewer-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialog.current) onClose();
      }}
      onKeyDown={(event) => {
        if (event.target.tagName === "VIDEO") return;
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
      }}
    >
      {item && (
        <div className="rl-viewer-panel">
          <button
            className="rl-viewer-close"
            type="button"
            onClick={onClose}
            aria-label="Fermer la réalisation"
            autoFocus
          >
            Fermer <span aria-hidden="true">×</span>
          </button>
          <div className="rl-viewer-media" key={item.id}>
            {item.video ? (
              <video
                controls
                autoPlay
                playsInline
                preload="metadata"
                poster={item.image}
                aria-label={item.title}
              >
                <source src={item.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={item.image}
                alt={item.alt}
                width="1200"
                height="900"
                data-no-load-motion
              />
            )}
          </div>
          <div className="rl-viewer-description">
            <div>
              <p className="rl-eyebrow">
                {item.device || "Souvenirs personnalisés"}
              </p>
              <h2 id="rl-viewer-title">{item.title}</h2>
              <p>{item.description}</p>
              {item.source && (
                <a href={item.source} target="_blank" rel="noreferrer">
                  Retrouver l'événement sur Instagram <Arrow />
                </a>
              )}
            </div>
            <div className="rl-viewer-controls">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Réalisation précédente"
              >
                ←
              </button>
              <span>
                {allMedia.findIndex((media) => media.id === item.id) + 1} /{" "}
                {allMedia.length}
              </span>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Réalisation suivante"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function RealisationsPage() {
  const [category, setCategory] = useState("Tout");
  const [activeId, setActiveId] = useState(null);
  const pageRef = useRevealMotion("realisations-editorial");
  const selectedProjects = projects.filter(
    (project) => category === "Tout" || project.category === category,
  );
  return (
    <Layout
      metaProps={{
        title:
          "Réalisations Photobooth : Mariages & Entreprises | MySelfieBooth",
        description:
          "Découvrez nos événements en photos et vidéos : mariages, galas, soirées et activation Sephora. Photobooth, Miroirbooth, Vogue Booth et 360 en action.",
        ogUrl: "/realisations/",
        ogImage: "/images/event-archive/goldbooth-gala.webp",
        ogImageAlt: "Photobooth et miroir MySelfieBooth installés pour un gala",
        jsonLd: [
          breadcrumbJsonLd([
            { label: "Accueil", href: "/" },
            { label: "Réalisations", href: "/realisations/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Les événements MySelfieBooth",
            url: `${siteConfig.baseUrl}/realisations/`,
            description:
              "Photos et vidéos de mariages, réceptions et événements professionnels avec les animations MySelfieBooth.",
          },
        ],
      }}
    >
      <div className="realisations-premium" ref={pageRef}>
        <section
          className="marketing-realisations rl-hero"
          aria-labelledby="rl-title"
        >
          <div className="rl-wrap rl-hero-grid">
            <div className="rl-hero-copy">
              <p className="rl-eyebrow">
                <span /> LE CARNET D'ÉVÉNEMENTS
              </p>
              <h1 id="rl-title">
                Vos événements.
                <br />
                Nos plus beaux
                <br />
                <em>souvenirs.</em>
              </h1>
              <p>
                Mariages, galas, activations de marque. Des regards, du
                mouvement et ce petit moment où tout le monde se prend au jeu.
              </p>
              <div className="rl-actions">
                <a className="rl-button" href="#films">
                  Explorer les réalisations <Arrow down />
                </a>
                <a className="rl-text-link" href={siteConfig.quoteUrl}>
                  Parlons de votre événement <Arrow />
                </a>
              </div>
              <div className="rl-hero-bottom">
                <span>PHOTO · VIDÉO · ÉMOTIONS</span>
                <span>Paris & Île-de-France</span>
              </div>
            </div>
            <div className="rl-hero-art">
              <button
                type="button"
                className="rl-opening"
                onClick={() => setActiveId(openingFilm.id)}
                aria-label="Voir le film de Cynthia et Ashok"
              >
                <Photo item={openingFilm} priority />
                <span className="rl-opening-top">
                  LEUR JOUR. LEUR COUVERTURE.
                </span>
                <span className="rl-opening-caption">
                  <span>
                    <small>VOGUE BOOTH · MARIAGE</small>
                    <strong>Cynthia & Ashok</strong>
                  </span>
                  <span className="rl-play">
                    <Play />
                  </span>
                </span>
              </button>
              <figure className="rl-hero-print">
                <img
                  src="/images/event-archive/caftan-portrait-01.webp"
                  alt="Portrait imprimé de Zakaria et Kawtar le jour de leur mariage"
                  width="1400"
                  height="933"
                  loading="eager"
                  decoding="async"
                  data-no-load-motion
                />
                <figcaption>
                  Les instants passent. Les photos restent.
                </figcaption>
              </figure>
              <span className="rl-art-note">L'INSTANT QUI VOUS RESSEMBLE.</span>
            </div>
          </div>
        </section>
        <div className="rl-strip">
          <span>Des invités qui participent.</span>
          <span aria-hidden="true">✧</span>
          <span>Des souvenirs qui se partagent.</span>
          <span aria-hidden="true">✧</span>
          <span>Une expérience à votre image.</span>
        </div>
        <section
          className="marketing-realisations rl-work rl-section"
          id="films"
        >
          <div className="rl-wrap">
            <header className="rl-heading">
              <div>
                <p className="rl-eyebrow">01 / LES HISTOIRES</p>
                <h2>
                  À chaque événement,
                  <br />
                  <em>son énergie.</em>
                </h2>
              </div>
              <p>
                Un mariage qui fait danser les générations. Une marque qui crée
                la rencontre. Choisissez un univers, puis entrez dans
                l'événement.
              </p>
            </header>
            <div className="rl-filter-row">
              <div
                className="rl-filters"
                role="group"
                aria-label="Filtrer les réalisations par événement"
              >
                {categories.map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={category === value}
                    onClick={() => setCategory(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <p aria-live="polite" aria-atomic="true">
                {selectedProjects.length} réalisation
                {selectedProjects.length > 1 ? "s" : ""}
              </p>
            </div>
            <div
              className={`rl-project-grid ${category !== "Tout" ? "is-filtered" : ""}`}
              id="rl-projects"
            >
              {selectedProjects.map((project, index) => (
                <article
                  className={`rl-project ${project.wide && category === "Tout" ? "is-wide" : ""}`}
                  key={project.id}
                >
                  <button
                    className="rl-project-open"
                    type="button"
                    onClick={() => setActiveId(project.id)}
                    aria-label={`${project.video ? "Lire le film" : "Agrandir les photos"} : ${project.title}`}
                  >
                    <div className="rl-project-media">
                      <Photo item={project} />
                      <span className="rl-project-tag">{project.device}</span>
                      <span className="rl-project-action">
                        {project.video ? (
                          <>
                            <Play /> Voir le film
                          </>
                        ) : (
                          <>
                            Voir les photos <Arrow />
                          </>
                        )}
                      </span>
                    </div>
                    <div className="rl-project-caption">
                      <div>
                        <p>{project.subtitle}</p>
                        <h3>{project.title}</h3>
                      </div>
                      <span className="rl-project-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
            <div className="rl-work-footer">
              <p>Votre événement mérite aussi son histoire.</p>
              <a className="rl-text-link" href={siteConfig.quoteUrl}>
                Imaginons la vôtre <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section
          className="marketing-realisations rl-keepsakes rl-section"
          id="tirages"
        >
          <div className="rl-wrap">
            <header className="rl-heading">
              <div>
                <p className="rl-eyebrow">02 / CE QUI RESTE</p>
                <h2>
                  Plus qu'une photo.
                  <br />
                  <em>Un petit morceau de la fête.</em>
                </h2>
              </div>
              <p>
                Le tirage que l'on affiche. Le livre que l'on ouvre à nouveau.
                Le détail que l'on garde avec soi.
              </p>
            </header>
            <div className="rl-keepsake-grid">
              {keepsakes.map((item, index) => (
                <figure key={item.id} data-reveal>
                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-label={`Agrandir : ${item.title}`}
                  >
                    <Photo item={item} />
                    <span>
                      <Arrow />
                    </span>
                  </button>
                  <figcaption>
                    <span className="rl-keepsake-number">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section
          className="marketing-realisations rl-backstage rl-section"
          id="machines"
        >
          <div className="rl-wrap rl-backstage-grid">
            <button
              className="rl-backstage-media"
              type="button"
              onClick={() => setActiveId(backstage.id)}
              aria-label="Voir l'installation du Photobooth en vidéo"
            >
              <Photo item={backstage} />
              <span className="rl-backstage-play">
                <span className="rl-play">
                  <Play />
                </span>
                <span>
                  Dans les coulisses
                  <br />
                  <strong>Voir l'installation</strong>
                </span>
              </span>
            </button>
            <div className="rl-backstage-copy">
              <p className="rl-eyebrow">03 / AVANT LE PREMIER SOURIRE</p>
              <h2>
                Vous profitez.
                <br />
                <em>On prépare le reste.</em>
              </h2>
              <p>
                Derrière une animation fluide, il y a une équipe, une
                préparation et des détails qui comptent. Découvrez notre
                installation, avant l'arrivée de vos invités.
              </p>
              <ol>
                <li>
                  <span>01</span>
                  <div>
                    <h3>Le bon emplacement.</h3>
                    <p>
                      Les accès, l'espace et l'alimentation sont définis avec
                      vous.
                    </p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Votre univers, jusque sur la photo.</h3>
                    <p>
                      La personnalisation est préparée selon la formule choisie.
                    </p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Prêt pour le premier invité.</h3>
                    <p>
                      L'installation et les tests précèdent l'ouverture de
                      l'animation.
                    </p>
                  </div>
                </li>
              </ol>
              <a href="/a-propos/" className="rl-text-link">
                Rencontrer l'équipe <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section
          className="marketing-realisations rl-reviews rl-section"
          id="avis-reels"
        >
          <div className="rl-wrap">
            <header className="rl-heading">
              <div>
                <p className="rl-eyebrow">04 / LEURS MOTS</p>
                <h2>
                  Ce qu'ils en gardent.
                  <br />
                  <em>Ce qu'ils en disent.</em>
                </h2>
              </div>
              <a
                href={siteConfig.reviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="rl-text-link"
              >
                Consulter les avis Google <Arrow />
              </a>
            </header>
            <div className="rl-reviews-grid">
              {reviews.map((review) => (
                <figure key={review.name} data-reveal>
                  <span className="rl-quote-mark" aria-hidden="true">
                    “
                  </span>
                  <blockquote>{review.text}</blockquote>
                  <figcaption>
                    <strong>{review.name}</strong>
                    <span>Avis Google · extrait</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className="marketing-realisations rl-discover">
          <div className="rl-wrap">
            <p>Vous avez repéré votre animation ?</p>
            <div>
              {[
                ["Photobooth", "/prestations/photobooth/"],
                ["Miroirbooth", "/prestations/miroirbooth/"],
                ["Vogue Booth", "/prestations/voguebooth/"],
                ["360 Booth", "/prestations/videobooth/"],
              ].map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                  <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="marketing-realisations rl-final">
          <div className="rl-wrap">
            <p className="rl-eyebrow">
              LA PROCHAINE HISTOIRE COMMENCE AVEC VOUS.
            </p>
            <h2>
              Et si, cette fois,
              <br />
              c'était <em>votre événement ?</em>
            </h2>
            <p>
              Une date, un lieu, une envie. Parlons des souvenirs que vous
              aimeriez créer.
            </p>
            <div className="rl-actions">
              <a className="rl-button" href={siteConfig.quoteUrl}>
                Imaginons mon événement <Arrow />
              </a>
              <a className="rl-text-link" href={siteConfig.phoneHref}>
                {siteConfig.phoneLabel} <Arrow />
              </a>
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rl-instagram"
            >
              Suivre les prochains événements sur Instagram <Arrow />
            </a>
          </div>
        </section>
        <MediaViewer
          activeId={activeId}
          onClose={() => setActiveId(null)}
          onChange={setActiveId}
        />
      </div>
    </Layout>
  );
}
