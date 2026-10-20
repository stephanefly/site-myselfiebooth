import { useEffect, useRef, useState } from "react";
import Layout from "../Layout";
import useRevealMotion from "../../hooks/useRevealMotion";
import { absoluteUrl, faqJsonLd, siteConfig } from "../../data/site";
import { heroImage, machinePages } from "./content";
import MachineMotion from "./MachineMotion";
import styles from "./MachinePage.module.css";

function Arrow({ down = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
    >
      <path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M5 19 19 5M5 5h14v14"} />
    </svg>
  );
}

function Aliases({ page, section }) {
  return (page.aliases[section] || []).map((id) => (
    <span key={id} id={id} className={styles.anchor} aria-hidden="true" />
  ));
}

function Heading({ eyebrow, children, text }) {
  return (
    <div className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{children}</h2>
      {text && <p className={styles.intro}>{text}</p>}
    </div>
  );
}

function MediaCard({ media, onOpen }) {
  const responsive = media.src.endsWith("-900.webp");
  return (
    <figure
      className={`${styles.galleryCard} ${media.featured ? styles.featuredCard : ""}`}
      data-reveal
    >
      {media.label && <p className={styles.galleryRole}>{media.label}</p>}
      <button
        type="button"
        className={styles.mediaButton}
        onClick={() => onOpen(media)}
        aria-label={`${media.video ? "Voir la vidéo" : "Agrandir"} : ${media.caption}`}
      >
        <img
          src={media.src}
          srcSet={
            responsive
              ? `${media.src.replace("-900.webp", "-480.webp")} 480w, ${media.src} 900w`
              : undefined
          }
          sizes={
            media.featured
              ? "(max-width: 760px) 100vw, 33vw"
              : "(max-width: 760px) 50vw, 50vw"
          }
          alt={media.alt}
          width="900"
          height="675"
          loading="lazy"
          decoding="async"
        />
        <span className={styles.mediaAction}>
          {media.video ? "Voir la vidéo" : "Agrandir"}
          <Arrow />
        </span>
      </button>
      <figcaption>
        <strong>{media.caption}</strong>
        {media.text && <p>{media.text}</p>}
      </figcaption>
    </figure>
  );
}

function MediaDialog({ media, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (!media) return undefined;
    const el = dialog.current;
    const previousOverflow = document.body.style.overflow;
    const opener = document.activeElement;
    el.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      el.close();
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement) opener.focus({ preventScroll: true });
    };
  }, [media]);
  return (
    <dialog
      ref={dialog}
      className={styles.dialog}
      aria-labelledby="machine-media-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {media && (
        <div className={styles.dialogBody}>
          <div className={styles.dialogHeader}>
            <h2 id="machine-media-title">{media.caption}</h2>
            <button
              type="button"
              onClick={onClose}
              autoFocus
              aria-label="Fermer le média"
            >
              Fermer <span aria-hidden="true">×</span>
            </button>
          </div>
          {media.video ? (
            <video
              key={media.video}
              src={media.video}
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={media.videoLabel}
              aria-describedby="machine-media-description"
            />
          ) : (
            <img src={media.src} alt={media.alt} />
          )}
          {media.transcript && (
            <p id="machine-media-description" className={styles.transcript}>
              {media.transcript}
            </p>
          )}
        </div>
      )}
    </dialog>
  );
}

