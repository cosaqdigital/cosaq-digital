import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { Brand } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { contactEmail, projects, writersLink } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link
            href={localizeHref(locale, "/#inicio")}
            className="brand"
            aria-label={t("COSAQ Digital — início")}
          >
            <Brand />
          </Link>
          <p>{t("Transformamos desafios de negócio em experiências e soluções digitais.")}</p>
          <span className="market-label">
            <Icon name="globe" width={16} height={16} />{t("Brasil e Estados Unidos")}</span>
        </div>
        <div>
          <h2>{t("Soluções")}</h2>
          {services.map((service) => (
            <Link key={service.slug} href={localizeHref(locale, "/solucoes/" + service.slug)}>{t(service.title)}</Link>
          ))}
          <Link href={localizeHref(locale, writersLink.href)}>{t(writersLink.label)}</Link>
          <Link href={localizeHref(locale, "/solucoes")}>{t("Ver todas as soluções")}</Link>
        </div>
        <div>
          <h2>{t("Conheça nosso trabalho")}</h2>
          {projects.map((p) => (
            <Link key={p.slug} href={localizeHref(locale, `/projetos/${p.slug}`)}>
              {t(p.title)}
            </Link>
          ))}
          <Link href={localizeHref(locale, "/#diagnostico")}>{t("Diagnóstico digital")}</Link>
          <Link href={localizeHref(locale, "/#sobre")}>{t("Como trabalhamos")}</Link>
          <Link href={localizeHref(locale, "/privacidade")}>{t("Política de Privacidade")}</Link>
          <Link href={localizeHref(locale, "/data-deletion")}>{t("Exclusão de dados")}</Link>
          <Link href={localizeHref(locale, "/terms")}>{t("Termos de Uso")}</Link>
        </div>
        <div>
          <h2>{t("Uma boa ideia começa")}<br />{t("com uma conversa.")}</h2>
          <a className="footer-email" href={localizeHref(locale, `mailto:${contactEmail}`)}>
            {t(contactEmail)}
            <Icon name="external" width={16} height={16} />
          </a>
          <p>{t("Conte o que sua empresa precisa. Vamos entender o próximo passo.")}</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {t(new Date().getFullYear())} COSAQ Digital.</span>
        <span>{t("Estratégia. Tecnologia. Negócios.")}</span>
        <Link href={localizeHref(locale, "/#inicio")}>{t("Voltar ao início ↑")}</Link>
      </div>
    </footer>
  );
}
