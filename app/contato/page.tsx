import { PageIntro } from "@/components/Commercial";
import { ProjectBrief } from "@/components/ProjectBrief";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Converse sobre seu projeto",
  "Descreva o site, plataforma, automação ou blog que sua empresa precisa e prepare uma conversa com a COSAQ Digital.",
  "/contato",
);
export default function Contact() {
  const number = process.env.COSAQ_WHATSAPP_NUMBER?.trim() || "18135917560";
  const whatsapp = number && /^[1-9]\d{9,14}$/.test(number) ? number : null;
  return (
    <main id="conteudo">
      <PageIntro
        eyebrow="Vamos conversar"
        title="O que sua empresa precisa resolver?"
        description="Conte um pouco sobre seu negócio. Você poderá revisar o resumo antes de iniciar a conversa pelo WhatsApp."
      />
      <section className="shell content-section detail-grid">
        <ProjectBrief whatsapp={whatsapp} />
        <aside className="detail-aside">
          <p className="eyebrow">Antes de preencher</p>
          <h2>Você não precisa ter tudo definido.</h2>
          <p>
            Se ainda não sabe se precisa de um site, sistema ou automação,
            descreva o problema. Esse é um bom começo.
          </p>
          <p>
            Atendimento em português para empresas no Brasil e nos Estados
            Unidos.
          </p>
          {whatsapp ? (
            <p>
              <a
                className="text-link"
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar diretamente no WhatsApp ↗
              </a>
            </p>
          ) : null}
          <p>
            O formulário prepara uma mensagem. O pedido só é enviado quando você
            confirma o envio no WhatsApp.
          </p>
        </aside>
      </section>
    </main>
  );
}
