import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { Icon, type IconName } from "@/components/Icon";
import { contactHref } from "@/lib/site";

const services: {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  cta: string;
}[] = [
  {
    slug: "sites-profissionais",
    title: "Sites profissionais",
    icon: "globe",
    summary: "Sites institucionais e páginas de venda que apresentam seu negócio e facilitam o contato de novos clientes.",
    cta: "Quero um site profissional",
  },
  {
    slug: "plataformas-digitais",
    title: "Plataformas digitais",
    icon: "layers",
    summary: "Portais e marketplaces para lançar serviços e organizar a interação entre seus clientes e sua equipe.",
    cta: "Quero criar uma plataforma",
  },
  {
    slug: "sistemas-personalizados",
    title: "Sistemas personalizados",
    icon: "system",
    summary: "Reúna cadastros, permissões e solicitações em um sistema que acompanha o dia a dia da sua operação.",
    cta: "Quero organizar minha operação",
  },
  {
    slug: "automacoes-integracoes",
    title: "Automações e integrações",
    icon: "workflow",
    summary: "Conecte formulários, sistemas e notificações para reduzir tarefas repetitivas e retrabalho.",
    cta: "Quero simplificar processos",
  },
];

export function ServicesSection({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <SectionReveal id="solucoes" className="section services-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t("Soluções")}</p>
            <h2>{t("O que podemos construir para sua empresa")}</h2>
          </div>
          <p>{t("Explore os serviços ou converse com a COSAQ sobre o que você precisa.")}</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              <div className="service-top">
                <span className="icon-box"><Icon name={service.icon} /></span>
                <h3>{t(service.title)}</h3>
              </div>
              <p className="service-summary">{t(service.summary)}</p>
              <div className="service-card-actions">
                <Link
                  className="text-link"
                  href={localizeHref(locale, "/solucoes/" + service.slug)}
                  aria-label={t("Ver detalhes de {0}", [service.title.toLowerCase()])}
                >{t("Ver detalhes")}</Link>
                <a className="service-card-contact" href={localizeHref(locale, contactHref(service.cta))}>
                  {t(service.cta)}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
