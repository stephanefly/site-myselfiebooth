import { useState } from "react";
import { eventArchivePhotos, eventArchiveVideos } from "../data/eventArchive";

export default function EventArchiveGallery() {
  const [expanded, setExpanded] = useState(false);
  const visibleVideos = expanded ? eventArchiveVideos : eventArchiveVideos.slice(0, 4);
  const visiblePhotos = expanded ? eventArchivePhotos : eventArchivePhotos.slice(0, 12);
  const mediaCount = eventArchiveVideos.length + eventArchivePhotos.length;

  return (
    <div className="event-archive">
      <div className="event-archive-video-grid">
        {visibleVideos.map((item) => (
          <article className="event-archive-video-card" key={item.slug}>
            <video
              controls
              controlsList="nodownload"
              muted
              playsInline
              preload="none"
              poster={item.poster}
              aria-label={item.title}
            >
              <source src={item.video} type="video/mp4" />
            </video>
            <div>
              <small>{item.category}</small>
              <strong>{item.title}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="event-archive-photo-grid">
        {visiblePhotos.map((item) => (
          <figure className="event-archive-photo-card" key={item.slug}>
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              width="900"
              height="1125"
            />
            <figcaption>
              <small>{item.category}</small>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="event-archive-actions">
        <button type="button" onClick={() => setExpanded((value) => !value)}>
          {expanded ? "Réduire la galerie" : `Voir les ${mediaCount} nouveaux médias`}
        </button>
      </div>
    </div>
  );
}
