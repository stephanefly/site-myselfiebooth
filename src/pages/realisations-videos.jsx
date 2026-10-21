import { useRef, useState } from "react";
import Layout from "../components/Layout";
import { eventArchiveVideos } from "../data/eventArchive";
import { portfolioVideos } from "../data/portfolioMedia";
import { siteConfig } from "../data/site";

const videos = [...eventArchiveVideos, ...portfolioVideos].filter(
  (item, index, items) =>
    items.findIndex((other) => other.video === item.video) === index,
);

export default function RealisationsVideos() {
  const players = useRef({});
  const [started, setStarted] = useState({});
  const [failed, setFailed] = useState({});
  const markFailed = (id) =>
    setFailed((current) => ({ ...current, [id]: true }));

  const play = (id) => {
    const player = players.current[id];
    if (!player) return;
    player
      .play()
      .then(() => player.focus({ preventScroll: true }))
      .catch((error) => {
        if (error.name !== "AbortError") markFailed(id);
      });
  };

  return (
    <Layout
      metaProps={{
        title: "Vidéos réelles Photobooth & 360 Booth | MySelfieBooth",
        description:
          "Découvrez des vidéos réelles de prestations MySelfieBooth : 360 Booth, Photobooth, Miroirbooth, Vogue Booth, Phonebooth et souvenirs en événement.",
        ogUrl: "/realisations-videos/",
        includeOrganization: true,
      }}
    >
      <div className="real-videos-page">
        <header className="real-videos-hero">
          <div className="real-videos-container">
            <p>Vidéos du terrain</p>
            <h1>Nos prestations réelles en mouvement.</h1>
            <span>
              {videos.length} vidéos pour découvrir nos installations, les
              invités en action et la fabrication des souvenirs : Photobooth,
              Miroirbooth, 360, Vogue Booth et coulisses.
            </span>
            <div className="real-videos-actions">
              <a href="/realisations/">Voir les photos réelles</a>
              <a className="secondary" href={siteConfig.quoteUrl}>
                Demander un devis
              </a>
            </div>
          </div>
        </header>
        <section className="real-videos-section marketing-real-videos">
          <div className="real-videos-container">
            <div className="real-videos-grid">
              {videos.map((item) => (
                <article key={item.sourceId} className="real-video-card">
                  <div className="real-video-player">
                    <video
                      ref={(element) => {
                        players.current[item.sourceId] = element;
                      }}
                      onPlay={() =>
                        setStarted((current) => ({
                          ...current,
                          [item.sourceId]: true,
                        }))
                      }
                      onError={() => markFailed(item.sourceId)}
                      controls
                      controlsList="nodownload"
                      muted
                      playsInline
                      preload="none"
                      poster={item.poster}
                      data-no-load-motion
                      aria-label={item.title}
                    >
                      <source
                        src={item.video}
                        type="video/mp4"
                        onError={() => markFailed(item.sourceId)}
                      />
                    </video>
                    {!started[item.sourceId] && !failed[item.sourceId] && (
                      <button
                        type="button"
                        className="real-video-play"
                        aria-label={`Lire la vidéo : ${item.title}`}
                        onClick={() => play(item.sourceId)}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="m8 4 12 8-12 8z" />
                        </svg>
                        Lire la vidéo
                      </button>
                    )}
                    {failed[item.sourceId] && (
                      <p className="real-video-error" role="status">
                        Lecture indisponible ici.
                        <a href={item.video}>Ouvrir la vidéo</a>
                      </p>
                    )}
                  </div>
                  <div className="real-video-caption">
                    <small>{item.category}</small>
                    <h2>{item.title}</h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .real-videos-page {
          background: #f7f4ed;
          color: #17130a;
        }
        .real-videos-container {
          width: min(1120px, calc(100% - 32px));
          margin: auto;
        }
        .real-videos-hero {
          padding: 72px 0 54px;
          background: #11100d;
          color: #fff;
        }
        .real-videos-hero p {
          margin: 0 0 12px;
          color: #c9a24d;
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .real-videos-hero h1 {
          max-width: 900px;
          margin: 0 0 18px;
          font-size: clamp(2.6rem, 6vw, 5.4rem);
          line-height: 0.98;
          letter-spacing: -0.045em;
        }
        .real-videos-hero span {
          display: block;
          max-width: 760px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 1.05rem;
          line-height: 1.65;
        }
        .real-videos-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }
        .real-videos-actions a {
          display: inline-flex;
          min-height: 48px;
          padding: 0 20px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #c9a24d;
          color: #111;
          font-weight: 900;
          text-decoration: none;
        }
        .real-videos-actions .secondary {
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          color: #fff;
        }
        .real-videos-section {
          padding: 64px 0 80px;
        }
        .real-videos-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .real-video-card {
          overflow: hidden;
          border: 1px solid rgba(23, 19, 10, 0.08);
          border-radius: 20px;
          background: #fff;
        }
        .real-video-card video {
          width: 100%;
          aspect-ratio: 4/3;
          display: block;
          object-fit: contain;
          background: #17130a;
        }
        .real-video-player {
          position: relative;
        }
        .real-video-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 12px 18px;
          border: 1px solid #d6b774;
          border-radius: 999px;
          background: #d6b774;
          color: #15160f;
          font:
            600 13px/1.4 "Roboto",
            sans-serif;
          white-space: nowrap;
          cursor: pointer;
        }
        .real-video-play:hover {
          background: #ecd29a;
        }
        .real-video-play:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
        }
        .real-video-error {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
          margin: 0;
          background: #17130af2;
          color: #fff;
          font-size: 14px;
          text-align: center;
        }
        .real-video-error a {
          color: #e5c46b;
          text-underline-offset: 4px;
        }
        .real-video-caption {
          padding: 18px 20px 21px;
        }
        .real-video-card small {
          color: #80602c;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .real-video-card h2 {
          margin: 6px 0 0;
          font-size: 1.15rem;
        }
        @media (max-width: 720px) {
          .real-videos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}
