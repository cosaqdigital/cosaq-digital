import { CTA, PageIntro } from "@/components/Commercial";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Sobre a COSAQ Digital",
  "Conheça a atuação da COSAQ no desenvolvimento e na gestão de plataformas próprias, sites, blogs e automações para empresas.",
  "/sobre",
);
export default function About() {
  return (
    <main id="conteudo">
      <PageIntro
        eyebrow="A empresa por trás das soluções"
        title="Construímos. Operamos. Evoluímos."
        description="A COSAQ Digital reúne desenvolvimento de projetos e experiência na gestão de produtos digitais próprios."
      />
      <section className="shell content-section detail-grid">
        <div className="prose">
          <h2>Uma atuação que vai além da publicação.</h2>
          <p>
            Nosso trabalho abrange sites profissionais, blogs, plataformas e
            automações. Em produtos próprios como Orçamentos Brasil e
            GetEstimateFast, acompanhamos também as decisões e os processos que
            fazem parte da evolução de uma plataforma.
          </p>
          <h2>Quem está por trás</h2>
          <p>
            Wendel Cosaquevite está à frente da COSAQ Digital. Sua experiência
            com negócios de serviços e a construção de projetos digitais
            orientam a forma de entender necessidades e organizar soluções.
          </p>
          <h2>Clareza antes de ferramentas.</h2>
          <p>
            Um projeto começa pelo que precisa resolver. Definimos o escopo,
            explicamos as etapas e avaliamos as integrações necessárias.
            Ferramentas modernas apoiam o trabalho; a responsabilidade pela
            construção exige revisão e testes.
          </p>
          <h2>Atendimento em português.</h2>
          <p>
            Atendemos empresas no Brasil e nos Estados Unidos. O idioma da
            entrega, as condições comerciais e as particularidades do mercado
            são definidos em cada proposta.
          </p>
        </div>
        <aside className="detail-aside">
          <p className="eyebrow">Nosso compromisso</p>
          <h2>Uma relação de trabalho clara.</h2>
          <p>Escopo definido antes de começar.</p>
          <p>Projetos apresentados com transparência.</p>
          <p>Sem promessas de vendas ou posições garantidas no Google.</p>
          <p>Manutenção e evolução combinadas conforme a necessidade.</p>
        </aside>
      </section>
      <CTA />
    </main>
  );
}
