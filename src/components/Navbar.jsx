import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "../data/site";
import styles from "./Navbar.module.css";

const navigation = [
  {
    id: "experiences",
    label: "Nos expériences",
    caption: "Photo & vidéo",
    links: [
      { label: "Photobooth", href: "/prestations/photobooth/" },
      { label: "Miroirbooth", href: "/prestations/miroirbooth/" },
      { label: "360 Booth", href: "/prestations/videobooth/" },
      { label: "Air360 Booth", href: "/prestations/air360booth/" },
      { label: "VogueBooth", href: "/prestations/voguebooth/" },
      { label: "iPad Booth", href: "/prestations/ipadbooth/" },
      {
        label: "Toutes les prestations",
        href: "/prestations/",
        overview: true,
      },
    ],
  },
  {
    id: "evenements",
    label: "Événements",
    caption: "Les occasions de se retrouver",
    links: [
      { label: "Mariages", href: "/evenements/mariages/" },
      { label: "Anniversaires", href: "/evenements/anniversaires/" },
      { label: "Soirées privées", href: "/evenements/soirees/" },
      { label: "Tous les événements", href: "/evenements/", overview: true },
    ],
  },
  { label: "Entreprises", href: "/evenements/corporates/" },
  { label: "Réalisations", href: "/realisations/" },
  {
    id: "tarifs",
    label: "Tarifs & Packs",
    caption: "Composez votre événement",
    links: [
      { label: "Nos packs", href: "/prestations/#packs" },
      { label: "Nos options", href: "/prestations/#options" },
      { label: "Tarifs détaillés", href: siteConfig.ratesUrl, external: true },
    ],
  },
  {
    id: "infos",
    label: "Plus",
    caption: "Informations & conseils",
    secondary: true,
    links: [
      { label: "Zones d'intervention", href: "/zones-intervention/" },
      { label: "Blog", href: "/blog/" },
      { label: "FAQ", href: "/#faq" },
      { label: "À propos", href: "/a-propos/" },
    ],
  },
];

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}
function Arrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m5 15 10-10M5 5h10v10" />
    </svg>
  );
}
function normalizePath(value) {
  return value.split("?")[0].replace(/\/+$/, "") || "/";
}

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [isCompact, setIsCompact] = useState(false);
  const root = useRef(null);
  const toggle = useRef(null);
  const groups = useRef({});
  const closeTimer = useRef(null);
  const hoverOpened = useRef(null);
  const [pathPart, hash = ""] = router.asPath.split("#");
  const currentPath = normalizePath(pathPart);

  const cancelClose = useCallback(
    () => window.clearTimeout(closeTimer.current),
    [],
  );
  const closeAll = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    hoverOpened.current = null;
    setOpenGroup(null);
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 1100px)");
    const update = () => {
      setIsCompact(query.matches);
      closeAll();
    };
    update();
    query.addEventListener("change", update);
    return () => {
      query.removeEventListener("change", update);
      window.clearTimeout(closeTimer.current);
    };
  }, [closeAll]);

  useEffect(() => {
    router.events.on("routeChangeStart", closeAll);
    router.events.on("hashChangeStart", closeAll);
    return () => {
      router.events.off("routeChangeStart", closeAll);
      router.events.off("hashChangeStart", closeAll);
    };
  }, [router.events, closeAll]);

  useEffect(() => {
    if (!isCompact || !isMenuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() =>
      root.current?.querySelector("[data-navbar-item]")?.focus(),
    );
    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(frame);
    };
  }, [isCompact, isMenuOpen]);

  useEffect(() => {
    const outside = (event) => {
      if (!root.current?.contains(event.target)) closeAll();
    };
    const keyboard = (event) => {
      if (event.key === "Escape" && (openGroup || isMenuOpen)) {
        event.preventDefault();
        if (openGroup) {
          groups.current[openGroup]?.querySelector("button")?.focus();
          setOpenGroup(null);
          hoverOpened.current = null;
        } else {
          closeAll();
          toggle.current?.focus();
        }
      }
      if (event.key === "Tab" && isCompact && isMenuOpen) {
        const focusable = [
          ...root.current.querySelectorAll("a[href],button:not([disabled])"),
        ].filter(
          (element) =>
            element.tabIndex !== -1 && element.getClientRects().length,
        );
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", keyboard);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", keyboard);
    };
  }, [closeAll, isCompact, isMenuOpen, openGroup]);

  const isActive = (href) => {
    if (!href.startsWith("/")) return false;
    const [targetPath, targetHash = ""] = href.split("#");
    return normalizePath(targetPath) === currentPath && targetHash === hash;
  };
  const closeMobile = () => {
    closeAll();
    toggle.current?.focus();
  };
  const enterGroup = (event, id) => {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia("(min-width: 1101px) and (hover: hover)").matches
    )
      return;
    cancelClose();
    hoverOpened.current = id;
    setOpenGroup(id);
  };
  const leaveGroup = (event, id) => {
    if (isCompact || event.currentTarget.contains(document.activeElement))
      return;
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      setOpenGroup((current) => (current === id ? null : current));
      hoverOpened.current = null;
    }, 180);
  };
  const toggleGroup = (id) => {
    cancelClose();
    if (openGroup === id && hoverOpened.current === id)
      hoverOpened.current = null;
    else {
      hoverOpened.current = null;
      setOpenGroup((current) => (current === id ? null : id));
    }
  };
  const groupKeyboard = (event, id) => {
    const group = groups.current[id];
    const links = [...group.querySelectorAll("a[href]")];
    const onTrigger = event.target === group.querySelector("button");
    const index = links.indexOf(event.target);
    if (event.key === "Escape" && openGroup === id) {
      event.preventDefault();
      event.stopPropagation();
      setOpenGroup(null);
      hoverOpened.current = null;
      group.querySelector("button").focus();
      return;
    }
    if (
      !["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key) ||
      (!onTrigger && index === -1)
    )
      return;
    if (onTrigger && !["ArrowDown", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    cancelClose();
    hoverOpened.current = null;
    setOpenGroup(id);
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? links.length - 1
          : onTrigger
            ? event.key === "ArrowUp"
              ? links.length - 1
              : 0
            : (index + (event.key === "ArrowDown" ? 1 : -1) + links.length) %
              links.length;
    if (openGroup === id) links[nextIndex]?.focus();
    else window.requestAnimationFrame(() => links[nextIndex]?.focus());
  };

  return (
    <nav
      ref={root}
      className={`${styles.shell} ${isMenuOpen ? styles.menuOpen : ""}`}
      aria-label="Navigation principale"
    >
      <div className={styles.container}>
        <Link href="/" className={styles.brand} onClick={closeAll}>
          MySelfieBooth
        </Link>
        <div
          className={`${styles.panel} ${isMenuOpen ? styles.panelOpen : ""}`}
          id="menu-principal"
          inert={isCompact && !isMenuOpen ? true : undefined}
        >
          <ul className={styles.items}>
            {navigation.map((item) =>
              item.links ? (
                <li
                  key={item.id}
                  className={`${styles.group} ${item.secondary ? styles.secondary : ""}`}
                  ref={(element) => {
                    groups.current[item.id] = element;
                  }}
                  onPointerEnter={(event) => enterGroup(event, item.id)}
                  onPointerLeave={(event) => leaveGroup(event, item.id)}
                  onKeyDown={(event) => groupKeyboard(event, item.id)}
                  onBlur={(event) => {
                    if (
                      !isCompact &&
                      !event.currentTarget.contains(event.relatedTarget)
                    ) {
                      cancelClose();
                      setOpenGroup((current) =>
                        current === item.id ? null : current,
                      );
                      if (hoverOpened.current === item.id)
                        hoverOpened.current = null;
                    }
                  }}
                >
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={openGroup === item.id}
                    aria-controls={`navigation-${item.id}`}
                    aria-label={
                      item.secondary
                        ? "Plus : informations et conseils"
                        : undefined
                    }
                    data-active={
                      item.links.some((link) => isActive(link.href))
                        ? "true"
                        : undefined
                    }
                    data-navbar-item
                    onClick={() => toggleGroup(item.id)}
                  >
                    <span>{item.label}</span>
                    <Chevron />
                  </button>
                  <div
                    className={styles.dropdown}
                    id={`navigation-${item.id}`}
                    hidden={openGroup !== item.id}
                  >
                    <div className={styles.dropdownInner}>
                      <p className={styles.caption}>{item.caption}</p>
                      <ul className={styles.submenu}>
                        {item.links.map((link) => (
                          <li
                            key={link.href}
                            className={
                              link.overview ? styles.overview : undefined
                            }
                          >
                            {link.external ? (
                              <a href={link.href} onClick={closeAll}>
                                {link.label}
                                <Arrow />
                              </a>
                            ) : (
                              <Link
                                href={link.href}
                                onClick={closeAll}
                                aria-current={
                                  isActive(link.href)
                                    ? link.href.includes("#")
                                      ? "location"
                                      : "page"
                                    : undefined
                                }
                              >
                                {link.label}
                                {link.overview && <Arrow />}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.direct}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={closeAll}
                    data-navbar-item
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
        <a
          className={styles.cta}
          href={siteConfig.quoteUrl}
          onClick={closeAll}
          data-event="cta_quote_click"
        >
          Demander un devis <Arrow />
        </a>
        <button
          ref={toggle}
          type="button"
          className={`${styles.toggle} ${isMenuOpen ? styles.toggleOpen : ""}`}
          onClick={() => (isMenuOpen ? closeMobile() : setIsMenuOpen(true))}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
        >
          <span />
          <span />
        </button>
      </div>
      {isMenuOpen && (
        <button
          className={styles.backdrop}
          type="button"
          tabIndex={-1}
          aria-label="Fermer le panneau de navigation"
          onClick={closeMobile}
        />
      )}
    </nav>
  );
}
