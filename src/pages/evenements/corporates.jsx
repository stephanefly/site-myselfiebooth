import { useState } from "react";
import Layout from "../../components/Layout";
import useRevealMotion from "../../hooks/useRevealMotion";
import { faqJsonLd } from "../../data/site";
import {
  machines,
  customizations,
  events,
  steps,
  gallery,
  packages,
  faq,
  quoteUrl,
} from "../../components/corporate/content";
import styles from "../../components/corporate/Corporate.module.css";

const media = "/images/ai-from-real/corporate-";
const heroMedia = "/images/ai-from-real/evenement-entreprise-equipe-";
const cabins = [
  {
    key: "black",
    title: "Luxe & matière",
    description:
      "Noir profond, détails dorés et façade signée. Une présence architecturale pour un univers de maison de luxe.",
  },
  {
    key: "pink",
    title: "Beauté & lumière",
    description:
      "Rose et blanc, lignes douces et éclairage intégré. Une piste créative pour un lancement cosmétique.",
  },
  {
    key: "red",
    title: "Impact & couleur",
    description:
      "Rouge et blanc, graphisme affirmé et parois personnalisées. Un concept pour révéler un nouveau produit.",
  },
];
const meta = {
  title: "Photobooth Corporate Paris & Cabine Sur Mesure | MySelfieBooth",
  description:
    "Photobooth personnalisé entreprise à Paris : habillage de marque, VogueBooth, vidéo 360 et cabines photo sur mesure. Créons votre expérience corporate sur devis.",
  ogUrl: "/evenements/corporates/",
  ogImage: `${heroMedia}1440.webp`,
  ogImageAlt:
    "Équipe en costumes et tailleurs avec badges professionnels réunie près d’un photobooth personnalisé et d’un Miroirbooth",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Expériences photo et vidéo corporate personnalisées",
      serviceType:
        "Location photobooth entreprise et conception de dispositifs photo sur mesure",
      url: "https://myselfiebooth-paris.fr/evenements/corporates/",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Paris et Île-de-France",
      },
      provider: {
        "@type": "Organization",
        name: "MySelfieBooth",
        url: "https://myselfiebooth-paris.fr",
      },
      description:
        "Personnalisation de photobooths, miroirs photo, VogueBooths et vidéos 360. Cabines photo sur mesure proposées après étude de faisabilité, sur devis.",
    },
    faqJsonLd(faq),
  ],
};
function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}
function Quote({
  children = "Créer mon expérience sur mesure",
  secondary = false,
}) {
  return (
    <a
      href={quoteUrl}
      className={`${styles.button} ${secondary ? styles.outline : ""}`}
      data-analytics-event="cta_quote_click"
    >
      {children}
      <Arrow />
    </a>
  );
}
function Heading({ eyebrow, title, children }) {
  return (
    <header className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </header>
  );
}
function Photo({
  src,
  alt,
  eager = false,
  responsive = false,
  className = "",
}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width="1200"
      height="800"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding={eager ? "sync" : "async"}
      data-no-load-motion={eager ? true : undefined}
      {...(src.includes("cabin-")
        ? {
            srcSet: `${src.replace("900.webp", "480.webp")} 480w, ${src} 900w`,
            sizes: "(max-width: 760px) 100vw, 33vw",
          }
        : responsive
          ? {
              srcSet: `${heroMedia}720.webp 720w, ${heroMedia}840.webp 840w, ${heroMedia}1440.webp 1440w`,
              sizes: "100vw",
            }
          : {})}
    />
  );
}
function BrandDrawing({ branded }) {
  return (
    <svg
      viewBox="0 0 700 450"
      role="img"
      aria-label={
        branded
          ? "Simulation d'une borne habillée aux couleurs d'une marque"
          : "Illustration d'une borne noire standard"
      }
    >
      <ellipse cx="350" cy="411" rx="153" ry="15" fill="#000" opacity=".2" />
      <path d="M330 290h40v105h-40z" fill="#343434" />
      <path d="M275 397h150l18 14H257z" fill="#222" />
      <rect
        x="225"
        y="47"
        width="250"
        height="265"
        rx="25"
        fill={branded ? "#f0e3c9" : "#242424"}
        stroke={branded ? "#c09a56" : "#777"}
        strokeWidth="3"
      />
      {branded && (
        <>
          <path d="M227 215L474 90v80L227 295z" fill="#a77d3b" opacity=".28" />
          <path d="M228 115l245 140" stroke="#ad8952" strokeWidth="2" />
        </>
      )}
      <circle
        cx="350"
        cy="89"
        r="19"
        fill="#111"
        stroke="#a48d65"
        strokeWidth="4"
      />
      <circle cx="350" cy="89" r="7" fill="#525869" />
      <rect
        x="254"
        y="125"
        width="192"
        height="118"
        rx="5"
        fill={branded ? "#151310" : "#444"}
        stroke="#888"
      />
      <text
        x="350"
        y="176"
        textAnchor="middle"
        fill={branded ? "#ddc28c" : "#fff"}
        fontSize={branded ? "21" : "18"}
        letterSpacing="4"
      >
        {branded ? "ATELIER" : "PHOTO"}
      </text>
      <text
        x="350"
        y="202"
        textAnchor="middle"
        fill="#eee"
        fontSize="10"
        letterSpacing="2"
      >
        {branded ? "VOTRE INSTANT SIGNATURE" : "TOUCHEZ POUR COMMENCER"}
      </text>
      <rect x="300" y="267" width="100" height="7" rx="2" fill="#111" />
      {branded && (
        <text
          x="350"
          y="295"
          textAnchor="middle"
          fill="#63502e"
          fontSize="10"
          letterSpacing="3"
        >
          ÉDITION PRIVÉE
        </text>
      )}
    </svg>
  );
}
function Comparison() {
  const [position, setPosition] = useState(50);
  return (
    <div className={styles.comparison}>
      <div className={styles.compareCanvas}>
        <BrandDrawing branded={false} />
        <div
          className={styles.compareOverlay}
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <BrandDrawing branded />
        </div>
        <span className={styles.compareLine} style={{ left: `${position}%` }}>
          <span aria-hidden="true">↔</span>
        </span>
        <div className={styles.compareLabels}>
          <span>Machine standard</span>
          <span>Machine personnalisée</span>
        </div>
      </div>
      <label htmlFor="corporate-comparison">
        Faites glisser pour révéler la personnalisation{" "}
        <span aria-hidden="true">↔</span>
      </label>
      <input
        id="corporate-comparison"
        type="range"
        min="0"
        max="100"
        value={position}
        aria-valuetext={`${100 - position} % de la machine personnalisée visible`}
        onChange={(e) => setPosition(Number(e.target.value))}
      />
      <p className={styles.note}>
        Simulation graphique d'habillage · identité fictive · rendu à valider
        sur le modèle retenu.
      </p>
    </div>
  );
}
function DesignIcon({ index }) {
  return (
    <svg viewBox="0 0 120 85" fill="none" aria-hidden="true">
      <rect
        x="1"
        y="1"
        width="118"
        height="83"
        rx="5"
        stroke="currentColor"
        opacity=".25"
      />
      {index % 3 === 0 ? (
        <>
          <rect
            x="42"
            y="12"
            width="36"
            height="50"
            rx="5"
            stroke="currentColor"
          />
          <circle cx="60" cy="23" r="5" stroke="currentColor" />
          <rect
            x="48"
            y="35"
            width="24"
            height="16"
            fill="currentColor"
            opacity=".3"
          />
          <path
            d="M60 62v12m-15 0h30M8 20l22 12m60 16l22 12"
            stroke="currentColor"
          />
        </>
      ) : index % 3 === 1 ? (
        <>
          <circle cx="60" cy="40" r="25" stroke="currentColor" />
          <path d="M40 57l20-36 20 36H40z" stroke="currentColor" />
          <path d="M15 15h15m60 55h15" stroke="currentColor" />
        </>
      ) : (
        <>
          <rect x="25" y="12" width="70" height="61" stroke="currentColor" />
          <path
            d="M34 23h52M34 62h52M34 30v24h52V30H34z"
            stroke="currentColor"
          />
          <circle cx="60" cy="42" r="8" fill="currentColor" opacity=".25" />
        </>
      )}
    </svg>
  );
}
export default function Corporates() {
  const revealRef = useRevealMotion("corporate-premium");
  return (
    <Layout metaProps={meta}>
      <div className={styles.page} ref={revealRef}>
        <section
          className={`marketing-corporate ${styles.hero}`}
          aria-labelledby="corporate-title"
        >
          <div className={styles.heroPhoto}>
            <Photo
              src={`${heroMedia}1440.webp`}
              alt="Quatre collaborateurs en costumes et tailleurs avec badges professionnels partagent leurs photos près d’un photobooth personnalisé et d’un Miroirbooth doré"
              eager
              responsive
            />
          </div>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              MYSELFIEBOOTH · BRAND EXPERIENCES · PARIS
            </p>
            <h1 id="corporate-title">
              Photobooth Corporate &amp; Expériences Photo <em>Sur Mesure</em>
            </h1>
            <p className={styles.heroLead}>
              Transformez vos événements professionnels en expériences de marque
              mémorables. Photobooths personnalisés, cabines photo sur mesure et
              dispositifs immersifs aux couleurs de votre entreprise.
            </p>
            <div className={styles.actions}>
              <Quote />
              <a
                href="#realisations"
                className={`${styles.button} ${styles.outline}`}
              >
                Découvrir nos réalisations <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className={styles.heroPromises}>
              <span>Identité de marque</span>
              <span>Conception sur mesure</span>
              <span>Accompagnement événementiel</span>
            </div>
          </div>
          <p className={styles.heroCaption}>
            Visuel de projection · personnalisation sur étude
          </p>
        </section>
        <nav
          className={styles.navigation}
          aria-label="Explorer l'offre corporate"
        >
          <a href="#machines">Les machines</a>
          <a href="#cabines">Cabines sur mesure</a>
          <a href="#personnalisation">Personnalisation</a>
          <a href="#realisations">Réalisations</a>
          <a href="#offres-corporate">Les formules</a>
          <a href="#faq">FAQ</a>
        </nav>
        <section
          className={`marketing-corporate ${styles.intro} ${styles.wrap}`}
          id="photobooth-entreprise"
        >
          <p className={styles.eyebrow}>BIEN PLUS QU'UNE ANIMATION PHOTO</p>
          <h2>
            Votre univers.
            <br />
            Notre savoir-faire.
            <br />
            <em>Une expérience qui reste.</em>
          </h2>
          <div>
            <p>
              Une marque se reconnaît dans les détails. L'habillage d'une borne,
              la lumière d'un portrait, la mise en page d'un tirage : chaque
              point de contact peut raconter votre histoire.
            </p>
            <p>
              Pour les entreprises, les agences événementielles et les maisons
              de luxe, MySelfieBooth imagine des expériences photo et vidéo
              personnalisées à Paris et en Île-de-France. Du brief à
              l'exploitation événementielle, nous étudions un dispositif à la
              hauteur de votre projet.
            </p>
            <a className={styles.textLink} href="#personnalisation">
              Explorer les possibilités <Arrow />
            </a>
          </div>
        </section>
        <section
          className={`marketing-corporate ${styles.section} ${styles.wrap}`}
          id="machines"
        >
          <span id="formats-b2b" />
          <Heading
            eyebrow="01 / LA COLLECTION"
            title={
              <>
                Nos machines.
                <br />
                <em>Votre signature.</em>
              </>
            }
          >
            Quatre expériences, autant de façons de faire vivre votre marque.
            Les possibilités de personnalisation sont confirmées selon le modèle
            et le projet.
          </Heading>
          <div className={styles.machineGrid}>
            {machines.map((m, i) => (
              <article className={styles.machine} key={m.name} data-reveal>
                <div className={styles.machinePhoto}>
                  <Photo src={m.image} alt={m.alt} />
                  <span className={styles.photoLabel}>
                    {m.real
                      ? "Photographie réelle"
                      : "Visuel de projection"}
                  </span>
                  <span className={styles.machineNumber}>0{i + 1}</span>
                </div>
                <div className={styles.machineBody}>
                  <p className={styles.eyebrow}>{m.tag}</p>
                  <h3>{m.name}</h3>
                  <p>{m.text}</p>
                  <ul>
                    {m.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <p className={styles.ideal}>{m.ideal}</p>
                  <a href={m.href} className={styles.textLink}>
                    Découvrir le dispositif <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className={`marketing-corporate ${styles.cabinSection}`}
          id="cabines"
        >
          <div className={styles.wrap}>
            <div className={styles.cabinIntro}>
              <Heading
                eyebrow="NOUVEAU TERRITOIRE CRÉATIF / SUR ÉTUDE"
                title={
                  <>
                    Une cabine photo.
                    <br />
                    <em>Un monde à votre image.</em>
                  </>
                }
              >
                Concevons une architecture de marque, fermée ou semi-ouverte,
                autour de l'expérience photo. Une installation temporaire pour
                vos événements professionnels, pensée à partir de votre brief.
              </Heading>
              <div>
                <p>
                  Façade imprimée, logo et visuels, parois et fond photo
                  personnalisés : chaque surface devient un espace d'expression.
                </p>
                <p>
                  Éclairage LED intégré, écran tactile, appareil photo,
                  impression ou partage numérique sont étudiés selon la
                  configuration. Location événementielle ou dispositif
                  réutilisable : chaque projet est soumis à une étude de
                  faisabilité technique et logistique.
                </p>
                <Quote>Demander une cabine personnalisée</Quote>
              </div>
            </div>
            <div className={styles.cabinGrid}>
              {cabins.map((c) => (
                <article key={c.key} data-reveal>
                  <div className={styles.cabinPhoto}>
                    <Photo
                      src={`${media}cabin-${c.key}-900.webp`}
                      alt={`Projection conceptuelle de cabine photo corporate ${c.key === "black" ? "noire et dorée pour un univers de luxe" : c.key === "pink" ? "rose et blanche pour une marque de cosmétique" : "rouge et blanche pour un lancement de produit"}`}
                    />
                    <span className={styles.photoLabel}>
                      Concept sur mesure · sur étude
                    </span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </article>
              ))}
            </div>
            <p className={styles.note}>
              Visuels de projection — réalisations sur mesure soumises à étude
              technique. Ces concepts ne constituent pas des produits
              actuellement en stock. Identités de marque fictives.
            </p>
          </div>
        </section>
        <section
          className={`marketing-corporate ${styles.section} ${styles.wrap}`}
          id="personnalisation"
        >
          <Heading
            eyebrow="02 / L'ART DU DÉTAIL"
            title={
              <>
                La personnalisation n'a pas
                <br />
                <em>de limites créatives.</em>
              </>
            }
          >
            Votre marque ne s'adapte pas à nos machines. Nos dispositifs
            s'adaptent à votre univers.
          </Heading>
          <div className={styles.customGrid}>
            {customizations.map(([number, title, text], i) => (
              <article key={number} data-reveal>
                <DesignIcon index={i} />
                <span className={styles.smallNumber}>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className={styles.compareGrid}>
            <div>
              <p className={styles.eyebrow}>
                LE MÊME DISPOSITIF. UNE AUTRE PRÉSENCE.
              </p>
              <h3>
                De la machine
                <br />à <em>l'objet de marque.</em>
              </h3>
              <p>
                Habillage, interface et cadre photo composent une expérience
                cohérente. Explorez le principe d'une transformation visuelle,
                puis imaginons la vôtre.
              </p>
              <Quote secondary>Parlons de votre identité</Quote>
            </div>
            <Comparison />
          </div>
        </section>
        <section
          className={`marketing-corporate ${styles.eventsSection}`}
          id="cas-usage-entreprise"
        >
          <div className={styles.wrap}>
            <Heading
              eyebrow="03 / LES RENDEZ-VOUS DE VOTRE MARQUE"
              title={
                <>
                  L'expérience juste.
                  <br />
                  <em>Au bon moment.</em>
                </>
              }
            >
              De l'animation photo d'un salon professionnel au photobooth de
              lancement produit, le dispositif s'adapte à votre objectif, votre
              espace et vos invités.
            </Heading>
            <div className={styles.eventsGrid}>
              {events.map((e) => (
                <article key={e.title} data-reveal>
                  <div className={styles.eventPhoto}>
                    <Photo src={e.image} alt={e.alt} />
                    <span className={styles.photoLabel}>
                      Visuel de projection
                    </span>
                  </div>
                  <div className={styles.eventBody}>
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                    <span>{e.machines}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className={`marketing-corporate ${styles.section} ${styles.wrap}`}
          id="accompagnement"
        >
          <span id="organisation-achat" />
          <span id="fiabilite" />
          <Heading
            eyebrow="04 / DE L'IDÉE AU JOUR J"
            title={
              <>
                Une expérience premium.
                <br />
                <em>De A à Z.</em>
              </>
            }
          >
            Un projet créatif mérite une exécution soignée. Nous préparons avec
            vous le rendu et les conditions concrètes de son exploitation.
          </Heading>
          <ol className={styles.steps}>
            {steps.map(([title, text], i) => (
              <li key={title} data-reveal>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.serviceNote}>
            <p>
              Un interlocuteur dédié selon l'organisation du projet. Une équipe
              d'animation professionnelle selon la prestation. Une préparation
              technique et logistique adaptée aux contraintes de votre
              entreprise.
            </p>
            <p>
              Interventions multi-jours, prestations supplémentaires et
              installations complexes : <strong>sur devis</strong>.
            </p>
          </div>
        </section>
        <section
          className={`marketing-corporate ${styles.trust}`}
          id="references"
        >
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>
              LA CONFIANCE SE CONSTRUIT SUR LE TERRAIN
            </p>
            <h2>Ils nous font confiance.</h2>
            <div className={styles.logos}>
              {[
                ["TotalEnergies", "totalenergies.png"],
                ["Sephora", "sephora.webp"],
                ["Safran", "safran.webp"],
              ].map(([name, file]) => (
                <div key={name}>
                  <img
                    src={`/logos/${file}`}
                    alt={name}
                    width="210"
                    height="80"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p>
              Des références autorisées. Des projets abordés avec la même
              attention au détail.
            </p>
          </div>
        </section>
        <section
          className={`marketing-corporate ${styles.section} ${styles.wrap}`}
          id="realisations"
        >
          <Heading
            eyebrow="05 / REGARDS SUR L'EXPÉRIENCE"
            title={
              <>
                Le réel nous inspire.
                <br />
                <em>Votre brief ouvre la suite.</em>
              </>
            }
          >
            Des photographies de nos événements et des projections créatives,
            présentées séparément pour vous aider à imaginer votre dispositif.
          </Heading>
          {[true, false].map((real) => (
            <div className={styles.galleryGroup} key={String(real)}>
              <h3>
                {real
                  ? "Sur le terrain — photographies réelles"
                  : "Pour vous projeter — inspirations créatives"}
              </h3>
              {!real && (
                <p className={styles.note}>
                  Ces inspirations ne représentent pas des réalisations clients.
                  Personnalisations et décors soumis à validation.
                </p>
              )}
              <div className={styles.galleryGrid}>
                {gallery
                  .filter((g) => Boolean(g.real) === real)
                  .map((g) => (
                    <figure key={g.image} data-reveal>
                      <div>
                        <Photo src={g.image} alt={g.alt} />
                      </div>
                      <figcaption>
                        {g.title}
                        <span>{real ? "Photo réelle" : "Visuel de projection"}</span>
                      </figcaption>
                    </figure>
                  ))}
              </div>
            </div>
          ))}
          <a href="/realisations/" className={styles.textLink}>
            Explorer les réalisations MySelfieBooth <Arrow />
          </a>
        </section>
        <section
          className={`marketing-corporate ${styles.packagesSection}`}
          id="offres-corporate"
        >
          <div className={styles.wrap}>
            <Heading
              eyebrow="06 / TROIS UNIVERS, UN PROJET UNIQUE"
              title={
                <>
                  L'ambition de votre marque.
                  <br />
                  <em>La formule qui lui ressemble.</em>
                </>
              }
            >
              Aucun événement ne se ressemble. Nos propositions sont construites
              selon votre brief, la durée, le lieu et les possibilités
              techniques validées.
            </Heading>
            <div className={styles.packages}>
              {packages.map((p, i) => (
                <article key={p.name} data-reveal>
                  <span className={styles.smallNumber}>
                    0{i + 1} / SUR DEVIS
                  </span>
                  <h3>{p.name}</h3>
                  <p className={styles.packageSubtitle}>{p.subtitle}</p>
                  <p>{p.text}</p>
                  <ul>
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Quote secondary>Recevoir une proposition</Quote>
                </article>
              ))}
            </div>
            <p className={styles.note}>
              Matériel, fonctionnalités, accompagnement et options sont
              confirmés dans le devis, après validation de la faisabilité.
            </p>
          </div>
        </section>
        <section
          className={`marketing-corporate ${styles.section} ${styles.wrap} ${styles.faq}`}
          id="faq"
        >
          <Heading
            eyebrow="LES RÉPONSES AVANT LE BRIEF"
            title={
              <>
                Votre projet.
                <br />
                <em>En toute clarté.</em>
              </>
            }
          />
          <div>
            {faq.map((f) => (
              <details key={f.question}>
                <summary>
                  {f.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section
          className={`marketing-corporate ${styles.final}`}
          id="brief-corporate"
        >
          <span id="event-tech" />
          <span id="donnees-lead-capture" />
          <span id="rapport-corporate-automatique" />
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>
              VOTRE PROCHAINE EXPÉRIENCE COMMENCE ICI
            </p>
            <h2>
              Imaginons ensemble votre prochaine <em>expérience de marque.</em>
            </h2>
            <p>
              Une date, un lieu, une intention. Partagez votre brief et donnons
              forme à une expérience qui vous ressemble.
            </p>
            <Quote>Obtenir une proposition sur mesure</Quote>
            <div className={styles.related}>
              <a href="/blog/animation-photobooth-entreprise/">
                Le guide entreprise
              </a>
              <a href="/blog/photobooth-salon-seminaire/">
                Préparer un salon ou un séminaire
              </a>
              <a href="/prestations/">Tous les dispositifs</a>
              <a href="/zones-intervention/">Zones d'intervention</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
