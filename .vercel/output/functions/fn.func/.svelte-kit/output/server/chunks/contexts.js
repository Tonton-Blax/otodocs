import { s as setContext, q as getContext } from "./ssr.js";
import { r as readable, d as derived } from "./index2.js";
import { p as page } from "./stores.js";
import { c as isString, d as isRegExp } from "./unit.js";
function uppercaseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function kebabToTitleCase(str) {
  return uppercaseFirstLetter(str?.replace(/-./g, (x) => " " + x[1].toUpperCase()) ?? "");
}
function titleToKebabCase(str) {
  return str?.replace(/\s/g, "-").toLowerCase() ?? "";
}
const NAVIGATION_CONTEXT_KEY = Symbol("");
const DEFAULT_NAVIGATION_CONFIG = {
  canUpdateHash: () => true,
  cleanHash: (hash) => hash
};
function getNavigationContext() {
  return getContext(NAVIGATION_CONTEXT_KEY);
}
function setNavigationContext(context) {
  setContext(NAVIGATION_CONTEXT_KEY, context);
}
const NAVBAR_CONTEXT_KEY = Symbol("");
function getNavbarContext() {
  return getContext(NAVBAR_CONTEXT_KEY);
}
function setNavbarContext(context) {
  setContext(NAVBAR_CONTEXT_KEY, context);
}
function normalizeSidebarConfig(config = null) {
  if (!config)
    return { links: {} };
  const links = {};
  const baseUrl = config.baseUrl?.replace(/\/$/, "") ?? "";
  for (const category of Object.keys(config.links)) {
    const categoryLinks = config.links[category];
    const categorySlug = titleToKebabCase(category);
    const categoryName = isString(config.links[category][0]) ? kebabToTitleCase(category) : category;
    for (const categoryLink of categoryLinks) {
      const link = isString(categoryLink) ? {
        title: kebabToTitleCase(categoryLink),
        slug: `${baseUrl}/${categorySlug}/${categoryLink}`
      } : categoryLink;
      if (!links[categoryName])
        links[categoryName] = [];
      links[categoryName].push(link);
    }
  }
  return {
    ...config,
    links
  };
}
function isActiveSidebarLink({ match, slug }, currentPath) {
  const path = currentPath.replace(/\.html/, "");
  if (match === "deep") {
    return path === slug || path.startsWith(slug) && path[slug.length] === "/";
  }
  if (isRegExp(match)) {
    return match.test(slug);
  }
  return path === slug;
}
const SIDEBAR_CONTEXT_KEY = Symbol();
function createSidebarContext(config) {
  const configStore = config && "subscribe" in config ? config : readable(config);
  const normalizedConfig = derived(configStore, ($config) => normalizeSidebarConfig($config));
  const allLinks = derived(normalizedConfig, ($config) => Object.values($config.links).flat());
  const activeLinkIndex = derived([allLinks, page], ([$allLinks, $page]) => $allLinks.findIndex((link) => isActiveSidebarLink(link, $page.url.pathname)));
  const activeLink = derived([allLinks, activeLinkIndex], ([$allLinks, $activeLinkIndex]) => $allLinks[$activeLinkIndex]);
  const previousLink = derived([allLinks, activeLinkIndex], ([$allLinks, $activeLinkIndex]) => $allLinks[$activeLinkIndex - 1]);
  const nextLink = derived([allLinks, activeLinkIndex], ([$allLinks, $activeLinkIndex]) => $allLinks[$activeLinkIndex + 1]);
  const activeCategory = derived([normalizedConfig, activeLink], ([$config, $activeLink]) => {
    const category = Object.keys($config.links).find((category2) => $config.links[category2]?.some((link) => link.title === $activeLink?.title && link.slug === $activeLink?.slug));
    return !category || category === "." ? null : category;
  });
  const context = {
    config: normalizedConfig,
    allLinks,
    activeLinkIndex,
    activeLink,
    previousLink,
    nextLink,
    activeCategory
  };
  return context;
}
function setSidebarContext(context) {
  setContext(SIDEBAR_CONTEXT_KEY, context);
}
function getSidebarContext() {
  return getContext(SIDEBAR_CONTEXT_KEY);
}
const DEFAULT_I18N_TRANSLATIONS = {
  nav: {
    previous: "Previous",
    next: "Next",
    mainMenu: "Main navigation menu",
    openSidebar: "Open main sidebar",
    options: "Options",
    links: "Links"
  },
  toc: {
    title: "On this page"
  },
  colorScheme: {
    title: "Color Scheme",
    light: "Light",
    dark: "Dark",
    system: "System",
    theme: "Theme"
  },
  dialog: {
    close: "Close dialog"
  },
  admonition: {
    note: "NOTE",
    info: "INFO",
    tip: "TIP",
    warning: "WARNING",
    danger: "DANGER",
    experimental: "EXPERIMENTAL"
  },
  code: {
    copy: "Copy code",
    copied: "Copied!"
  }
};
const I18N_CONTEXT_KEY = Symbol();
function getI18nContext() {
  return getContext(I18N_CONTEXT_KEY);
}
function setI18nContext(context) {
  setContext(I18N_CONTEXT_KEY, context);
}
export {
  DEFAULT_NAVIGATION_CONFIG as D,
  getNavbarContext as a,
  getSidebarContext as b,
  getNavigationContext as c,
  setNavbarContext as d,
  setSidebarContext as e,
  createSidebarContext as f,
  getI18nContext as g,
  setI18nContext as h,
  isActiveSidebarLink as i,
  DEFAULT_I18N_TRANSLATIONS as j,
  setNavigationContext as s,
  uppercaseFirstLetter as u
};
