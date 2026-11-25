import { createHmac } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { bookOptions, interests, plans } from "@/app/para-escritores/content";
import { contactEmail } from "@/lib/site";

export const runtime = "nodejs";

const serviceOptions = new Set([
  "Site profissional",
  "Plataforma digital",
  "Sistema personalizado",
  "Automação e integração",
  "Diagnóstico digital",
  "Ainda não sei",
]);
const timingOptions = new Set([
  "Quero começar agora",
  "Nos próximos 3 meses",
  "Estou pesquisando",
  "Não definido",
]);
const writerBookOptions = new Set<string>(bookOptions);
const writerInterests = new Set<string>(interests);
const writerPlans = new Set<string>(plans.map((plan) => plan.name));
const writerAttempts = new Map<string, number>();
const writerWindowMs = 15 * 60 * 1000;
let writerWindowEnds = 0;

function field(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const clean = value.replace(/[\u0000-\u001f\u007f]/g, " ").trim();
  return clean.length <= max ? clean : null;
}
function response(code: number, message: string) {
  return NextResponse.json(
    { ok: false, message },
    { status: code, headers: { "Cache-Control": "no-store" } },
  );
}

function allowWriterAttempt(key: string) {
  const now = Date.now();
  if (now >= writerWindowEnds) {
    writerAttempts.clear();
    writerWindowEnds = now + writerWindowMs;
  }
  const attempts = writerAttempts.get(key) ?? 0;
  if (attempts >= 6 || (attempts === 0 && writerAttempts.size >= 5000)) return false;
  writerAttempts.set(key, attempts + 1);
  return true;
}

export async function POST(req: NextRequest) {
  if (!req.headers.get("content-type")?.startsWith("application/json")) {
    return response(415, "Formato de envio não suportado.");
  }
  const origin = req.headers.get("origin");
  if (!origin || origin !== new URL(req.url).origin) {
    return response(403, "Origem de solicitação inválida.");
  }
  const length = Number(req.headers.get("content-length") ?? 0);
  if (length > 12000) return response(413, "Solicitação muito grande.");

  let data: Record<string, unknown>;
  try {
    data = await req.json();
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return response(400, "Dados inválidos.");
    }
    if (JSON.stringify(data).length > 12000) {
      return response(413, "Solicitação muito grande.");
    }
  } catch {
    return response(400, "Não foi possível ler a solicitação.");
  }

  const isWriter = data.source === "writers";
  if (data.website) {
    if (isWriter) return response(400, "Não foi possível validar a solicitação.");
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = field(data.name, 100);
  const email = field(data.email, 150);
  const phone = field(isWriter ? data.phone ?? "" : data.phone, 35);
  const description = field(isWriter ? data.description ?? "" : data.description, 2000);
  if (
    !name || name.length < 2 ||
    !email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ||
    phone === null || description === null || data.consent !== true
  ) {
    return response(400, "Confira os campos obrigatórios e autorize o contato.");
  }
  if (phone && phone.replace(/\D/g, "").length < 8) {
    return response(400, "Confira o número de telefone informado.");
  }

  let subject: string;
  let details: string[];
  if (isWriter) {
    const books = field(data.books, 60);
    const interest = field(data.interest, 60);
    const plan = field(data.plan ?? "", 60);
    if (!books || !writerBookOptions.has(books) || !interest || !writerInterests.has(interest) ||
        plan === null || (plan && (!writerPlans.has(plan) || interest !== "Proposta comercial"))) {
      return response(400, "Selecione a quantidade de livros e o tipo de solicitação.");
    }
    if (phone && (!/^\+?[\d\s().-]+$/.test(phone) || phone.replace(/\D/g, "").length > 15)) {
      return response(400, "Confira o número de WhatsApp informado.");
    }
    subject = `COSAQ Digital | Plataforma para escritores: ${interest}`;
    details = [
      `WhatsApp: ${phone || "Não informado"}`,
      `Quantidade de livros: ${books}`,
      `Interesse: ${interest}`,
      `Plano de interesse: ${plan || "Não informado"}`,
    ];
  } else {
    const company = field(data.company, 120);
    const service = field(data.service, 60);
    const timeline = field(data.timeline, 60);
    if (company === null || !service || !serviceOptions.has(service) ||
        !timeline || !timingOptions.has(timeline) || description.length < 12) {
      return response(400, "Confira os campos obrigatórios e autorize o contato.");
    }
    subject = `COSAQ Digital | Novo projeto: ${service}`;
    details = [
      `Empresa: ${company || "Não informada"}`,
      `Telefone: ${phone || "Não informado"}`,
      `Interesse: ${service}`,
      `Prazo: ${timeline}`,
    ];
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !from) {
    return response(
      503,
      "O envio automático está temporariamente indisponível. Utilize a opção de e-mail abaixo.",
    );
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
  const text = [
    "Nova solicitação comercial recebida pelo site COSAQ Digital",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    ...details,
    "",
    "Necessidade descrita:",
    description || "Não informada",
    "",
    "O visitante consentiu em enviar estes dados para contato comercial.",
  ].join("\n");
  const body = JSON.stringify({ from, to: [contactEmail], reply_to: email, subject, text });
  if (isWriter) {
    // The platform sets this header on Vercel. Other hosts fall back to the normalized address.
    const visitor = (process.env.VERCEL ? req.headers.get("x-vercel-forwarded-for") : null) || email.toLowerCase();
    const visitorKey = createHmac("sha256", key).update(visitor).digest("hex");
    if (!allowWriterAttempt(visitorKey)) {
      return response(429, "Aguarde alguns minutos antes de tentar novamente ou fale por e-mail.");
    }
    // Identical submissions and retries reuse the same key across server instances.
    headers["Idempotency-Key"] = "writers/" + createHmac("sha256", key).update(body).digest("hex");
  }
  try {
    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers,
      body,
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!sent.ok) {
      // Do not return provider errors, API keys or private data to the browser.
      return response(502, "Não foi possível confirmar o envio. Utilize a opção de e-mail abaixo.");
    }
    return NextResponse.json(
      { ok: true, message: "Solicitação recebida. Entraremos em contato." },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return response(502, "Serviço indisponível no momento. Utilize a opção de e-mail abaixo.");
  }
}
