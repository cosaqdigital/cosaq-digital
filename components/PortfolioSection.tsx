import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Icon } from "@/components/Icon";
import { projects } from "@/lib/site";

export function PortfolioSection() {
  return (
    <SectionReveal id="projetos" className="section portfolio-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Ideias que ganharam forma</p>
            <h2>
              Projetos construídos.
              <br />
              <span>Capacidades demonstradas.</span>
            </h2>
          </div>
          <p>
            Veja como traduzimos necessidades de negócio em sites comerciais,
            jornadas de serviços e plataformas com diferentes níveis de operação.
          </p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article
              className={`portfolio-card accent-${project.accent}${index === 2 ? " portfolio-card-wide" : ""}`}
              key={project.slug}
            >
              <div className="portfolio-media">
                <span className="portfolio-index">0{index + 1}</span>
                <ProjectPreview project={project} />
                <span className="project-market">{project.country}</span>
              </div>
              <div className="portfolio-content">
                <p className="eyebrow">{project.market}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="capability-tags">
                  {project.capabilities.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="portfolio-links">
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="text-link"
                  >
                    Ver como foi construído
                    <Icon name="arrow" width={18} height={18} />
                  </Link>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-external"
                    aria-label={`Conhecer projeto ${project.title} — abre em nova aba`}
                  >
                    Conhecer projeto
                    <Icon name="external" width={16} height={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
