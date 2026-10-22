import VisualGallery, { VisualImage, serviceGalleries } from "../VisualGallery";
import ServiceAreaLinks from "../ServiceAreaLinks";
import { pageSeo } from "../../data/pageSeo";
import premiumVisuals from "../../data/premiumVisuals.json";
import { absoluteUrl, faqJsonLd } from "../../data/site";
import Layout from "../Layout";
import { useRouter } from "next/router";
import pageVisuals from "../../data/pageVisuals.json";
import useRevealMotion from "../../hooks/useRevealMotion";
import { siteConfig } from "../../data/site";

const bookingUrl = siteConfig.quoteUrl;

function SectionHeader({ eyebrow, title }) {
  return (
    <header className="marketing-section-header">
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{title}</h2>
    </header>
  );
}

function CardGrid({ cards = [] }) {
  if (!cards.length) return null;

  return (
    <div className="marketing-card-grid">
      {cards.slice(0, 4).map((card, index) => (
        <article
          key={`${card.title}-${index}`}
          className="marketing-card"
          data-reveal
          style={{ "--reveal-delay": `${Math.min(index, 5) * 45}ms` }}
        >
          <div className="marketing-card-body">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function getSectionId(section, index) {
  return section.anchor || `section-${index + 1}`;
}

function QuickNavigation({ page }) {
  const links = (page.sections || []).slice(0, 3).map((section, index) => ({
    href: `#${getSectionId(section, index)}`,
    label: section.eyebrow || section.title,
  }));

  if ((page.comparison || []).length) links.push({ href: "#comparatif", label: "Comparer" });
  if ((page.caseStudies || []).length) links.push({ href: "#cas-entreprise", label: "Cas réels" });
  if ((page.testimonials || []).length) links.push({ href: "#avis-clients", label: "Avis" });
  if ((page.faq || []).length) links.push({ href: "#faq", label: "FAQ" });

  return (
    <nav className="marketing-quick-nav" aria-label="Accès rapide">
      <div className="marketing-container marketing-quick-nav-inner">
        <strong>Accès rapide</strong>
        <div>
          {links.slice(0, 6).map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <a className="marketing-quick-cta" href={bookingUrl}>Devis</a>
      </div>
    </nav>
  );
}

function PathwayGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="parcours" className="marketing-section is-muted" data-reveal>
      <div className="marketing-container">
        <SectionHeader eyebrow="Parcours" title="Choisissez votre objectif" />
        <div className="marketing-pathway-grid">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="marketing-pathway-card">
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="comparatif" className="marketing-section is-muted" data-reveal>
      <div className="marketing-container">
        <SectionHeader eyebrow="Comparer" title="Comparez les formats" />
        <div className="marketing-comparison-grid">
          {items.map((item) => (
            <article key={item.title} className="marketing-comparison-card">
              <div>
                <h3>{item.title}</h3>
                <dl>
                  {(item.rows || []).map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                {item.href && <a href={item.href}>Voir cette animation</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OptionGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="options-detail" className="marketing-section" data-reveal>
      <div className="marketing-container">
        <SectionHeader eyebrow="Options" title="Choisissez vos options" />
        <div className="marketing-option-grid">
          {items.map((item) => (
            <article key={item.name} className="marketing-option-card">
              <h3>{item.name}</h3>
              {item.text && <p>{item.text}</p>}
              {item.href && <a href={item.href}>Détails</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="cas-entreprise" className="marketing-section is-muted" data-reveal>
      <div className="marketing-container">
        <SectionHeader eyebrow="Études de cas réelles" title="Des dispositifs installés sur de vrais événements" />
        <div className="marketing-case-grid">
          {items.map((item) => (
            <article key={item.title} className="marketing-case-card">
              <div className="marketing-case-copy">
                {item.client && <span>Cas réel · {item.client}</span>}
                <h3>{item.title}</h3>
                {item.context && <p><strong>Contexte :</strong> {item.context}</p>}
                {item.solution && <p><strong>Dispositif :</strong> {item.solution}</p>}
                {item.result && <p><strong>Rendu livré :</strong> {item.result}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="avis-clients" className="marketing-section is-dark" data-reveal>
      <div className="marketing-container">
        <SectionHeader eyebrow="Avis Google" title={`${siteConfig.reviews.rating} selon nos clients`} />
        <div className="marketing-testimonial-grid">
          {items.map((item) => (
            <article key={item.name} className="marketing-testimonial-card">
              <span aria-label="5 étoiles sur 5">★★★★★</span>
              <blockquote>“{item.text}”</blockquote>
              <strong>{item.name}</strong>
              <small>Avis publié sur Google</small>
            </article>
          ))}
        </div>
        <a className="marketing-reviews-link" href={siteConfig.reviewsUrl} target="_blank" rel="noreferrer">
          Consulter les {siteConfig.reviews.count} avis Google
        </a>
      </div>
    </section>
  );
}

function FounderStory({ story }) {
  if (!story) return null;

  return (
    <section id="histoire" className="marketing-section" data-reveal>
      <div className="marketing-container marketing-story-grid">
        <div>
          <p className="marketing-eyebrow">{story.eyebrow}</p>
          <h2>{story.title}</h2>
          <p>{story.text}</p>
          {story.href && <a href={story.href}>{story.linkLabel}</a>}
        </div>
      </div>
    </section>
  );
}

export default function MarketingPage({ page }) {
  const pageRef = useRevealMotion(page.key);
  const router = useRouter();
  const pagePath = `${router.asPath.split(/[?#]/)[0].replace(/\/$/, "")}/`;
  const seo = pageSeo[pagePath];
  const heroVisual = page.heroVisual || page.illustration || (seo?.visual ? premiumVisuals[seo.visual] : pageVisuals[pagePath]);
  const meta = {
    ...page.meta,
    ...(seo ? { title: seo.title, description: seo.description, ogTitle: seo.title, ogDescription: seo.description } : {}),
    ...(heroVisual ? { ogImage: heroVisual.src, ogImageAlt: heroVisual.alt } : {}),
    jsonLd: [...(page.meta.jsonLd || []).filter(entry => entry["@type"] !== "FAQPage").map(entry => entry["@type"] === "Service" ? {
      ...entry,
      ...(heroVisual ? { image: absoluteUrl(heroVisual.src) } : {}),
      ...(seo ? { name: seo.heading || page.title, description: seo.description } : {}),
    } : entry), faqJsonLd(page.faq || [])].filter(Boolean),
  };

  return (
    <Layout showPreFooter={false} metaProps={meta}>
      <article className="marketing-page" ref={pageRef}>
        <section className="marketing-hero">
          <div className="marketing-container marketing-hero-grid">
            <div className="marketing-hero-copy" data-reveal>
              <p className="marketing-eyebrow">{page.eyebrow}</p>
              <h1>{seo?.heading || page.title}</h1>
              <p>{page.description}</p>
              <div className="marketing-actions">
                <a
                  className="marketing-button primary"
                  href={page.primaryCta?.href || bookingUrl}
                  data-event={page.primaryCta?.event || "cta_quote_click"}
                  data-event-label={page.primaryCta?.label || "Demander un devis"}
                >
                  {page.primaryCta?.label || "Demander un devis"}
                </a>
                <a
                  className="marketing-button secondary"
                  href={page.secondaryCta?.href || "/prestations"}
                  data-event={page.secondaryCta?.event}
                  data-event-label={page.secondaryCta?.label}
                >
                  {page.secondaryCta?.label || "Voir les prestations"}
                </a>
                {page.phoneCta && (
                  <a
                    className="marketing-button ghost"
                    href={page.phoneCta.href}
                    data-event="phone_click"
                    data-event-label={page.phoneCta.label}
                  >
                    {page.phoneCta.label}
                  </a>
                )}
              </div>
            </div>
            {heroVisual && <figure className="marketing-hero-media" data-reveal>
              {seo?.visual && !page.illustration ? <VisualImage name={seo.visual} priority sizes="(max-width: 760px) 92vw, 560px" /> : <img src={heroVisual.src} alt={heroVisual.alt} width={page.illustration ? 960 : 900} height={page.illustration ? 640 : 900} fetchPriority="high" decoding="async" />}
              {page.illustration && <figcaption>Illustration d’ambiance pour votre événement.</figcaption>}
              {seo?.visual && <figcaption>Visuel de projection.</figcaption>}
            {(page.highlights || []).length > 0 && (
              <aside className="marketing-hero-proof" data-reveal>
                {(page.highlights || []).map((item) => <span key={item}>{item}</span>)}
              </aside>
            )}
            </figure>}
          </div>
        </section>

        {(page.proof || []).length > 0 && (
          <section className="marketing-proof-band">
            <div className="marketing-container marketing-proof-grid">
              {page.proof.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <QuickNavigation page={page} />
        <VisualGallery items={serviceGalleries[seo?.visual]} />
        <PathwayGrid items={page.pathways || []} />

        {(page.sections || []).map((section, index) => (
          <section
            key={section.title}
            id={getSectionId(section, index)}
            className={`marketing-section ${index % 2 === 1 ? "is-muted" : ""}`}
          >
            <div className="marketing-container">
              <div className="marketing-section-heading-row" data-reveal>
                <SectionHeader eyebrow={section.eyebrow} title={section.title} />
              </div>
              {section.text && <p className="marketing-section-lead" data-reveal>{section.text}</p>}
              <CardGrid cards={section.cards || []} />
            </div>
          </section>
        ))}

        <ComparisonGrid items={page.comparison || []} />
        <OptionGrid items={page.optionGrid || []} />
        <CaseStudyGrid items={page.caseStudies || []} />
        <TestimonialGrid items={page.testimonials || []} />

        {(page.faq || []).length > 0 && (
          <section id="faq" className="marketing-section" data-reveal>
            <div className="marketing-container marketing-faq-layout">
              <SectionHeader eyebrow="FAQ" title="Questions fréquentes" />
              <div className="marketing-faq-list">
                {page.faq.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {(page.relatedLinks || []).length > 0 && (
          <section id="liens-utiles" className="marketing-section is-muted" data-reveal>
            <div className="marketing-container">
              <SectionHeader eyebrow="À découvrir" title="Continuez votre visite" />
              <div className="marketing-related-grid">
                {page.relatedLinks.map((link) => (
                  <a key={link.href} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          </section>
        )}

        <FounderStory story={page.story} />
        {seo?.visual && <ServiceAreaLinks />}

        <section className="marketing-final-cta" data-page-conclusion data-reveal>
          <div className="marketing-container">
            <p>{page.finalEyebrow || "Votre événement"}</p>
            <h2>{page.finalTitle || "Recevez votre proposition personnalisée."}</h2>
            <a href={bookingUrl} data-event="cta_quote_click" data-event-label="CTA final">
              Demander mon devis
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
