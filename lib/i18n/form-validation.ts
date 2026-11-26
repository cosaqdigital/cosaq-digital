import type { FormEvent } from "react";
import { translator } from "./copy";
import type { Locale } from "./routes";

function isField(target: EventTarget) {
  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;
}

export function validateLead(locale: Locale) {
  const t = translator(locale);
  return (event: FormEvent<HTMLFormElement>) => {
    const field = event.target;
    if (!isField(field)) return;
    if (field.validity.valueMissing) field.setCustomValidity(t("Preencha este campo para continuar."));
    else if (field.validity.typeMismatch) field.setCustomValidity(t("Informe um e-mail válido."));
    else if (field.validity.tooShort) field.setCustomValidity(t("Use pelo menos {0} caracteres.", [field instanceof HTMLSelectElement ? 1 : field.minLength]));
  };
}

export function clearLeadError(event: FormEvent<HTMLFormElement>) {
  if (isField(event.target)) event.target.setCustomValidity("");
}
