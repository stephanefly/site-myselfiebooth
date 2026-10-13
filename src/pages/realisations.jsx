import Layout from "../components/Layout";
import { siteConfig } from "../data/site";
import { instagramMedia, instagramUrl } from "../data/instagramMedia";
import { eventArchivePhotos, eventArchiveVideos } from "../data/eventArchive";
import { portfolioDetailImages, portfolioMotionGifs, portfolioVideos } from "../data/portfolioMedia";

const reservedElsewhere = new Set([
  "/images/event-archive/goldbooth-gala.webp",
  "/images/realisations-machines/tirages-gala.webp",
  "/images/event-archive/video-posters/invites-en-fete.webp",
  "/images/vogue-real/vogue-booth-anniversaire-card.webp",
  "/images/realisations-machines/photobooth-noel.webp",
  "/images/realisations-machines/miroirbooth-invites.webp",
  "/images/realisations/sephora-360booth.webp",
  "/images/airbooth.webp",
  "/images/ipadbooth.webp",
  "/images/vogue-real/vogue-booth-mariage-card.webp",
  "/images/realisations-machines/duo-photobooth-miroir.webp",
  "/images/event-archive/brice-equipe-01.webp",
  "/images/event-archive/brice-tirages.webp",
  "/images/event-archive/video-posters/360-red-carpet.webp",
  "/images/event-archive/video-posters/miroirbooth-installation.webp",
  "/images/realisations-machines/photobooth-miroir-espace-eden.webp",
  "/images/event-archive/video-posters/voguebooth-soiree.webp",
  "/images/event-archive/caftan-portrait-01.webp",
  "/images/event-archive/anogini-photobooth-01.webp",
  "/images/phonebooth.webp",
  "/images/realisations-machines/fabrication-porte-cles-photo.webp",
  "/images/option-magnet-premium.webp",
  "/images/option-magnet-simple.webp",
  "/images/panneau-fontaine.webp",
  "/images/livre-dor-video.webp",
  "/images/3d Holo-site.webp",
  "/images/Livre-d'or.webp",
  "/images/Welcomeboard.webp",
  "/images/fond 360.webp",
  "/images/photographe-voguebooth.webp",
  "/images/impression-voguebooth.webp",
  "/images/decoration-voguebooth.webp",
  "/images/equipe/portrait-stephane-faure.webp",
  "/images/equipe/conception-en-famille.webp",
  "/images/equipe/premier-photobooth-en-fabrication.webp",
  "/images/equipe/fabrication-photobooth-en-famille.webp",
  "/images/equipe/stephane-sur-la-route.webp",
  "/images/equipe/equipe-myselfiebooth.webp",
  "/images/equipe/bras-droit-terrain.webp",
]);

const rawMedia = [
  ...eventArchivePhotos.map((item) => ({ ...item, sourceType: "Reportage réel" })),
  ...portfolioDetailImages.map((item) => ({ ...item, sourceType: "Réalisation réelle" })),
  ...portfolioVideos.map((item) => ({
    sourceId: `${item.sourceId}-poster`, image: item.poster, title: item.title, category: item.category,
    alt: `${item.title}, aperçu réel MySelfieBooth`, sourceType: "Aperçu vidéo réel",
  })),
  ...eventArchiveVideos.map((item) => ({
    sourceId: `${item.sourceId}-poster`, image: item.poster, title: item.title, category: item.category,
    alt: `${item.title}, aperçu réel MySelfieBooth`, sourceType: "Aperçu vidéo réel",
  })),
  ...instagramMedia.map((item) => ({
    sourceId: item.sourceId, image: item.src, title: item.title, category: item.category,
    alt: item.alt, href: item.href, sourceType: "Instagram réel",
  })),
  ...portfolioMotionGifs.map((item) => ({ ...item, sourceType: "Séquence réelle" })),
];

function uniqueAvailableMedia(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item.image || item.image.includes("/ai-from-real/") || reservedElsewhere.has(item.image) || seen.has(item.image)) return false;
    seen.add(item.image);
    return true;
  });
}

const availableMedia = uniqueAvailableMedia(rawMedia);
const hero = availableMedia[0] || null;
const gallery = hero ? availableMedia.slice(1) : availableMedia;

