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
                Voir l’expérience <Arrow down />
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
        {(machineKey === "videobooth" || machineKey === "air360booth") && (
          <p className={styles.capacityNote}>
            * Capacité selon la configuration retenue et l’espace validé avec le
            lieu.
          </p>
        )}

        <nav
          className={styles.sectionNav}
          aria-label={`Découvrir le ${page.name}`}
        >
          <a href="#experience">L’expérience</a>
          <a href="#personnalisation">Personnalisation</a>
          <a href="#formules">Tarifs & inclusions</a>
          <a href="#installation">Installation</a>
          <a href="#questions">Questions fréquentes</a>
        </nav>

        <section
          id="experience"
          className={`marketing-machine ${styles.section} ${styles.light}`}
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="experience" />
            <Heading eyebrow="L’expérience, en vrai" text={page.experienceText}>
              {page.experienceTitle}
            </Heading>
            <div className={styles.experienceGrid}>
              <figure className={styles.proof} data-reveal>
                <button
                  type="button"
                  className={styles.mediaButton}
                  onClick={() => setMedia(page.proof)}
                  aria-label={`${page.proof.video ? "Voir la vidéo" : "Agrandir la photo"} : ${page.proof.caption}`}
                >
                  <img
                    src={page.proof.src}
                    alt={page.proof.alt}
                    width="600"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.mediaAction}>
                    <span aria-hidden="true">
                      {page.proof.video ? "▶" : "+"}
                    </span>{" "}
                    {page.proof.video ? "Voir la vidéo" : "Agrandir la photo"}
                  </span>
                </button>
                <figcaption>{page.proof.caption}</figcaption>
              </figure>
              <div className={styles.experienceDetails}>
                <div className={styles.benefits}>
                  {page.benefits.map(([title, text], i) => (
                    <article key={title} data-reveal>
                      <span className={styles.index}>0{i + 1}</span>
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </article>
                  ))}
                </div>
                {page.detail && (
                  <figure className={styles.detailPhoto} data-reveal>
                    <button
                      type="button"
                      onClick={() => setMedia(page.detail)}
                      aria-label={`Agrandir : ${page.detail.caption}`}
                    >
                      <img
                        src={page.detail.src}
                        alt={page.detail.alt}
                        width="900"
                        height="600"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                    <figcaption>{page.detail.caption}</figcaption>
                  </figure>
                )}
                <a href="/realisations/" className={styles.textLink}>
                  Explorer nos réalisations <Arrow />
                </a>
              </div>
            </div>
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
              {page.custom.map(([title, text], i) => (
                <article key={title} data-reveal>
                  <div className={styles.customMark} aria-hidden="true">
                    {["Aa", "◈", "+"][i]}
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className={styles.brandCallout}>
              <p>
                Vous imaginez une expérience de marque ?{" "}
                <span>
                  Habillage et scénographie spécifiques sont étudiés sur mesure.
                </span>
              </p>
              <a href="/evenements/corporates/" className={styles.textLink}>
                Découvrir l’univers entreprise <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          className={`marketing-machine ${styles.contexts}`}
          aria-label="Pour votre événement"
        >
          <div className={styles.wrap}>
            {page.contexts.map(([title, text, href]) => (
              <a key={title} href={href}>
                <h2>
                  {title} <Arrow />
                </h2>
                <p>{text}</p>
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
                Une offre claire.
                <br />
                Un événement bien préparé.
              </Heading>
              <p className={styles.offerIntro}>
                Choisissez votre durée, partagez votre date et votre lieu. Nous
                précisons les conditions et les options dans une proposition
                personnalisée.
              </p>
              <a href={page.bookingUrl} className={styles.primary}>
                Recevoir ma proposition <Arrow />
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
              <h3>Ce qui est prévu</h3>
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
          className={`marketing-machine ${styles.section} ${styles.light}`}
        >
          <div className={styles.wrap}>
            <Aliases page={page} section="installation" />
            <Heading
              eyebrow="Avant le jour J"
              text="Nous vérifions les contraintes du lieu et les détails de votre événement avant de confirmer l’installation."
            >
              Le bon emplacement.
              <br />
              Le bon accompagnement.
            </Heading>
            <div className={styles.technical}>
              {page.technical.map(([title, text], i) => (
                <article key={title} data-reveal>
                  <span className={styles.index}>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <ol className={styles.steps}>
              <li>
                <strong>Votre projet</strong>
                <span>Date, lieu, invités et envies.</span>
              </li>
              <li>
                <strong>Notre proposition</strong>
                <span>Formule, personnalisation et logistique.</span>
              </li>
              <li>
                <strong>Votre événement</strong>
                <span>Une installation préparée en amont.</span>
              </li>
            </ol>
            <p className={styles.area}>
              Paris, Melun et toute l’Île-de-France.{" "}
              <a href="/zones-intervention/">
                Consulter les zones d’intervention <Arrow />
              </a>
            </p>
          </div>
        </section>

        <section
          id="questions"
          className={`marketing-machine ${styles.section} ${styles.faq}`}
        >
          <div className={`${styles.wrap} ${styles.faqGrid}`}>
            <Heading eyebrow="Les détails qui comptent">
              Vos questions,
              <br />
              nos réponses.
            </Heading>
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
            <Heading eyebrow="Trouvez votre expérience">
              Une autre façon de créer des souvenirs.
            </Heading>
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
                        {other.name} <Arrow />
                      </h3>
                      <p>{other.promise}</p>
                    </div>
                  </a>
                );
              })}
            </div>
            <a href="/prestations/" className={styles.textLink}>
              Comparer toutes les expériences <Arrow />
            </a>
          </div>
        </section>

        <section
          className={`marketing-machine ${styles.final}`}
          aria-labelledby="machine-final-title"
        >
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>La suite commence avec vous</p>
            <h2 id="machine-final-title">
              Et si on créait
              <br />
              <span>vos prochains souvenirs ?</span>
            </h2>
            <p>Une date, un lieu, une envie. Parlons de votre {page.name}.</p>
            <a href={page.bookingUrl} className={styles.primary}>
              Imaginer mon événement <Arrow />
            </a>
            <a href={siteConfig.phoneHref} className={styles.textLink}>
              Parlons-en au {siteConfig.phoneLabel}
            </a>
          </div>
        </section>
      </div>
      <MediaDialog media={media} onClose={() => setMedia(null)} />
    </Layout>
  );
}

const aiPath = "/images/ai-from-real/";
