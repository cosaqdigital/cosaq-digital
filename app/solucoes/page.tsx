import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/services";
import { ButtonLink } from "@/components/ButtonLink";
import { contactHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soluções Digitais para Empresas | COSAQ Digital",
  description: "Sites profissionais, plataformas, sistemas personalizados e automações. Descubra o que sua empresa pode desenvolver com a COSAQ Digital.",
  alternates: { canonical: "/solucoes" },
};

export default function ServicesPage() {
  return (
    <main id="conteudo" className="solutions-page">
      <section className="section shell service-overview-hero">
        <p className="eyebrow">Desenvolvimento digital</p>
        <h1>O desafio é do seu negócio.<br /><span>A solução precisa fazer sentido para ele.</span></h1>
        <p>Conheça as formas de desenvolvimento que oferecemos, com aplicações reais e uma conversa de escopo antes de definir tecnologia ou investimento.</p>
        <ButtonLink href={contactHref("Quero avaliar uma solução digital")}>Conversar sobre uma solução</ButtonLink>
      </section>
      <section className="section shell service-overview-list">
        <div className="service-overview-grid">
          {services.map((service, index) => (
            <article className="service-overview-card" key={service.slug}>
              <span className="card-number">0{index + 1} / Solução</span>
              <h2>{service.title}</h2>
              <p>{service.short}</p>
              <strong>{service.result}</strong>
              <Link className="text-link" href={"/solucoes/" + service.slug}>
                Conheça esta solução <Icon name="arrow" width={17} height={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}