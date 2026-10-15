"use client";

export type ConversionEvent =
  | "contact_click"
  | "lead_form_start"
  | "lead_form_submit"
  | "diagnostic_start"
  | "diagnostic_complete"
  | "diagnostic_contact_click"
  | "case_study_view";

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export function trackConversion(
  event: ConversionEvent,
  values: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;
  // Never send names, emails, phone numbers or free-text answers to analytics.
  (window as AnalyticsWindow).gtag?.("event", event, values);
}
