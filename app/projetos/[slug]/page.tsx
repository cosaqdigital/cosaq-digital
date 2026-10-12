import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageIntro, CTA } from "@/components/Commercial";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p ? pageMetadata(p.title, p.summary, `/projetos/${slug}`) : {};
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <main id="conteudo">
      <PageIntro eyebrow={p.type} title={p.title} description={p.summary} />
      <section className="shell content-section">
        {p.image ? (
          <div className="project-detail-media">
            <Image
              src={p.image}
              alt={`Apresentação do projeto ${p.title}`}
              fill
              sizes="(min-width: 1200px) 1180px, 95vw"
              priority
            />
          </div>
        ) : null}
        <div className="detail-grid">
          <div className="prose">
            <Link href="/projetos" className="breadcrumb">
              ← Todos os projetos
            </Link>
            <h2>O problema que o projeto resolve</h2>
            <p>{p.challenge}</p>
            <h2>O trabalho desenvolvido</h2>
            <ul>
              {p.work.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <h2>O que essa experiência demonstra</h2>
            <p>{p.learning}</p>
          </div>
          <aside className="detail-aside">
            <p className="eyebrow">Sobre o projeto</p>
            <h2>{p.title}</h2>
            <p>{p.type}</p>
            <p>{p.status}</p>
            <a
              className="button button-ghost"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar projeto ↗
            </a>
            <p>O acesso abre o site do projeto em uma nova aba.</p>
            <Link href="/contato" className="text-link">
              Tenho uma ideia para conversar ↗
            </Link>
          </aside>
        </div>
      </section>
      <CTA />
    </main>
  );
}
