import Layout from "../Layout";
import { editorialVisuals } from "../../data/editorialIllustrations";
import { pageSeo } from "../../data/pageSeo";
import { absoluteUrl, faqJsonLd, siteConfig } from "../../data/site";
import styles from "./LocalAreaPage.module.css";

const animations = [
  { key: "photo", title: "Photobooth", href: "/prestations/photobooth/", text: "Photos de groupe et tirages personnalisés selon votre formule." },
  { key: "mirror", title: "Miroir photobooth", href: "/prestations/miroirbooth/", text: "Un miroir doré pour animer et décorer votre réception." },
  { key: "video", title: "Vidéo 360 Booth", href: "/prestations/videobooth/", text: "Des vidéos en mouvement à partager avec vos invités." },
  { key: "vogue", title: "Vogue Booth", href: "/prestations/voguebooth/", text: "Un décor lumineux pour des portraits façon magazine." },
];

export default function LocalAreaPage({ page, area }) {
  const illustration = page.illustration || editorialVisuals.guests;
  const place = page.place || `à ${area.name}`;
  const canonicalPath = page.meta.ogUrl?.replace(siteConfig.baseUrl, "");
  const seo = pageSeo[canonicalPath];
  const faqs = [
    { question: "Quel budget prévoir ?", answer: ["lyon", "rouen"].includes(area.slug) ? "Le prix dépend du lieu, de la durée et de l’animation. Demandez un devis avec les frais de déplacement." : "Photobooth : 400 € pour 5 h. Déplacement et options confirmés sur devis." },
    { question: "Livrez-vous dans mon secteur ?", answer: "Les demandes sont étudiées selon la date et l’adresse. Déplacement et installation sont confirmés sur devis." },
    { question: "Que faut-il prévoir ?", answer: "Un emplacement dégagé, une prise électrique et les consignes d’accès du lieu. Nous validons l’espace avec vous." },
  ];
  const links = [...new Map((page.relatedLinks || []).map((link) => [link.href, link])).values()]
    .filter((link) => link.href !== "/zones-intervention/").slice(0, 4);
  const meta = {
    ...page.meta,
    ...(seo ? { title: seo.title, description: seo.description, ogTitle: seo.title, ogDescription: seo.description } : {}),
    ogImage: illustration.src,
    ogImageAlt: illustration.alt,
    jsonLd: [
      ...(page.meta.jsonLd || []).filter((entry) => entry["@type"] !== "FAQPage")
        .map((entry) => entry["@type"] === "Service" ? { ...entry, image: absoluteUrl(illustration.src) } : entry),
      faqJsonLd(faqs),
    ].filter(Boolean),
  };

  return (
    <Layout metaProps={meta} showPreFooter={false}>
      <article className={styles.page} data-local-area={area.slug} data-content-ready="true">
        <header className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div>
              <p className={styles.eyebrow}>{area.name} · Location photobooth</p>
              <h1>{seo?.heading || page.title}</h1>
              <p className={styles.lead}>{page.description}</p>
              <ul className={styles.highlights}>
                {(page.highlights || ["Mariage & entreprise", "Installation selon le lieu", "Personnalisation sur devis"]).map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className={styles.actions}>
                <a className={styles.primary} href={siteConfig.quoteUrl} data-event="cta_quote_click" data-event-label={`Devis ${area.name}`}>Demander un devis</a>
                <a className={styles.secondary} href="#animations-en-images">Voir les animations</a>
              </div>
            </div>
            <figure className={styles.heroImage}>
              <img src={illustration.src} alt={illustration.alt} width="960" height="640" fetchPriority="high" decoding="async" data-no-load-motion />
              <figcaption>Illustration d’ambiance pour votre événement.</figcaption>
            </figure>
          </div>
        </header>

        <nav className={`${styles.container} ${styles.quickLinks}`} aria-label="Sur cette page">
          <a href="#votre-secteur">Votre secteur</a>
          <a href="#animations-en-images">Les animations</a>
          {faqs.length > 0 && <a href="#faq">Questions fréquentes</a>}
        </nav>

        <section id="votre-secteur" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Votre événement {place}</p>
            <h2>Une animation qui vous ressemble</h2>
            <p className={styles.text}>{area.angle || `Mariage, soirée ou entreprise ${place} : choisissez votre animation photo ou vidéo. Installation et déplacement confirmés sur devis.`}</p>
            {area.nearby?.length > 0 && <p className={styles.nearby}>Secteurs proches : {area.nearby.join(" · ")}.</p>}
          </div>
        </section>

        <section id="animations-en-images" className={`${styles.section} ${styles.muted}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Photo & vidéo</p>
            <h2>Découvrez les animations en images</h2>
            <p className={styles.text}>Quatre formats pour vos souvenirs. Illustrations d’ambiance.</p>
            <div className={styles.animationGrid}>
              {animations.map((animation) => (
                <article className={styles.animationCard} key={animation.key}>
                  <img src={editorialVisuals[animation.key].src} alt={editorialVisuals[animation.key].alt} width="900" height="900" loading="lazy" decoding="async" data-no-load-motion />
                  <div>
                    <h3>{animation.title}</h3>
                    <p>{animation.text}</p>
                    <a href={animation.href}>Découvrir {animation.title}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {faqs.length > 0 && <section id="faq" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Les réponses utiles</p>
            <h2>Questions fréquentes : {area.name}</h2>
            <div className={styles.faq}>
              {faqs.map((item) => <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>)}
            </div>
          </div>
        </section>}

        <section className={`${styles.section} ${styles.muted}`}>
          <div className={styles.container}>
            <h2>À proximité et à découvrir</h2>
            <div className={styles.relatedLinks}>
              <a href="/zones-intervention/">Toutes les zones d’intervention</a>
              {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
            </div>
          </div>
        </section>

        <section className={styles.finalCta} data-page-conclusion>
          <div className={styles.container}>
            <p className={styles.eyebrow}>{area.name} · Votre projet</p>
            <h2>Parlons de votre événement.</h2>
            <p>Envoyez la date, le lieu et le nombre d’invités.</p>
            <div className={styles.actions}>
              <a className={styles.primary} href={siteConfig.quoteUrl} data-event="cta_quote_click" data-event-label={`Devis final ${area.name}`}>Demander mon devis</a>
              <a className={styles.secondary} href={siteConfig.phoneHref}>Appeler {siteConfig.phoneLabel}</a>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
