import { DeviceShowcase, AutomationVisual } from "@/components/DeviceShowcase";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, siteUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { CTA } from "@/components/Commercial";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s ? pageMetadata(s.title, s.short, `/servicos/${slug}`) : {};
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <main id="conteudo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.short,
            url: `${siteUrl}/servicos/${s.slug}`,
            provider: {
              "@type": "Organization",
              name: "COSAQ Digital",
              url: siteUrl,
            },
          }),
        }}
      />
      <section className="shell solution-hero">
        <div>
          <p className="eyebrow">Nossas soluções</p>
          <h1>{s.title}</h1>
          <p className="solution-promise">{s.short}</p>
          <p>{s.intro}</p>
          <Link href="/contato" className="button">
            Quero uma proposta para meu projeto ↗
          </Link>
        </div>
        {s.slug === "automacoes" || s.slug === "plataformas-e-sistemas" ? (
          <AutomationVisual />
        ) : (
          <DeviceShowcase
            image={
              s.slug === "blogs-e-conteudo"
                ? "/projects/familiausa1.png"
                : "/projects/casal-arqeng.png"
            }
            title={
              s.slug === "blogs-e-conteudo"
                ? "FamíliaUSA1"
                : "CASAL Arquitetura & Engenharia"
            }
            caption="Projeto desenvolvido pela COSAQ Digital · Apresentação visual"
            priority
          />
        )}
      </section>
      <section className="shell content-section detail-grid">
        <div className="prose">
          <Link className="breadcrumb" href="/servicos">
            ← Todas as soluções
          </Link>
          <h2>O que pode fazer parte do projeto</h2>
          <ul>
            {s.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <h2>Como construímos</h2>
          <p>{s.process}</p>
          <h2>O que combinamos antes de começar</h2>
          <p>{s.boundary}</p>
        </div>
        <aside className="detail-aside">
          <p className="eyebrow">Para quem faz sentido</p>
          <h2>Uma solução com propósito.</h2>
          <p>{s.fit}</p>
          <Link href="/contato" className="button">
            Conversar sobre esta solução ↗
          </Link>
          <p>
            Você explica sua necessidade. Nós avaliamos o escopo antes de
            apresentar uma proposta.
          </p>
        </aside>
      </section>
      <CTA />
    </main>
  );
}