export default function MachinePage({ machineKey }) {
  const page = machinePages[machineKey];
  const rootRef = useRevealMotion(machineKey);
  const [media, setMedia] = useState(null);
  const faq = page.faq.map(([question, answer]) => ({ question, answer }));
  const meta = {
    title: page.seoTitle,
    description: page.seoDescription,
    ogUrl: page.href,
    ogImage: heroImage(page, 1440),
    ogImageAlt: page.heroAlt,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Location ${page.name}`,
        serviceType: `Location ${page.name} événementiel`,
        description: page.seoDescription,
        url: absoluteUrl(page.href),
        image: absoluteUrl(heroImage(page, 1440)),
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.baseUrl,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Paris et Île-de-France",
        },
        offers: {
          "@type": "Offer",
          price: String(page.priceFrom),
          priceCurrency: "EUR",
          url: page.bookingUrl,
          description: page.rates[0].label,
        },
      },
      faqJsonLd(faq),
    ],
  };

  return (
    <Layout metaProps={meta}>
      <div ref={rootRef} className={styles.page} data-machine={machineKey}>
        <section
          className={`marketing-machine ${styles.hero}`}
          aria-labelledby="machine-title"
        >
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>
              <span className={styles.collectionNumber}>{page.number} /</span>{" "}
              {page.label}
            </p>
            <h1 id="machine-title">
              Location <span>{page.name}</span>
            </h1>
            <p className={styles.headline}>{page.headline}</p>
            <p className={styles.heroIntro}>{page.intro}</p>
            <p className={styles.heroPrice}>
              <a href="#formules">{page.rates[0].label}</a>
              <span>
                {machineKey === "voguebooth"
                  ? "Formule particulière · options sur devis"
                  : "Options et conditions précisées au devis"}
              </span>
            </p>
            <div className={styles.actions}>
              <a href={page.bookingUrl} className={styles.primary}>
                Demander mon devis <Arrow />
              </a>
              <a href="#experience" className={styles.textLink}>
                Voir les images <Arrow down />
              </a>
            </div>
            <p className={styles.heroFacts}>
              {page.facts.map(([, value]) => value).join(" · ")}
              {["videobooth", "air360booth"].includes(machineKey) && (
                <small>
                  Selon la configuration et l’espace validé avec le lieu.
                </small>
              )}
            </p>
            <p className={styles.location}>Paris · Melun · Île-de-France</p>
          </div>
          <figure
            className={`${styles.heroVisual} ${machineKey === "air360booth" ? styles.wideVisual : ""}`}
          >
            <img
              src={heroImage(page)}
              srcSet={[480, 900, 1440]
                .map((w) => `${heroImage(page, w)} ${w}w`)
                .join(", ")}
              sizes="(max-width: 760px) 100vw, 50vw"
              width="1440"
              height="960"
              fetchPriority="high"
              loading="eager"
              alt={page.heroAlt}
              style={{
                objectPosition: page.heroPosition,
                "--hero-focus": page.heroPosition,
              }}
            />
            <figcaption>
              <span>{page.label}</span>
              <strong>{page.promise}</strong>
            </figcaption>
          </figure>
        </section>
        <section
          id="experience"
          className={`marketing-machine ${styles.section} ${styles.light}`}
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="experience" />
            <Heading eyebrow="La machine · L’expérience · La personnalisation">
              Découvrez le {page.name}.
            </Heading>
            <span
              id="personnalisation"
              className={styles.anchor}
              aria-hidden="true"
            />
            <Aliases page={page} section="custom" />
            <div className={styles.visualGrid}>
              {page.gallery.map((item) =>
                item.preview ? (
                  <MachineMotion
                    key={item.src}
                    media={item}
                    onOpen={setMedia}
                    suspended={!!media}
                  />
                ) : (
                  <MediaCard key={item.src} media={item} onOpen={setMedia} />
                ),
              )}
              {page.custom.map((item) => (
                <MediaCard key={item.src} media={item} onOpen={setMedia} />
              ))}
            </div>
            <div className={styles.galleryLinks}>
              <a href="/realisations/" className={styles.textLink}>
                Toutes nos réalisations <Arrow />
              </a>
              <a href="/evenements/corporates/" className={styles.textLink}>
                Personnalisation entreprise <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          id="formules"
          className={`marketing-machine ${styles.section}`}
        >
          <div className={styles.wrap}>
            <Heading eyebrow="Tarifs & informations pratiques">
              Votre formule.
            </Heading>
            <div className={styles.offerGrid}>
              <div className={styles.offerDetails}>
                <Aliases page={page} section="offer" />
                <div className={styles.rates}>
                  {page.rates.map((rate) => (
                    <div key={rate.duration}>
                      <span>{rate.duration}</span>
                      <strong>
                        {rate.price} <small>€</small>
                      </strong>
                    </div>
                  ))}
                </div>
                <ul className={styles.included}>
                  {page.includes.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
                {page.extras && <p className={styles.extras}>{page.extras}</p>}
                <p className={styles.rateNote}>{page.rateNote}</p>
                <span
                  id="installation"
                  className={styles.anchor}
                  aria-hidden="true"
                />
                <Aliases page={page} section="installation" />
                <p className={styles.technical}>{page.technical.join(" · ")}</p>
                <a href={page.bookingUrl} className={styles.primary}>
                  Recevoir mon devis <Arrow />
                </a>
                <a href={siteConfig.phoneHref} className={styles.phone}>
                  Un conseil ? {siteConfig.phoneLabel}
                </a>
              </div>
              <div id="questions" className={styles.faq}>
                <h3>Avant de réserver</h3>
                <span id="faq" className={styles.anchor} aria-hidden="true" />
                {faq.map(({ question, answer }) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
                <p className={styles.usefulLinks}>
                  Pour vos événements :{" "}
                  {page.contexts.map(({ title, href }, index) => (
                    <span key={href}>
                      {index > 0 && " · "}
                      <a href={href}>{title}</a>
                    </span>
                  ))}
                  . <a href="/zones-intervention/">Nos zones d’intervention</a>.
                </p>
              </div>
            </div>
            <div id="autres-experiences" className={styles.collectionLinks}>
              <Aliases page={page} section="related" />
              <span
                id="liens-utiles"
                className={styles.anchor}
                aria-hidden="true"
              />
              <span>À découvrir aussi</span>
              {page.related.map((key) => (
                <a key={key} href={machinePages[key].href}>
                  {machinePages[key].name} <Arrow />
                </a>
              ))}
              <a href="/prestations/">
                Toutes les machines <Arrow />
              </a>
            </div>
          </div>
        </section>
      </div>
      <MediaDialog media={media} onClose={() => setMedia(null)} />
    </Layout>
  );
}
