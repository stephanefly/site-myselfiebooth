import { aiEventGallery } from "../data/aiEventGallery";

export default function AiEventGallery() {
  return (
    <div className="ai-event-gallery">
      <div className="ai-event-gallery-grid">
        {aiEventGallery.map((item) => (
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
    </div>
  );
}
