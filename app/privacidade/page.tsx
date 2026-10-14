import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | COSAQ Digital",
  description: "Saiba como a COSAQ Digital trata os dados enviados em solicitações comerciais.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <main id="conteudo" className="legal-page section">
      <div className="shell legal-content">
        <p className="eyebrow">Transparência e proteção de dados</p>
        <h1>Política de Privacidade</h1>
        <p>Última atualização: 13 de outubro de 2026.</p>
        <section>
          <h2>1. Quais informações recebemos</h2>
          <p>Quando você decide enviar uma solicitação comercial, podemos receber nome, e-mail, empresa, telefone, tipo de projeto, prazo e descrição da necessidade. Apenas o contato escolhido pelo visitante inicia esse tratamento comercial.</p>
        </section>
        <section>
          <h2>2. Por que utilizamos essas informações</h2>
          <p>Usamos esses dados para compreender seu pedido, responder à mensagem, avaliar a viabilidade de um projeto e manter comunicações relacionadas à solicitação. Não vendemos dados pessoais.</p>
        </section>
        <section>
          <h2>3. Formulário, e-mails e diagnóstico</h2>
          <p>O envio pelo formulário ocorre após sua confirmação. A mensagem pode ser processada por fornecedores de infraestrutura e comunicação utilizados para operar o site e realizar o envio. O diagnóstico fornece uma orientação inicial no navegador; suas respostas só são compartilhadas quando você decide encaminhá-las.</p>
        </section>
        <section>
          <h2>4. Medição de uso</h2>
          <p>O site utiliza ferramentas de análise, incluindo Google Analytics, para compreender visitas e a utilização de páginas e ações. Essas ferramentas podem utilizar cookies ou identificadores semelhantes. Não enviamos nomes, e-mails, telefones ou textos livres aos eventos de conversão.</p>
        </section>
        <section>
          <h2>5. Conservação e segurança</h2>
          <p>Limitamos o acesso a informações comerciais às pessoas e serviços necessários ao atendimento. Mantemos os dados durante o período necessário à solicitação e a obrigações aplicáveis. Nenhum sistema conectado à internet elimina completamente riscos de segurança.</p>
        </section>
        <section>
          <h2>6. Seus direitos e contato</h2>
          <p>Você pode solicitar esclarecimentos, acesso, correção ou exclusão de suas informações, conforme a legislação aplicável, escrevendo para <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
        </section>
        <Link href="/" className="text-link">← Voltar à página inicial</Link>
      </div>
    </main>
  );
}
