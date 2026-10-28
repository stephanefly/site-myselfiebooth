import Layout from "../components/Layout";
import localSeoPages from "../data/local-seo-pages.json";
import { photoForArea } from "../data/localPhotos";
import { absoluteUrl, siteConfig } from "../data/site";

const departments = [
  "Seine-et-Marne",
  "Essonne",
  "Hauts-de-Seine",
  "Seine-Saint-Denis",
  "Val-de-Marne",
  "Yvelines",
  "Val-d'Oise",
];

const departmentPages = localSeoPages.filter((item) => item.type === "department");
const cityPages = localSeoPages.filter((item) => item.type === "city");

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zones d'intervention MySelfieBooth",
  itemListElement: [
    { name: "Paris", href: "/paris/" },
    ...localSeoPages.map((item) => ({
      name: item.name,
      href: `/location-photobooth/${item.slug}/`,
    })),
    { name: "Lyon", href: "/lyon/" },
    { name: "Rouen", href: "/rouen/" },
  ].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.href),
  })),
};

function ZonePhoto({ slug }) {
  const photo = photoForArea(slug);
  if (!photo) return null;
  return (
    <figure className="zone-card-media">
      <img src={photo.src} alt={photo.alt} width="960" height="640" loading="lazy" decoding="async" />
      <figcaption>Photo : {photo.author || "Wikimedia Commons"}</figcaption>
    </figure>
  );
}

