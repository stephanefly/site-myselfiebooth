import Layout from "../Layout";
import { articleMeta, blogArticles } from "../../data/blogArticles";
import { getServiceVisual } from "../../data/serviceVisuals";
import { siteConfig } from "../../data/site";

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

  return (
    <Layout metaProps={articleMeta(article)}>
      <article className="blog-page blog-article">
        <header className="blog-article-hero">
          <div className="blog-container blog-article-hero-grid">
            <div>
              <nav className="blog-breadcrumbs" aria-label="Fil d'Ariane">
                <a href="/">Accueil</a>
                <span aria-hidden="true">/</span>
                <a href="/blog/">Blog</a>
              </nav>
              <div className="blog-card-meta">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h1>{article.title}</h1>
              <p>{article.excerpt}</p>
              <span className="blog-date">
                Publié le {article.publishedAt} par <a href="/a-propos/">Stéphane Faure</a>
              </span>
            </div>
            <figure>
              <div className="blog-article-hero-image">
                <img src={article.image} alt={article.imageAlt} width="920" height="680" />
                {article.imageNote ? <span className="blog-ai-badge">Visuel d'ambiance IA</span> : null}
              </div>
              {article.imageNote ? (
                <figcaption>
                  {article.imageCaption ? `${article.imageCaption} ` : ""}
                  {article.imageNote}
                </figcaption>
              ) : null}
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
            {article.sections.map((section, index) => {
              const serviceVisual = getServiceVisual(section.title);
              const sectionImage = serviceVisual?.image || section.image;

              return (
                <section key={section.title} id={`partie-${index + 1}`}>
                  <span>0{index + 1}</span>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                  {sectionImage ? (
                    <figure className="blog-section-visual">
                      <div>
                        <img
                          src={sectionImage}
                          alt={serviceVisual?.alt || section.imageAlt}
                          loading="lazy"
                          width="920"
                          height="614"
                        />
                        {!serviceVisual && <span className="blog-ai-badge">Visuel d'ambiance IA</span>}
                      </div>
                      {section.caption ? <figcaption>{section.caption}</figcaption> : null}
                    </figure>
                  ) : null}
                </section>
              );
            })}

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
            <div className="blog-related-grid">
              {relatedArticles.map(({ item: related }) => (
                <a href={`/blog/${related.slug}/`} key={related.slug}>
                  <div className="blog-related-image">
                    <img src={related.image} alt="" loading="lazy" width="640" height="420" />
                    {related.imageNote ? <span className="blog-ai-badge">Visuel d'ambiance IA</span> : null}
                  </div>
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
