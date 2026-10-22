import Layout from "../Layout";
import { articleMeta, blogArticles } from "../../data/blogArticles";
import { siteConfig } from "../../data/site";

function buildArticleMeta(article) {
  const baseMeta = articleMeta(article);
  const shortTitles = {
    "animations-mariage-sans-gener-invites": "Animations de mariage : des idées pour tous les invités",
    "photobooth-bapteme-communion": "Photobooth pour baptême ou communion : quel format choisir ?",
    "photobooth-soiree-cse": "Photobooth pour une soirée CSE : organisation et souvenirs",
  };
  const searchTitle = shortTitles[article.slug] || article.seoTitle || article.title;
  const keywords = (article.keywords || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 10);

  return {
    ...baseMeta,
    title: searchTitle.length <= 50 ? `${searchTitle} | MySelfieBooth` : searchTitle,
    jsonLd: (baseMeta.jsonLd || []).map((entry) => {
      if (entry?.["@type"] !== "Article") {
        return entry;
      }

      return {
        ...entry,
        dateModified: article.modifiedIso || entry.dateModified,
        inLanguage: "fr-FR",
        isAccessibleForFree: true,
        keywords: article.keywords || undefined,
        about: keywords.length
          ? keywords.map((name) => ({ "@type": "Thing", name }))
          : undefined,
        author: {
          ...entry.author,
          jobTitle: siteConfig.founder.title,
        },
      };
    }),
  };
}

export default function BlogArticle({ article }) {
  const relatedArticles = blogArticles
    .filter((item) => item.slug !== article.slug)
    .map((item, index) => ({
      item,
      index,
      score:
        (item.category === article.category ? 2 : 0) +
        (item.ctaHref === article.ctaHref ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 3);
  const metaProps = buildArticleMeta(article);

  return (
    <Layout metaProps={metaProps}>
      <article className="blog-page blog-article">
        <header className="blog-article-hero">
          <div className="blog-container blog-article-hero-grid">
            <div>
            <div className="blog-card-meta">
              <span>{article.category}</span>
              <span>{article.readTime}</span>
            </div>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <span className="blog-date">
              Publié le {article.publishedAt} par <a href="/a-propos/">Stéphane Faure</a>
              {article.modifiedAt ? <> · Mis à jour le {article.modifiedAt}</> : null}
            </span>
            </div>
            <figure>
              <div className="blog-article-hero-image">
                <img src={article.image} alt={article.imageAlt} width="960" height="640" fetchPriority="high" decoding="async" />
              </div>
              <figcaption>{article.imageCaption}</figcaption>
            </figure>
          </div>
        </header>

        <section className="blog-takeaways" aria-labelledby="takeaways-title">
          <div className="blog-container">
            <p className="blog-eyebrow" id="takeaways-title">En bref</p>
            <ul>
              {article.takeaways.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <div className="blog-container blog-article-layout">
          <div className="blog-article-content">
            {article.sections.map((section, index) => (
              <section key={section.title} id={`partie-${index + 1}`}>
                <span>0{index + 1}</span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            {article.faqs?.length ? (
              <section className="blog-article-faq" id="questions-frequentes">
                <span>FAQ</span>
                <h2>Questions fréquentes</h2>
                <div>
                  {article.faqs.map((item) => (
                    <details key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="blog-article-aside">
            <nav aria-label="Sommaire de l'article">
              <p>Dans ce guide</p>
              <ol>
                {article.sections.map((section, index) => (
                  <li key={section.title}>
                    <a href={`#partie-${index + 1}`}>{section.title}</a>
                  </li>
                ))}
                {article.faqs?.length ? <li><a href="#questions-frequentes">Questions fréquentes</a></li> : null}
              </ol>
            </nav>
            <div className="blog-aside-service">
              <p>Service associé</p>
              <a href={article.ctaHref}>{article.ctaLabel}</a>
            </div>
            {article.relatedLinks?.length ? (
              <nav className="blog-aside-service" aria-label="Pour aller plus loin">
                <p>Pour aller plus loin</p>
                {article.relatedLinks.map((link) => (
                  <a href={link.href} key={link.href}>{link.label}</a>
                ))}
              </nav>
            ) : null}
            <div className="blog-aside-cta">
              <p>Besoin d'une recommandation ?</p>
              <strong>Expliquez-nous votre événement.</strong>
              <a href={siteConfig.quoteUrl}>Demander un devis</a>
            </div>
          </aside>
        </div>

        <section className="blog-article-cta">
          <div className="blog-container">
            <div>
              <p className="blog-eyebrow">Prochaine étape</p>
              <h2>Prêt à choisir votre animation ?</h2>
            </div>
            <a href={article.ctaHref}>{article.ctaLabel}</a>
          </div>
        </section>

        <section className="blog-related" aria-labelledby="related-title">
          <div className="blog-container">
            <p className="blog-eyebrow">À lire ensuite</p>
            <h2 id="related-title">Continuez en quelques minutes</h2>
            <div className="blog-related-grid is-text-only">
              {relatedArticles.map(({ item: related }) => (
                <a href={`/blog/${related.slug}/`} key={related.slug}>
                  <span>{related.category}</span>
                  <strong>{related.title}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
