import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { ProjectPreview } from "@/components/ProjectPreview";
import { contactHref, projects } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            Tecnologia • Estratégia • Resultados
          </p>
          <h1>
            Transformamos ideias em soluções digitais que fazem{" "}
            <span>seu negócio avançar.</span>
          </h1>
          <p className="hero-description">
            Criamos sites profissionais, plataformas e sistemas digitais para
            empresas que querem conquistar mais clientes, ganhar eficiência e
            crescer com mais estrutura.
          </p>
          <div className="hero-actions">
            <ButtonLink href={contactHref()}>
              Conversar sobre meu projeto
            </ButtonLink>
            <ButtonLink href="#projetos" variant="secondary">
              Explorar nossos projetos
            </ButtonLink>
          </div>
          <div className="hero-assurance">
            <span>
              <Icon name="check" width={17} height={17} />
              Soluções para desafios reais
            </span>
            <span>
              <Icon name="globe" width={17} height={17} />
              Brasil e Estados Unidos
            </span>
          </div>
        </div>
        <div className="hero-showcase" aria-label="Projetos da COSAQ Digital">
          <div className="showcase-label">
            <span>Da ideia à experiência real</span>
            <span className="showcase-marker">01 / 02</span>
          </div>
          <Link
            href="/projetos/getestimatefast"
            className="hero-project hero-project-primary"
          >
            <ProjectPreview project={projects[1]} priority />
          </Link>
          <Link
            href="/projetos/orcamentos-brasil"
            className="hero-project hero-project-secondary"
          >
            <ProjectPreview project={projects[0]} priority />
          </Link>
          <div className="showcase-footer">
            <span className="status-dot" />
            <span>Plataformas que conectam pessoas e negócios.</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="shell capability-strip">
          <span>Estratégia antes do código.</span>
          <span>Experiências pensadas para pessoas.</span>
          <span>Tecnologia a serviço do negócio.</span>
          <a href="#solucoes">
            Conheça nossas soluções
            <Icon name="arrow" width={17} height={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
