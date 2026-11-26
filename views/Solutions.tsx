import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/services";
import { ButtonLink } from "@/components/ButtonLink";
import { contactHref } from "@/lib/site";

export default function ServicesPage({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <main id="conteudo" className="solutions-page">
      <section className="section shell service-overview-hero">
        <p className="eyebrow">{t("Desenvolvimento digital")}</p>
        <h1>{t("O desafio é do seu negócio.")}<br /><span>{t("A solução precisa fazer sentido para ele.")}</span></h1>
        <p>{t("Conheça as formas de desenvolvimento que oferecemos, com aplicações reais e uma conversa de escopo antes de definir tecnologia ou investimento.")}</p>
        <ButtonLink href={localizeHref(locale, contactHref("Quero avaliar uma solução digital"))}>{t("Conversar sobre uma solução")}</ButtonLink>
      </section>
      <section className="section shell service-overview-list">
        <div className="service-overview-grid">
          {services.map((service, index) => (
            <article className="service-overview-card" key={service.slug}>
              <span className="card-number">0{index + 1} {t("/ Solução")}</span>
              <h2>{t(service.title)}</h2>
              <p>{t(service.short)}</p>
              <strong>{t(service.result)}</strong>
              <Link className="text-link" href={localizeHref(locale, "/solucoes/" + service.slug)}>{t("Conheça esta solução")} <Icon name="arrow" width={17} height={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}