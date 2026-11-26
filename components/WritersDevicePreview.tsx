"use client";

import { translator } from "@/lib/i18n/copy";
import type { Locale } from "@/lib/i18n/routes";
import Image from "next/image";
import { useId, useState, type ReactNode } from "react";
import styles from "./WritersFeature.module.css";

const views = {
  overview: { label: "Visão geral", caption: "A livraria digital em três dispositivos." },
  notebook: { label: "Notebook", caption: "Vitrine do autor com livros em destaque." },
  tablet: { label: "Tablet", caption: "Catálogo com capas, séries e lançamentos." },
  phone: { label: "Celular", caption: "Leitura de e-books e progresso do capítulo." },
} as const;

type View = keyof typeof views;
type DevicePreviews = Record<Exclude<View, "overview">, ReactNode>;

export function WritersDevicePreview({ locale, ...previews }: DevicePreviews & { locale: Locale }) {
  const t = translator(locale);
  const [view, setView] = useState<View>("overview");
  const previewId = useId();

  return (
    <figure className={styles.visual}>
      <div className={styles.stage} id={previewId}>
        <div key={view} className={styles.slide}>
          {view === "overview" ? (
            <Image
              className={styles.overview}
              src="/writers/plataforma-hero.webp"
              alt={t("Livraria digital e leitura de e-books em notebook, tablet e celular")}
              width={1200}
              height={800}
              sizes="(max-width: 767px) calc(100vw - 66px), (max-width: 1199px) 53vw, (max-width: 1440px) 52vw, 705px"
            />
          ) : (
            <div className={styles.device} data-device={view}>{t(previews[view])}</div>
          )}
        </div>
      </div>
      <div className={styles.controls} role="group" aria-label={t("Escolha um dispositivo")}>
        {(Object.keys(views) as View[]).map((option) => (
          <button
            type="button"
            key={option}
            aria-controls={previewId}
            aria-pressed={view === option}
            onClick={() => setView(option)}
          >
            {t(views[option].label)}
          </button>
        ))}
      </div>
      <figcaption className={styles.caption}>
        <span aria-live="polite">{t(views[view].caption)}</span>
        <span>{t("Prévia ilustrativa")}</span>
      </figcaption>
    </figure>
  );
}
