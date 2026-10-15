import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ButtonLink";
import { ProjectPreview } from "@/components/ProjectPreview";
import { services } from "@/lib/services";
import { contactHref, projects } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title + " | COSAQ Digital",
    description: service.introduction,
    alternates: { canonical: "/solucoes/" + slug },
    openGraph: {
      title: service.title + " | COSAQ Digital",
      description: service.introduction,
      url: "https://cosaqdigital.com/solucoes/" + slug,
      siteName: "COSAQ Digital",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const project = projects.find((p) => p.slug === service.relatedProject)!;
  return (
    <main id="conteudo" className="solution-detail-page">
      <section className="section shell solution-detail-hero">
        <Link href="/solucoes" className="text-link case-back">
          <Icon name="back" width={16} height={16} /> Todas as soluções
        </Link>
        <p className="eyebrow">Soluções digitais / {service.title}</p>
        <h1>{service.short}</h1>
        <p>{service.introduction}</p>
        <ButtonLink href={contactHref(service.formInterest)}>
          Conversar sobre este serviço
        </ButtonLink>
      </section>

      <section className="section solution-applications">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Aplicações práticas</p><h2>O que podemos<br /><span>construir juntos.</span></h2></div>
            <p>O formato final é definido a partir da necessidade e do escopo de cada projeto.</p>
          </div>
          <div className="solution-list-grid">
            {service.examples.map((example, index) => (
              <article key={example}>
                <span className="card-number">0{index + 1}</span><p>{example}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell solution-delivery">
        <div>
          <p className="eyebrow">Clareza no escopo</p>
          <h2>Uma solução com<br /><span>objetivos definidos.</span></h2>
          <p>{service.result}</p>
          <ul className="solution-check-list">
            {service.deliverables.map((item) => (
              <li key={item}><Icon name="check" width={18} height={18}/>{item}</li>
            ))}
          </ul>
        </div>
        <div className="solution-process-card">
          <p className="eyebrow">Como começamos</p>
          {service.process.map((item, index) => (
            <div className="solution-process-step" key={item}>
              <span>0{index + 1}</span><p>{item}</p>
            </div>
          ))}
          <small>Os entregáveis e prazos são definidos na proposta comercial, conforme o escopo.</small>
        </div>
      </section>

      <section className="section solution-example">
        <div className="shell solution-example-grid">
          <div>
            <p className="eyebrow">Exemplo desenvolvido</p>
            <h2>Trabalho real.<br /><span>Para ver na prática.</span></h2>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link className="text-link" href={"/projetos/" + project.slug}>
              Explorar o estudo de caso <Icon name="arrow" width={18} height={18}/>
            </Link>
          </div>
          <Link className="solution-example-preview" href={"/projetos/" + project.slug} aria-label={"Ver estudo de caso " + project.title}>
            <ProjectPreview project={project} />
          </Link>
        </div>
      </section>

      <section className="section shell solution-faq">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2>O que você precisa saber.</h2>
        {service.faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}<span aria-hidden="true">+</span></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
        <div className="solution-end-cta">
          <div>
            <h3>Vamos avaliar o que sua empresa precisa?</h3>
            <p>Explique seu desafio. A proposta vem depois de entendermos a necessidade.</p>
          </div>
          <ButtonLink href={contactHref(service.formInterest)}>Solicitar uma conversa</ButtonLink>
        </div>
      </section>
    </main>
  );
}