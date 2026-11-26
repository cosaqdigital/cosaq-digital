export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const languages = {
  pt: { tag: "pt-BR", name: "Português", short: "PT", og: "pt_BR" },
  en: { tag: "en-US", name: "English", short: "EN", og: "en_US" },
  es: { tag: "es", name: "Español", short: "ES", og: "es_ES" },
} as const;

export const siteOrigin = "https://www.cosaqdigital.com";
export const localeCookie = "cosaq_locale";

export const routes = {
  home: { pt: "", en: "", es: "" },
  writers: { pt: "para-escritores", en: "for-authors", es: "para-escritores" },
  solutions: { pt: "solucoes", en: "solutions", es: "soluciones" },
  "sites-profissionais": { pt: "solucoes/sites-profissionais", en: "solutions/web-development", es: "soluciones/desarrollo-web" },
  "plataformas-digitais": { pt: "solucoes/plataformas-digitais", en: "solutions/digital-platforms", es: "soluciones/plataformas-digitales" },
  "sistemas-personalizados": { pt: "solucoes/sistemas-personalizados", en: "solutions/custom-software", es: "soluciones/software-a-medida" },
  "automacoes-integracoes": { pt: "solucoes/automacoes-integracoes", en: "solutions/automation-integrations", es: "soluciones/automatizacion-integraciones" },
  "orcamentos-brasil": { pt: "projetos/orcamentos-brasil", en: "projects/orcamentos-brasil", es: "proyectos/orcamentos-brasil" },
  getestimatefast: { pt: "projetos/getestimatefast", en: "projects/getestimatefast", es: "proyectos/getestimatefast" },
  wbnextlevel: { pt: "projetos/wbnextlevel", en: "projects/wbnextlevel", es: "proyectos/wbnextlevel" },
  privacy: { pt: "privacidade", en: "privacy", es: "privacidad" },
  terms: { pt: "termos", en: "terms", es: "terminos" },
  deletion: { pt: "exclusao-de-dados", en: "data-deletion", es: "eliminacion-de-datos" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageId = keyof typeof routes;
export const pageIds = Object.keys(routes) as PageId[];

export function isLocale(value: unknown): value is Locale {
  return value === "pt" || value === "en" || value === "es";
}

export function pagePath(locale: Locale, page: PageId = "home") {
  const tail = routes[page][locale];
  return tail ? `/${locale}/${tail}` : `/${locale}`;
}

export function resolvePage(locale: Locale, segments: readonly string[] = []) {
  const path = segments.join("/");
  return pageIds.find((page) => routes[page][locale] === path);
}

export function pageFromPath(path: string) {
  const [, locale, ...segments] = path.replace(/\/$/, "").split("/");
  return isLocale(locale) ? resolvePage(locale, segments) : undefined;
}

const aliases = { privacy: "privacy", terms: "terms", "data-deletion": "deletion" } as const;

export function localizeHref(locale: Locale, href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const boundary = href.search(/[?#]/);
  const path = boundary < 0 ? href : href.slice(0, boundary);
  const suffix = boundary < 0 ? "" : href.slice(boundary);
  const legacy = path.replace(/^\//, "").replace(/\/$/, "");
  const alias = Object.hasOwn(aliases, legacy) ? aliases[legacy as keyof typeof aliases] : undefined;
  const page = pageFromPath(path) ?? alias ?? resolvePage("pt", legacy ? legacy.split("/") : []);
  return page ? pagePath(locale, page) + suffix : href;
}

export const legacyRedirects = [
  ...pageIds.filter((page) => page !== "home" && page !== "terms" && page !== "deletion").flatMap((page) => [{
    source: "/" + routes[page].pt,
    destination: pagePath("pt", page),
    permanent: true,
  }]),
  ...Object.entries(aliases).map(([path, page]) => ({ source: "/" + path, destination: pagePath("en", page), permanent: true })),
];

export function languageLinks(page: PageId) {
  return {
    ...Object.fromEntries(locales.map((locale) => [languages[locale].tag, siteOrigin + pagePath(locale, page)])),
    "x-default": siteOrigin + pagePath("pt", page),
  };
}
