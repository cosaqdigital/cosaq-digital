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

export function ServicesSection() {
  return (
    <SectionReveal id="solucoes" className="section services-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Soluções</p>
            <h2>O que podemos construir para sua empresa</h2>
          </div>
          <p>Explore os serviços ou converse com a COSAQ sobre o que você precisa.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              <div className="service-top">
                <span className="icon-box"><Icon name={service.icon} /></span>
                <h3>{service.title}</h3>
              </div>
              <p className="service-summary">{service.summary}</p>
              <div className="service-card-actions">
                <Link
                  className="text-link"
                  href={"/solucoes/" + service.slug}
                  aria-label={`Ver detalhes de ${service.title.toLowerCase()}`}
                >
                  Ver detalhes
                </Link>
                <a className="service-card-contact" href={contactHref(service.cta)}>
                  {service.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
