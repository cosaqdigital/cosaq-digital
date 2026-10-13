import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { Icon, type IconName } from "@/components/Icon";
import { contactHref } from "@/lib/site";

const services: {
  number: string;
  title: string;
  icon: IconName;
  benefit: string;
  description: string;
  cta: string;
  visual: string;
}[] = [
  {
    number: "01",
    title: "Sites profissionais",
    icon: "globe",
    benefit:
      "Sua empresa merece uma presença digital que inspira confiança e facilita novos negócios.",
    description:
      "Clareza na apresentação, boa experiência no celular e caminhos diretos até o contato comercial.",
    cta: "Quero um site profissional",
    visual: "website",
  },
  {
    number: "02",
    title: "Plataformas digitais",
    icon: "layers",
    benefit:
      "Transformamos ideias e modelos de negócio em plataformas digitais funcionais.",
    description:
      "Jornadas, serviços e interações organizados em produtos digitais feitos para seus usuários.",
    cta: "Quero criar uma plataforma",
    visual: "platform",
  },
  {
    number: "03",
    title: "Sistemas personalizados",
    icon: "system",
    benefit: "Ferramentas desenvolvidas para organizar a operação da sua empresa.",
    description:
      "Cadastros, solicitações e informações estruturados de acordo com as necessidades do seu negócio.",
    cta: "Quero organizar minha operação",
    visual: "system",
  },
  {
    number: "04",
    title: "Automações e integrações",
    icon: "workflow",
    benefit: "Menos tarefas repetitivas. Mais tempo para o que realmente importa.",
    description:
      "Avaliamos onde conectar etapas e simplificar processos, respeitando as ferramentas e o contexto da empresa.",
    cta: "Quero simplificar processos",
    visual: "automation",
  },
];

function ServiceVisual({ kind }: { kind: string }) {
  if (kind === "website")
    return (
      <div className="service-visual service-site">
        <Image
          src="/projects/wbnextlevel.png"
          alt="Captura real do site comercial WBNextLevel"
          width={1440}
          height={980}
          sizes="(max-width: 767px) 85vw, 40vw"
        />
        <span>Site comercial / WBNextLevel</span>
      </div>
    );
  if (kind === "platform")
    return (
      <div className="service-visual service-platform">
        <Image
          src="/projects/getestimatefast.png"
          alt="Captura real da seleção de serviços do GetEstimateFast"
          width={1440}
          height={980}
          sizes="(max-width: 767px) 85vw, 40vw"
        />
        <span>Plataforma / GetEstimateFast</span>
      </div>
    );
  return (
    <div
      className="service-visual service-diagram"
      role="img"
      aria-label={
        kind === "system"
          ? "Conceito de organização: cadastros, solicitações e acompanhamento"
          : "Conceito de processo: receber, organizar e acompanhar"
      }
    >
      {(kind === "system"
        ? ["Cadastros", "Solicitações", "Acompanhamento"]
        : ["Receber", "Organizar", "Acompanhar"]
      ).map((label, index) => (
        <div className="diagram-step" key={label}>
          <span className="diagram-symbol">
            {kind === "system" ? (
              "0" + (index + 1)
            ) : (
              <Icon
                name={index === 0 ? "mail" : index === 1 ? "layers" : "check"}
                width={18}
                height={18}
              />
            )}
          </span>
          <span>{label}</span>
          {index < 2 && (
            <Icon
              className="diagram-arrow"
              name="arrow"
              width={16}
              height={16}
            />
          )}
        </div>
      ))}
      <span className="diagram-caption">
        Possibilidades definidas a partir do seu negócio.
      </span>
    </div>
  );
}

export function ServicesSection() {
  return (
    <SectionReveal id="solucoes" className="section services-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Soluções, não apenas entregas</p>
            <h2>
              Tecnologia com propósito.
              <br />
              <span>Valor para o seu negócio.</span>
            </h2>
          </div>
          <p>
            Cada empresa tem um desafio diferente. A solução começa por entender
            o seu.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span className="icon-box">
                  <Icon name={service.icon} />
                </span>
                <span className="card-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="service-benefit">{service.benefit}</p>
              <p className="service-description">{service.description}</p>
              <ServiceVisual kind={service.visual} />
              <a className="text-link" href={contactHref(service.cta)}>
                {service.cta}
                <Icon name="arrow" width={18} height={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
