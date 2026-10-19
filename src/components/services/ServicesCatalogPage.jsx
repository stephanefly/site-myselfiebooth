import Layout from "../Layout";
import { machines, options, servicePacks } from "../../data/catalog";
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd, siteConfig } from "../../data/site";

const visualRoot = "/images/ai-from-real/prestations-2026-";
const machinePresentation = {
  photobooth: { type: "Photo & impression", tag: "Le plus demandé", line: "Les sourires deviennent des souvenirs.", text: "Notre borne noir et or réunit vos invités devant l’objectif. Ils posent, personnalisent leur photo et repartent avec un tirage selon la formule choisie.", facts: ["Tirages personnalisés selon formule", "Animateur sur place", "Galerie après l’événement"], capacity: "Petits et moyens groupes" },
  miroirbooth: { type: "Photo & impression", tag: "L’élégance du miroir", line: "Un grand miroir. Un vrai moment de partage.", text: "Son cadre doré et son écran tactile attirent les regards. Une animation photo qui habille votre réception et donne envie à chacun de participer.", facts: ["Grand miroir tactile", "Animateur sur place", "Tirages selon formule & galerie"], capacity: "Du duo au groupe" },
  videobooth: { type: "Vidéo 360", tag: "L’énergie de la soirée", line: "Vos invités, sous tous les angles.", text: "Sur la plateforme lumineuse, la caméra tourne autour de vos invités pour créer des clips dynamiques. Une expérience à vivre ensemble et à partager ensuite.", facts: ["Vidéos 4K personnalisées", "Jusqu’à 5 personnes selon configuration", "Animateur sur place"], capacity: "Jusqu’à 5 personnes*" },
  voguebooth: { type: "Studio photo", tag: "L’effet couverture", line: "La une du magazine, c’est vous.", text: "Un grand cadre, un rideau blanc et une couverture à vos couleurs. Le Vogue Booth transforme votre espace en studio pour des portraits qui marquent les esprits.", facts: ["Visuel de couverture personnalisé", "Installation & décor lumineux", "Photographe et tirages en option"], capacity: "Petits groupes" },
  air360booth: { type: "Vidéo 360 grand format", tag: "Place à tout le groupe", line: "Plus de place pour plus d’énergie.", text: "La caméra tourne depuis une arche au-dessus des participants. Cette configuration accueille les groupes plus nombreux pour une animation vidéo spectaculaire.", facts: ["Vidéos 4K personnalisées", "Jusqu’à 10 personnes selon configuration", "Installation & animateur"], capacity: "Jusqu’à 10 personnes*" },
  ipadbooth: { type: "Photo numérique", tag: "Simple & compact", line: "L’animation photo qui trouve sa place.", text: "Une borne légère avec tablette et anneau lumineux, idéale pour un petit espace ou une animation digitale en autonomie. Les souvenirs se retrouvent dans votre galerie.", facts: ["Photos numériques illimitées", "Visuel personnalisé & galerie", "Livraison possible en option"], capacity: "Solo, duo et petits groupes" },
};
const machineOrder = ["photobooth", "miroirbooth", "videobooth", "voguebooth", "air360booth", "ipadbooth"];
const displayedMachines = machineOrder.map((key) => machines.find((machine) => machine.key === key));
const vip = machines.find((machine) => machine.key === "packvip");
const souvenirNames = ["Phonebooth audio", "Livre d'or vidéo", "Livre d'or physique", "Porte-clés photo", "Magnets premium", "Magnets simples"];
const decorNames = ["Mur floral", "Panneau fontaine", "Panneau de bienvenue", "Fond LED 360"];
const studioNames = ["Photographe Vogue Booth", "Impression Vogue Booth", "Décoration Vogue Booth", "Holo 3D"];
const faq = [
  { question: "Quelle animation choisir pour mon événement ?", answer: "Pour des photos imprimées, choisissez le Photobooth ou le Miroirbooth. Pour des vidéos de groupe, le 360 Booth et l’Air360 Booth sont adaptés. Le Vogue Booth crée un décor de couverture de magazine, tandis que l’iPad Booth privilégie les photos numériques et les petits espaces. Nous vous aidons à choisir selon votre lieu et votre nombre d’invités." },
  { question: "La livraison, l’installation et l’animateur sont-ils inclus ?", answer: "La livraison et l’installation sont prévues pour le Photobooth, le Miroirbooth, le 360 Booth, l’Air360 Booth et le Vogue Booth. Un animateur accompagne les quatre premières machines. Pour l’iPad Booth et le Vogue Booth, l’accompagnement dépend de la formule. Les déplacements, horaires et contraintes du lieu sont confirmés sur devis." },
  { question: "Peut-on personnaliser les photos et les vidéos ?", answer: "Oui. Selon la machine et la formule, nous préparons un modèle photo, un habillage vidéo ou un visuel de couverture Vogue avec vos noms, votre date, votre thème ou l’identité de votre entreprise." },
  { question: "Comment réserver une machine ou un pack ?", answer: "Indiquez votre date, votre lieu, le nombre d’invités et les animations souhaitées dans le formulaire de devis. Nous confirmons ensuite la disponibilité, la configuration et le tarif correspondant à votre événement." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function MachineCard({ machine, index }) {
  const view = machinePresentation[machine.key];
  return (
    <article id={`machine-${machine.key}`} className="prst-machine">
      <div className="prst-machine-photo">
        <img src={`${visualRoot}${machine.key}.webp`} alt={`${machine.name} MySelfieBooth en entier, mise en scène inspirée de notre équipement réel`} width="1200" height="900" loading="lazy" decoding="async" data-no-load-motion />
        <span className="prst-photo-tag">{view.tag}</span><span className="prst-photo-number" aria-hidden="true">0{index + 1}</span>
      </div>
      <div className="prst-machine-body">
        <p className="prst-kicker">{view.type}</p>
        <div className="prst-machine-title"><h3>{machine.name}</h3><span>À partir de <strong>{machine.priceFrom} €</strong></span></div>
        <p className="prst-machine-line">{view.line}</p><p>{view.text}</p>
        <ul className="prst-checks">{view.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
        <div className="prst-machine-bottom"><p className="prst-duration">{machine.catalogPrice}</p><div className="prst-machine-actions"><a className="prst-button" href={machine.bookingUrl}>Choisir cette machine <Arrow /></a><a className="prst-text-link" href={`${machine.href}/`}>Découvrir en détail <Arrow /></a></div></div>
      </div>
    </article>
  );
}

function OptionList({ names }) {
  return <ul className="prst-option-list">{names.map((name) => {
    const option = options.find((item) => item.name === name);
    return <li key={name}><h4>{option.href ? <a href={`${option.href}/`}>{name} <Arrow /></a> : name}</h4><p>{option.text}</p></li>;
  })}</ul>;
}

export default function ServicesCatalogPage() {
  const metaProps = {
    title: "Photobooth, 360 & Vogue : prestations et tarifs | MySelfieBooth",
    description: "Découvrez nos 6 machines photo et vidéo, nos packs et nos options à Paris et en Île-de-France. Photobooth 5 h à 400 €, Miroirbooth, 360 et Vogue Booth. Devis personnalisé.",
    ogUrl: "/prestations/", ogImage: `${visualRoot}collection.webp`, ogImageAlt: "Collection MySelfieBooth : Photobooth, miroir doré, 360 Booth et Vogue Booth",
    jsonLd: [
      breadcrumbJsonLd([{ label: "Accueil", href: "/" }, { label: "Prestations", href: "/prestations/" }]),
      { "@context": "https://schema.org", "@type": "ItemList", name: "Animations photo et vidéo MySelfieBooth", itemListElement: displayedMachines.map((machine, index) => ({ "@type": "ListItem", position: index + 1, name: machine.name, url: absoluteUrl(`${machine.href}/`) })) },
      faqJsonLd(faq),
    ],
  };
  return (
    <Layout metaProps={metaProps}>
      <div className="prestations-page">
        <section className="catalog-collection prst-hero" aria-labelledby="prestations-title">
          <div className="prst-hero-copy">
            <p className="prst-kicker">Nos prestations · Paris & Île-de-France</p>
            <h1 id="prestations-title">Des souvenirs<br />à vivre.<br /><em>Et à garder.</em></h1>
            <p className="prst-hero-intro">Photo, vidéo 360 ou couverture de magazine : trouvez l’animation qui fera sourire vos invités.</p>
            <div className="prst-actions"><a className="prst-button" href="#machines">Découvrir les machines <Arrow /></a><a className="prst-text-link" href={siteConfig.quoteUrl}>Demander mon devis <Arrow /></a></div>
            <p className="prst-hero-note">Mariages · Anniversaires · Événements d’entreprise</p>
          </div>
          <figure className="prst-hero-figure"><div className="prst-hero-image"><img src={`${visualRoot}collection.webp`} alt="Notre Photobooth noir et or, le miroir doré, la plateforme 360 et le grand Vogue Booth réunis dans une mise en scène de réception" width="1536" height="1024" fetchPriority="high" loading="eager" data-no-load-motion /></div><figcaption><span>Une collection. Mille façons de célébrer.</span><span>Photo & vidéo</span></figcaption></figure>
        </section>
        <div className="prst-trust"><div><strong>700+</strong><span>événements réalisés</span></div><div><strong>5 ans</strong><span>d’expérience</span></div><a href={siteConfig.reviewsUrl}><strong>{siteConfig.reviews.rating}</strong><span>sur Google</span></a><div><strong>À vos couleurs</strong><span>personnalisation selon formule</span></div></div>
        <nav className="prst-navigation" aria-label="Explorer nos prestations"><a href="#machines">Les machines <span>06</span></a><a href="#packs">Les packs <span>06</span></a><a href="#options">Les options <span>14</span></a><a href="#comparatif">Comparer les tarifs <Arrow /></a></nav>

        <section id="machines" className="catalog-collection prst-section prst-machines" aria-labelledby="prst-machines-title"><div className="prst-wrap">
          <header className="prst-section-heading"><div><p className="prst-kicker">01 / Les machines</p><h2 id="prst-machines-title">À chaque fête,<br /><em>son expérience.</em></h2></div><p>Le charme d’un miroir, l’énergie d’une vidéo ou le plaisir d’une photo imprimée. Choisissez votre façon de créer des souvenirs.</p></header>
          <div id="choisir" className="prst-choose"><span>Vous cherchez…</span><a href="#machine-photobooth">Une photo à emporter <Arrow /></a><a href="#machine-videobooth">Une vidéo à partager <Arrow /></a><a href="#machine-voguebooth">Un effet magazine <Arrow /></a></div>
          <div className="prst-machine-grid">{displayedMachines.map((machine, index) => <MachineCard key={machine.key} machine={machine} index={index} />)}</div>
          <p className="prst-image-note">Mises en scène IA inspirées de nos équipements. <a href="/realisations/">Voir nos installations en événement <Arrow /></a></p>
        </div></section>

        <section id="packs" className="catalog-collection prst-section prst-packs" aria-labelledby="prst-packs-title"><div className="prst-wrap">
          <header className="prst-section-heading"><div><p className="prst-kicker">02 / Les packs</p><h2 id="prst-packs-title">Les bonnes associations.<br /><em>Tout simplement.</em></h2></div><p>Plusieurs animations, un même événement. Nos packs réunissent machines, décors et souvenirs pour composer une expérience complète.</p></header>
          <div className="prst-pack-grid">{servicePacks.map((pack, index) => <article className={`prst-pack ${pack.key === "duo-vip" ? "prst-pack-featured" : ""}`} key={pack.key}>
            <div className="prst-pack-top"><span className="prst-kicker">{pack.tag}</span><span className="prst-pack-number" aria-hidden="true">0{index + 1}</span></div><h3>{pack.name}</h3><p>{pack.description}</p><ul className="prst-checks">{pack.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="prst-pack-bottom"><p className="prst-pack-price">À partir de <strong>{pack.price.replace(/^À partir de /, "").replace("euros", "€")}</strong></p><a className="prst-button" href={pack.bookingUrl}>Choisir ce pack <Arrow /></a></div>
          </article>)}</div>
          <div className="prst-combos"><article id="machine-packvip"><p className="prst-kicker">Le duo essentiel</p><h3>Miroirbooth + 360 Booth</h3><p>Photo imprimée et vidéo réunies dans notre Pack VIP.</p><div><strong>{vip.catalogPrice}</strong><a className="prst-text-link" href="/prestations/packvip/">Découvrir le Pack VIP <Arrow /></a></div></article><article id="machine-personnalise"><p className="prst-kicker">Votre événement, votre formule</p><h3>Vous imaginez autre chose ?</h3><p>Plusieurs espaces, un lancement de marque ou une grande réception : composons votre installation.</p><a className="prst-text-link" href="/prestations/personnalise/">Créer ma formule sur mesure <Arrow /></a></article></div>
          <p className="prst-fine-print">Les tarifs dépendent de la durée, du lieu et des options retenues. Les déplacements et les modalités de chaque formule sont confirmés dans votre devis.</p>
        </div></section>

        <section id="options" className="catalog-collection prst-section prst-options" aria-labelledby="prst-options-title"><div className="prst-wrap">
          <header className="prst-section-heading"><div><p className="prst-kicker">03 / Les options</p><h2 id="prst-options-title">Les détails qui font<br /><em>votre événement.</em></h2></div><p>Un message à réécouter, un décor qui accueille vos invités, une photo à garder près de soi. Ajoutez votre touche personnelle.</p></header>
          <div className="prst-option-grid"><article className="prst-option-group"><div className="prst-option-photo"><img src={`${visualRoot}souvenirs.webp`} alt="Téléphone livre d’or noir, album kraft, porte-clés photo et magnets réunis sur une table, mise en scène inspirée de nos options" width="1200" height="900" loading="lazy" decoding="async" data-no-load-motion /></div><div className="prst-option-body"><p className="prst-kicker">Les souvenirs</p><h3>Bien après la dernière danse.</h3><OptionList names={souvenirNames} /></div></article><article className="prst-option-group"><div className="prst-option-photo"><img src={`${visualRoot}decors.webp`} alt="Panneau fontaine blanc, miroir de bienvenue fleuri et fond LED 360, mise en scène inspirée de nos décors" width="1200" height="900" loading="lazy" decoding="async" data-no-load-motion /></div><div className="prst-option-body"><p className="prst-kicker">Les décors</p><h3>Une entrée en matière qui compte.</h3><OptionList names={decorNames} /></div></article></div>
          <div className="prst-studio-options"><div><p className="prst-kicker">Pour aller plus loin</p><h3>Studio Vogue<br />& effets visuels.</h3><a className="prst-text-link" href={siteConfig.quoteUrl}>Ajouter mes options <Arrow /></a></div><OptionList names={studioNames} /></div>
        </div></section>

        <section id="comparatif" className="catalog-collection prst-section prst-compare" aria-labelledby="prst-compare-title"><div className="prst-wrap">
          <header className="prst-section-heading"><div><p className="prst-kicker">Pour vous aider à choisir</p><h2 id="prst-compare-title">L’essentiel,<br /><em>en un regard.</em></h2></div><p>Comparez les formats et les durées. Le nombre de tirages, les horaires et les conditions d’installation sont précisés dans votre devis.</p></header>
          <p className="prst-scroll-hint">Sur mobile, faites glisser le tableau pour tout voir →</p>
          <div className="prst-table-scroll" tabIndex="0" role="region" aria-label="Tableau comparatif des machines, défilement horizontal"><table><caption>Tarifs et formats des animations photo et vidéo</caption><thead><tr><th scope="col">L’animation</th><th scope="col">Le tarif</th><th scope="col">Le souvenir</th><th scope="col">Le groupe</th></tr></thead><tbody>{displayedMachines.map((machine) => <tr key={machine.key}><th scope="row"><a href={`#machine-${machine.key}`}>{machine.name} <Arrow /></a></th><td>{machine.catalogPrice}</td><td>{machinePresentation[machine.key].type}</td><td>{machinePresentation[machine.key].capacity}</td></tr>)}</tbody></table></div>
          <div className="prst-comparison-note"><p>* Capacité des vidéos 360 selon la configuration validée avec notre équipe.</p><a className="prst-text-link" href={siteConfig.ratesUrl}>Tous les tarifs détaillés <Arrow /></a></div>
        </div></section>

        <section className="catalog-collection prst-section prst-process" aria-labelledby="prst-process-title"><div className="prst-wrap"><p className="prst-kicker">Avec vous, du début à la fin</p><h2 id="prst-process-title">Vous profitez.<br /><em>On prépare les souvenirs.</em></h2><ol><li><span>01</span><h3>On imagine</h3><p>Votre date, votre lieu, vos invités : nous cadrons la bonne formule ensemble.</p></li><li><span>02</span><h3>On personnalise</h3><p>Vos noms, vos couleurs ou votre marque donnent le ton aux photos et aux vidéos.</p></li><li><span>03</span><h3>On installe</h3><p>Notre équipe prépare l’espace selon la formule et les contraintes du lieu.</p></li><li><span>04</span><h3>Vous célébrez</h3><p>Vos invités profitent de l’animation, puis retrouvent les contenus dans leur galerie.</p></li></ol></div></section>
        <section className="catalog-collection prst-section prst-faq" aria-labelledby="prst-faq-title"><div className="prst-wrap prst-faq-layout"><div><p className="prst-kicker">Encore une hésitation ?</p><h2 id="prst-faq-title">On vous<br /><em>répond.</em></h2><a className="prst-text-link" href={siteConfig.phoneHref}>Parlons de votre événement <Arrow /></a></div><div>{faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
        <section className="catalog-collection prst-final"><div className="prst-wrap"><p className="prst-kicker">À vous de créer la suite</p><h2>On fait de votre événement<br /><em>un beau souvenir ?</em></h2><p>Une date, un lieu et quelques envies. Nous vous proposons la formule adaptée.</p><div className="prst-actions"><a className="prst-button prst-button-gold" href={siteConfig.quoteUrl}>Demander mon devis <Arrow /></a><a className="prst-text-link" href={siteConfig.phoneHref}>{siteConfig.phoneLabel} <Arrow /></a></div></div></section>
      </div>
    </Layout>
  );
}
