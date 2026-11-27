"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { Icon } from "@/components/Icon";
import { translator } from "@/lib/i18n/copy";
import { languages, localeCookie, locales, pagePath, type Locale, type PageId } from "@/lib/i18n/routes";

function rememberLanguage(locale: Locale) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${localeCookie}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
}

type LanguageSwitcherProps = {
  locale: Locale;
  page: PageId;
  onOpen: () => void;
};

export function LanguageSwitcher({ locale, page, onOpen }: LanguageSwitcherProps) {
  const t = translator(locale);
  const details = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      const picker = details.current;
      if (picker?.open && event.target instanceof Node && !picker.contains(event.target)) {
        picker.open = false;
      }
    }

    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  function closePicker() {
    if (details.current) details.current.open = false;
    trigger.current?.focus();
  }

  function choose(event: MouseEvent<HTMLAnchorElement>, language: Locale) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    rememberLanguage(language);
    if (language === locale) {
      closePicker();
      return;
    }

    location.assign(pagePath(language, page) + location.search + location.hash);
  }

  return (
    <details
      className="language-switcher"
      ref={details}
      onToggle={(event) => {
        if (event.currentTarget.open) onOpen();
      }}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.open = false;
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && event.currentTarget.open) {
          event.stopPropagation();
          closePicker();
        }
      }}
    >
      <summary ref={trigger} className="language-trigger" aria-label={t("Mudar idioma")}>
        <Icon name="globe" width={19} height={19} />
        <span className="language-label">{t("Mudar idioma")}</span>
        <span className="language-label-compact">{t("Idioma")}</span>
        <Icon name="chevron-down" className="language-chevron" width={14} height={14} />
      </summary>
      <ul className="language-options" aria-label={t("Idioma do site")}>
        {locales.map((language) => (
          <li key={language}>
            <a
              href={pagePath(language, page)}
              hrefLang={languages[language].tag}
              lang={languages[language].tag}
              aria-current={language === locale ? "true" : undefined}
              onClick={(event) => choose(event, language)}
            >
              {languages[language].name}
              {language === locale && <Icon name="check" width={16} height={16} />}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
