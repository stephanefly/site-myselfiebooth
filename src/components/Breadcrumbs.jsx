import { useRouter } from "next/router";

const routeLabels = {
  prestations: "Prestations",
  photobooth: "Photobooth",
  miroirbooth: "Miroirbooth",
  videobooth: "360 Booth",
  voguebooth: "Vogue Booth",
  ipadbooth: "iPad Booth",
  air360booth: "Air360 Booth",
  packvip: "Pack VIP",
  personnalise: "Sur mesure",
  evenements: "Événements",
  corporates: "Entreprises",
  mariages: "Mariages",
  anniversaires: "Anniversaires",
  soirees: "Soirées",
  options: "Options",
  phonebooth: "Phonebooth",
  panneau: "Panneau de bienvenue",
  realisations: "Réalisations",
  "a-propos": "À propos",
  blog: "Blog",
  paris: "Paris et Île-de-France",
  lyon: "Lyon",
  rouen: "Rouen et Normandie",
  terms: "Mentions légales",
  "privacy-policy": "Confidentialité",
  conditions: "Conditions",
  merci: "Merci",
};

function humanize(segment) {
  if (routeLabels[segment]) {
    return routeLabels[segment];
  }

  return decodeURIComponent(segment)
    .replaceAll("-", " ")
    .replace(/\b\p{L}/gu, (letter) => letter.toUpperCase());
}

export default function Breadcrumbs() {
  const router = useRouter();
  const cleanPath = (router.asPath || "/").split(/[?#]/)[0];

  if (cleanPath === "/" || cleanPath === "/404" || cleanPath === "/404/") {
    return null;
  }

  const segments = cleanPath.split("/").filter(Boolean);
  const items = [
    { label: "Accueil", href: "/" },
    ...segments.map((segment, index) => ({
      label: humanize(segment),
      href: `/${segments.slice(0, index + 1).join("/")}/`,
    })),
  ];

  return (
    <nav className="site-breadcrumbs" aria-label="Fil d’Ariane">
      <ol>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={item.href}>
              {isCurrent ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          );
        })}
      </ol>

      <style jsx>{`
        .site-breadcrumbs {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 12px 0;
          color: #6f675c;
          font-size: 0.82rem;
          line-height: 1.4;
        }

        ol {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        li {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        li:not(:last-child)::after {
          content: "/";
          color: #b3aa9c;
        }

        a {
          color: #4f493f;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        span {
          color: #8a8174;
        }

        @media (max-width: 640px) {
          .site-breadcrumbs {
            padding: 9px 0;
            font-size: 0.76rem;
          }
        }
      `}</style>
    </nav>
  );
}
