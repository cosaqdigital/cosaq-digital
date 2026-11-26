"use client";

import type { MouseEvent } from "react";
import { translator } from "@/lib/i18n/copy";
import { languages, localeCookie, locales, pagePath, type Locale, type PageId } from "@/lib/i18n/routes";

function rememberLanguage(locale: Locale) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${localeCookie}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
}

export function LanguageSwitcher({ locale, page }: { locale: Locale; page: PageId }) {
  const t = translator(locale);
  function choose(event: MouseEvent<HTMLAnchorElement>, language: Locale) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    rememberLanguage(language);
    if (language !== locale) location.assign(pagePath(language, page) + location.search + location.hash);
  }

  return (
    <div className="language-switcher" role="group" aria-label={t("Idioma do site")}>
      {locales.map((language) => (
        <a key={language} href={pagePath(language, page)} hrefLang={languages[language].tag} lang={languages[language].tag}
          aria-label={languages[language].name} aria-current={language === locale ? "true" : undefined}
          onClick={(event) => choose(event, language)}>
          {languages[language].short}
        </a>
      ))}
    </div>
  );
}
