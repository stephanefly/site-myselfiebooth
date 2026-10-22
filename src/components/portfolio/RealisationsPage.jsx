import { useEffect, useMemo, useRef, useState } from "react";
import Layout from "../Layout";
import {
  brandLogos,
  breadcrumbJsonLd,
  siteConfig,
  trustSignals,
} from "../../data/site";
import { googleReviews } from "../../data/home";
import { VideoProvider, useVideoPolicy } from "./showroom/VideoProvider";
import VideoSurface from "./showroom/VideoSurface";
import PortfolioGallery from "./showroom/PortfolioGallery";
import MediaViewer from "./showroom/MediaViewer";
import {
  Backstage,
  CorporateProof,
  Experiences,
  GuestMoments,
  Stories,
} from "./showroom/StorySections";
import { Arrow } from "./showroom/icons";
import { trackPortfolio } from "./showroom/model.mjs";
import styles from "./showroom/Showroom.module.css";

const reviews = [googleReviews[0], googleReviews[1], googleReviews[4]];
function pageSchema(portfolio) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Les événements MySelfieBooth",
    url: `${siteConfig.baseUrl}/realisations/`,
    description:
      "Films et photographies de mariages, soirées, événements professionnels et coulisses MySelfieBooth.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: portfolio.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": item.type === "video" ? "MediaObject" : "ImageObject",
          name: item.title,
          description: item.description,
          contentUrl: `${siteConfig.baseUrl}${item.src}`,
          thumbnailUrl: `${siteConfig.baseUrl}${item.poster}`,
        },
      })),
    },
  };
}

