import { useState } from "react";
import { instagramMedia, instagramUrl } from "../data/instagramMedia";

export default function InstagramMediaWall({ compact = false }) {
  const initialCount = compact ? 8 : 12;
  const [expanded, setExpanded] = useState(false);
  const visibleMedia = expanded ? instagramMedia : instagramMedia.slice(0, initialCount);

  return (
    <div className={`instagram-wall ${compact ? "is-compact" : ""}`}>
      <div className="instagram-wall-grid">
        {visibleMedia.map((item, index) => (
          <a
            key={item.file}
            className="instagram-wall-card"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${item.title} — voir MySelfieBooth sur Instagram`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              width="540"
              height="675"
            />
            <span className="instagram-wall-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="instagram-wall-caption">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
            </span>
          </a>
        ))}
      </div>

      <div className="instagram-wall-actions">
        {!expanded ? (
          <button type="button" onClick={() => setExpanded(true)}>
            Voir les {instagramMedia.length} moments réels
          </button>
        ) : (
          <button type="button" onClick={() => setExpanded(false)}>
            Réduire la galerie
          </button>
        )}
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          Suivre @myselfiebooth_paris
        </a>
      </div>
    </div>
  );
}
