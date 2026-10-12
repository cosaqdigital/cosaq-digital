import Link from "next/link";
import { CTA, ProjectGrid, ServiceGrid } from "@/components/Commercial";
import { faqs, siteUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Sites, plataformas e automações",
  "A COSAQ Digital desenvolve sites profissionais, plataformas, automações e blogs. Conheça nossos projetos e converse sobre a solução para sua empresa.",
  "/",
);
export default function Home() {
  return (
    <main id="conteudo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "COSAQ Digital",
            url: siteUrl,
            description: "Desenvolvimento e gestão de soluções digitais",
            knowsAbout: [
              "Sites profissionais",
              "Plataformas web",
              "Automações",
              "Blogs",
            ],
          }),
        }}
      />
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" /> Desenvolvimento e gestão digital
          </p>
          <h1>
            Seu negócio.
            <br />
            Sua próxima
            <br />
            <span className="accent">solução digital.</span>
          </h1>
          <p>
            Sites que representam sua empresa. Plataformas que organizam sua
            operação. Automações que conectam o trabalho.
          </p>
          <div className="hero-actions">
            <Link href="/contato" className="button">
              Conversar sobre meu projeto ↗
            </Link>
            <Link href="/projetos" className="button button-ghost">
              Conhecer nossos projetos
            </Link>
          </div>
          <p className="hero-note">
            Atendimento em português · Brasil e Estados Unidos
          </p>
        </div>
        <div className="hero-showcase">
          <div className="showcase-label">
            <span>DA IDEIA À OPERAÇÃO</span>
            <span className="accent">COSAQ ↗</span>
          </div>
          <div className="showcase-platform">
            <span className="product-chip">
              NOSSA EXPERIÊNCIA EM PLATAFORMAS
            </span>
            <h2>
              Mais que uma página.
              <br />
              Um negócio conectado.
            </h2>
            <div className="showcase-products">
              <Link href="/projetos/orcamentos-brasil">
                <span className="platform-symbol green">OB</span>
                <div>
                  <strong>Orçamentos Brasil</strong>
                  <small>Plataforma de serviços</small>
                </div>
                <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/projetos/getestimatefast">
                <span className="platform-symbol">GE</span>
                <div>
                  <strong>GetEstimateFast</strong>
                  <small>Produto em finalização · EUA</small>
                </div>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="showcase-footer">
            <span>Estratégia</span>
            <span aria-hidden="true">→</span>
            <span>Construção</span>
            <span aria-hidden="true">→</span>
            <span>Evolução</span>
          </div>
        </div>
      </section>
      <div className="expertise-strip">
        <div className="shell">
          <span>Sites profissionais</span>
          <span>Plataformas web</span>
          <span>Automações</span>
          <span>Blogs e conteúdo</span>
        </div>
      </div>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">O que podemos construir</p>
            <h2>
              A solução começa
              <br />
              pelo seu negócio.
            </h2>
          </div>
          <p>
            Entendemos o que você precisa resolver antes de definir páginas,
            ferramentas ou integrações.
          </p>
        </div>
        <ServiceGrid />
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Experiência aplicada</p>
              <h2>
                Também construímos
                <br />
                nossos próprios produtos.
              </h2>
            </div>
            <p>
              Da solicitação do cliente às regras de operação: nossos projetos
              mostram como conectamos as partes de uma solução digital.
            </p>
          </div>
          <ProjectGrid featured />
          <Link href="/projetos" className="button button-dark">
            Ver todos os projetos ↗
          </Link>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Como trabalhamos</p>
            <h2>Clareza em cada etapa.</h2>
          </div>
          <p>
            O projeto precisa fazer sentido para você, desde a primeira conversa
            até a entrega.
          </p>
        </div>
        <ol className="steps">
          {[
            [
              "Entendemos",
              "Seu público, sua operação e o problema que o projeto precisa resolver.",
            ],
            [
              "Definimos",
              "Uma proposta com entregas, etapas, responsabilidades e condições.",
            ],
            [
              "Construímos",
              "Design, desenvolvimento e revisão dos fluxos previstos no escopo.",
            ],
            [
              "Evoluímos",
              "Publicação e orientação, com manutenção quando contratada.",
            ],
          ].map(([title, text], i) => (
            <li key={title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="section shell about-teaser">
        <p className="eyebrow">A empresa por trás dos projetos</p>
        <h2>
          Desenvolvimento com visão
          <br />
          de quem também opera.
        </h2>
        <p>
          A COSAQ reúne criação e evolução de produtos próprios com soluções
          para outras empresas. Essa experiência orienta nosso cuidado com
          conteúdo, atendimento e processos.
        </p>
        <Link href="/sobre" className="text-link">
          Conheça a COSAQ Digital ↗
        </Link>
      </section>
      <section className="section shell faq-section">
        <div>
          <p className="eyebrow">Antes de começar</p>
          <h2>
            Perguntas que
            <br />
            merecem respostas.
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
