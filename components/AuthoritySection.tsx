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

export function AuthoritySection() {
  return (
    <SectionReveal className="section authority-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Por que a COSAQ Digital</p>
            <h2>Design importa.<br /><span>O que funciona por trás importa mais.</span></h2>
          </div>
          <p>Não basta mostrar telas bonitas. Nosso trabalho precisa conectar experiência, processos e objetivos do negócio.</p>
        </div>
        <div className="authority-grid">
          {distinctions.map((item, index) => (
            <article key={item.label}>
              <span className="card-number">0{index + 1} / {item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <Link className="text-link authority-link" href="/solucoes">
          Descubra nossas soluções <Icon name="arrow" width={17} height={17}/>
        </Link>
      </div>
    </SectionReveal>
  );
}