import Layout from "../Layout";
import { articleMeta, blogArticles } from "../../data/blogArticles";
import { siteConfig } from "../../data/site";

export default function BlogArticle({ article }) {
  const relatedArticles = blogArticles
    .filter((item) => item.slug !== article.slug)
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
              <img src={article.image} alt={article.imageAlt} width="920" height="680" />
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
          </div>

          <aside className="blog-article-aside">
            <p>Besoin d'une recommandation ?</p>
            <strong>Expliquez-nous votre événement.</strong>
            <a href={siteConfig.quoteUrl}>Demander un devis</a>
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
              {relatedArticles.map((related) => (
                <a href={`/blog/${related.slug}/`} key={related.slug}>
                  <img src={related.image} alt="" loading="lazy" width="640" height="420" />
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
