import { PageIntro, ProjectGrid, CTA } from "@/components/Commercial";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Projetos e plataformas desenvolvidos",
  "Conheça Orçamentos Brasil, GetEstimateFast, FamíliaUSA1 e outros projetos de sites e soluções digitais da COSAQ.",
  "/projetos",
);
export default function Projects() {
  return (
    <main id="conteudo">
      <PageIntro
        eyebrow="Portfólio"
        title="Nossa experiência tem projetos para mostrar."
        description="Plataformas próprias, presença comercial e conteúdo editorial. Conheça o problema e o trabalho por trás de cada projeto."
      />
      <section className="shell content-section">
        <ProjectGrid />
        <div className="prose">
          <h2>Projetos próprios também são experiência real.</h2>
          <p>
            Identificamos o papel de cada projeto no portfólio. As plataformas
            próprias permitem aprender com a operação e orientar sua evolução;
            os projetos institucionais mostram outras aplicações do nosso
            trabalho.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
