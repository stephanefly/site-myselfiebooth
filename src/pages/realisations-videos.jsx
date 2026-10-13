import Layout from "../components/Layout";
import { eventArchiveVideos } from "../data/eventArchive";
import { siteConfig } from "../data/site";

export default function RealisationsVideos() {
  return (
    <Layout
      metaProps={{
        title: "Vidéos réelles Photobooth & 360 Booth | MySelfieBooth",
        description: "Découvrez des vidéos réelles de prestations MySelfieBooth : 360 Booth, Photobooth, Miroirbooth, Vogue Booth, Phonebooth et souvenirs en événement.",
        ogUrl: "/realisations-videos/",
        includeOrganization: true,
      }}
    >
      <main className="real-videos-page">
        <header className="real-videos-hero">
          <div className="real-videos-container">
            <p>Vidéos du terrain</p>
            <h1>Nos prestations réelles en mouvement.</h1>
            <span>Cette page utilise uniquement les fichiers vidéo. Les images fixes associées sont réservées à leur emplacement unique sur le site.</span>
            <div className="real-videos-actions"><a href="/realisations/">Voir les photos réelles</a><a className="secondary" href={siteConfig.quoteUrl}>Demander un devis</a></div>
          </div>
        </header>
        <section className="real-videos-section">
          <div className="real-videos-container">
            <div className="real-videos-grid">
              {eventArchiveVideos.map((item) => (
                <article key={item.sourceId} className="real-video-card">
                  <video controls controlsList="nodownload" muted playsInline preload="metadata" aria-label={item.title}>
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <div><small>{item.category}</small><h2>{item.title}</h2></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .real-videos-page{background:#f7f4ed;color:#17130a}.real-videos-container{width:min(1120px,calc(100% - 32px));margin:auto}.real-videos-hero{padding:72px 0 54px;background:#11100d;color:#fff}.real-videos-hero p{margin:0 0 12px;color:#c9a24d;font-size:.8rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.real-videos-hero h1{max-width:900px;margin:0 0 18px;font-size:clamp(2.6rem,6vw,5.4rem);line-height:.98;letter-spacing:-.045em}.real-videos-hero span{display:block;max-width:760px;color:rgba(255,255,255,.72);font-size:1.05rem;line-height:1.65}.real-videos-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.real-videos-actions a{display:inline-flex;min-height:48px;padding:0 20px;align-items:center;justify-content:center;border-radius:999px;background:#c9a24d;color:#111;font-weight:900;text-decoration:none}.real-videos-actions .secondary{border:1px solid rgba(255,255,255,.2);background:transparent;color:#fff}.real-videos-section{padding:64px 0 80px}.real-videos-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}.real-video-card{overflow:hidden;border:1px solid rgba(23,19,10,.08);border-radius:20px;background:#fff}.real-video-card video{width:100%;aspect-ratio:4/3;display:block;object-fit:cover;background:#17130a}.real-video-card div{padding:18px 20px 21px}.real-video-card small{color:#9a7721;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.real-video-card h2{margin:6px 0 0;font-size:1.15rem}@media(max-width:720px){.real-videos-grid{grid-template-columns:1fr}}
      `}</style>
    </Layout>
  );
}
