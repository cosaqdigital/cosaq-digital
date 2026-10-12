import Link from "next/link";
import Image from "next/image";
import { projects, services } from "@/lib/content";
export function CTA() {
  return (
    <section className="section cta-band">
      <div className="shell cta-inner">
        <div>
          <p className="eyebrow">
            Vamos construir o próximo passo da sua empresa
          </p>
          <h2>
            Sua empresa merece uma
            <br />
            presença à altura.
          </h2>
          <p>
            Apresente seu negócio e seu objetivo. Vamos avaliar a solução e
            preparar uma proposta com entregas, etapas e condições claras.
          </p>
        </div>
        <Link href="/contato" className="button">
          Solicitar minha proposta <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-copy">{description}</p>
    </section>
  );
}
export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((s) => (
        <Link
          href={`/servicos/${s.slug}`}
          className="service-card"
          key={s.slug}
        >
          <div className="card-top">
            <span className="small accent">{s.number}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.short}</p>
          <span className="text-link">Ver o que está incluído</span>
        </Link>
      ))}
    </div>
  );
}
export function ProjectGrid({ featured = false }: { featured?: boolean }) {
  return (
    <div className="project-grid">
      {(featured ? projects.slice(0, 2) : projects).map((p) => (
        <article className="project-card" key={p.slug}>
          <Link
            href={`/projetos/${p.slug}`}
            className={`project-media ${p.image ? "" : "platform-art"}`}
            aria-label={`Conhecer o projeto ${p.title}`}
          >
            {p.image ? (
              <Image
                src={p.image}
                alt={`Apresentação do site ${p.title}`}
                fill
                sizes="(min-width: 1200px) 560px, (min-width: 768px) 45vw, 92vw"
                className="project-image"
              />
            ) : (
              <div className="platform-cover">
                <span className="product-chip">PLATAFORMA DESENVOLVIDA</span>
                <strong>
                  Orçamentos
                  <br />
                  <span>Brasil.</span>
                </strong>
                <p>
                  Pedidos de serviços.
                  <br />
                  Oportunidades conectadas.
                </p>
                <div className="flow">
                  <span>Cliente</span>
                  <span aria-hidden="true">→</span>
                  <span>Plataforma</span>
                  <span aria-hidden="true">→</span>
                  <span>Profissional</span>
                </div>
              </div>
            )}
          </Link>
          <div className="project-info">
            <p className="eyebrow">{p.type}</p>
            <h3>
              <Link href={`/projetos/${p.slug}`}>{p.title}</Link>
            </h3>
            <p>{p.summary}</p>
            <div className="project-bottom">
              <span className="status">{p.status}</span>
              <Link href={`/projetos/${p.slug}`} className="text-link">
                Explorar projeto ↗
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
