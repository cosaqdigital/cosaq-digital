import { translator } from "@/lib/i18n/copy";
import { languages, localizeHref, type Locale } from "@/lib/i18n/routes";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { AuthorMockup, CatalogMockup, DashboardMockup, ReaderMockup } from "@/app/para-escritores/Mockups";
import { benefits, capabilities, faq, identities, plans, regionalPricing, steps } from "@/app/para-escritores/content";
import { WritersCTA, WritersInquiry } from "@/app/para-escritores/WritersInquiry";
import styles from "@/app/para-escritores/writers.module.css";

const mockups = [AuthorMockup, CatalogMockup, ReaderMockup, DashboardMockup];
const comparison = [
  {
    title: "Nos marketplaces",
    icon: "layers",
    points: ["Descoberta de novas obras pelo público da plataforma.", "Seu livro pode aparecer ao lado de outros títulos da mesma categoria.", "Relacionamento com o leitor intermediado pela plataforma."],
  },
  {
    title: "Na sua livraria digital",
    icon: "check",
    points: ["Uma vitrine com sua marca, seus livros e seu domínio.", "Liberdade para organizar o catálogo e definir preços.", "Um canal direto para fortalecer o vínculo com seus leitores."],
  },
] as const;

export default function WritersLandingPage({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const pricing = regionalPricing[locale];
  const formatPrice = pricing && new Intl.NumberFormat(languages[locale].tag, {
    style: "currency", currency: pricing.currency, maximumFractionDigits: 0, minimumFractionDigits: 0,
  });
  return (
    <main id="conteudo" className={styles.page}>
      <section className={styles.hero} aria-labelledby="escritores-titulo">
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>{t("Para escritores independentes")}</p>
            <h1 id="escritores-titulo">{t("Seu livro.")}<br /><span>{t("Sua plataforma.")}</span><br />{t("Suas vendas.")}</h1>
            <p className={styles.heroIntro}>{t("Tenha sua própria livraria digital, com sua identidade, suas obras e uma experiência de leitura desenvolvida para seus leitores.")}</p>
            <p className={styles.heroDetail}>{t("Uma solução da COSAQ Digital para escritores que desejam vender diretamente e construir sua presença literária independente.")}</p>
            <div className={styles.actions}>
              <WritersCTA interest="Proposta comercial" placement="hero">{t("Quero minha plataforma")}</WritersCTA>
              <a href="#experiencia" className={styles.secondary}>{t("Conhecer a experiência")}</a>
            </div>
          </div>
          <figure className={styles.heroVisual}>
            <Image
              src="/writers/plataforma-hero.webp"
              alt={t("Livraria de autor em um notebook, catálogo no tablet e capítulo aberto no celular")}
              width={1200}
              height={800}
              sizes="(max-width: 819px) 100vw, (max-width: 1400px) 58vw, 820px"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>{t("Imagem conceitual da plataforma")}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section} ${styles.comparison}`} aria-labelledby="espaco-proprio">
        <div>
          <h2 id="espaco-proprio" className={styles.editorial}>{t("Seu livro merece")} <em>{t("uma vitrine própria.")}</em></h2>
          <p>{t("Uma livraria própria pode complementar sua presença nos marketplaces e se tornar o endereço oficial da sua obra.")}</p>
        </div>
        {comparison.map(({ title, points, icon }) => (
          <article key={title} className={styles.comparisonCard} data-featured={icon === "check" || undefined}>
            <h3>{t(title)}</h3>
            <div className={styles.shelfComparison} aria-hidden="true">
              <span /><span>{t("Seu livro")}</span><span />
            </div>
            <ul>{points.map((point) => <li key={point}><Icon name={icon} />{t(point)}</li>)}</ul>
          </article>
        ))}
      </section>

      <section id="experiencia" className={styles.showcase} aria-labelledby="demonstracao-titulo">
        <div className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.sectionIntro}>
            <h2 id="demonstracao-titulo">{t("Muito mais do que um site para vender ebooks.")}</h2>
            <p>{t("Da primeira visita à leitura, veja como as quatro áreas de uma livraria digital podem trabalhar juntas.")} <span className={styles.caption}>{t("Interfaces de demonstração conceitual")}</span></p>
          </div>
          <div className={styles.showcaseGrid}>
            {capabilities.map(([title, detail], index) => {
              const Mockup = mockups[index];
              return (
                <article key={title} className={styles.showcaseItem}>
                  <div className={styles.previewFrame}><Mockup locale={locale} /></div>
                  <h3>{t(title)}</h3>
                  <p>{t(detail)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.commission} aria-labelledby="comissao-titulo">
        <div className={styles.wrap}>
          <h2 id="comissao-titulo"><span>0%</span> <strong>{t("de comissão da COSAQ sobre suas vendas diretas.")}</strong></h2>
          <div>
            <p>{t("Você contrata a implantação e a manutenção da plataforma. A COSAQ recebe o valor previsto na proposta, sem cobrar um percentual de cada livro vendido diretamente.")}</p>
            <p className={styles.caption}>{t("Taxas de pagamento, tributos e serviços de terceiros continuam aplicáveis.")}</p>
          </div>
        </div>
      </section>

      <section id="leitura" className={`${styles.wrap} ${styles.section} ${styles.reading}`} aria-labelledby="leitura-titulo">
        <div>
          <h2 id="leitura-titulo" className={styles.editorial}>{t("Seu leitor merece mais do que um arquivo para baixar.")}</h2>
          <p>{t("O livro abre no navegador, em uma interface que mantém o foco na história. A proposta detalha os formatos aceitos e o acesso do leitor.")}</p>
          <ul className={styles.checklist}>
            <li><Icon name="check" />{t("Leitura em computador, tablet e celular")}</li>
            <li><Icon name="check" />{t("Layout adaptado ao tamanho da tela")}</li>
            <li><Icon name="check" />{t("Acesso às obras em um espaço dedicado")}</li>
          </ul>
          <WritersCTA interest="Demonstração" placement="leitura" secondary>{t("Solicitar demonstração")}</WritersCTA>
        </div>
        <figure className={styles.readerStage}>
          <div className={styles.readerTablet}><ReaderMockup locale={locale} /></div>
          <div className={styles.readerPhone}><ReaderMockup locale={locale} /></div>
          <figcaption>{t("Conceito da experiência de leitura em tablet e celular")}</figcaption>
        </figure>
      </section>

      <section className={styles.identity} aria-labelledby="identidade-titulo">
        <div className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.sectionIntro}>
            <h2 id="identidade-titulo" className={styles.editorial}>{t("Sua plataforma. Sua identidade.")} <em>{t("Seu universo.")}</em></h2>
            <p>{t("Fantasia, romance ou suspense. A identidade da livraria pode seguir o tom que os leitores encontram nos seus livros.")} <span className={styles.caption}>{t("Exemplos conceituais com autores fictícios")}</span></p>
          </div>
          <div className={styles.identityGrid}>
            {identities.map((item) => (
              <figure key={item.style}>
                <div className={styles.previewFrame}><AuthorMockup locale={locale} identity={item} /></div>
                <figcaption><strong>{t(item.author)}</strong><span>{t(item.genre)}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section} ${styles.benefits}`} aria-labelledby="beneficios-titulo">
        <div><h2 id="beneficios-titulo">{t("Uma livraria que cresce com sua escrita.")}</h2><p>{t("Da estreia ao próximo lançamento, cada livro encontra seu lugar no seu catálogo.")}</p></div>
        <ul className={styles.benefitGrid}>
          {benefits.map(({ icon, title, description }) => (
            <li key={title}><Icon name={icon} /><div><h3>{t(title)}</h3><p>{t(description)}</p></div></li>
          ))}
        </ul>
      </section>

      <section className={styles.process} aria-labelledby="processo-titulo">
        <div className={`${styles.wrap} ${styles.section}`}>
          <h2 id="processo-titulo">{t("Da primeira conversa ao lançamento")}</h2>
          <ol className={styles.stepGrid}>
            {steps.map(([title, detail], index) => (
              <li key={title}><span className={styles.stepNumber} aria-hidden="true">{index + 1}</span><h3>{t(title)}</h3><p>{t(detail)}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="investimento" className={styles.pricing} aria-labelledby="planos-titulo">
        <div className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.sectionIntro}>
            <h2 id="planos-titulo">{t("Um plano para a sua fase como autor.")}</h2>
            <p>{pricing
              ? t("Os valores abaixo são pontos de partida. A proposta confirma as funcionalidades, o investimento e a manutenção de acordo com o seu projeto.")
              : t("Conte sobre seu catálogo para receber uma proposta de implantação e manutenção para o seu mercado.")}</p>
          </div>
          <div className={styles.planGrid}>
            {plans.map((plan) => {
              const recommended = plan.name === "Profissional";
              const amount = pricing?.amounts[plan.name];
              return (
                <article key={plan.name} className={styles.plan} data-recommended={recommended || undefined}>
                  <div className={styles.planTitle}><h3>{t(plan.name)}</h3>{recommended && <span>{t("Recomendado")}</span>}</div>
                  <p>{t(plan.description)}</p>
                  {amount && formatPrice && (
                    <div className={styles.price}>
                      <span>{t("Implantação a partir de")}</span>
                      <strong>{formatPrice.format(amount.setup)}</strong>
                      <span>{t("+ {0}/mês de manutenção", [formatPrice.format(amount.monthly)])}</span>
                    </div>
                  )}
                  <ul className={styles.checklist}>{plan.scope.map((item) => <li key={item}><Icon name="check" />{t(item)}</li>)}</ul>
                  <WritersCTA interest="Proposta comercial" plan={plan.name} placement="planos" secondary={!recommended}>{t("Solicitar proposta")}<span className={styles.srOnly}> {t("do plano")} {t(plan.name)}</span></WritersCTA>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="duvidas" className={`${styles.wrap} ${styles.section} ${styles.faq}`} aria-labelledby="duvidas-titulo">
        <div><h2 id="duvidas-titulo" className={styles.editorial}>{t("Perguntas frequentes")}</h2><p>{t("Da identidade da livraria às condições de manutenção e venda.")}</p></div>
        <div>
          {faq.map(([question, answer]) => (
            <details key={question}><summary>{t(question)}<span aria-hidden="true" /></summary><p>{t(answer)}</p></details>
          ))}
        </div>
      </section>

      <section id="contato-escritores" className={styles.contact} aria-labelledby="contato-titulo">
        <div className={`${styles.wrap} ${styles.section} ${styles.contactGrid}`}>
          <div>
            <h2 id="contato-titulo" className={styles.editorial}>{t("Você já criou a história. Agora tenha um")} <em>{t("espaço à altura dela.")}</em></h2>
            <p>{t("Conte quais livros você quer publicar e como imagina sua livraria. A COSAQ pode apresentar a experiência ou preparar uma proposta para o seu catálogo.")}</p>
            <Link href={localizeHref(locale, "/#projetos")}>{t("Conheça outros projetos da COSAQ Digital")}</Link>
          </div>
          <WritersInquiry locale={locale} />
        </div>
      </section>
    </main>
  );
}
