import { useState } from "react";
import VideoSurface from "./VideoSurface";
import { Arrow, Play } from "./icons";
import styles from "./Showroom.module.css";

export function Stories({ stories, byId, onOpen }) {
  return (
    <section
      className={`marketing-realisations ${styles.section} ${styles.stories}`}
      id="histoires"
      aria-labelledby="stories-title"
    >
      <div className={styles.wrap}>
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>03 / Nos plus belles histoires</p>
            <h2 id="stories-title">
              Des visages.
              <br />
              <em>Des histoires à partager.</em>
            </h2>
          </div>
          <p>
            Un mariage, un gala, une identité. Trois regards sur les événements
            que nous accompagnons.
          </p>
        </header>
        <div className={styles.storyGrid}>
          {stories.map((story, index) => {
            const media = byId[story.mediaId];
            return (
              <article className={styles.story} key={story.mediaId}>
                <button
                  type="button"
                  className={styles.storyMedia}
                  onClick={(event) =>
                    onOpen(
                      media.id,
                      event.currentTarget,
                      stories.map((s) => byId[s.mediaId]),
                      story.supplements,
                    )
                  }
                  aria-label={`Découvrir l’histoire : ${story.title}`}
                >
                  <VideoSurface media={media} poster={media.variants?.story} />
                  <span className={styles.storyNumber}>0{index + 1}</span>
                  <span className={styles.roundPlay}>
                    <Play />
                  </span>
                </button>
                <div className={styles.storyCopy}>
                  <p className={styles.eyebrow}>{story.eyebrow}</p>
                  <h3>{story.title}</h3>
                  <p>{story.text}</p>
                  <a className={styles.textLink} href={story.serviceHref}>
                    {story.serviceLabel}
                    <Arrow />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export function CorporateProof({ media, logos, companyUrl, onOpen }) {
  return (
    <section
      className={`marketing-realisations ${styles.section} ${styles.corporate}`}
      id="entreprises"
      aria-labelledby="brands-title"
    >
      <div className={styles.wrap}>
        <div className={styles.corporateIntro}>
          <div>
            <p className={styles.eyebrow}>04 / L’expérience de marque</p>
            <h2 id="brands-title">
              Votre marque.
              <br />
              <em>Une expérience qui rassemble.</em>
            </h2>
            <p>
              Chez Sephora Champs-Élysées, l’animation 360 prend place au cœur
              de la boutique. Une autre façon de faire vivre l’identité d’une
              marque.
            </p>
            <a
              href={companyUrl}
              className={styles.primaryButton}
              data-event="corporate_click"
            >
              Organiser un événement d’entreprise <Arrow />
            </a>
          </div>
          <button
            type="button"
            className={styles.corporateMedia}
            onClick={(event) => onOpen(media.id, event.currentTarget, [media])}
            aria-label="Voir l’expérience 360 chez Sephora"
          >
            <VideoSurface media={media} />
            <span className={styles.roundPlay}>
              <Play />
            </span>
            <span className={styles.corporateCaption}>
              Sephora · Champs-Élysées
            </span>
          </button>
        </div>
        <p className={styles.logoHeading}>Ils nous font confiance.</p>
        <div className={styles.logos} aria-label="Nos références clients">
          {logos.map((logo) => (
            <div key={logo.name}>
              <img
                src={logo.src}
                alt={`Logo ${logo.name}`}
                width="256"
                height="256"
                loading="lazy"
                decoding="async"
                data-no-load-motion
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function GuestMoments({ media, onOpen }) {
  const [hovered, setHovered] = useState(null);
  return (
    <section
      className={`marketing-realisations ${styles.section} ${styles.guests}`}
      aria-labelledby="guests-title"
    >
      <div className={styles.wrap}>
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>05 / Du côté des invités</p>
            <h2 id="guests-title">
              Les meilleurs moments
              <br />
              <em>ne se commandent pas.</em>
            </h2>
          </div>
          <p>
            On se retrouve, on prend la pose, on repart avec un souvenir. Le
            reste se passe entre vous.
          </p>
        </header>
        <div className={styles.guestRail} aria-label="Les moments des invités">
          {media.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.guestCard}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setHovered(item.id);
              }}
              onPointerLeave={() => setHovered(null)}
              onClick={(event) => onOpen(item.id, event.currentTarget, media)}
              aria-label={`Lire : ${item.title}`}
            >
              <VideoSurface
                media={item}
                poster={item.variants?.guest}
                hovered={hovered === item.id}
              />
              <span className={styles.cardShade} />
              <span className={styles.guestPlay}>
                <Play />
              </span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Backstage({ media, onOpen }) {
  return (
    <section
      className={`marketing-realisations ${styles.section} ${styles.backstage}`}
      id="coulisses"
      aria-labelledby="backstage-title"
    >
      <span id="tirages" className={styles.anchor} />
      <div className={styles.wrap}>
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>
              06 / Nos coulisses, notre expertise
            </p>
            <h2 id="backstage-title">
              Vous profitez de votre événement.
              <br />
              <em>Nous maîtrisons les détails.</em>
            </h2>
          </div>
          <p>
            Préparer les équipements, installer, personnaliser les souvenirs :
            le travail commence avant l’arrivée des invités.
          </p>
        </header>
        <div className={styles.backstageGrid}>
          {media.map((item, index) => (
            <article key={item.id}>
              <button
                type="button"
                className={styles.backstageMedia}
                onClick={(event) => onOpen(item.id, event.currentTarget, media)}
                aria-label={`Voir les coulisses : ${item.title}`}
              >
                <VideoSurface media={item} poster={item.variants?.backstage} />
                <span className={styles.roundPlay}>
                  <Play />
                </span>
              </button>
              <div className={styles.backstageCaption}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {index === 0
                      ? "Une installation préparée et testée avant de lancer l’animation."
                      : "Des portraits jusqu’au souvenir fini, les gestes derrière les porte-clés photo."}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className={styles.textLink} href="/a-propos/">
          Rencontrer l’équipe <Arrow />
        </a>
      </div>
    </section>
  );
}
export function Experiences({ items, byId }) {
  return (
    <section
      className={`marketing-realisations ${styles.section} ${styles.experiences}`}
      id="machines"
      aria-labelledby="experience-title"
    >
      <div className={styles.wrap}>
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>08 / À vous de choisir</p>
            <h2 id="experience-title">
              Quelle expérience
              <br />
              <em>vous ressemble ?</em>
            </h2>
          </div>
          <p>
            Vous avez aimé les réalisations. Découvrez l’animation qui donnera
            le ton à votre événement.
          </p>
        </header>
        <div className={styles.experienceGrid}>
          {items.map((item) => {
            const media = byId[item.mediaId];
            return (
              <article key={item.key}>
                <a
                  href={item.href}
                  className={styles.experienceImage}
                  aria-label={`Découvrir le ${item.title}`}
                >
                  <img
                    src={media.variants?.experience || media.poster}
                    alt={`${item.title} MySelfieBooth en situation réelle`}
                    width={media.delivery.width}
                    height={media.delivery.height}
                    loading="lazy"
                    decoding="async"
                    data-no-load-motion
                  />
                  <span>
                    <Arrow />
                  </span>
                </a>
                <h3>{item.title}</h3>
                <strong>{item.benefit}</strong>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
