import Layout from "../Layout";
import { blogArticles } from "../../data/blogArticles";
import { absoluteUrl, siteConfig } from "../../data/site";

export default function BlogIndex() {
  return (
    <Layout
      metaProps={{
        title: "Conseils mariage et animations photo | MySelfieBooth",
        description:
          "Guides pratiques pour organiser un mariage, maîtriser son budget, accueillir ses invités et choisir des animations photo adaptées.",
        ogTitle: "Le guide mariage MySelfieBooth",
        ogDescription: "Des conseils concrets pour organiser votre mariage et créer des souvenirs qui ressemblent à vos invités.",
        ogImage: blogArticles[0].image,
        ogUrl: absoluteUrl("/blog/"),
      }}
    >
      <div className="blog-page">
        <header className="blog-index-hero">
          <div className="blog-container">
            <p className="blog-eyebrow">Le guide mariage MySelfieBooth</p>
            <h1>Des conseils utiles pour préparer un mariage qui vous ressemble.</h1>
            <p>Budget, invités, lieu, repas, cérémonie, souvenirs et animations&nbsp;: des réponses concrètes pour avancer sans vous disperser.</p>
          </div>
        </header>

        <section className="blog-index-list" aria-labelledby="articles-title">
          <div className="blog-container">
            <div className="blog-index-heading">
              <div>
                <p className="blog-eyebrow">Conseils</p>
                <h2 id="articles-title">Les derniers articles</h2>
              </div>
              <span>{blogArticles.length} guides pratiques</span>
            </div>

            <div className="blog-card-grid">
              {blogArticles.map((article, index) => (
                <article className={`blog-card ${index === 0 ? "is-featured" : ""}`} key={article.slug}>
                  <a className="blog-card-image" href={`/blog/${article.slug}/`}>
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      loading={index === 0 ? "eager" : "lazy"}
                      width="760"
                      height="520"
                    />
                  </a>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>{article.topic || article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2><a href={`/blog/${article.slug}/`}>{article.title}</a></h2>
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
