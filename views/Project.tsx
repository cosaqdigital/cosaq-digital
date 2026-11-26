import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectPreview } from "@/components/ProjectPreview";
import { ButtonLink } from "@/components/ButtonLink";
import { CaseStudyTracker } from "@/components/CaseStudyTracker";
import { Icon } from "@/components/Icon";
import { projects, contactHref } from "@/lib/site";

export default function ProjectPage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = translator(locale);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const other = projects.find((p) => p.slug !== slug)!;
  return (
    <main id="conteudo" className={"case-page accent-" + project.accent}>
      <CaseStudyTracker slug={project.slug} />
      <section className="case-hero shell">
        <Link href={localizeHref(locale, "/#projetos")} className="text-link case-back">
          <Icon name="back" width={17} height={17} />{t("Conheça todos os projetos")}</Link>
        <div className="case-intro">
          <div>
            <p className="eyebrow">{t("Projeto desenvolvido /")} {t(project.country)}</p>
            <h1>{t(project.title)}</h1>
            <p>{t(project.description)}</p>
          </div>
          <a
            href={localizeHref(locale, project.href)}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >{t("Visitar site real")}<Icon name="external" width={18} height={18} />
          </a>
        </div>
        <div className="case-preview">
          <ProjectPreview locale={locale} project={project} priority />
        </div>
        <div className="case-facts">
          <div><span>{t("Mercado")}</span><strong>{t(project.country)}</strong></div>
          <div><span>{t("Tipo de projeto")}</span><strong>{t(project.market)}</strong></div>
          <div>
            <span>{t("Endereço público")}</span>
            <a href={localizeHref(locale, project.href)} target="_blank" rel="noopener noreferrer">
              {t(project.domain)}<Icon name="external" width={15} height={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="section shell case-story">
        <div className="case-story-heading">
          <p className="eyebrow">{t("O desafio e a abordagem")}</p>
          <h2>{t("Uma necessidade concreta.")}<br />
            <span>{t("Uma solução pensada para ela.")}</span>
          </h2>
        </div>
        <div className="case-story-copy">
          <article>
            <span className="card-number">{t("01 / O desafio")}</span>
            <h3>{t("O que precisava ser resolvido")}</h3>
            <p>{t(project.problem)}</p>
          </article>
          <article>
            <span className="card-number">{t("02 / A abordagem")}</span>
            <h3>{t("Como a experiência foi estruturada")}</h3>
            <p>{t(project.approach)}</p>
          </article>
        </div>
      </section>

      <section className="section case-details">
        <div className="shell">
          <p className="eyebrow">{t("Jornadas construídas")}</p>
          <h2>{t("O que o projeto coloca em prática.")}</h2>
          <div className="case-detail-grid">
            {project.details.map((detail, index) => (
              <article key={detail.title}>
                <span className="icon-box">
                  <Icon name={index === 0 ? "compass" : index === 1 ? "layers" : "globe"} />
                </span>
                <h3>{t(detail.title)}</h3>
                <p>{t(detail.description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-technology">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("Capacidade demonstrada")}</p>
              <h2>{t("Além da interface.")}<br /><span>{t("Por dentro da solução.")}</span></h2>
            </div>
            <p>{t("Elementos desenvolvidos ou documentados no projeto, apresentados sem dados privados e sem métricas inventadas.")}</p>
          </div>
          <div className="case-engineering-grid">
            {project.engineering.map((part, index) => (
              <article className="case-engineering-card" key={part.title}>
                <span className="card-number">0{index + 1} {t("/ Engenharia aplicada")}</span>
                <h3>{t(part.title)}</h3>
                <p>{t(part.description)}</p>
              </article>
            ))}
          </div>
          <p className="case-scope-note">{t(project.scopeNote)}</p>
        </div>
      </section>

      <section className="section shell case-next">
        <div>
          <p className="eyebrow">{t("Sua empresa tem um desafio parecido?")}</p>
          <h2>{t("Vamos construir uma solução")}<br /><span>{t("para o seu cenário.")}</span>
          </h2>
          <ButtonLink href={localizeHref(locale, contactHref("Quero conversar sobre uma solução como " + project.title))}>{t("Conversar sobre meu projeto")}</ButtonLink>
        </div>
        <Link href={localizeHref(locale, "/projetos/" + other.slug)} className="next-project">
          <span className="eyebrow">{t("Conheça também")}</span>
          <strong>{t(other.title)}</strong>
          <span>{t(other.country)}<Icon name="arrow" /></span>
        </Link>
      </section>
    </main>
  );
}