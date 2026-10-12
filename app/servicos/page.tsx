import { PageIntro, ServiceGrid, CTA } from "@/components/Commercial";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Sites, sistemas, blogs e automações para empresas",
  "Conheça as soluções da COSAQ Digital, seus entregáveis e como definimos o escopo de cada projeto.",
  "/servicos",
);
export default function Services() {
  return (
    <main id="conteudo">
      <PageIntro
        eyebrow="Soluções para empresas"
        title="O que sua empresa precisa construir?"
        description="Um site, uma plataforma ou uma integração: começamos pelo objetivo e definimos uma entrega adequada ao seu negócio."
      />
      <section className="shell content-section">
        <ServiceGrid />
        <div className="prose">
          <h2>Uma proposta que você consegue entender.</h2>
          <p>
            Antes de começar, combinamos as entregas, os materiais necessários,
            as etapas de revisão e as condições de publicação. Hospedagem,
            manutenção e ferramentas externas são detalhadas conforme cada
            projeto.
          </p>
          <h2>Redes sociais: uma frente em preparação.</h2>
          <p>
            Estamos desenvolvendo nosso processo de gestão de redes sociais.
            Neste momento, essa área ainda não é apresentada como um serviço
            comercial disponível.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
