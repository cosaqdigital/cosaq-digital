import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { AuthorMockup, CatalogMockup, DashboardMockup, ReaderMockup } from "./Mockups";
import { benefits, capabilities, faq, identities, plans, steps } from "./content";
import { WritersCTA, WritersInquiry } from "./WritersInquiry";
import styles from "./writers.module.css";

const description = "Tenha sua própria livraria digital. Apresente suas obras, ofereça leitura no navegador e venda diretamente, com 0% de comissão da COSAQ.";
const canonical = "https://www.cosaqdigital.com/para-escritores";
const socialImage = "https://www.cosaqdigital.com/writers/plataforma-hero.webp";

export const metadata: Metadata = {
  title: "Plataforma para Escritores | Sua Livraria Digital | COSAQ Digital",
  description,
  alternates: { canonical },
  openGraph: {
    title: "Seu livro. Sua plataforma. Suas vendas. | COSAQ Digital",
    description,
    url: canonical,
    siteName: "COSAQ Digital",
    locale: "pt_BR",
    type: "website",
    images: [{
      url: socialImage,
      width: 1200,
      height: 800,
      alt: "Livraria digital de autor ilustrada em notebook, tablet e celular",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua Livraria Digital | COSAQ Digital",
    description,
    images: [socialImage],
  },
};

const mockups = [AuthorMockup, CatalogMockup, ReaderMockup, DashboardMockup];
const comparison = [
  {
    title: "Nos marketplaces",
    icon: "layers",
    points: ["Descoberta de novas obras pelo público da plataforma.", "Vitrine, regras e taxas definidas pelo canal.", "Relacionamento com o leitor intermediado pela plataforma."],
  },
  {
    title: "Na sua livraria digital",
    icon: "check",
    points: ["Uma vitrine com sua marca, seus livros e seu domínio.", "Liberdade para organizar o catálogo e definir preços.", "Um canal direto para fortalecer o vínculo com seus leitores."],
  },
] as const;

export default function WritersLandingPage() {
  return (
    <main id="conteudo" className={styles.page}>
      <section className={styles.hero} aria-labelledby="escritores-titulo">
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Para escritores independentes</p>
            <h1 id="escritores-titulo">Seu livro.<br /><span>Sua plataforma.</span><br />Suas vendas.</h1>
            <p className={styles.heroIntro}>Tenha sua própria livraria digital, com sua identidade, suas obras e uma experiência de leitura desenvolvida para seus leitores.</p>
            <p className={styles.heroDetail}>Uma solução da COSAQ Digital para escritores que desejam vender diretamente e construir sua presença literária independente.</p>
            <div className={styles.actions}>
              <WritersCTA interest="Proposta comercial" placement="hero">Quero minha plataforma</WritersCTA>
              <a href="#experiencia" className={styles.secondary}>Conhecer a experiência</a>
            </div>
          </div>
          <figure className={styles.heroVisual}>
            <Image
              src="/writers/plataforma-hero.webp"
              alt="Livraria de autor em um notebook, catálogo no tablet e capítulo aberto no celular"
              width={1200}
              height={800}
              sizes="(max-width: 819px) 100vw, (max-width: 1400px) 58vw, 820px"
              preload
            />
            <figcaption>Imagem conceitual da plataforma</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section} ${styles.comparison}`} aria-labelledby="espaco-proprio">
        <div>
          <h2 id="espaco-proprio" className={styles.editorial}>Você criou um universo. <em>Ele merece um espaço próprio.</em></h2>
          <p>Uma livraria própria pode complementar sua presença nos marketplaces e se tornar o endereço oficial da sua obra.</p>
        </div>
        {comparison.map(({ title, points, icon }) => (
          <article key={title} className={styles.comparisonCard} data-featured={icon === "check" || undefined}>
            <h3>{title}</h3>
            <ul>{points.map((point) => <li key={point}><Icon name={icon} />{point}</li>)}</ul>
          </article>
        ))}
      </section>

      <section id="experiencia" className={styles.showcase} aria-labelledby="demonstracao-titulo">
        <div className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.sectionIntro}>
            <h2 id="demonstracao-titulo">Muito mais do que um site para vender ebooks.</h2>
            <p>Da primeira visita à leitura, veja como as quatro áreas de uma livraria digital podem trabalhar juntas. <span className={styles.caption}>Interfaces de demonstração conceitual</span></p>
          </div>
          <div className={styles.showcaseGrid}>
            {capabilities.map(([title, detail], index) => {
              const Mockup = mockups[index];
              return (
                <article key={title} className={styles.showcaseItem}>
                  <div className={styles.previewFrame}><Mockup /></div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.commission} aria-labelledby="comissao-titulo">
        <div className={styles.wrap}>
          <h2 id="comissao-titulo"><span>0%</span> <strong>de comissão da COSAQ sobre suas vendas diretas.</strong></h2>
          <div>
            <p>Você contrata a implantação e a manutenção da plataforma. A COSAQ recebe o valor previsto na proposta, sem cobrar um percentual de cada livro vendido diretamente.</p>
            <p className={styles.caption}>Taxas de pagamento, tributos e serviços de terceiros continuam aplicáveis.</p>
          </div>
        </div>
      </section>

      <section id="leitura" className={`${styles.wrap} ${styles.section} ${styles.reading}`} aria-labelledby="leitura-titulo">
        <div>
          <h2 id="leitura-titulo" className={styles.editorial}>Seu leitor merece mais do que um arquivo para baixar.</h2>
          <p>O livro abre no navegador, em uma interface que mantém o foco na história. A proposta detalha os formatos aceitos e o acesso do leitor.</p>
          <ul className={styles.checklist}>
            <li><Icon name="check" />Leitura em computador, tablet e celular</li>
            <li><Icon name="check" />Layout adaptado ao tamanho da tela</li>
            <li><Icon name="check" />Acesso às obras em um espaço dedicado</li>
          </ul>
          <WritersCTA interest="Demonstração" placement="leitura" secondary>Solicitar demonstração</WritersCTA>
        </div>
        <figure className={styles.readerStage}>
          <div className={styles.readerTablet}><ReaderMockup /></div>
          <div className={styles.readerPhone}><ReaderMockup /></div>
          <figcaption>Conceito da experiência de leitura em tablet e celular</figcaption>
        </figure>
      </section>

      <section className={styles.identity} aria-labelledby="identidade-titulo">
        <div className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.sectionIntro}>
            <h2 id="identidade-titulo" className={styles.editorial}>Sua plataforma. Sua identidade. <em>Seu universo.</em></h2>
            <p>Fantasia, romance ou suspense. A identidade da livraria pode seguir o tom que os leitores encontram nos seus livros. <span className={styles.caption}>Exemplos conceituais com autores fictícios</span></p>
          </div>
          <div className={styles.identityGrid}>
            {identities.map((item) => (
              <figure key={item.style}>
                <div className={styles.previewFrame}><AuthorMockup identity={item} /></div>
                <figcaption><strong>{item.author}</strong><span>{item.genre}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section} ${styles.benefits}`} aria-labelledby="beneficios-titulo">
        <div><h2 id="beneficios-titulo">Uma livraria que cresce com sua escrita.</h2><p>Da estreia ao próximo lançamento, cada livro encontra seu lugar no seu catálogo.</p></div>
        <ul className={styles.benefitGrid}>
          {benefits.map(({ icon, title, description }) => (
            <li key={title}><Icon name={icon} /><div><h3>{title}</h3><p>{description}</p></div></li>
          ))}
        </ul>
      </section>

      <section className={styles.process} aria-labelledby="processo-titulo">
        <div className={`${styles.wrap} ${styles.section}`}>
          <h2 id="processo-titulo">Da primeira conversa ao lançamento</h2>
          <ol className={styles.stepGrid}>
            {steps.map(([title, detail], index) => (
              <li key={title}><span className={styles.stepNumber} aria-hidden="true">{index + 1}</span><h3>{title}</h3><p>{detail}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="investimento" className={styles.pricing} aria-labelledby="planos-titulo">
        <div className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.sectionIntro}>
            <h2 id="planos-titulo">Um plano para a sua fase como autor.</h2>
            <p>Os valores abaixo são pontos de partida. A proposta confirma as funcionalidades, o investimento e a manutenção de acordo com o seu projeto.</p>
          </div>
          <div className={styles.planGrid}>
            {plans.map((plan) => {
              const recommended = plan.name === "Profissional";
              return (
                <article key={plan.name} className={styles.plan} data-recommended={recommended || undefined}>
                  <div className={styles.planTitle}><h3>{plan.name}</h3>{recommended && <span>Recomendado</span>}</div>
                  <p>{plan.description}</p>
                  <div className={styles.price}><span>Implantação a partir de</span><strong>R$ {plan.setup}</strong><span>+ R$ {plan.monthly}/mês de manutenção</span></div>
                  <ul className={styles.checklist}>{plan.scope.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
                  <WritersCTA interest="Proposta comercial" plan={plan.name} placement="planos" secondary={!recommended}>Solicitar proposta<span className={styles.srOnly}> do plano {plan.name}</span></WritersCTA>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="duvidas" className={`${styles.wrap} ${styles.section} ${styles.faq}`} aria-labelledby="duvidas-titulo">
        <div><h2 id="duvidas-titulo" className={styles.editorial}>Perguntas frequentes</h2><p>Da identidade da livraria às condições de manutenção e venda.</p></div>
        <div>
          {faq.map(([question, answer]) => (
            <details key={question}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <section id="contato-escritores" className={styles.contact} aria-labelledby="contato-titulo">
        <div className={`${styles.wrap} ${styles.section} ${styles.contactGrid}`}>
          <div>
            <h2 id="contato-titulo" className={styles.editorial}>Você já criou a história. Agora tenha um <em>espaço à altura dela.</em></h2>
            <p>Conte quais livros você quer publicar e como imagina sua livraria. A COSAQ pode apresentar a experiência ou preparar uma proposta para o seu catálogo.</p>
            <Link href="/#projetos">Conheça outros projetos da COSAQ Digital</Link>
          </div>
          <WritersInquiry />
        </div>
      </section>
    </main>
  );
}
