import BlogArticle from "../../components/blog/BlogArticle";
import { blogArticles, getBlogArticle } from "../../data/blogArticles";

export default function BlogArticlePage({ article }) {
  return <BlogArticle article={article} />;
}

export function getStaticPaths() {
  return {
    paths: blogArticles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      article: getBlogArticle(params.slug),
    },
  };
}
