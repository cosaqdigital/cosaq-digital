import { PageIntro } from "@/components/Commercial";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Privacidade",
  "Como o site da COSAQ Digital trata as informações do resumo de projeto e as preferências de análise de visitas.",
  "/privacidade",
);
export default function Privacy() {
  return (
    <main id="conteudo">
      <PageIntro
        eyebrow="Transparência"
        title="Privacidade no site."
        description="Esta página descreve os recursos de contato e análise de visitas presentes neste site."
      />
      <section className="shell content-section prose">
        <h2>Resumo de projeto</h2>
        <p>
          Os campos de nome, empresa, mercado, solução e descrição são usados no
          seu navegador para preparar uma mensagem. Não há envio automático
          desses campos para uma base de contatos da COSAQ. Você pode revisar o
          texto e, quando o canal estiver disponível, abrir o WhatsApp para
          enviá-lo.
        </p>
        <h2>WhatsApp e links externos</h2>
        <p>
          Ao continuar no WhatsApp, o texto preparado é incluído no endereço de
          abertura do serviço. A partir daí, o tratamento das informações também
          está sujeito às regras do WhatsApp. Os links de portfólio levam a
          sites com práticas próprias de privacidade.
        </p>
        <h2>Análise de visitas</h2>
        <p>
          O Google Analytics só é carregado após sua escolha de permitir
          análise. Ele pode usar identificadores e informações sobre a navegação
          para ajudar a entender o uso do site. Não enviamos o texto do resumo
          de projeto nos eventos de análise.
        </p>
        <h2>Suas preferências</h2>
        <p>
          A escolha sobre análise é armazenada no navegador. Você pode usar o
          controle de privacidade no rodapé da tela para revisar sua escolha.
          Desativar a análise interrompe o carregamento nas visitas seguintes e
          recarrega esta página; não elimina informações já processadas ou
          cookies existentes. Esses cookies podem ser removidos nas
          configurações do navegador.
        </p>
        <h2>Infraestrutura e informações técnicas</h2>
        <p>
          A hospedagem e os serviços utilizados podem processar informações
          técnicas de acesso, como endereço IP e dados de requisição, para
          servir e proteger o site. Esta página não descreve o tratamento de
          dados das plataformas apresentadas no portfólio.
        </p>
        <h2>Conversas comerciais</h2>
        <p>
          As informações que você decidir enviar são utilizadas para entender
          seu projeto e conduzir o atendimento. Evite incluir senhas, documentos
          pessoais ou informações sensíveis no resumo inicial.
        </p>
      </section>
    </main>
  );
}
