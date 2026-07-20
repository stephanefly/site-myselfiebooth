import {
  audiences,
  brandLogos,
  faqs,
  galleryHighlights,
  processSteps,
  proofPoints,
  services,
  trustCards,
} from "../../data/home";

const bookingUrl = "https://reservation.myselfiebooth-paris.fr";

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="home-section-intro">
      <p className="home-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function LogoStrip() {
  return (
    <div className="home-logo-strip" aria-label="References clients">
      {brandLogos.map((logo) => (
        <img key={logo.name} src={logo.src} alt={logo.name} />
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
            src="/images/generated/premium-corporate-photobooth.webp"
            alt=""
          />
        </div>
        <div className="home-hero-overlay" />

        <div className="home-container home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-eyebrow">Photobooth premium - Paris, Lyon, Rouen</p>
            <h1>Une animation photo elegante qui donne confiance des le premier regard.</h1>
            <p>
              MySelfieBooth accompagne les entreprises, agences, marques et
              particuliers avec des photobooths premium, une installation cle en
              main et une experience fluide pour les invites.
            </p>
            <div className="home-actions">
              <a className="home-button home-button-primary" href={bookingUrl}>
                Estimer mon prix
              </a>
              <a className="home-button home-button-secondary" href="/evenements/corporates">
                Voir l'offre entreprise
              </a>
            </div>
          </div>

          <aside className="home-hero-panel" aria-label="Preuves MySelfieBooth">
            <p>Deja choisi pour des evenements premium</p>
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

      <section className="home-section home-section-light">
        <div className="home-container">
          <SectionIntro
            eyebrow="Pour qui"
            title="Un parcours clair pour chaque type d'evenement"
            text="Le site doit guider vite. On distingue les besoins professionnels, les mariages et les evenements prives pour orienter le visiteur vers la bonne offre."
          />
          <div className="home-audience-grid">
            {audiences.map((item) => (
              <a key={item.title} className="home-audience-card" href={item.href}>
                <img src={item.image} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>Decouvrir</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-dark">
        <div className="home-container home-split">
          <div>
            <p className="home-eyebrow">Positionnement</p>
            <h2>Une presence sobre, premium et memorable.</h2>
            <p>
              Le site doit inspirer la meme chose qu'une grande marque: clarte,
              maitrise, belles images, peu de bruit et des preuves visibles.
            </p>
          </div>
          <div className="home-trust-grid">
            {trustCards.map((item) => (
              <article key={item.title} className="home-trust-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-light">
        <div className="home-container">
          <SectionIntro
            eyebrow="Realisations"
            title="Des images qui parlent avant meme le devis"
            text="Une selection plus proche de l'univers Instagram MySelfieBooth: tirages, invites, options et installations soignees, avec une direction visuelle premium."
          />
          <div className="home-gallery-grid">
            {galleryHighlights.map((item) => (
              <article key={item.title} className="home-gallery-card">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="prestations" className="home-section home-section-light">
        <div className="home-container">
          <SectionIntro
            eyebrow="Prestations"
            title="Les formats les plus efficaces"
            text="Une gamme lisible, courte et orientee choix. Le visiteur comprend vite quel booth correspond a son evenement."
          />
          <div className="home-service-grid">
            {services.map((service) => (
              <article key={service.title} className="home-service-card">
                <a href={service.href} className="home-service-image">
                  <img src={service.image} alt={service.title} />
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

      <section className="home-section home-section-muted">
        <div className="home-container">
          <SectionIntro
            eyebrow="Methode"
            title="Un deroule simple, rassurant, professionnel"
            text="Plus le parcours est clair, plus le client se projette. Chaque etape reduit l'incertitude avant la demande de devis."
          />
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

      <section className="home-section home-section-light">
        <div className="home-container home-faq-layout">
          <div>
            <p className="home-eyebrow">Questions rapides</p>
            <h2>Les reponses qui rassurent avant le devis</h2>
            <p>
              Le but est de lever les freins sans noyer le visiteur. Les details
              commerciaux restent dans l'echange ou le formulaire.
            </p>
            <a className="home-button home-button-primary" href={bookingUrl}>
              Demander un devis
            </a>
          </div>
          <div className="home-faq-list">
            {faqs.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
