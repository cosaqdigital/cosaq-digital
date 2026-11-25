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
            Desenvolvimento digital para negócios reais
          </p>
          <h1>
            Sites, sistemas e plataformas que fazem{" "}
            <span>seu negócio avançar.</span>
          </h1>
          <p className="hero-description">
            Criamos sites para apresentar seu negócio, plataformas para lançar
            novos serviços e sistemas para organizar a operação.
          </p>
          <div className="hero-actions">
            <ButtonLink href={contactHref()}>
              Conversar sobre meu projeto
            </ButtonLink>
            <ButtonLink href="#solucoes" variant="secondary">
              Ver soluções
            </ButtonLink>
          </div>
          <div className="hero-assurance">
            <span>
              <Icon name="check" width={17} height={17} />
              Projetos com aplicação real
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
            <ProjectPreview project={projects[0]} />
          </Link>
          <div className="showcase-footer">
            <span className="status-dot" />
            <span>Plataformas que conectam pessoas e negócios.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