export default function ZonesIntervention() {
  return (
    <Layout

      showPreFooter={false}
      metaProps={{
        title: "Location Photobooth Île-de-France | Zones d’intervention",
        description:
          "Photobooth, miroir photo, 360 et Vogue Booth à Paris et dans les 8 départements d’Île-de-France. Autres régions françaises sur étude du projet.",
        ogTitle: "Zones d'intervention Photobooth | MySelfieBooth",
        ogDescription:
          "Location de Photobooth, Miroirbooth, 360 Booth et Vogue Booth dans les principales villes d'Île-de-France et sur étude ailleurs en France.",
        ogImage: siteConfig.defaultOgImage,
        ogUrl: absoluteUrl("/zones-intervention/"),
        jsonLd: [itemListJsonLd],
      }}
    >
      <div className="zones-page">
        <section className="zones-hero">
          <div className="zones-container">
            <p className="zones-eyebrow">Zones d'intervention</p>
            <h1>Location de photobooth en Île-de-France et au-delà</h1>
            <p className="zones-lead">
              MySelfieBooth intervient pour les mariages, entreprises, salons, soirées et activations de marque.
              Chaque déplacement est confirmé selon la date, le lieu, les accès, les horaires et le matériel demandé.
            </p>
            <div className="zones-actions">
              <a className="zones-primary" href={siteConfig.quoteUrl}>Obtenir un devis</a>
              <a className="zones-secondary" href="/prestations/">Comparer les animations</a>
            </div>
          </div>
        </section>

        <section className="zones-section">
          <div className="zones-container">
            <div className="zones-heading">
              <p className="zones-eyebrow">Île-de-France</p>
              <h2>Les départements prioritaires</h2>
              <p>
                Retrouvez les informations utiles pour votre département : accès du lieu, préparation et conditions de déplacement.
              </p>
            </div>
            <div className="zones-grid zones-grid-departments">
              {departmentPages.map((area) => (
                <a key={area.slug} className="zone-card zone-card-featured" href={`/location-photobooth/${area.slug}/`}>
                  <ZonePhoto slug={area.slug} />
                  <div className="zone-card-copy">
                    <span>{area.code}</span>
                    <h3>{area.name}</h3>
                    <p>{area.angle}</p>
                  </div>
                </a>
              ))}
              <a className="zone-card zone-card-featured" href="/paris/">
                <ZonePhoto slug="paris" />
                <div className="zone-card-copy">
                  <span>75</span>
                  <h3>Paris</h3>
                  <p>Événements privés, corporate, lancements, salons et activations avec logistique adaptée aux lieux parisiens.</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {departments.map((department) => {
          const items = cityPages.filter((item) => item.department === department);
          if (!items.length) return null;
          return (
            <section className="zones-section zones-section-muted" key={department}>
              <div className="zones-container">
                <div className="zones-heading compact">
                  <p className="zones-eyebrow">Photobooth local</p>
                  <h2>{department}</h2>
                </div>
                <div className="zones-grid">
                  {items.map((area) => (
                    <a key={area.slug} className="zone-card" href={`/location-photobooth/${area.slug}/`}>
                      <ZonePhoto slug={area.slug} />
                      <div className="zone-card-copy">
                        <span>{area.code}</span>
                        <h3>{area.name}</h3>
                        <p>{area.focus}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="zones-section">
          <div className="zones-container">
            <div className="zones-heading">
              <p className="zones-eyebrow">Autres secteurs</p>
              <h2>Paris, Lyon, Rouen et projets sur étude</h2>
              <p>
                Pour les projets corporate, multi-dispositifs ou à forte valeur de personnalisation, nous pouvons étudier des déplacements plus larges selon la date et la logistique.
              </p>
            </div>
            <div className="zones-grid">
              <a className="zone-card" href="/paris/"><ZonePhoto slug="paris-secteur" /><div className="zone-card-copy"><h3>Paris</h3><p>Photobooth premium, entreprise, mariage et activation de marque.</p></div></a>
              <a className="zone-card" href="/lyon/"><ZonePhoto slug="lyon" /><div className="zone-card-copy"><h3>Lyon</h3><p>Prestations photo et vidéo selon disponibilité et conditions de déplacement.</p></div></a>
              <a className="zone-card" href="/rouen/"><ZonePhoto slug="rouen" /><div className="zone-card-copy"><h3>Rouen & Normandie</h3><p>Mariage, entreprise et événements sur étude selon le lieu.</p></div></a>
              <a className="zone-card zone-card-simple" href="/evenements/corporates/"><h3>Événement d’entreprise</h3><p>Animation photo, vidéo et personnalisation pour vos équipes et votre marque.</p></a>
            </div>
          </div>
        </section>

        <section className="zones-cta" data-page-conclusion>
          <div className="zones-container">
            <p className="zones-eyebrow">Votre ville n'est pas listée ?</p>
            <h2>Envoyez-nous le lieu exact de votre événement.</h2>
            <p>Nous vérifions rapidement la disponibilité, le déplacement, les accès et le dispositif adapté.</p>
            <a href={siteConfig.quoteUrl}>Demander un devis</a>
          </div>
        </section>
      </div>

      <style jsx>{`
        .zones-page { background: #f7f3ea; color: #171717; text-align: left; }
        .zones-container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }
        .zones-hero { padding: 128px 0 72px; color: #fff; background: #070707; }
        .zones-eyebrow { margin: 0 0 12px; color: #c59d48; font-size: .78rem; font-weight: 900; letter-spacing: .15rem; text-transform: uppercase; }
        .zones-hero h1, .zones-heading h2, .zones-cta h2 { margin: 0; line-height: 1.04; }
        .zones-hero h1 { max-width: 850px; font-size: clamp(2.4rem, 6vw, 4.7rem); }
        .zones-lead { max-width: 760px; margin: 24px 0 0; color: #ded6c8; font-size: 1.08rem; line-height: 1.7; }
        .zones-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
        .zones-actions a, .zones-cta a { min-height: 46px; display: inline-flex; align-items: center; justify-content: center; padding: 0 20px; border-radius: 999px; font-weight: 900; text-decoration: none; }
        .zones-primary, .zones-cta a { color: #17130a; background: #e5c46b; }
        .zones-secondary { color: #fff; border: 1px solid rgba(255,255,255,.35); }
        .zones-section { padding: 72px 0; }
        .zones-section-muted { padding-top: 38px; padding-bottom: 38px; background: #eee7d9; border-top: 1px solid #ded4c0; }
        .zones-heading { max-width: 760px; margin-bottom: 30px; }
        .zones-heading.compact { margin-bottom: 20px; }
        .zones-heading h2 { font-size: clamp(1.9rem, 4vw, 3.2rem); }
        .zones-heading p:not(.zones-eyebrow) { color: #5e584e; line-height: 1.7; }
        .zones-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 14px; }
        .zones-grid-departments { grid-template-columns: repeat(4, minmax(0,1fr)); }
        .zone-card { display: flex; flex-direction: column; min-height: 245px; padding: 0; overflow: hidden; border: 1px solid #dbd0bb; border-radius: 14px; color: #171717; background: #fff; text-decoration: none; box-shadow: 0 10px 28px rgba(30,20,5,.05); transition: transform .18s ease, border-color .18s ease; }
        .zone-card-media { position: relative; width: 100%; height: 136px; margin: 0; background: #29251c; }
        .zone-card-media img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .zone-card-media figcaption { position: absolute; bottom: 0; right: 0; padding: 4px 7px; color: #fff; background: rgba(0,0,0,.72); font-size: .63rem; line-height: 1.3; }
        .zone-card-copy { flex: 1; padding: 17px 20px 20px; }
        .zone-card-simple { padding: 22px; }
        .zone-card:hover { transform: translateY(-2px); border-color: #c59d48; }
        .zone-card span { color: #a47a27; font-size: .78rem; font-weight: 900; letter-spacing: .1rem; }
        .zone-card h3 { margin: 10px 0 8px; font-size: 1.14rem; }
        .zone-card p { margin: 0; color: #625b50; line-height: 1.55; font-size: .92rem; }
        .zone-card-featured { background: #111; color: #fff; border-color: #312b20; }
        .zone-card-featured .zone-card-media { height: 150px; }
        .zone-card-featured p { color: #d6cdbd; }
        .zones-cta { padding: 82px 0; color: #fff; background: #111; }
        .zones-cta h2 { max-width: 820px; font-size: clamp(2rem, 5vw, 3.8rem); }
        .zones-cta p:not(.zones-eyebrow) { max-width: 700px; color: #d6cdbd; line-height: 1.7; }
        .zones-cta a { margin-top: 16px; }
        @media (max-width: 980px) { .zones-grid, .zones-grid-departments { grid-template-columns: repeat(2, minmax(0,1fr)); } }
        @media (max-width: 620px) { .zones-grid, .zones-grid-departments { grid-template-columns: 1fr; } .zones-hero { padding-top: 104px; } }
      `}</style>
    </Layout>
  );
}
