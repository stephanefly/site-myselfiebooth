import { eventArchivePhotos, eventArchiveVideos } from "../data/eventArchive";

export default function EventArchiveGallery({ photosOnly = false, videosOnly = false }) {
  return (
    <div className="event-archive">
      {!photosOnly ? (
        <div className="event-archive-video-grid">
          {eventArchiveVideos.map((item) => (
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
      ) : null}

      {!videosOnly ? (
        <div className="event-archive-photo-grid">
          {eventArchivePhotos.map((item) => (
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
      ) : null}
    </div>
  );
}
