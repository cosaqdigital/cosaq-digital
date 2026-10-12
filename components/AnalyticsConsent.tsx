"use client";
import Script from "next/script";
import Link from "next/link";
import { useSyncExternalStore } from "react";
const key = "cosaq-analytics-v1";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("cosaq-consent", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("cosaq-consent", callback);
  };
}
function snapshot() {
  try {
    return localStorage.getItem(key);
  } catch {
    return "denied";
  }
}
export function AnalyticsConsent() {
  const consent = useSyncExternalStore(subscribe, snapshot, () => "pending");
  function choose(value: string) {
    try {
      localStorage.setItem(key, value);
      window.dispatchEvent(new Event("cosaq-consent"));
    } catch {
      /* Analytics remains disabled if storage is unavailable. */
    }
  }
  if (consent === "granted")
    return (
      <>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JYT86CVGNS"
          strategy="afterInteractive"
        />
        <Script
          id="google-tag"
          strategy="afterInteractive"
        >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JYT86CVGNS');`}</Script>
        <button
          type="button"
          className="privacy-control"
          onClick={() => {
            choose("denied");
            window.location.reload();
          }}
        >
          Desativar análise de visitas
        </button>
      </>
    );
  if (consent === "denied")
    return (
      <button
        type="button"
        className="privacy-control"
        onClick={() => choose("")}
      >
        Preferências de privacidade
      </button>
    );
  if (consent === "pending") return null;
  return (
    <aside className="consent-banner" aria-label="Preferências de privacidade">
      <p>
        Podemos usar o Google Analytics para entender as visitas e melhorar o
        site? <Link href="/privacidade">Saiba mais</Link>.
      </p>
      <div>
        <button type="button" onClick={() => choose("denied")}>
          Somente necessários
        </button>
        <button
          type="button"
          className="button button-small"
          onClick={() => choose("granted")}
        >
          Permitir análise
        </button>
      </div>
    </aside>
  );
}
