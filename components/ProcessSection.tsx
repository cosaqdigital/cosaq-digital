import { SectionReveal } from "@/components/SectionReveal";
import { Icon, type IconName } from "@/components/Icon";

const steps: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Entendemos",
    description:
      "Estudamos seu negócio, ouvimos suas necessidades e identificamos o desafio que vale resolver.",
    icon: "compass",
  },
  {
    title: "Planejamos",
    description:
      "Desenhamos a solução, organizamos as prioridades e definimos um caminho claro para construir.",
    icon: "pencil",
  },
  {
    title: "Desenvolvemos",
    description:
      "Transformamos o plano em uma experiência real, com atenção à usabilidade e à qualidade técnica.",
    icon: "code",
  },
  {
    title: "Evoluímos",
    description:
      "Avaliamos melhorias e novas necessidades para acompanhar a evolução do seu negócio.",
    icon: "grow",
  },
];

export function ProcessSection() {
  return (
    <SectionReveal id="sobre" className="section process-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Como trabalhamos</p>
            <h2>
              Um caminho claro.
              <br />
              <span>Do desafio à solução.</span>
            </h2>
          </div>
          <p>
            Você participa das decisões. Nós conectamos estratégia, design e
            desenvolvimento em cada etapa.
          </p>
        </div>
        <ol className="process-grid">
          {steps.map((step, index) => (
            <li key={step.title}>
              <div className="process-icon">
                <Icon name={step.icon} />
                <span>0{index + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionReveal>
  );
}
