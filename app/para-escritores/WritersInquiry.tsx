"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { trackConversion } from "@/lib/analytics";
import { contactEmail } from "@/lib/site";
import { bookOptions, interests, type WriterInterest, type WriterPlan } from "./content";
import styles from "./writers.module.css";

type InquiryChoice = { interest: WriterInterest; plan?: WriterPlan };
const inquiryEvent = "cosaq:writers-inquiry";
const anchor = "#contato-escritores";
const source = "para_escritores";

export function WritersCTA({ children, interest, plan, placement, secondary = false }: InquiryChoice & {
  children: ReactNode;
  placement: string;
  secondary?: boolean;
}) {
  return (
    <a className={secondary ? styles.secondary : styles.primary} href={anchor} onClick={() => {
      window.dispatchEvent(new CustomEvent<InquiryChoice>(inquiryEvent, { detail: { interest, plan } }));
      trackConversion("contact_click", { source, placement, interest, ...(plan ? { plan } : {}) });
    }}>
      {children}
    </a>
  );
}

export function WritersInquiry() {
  const [choice, setChoice] = useState<{ interest: string; plan?: WriterPlan }>({ interest: "" });
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const inFlight = useRef(false);
  const started = useRef(false);
  const nameField = useRef<HTMLInputElement>(null);
  const confirmation = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    function selectInquiry(event: Event) {
      const detail = (event as CustomEvent<InquiryChoice>).detail;
      if (inFlight.current) return;
      setChoice(detail);
      setSent(false);
      setError("");
      requestAnimationFrame(() => nameField.current?.focus({ preventScroll: true }));
    }
    window.addEventListener(inquiryEvent, selectInquiry);
    return () => window.removeEventListener(inquiryEvent, selectInquiry);
  }, []);

  useEffect(() => {
    if (sent) confirmation.current?.focus({ preventScroll: true });
  }, [sent]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const fields = new FormData(event.currentTarget);
    const data = {
      ...Object.fromEntries(fields),
      source: "writers",
      plan: choice.plan ?? "",
      consent: fields.has("consent"),
    };
    inFlight.current = true;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: { ok?: boolean; message?: string } = await response.json();
      if (!response.ok || result.ok !== true) {
        setError(result.message || "O envio não foi confirmado. Tente novamente ou fale por e-mail.");
        return;
      }
      setSent(true);
      trackConversion("lead_form_submit", { source, interest: choice.interest, ...(choice.plan ? { plan: choice.plan } : {}) });
    } catch {
      setError("O envio não foi confirmado. Tente novamente ou fale por e-mail.");
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  }

  const mail = `mailto:${contactEmail}?subject=${encodeURIComponent(choice.plan ? `Plataforma para escritores | Plano ${choice.plan}` : "Plataforma para escritores | COSAQ Digital")}`;

  if (sent) {
    return (
      <div className={styles.form} role="status">
        <h3 ref={confirmation} tabIndex={-1}>Recebemos sua solicitação.</h3>
        <p>Nossa equipe vai responder pelo e-mail informado para conversar sobre sua livraria.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} method="post" onSubmit={submit} onFocusCapture={() => {
      if (started.current) return;
      started.current = true;
      trackConversion("lead_form_start", { source });
    }}>
      <h3>Conte sobre seu projeto</h3>
      {choice.plan && (
        <p className={styles.selectedPlan}>Plano de interesse: <strong>{choice.plan}</strong>{" "}
          <button type="button" disabled={busy} onClick={() => setChoice({ interest: choice.interest })}>Remover</button>
        </p>
      )}
      <fieldset disabled={busy} className={styles.formFields}>
        <div className={styles.fields}>
          <label>Nome<input name="name" ref={nameField} autoComplete="name" required minLength={2} maxLength={100} /></label>
          <label>E-mail<input name="email" type="email" autoComplete="email" required maxLength={150} /></label>
          <label>WhatsApp <small>(opcional)</small><input name="phone" type="tel" autoComplete="tel" maxLength={35} placeholder="DDD + número" /></label>
          <label>Quantidade de livros
            <select name="books" required defaultValue="">
              <option value="" disabled>Selecione</option>
              {bookOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
        </div>
        <label>O que você gostaria de receber?
          <select name="interest" value={choice.interest} required onChange={(event) => setChoice({
            interest: event.target.value,
            plan: event.target.value === "Proposta comercial" ? choice.plan : undefined,
          })}>
            <option value="" disabled>Selecione</option>
            {interests.map((interest) => <option key={interest}>{interest}</option>)}
          </select>
        </label>
        <label>Sobre seu projeto <small>(opcional)</small>
          <textarea name="description" rows={3} maxLength={2000} placeholder="Em que etapa está sua obra ou catálogo?" />
        </label>
        <div className={styles.honeypot} aria-hidden="true">
          <label>Deixe este campo vazio<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <label className={styles.consent}>
          <input name="consent" type="checkbox" required />
          <span>Autorizo o uso dos dados para responder à solicitação, conforme a <Link href="/privacidade">Política de Privacidade</Link>.</span>
        </label>
      </fieldset>
      {error && <p className={styles.error} role="alert">{error}</p>}
      <button className={styles.primary} type="submit" disabled={busy}>{busy ? "Enviando…" : "Enviar solicitação"}</button>
      <p className={styles.fallback}>Prefere falar por e-mail? <a href={mail} onClick={() => trackConversion("contact_click", { source, placement: "email" })}>{contactEmail}</a></p>
    </form>
  );
}
