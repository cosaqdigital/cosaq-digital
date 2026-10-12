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
        title="Projetos que mostram o que podemos construir."
        description="Sites, plataformas e experiências editoriais desenvolvidos pela COSAQ. Explore as funções, o objetivo e a construção de cada projeto."
      />
      <section className="shell content-section">
        <ProjectGrid />
        <div className="prose">
          <h2>Desenvolvimento que você pode explorar.</h2>
          <p>
            Cada projeto tem um objetivo e uma forma de funcionar. Nas páginas
            do portfólio, apresentamos o que foi desenvolvido, as funções e o
            estágio atual do trabalho.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
