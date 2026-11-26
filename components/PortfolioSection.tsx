import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Icon } from "@/components/Icon";
import { projects } from "@/lib/site";

export function PortfolioSection({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <SectionReveal id="projetos" className="section portfolio-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t("Portfólio")}</p>
            <h2>{t("Veja o que já construímos")}</h2>
          </div>
          <p>{t("Explore sites e plataformas em funcionamento no Brasil e nos Estados Unidos.")}</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article
              className={`portfolio-card accent-${project.accent}${index === 2 ? " portfolio-card-wide" : ""}`}
              key={project.slug}
            >
              <div className="portfolio-media">
                <ProjectPreview locale={locale} project={project} />
                <span className="project-market">{t(project.country)}</span>
              </div>
              <div className="portfolio-content">
                <p className="eyebrow">{t(project.market)}</p>
                <h3>{t(project.title)}</h3>
                <p>{t(project.description)}</p>
                <ul className="capability-tags">
                  {project.capabilities.map((feature) => (
                    <li key={feature}>{t(feature)}</li>
                  ))}
                </ul>
                <div className="portfolio-links">
                  <Link
                    href={localizeHref(locale, `/projetos/${project.slug}`)}
                    className="text-link"
                  >{t("Ver como foi construído")}<Icon name="arrow" width={18} height={18} />
                  </Link>
                  <a
                    href={localizeHref(locale, project.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-external"
                    aria-label={t("Conhecer projeto {0} — abre em nova aba", [project.title])}
                  >{t("Conhecer projeto")}<Icon name="external" width={16} height={16} />
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
