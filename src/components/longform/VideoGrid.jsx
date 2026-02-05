export default function VideoGrid({ videos = [] }) {
  return (
    <div className="videos">
      {videos.map((video) => (
        <figure key={video.src} className="video-card">
          <video
            controls
            preload="metadata"
            poster={video.poster || "/placeholders/placeholder-video.jpg"}
            className="video"
          >
            <source src={video.src} type={video.type || "video/mp4"} />
          </video>
          <figcaption>{video.title}</figcaption>
        </figure>
      ))}
      <style jsx>{`
        .videos {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }
        .video-card {
          margin: 0;
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
        }
        .video {
          width: 100%;
          height: auto;
          display: block;
        }
        figcaption {
          padding: 0.9rem 1rem 1.2rem;
          font-weight: 600;
          color: #3a2a07;
        }
      `}</style>
    </div>
  );
}
