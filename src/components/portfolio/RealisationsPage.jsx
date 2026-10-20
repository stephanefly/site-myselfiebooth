import { useEffect, useRef } from "react";
import Layout from "../Layout";
import { breadcrumbJsonLd, siteConfig } from "../../data/site";
import { googleReviews } from "../../data/home";
import { instagramUrl } from "../../data/instagramMedia";

// This collection deliberately uses only original event photographs and recordings.
// Source details and extracted frame timestamps are documented in docs/design/realisations-sources.md.
const films = [
  { title: "Silass & Brice", label: "Un mariage qui rassemble", text: "L’entrée des mariés, les animations et toute l’énergie de la réception. Un aperçu de la journée, tel qu’elle a été vécue.", video: "/videos/instagram/reel-4-Da-0z-to0VL.mp4", poster: "/images/realisations-2026/silass-brice.webp", source: "https://www.instagram.com/p/Da-0z-to0VL/", tag: "Reportage de mariage" },
  { title: "Lydia & Vincent", label: "Leur couverture, leur histoire", text: "Une robe, un costume, deux sourires et un décor Vogue personnalisé pour leur mariage. Découvrez le rendu dans la vraie salle.", video: "/videos/vogue-real/vogue-booth-mariage.mp4", poster: "/images/realisations-2026/lydia-vincent.webp", source: instagramUrl, tag: "Vogue Booth" },
  { title: "Alexandra & Loïc", label: "Complices devant l’objectif", text: "Des poses spontanées et un habillage à leurs noms : le Miroirbooth devient un petit rendez-vous au cœur de la fête.", video: "/videos/realisations-machines/miroirbooth-invites.mp4", poster: "/images/realisations-machines/miroirbooth-invites.webp", source: instagramUrl, tag: "Miroirbooth" },
  { title: "L’énergie du 360", label: "Un tour, des rires, un souvenir", text: "La plateforme lumineuse, les invités et la caméra en mouvement. Voici l’expérience 360 pendant une véritable réception.", video: "/videos/event-archive/360-red-carpet.mp4", poster: "/images/event-archive/video-posters/360-red-carpet.webp", source: instagramUrl, tag: "360 Booth" },
];
const souvenirs = [
  { image: "/images/event-archive/brice-tirages.webp", title: "Des sourires à emporter", text: "Les tirages du mariage de Silass et Brice : des portraits de couple, de famille et d’amis, réunis dans le même univers.", alt: "Vrais tirages photo du mariage de Silass et Brice avec leurs invités" },
  { image: "/images/event-archive/livre-or-mariage.webp", title: "Un livre qui raconte la fête", text: "Un album personnalisé pour conserver les photos et les messages de vos proches, puis les retrouver longtemps après.", alt: "Livre d’or photo réel du mariage de Samir et Sarah, couverture noire et dorée" },
  { image: "/images/realisations-machines/fabrication-porte-cles-photo.webp", title: "Un petit souvenir, une vraie attention", text: "Les photos prennent aussi place dans des porte-clés préparés pour les invités. Un détail qui prolonge le souvenir.", alt: "Fabrication réelle des porte-clés photo MySelfieBooth pour les invités" },
];
const installations = [
  { image: "/images/collection-2026/photobooth-noir-or-900.webp", title: "Le Photobooth noir & or", alt: "Notre vrai Photobooth noir et or installé dans un lieu de réception", href: "/prestations/photobooth/" },
  { image: "/images/collection-2026/miroir-photo-dore-900.webp", title: "Le miroir à cadre doré", alt: "Notre vrai Miroirbooth doré installé devant la tour Eiffel", href: "/prestations/miroirbooth/" },
  { image: "/images/collection-2026/plateforme-video-360-900.webp", title: "La plateforme vidéo 360", alt: "Notre vraie plateforme 360 Booth installée avec son bras caméra et ses éclairages", href: "/prestations/videobooth/" },
];
const reviews = [googleReviews[0], googleReviews[1], googleReviews[4]];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function RealisationsPage() {
  const heroVideo = useRef(null);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const respectMotion = () => { if (query.matches) heroVideo.current?.pause(); };
    respectMotion();
    query.addEventListener?.("change", respectMotion);
    return () => query.removeEventListener?.("change", respectMotion);
  }, []);
  return (
    <Layout metaProps={{
      title: "Nos vrais mariages en photos et vidéos | MySelfieBooth",
      description: "Projetez-vous dans votre mariage avec nos vrais événements : mariés, invités, Photobooth, Miroirbooth, 360 et Vogue. Photos et vidéos de nos événements.",
      ogUrl: "/realisations/", ogImage: "/images/event-archive/caftan-portrait-01.webp", ogImageAlt: "Souvenir photo réel du mariage de Zakaria et Kawtar",
      jsonLd: [breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Réalisations", href: "/realisations/" }]), { "@context": "https://schema.org", "@type": "CollectionPage", name: "Nos mariages et événements réels", url: siteConfig.baseUrl + "/realisations/", description: "Une sélection de photos et de vidéos originales de nos mariages, de nos machines et des souvenirs remis aux invités." }],
    }}>
      <div className="wedding-real-page">
        <section className="catalog-report wed-hero" aria-labelledby="wed-title"><div className="wed-wrap wed-hero-grid">
          <div className="wed-hero-copy"><p className="wed-eyebrow">Ils l’ont vécu. À vous de l’imaginer.</p><h1 id="wed-title">Votre mariage.<br />Leurs sourires.<br /><em>Vos souvenirs.</em></h1><p>Des mariés, des proches, de vrais moments. Entrez dans nos événements et découvrez ce que vos invités pourraient vivre à vos côtés.</p><div className="wed-actions"><a className="wed-button" href="#films">Voir les moments en vidéo <Arrow /></a><a className="wed-link" href={siteConfig.quoteUrl}>Imaginer mon mariage <Arrow /></a></div><div className="wed-authentic"><span aria-hidden="true">●</span> Photos et vidéos de nos événements.</div></div>
          <div className="wed-hero-visual"><figure className="wed-hero-film"><video ref={heroVideo} autoPlay loop muted playsInline controls preload="metadata" poster="/images/realisations-2026/cynthia-ashok.webp" aria-label="Le mariage de Cynthia et Ashok dans le Vogue Booth, vidéo originale" data-no-load-motion><source src="/videos/instagram/reel-2-C9Ftp2ctg4u.mp4" type="video/mp4" /></video><figcaption><span>Le vrai jour J</span><strong>Cynthia & Ashok</strong><a href="https://www.instagram.com/p/C9Ftp2ctg4u/" target="_blank" rel="noreferrer">Voir le post Instagram <Arrow /></a></figcaption></figure><figure className="wed-hero-print"><img src="/images/event-archive/caftan-portrait-01.webp" alt="Tirage photo réel de Zakaria et Kawtar le jour de leur mariage" width="1400" height="933" loading="eager" data-no-load-motion /><figcaption>Le bonheur tient aussi sur une photo.</figcaption></figure><div className="wed-hero-seal"><strong>100 %</strong><span>moments vécus</span></div></div>
        </div></section>

        <div className="wed-proof wed-wrap"><div><strong>700+</strong><span>événements réalisés</span></div><a href={siteConfig.reviewsUrl} target="_blank" rel="noreferrer"><strong>{siteConfig.reviews.rating}</strong><span>sur Google · lire les avis <Arrow /></span></a><div><strong>Vos noms, vos couleurs</strong><span>des souvenirs à votre image</span></div></div>
        <nav className="wed-nav" aria-label="Découvrir nos vrais événements"><a href="#films">Les émotions en vidéo</a><a href="#tirages">Les souvenirs</a><a href="#machines">Les installations</a><a href="#avis-reels">Les avis</a></nav>

        <section id="films" className="catalog-report wed-section wed-films"><div className="wed-wrap"><header className="wed-heading"><div><p className="wed-eyebrow">Le meilleur aperçu, c’est le réel</p><h2>Le jour J,<br /><em>ça ressemble à ça.</em></h2></div><p>Appuyez sur lecture. Retrouvez l’ambiance des réceptions, les invités qui se prennent au jeu et les machines en action.</p></header><div className="wed-film-grid">{films.map((film) => <article className="wed-film-card" key={film.video}><div className="wed-film-media"><video controls muted playsInline preload="none" poster={film.poster} aria-label={film.title + " — " + film.label} data-no-load-motion><source src={film.video} type="video/mp4" /></video><span>{film.tag}</span></div><div className="wed-film-body"><p className="wed-eyebrow">{film.label}</p><h3>{film.title}</h3><p>{film.text}</p><a className="wed-link" href={film.source} target="_blank" rel="noreferrer">Retrouver nos événements sur Instagram <Arrow /></a></div></article>)}</div><p className="wed-small-note">Vidéos originales de nos événements, conservées dans leur format. Utilisez les commandes pour les agrandir et activer le son lorsqu’il est disponible.</p></div></section>

        <section id="tirages" className="catalog-report wed-section wed-souvenirs"><div className="wed-wrap"><header className="wed-heading"><div><p className="wed-eyebrow">Ce qu’ils gardent après la fête</p><h2>La soirée passe.<br /><em>Les souvenirs restent.</em></h2></div><p>Au-delà de l’animation, il y a ce que l’on emporte : un portrait, un mot, une photo que l’on retrouve avec le même sourire.</p></header><div className="wed-photo-grid">{souvenirs.map((photo) => <figure key={photo.image}><a className="wed-photo-open" href={photo.image} target="_blank" rel="noreferrer" aria-label={"Agrandir : " + photo.title}><img src={photo.image} alt={photo.alt} width="900" height="1200" loading="lazy" decoding="async" data-no-load-motion /><span>Agrandir <Arrow /></span></a><figcaption><h3>{photo.title}</h3><p>{photo.text}</p></figcaption></figure>)}</div></div></section>

        <section className="catalog-report wed-section wed-behind"><div className="wed-wrap wed-behind-grid"><div className="wed-behind-film"><video controls muted playsInline preload="none" poster="/images/realisations-machines/installation-photobooth-timelapse.webp" aria-label="L’installation réelle de notre Photobooth en accéléré" data-no-load-motion><source src="/videos/realisations-machines/installation-photobooth-timelapse.mp4" type="video/mp4" /></video></div><div><p className="wed-eyebrow">La confiance, aussi dans les coulisses</p><h2>Avant le premier sourire,<br /><em>il y a notre équipe.</em></h2><p>Une animation réussie se prépare. Voici l’installation réelle de notre matériel, avant l’arrivée des invités.</p><ul><li><strong>Un emplacement pensé ensemble</strong><span>Accès, espace et alimentation sont cadrés avant votre événement.</span></li><li><strong>Un univers qui vous ressemble</strong><span>Le visuel photo ou vidéo est préparé selon votre formule.</span></li><li><strong>Un accompagnement défini</strong><span>Installation et présence sur place sont précisés dans votre devis.</span></li></ul><a className="wed-link" href="/a-propos/">Rencontrer MySelfieBooth <Arrow /></a></div></div></section>

        <section id="machines" className="catalog-report wed-section wed-installations"><div className="wed-wrap"><header className="wed-heading"><div><p className="wed-eyebrow">Nos machines, dans la vraie vie</p><h2>Du matériel que vous<br /><em>pouvez reconnaître.</em></h2></div><p>Des photos de nos propres équipements installés sur place. Pour choisir aussi avec les yeux.</p></header><div className="wed-machine-grid">{installations.map((machine) => <figure key={machine.image}><div><img src={machine.image} alt={machine.alt} width="900" height="1200" loading="lazy" decoding="async" data-no-load-motion /></div><figcaption><h3>{machine.title}</h3><a className="wed-link" href={machine.href}>Découvrir cette animation <Arrow /></a></figcaption></figure>)}</div><div className="wed-more"><p>Photobooth, miroir, 360 ou Vogue : trouvez l’expérience qui correspond à votre réception.</p><a className="wed-button" href="/prestations/">Comparer les animations <Arrow /></a></div></div></section>

        <section id="avis-reels" className="catalog-report wed-section wed-reviews"><div className="wed-wrap"><header className="wed-heading"><div><p className="wed-eyebrow">Ils nous ont confié leur événement</p><h2>Leurs mots,<br /><em>tout simplement.</em></h2></div><a className="wed-link" href={siteConfig.reviewsUrl} target="_blank" rel="noreferrer">Lire les avis Google <Arrow /></a></header><div className="wed-review-grid">{reviews.map((review) => <figure key={review.name}><span className="wed-stars" aria-label="5 étoiles sur 5">★★★★★</span><blockquote>« {review.text} »</blockquote><figcaption><strong>{review.name}</strong><span>Avis Google · extrait</span></figcaption></figure>)}</div></div></section>

        <section className="catalog-report wed-instagram"><div className="wed-wrap"><div><p className="wed-eyebrow">Les événements continuent</p><h2>Encore plus de moments<br /><em>sur Instagram.</em></h2><p>Nos mariages, les nouvelles installations et les petits instants que l’on aime partager.</p></div><a href={instagramUrl} target="_blank" rel="noreferrer" className="wed-button">@myselfiebooth_paris <Arrow /></a></div></section>
        <section className="catalog-report wed-final"><div className="wed-wrap"><p className="wed-eyebrow">Et si la prochaine histoire était la vôtre ?</p><h2>Imaginons les souvenirs<br /><em>de votre mariage.</em></h2><p>Votre date, votre lieu, vos envies. Parlons de ce qui rendra votre réception unique.</p><div className="wed-actions"><a className="wed-button" href={siteConfig.quoteUrl}>Préparer mon devis <Arrow /></a><a className="wed-link" href={siteConfig.phoneHref}>{siteConfig.phoneLabel} <Arrow /></a></div></div></section>
      </div>
    </Layout>
  );
}
