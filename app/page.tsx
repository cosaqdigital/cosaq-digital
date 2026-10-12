import Link from "next/link";
import Image from "next/image";
import { CTA, ProjectGrid, ServiceGrid } from "@/components/Commercial";
import { faqs, siteUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Criação de sites, plataformas e automações para empresas",
  "Sua empresa merece uma presença digital à altura do que entrega. A COSAQ desenvolve sites, plataformas e automações. Conheça os projetos e solicite uma proposta.",
  "/",
);
export default function Home() {
  return (
    <main id="conteudo" className="commercial-home">
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
      <section className="sales-hero">
        <div className="shell">
          <div className="sales-hero-top">
            <p className="eyebrow">
              COSAQ DIGITAL / DESIGN, DESENVOLVIMENTO E ESTRATÉGIA
            </p>
            <span className="hero-location">Brasil & Estados Unidos</span>
          </div>
          <div className="sales-hero-grid">
            <div>
              <h1>
                Seu trabalho
                <br />
                já tem valor.
                <br />
                <span>
                  Sua presença digital
                  <br />
                  precisa mostrar.
                </span>
              </h1>
              <p className="sales-lead">
                Desenvolvemos sites que valorizam sua empresa, plataformas que
                colocam seu negócio em movimento e automações que simplificam
                sua operação.
              </p>
              <div className="hero-actions">
                <Link href="/contato" className="button">
                  Quero uma proposta ↗
                </Link>
                <Link href="#projetos" className="sales-secondary">
                  Veja o que desenvolvemos ↓
                </Link>
              </div>
              <p className="sales-reassurance">
                Atendimento em português. Escopo e etapas definidos antes de
                começar.
              </p>
            </div>
            <div className="hero-real-project">
              <div className="browser-bar">
                <span aria-hidden="true">● ● ●</span>
                <span>getestimatefast.com</span>
                <span aria-hidden="true">↗</span>
              </div>
              <Link
                href="/projetos/getestimatefast"
                className="hero-project-image"
                aria-label="Conhecer o desenvolvimento do GetEstimateFast"
              >
                <Image
                  src="/projects/getestimatefast.png"
                  alt="Tela real do GetEstimateFast, projeto desenvolvido pela COSAQ Digital"
                  fill
                  priority
                  sizes="(min-width:1200px) 550px, (min-width:900px) 47vw, 92vw"
                />
              </Link>
              <div className="hero-project-caption">
                <div>
                  <span>PROJETO DESENVOLVIDO</span>
                  <strong>GetEstimateFast</strong>
                </div>
                <Link
                  href="/projetos/getestimatefast"
                  aria-label="Ver o projeto GetEstimateFast"
                >
                  ↗
                </Link>
              </div>
              <p className="real-project-note">
                Plataforma de orçamentos · Mercado americano · Em finalização
              </p>
            </div>
          </div>
          <div className="hero-bottom-line">
            <span>Presença que transmite confiança.</span>
            <span>Tecnologia que resolve processos.</span>
            <span>Um projeto com direção.</span>
          </div>
        </div>
      </section>
      <section className="project-names">
        <div className="shell">
          <span>Projetos desenvolvidos</span>
          <Link href="/projetos/orcamentos-brasil">Orçamentos Brasil</Link>
          <Link href="/projetos/getestimatefast">GetEstimateFast</Link>
          <Link href="/projetos/familiausa1">FamíliaUSA1</Link>
          <Link href="/projetos/casal-arquitetura">CASAL</Link>
        </div>
      </section>
      <section className="section shell business-value">
        <div>
          <p className="eyebrow">Sua empresa na decisão do cliente</p>
          <h2>
            Antes de conversar com você,
            <br />o cliente precisa
            <br />
            <em>confiar no que vê.</em>
          </h2>
        </div>
        <div className="value-copy">
          <p>
            Quem chega ao seu site quer entender o que você faz, ver seu
            trabalho e saber como contratar. Uma apresentação confusa ou pouco
            profissional pode interromper essa conversa antes de ela começar.
          </p>
          <p>
            A COSAQ reúne design, conteúdo e desenvolvimento para tornar esse
            caminho claro: da primeira impressão ao pedido de orçamento.
          </p>
          <Link href="/servicos/sites-profissionais" className="text-link">
            Conheça nossa criação de sites ↗
          </Link>
        </div>
      </section>
      <section className="section work-feature" id="projetos">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Portfólio / desenvolvimento aplicado</p>
              <h2>
                Conheça a qualidade
                <br />
                do que <em>construímos.</em>
              </h2>
            </div>
            <p>
              De uma presença comercial a uma plataforma com cadastros,
              pagamentos e regras de operação. Explore os projetos e veja o
              desenvolvimento na prática.
            </p>
          </div>
          <ProjectGrid featured />
          <Link href="/projetos" className="button button-ghost">
            Explorar o portfólio completo ↗
          </Link>
        </div>
      </section>
      <section className="section shell solutions-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Soluções para o seu negócio</p>
            <h2>
              O que você quer
              <br />
              <em>fazer acontecer?</em>
            </h2>
          </div>
          <p>
            Apresentar melhor sua empresa, captar pedidos ou organizar uma
            operação. Escolha o objetivo; nós estruturamos o projeto.
          </p>
        </div>
        <ServiceGrid />
      </section>
      <section className="platform-statement">
        <div className="shell platform-statement-grid">
          <div>
            <p className="eyebrow">Sistemas e plataformas</p>
            <h2>
              Sua ideia pode virar
              <br />
              uma operação digital.
            </h2>
            <p>
              Um projeto com usuários, oportunidades, pagamentos e notificações
              precisa de funções que trabalhem juntas. Desenvolvemos esses
              caminhos a partir das regras do seu negócio.
            </p>
            <Link href="/servicos/plataformas-e-sistemas" className="button">
              Quero desenvolver uma plataforma ↗
            </Link>
          </div>
          <div className="platform-scope">
            <p>EXPERIÊNCIA DEMONSTRADA NO ORÇAMENTOS BRASIL</p>
            <ul>
              <li>
                <span>01</span> Cadastro e acesso de usuários
              </li>
              <li>
                <span>02</span> Distribuição de oportunidades
              </li>
              <li>
                <span>03</span> Carteira e pagamentos
              </li>
              <li>
                <span>04</span> Notificações e administração
              </li>
            </ul>
            <Link href="/projetos/orcamentos-brasil" className="text-link">
              Conhecer o projeto completo ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Da proposta à publicação</p>
            <h2>
              Você acompanha o projeto.
              <br />
              Nós conduzimos a execução.
            </h2>
          </div>
          <p>
            Uma contratação com entregas definidas, espaço para revisão e
            responsabilidades claras.
          </p>
        </div>
        <ol className="steps">
          {[
            [
              "Diagnóstico",
              "Entendemos sua empresa, seu público e o objetivo do projeto.",
            ],
            [
              "Proposta",
              "Você recebe o escopo, as etapas, os prazos e as condições comerciais.",
            ],
            [
              "Desenvolvimento",
              "Construímos o visual e as funções, com revisão do que foi combinado.",
            ],
            [
              "Publicação",
              "Validamos a entrega e orientamos o uso. Manutenção e evolução podem ser contratadas.",
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
      <section className="section shell faq-section">
        <div>
          <p className="eyebrow">Contrate com clareza</p>
          <h2>
            O que você precisa
            <br />
            saber para começar.
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
