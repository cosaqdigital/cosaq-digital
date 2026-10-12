"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
export function ProjectBrief({ whatsapp }: { whatsapp: string | null }) {
  const [ready, setReady] = useState<string | null>(null);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Olá, COSAQ Digital! Gostaria de conversar sobre um projeto.\n\nNome: ${data.get("name")}\nEmpresa: ${data.get("company") || "Não informado"}\nMercado: ${data.get("market")}\nSolução: ${data.get("service")}\nNecessidade: ${data.get("description")}`;
    setReady(text);
  }
  function download() {
    if (!ready) return;
    const url = URL.createObjectURL(
      new Blob([ready], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "meu-projeto-cosaq.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="brief-panel">
      <form onSubmit={prepare}>
        <div className="form-grid">
          <label>
            Seu nome
            <input name="name" autoComplete="name" required maxLength={100} />
          </label>
          <label>
            Empresa <span className="small">(opcional)</span>
            <input name="company" autoComplete="organization" maxLength={150} />
          </label>
          <label>
            Onde sua empresa atua?
            <select name="market" required defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              <option>Brasil</option>
              <option>Estados Unidos</option>
              <option>Outro mercado</option>
            </select>
          </label>
          <label>
            O que você precisa?
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              <option>Site profissional</option>
              <option>Plataforma ou sistema</option>
              <option>Automação</option>
              <option>Blog</option>
              <option>Preciso de orientação</option>
            </select>
          </label>
        </div>
        <label>
          Conte sobre seu projeto
          <textarea
            name="description"
            required
            minLength={15}
            maxLength={2000}
            rows={5}
            placeholder="O que sua empresa faz e o que você gostaria de melhorar?"
          />
        </label>
        <p className="small">
          Suas respostas ficam nesta página até você escolher enviá-las pelo
          WhatsApp. Consulte nossa{" "}
          <Link href="/privacidade" className="text-link">
            política de privacidade
          </Link>
          .
        </p>
        <button className="button" type="submit">
          Preparar minha mensagem <span aria-hidden="true">↗</span>
        </button>
      </form>
      {ready ? (
        <div className="brief-review" role="status">
          <h2>Revise sua mensagem</h2>
          <p>Preparar a mensagem não envia o pedido.</p>
          <pre>{ready}</pre>
          {whatsapp ? (
            <>
              <a
                className="button"
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(ready)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Continuar no WhatsApp ↗
              </a>
              <p className="small">
                O WhatsApp será aberto com o texto. Confirme o envio lá para
                iniciar a conversa.
              </p>
            </>
          ) : (
            <>
              <p>
                O atendimento por WhatsApp estará disponível em breve. Você pode
                salvar o resumo do seu projeto.
              </p>
              <button
                type="button"
                className="button button-ghost"
                onClick={download}
              >
                Salvar resumo
              </button>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
