"use client";

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

export function WritersDevicePreview(previews: DevicePreviews) {
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
              alt="Livraria digital e leitura de e-books em notebook, tablet e celular"
              width={1200}
              height={800}
              sizes="(max-width: 767px) calc(100vw - 66px), (max-width: 1199px) 53vw, (max-width: 1440px) 52vw, 705px"
            />
          ) : (
            <div className={styles.device} data-device={view}>{previews[view]}</div>
          )}
        </div>
      </div>
      <div className={styles.controls} role="group" aria-label="Escolha um dispositivo">
        {(Object.keys(views) as View[]).map((option) => (
          <button
            type="button"
            key={option}
            aria-controls={previewId}
            aria-pressed={view === option}
            onClick={() => setView(option)}
          >
            {views[option].label}
          </button>
        ))}
      </div>
      <figcaption className={styles.caption}>
        <span aria-live="polite">{views[view].caption}</span>
        <span>Prévia ilustrativa</span>
      </figcaption>
    </figure>
  );
}
