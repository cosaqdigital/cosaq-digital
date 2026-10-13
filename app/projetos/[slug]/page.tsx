import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectPreview } from "@/components/ProjectPreview";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { projects, contactHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} | Projetos da COSAQ Digital`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title,
      description: project.description,
      url: `https://cosaqdigital.com/projetos/${project.slug}`,
      siteName: "COSAQ Digital",
      type: "website",
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const other = projects.find((p) => p.slug !== slug)!;
  return (
    <main id="conteudo" className={`case-page accent-${project.accent}`}>
      <section className="case-hero shell">
        <Link href="/#projetos" className="text-link case-back">
          <Icon name="back" width={17} height={17} />
          Todos os projetos
        </Link>
        <div className="case-intro">
          <div>
            <p className="eyebrow">Estudo de caso / {project.country}</p>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            Conhecer a plataforma
            <Icon name="external" width={18} height={18} />
          </a>
        </div>
        <div className="case-preview">
          <ProjectPreview project={project} priority />
        </div>
        <div className="case-facts">
          <div>
            <span>Mercado</span>
            <strong>{project.country}</strong>
          </div>
          <div>
            <span>Proposta</span>
            <strong>{project.market}</strong>
          </div>
          <div>
            <span>Plataforma</span>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              {project.domain}
              <Icon name="external" width={15} height={15} />
            </a>
          </div>
        </div>
      </section>
      <section className="section shell case-story">
        <div className="case-story-heading">
          <p className="eyebrow">O ponto de partida</p>
          <h2>
            Uma necessidade real.
            <br />
            <span>Uma experiência pensada para ela.</span>
          </h2>
        </div>
        <div className="case-story-copy">
          <article>
            <span className="card-number">01 / O desafio</span>
            <h3>O problema que a proposta procura resolver.</h3>
            <p>{project.problem}</p>
          </article>
          <article>
            <span className="card-number">02 / A solução</span>
            <h3>Clareza na jornada, do início ao próximo passo.</h3>
            <p>{project.approach}</p>
          </article>
        </div>
      </section>
      <section className="section case-details">
        <div className="shell">
          <p className="eyebrow">Por dentro da proposta</p>
          <h2>O que organiza a experiência.</h2>
          <div className="case-detail-grid">
            {project.details.map((detail, index) => (
              <article key={detail.title}>
                <span className="icon-box">
                  <Icon
                    name={
                      index === 0 ? "compass" : index === 1 ? "layers" : "globe"
                    }
                  />
                </span>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell case-next">
        <div>
          <p className="eyebrow">Sua empresa também tem um desafio?</p>
          <h2>
            Vamos pensar no
            <br />
            <span>seu próximo projeto.</span>
          </h2>
          <ButtonLink
            href={contactHref(
              `Quero conversar sobre uma solução como ${project.title}`,
            )}
          >
            Conversar sobre minha ideia
          </ButtonLink>
        </div>
        <Link href={`/projetos/${other.slug}`} className="next-project">
          <span className="eyebrow">Conheça também</span>
          <strong>{other.title}</strong>
          <span>
            {other.country}
            <Icon name="arrow" />
          </span>
        </Link>
      </section>
    </main>
  );
}
