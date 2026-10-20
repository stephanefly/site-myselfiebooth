import { useEffect, useRef, useState } from "react";
import Layout from "../Layout";
import useRevealMotion from "../../hooks/useRevealMotion";
import { absoluteUrl, faqJsonLd, siteConfig } from "../../data/site";
import { heroImage, machinePages } from "./content";
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

function MediaCard({ media, onOpen, custom = false }) {
  const responsive = media.src.endsWith("-900.webp");
  return (
    <figure
      className={custom ? styles.customCard : styles.galleryCard}
      data-reveal
    >
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
            custom
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
        {custom ? <h3>{media.caption}</h3> : <strong>{media.caption}</strong>}
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
              {page.rates[0].label}
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
            <p className={styles.location}>
              Paris · Melun · Toute l’Île-de-France
            </p>
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
        <div className={styles.facts}>
          {page.facts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        {["videobooth", "air360booth"].includes(machineKey) && (
          <p className={styles.capacityNote}>
            * Selon la configuration et l’espace validé avec le lieu.
          </p>
        )}
        <nav
          className={styles.sectionNav}
          aria-label={`Découvrir le ${page.name}`}
        >
          <a href="#experience">En images</a>
          <a href="#personnalisation">À votre image</a>
          <a href="#formules">Votre formule</a>
          <a href="#installation">Installation</a>
          <a href="#questions">Questions</a>
        </nav>

        <section
          id="experience"
          className={`marketing-machine ${styles.section} ${styles.light}`}
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="experience" />
            <Heading eyebrow="L’expérience, en images">
              {page.experienceTitle}
            </Heading>
            <div className={styles.visualGrid}>
              {[page.proof, page.detail].filter(Boolean).map((item) => (
                <MediaCard key={item.src} media={item} onOpen={setMedia} />
              ))}
            </div>
            <a href="/realisations/" className={styles.textLink}>
              Toutes nos réalisations <Arrow />
            </a>
          </div>
        </section>

        <section
          id="personnalisation"
          className={`marketing-machine ${styles.section} ${styles.custom}`}
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="custom" />
            <Heading eyebrow="À votre image">{page.customTitle}</Heading>
            <div className={styles.customGrid}>
              {page.custom.map((item) => (
                <MediaCard
                  key={item.src}
                  media={item}
                  onOpen={setMedia}
                  custom
                />
              ))}
            </div>
            <a href="/evenements/corporates/" className={styles.textLink}>
              Votre projet de marque sur mesure <Arrow />
            </a>
          </div>
        </section>

        <section
          className={`marketing-machine ${styles.contexts}`}
          aria-label="Pour votre événement"
        >
          <div className={styles.wrap}>
            {page.contexts.map(({ title, href }) => (
              <a key={title} href={href}>
                <h2>
                  {title}
                  <Arrow />
                </h2>
              </a>
            ))}
          </div>
        </section>

        <section
          id="formules"
          className={`marketing-machine ${styles.section} ${styles.offer}`}
        >
          <div className={`${styles.wrap} ${styles.offerGrid}`}>
            <div>
              <Heading eyebrow="Votre formule">
                L’essentiel est inclus.
                <br />
                Les options, à votre choix.
              </Heading>
              <a href={page.bookingUrl} className={styles.primary}>
                Recevoir mon devis <Arrow />
              </a>
              <a href={siteConfig.phoneHref} className={styles.phone}>
                Un conseil ? {siteConfig.phoneLabel}
              </a>
            </div>
            <div className={styles.offerCard} data-reveal>
              <Aliases page={page} section="offer" />
              <p className={styles.eyebrow}>{page.name}</p>
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
              <ul>
                {page.includes.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              {page.extras && <p className={styles.extras}>{page.extras}</p>}
              <p className={styles.rateNote}>{page.rateNote}</p>
            </div>
          </div>
        </section>

        <section
          id="installation"
          className={`marketing-machine ${styles.installation}`}
          aria-labelledby="installation-title"
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="installation" />
            <h2 id="installation-title">L’installation, préparée ensemble.</h2>
            <ul>
              {page.technical.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
            <a href="/zones-intervention/" className={styles.textLink}>
              Paris & Île-de-France <Arrow />
            </a>
          </div>
        </section>

        <section
          id="questions"
          className={`marketing-machine ${styles.section} ${styles.faq}`}
        >
          <div className={`${styles.wrap} ${styles.faqGrid}`}>
            <Heading eyebrow="En pratique">Vos questions.</Heading>
            <div>
              <span id="faq" className={styles.anchor} aria-hidden="true" />
              {faq.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="autres-experiences"
          className={`marketing-machine ${styles.section} ${styles.related}`}
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="related" />
            <span
              id="liens-utiles"
              className={styles.anchor}
              aria-hidden="true"
            />
            <Heading eyebrow="La collection">À découvrir aussi.</Heading>
            <div className={styles.relatedGrid}>
              {page.related.map((key) => {
                const other = machinePages[key];
                return (
                  <a
                    key={key}
                    href={other.href}
                    className={styles.relatedCard}
                    data-reveal
                  >
                    <div className={styles.relatedImage}>
                      <img
                        src={`${aiPath}prestations-2026-${key}.webp`}
                        alt={`${other.name} MySelfieBooth, ${other.label.toLowerCase()}`}
                        width="900"
                        height="600"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div>
                      <span className={styles.eyebrow}>{other.label}</span>
                      <h3>
                        {other.name}
                        <Arrow />
                      </h3>
                    </div>
                  </a>
                );
              })}
            </div>
            <a href="/prestations/" className={styles.textLink}>
              Comparer les expériences <Arrow />
            </a>
          </div>
        </section>
        <section
          className={`marketing-machine ${styles.final}`}
          aria-labelledby="machine-final-title"
        >
          <div className={styles.wrap}>
            <h2 id="machine-final-title">On crée vos souvenirs ?</h2>
            <a href={page.bookingUrl} className={styles.primary}>
              Imaginer mon événement <Arrow />
            </a>
          </div>
        </section>
      </div>
      <MediaDialog media={media} onClose={() => setMedia(null)} />
    </Layout>
  );
}

const aiPath = "/images/ai-from-real/";
