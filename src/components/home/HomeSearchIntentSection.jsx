export default function HomeSearchIntentSection() {
  return (
    <section className="home-section home-section-light" aria-labelledby="home-seo-zone-title">
      <div className="home-container">
        <div className="home-section-intro">
          <p className="home-eyebrow">Île-de-France</p>
          <h2 id="home-seo-zone-title">
            Location de photobooth et borne photo à Paris, Melun et en Île-de-France
          </h2>
        </div>

        <p className="home-section-lead">
          MySelfieBooth propose la location de photobooths, photo booths et bornes à selfie
          pour les mariages, anniversaires, séminaires, salons et soirées
          d&apos;entreprise. Les demandes à Paris, en Seine-et-Marne (77), en
          Essonne (91), dans les Hauts-de-Seine (92), en Seine-Saint-Denis (93),
          dans le Val-de-Marne (94), les Yvelines (78) et le Val-d&apos;Oise (95)
          sont étudiées selon la date, le lieu, les accès et la formule choisie.
        </p>

        <p className="home-service-note">
          Photobooth classique, miroir photo, Miroirbooth, borne selfie, cabine photo événementielle,
          360 Booth, Vogue Booth ou activation Event-Tech : comparez les formats, les tarifs et les options
          avant de choisir la solution adaptée à votre événement.
        </p>

        <div className="home-actions">
          <a className="home-button home-button-primary" href="/prestations/photobooth/">
            Location Photobooth & tarifs
          </a>
          <a className="home-button home-button-secondary-dark" href="/prestations/miroirbooth/">
            Location Miroir Photobooth
          </a>
          <a className="home-button home-button-secondary-dark" href="/zones-intervention/">
            Toutes les zones d&apos;intervention
          </a>
          <a className="home-button home-button-secondary-dark" href="/location-photobooth/seine-et-marne/">
            Photobooth Seine-et-Marne 77
          </a>
          <a className="home-button home-button-secondary-dark" href="/location-photobooth/essonne/">
            Photobooth Essonne 91
          </a>
          <a className="home-button home-button-secondary-dark" href="/evenements/corporates/">
            Location Photobooth entreprise
          </a>
          <a className="home-button home-button-secondary-dark" href="/event-tech/">
            Event-Tech & activations
          </a>
          <a className="home-button home-button-secondary-dark" href="/evenements/mariages/">
            Photobooth mariage
          </a>
          <a className="home-button home-button-secondary-dark" href="/blog/prix-location-photobooth/">
            Guide prix Photobooth
          </a>
        </div>
      </div>
    </section>
  );
}
