import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { Icon } from "@/components/Icon";

const distinctions = [
  {
    label: "Produtos em funcionamento",
    title: "O que construímos pode ser visitado.",
    detail:
      "Apresentamos experiências reais, com links para explorar o que foi desenvolvido. Sem prints inventados e sem números de desempenho sem comprovação.",
  },
  {
    label: "Tecnologia além da tela",
    title: "Pensamos em jornadas e operação.",
    detail:
      "Um projeto pode envolver cadastro, permissões, solicitações, painéis e integrações. Cada funcionalidade nasce de uma necessidade concreta.",
  },
  {
    label: "Escopo antes da promessa",
    title: "Cada proposta começa pelo problema.",
    detail:
      "Definimos prioridades, limites e próximas etapas com clareza. Não vendemos uma solução pronta antes de entender o que sua empresa precisa.",
  },
];

export function AuthoritySection({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <SectionReveal className="section authority-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t("Por que a COSAQ Digital")}</p>
            <h2>{t("Design importa.")}<br /><span>{t("O que funciona por trás importa mais.")}</span></h2>
          </div>
          <p>{t("Não basta mostrar telas bonitas. Nosso trabalho precisa conectar experiência, processos e objetivos do negócio.")}</p>
        </div>
        <div className="authority-grid">
          {distinctions.map((item, index) => (
            <article key={item.label}>
              <span className="card-number">0{index + 1} / {t(item.label)}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.detail)}</p>
            </article>
          ))}
        </div>
        <Link className="text-link authority-link" href={localizeHref(locale, "/solucoes")}>{t("Descubra nossas soluções")} <Icon name="arrow" width={17} height={17}/>
        </Link>
      </div>
    </SectionReveal>
  );
}