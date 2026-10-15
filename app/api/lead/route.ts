import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = "admin@cosaqdigital.com";
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

  // Hidden field blocks unsophisticated bots without exposing the mail API key.
  if (data.website) return NextResponse.json({ ok: true }, { status: 200 });

  const name = field(data.name, 100);
  const company = field(data.company, 120);
  const email = field(data.email, 150);
  const phone = field(data.phone, 35);
  const service = field(data.service, 60);
  const timeline = field(data.timeline, 60);
  const description = field(data.description, 2000);
  const consent = data.consent === true;
  if (
    !name || name.length < 2 ||
    !email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ||
    phone === null || company === null ||
    !service || !serviceOptions.has(service) ||
    !timeline || !timingOptions.has(timeline) ||
    !description || description.length < 12 || !consent
  ) {
    return response(400, "Confira os campos obrigatórios e autorize o contato.");
  }
  if (phone && phone.replace(/\D/g, "").length < 8) {
    return response(400, "Confira o número de telefone informado.");
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !from) {
    return response(
      503,
      "O envio automático está temporariamente indisponível. Utilize a opção de e-mail abaixo.",
    );
  }

  const text = [
    "Nova solicitação comercial recebida pelo site COSAQ Digital",
    "",
    `Nome: ${name}`,
    `Empresa: ${company || "Não informada"}`,
    `E-mail: ${email}`,
    `Telefone: ${phone || "Não informado"}`,
    `Interesse: ${service}`,
    `Prazo: ${timeline}`,
    "",
    "Necessidade descrita:",
    description,
    "",
    "O visitante consentiu em enviar estes dados para contato comercial.",
  ].join("\n");
  try {
    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `COSAQ Digital | Novo projeto: ${service}`,
        text,
      }),
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