export default function Realisations() {
  return (
    <Layout metaProps={{
      title: "Réalisations réelles Photobooth, 360 & Vogue | MySelfieBooth",
      description: "Galerie de prestations réelles MySelfieBooth. Chaque photo de contenu est réservée à un seul emplacement sur le site.",
      ogImage: hero?.image,
      ogUrl: "/realisations/",
    }}>
      <main className="unique-real-page">
        <header className="unique-real-hero">
          <div className="unique-real-container unique-real-hero-grid">
            <div>
              <p className="unique-real-eyebrow">100 % terrain</p>
              <h1>Nos vraies prestations, sans recycler les mêmes images.</h1>
              <p>Les médias déjà utilisés pour présenter une machine, un pack, une option ou notre histoire sont exclus de cette galerie. Ici, chaque visuel apparaît une seule fois.</p>
              <div className="unique-real-actions"><a href="#galerie">Voir la galerie</a><a href={siteConfig.quoteUrl}>Demander un devis</a></div>
            </div>
            {hero ? <figure><img src={hero.image} alt={hero.alt || hero.title} width="900" height="1125" fetchPriority="high" /><figcaption>{hero.title}</figcaption></figure> : null}
          </div>
        </header>

        <section id="galerie" className="unique-real-gallery">
          <div className="unique-real-container">
            <div className="unique-real-heading">
              <p className="unique-real-eyebrow">Banque réelle</p>
              <h2>{gallery.length} autres médias uniques</h2>
              <p>Prestations, séquences Instagram et coulisses restantes. Aucun fichier de cette grille n'est répété ailleurs dans cette page.</p>
            </div>
            <div className="unique-real-grid">
              {gallery.map((item, index) => (
                <figure key={`${item.sourceId}-${item.image}`}>
                  {item.href ? <a href={item.href} target="_blank" rel="noreferrer"><img src={item.image} alt={item.alt || item.title} loading={index < 4 ? "eager" : "lazy"} width="720" height="900" /></a> : <img src={item.image} alt={item.alt || item.title} loading={index < 4 ? "eager" : "lazy"} width="720" height="900" />}
                  <figcaption><span>{item.sourceType}</span><small>{item.category}</small><strong>{item.title}</strong></figcaption>
                </figure>
              ))}
            </div>
            <div className="unique-real-instagram"><div><p className="unique-real-eyebrow">Nouvelles prestations</p><h2>La suite est publiée sur Instagram</h2></div><a href={instagramUrl} target="_blank" rel="noreferrer">@myselfiebooth_paris</a></div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .unique-real-page{background:#f6f2e8;color:#17130a}.unique-real-container{width:min(1180px,calc(100% - 36px));margin:auto}.unique-real-hero{background:#11100d;color:#fff;padding:72px 0}.unique-real-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}.unique-real-eyebrow{color:#c9a24d;font-size:.78rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.unique-real-hero h1{font-size:clamp(2.7rem,5vw,5rem);line-height:.98;margin:12px 0 20px;letter-spacing:-.04em}.unique-real-hero p{max-width:720px;line-height:1.7;color:#d4d0c8}.unique-real-hero figure,.unique-real-grid figure{margin:0;background:#fff;border-radius:22px;overflow:hidden}.unique-real-hero figure img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block}.unique-real-hero figure figcaption{padding:12px 16px;color:#17130a}.unique-real-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}.unique-real-actions a,.unique-real-instagram a{display:inline-flex;padding:14px 20px;border-radius:999px;background:#c9a24d;color:#111;text-decoration:none;font-weight:900}.unique-real-gallery{padding:72px 0}.unique-real-heading{max-width:760px;margin-bottom:30px}.unique-real-heading h2,.unique-real-instagram h2{font-size:clamp(2rem,4vw,3.5rem);line-height:1;margin:8px 0 14px}.unique-real-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.unique-real-grid figure{border:1px solid rgba(0,0,0,.08)}.unique-real-grid img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover}.unique-real-grid figcaption{padding:14px 16px;display:grid;gap:4px}.unique-real-grid figcaption span{color:#9a7721;font-size:.72rem;font-weight:900;text-transform:uppercase}.unique-real-grid figcaption small{color:#766d60}.unique-real-instagram{margin-top:48px;padding:28px;border-radius:22px;background:#17130a;color:#fff;display:flex;justify-content:space-between;align-items:center;gap:24px}.unique-real-instagram h2{margin-bottom:0}@media(max-width:800px){.unique-real-hero-grid{grid-template-columns:1fr}.unique-real-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.unique-real-instagram{align-items:flex-start;flex-direction:column}}@media(max-width:540px){.unique-real-grid{grid-template-columns:1fr}}
      `}</style>
    </Layout>
  );
}
