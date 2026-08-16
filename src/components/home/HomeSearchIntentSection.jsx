export default function HomeSearchIntentSection() {
  return (
    <section className="home-section home-section-light" aria-labelledby="home-seo-zone-title">
      <div className="home-container">
        <div className="home-section-intro">
          <p className="home-eyebrow">Île-de-France</p>
          <h2 id="home-seo-zone-title">
            Location de photobooth à Paris, Melun et en Seine-et-Marne (77)
          </h2>
        </div>

        <p className="home-section-lead">
          MySelfieBooth intervient pour les mariages, anniversaires, séminaires,
          salons et soirées d&apos;entreprise en Île-de-France. Les demandes autour
          de Melun et en Seine-et-Marne sont étudiées selon la date, le lieu,
          les accès et la formule choisie.
        </p>

        <p className="home-service-note">
          Pour comparer rapidement les solutions, consultez la location de
          Photobooth et ses tarifs, les animations pour entreprise, les offres
          mariage ou notre guide consacré au prix d&apos;une location de photobooth.
        </p>

        <div className="home-actions">
          <a className="home-button home-button-primary" href="/prestations/photobooth/">
            Location Photobooth & tarifs
          </a>
          <a className="home-button home-button-secondary-dark" href="/evenements/corporates/">
            Photobooth entreprise
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
