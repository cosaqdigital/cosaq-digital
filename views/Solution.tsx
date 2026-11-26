import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ButtonLink";
import { ProjectPreview } from "@/components/ProjectPreview";
import { services } from "@/lib/services";
import { contactHref, projects } from "@/lib/site";

export default function ServicePage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = translator(locale);
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const project = projects.find((p) => p.slug === service.relatedProject)!;
  return (
    <main id="conteudo" className="solution-detail-page">
      <section className="section shell solution-detail-hero">
        <Link href={localizeHref(locale, "/solucoes")} className="text-link case-back">
          <Icon name="back" width={16} height={16} /> {t("Todas as soluções")}</Link>
        <p className="eyebrow">{t("Soluções digitais /")} {t(service.title)}</p>
        <h1>{t(service.short)}</h1>
        <p>{t(service.introduction)}</p>
        <ButtonLink href={localizeHref(locale, contactHref(service.formInterest))}>{t("Conversar sobre este serviço")}</ButtonLink>
      </section>

      <section className="section solution-applications">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">{t("Aplicações práticas")}</p><h2>{t("O que podemos")}<br /><span>{t("construir juntos.")}</span></h2></div>
            <p>{t("O formato final é definido a partir da necessidade e do escopo de cada projeto.")}</p>
          </div>
          <div className="solution-list-grid">
            {service.examples.map((example, index) => (
              <article key={example}>
                <span className="card-number">0{index + 1}</span><p>{t(example)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell solution-delivery">
        <div>
          <p className="eyebrow">{t("Clareza no escopo")}</p>
          <h2>{t("Uma solução com")}<br /><span>{t("objetivos definidos.")}</span></h2>
          <p>{t(service.result)}</p>
          <ul className="solution-check-list">
            {service.deliverables.map((item) => (
              <li key={item}><Icon name="check" width={18} height={18}/>{t(item)}</li>
            ))}
          </ul>
        </div>
        <div className="solution-process-card">
          <p className="eyebrow">{t("Como começamos")}</p>
          {service.process.map((item, index) => (
            <div className="solution-process-step" key={item}>
              <span>0{index + 1}</span><p>{t(item)}</p>
            </div>
          ))}
          <small>{t("Os entregáveis e prazos são definidos na proposta comercial, conforme o escopo.")}</small>
        </div>
      </section>

      <section className="section solution-example">
        <div className="shell solution-example-grid">
          <div>
            <p className="eyebrow">{t("Exemplo desenvolvido")}</p>
            <h2>{t("Trabalho real.")}<br /><span>{t("Para ver na prática.")}</span></h2>
            <h3>{t(project.title)}</h3>
            <p>{t(project.description)}</p>
            <Link className="text-link" href={localizeHref(locale, "/projetos/" + project.slug)}>{t("Explorar o estudo de caso")} <Icon name="arrow" width={18} height={18}/>
            </Link>
          </div>
          <Link className="solution-example-preview" href={localizeHref(locale, "/projetos/" + project.slug)} aria-label={t("Ver estudo de caso {0}", [project.title])}>
            <ProjectPreview locale={locale} project={project} />
          </Link>
        </div>
      </section>

      <section className="section shell solution-faq">
        <p className="eyebrow">{t("Dúvidas frequentes")}</p>
        <h2>{t("O que você precisa saber.")}</h2>
        {service.faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{t(faq.question)}<span aria-hidden="true">+</span></summary>
            <p>{t(faq.answer)}</p>
          </details>
        ))}
        <div className="solution-end-cta">
          <div>
            <h3>{t("Vamos avaliar o que sua empresa precisa?")}</h3>
            <p>{t("Explique seu desafio. A proposta vem depois de entendermos a necessidade.")}</p>
          </div>
          <ButtonLink href={localizeHref(locale, contactHref(service.formInterest))}>{t("Solicitar uma conversa")}</ButtonLink>
        </div>
      </section>
    </main>
  );
}