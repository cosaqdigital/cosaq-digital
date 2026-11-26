import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import { SectionReveal } from "@/components/SectionReveal";
import { ButtonLink } from "@/components/ButtonLink";
import { contactHref } from "@/lib/site";

const faqs = [
  {
    question: "Vocês desenvolvem projetos diferentes dos que aparecem no portfólio?",
    answer: "Sim. Os projetos apresentados demonstram tipos de jornadas e desafios que já trabalhamos. A viabilidade de novas soluções é avaliada a partir da sua necessidade, das integrações disponíveis e do escopo.",
  },
  {
    question: "A COSAQ também trabalha com sites ou sistemas que já existem?",
    answer: "Podemos analisar uma estrutura existente e propor melhorias, ajustes de experiência ou reconstrução quando fizer sentido. Antes de começar, avaliamos o estado do projeto e as limitações técnicas.",
  },
  {
    question: "Preciso saber qual tecnologia quero utilizar?",
    answer: "Não. Primeiro precisamos entender o problema, os usuários envolvidos e o resultado esperado. A escolha das ferramentas vem depois, de acordo com a viabilidade técnica e a proposta.",
  },
  {
    question: "Como vocês definem o valor e o prazo do desenvolvimento?",
    answer: "Eles dependem de funcionalidades, integrações, conteúdo, permissões e complexidade. Após o entendimento inicial, organizamos um escopo e uma proposta com entregas e condições claras.",
  },
  {
    question: "Vocês atendem no Brasil e nos Estados Unidos?",
    answer: "A COSAQ trabalha com soluções digitais para negócios nesses mercados e atende em português. Requisitos legais, idiomas e integrações específicas de cada operação são considerados no planejamento.",
  },
];

export function FaqSection({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <SectionReveal className="section home-faq-section">
      <div className="shell home-faq-grid">
        <div>
          <p className="eyebrow">{t("Perguntas antes de começar")}</p>
          <h2>{t("Você traz o desafio.")}<br /><span>{t("Nós esclarecemos o caminho.")}</span></h2>
          <p>{t("Um bom projeto começa com expectativas claras, não com promessas genéricas.")}</p>
          <ButtonLink href={localizeHref(locale, contactHref("Quero tirar dúvidas sobre meu projeto"))} variant="secondary">{t("Tirar dúvidas com a COSAQ")}</ButtonLink>
        </div>
        <div className="home-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{t(faq.question)}<span aria-hidden="true">+</span></summary>
              <p>{t(faq.answer)}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}