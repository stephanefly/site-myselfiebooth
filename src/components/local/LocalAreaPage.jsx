import Layout from "../Layout";
import { editorialVisuals } from "../../data/editorialIllustrations";
import { pageSeo } from "../../data/pageSeo";
import { absoluteUrl, faqJsonLd, siteConfig } from "../../data/site";
import styles from "./LocalAreaPage.module.css";

const animations = [
  { key: "photo", title: "Photobooth", href: "/prestations/photobooth/", text: "Une borne photo pour prendre la pose à plusieurs et repartir avec des tirages personnalisés, selon la formule choisie." },
  { key: "mirror", title: "Miroir photobooth", href: "/prestations/miroirbooth/", text: "Un grand miroir à cadre doré qui associe animation photo et décoration pour une réception, un mariage ou un gala." },
  { key: "video", title: "Vidéo 360 Booth", href: "/prestations/videobooth/", text: "Une animation vidéo avec caméra en mouvement. L'espace nécessaire et la circulation sont validés avec votre lieu." },
  { key: "vogue", title: "Vogue Booth", href: "/prestations/voguebooth/", text: "Un décor lumineux inspiré d'une couverture de magazine, à personnaliser pour un mariage, une soirée ou une entreprise." },
];

export default function LocalAreaPage({ page, area }) {
  const illustration = page.illustration || editorialVisuals.guests;
  const place = page.place || `à ${area.name}`;
  const canonicalPath = page.meta.ogUrl?.replace(siteConfig.baseUrl, "");
  const seo = pageSeo[canonicalPath];
  const sections = page.sections || [];
  const faqs = page.faq || [];
  const links = [...new Map((page.relatedLinks || []).map((link) => [link.href, link])).values()];
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
          {sections[0] && <a href={`#${sections[0].anchor || "conseils-1"}`}>Préparer la prestation</a>}
          {faqs.length > 0 && <a href="#faq">Questions fréquentes</a>}
        </nav>

        <section id="votre-secteur" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Votre événement {place}</p>
            <h2>Une animation adaptée à votre lieu et à vos invités</h2>
            <p className={styles.text}>Pour un mariage, une réception privée ou un événement d’entreprise {place}, le choix du photobooth dépend de l’espace disponible, du nombre d’invités et du souvenir recherché. Photos imprimées, vidéo 360 ou décor Vogue : nous vous orientons vers le dispositif adapté à votre projet.</p>
            <p className={styles.text}>{area.logistics || "L’adresse, les conditions d’accès, les horaires de montage et les frais de déplacement sont vérifiés avant de confirmer la prestation."} Le devis précise la durée, la personnalisation, les impressions prévues et les options retenues.</p>
            {area.nearby?.length > 0 && <p className={styles.nearby}>Dans votre secteur : {area.nearby.join(" · ")}. Les disponibilités et conditions de déplacement sont confirmées selon l’adresse exacte.</p>}
          </div>
        </section>

        <section id="animations-en-images" className={`${styles.section} ${styles.muted}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Photo & vidéo</p>
            <h2>Découvrez les animations en images</h2>
            <p className={styles.text}>Comparez les formats et choisissez le souvenir qui correspond à votre événement. Les illustrations présentent des ambiances possibles ; la configuration est définie avec vous.</p>
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

        {sections.map((section, index) => (
          <section key={section.anchor || section.title} id={section.anchor || `conseils-${index + 1}`} className={`${styles.section} ${index % 2 ? styles.muted : ""}`}>
            <div className={styles.container}>
              {section.eyebrow && <p className={styles.eyebrow}>{section.eyebrow}</p>}
              <h2>{section.title}</h2>
              {section.text && <p className={styles.text}>{section.text}</p>}
              {section.cards?.length > 0 && <div className={styles.cardGrid}>
                {section.cards.map((card) => (
                  <div className={styles.textCard} key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>}
            </div>
          </section>
        ))}

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
            <h2>Les zones et conseils à découvrir</h2>
            <div className={styles.relatedLinks}>
              <a href="/zones-intervention/">Toutes les zones d’intervention</a>
              {links.filter((link) => link.href !== "/zones-intervention/").map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
            </div>
          </div>
        </section>

        <section className={styles.finalCta} data-page-conclusion>
          <div className={styles.container}>
            <p className={styles.eyebrow}>{area.name} · Votre projet</p>
            <h2>{page.finalTitle || "Parlons de votre événement."}</h2>
            <p>Indiquez la date, le lieu, les horaires et le nombre d’invités pour recevoir une proposition adaptée.</p>
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
