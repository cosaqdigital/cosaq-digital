import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | COSAQ Digital",
  description:
    "Saiba como a COSAQ Digital trata dados em seu site, integrações empresariais e soluções com a Plataforma do WhatsApp Business.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <main id="conteudo" className="legal-page section">
      <div className="shell legal-content">
        <p className="eyebrow">Transparência e proteção de dados</p>
        <h1>Política de Privacidade</h1>
        <p>Última atualização: 28 de outubro de 2026.</p>

        <section>
          <h2>1. Quem somos e escopo desta política</h2>
          <p>
            A COSAQ Digital Tecnologia e Marketing Ltda. ("COSAQ Digital", "nós")
            desenvolve sites, plataformas, automações e integrações empresariais.
            Esta política explica como tratamos dados pessoais no site
            cosaqdigital.com e em soluções autorizadas por nossos clientes,
            incluindo integrações com a Plataforma do WhatsApp Business.
          </p>
        </section>

        <section>
          <h2>2. Dados que podemos tratar</h2>
          <p>
            Dependendo da interação ou serviço contratado, podemos tratar nome,
            e-mail, empresa, telefone, informações enviadas em formulários,
            dados de suporte, registros técnicos, endereço IP, informações de
            navegação e identificadores necessários para operar integrações.
          </p>
        </section>

        <section>
          <h2>3. WhatsApp Business, Meta e integrações</h2>
          <p>
            Quando uma empresa autoriza uma integração, podemos processar dados
            estritamente necessários para configurar e operar a Plataforma do
            WhatsApp Business, como identificadores da conta empresarial,
            identificadores de números de telefone, modelos de mensagem,
            eventos de webhook, metadados de mensagens e, quando necessário
            para prestar o serviço solicitado, conteúdo de mensagens e dados
            de destinatários. Credenciais técnicas e tokens de autorização
            podem ser processados de forma protegida enquanto forem necessários
            à integração.
          </p>
          <p>
            Em muitos desses cenários, a empresa cliente determina as
            finalidades do tratamento dos dados de seus próprios contatos, e a
            COSAQ Digital atua como operadora/processadora seguindo instruções
            documentadas do cliente.
          </p>
        </section>

        <section>
          <h2>4. Finalidades do tratamento</h2>
          <p>
            Utilizamos os dados para responder solicitações, prestar e manter
            serviços, configurar integrações, enviar mensagens autorizadas em
            nome de clientes, gerenciar modelos e configurações técnicas,
            oferecer suporte, prevenir abuso e fraude, monitorar segurança e
            desempenho, cumprir obrigações legais e melhorar nossos produtos.
          </p>
        </section>

        <section>
          <h2>5. Bases legais</h2>
          <p>
            Tratamos dados conforme a legislação aplicável, incluindo a LGPD,
            com base, conforme o caso, em execução de contrato e procedimentos
            preliminares, consentimento, cumprimento de obrigação legal,
            exercício regular de direitos e interesses legítimos compatíveis
            com os direitos do titular.
          </p>
        </section>

        <section>
          <h2>6. Compartilhamento e fornecedores</h2>
          <p>
            Não vendemos dados pessoais. Podemos compartilhar dados apenas
            quando necessário com provedores de infraestrutura, hospedagem,
            comunicação, analytics, segurança e outras plataformas utilizadas
            para executar o serviço, incluindo a Meta Platforms quando uma
            integração com WhatsApp ou outros produtos Meta for autorizada.
            Também poderemos divulgar informações quando exigido por lei.
          </p>
        </section>

        <section>
          <h2>7. Transferências internacionais</h2>
          <p>
            Como atendemos operações no Brasil e nos Estados Unidos e utilizamos
            provedores globais, dados podem ser processados em outros países.
            Adotamos medidas contratuais, técnicas e organizacionais apropriadas
            para proteger essas transferências conforme a legislação aplicável.
          </p>
        </section>

        <section>
          <h2>8. Retenção</h2>
          <p>
            Mantemos dados somente pelo período necessário às finalidades
            descritas, à prestação do serviço, à segurança e ao cumprimento de
            obrigações legais. Dados técnicos de uma integração podem ser
            mantidos enquanto a autorização estiver ativa e depois excluídos ou
            anonimizados, ressalvadas obrigações de retenção.
          </p>
        </section>

        <section>
          <h2>9. Segurança</h2>
          <p>
            Aplicamos controles de acesso e medidas técnicas e organizacionais
            razoáveis para reduzir riscos de acesso, alteração, divulgação ou
            destruição não autorizados. Nenhum sistema conectado à internet,
            porém, pode oferecer segurança absoluta.
          </p>
        </section>

        <section>
          <h2>10. Direitos do titular e exclusão</h2>
          <p>
            Você pode solicitar confirmação, acesso, correção, portabilidade
            quando aplicável, anonimização, bloqueio, exclusão ou informações
            sobre compartilhamento, além de exercer outros direitos previstos
            em lei. Para exclusão, consulte nossa{" "}
            <Link href="/data-deletion">página de Exclusão de Dados</Link> ou
            escreva para <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </section>

        <section>
          <h2>11. Crianças e adolescentes</h2>
          <p>
            Nossos serviços empresariais não são direcionados a crianças. Não
            coletamos intencionalmente dados de crianças para fins comerciais
            sem uma base legal apropriada e as autorizações exigidas.
          </p>
        </section>

        <section>
          <h2>12. Alterações desta política</h2>
          <p>
            Podemos atualizar esta política para refletir mudanças legais,
            técnicas ou operacionais. A versão vigente ficará publicada nesta
            página com a respectiva data de atualização.
          </p>
        </section>

        <section>
          <h2>13. Contato</h2>
          <p>
            Dúvidas sobre privacidade e proteção de dados podem ser enviadas
            para <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </section>

        <p>
          Meta App Review: an English version is available at{" "}
          <Link href="/privacy">cosaqdigital.com/privacy</Link>.
        </p>
        <Link href="/" className="text-link">← Voltar à página inicial</Link>
      </div>
    </main>
  );
}
