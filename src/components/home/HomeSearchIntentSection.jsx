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
          MySelfieBooth propose la location de photobooths et bornes à selfie
          pour les mariages, anniversaires, séminaires, salons et soirées
          d&apos;entreprise. Les demandes à Paris, autour de Melun, en
          Seine-et-Marne (77), en Essonne et dans le reste de l&apos;Île-de-France
          sont étudiées selon la date, le lieu, les accès et la formule choisie.
        </p>

        <p className="home-service-note">
          Photobooth classique, miroir photo, borne selfie ou animation vidéo :
          comparez les formats, les tarifs et les options avant de choisir la
          solution adaptée à votre événement.
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
