import { useMemo, useState } from "react";
import VideoSurface from "./VideoSurface";
import {
  availableFilters,
  filterMedia,
  formatDuration,
  trackPortfolio,
} from "./model.mjs";
import { Arrow, Play } from "./icons";
import styles from "./Showroom.module.css";
export function PortfolioCard({ media, index, onOpen, poster }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      data-portfolio-entry={media.id}
      className={`${styles.card} ${index === 0 || index === 7 ? styles.featuredCard : ""}`}
    >
      <button
        type="button"
        className={styles.cardButton}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setHovered(true);
        }}
        onPointerLeave={() => setHovered(false)}
        onClick={(event) => onOpen(media.id, event.currentTarget)}
        aria-label={`${media.type === "video" ? "Lire le film" : "Agrandir la photo"} : ${media.title}`}
      >
        <VideoSurface media={media} poster={poster} hovered={hovered} />
        <span className={styles.cardShade} />
        <span className={styles.cardType}>
          {media.type === "video" ? (
            <>
              <Play />
              Film · {formatDuration(media.duration)}
            </>
          ) : (
            "Photographie"
          )}
        </span>
        <span className={styles.cardCaption}>
          <small>
            {media.machine ||
              (media.tags.includes("coulisses")
                ? "Les coulisses"
                : "Le souvenir")}
          </small>
          <strong>{media.title}</strong>
          <span className={styles.discover}>
            Découvrir <Arrow />
          </span>
        </span>
      </button>
    </article>
  );
}
export default function PortfolioGallery({ items, initialCount, onOpen }) {
  const [filter, setFilter] = useState("all"),
    [count, setCount] = useState(initialCount);
  const filters = useMemo(() => availableFilters(items), [items]);
  const filtered = useMemo(() => filterMedia(items, filter), [items, filter]);
  const visible = filtered.slice(0, count);
  const changeFilter = (value) => {
    if (filter === value) return;
    setFilter(value);
    setCount(initialCount);
    trackPortfolio("portfolio_filter", value);
  };
  return (
    <section
      className={`marketing-realisations ${styles.section} ${styles.portfolio}`}
      id="films"
      aria-labelledby="portfolio-title"
    >
      <div className={styles.wrap}>
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>02 / Le portfolio</p>
            <h2 id="portfolio-title">
              Des moments qui se vivent.
              <br />
              <em>Et qui se revivent.</em>
            </h2>
          </div>
          <p>
            Entrez dans la fête, découvrez les machines en action et les
            souvenirs qui restent.
          </p>
        </header>
        <div className={styles.filterBar}>
          <div
            className={styles.filters}
            role="group"
            aria-label="Filtrer les réalisations par événement ou animation"
          >
            {filters.map((item) => (
              <button
                type="button"
                key={item.id}
                aria-pressed={filter === item.id}
                aria-controls="showroom-portfolio-grid"
                onClick={() => changeFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span
            className={styles.resultCount}
            aria-live="polite"
            aria-atomic="true"
          >
            {filtered.length} moment{filtered.length > 1 ? "s" : ""}
          </span>
        </div>
        <div className={styles.gallery} id="showroom-portfolio-grid">
          {visible.map((media, index) => (
            <PortfolioCard
              key={media.id}
              media={media}
              index={index}
              onOpen={(id, trigger) => onOpen(id, trigger, filtered)}
            />
          ))}
        </div>
        <noscript>
          <div className={styles.directLinks}>
            <h3>Les réalisations en accès direct</h3>
            <ul>
              {items.map((media) => (
                <li key={media.id}>
                  <a href={media.src}>{media.title}</a> — {media.description}
                </li>
              ))}
            </ul>
          </div>
        </noscript>
        <div className={styles.galleryBottom}>
          {count < filtered.length ? (
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => {
                setCount((value) => value + initialCount);
                trackPortfolio("portfolio_load_more", filter);
              }}
            >
              Voir plus de réalisations <span aria-hidden="true">+</span>
            </button>
          ) : (
            <p>
              Chaque moment a son histoire. Le prochain pourrait être le vôtre.
            </p>
          )}
          <a
            href="/contact/"
            className={styles.textLink}
            data-event="contact_click"
          >
            Parlons de votre projet <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
