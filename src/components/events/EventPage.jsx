import { useRef, useState } from "react";
import Layout from "../Layout";
import useRevealMotion from "../../hooks/useRevealMotion";
import { machines, servicePacks } from "../../data/catalog";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  siteConfig,
} from "../../data/site";
import { eventPages } from "./content";
import styles from "./EventPage.module.css";

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}

function Aliases({ page, section }) {
  return (page.aliases[section] || []).map((id) => (
    <span key={id} id={id} className={styles.anchor} aria-hidden="true" />
  ));
}

function Picture({ src, alt, className }) {
  const responsive = src.endsWith("-900.webp");
  return (
    <img
      src={src}
      srcSet={
        responsive
          ? `${src.replace("-900.webp", "-480.webp")} 480w, ${src} 900w`
          : undefined
      }
      sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 32vw"
      alt={alt}
      width="900"
      height="675"
      className={className}
      loading="lazy"
      decoding="async"
      data-no-load-motion
    />
  );
}

function Film({ film }) {
  const player = useRef(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const play = () =>
    player.current
      ?.play()
      .then(() => player.current?.focus({ preventScroll: true }))
      .catch((error) => {
        if (error.name !== "AbortError") setFailed(true);
      });
  return (
    <figure className={styles.galleryCard} data-reveal>
      <div className={styles.galleryMedia}>
        <video
          ref={player}
          controls
          playsInline
          preload="none"
          poster={film.poster}
          aria-label={film.title}
          aria-describedby="event-film-description"
          data-no-load-motion
          onPlay={() => setStarted(true)}
          onEnded={() => setStarted(false)}
          onError={() => setFailed(true)}
        >
          <source
            src={film.src}
            type="video/mp4"
            onError={() => setFailed(true)}
          />
        </video>
        {!started && !failed && (
          <button
            type="button"
            className={styles.play}
            aria-label={`Lire la vidéo : ${film.title}`}
            onClick={play}
          >
            <span aria-hidden="true">▶</span> Lire la vidéo
          </button>
        )}
        {failed && (
          <p className={styles.filmError} role="status">
            Lecture indisponible ici. <a href={film.src}>Ouvrir la vidéo</a>
          </p>
        )}
      </div>
      <figcaption>
        <h3>{film.title}</h3>
        <p>Un aperçu réel de l’expérience.</p>
        <p id="event-film-description" className={styles.srOnly}>
          {film.description}
        </p>
      </figcaption>
    </figure>
  );
}

export default function EventPage({ eventKey }) {
  const page = eventPages[eventKey];
  const pack = servicePacks.find((item) => item.key === page.pack);
  const root = useRevealMotion(eventKey);
  const href = `/evenements/${eventKey}/`;
  const hero = (width) => `/images/ai-from-real/${page.hero}-${width}.webp`;
  const faq = page.faq.map(([question, answer]) => ({ question, answer }));
  const meta = {
    title: page.seoTitle,
    description: page.description,
    ogUrl: href,
    ogImage: hero(1440),
    ogImageAlt: page.heroAlt,
    jsonLd: [
      breadcrumbJsonLd([
        { label: "Accueil", href: "/" },
        { label: "Événements", href: "/evenements/" },
        { label: page.name, href },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Animations photo et vidéo pour ${page.name.toLowerCase()}`,
        description: page.description,
        url: absoluteUrl(href),
        image: absoluteUrl(hero(1440)),
        serviceType: `Location de photobooth pour ${page.name.toLowerCase()}`,
        areaServed: "Paris et Île-de-France",
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.baseUrl,
        },
      },
      faqJsonLd(faq),
    ],
  };
  return (
    <Layout metaProps={meta}>
      <article ref={root} className={styles.page} data-event-page={eventKey}>
        <section
          className={`marketing-events ${styles.hero}`}
          aria-labelledby="event-title"
        >
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{page.eyebrow}</p>
            <h1 id="event-title">{page.title}</h1>
            <p className={styles.lead}>{page.intro}</p>
            <div className={styles.actions}>
              <a
                href={siteConfig.quoteUrl}
                className={styles.button}
                data-event="cta_quote_click"
              >
                {page.cta} <Arrow />
              </a>
              <a href="#animations" className={styles.textLink}>
                Découvrir les animations <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className={styles.location}>
              Paris · Melun · Île-de-France · autres régions sur étude
            </p>
          </div>
          <figure className={styles.heroVisual}>
            <img
              src={hero(900)}
              srcSet={[480, 900, 1440]
                .map((w) => `${hero(w)} ${w}w`)
                .join(", ")}
              sizes="(max-width: 800px) 100vw, 55vw"
              width="1440"
              height="960"
              fetchPriority="high"
              loading="eager"
              alt={page.heroAlt}
              style={{ objectPosition: page.heroPosition }}
              data-no-load-motion
            />
          </figure>
        </section>

        <section
          id="animations"
          className={`marketing-events ${styles.section} ${styles.light}`}
          aria-labelledby="animations-title"
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="animations" />
            <header className={styles.heading}>
              <p className={styles.eyebrow}>Choisir son animation</p>
              <h2 id="animations-title">{page.machineTitle}</h2>
              <p>{page.machineIntro}</p>
            </header>
            <div className={styles.machineGrid}>
              {page.machines.map((item) => {
                const machine = machines.find(
                  (entry) => entry.key === item.key,
                );
                return (
                  <article
                    className={styles.machine}
                    key={item.key}
                    data-reveal
                  >
                    <a
                      className={styles.machinePhoto}
                      href={`${machine.href}/`}
                      aria-label={`Découvrir le ${machine.name}`}
                    >
                      <Picture src={item.image} alt={item.alt} />
                    </a>
                    <div className={styles.machineCopy}>
                      <h3>{machine.name}</h3>
                      <p>{item.text}</p>
                      <p className={styles.machineNote}>{item.note}</p>
                      <p className={styles.price}>{machine.catalogPrice}</p>
                      <a className={styles.textLink} href={`${machine.href}/`}>
                        Voir cette animation <Arrow />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
            <a href="/prestations/" className={styles.textLink}>
              Comparer les six machines et les packs <Arrow />
            </a>
          </div>
        </section>

        <section
          id="personnalisation"
          className={`marketing-events ${styles.section} ${styles.light} ${styles.gallerySection}`}
          aria-labelledby="gallery-title"
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="personnalisation" />
            <header className={styles.heading}>
              <p className={styles.eyebrow}>Personnalisation & souvenirs</p>
              <h2 id="gallery-title">{page.galleryTitle}</h2>
              <p>{page.galleryIntro}</p>
            </header>
            <div className={styles.gallery}>
              <Film film={page.motion} />
              {page.gallery.map((item) => (
                <figure
                  key={item.src}
                  className={styles.galleryCard}
                  data-reveal
                >
                  <div className={styles.galleryMedia}>
                    <Picture src={item.src} alt={item.alt} />
                  </div>
                  <figcaption>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className={styles.galleryLinks}>
              <a href="/realisations/" className={styles.textLink}>
                Voir les réalisations <Arrow />
              </a>
              <a href="/options/" className={styles.textLink}>
                Explorer les options <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          id="formule"
          className={`marketing-events ${styles.section} ${styles.details}`}
          aria-labelledby="pack-title"
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="formule" />
            <div className={styles.pack}>
              <div className={styles.packImage}>
                <Picture
                  src={`/images/ai-from-real/prestations-pack-${pack.key}-900.webp`}
                  alt={pack.fusionAlt}
                />
              </div>
              <div>
                <p className={styles.eyebrow}>
                  Une formule pour votre événement
                </p>
                <h2 id="pack-title">{pack.name}</h2>
                <p className={styles.packIntro}>{page.packIntro}</p>
                <ul>
                  {pack.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className={styles.packPrice}>
                  {pack.price.replace("euros", "€")}
                </p>
                <p className={styles.terms}>
                  Lieu, déplacements, durée et options confirmés au devis.
                </p>
                <a
                  className={styles.button}
                  href={pack.bookingUrl}
                  data-event="cta_quote_click"
                >
                  Recevoir ma proposition <Arrow />
                </a>
                <a href="/prestations/#packs" className={styles.textLink}>
                  Découvrir les autres packs <Arrow />
                </a>
              </div>
            </div>
            <div id="organisation" className={styles.planning}>
              <Aliases page={page} section="organisation" />
              {page.planning.map(([title, text], i) => (
                <div key={title}>
                  <span className={styles.step} aria-hidden="true">
                    0{i + 1}
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div id="faq" className={styles.faq}>
              <div>
                <p className={styles.eyebrow}>Préparer votre événement</p>
                <h2>Vos questions.</h2>
              </div>
              <div>
                {faq.map(({ question, answer }) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <nav
              id="liens-utiles"
              className={styles.links}
              aria-label="Pour aller plus loin"
            >
              {page.links.map(([label, link]) => (
                <a key={link} href={link}>
                  {label} <Arrow />
                </a>
              ))}
              <a href="/evenements/">
                Tous les événements <Arrow />
              </a>
            </nav>
          </div>
        </section>
      </article>
    </Layout>
  );
}
