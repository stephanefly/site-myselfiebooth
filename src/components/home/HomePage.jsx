import {
  audiences,
  brandLogos,
  comparisonRows,
  faqs,
  founderStory,
  galleryHighlights,
  marketPaths,
  optionHighlights,
  processSteps,
  proofPoints,
  selectorNeeds,
  services,
  trustCards,
} from "../../data/home";
import { siteConfig } from "../../data/site";
import ImageSlot from "../ImageSlot";

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="home-section-intro">
      <p className="home-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function QuoteButton({ className = "home-button home-button-primary" }) {
  return (
    <a
      className={className}
      href={siteConfig.quoteUrl}
      data-event="cta_quote_click"
    >
      {siteConfig.primaryCtaLabel}
    </a>
  );
}

function LogoStrip() {
  return (
    <div className="home-logo-strip" aria-label="References clients affichees">
      {brandLogos.map((logo) => (
        <img key={logo.name} src={logo.src} alt={logo.name} width="140" height="42" />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-media" aria-hidden="true">
          <img
            src="/images/ai/hero-photobooth-evenement-premium.webp"
            alt=""
            width="1672"
            height="941"
            fetchPriority="high"
          />
        </div>
        <div className="home-hero-overlay" />

        <div className="home-container home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-eyebrow">Photobooth premium - {siteConfig.mainArea}</p>
            <h1>Location de photobooth pour mariages, entreprises et grands événements.</h1>
            <p>
              MySelfieBooth installe des animations photo et vidéo premium :
              Photobooth, Miroirbooth, 360 Booth, Vogue Booth et options
              souvenirs, avec un parcours de devis rapide et clair.
            </p>
            <div className="home-actions">
              <QuoteButton />
              <a className="home-button home-button-secondary" href="#comparateur">
                {siteConfig.secondaryCtaLabel}
              </a>
              <a className="home-button home-button-ghost" href={siteConfig.phoneHref} data-event="phone_click">
                {siteConfig.phoneCtaLabel}
              </a>
            </div>
            <p className="home-microcopy">{siteConfig.microcopy}</p>
            <p className="home-ai-note">Visuel d'ambiance généré par IA.</p>
          </div>

          <aside className="home-hero-panel" aria-label="Preuves MySelfieBooth">
            <p>Deja visible sur des evenements premium</p>
            <LogoStrip />
            <div className="home-proof-grid">
              {proofPoints.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="home-section home-section-muted">
        <div className="home-container">
          <SectionIntro
            eyebrow="Deux parcours"
            title="Entreprises ou particuliers : trouvez le bon chemin sans fouiller."
            text="Le site garde les mariages et événements privés au premier plan, tout en donnant aux professionnels un accès direct aux informations utiles."
          />
          <div className="home-path-grid">
            {marketPaths.map((path) => (
              <a
                key={path.href}
                href={path.href}
                className="home-path-card"
                data-event="market_path_click"
                data-event-label={path.eyebrow}
              >
                <span>{path.eyebrow}</span>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                <strong>{path.cta}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-light">
        <div className="home-container">
          <SectionIntro
            eyebrow="Choisir vite"
            title="Quelle animation correspond a votre objectif ?"
            text="Le bon format dépend d'abord du résultat attendu : imprimer, filmer, recevoir beaucoup d'invités, économiser l'espace ou créer un effet premium."
          />
          <div className="home-selector-grid">
            {selectorNeeds.map((item) => (
              <a key={item.need} href={item.href} className="home-selector-card">
                <span>{item.need}</span>
                <strong>{item.answer}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="prestations" className="home-section home-section-light">
        <div className="home-container">
          <SectionIntro
            eyebrow="Nos animations"
            title="Toutes les machines importantes sont faciles à comparer"
            text="Chaque animation garde son rôle : photo imprimée, vidéo 360, format compact, studio lumineux ou pack complet."
          />
          <div className="home-service-grid">
            {services.map((service) => (
              <article key={service.title} className="home-service-card">
                <a href={service.href} className="home-service-image" data-event="machine_view">
                  <img src={service.image} alt={service.title} loading="lazy" width="520" height="390" />
                  <span>{service.tag}</span>
                </a>
                <div className="home-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="home-service-footer">
                    <strong>{service.price}</strong>
                    <a href={service.href}>Details</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comparateur" className="home-section home-section-muted">
        <div className="home-container">
          <SectionIntro
            eyebrow="Comparateur"
            title="Comparer sans tableau illisible sur mobile"
            text="Les informations ci-dessous restent prudentes lorsque la prestation dépend de la formule, du lieu ou du volume d'invités."
          />
          <div className="home-comparison-grid">
            {comparisonRows.map((machine) => (
              <article key={machine.name} className="home-comparison-card" data-event="machine_compare">
                <img src={machine.image} alt={machine.name} loading="lazy" width="420" height="315" />
                <div>
                  <h3>{machine.name}</h3>
                  <dl>
                    <div><dt>Impression</dt><dd>{machine.print}</dd></div>
                    <div><dt>Participants</dt><dd>{machine.participants}</dd></div>
                    <div><dt>Espace</dt><dd>{machine.space}</dd></div>
                    <div><dt>Animateur</dt><dd>{machine.attendant}</dd></div>
                    <div><dt>Usage</dt><dd>{machine.bestFor}</dd></div>
                  </dl>
                  <a href={machine.href}>Voir la page</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-light">
        <div className="home-container">
          <SectionIntro
            eyebrow="Vos événements"
            title="Un parcours clair pour chaque contexte"
            text="Mariage, entreprise, anniversaire ou soirée VIP : les contraintes ne sont pas les mêmes, les recommandations non plus."
          />
          <div className="home-audience-grid">
            {audiences.map((item) => (
              <a key={item.title} className="home-audience-card" href={item.href}>
                <img src={item.image} alt="" loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>{item.bestMachines.join(" + ")}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-dark">
        <div className="home-container home-split">
          <div>
            <p className="home-eyebrow">Tout est pris en charge</p>
            <h2>Une prestation qui rassure avant, pendant et après.</h2>
            <p>
              Le site explique ce qui compte vraiment: preparation, logistique,
              personnalisation, animation et recuperation des contenus.
            </p>
            <QuoteButton className="home-button home-button-primary home-inline-cta" />
          </div>
          <div className="home-process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className="home-process-card">
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="options" className="home-section home-section-light">
        <div className="home-container">
          <SectionIntro
            eyebrow="Packs et options"
            title="Ajouter du souvenir sans compliquer le choix"
            text="Le hub options reste complet, mais la home montre les compléments qui aident le plus à se projeter."
          />
          <div className="home-option-grid">
            {optionHighlights.map((option) => (
              <article key={option.name} className="home-option-card">
                <img src={option.image} alt={option.name} loading="lazy" width="360" height="360" />
                <div>
                  <h3>{option.name}</h3>
                  <p>{option.text}</p>
                  {option.href && <a href={option.href}>En savoir plus</a>}
                </div>
              </article>
            ))}
          </div>
          <div className="home-centered-action">
            <a href="/options" className="home-button home-button-secondary-dark">
              Voir toutes les options
            </a>
          </div>
        </div>
      </section>

      <section id="realisations" className="home-section home-section-light">
        <div className="home-container">
          <SectionIntro
            eyebrow="Réalisations"
            title="Des images pour comprendre le rendu attendu"
            text="Photos réelles conservées et visuels d'ambiance IA clairement utilisés comme supports éditoriaux, jamais comme faux avis ou faux client."
          />
          <div className="home-gallery-grid">
            {galleryHighlights.map((item) => (
              <article key={item.title} className="home-gallery-card" data-event="gallery_open">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.note && <span>{item.note}</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-muted">
        <div className="home-container home-split">
          <div>
            <p className="home-eyebrow">Confiance</p>
            <h2>Une image premium, mais des preuves à garder honnêtes.</h2>
            <p>
              Les logos et chiffres visibles sont conserves, centralises et
              listes dans les contenus a valider lorsque leur source doit etre
              confirmee.
            </p>
          </div>
          <div className="home-trust-grid">
            {trustCards.map((item) => (
              <article key={item.title} className="home-trust-card is-light">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-light">
        <div className="home-container home-story-grid">
          <ImageSlot slotId={founderStory.imageSlotId} />
          <div>
            <p className="home-eyebrow">{founderStory.eyebrow}</p>
            <h2>{founderStory.title}</h2>
            <p>{founderStory.text}</p>
            <a href={founderStory.href}>{founderStory.linkLabel}</a>
          </div>
        </div>
      </section>

      <section className="home-section home-section-light">
        <div className="home-container home-zone-layout">
          <div>
            <p className="home-eyebrow">Zone d'intervention</p>
            <h2>Priorité à Paris et l'Île-de-France, avec pages locales existantes conservées.</h2>
            <p>
              Les pages Paris, Lyon et Rouen restent accessibles. Les zones
              doivent etre confirmees commercialement avant d'en faire des
              cibles SEO plus agressives.
            </p>
          </div>
          <div className="home-zone-links">
            <a href="/paris">Paris</a>
            <a href="/lyon">Lyon</a>
            <a href="/rouen">Rouen</a>
          </div>
        </div>
      </section>

      <section className="home-section home-section-light">
        <div className="home-container home-faq-layout">
          <div>
            <p className="home-eyebrow">Questions rapides</p>
            <h2>Les réponses qui rassurent avant le devis</h2>
            <p>
              Les details commerciaux restent dans le devis, mais les questions
              logistiques importantes doivent etre visibles avant le clic.
            </p>
            <QuoteButton />
          </div>
          <div className="home-faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
