import Image from "next/image";
export function DeviceShowcase({
  image,
  title,
  caption,
  priority = false,
}: {
  image: string;
  title: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="device-showcase">
      <div className="device-orbit" aria-hidden="true" />
      <div className="device-laptop">
        <div className="device-display">
          <div className="device-toolbar">
            <span aria-hidden="true">● ● ●</span>
            <span>{title}</span>
          </div>
          <div className="device-screen">
            <Image
              src={image}
              alt={`Apresentação do projeto ${title} em uma moldura de notebook`}
              fill
              sizes="(min-width:1200px) 600px, (min-width:768px) 50vw, 90vw"
              priority={priority}
            />
          </div>
        </div>
        <div className="device-base" aria-hidden="true" />
      </div>
      <div className="device-phone" aria-hidden="true">
        <div className="device-phone-notch" />
        <div className="device-phone-screen">
          <span className="phone-brand">COSAQ / DESIGN</span>
          <strong>{title}</strong>
          <span className="phone-divider" />
          <p>
            Uma apresentação clara.
            <br />
            Um próximo passo simples.
          </p>
          <span className="phone-action">Conhecer o projeto ↗</span>
          <span className="phone-caption">Composição ilustrativa</span>
        </div>
      </div>
      <div className="device-callout">
        <span className="device-check" aria-hidden="true">
          ✓
        </span>
        <div>
          <strong>Design + desenvolvimento</strong>
          <span>Conteúdo, experiência e funções conectados.</span>
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export function AutomationVisual() {
  return (
    <div className="automation-visual">
      <p className="eyebrow">Exemplo de fluxo que podemos desenvolver</p>
      <h2>
        Uma ação.
        <br />
        <span className="accent">Etapas conectadas.</span>
      </h2>
      <ol>
        <li>
          <span aria-hidden="true">01</span>
          <strong>Formulário</strong>
          <p>O cliente informa sua necessidade.</p>
        </li>
        <li>
          <span aria-hidden="true">02</span>
          <strong>Notificação</strong>
          <p>A equipe recebe o novo pedido.</p>
        </li>
        <li>
          <span aria-hidden="true">03</span>
          <strong>Organização</strong>
          <p>As informações seguem para a ferramenta definida.</p>
        </li>
        <li>
          <span aria-hidden="true">04</span>
          <strong>Acompanhamento</strong>
          <p>O processo continua conforme suas regras.</p>
        </li>
      </ol>
      <p className="small">
        Integrações e ferramentas avaliadas no escopo de cada projeto.
      </p>
    </div>
  );
}
