import Layout from "../Layout";
import { blogArticles } from "../../data/blogArticles";
import { absoluteUrl, siteConfig } from "../../data/site";

export default function BlogIndex() {
  return (
    <Layout
      metaProps={{
        title: "Conseils photobooth pour vos événements | MySelfieBooth",
        description:
          "Quatre guides pratiques pour choisir, installer et personnaliser votre photobooth de mariage ou d'entreprise.",
        ogTitle: "Le guide photobooth MySelfieBooth",
        ogDescription: "Des réponses courtes pour préparer votre animation photo ou vidéo.",
        ogImage: blogArticles[0].image,
        ogUrl: absoluteUrl("/blog/"),
      }}
    >
      <div className="blog-page">
        <header className="blog-index-hero">
          <div className="blog-container">
            <p className="blog-eyebrow">Le guide MySelfieBooth</p>
            <h1>Préparez votre photobooth sans perdre de temps.</h1>
            <p>Quatre réponses simples pour choisir, installer et personnaliser votre animation.</p>
          </div>
        </header>

        <section className="blog-index-list" aria-labelledby="articles-title">
          <div className="blog-container">
            <div className="blog-index-heading">
              <div>
                <p className="blog-eyebrow">Conseils</p>
                <h2 id="articles-title">Les derniers articles</h2>
              </div>
              <span>4 guides pratiques</span>
            </div>

            <div className="blog-card-grid">
              {blogArticles.map((article, index) => (
                <article className={`blog-card ${index === 0 ? "is-featured" : ""}`} key={article.slug}>
                  <a className="blog-card-image" href={`/blog/${article.slug}/`}>
                    <img src={article.image} alt={article.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
                  </a>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2><a href={`/blog/${article.slug}/`}>{article.title}</a></h2>
                    <p>{article.excerpt}</p>
                    <a className="blog-text-link" href={`/blog/${article.slug}/`}>Lire l'article</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-index-cta">
          <div className="blog-container">
            <p>Votre date est déjà fixée ?</p>
            <h2>Recevez une proposition adaptée à votre événement.</h2>
            <a href={siteConfig.quoteUrl}>Obtenir mon devis en 2 minutes</a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
