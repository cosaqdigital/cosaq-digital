import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { ProjectPreview } from "@/components/ProjectPreview";
import { contactHref, projects } from "@/lib/site";

export function HeroSection({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <section id="inicio" className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" />{t("Desenvolvimento digital para negócios reais")}</p>
          <h1>{t("Sites, sistemas e plataformas que fazem")}{" "}
            <span>{t("seu negócio avançar.")}</span>
          </h1>
          <p className="hero-description">{t("Criamos sites para apresentar seu negócio, plataformas para lançar novos serviços e sistemas para organizar a operação.")}</p>
          <div className="hero-actions">
            <ButtonLink href={localizeHref(locale, contactHref())}>{t("Conversar sobre meu projeto")}</ButtonLink>
            <ButtonLink href="#solucoes" variant="secondary">{t("Ver soluções")}</ButtonLink>
          </div>
          <div className="hero-assurance">
            <span>
              <Icon name="check" width={17} height={17} />{t("Projetos com aplicação real")}</span>
            <span>
              <Icon name="globe" width={17} height={17} />{t("Brasil e Estados Unidos")}</span>
          </div>
        </div>
        <div className="hero-showcase" aria-label={t("Projetos da COSAQ Digital")}>
          <div className="showcase-label">
            <span>{t("Da ideia à experiência real")}</span>
          </div>
          <Link
            href={localizeHref(locale, "/projetos/getestimatefast")}
            className="hero-project hero-project-primary"
          >
            <ProjectPreview locale={locale} project={projects[1]} priority />
          </Link>
          <Link
            href={localizeHref(locale, "/projetos/orcamentos-brasil")}
            className="hero-project hero-project-secondary"
          >
            <ProjectPreview locale={locale} project={projects[0]} />
          </Link>
          <div className="showcase-footer">
            <span className="status-dot" />
            <span>{t("Plataformas que conectam pessoas e negócios.")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
