"use client";

import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { trackConversion } from "@/lib/analytics";
import { clearLeadError, validateLead } from "@/lib/i18n/form-validation";
import { contactEmail } from "@/lib/site";

const services = [
  "Site profissional",
  "Plataforma digital",
  "Sistema personalizado",
  "Automação e integração",
  "Diagnóstico digital",
  "Ainda não sei",
];
const timelines = [
  "Quero começar agora",
  "Nos próximos 3 meses",
  "Estou pesquisando",
  "Não definido",
];
type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  market: string;
  service: string;
  timeline: string;
  description: string;
  website: string;
  consent: boolean;
};
const empty: FormValues = {
  name: "", company: "", email: "", phone: "", market: "",
  service: "", timeline: "", description: "", website: "", consent: false,
};

export function LeadForm({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const [form, setForm] = useState<FormValues>(empty);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const started = useRef(false);
  const update = (key: keyof FormValues, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const interest = (params.get("interesse") ?? "").toLowerCase();
    const inferred = interest.includes("site") ? "Site profissional"
      : interest.includes("plataforma") ? "Plataforma digital"
      : interest.includes("sistema") || interest.includes("operação") ? "Sistema personalizado"
      : interest.includes("process") || interest.includes("automa") ? "Automação e integração"
      : "";
    const prefill = inferred ? requestAnimationFrame(() => {
      setForm((prev) => prev.service ? prev : { ...prev, service: inferred });
    }) : null;

    const fromDiagnostic = (event: Event) => {
      const detail = (event as CustomEvent<{ service: string; description: string }>).detail;
      if (!detail) return;
      setSent(false);
      setForm((prev) => ({
        ...prev,
        service: services.includes(detail.service) ? detail.service : "Diagnóstico digital",
        description: detail.description.slice(0, 2000),
      }));
    };
    window.addEventListener("cosaq:diagnostic-contact", fromDiagnostic);
    return () => {
      if (prefill !== null) cancelAnimationFrame(prefill);
      window.removeEventListener("cosaq:diagnostic-contact", fromDiagnostic);
    };
  }, []);

  const emailBody = [
    t("Olá, COSAQ Digital! Gostaria de conversar sobre um projeto."),
    t("Nome: {0}", [form.name]),
    t("Empresa: {0}", [form.company]),
    t("Meu e-mail: {0}", [form.email]),
    t("Telefone: {0}", [form.phone]),
    t("Interesse: {0}", [t(form.service)]),
    t("Prazo: {0}", [t(form.timeline)]),
    t("País ou mercado: {0}", [form.market]),
    "", form.description,
  ].join("\n");
  const fallback = `mailto:${contactEmail}?subject=${encodeURIComponent(t("Solicitação de projeto — COSAQ Digital"))}&body=${encodeURIComponent(emailBody)}`;
  const onStart = () => {
    if (started.current) return;
    started.current = true;
    trackConversion("lead_form_start", { source: "site" });
  };
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (busy) return;
    setBusy(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-COSAQ-Locale": locale },
        body: JSON.stringify({ ...form, locale, page: window.location.pathname }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({})) as { message?: string };
        setError(result.message || "O envio não foi concluído. Tente pelo e-mail abaixo.");
        return;
      }
      setSent(true);
      trackConversion("lead_form_submit", { service: form.service });
    } catch {
      setError("Não foi possível confirmar o recebimento. Utilize o e-mail alternativo.");
    } finally {
      setBusy(false);
    }
  }
  if (sent) {
    return (
      <div className="lead-form lead-confirmation" role="status" aria-live="polite">
        <span className="eyebrow">{t("Solicitação enviada")}</span>
        <h3>{t("Recebemos sua mensagem.")}</h3>
        <p>{t("Obrigado pelo contato. Nossa equipe avaliará a solicitação e responderá pelo e-mail informado.")}</p>
        <button className="button button-secondary" type="button" onClick={() => {
          setForm(empty); setSent(false); started.current = false;
        }}>{t("Enviar outra solicitação")}</button>
      </div>
    );
  }
  return (
    <form className="lead-form" method="post" onSubmit={submit} onFocusCapture={onStart} onInvalidCapture={validateLead(locale)} onInput={clearLeadError}>
      <div className="lead-form-heading">
        <span className="eyebrow">{t("Fale com a COSAQ")}</span>
        <h3>{t("Conte-nos o que você precisa.")}</h3>
        <p>{t("Uma primeira conversa para entender seu desafio, sem compromisso.")}</p>
      </div>
      <div className="lead-fields two">
        <label>{t("Seu nome")} <span aria-hidden="true">*</span>
          <input value={form.name} onChange={(e) => update("name", e.target.value)}
            autoComplete="name" maxLength={100} minLength={2} required placeholder={t("Como podemos chamar você?")} />
        </label>
        <label>{t("E-mail para retorno")} <span aria-hidden="true">*</span>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
            autoComplete="email" maxLength={150} required placeholder={t("voce@empresa.com")} />
        </label>
      </div>
      <div className="lead-fields two">
        <label>{t("Empresa")}<input value={form.company} onChange={(e) => update("company", e.target.value)}
            autoComplete="organization" maxLength={120} placeholder={t("Nome da empresa (opcional)")} />
        </label>
        <label>{t("WhatsApp ou telefone")}<input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
            autoComplete="tel" maxLength={35} placeholder={t("DDD + número (opcional)")} />
        </label>
      </div>
      <div className="lead-fields two">
        <label>{t("Tipo de projeto")} <span aria-hidden="true">*</span>
          <select value={form.service} onChange={(e) => update("service", e.target.value)} required>
            <option value="">{t("Selecione uma solução")}</option>
            {services.map((item) => <option key={item} value={item}>{t(item)}</option>)}
          </select>
        </label>
        <label>{t("Quando pretende começar?")} <span aria-hidden="true">*</span>
          <select value={form.timeline} onChange={(e) => update("timeline", e.target.value)} required>
            <option value="">{t("Selecione o prazo")}</option>
            {timelines.map((item) => <option key={item} value={item}>{t(item)}</option>)}
          </select>
        </label>
      </div>
      <label className="lead-message">{t("País ou mercado (opcional)")}
        <input value={form.market} onChange={(e) => update("market", e.target.value)} autoComplete="country-name" maxLength={80} />
      </label>
      <label className="lead-message">{t("O que você quer construir ou melhorar?")} <span aria-hidden="true">*</span>
        <textarea rows={4} value={form.description} onChange={(e) => update("description", e.target.value)}
          minLength={12} maxLength={2000} required
          placeholder={t("Conte o desafio, como funciona hoje e o que você espera alcançar.")} />
      </label>
      <div className="lead-honeypot" aria-hidden="true">
        <label>{t("Não preencha este campo")} <input tabIndex={-1} autoComplete="off"
          value={form.website} onChange={(e) => update("website", e.target.value)} name="website" /></label>
      </div>
      <label className="lead-consent">
        <input type="checkbox" checked={form.consent} required
          onChange={(e) => update("consent", e.target.checked)} />
        <span>{t("Autorizo a COSAQ Digital a usar os dados informados para responder à minha solicitação, conforme a")} <Link href={localizeHref(locale, "/privacidade")}>{t("Política de Privacidade")}</Link>.</span>
      </label>
      {error && <p className="lead-error" role="alert">{t(error)}</p>}
      <button className="button button-primary lead-submit" type="submit" disabled={busy}>
        {t(busy ? "Enviando..." : "Solicitar uma conversa")} <span aria-hidden="true">↗</span>
      </button>
      <p className="lead-alternative">{t("Prefere seu aplicativo de e-mail?")} <a href={localizeHref(locale, fallback)} onClick={() => trackConversion("contact_click", { source: "email_alternativo" })}>{t("Enviar para")} {t(contactEmail)}</a></p>
      <p className="lead-note">{t("Sem cadastro. Não enviamos sua solicitação automaticamente sem sua confirmação.")}</p>
    </form>
  );
}
