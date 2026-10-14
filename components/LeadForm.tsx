"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { trackConversion } from "@/lib/analytics";
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
  service: string;
  timeline: string;
  description: string;
  website: string;
  consent: boolean;
};
const empty: FormValues = {
  name: "", company: "", email: "", phone: "",
  service: "", timeline: "", description: "", website: "", consent: false,
};

export function LeadForm() {
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
    if (inferred) setForm((prev) => ({ ...prev, service: inferred }));

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
    return () => window.removeEventListener("cosaq:diagnostic-contact", fromDiagnostic);
  }, []);

  const emailBody = [
    "Olá, COSAQ Digital! Gostaria de conversar sobre um projeto.",
    `Nome: ${form.name}`,
    `Empresa: ${form.company}`,
    `Meu e-mail: ${form.email}`,
    `Telefone: ${form.phone}`,
    `Interesse: ${form.service}`,
    `Prazo: ${form.timeline}`,
    "", form.description,
  ].join("\n");
  const fallback = `mailto:${contactEmail}?subject=${encodeURIComponent("Solicitação de projeto — COSAQ Digital")}&body=${encodeURIComponent(emailBody)}`;
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
        <span className="eyebrow">Solicitação enviada</span>
        <h3>Recebemos sua mensagem.</h3>
        <p>Obrigado pelo contato. Nossa equipe avaliará a solicitação e responderá pelo e-mail informado.</p>
        <button className="button button-secondary" type="button" onClick={() => {
          setForm(empty); setSent(false); started.current = false;
        }}>Enviar outra solicitação</button>
      </div>
    );
  }
  return (
    <form className="lead-form" onSubmit={submit} onFocusCapture={onStart}>
      <div className="lead-form-heading">
        <span className="eyebrow">Fale com a COSAQ</span>
        <h3>Conte-nos o que você precisa.</h3>
        <p>Uma primeira conversa para entender seu desafio, sem compromisso.</p>
      </div>
      <div className="lead-fields two">
        <label>Seu nome <span aria-hidden="true">*</span>
          <input value={form.name} onChange={(e) => update("name", e.target.value)}
            autoComplete="name" maxLength={100} minLength={2} required placeholder="Como podemos chamar você?" />
        </label>
        <label>E-mail para retorno <span aria-hidden="true">*</span>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
            autoComplete="email" maxLength={150} required placeholder="voce@empresa.com" />
        </label>
      </div>
      <div className="lead-fields two">
        <label>Empresa
          <input value={form.company} onChange={(e) => update("company", e.target.value)}
            autoComplete="organization" maxLength={120} placeholder="Nome da empresa (opcional)" />
        </label>
        <label>WhatsApp ou telefone
          <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
            autoComplete="tel" maxLength={35} placeholder="DDD + número (opcional)" />
        </label>
      </div>
      <div className="lead-fields two">
        <label>Tipo de projeto <span aria-hidden="true">*</span>
          <select value={form.service} onChange={(e) => update("service", e.target.value)} required>
            <option value="">Selecione uma solução</option>
            {services.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label>Quando pretende começar? <span aria-hidden="true">*</span>
          <select value={form.timeline} onChange={(e) => update("timeline", e.target.value)} required>
            <option value="">Selecione o prazo</option>
            {timelines.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <label className="lead-message">O que você quer construir ou melhorar? <span aria-hidden="true">*</span>
        <textarea rows={4} value={form.description} onChange={(e) => update("description", e.target.value)}
          minLength={12} maxLength={2000} required
          placeholder="Conte o desafio, como funciona hoje e o que você espera alcançar." />
      </label>
      <div className="lead-honeypot" aria-hidden="true">
        <label>Não preencha este campo <input tabIndex={-1} autoComplete="off"
          value={form.website} onChange={(e) => update("website", e.target.value)} name="website" /></label>
      </div>
      <label className="lead-consent">
        <input type="checkbox" checked={form.consent} required
          onChange={(e) => update("consent", e.target.checked)} />
        <span>Autorizo a COSAQ Digital a usar os dados informados para responder à minha solicitação, conforme a <Link href="/privacidade">Política de Privacidade</Link>.</span>
      </label>
      {error && <p className="lead-error" role="alert">{error}</p>}
      <button className="button button-primary lead-submit" type="submit" disabled={busy}>
        {busy ? "Enviando..." : "Solicitar uma conversa"} <span aria-hidden="true">↗</span>
      </button>
      <p className="lead-alternative">Prefere seu aplicativo de e-mail? <a href={fallback} onClick={() => trackConversion("contact_click", { source: "email_alternativo" })}>Enviar para {contactEmail}</a></p>
      <p className="lead-note">Sem cadastro. Não enviamos sua solicitação automaticamente sem sua confirmação.</p>
    </form>
  );
}
