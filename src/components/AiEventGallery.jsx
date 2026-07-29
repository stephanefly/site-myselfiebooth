import { useState } from "react";
import { aiEventGallery } from "../data/aiEventGallery";

const INITIAL_ITEMS = 12;

export default function AiEventGallery() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? aiEventGallery : aiEventGallery.slice(0, INITIAL_ITEMS);

  return (
    <div className="ai-event-gallery">
      <div className="ai-event-gallery-grid">
        {visibleItems.map((item) => (
          <figure className={`ai-event-card ${item.animated ? "is-animated" : ""}`} key={item.id}>
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              width={item.width}
              height={item.height}
            />
            {item.animated ? <span className="ai-event-motion-label">GIF IA</span> : null}
            <figcaption>
              <small>{item.category}</small>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="ai-event-gallery-actions">
        <button type="button" onClick={() => setExpanded((value) => !value)}>
          {expanded ? "Réduire la galerie" : `Voir les ${aiEventGallery.length} créations IA`}
        </button>
      </div>
    </div>
  );
}