function ShowroomContent({ showroom: manifest }) {
  const byId = useMemo(
    () => Object.fromEntries(manifest.assets.map((item) => [item.id, item])),
    [manifest],
  );
  const portfolio = useMemo(
    () => manifest.portfolio.map((id) => byId[id]),
    [manifest, byId],
  );
  const hero = byId[manifest.page.hero],
    showreel = byId[manifest.page.showreel],
    finalMedia = byId[manifest.page.final];
  const [selection, setSelection] = useState(null);
  const { coordinator } = useVideoPolicy();
  const root = useRef(null),
    seen = useRef(false);
  const storyMedia = useMemo(
    () => manifest.stories.filter((item) => byId[item.mediaId]),
    [manifest, byId],
  );
  const open = (id, trigger, items = portfolio, supplements = []) => {
    coordinator.pauseAll();
    setSelection({
      id,
      trigger,
      playlist: items.map((item) => item.id),
      supplements,
    });
    trackPortfolio("portfolio_viewer_open", byId[id].title, { media_id: id });
  };
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !seen.current) {
          seen.current = true;
          trackPortfolio("portfolio_view", "Réalisations");
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  const move = (id) => {
    coordinator.pauseAll();
    setSelection((current) => ({
      ...current,
      id,
      supplements:
        manifest.stories.find((story) => story.mediaId === id)?.supplements ||
        [],
    }));
    trackPortfolio("portfolio_viewer_navigation", byId[id].title, {
      media_id: id,
    });
  };
  return (
    <div className={styles.page} ref={root} data-showroom>
      <section
        className={`marketing-realisations ${styles.hero}`}
        aria-labelledby="showroom-title"
      >
        <div className={styles.heroMedia}>
          <VideoSurface
            media={hero}
            poster={hero.variants?.hero}
            mode="background"
            priority
          />
          <div className={styles.heroGradient} />
          <div className={styles.heroFilmCaption}>
            <span className={styles.liveDot} />
            En réception · 360 Booth
          </div>
        </div>
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Les réalisations MySelfieBooth</p>
            <h1 id="showroom-title">
              Ils ont vécu l’expérience.
              <br />
              <em>À vous de créer la vôtre.</em>
            </h1>
            <p>
              Des mariages aux événements de marque, découvrez les moments que
              nos animations font vivre aux invités.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#films">
                Découvrir nos réalisations <Arrow down />
              </a>
              <a
                className={styles.textLink}
                href={siteConfig.contactUrl}
                data-event="contact_click"
              >
                Imaginer mon événement <Arrow />
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.wrap} ${styles.trust}`}>
          {trustSignals.map((signal) => {
            const content = (
              <>
                <strong>{signal.value}</strong>
                <span>{signal.label}</span>
              </>
            );
            return signal.href ? (
              <a
                href={signal.href}
                key={signal.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={signal.label}>{content}</div>
            );
          })}
        </div>
      </section>

      <section
        className={`marketing-realisations ${styles.section} ${styles.showreel}`}
        aria-labelledby="showreel-title"
      >
        <div className={`${styles.wrap} ${styles.showreelGrid}`}>
          <div className={styles.showreelPlayer}>
            <VideoSurface media={showreel} mode="player" fit="contain" />
            <span className={styles.playerEyebrow}>Best of MySelfieBooth</span>
          </div>
          <div className={styles.showreelCopy}>
            <p className={styles.eyebrow}>01 / Entrez dans l’ambiance</p>
            <h2 id="showreel-title">
              Un aperçu.
              <br />
              <em>Toute l’énergie.</em>
            </h2>
            <p>
              Les machines, les invités, les souvenirs. Quelques instants pour
              découvrir l’univers MySelfieBooth.
            </p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <strong>On se retrouve.</strong>
                  <p>Une animation devient le point de rencontre de la fête.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>On se prend au jeu.</strong>
                  <p>Photos, poses et vidéos : chacun crée son moment.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>On garde le souvenir.</strong>
                  <p>Un tirage, un portrait ou une vidéo à partager.</p>
                </div>
              </li>
            </ol>
            <a
              className={styles.textLink}
              href={siteConfig.quoteUrl}
              data-event="cta_quote_click"
            >
              Préparer mon devis <Arrow />
            </a>
          </div>
        </div>
      </section>

      <PortfolioGallery
        items={portfolio}
        initialCount={manifest.initialVisible}
        onOpen={open}
      />
      <Stories stories={storyMedia} byId={byId} onOpen={open} />
      <CorporateProof
        media={byId["sephora-extrait"]}
        logos={brandLogos}
        companyUrl="/evenements/corporates/"
        onOpen={open}
      />
      <GuestMoments
        media={manifest.guests.map((id) => byId[id]).filter(Boolean)}
        onOpen={open}
      />
      <Backstage
        media={manifest.backstage.map((id) => byId[id]).filter(Boolean)}
        onOpen={open}
      />

      <section
        className={`marketing-realisations ${styles.section} ${styles.reviews}`}
        id="avis-reels"
        aria-labelledby="reviews-title"
      >
        <div className={styles.wrap}>
          <header className={styles.heading}>
            <div>
              <p className={styles.eyebrow}>07 / Ce qu’ils en disent</p>
              <h2 id="reviews-title">
                Les souvenirs restent.
                <br />
                <em>Leurs mots aussi.</em>
              </h2>
            </div>
            <a
              className={styles.reviewSummary}
              href={siteConfig.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.stars} aria-label="Avis Google">
                ★★★★★
              </span>
              <strong>{siteConfig.reviews.rating}</strong>
              <span>
                {siteConfig.reviews.count} avis Google <Arrow />
              </span>
            </a>
          </header>
          <div className={styles.reviewGrid}>
            {reviews.map((review) => (
              <figure key={review.name}>
                <span
                  className={styles.stars}
                  aria-label={`${review.rating} étoiles sur 5`}
                >
                  {"★".repeat(review.rating)}
                </span>
                <blockquote>« {review.text} »</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  <a
                    href={siteConfig.reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Avis Google · extrait <Arrow />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.reviewCta}>
            <p>À votre tour de préparer un moment qui compte.</p>
            <a
              href={siteConfig.quoteUrl}
              className={styles.secondaryButton}
              data-event="cta_quote_click"
            >
              Demander mon devis <Arrow />
            </a>
          </div>
        </div>
      </section>

      <Experiences items={manifest.experiences} byId={byId} />
      <section
        className={`marketing-realisations ${styles.final}`}
        data-page-conclusion
        aria-labelledby="final-title"
      >
        <div className={styles.finalMedia}>
          <VideoSurface
            media={finalMedia}
            poster={finalMedia.variants?.final}
            mode="background"
          />
        </div>
        <div className={styles.finalShade} />
        <div className={`${styles.wrap} ${styles.finalCopy}`}>
          <p className={styles.eyebrow}>Le prochain souvenir commence ici.</p>
          <h2 id="final-title">
            Le prochain événement
            <br />
            que l’on aura envie de montrer,
            <br />
            <em>c’est le vôtre.</em>
          </h2>
          <p>
            Mariage, anniversaire, soirée d’entreprise ou événement sur mesure :
            imaginons ensemble une expérience mémorable.
          </p>
          <div className={styles.actions}>
            <a
              href={siteConfig.quoteUrl}
              className={styles.primaryButton}
              data-event="cta_quote_click"
            >
              Créer mon événement <Arrow />
            </a>
            <a href="/prestations/" className={styles.secondaryButton}>
              Découvrir nos prestations <Arrow />
            </a>
          </div>
        </div>
      </section>
      <MediaViewer
        selection={selection}
        onClose={() => {
          coordinator.pauseAll();
          setSelection(null);
        }}
        onMove={move}
        byId={byId}
        contactUrl={siteConfig.contactUrl}
        quoteUrl={siteConfig.quoteUrl}
      />
    </div>
  );
}
export default function RealisationsPage({ showroom }) {
  const byId = Object.fromEntries(
    showroom.assets.map((item) => [item.id, item]),
  );
  const hero = byId[showroom.page.hero];
  const schema = pageSchema(showroom.portfolio.map((id) => byId[id]));
  return (
    <Layout
      showPreFooter={false}
      metaProps={{
        title:
          "Réalisations Photobooth : Mariages & Entreprises | MySelfieBooth",
        description:
          "Vivez nos réalisations en photos et vidéos : mariages, soirées, animation Sephora, Photobooth, Miroirbooth, VogueBooth, 360 et coulisses MySelfieBooth.",
        ogUrl: "/realisations/",
        ogImage: hero.variants?.hero || hero.poster,
        ogImageAlt: hero.alt,
        jsonLd: [
          breadcrumbJsonLd([
            { label: "Accueil", href: "/" },
            { label: "Réalisations", href: "/realisations/" },
          ]),
          schema,
        ],
      }}
    >
      <VideoProvider>
        <ShowroomContent showroom={showroom} />
      </VideoProvider>
    </Layout>
  );
}
