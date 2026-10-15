"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon, type IconName } from "@/components/Icon";
import { SectionReveal } from "@/components/SectionReveal";
import { contactEmail } from "@/lib/site";
import { trackConversion } from "@/lib/analytics";

const objectives: {
  value: string;
  label: string;
  icon: IconName;
  recommendation: string;
  description: string;
  next: string[];
}[] = [
  {
    value: "clientes",
    label: "Conquistar mais clientes",
    icon: "grow",
    recommendation:
      "Transforme presença digital em um caminho claro até o contato.",
    description:
      "Comece avaliando como sua empresa é encontrada, como apresenta seus serviços e o que facilita uma conversa com um novo cliente.",
    next: [
      "Revisar a clareza da proposta comercial",
      "Facilitar os caminhos de contato",
      "Avaliar a experiência no celular",
    ],
  },
  {
    value: "site",
    label: "Criar ou melhorar meu site",
    icon: "globe",
    recommendation:
      "Seu site precisa explicar seu valor e facilitar o próximo passo.",
    description:
      "Uma presença bem estruturada reúne conteúdo relevante, navegação simples e uma apresentação profissional dos seus serviços.",
    next: [
      "Organizar serviços e diferenciais",
      "Revisar navegação e desempenho",
      "Priorizar uma experiência responsiva",
    ],
  },
  {
    value: "atendimento",
    label: "Organizar atendimentos",
    icon: "system",
    recommendation:
      "Dê visibilidade ao que chega e ao que precisa de acompanhamento.",
    description:
      "Mapeie o caminho de uma solicitação, desde o primeiro contato até sua conclusão, para identificar onde informações ou oportunidades se perdem.",
    next: [
      "Mapear como os pedidos chegam",
      "Definir informações e etapas essenciais",
      "Avaliar uma solução de acompanhamento",
    ],
  },
  {
    value: "automacao",
    label: "Automatizar tarefas",
    icon: "workflow",
    recommendation:
      "Escolha uma tarefa repetitiva e entenda seu fluxo antes de automatizar.",
    description:
      "O primeiro passo é identificar entradas, decisões e saídas. Assim, podemos avaliar possibilidades compatíveis com as ferramentas da empresa.",
    next: [
      "Identificar a tarefa mais repetitiva",
      "Mapear as ferramentas envolvidas",
      "Avaliar viabilidade e prioridades",
    ],
  },
  {
    value: "plataforma",
    label: "Desenvolver uma plataforma",
    icon: "layers",
    recommendation:
      "Transforme a ideia em uma jornada de usuário que pode ser validada.",
    description:
      "Antes de ampliar o escopo, defina quem vai usar a plataforma, qual problema ela resolve e qual é sua funcionalidade central.",
    next: [
      "Definir público e problema principal",
      "Organizar a jornada essencial",
      "Priorizar a primeira versão da solução",
    ],
  },
  {
    value: "inicio",
    label: "Ainda não sei por onde começar",
    icon: "compass",
    recommendation:
      "Comece pelo desafio do negócio, antes de escolher uma tecnologia.",
    description:
      "Uma conversa sobre sua rotina, seus objetivos e suas dificuldades pode revelar um primeiro passo simples e relevante.",
    next: [
      "Identificar uma dificuldade recorrente",
      "Entender o impacto na rotina",
      "Escolher uma prioridade viável",
    ],
  },
];
const stepNames = ["Objetivo", "Contexto", "Orientação", "Conversa"];

export function DigitalDiagnostic() {
  const [step, setStep] = useState(0);
  const [objective, setObjective] = useState("");
  const [segment, setSegment] = useState("");
  const [otherSegment, setOtherSegment] = useState("");
  const [challenge, setChallenge] = useState("");
  const [tools, setTools] = useState("");
  const [priority, setPriority] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(0);
  useEffect(() => {
    if (previousStep.current !== step) {
      heading.current?.focus();
      previousStep.current = step;
    }
  }, [step]);
  const selected = objectives.find((item) => item.value === objective);
  const segmentLabel = segment === "Outro" ? otherSegment.trim() : segment;
  const contextAdvice = (() => {
    if (!selected || !segment || !tools || !priority) return null;
    const isUrgent = priority === "Preciso começar agora";
    const isNew = tools === "Ainda não";
    const approach = isUrgent
      ? "Comece pelas ações essenciais de curto prazo e valide uma primeira entrega antes de ampliar o escopo."
      : priority === "Nos próximos meses"
        ? "Aproveite o período para mapear processos, priorizar requisitos e preparar uma implementação por etapas."
        : "Explore alternativas, registre as necessidades principais e compare o esforço antes de escolher uma tecnologia.";
    const existing = isNew
      ? "Como você informou que ainda não utiliza site ou sistema, vale mapear primeiro os canais atuais de atendimento e as informações que precisa organizar."
      : tools === "Não sei informar"
        ? "Na conversa inicial, podemos identificar quais ferramentas já fazem parte da sua rotina."
        : "Como seu negócio já utiliza recursos digitais, o primeiro passo é avaliar o que pode ser aproveitado ou melhorado.";
    return { approach, existing };
  })();

  const emailBody = [
    "Olá, COSAQ Digital! Gostaria de conversar sobre meu negócio.",
    "",
    `Objetivo: ${selected?.label ?? ""}`,
    `Segmento: ${segmentLabel}`,
    `Principal desafio: ${challenge.trim()}`,
    `Presença digital atual: ${tools}`,
    `Prioridade: ${priority}`,
    "",
    `Orientação preliminar: ${selected?.recommendation ?? ""}`,
    "",
    "Podemos conversar sobre os próximos passos?",
  ].join("\n");
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Diagnóstico digital — vamos conversar")}&body=${encodeURIComponent(emailBody)}`;
  function advance(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (step === 0 && !objective)
      nextErrors.objective = "Escolha um objetivo para continuar.";
    if (step === 1) {
      if (!segment || (segment === "Outro" && !otherSegment.trim()))
        nextErrors.segment = "Informe o segmento da empresa.";
      if (!challenge.trim())
        nextErrors.challenge = "Descreva brevemente o principal desafio.";
      if (!tools) nextErrors.tools = "Selecione a presença digital atual.";
      if (!priority) nextErrors.priority = "Selecione a prioridade.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      window.requestAnimationFrame(() =>
        document
          .querySelector<HTMLElement>(
            nextErrors.objective
              ? "#diagnostico input[name='objective']"
              : "#diagnostico [aria-invalid='true']",
          )
          ?.focus(),
      );
      return;
    }
    if (step === 1) trackConversion("diagnostic_complete", { objective });
    setConsent(false);
    setStep(Math.min(step + 1, 3));
  }
  function back() {
    setErrors({});
    setConsent(false);
    setStep(step - 1);
  }
  function restart() {
    setStep(0);
    setObjective("");
    setSegment("");
    setOtherSegment("");
    setChallenge("");
    setTools("");
    setPriority("");
    setConsent(false);
    setErrors({});
  }
  return (
    <SectionReveal id="diagnostico" className="section diagnostic-section">
      <div className="shell diagnostic-grid">
        <div className="diagnostic-intro">
          <p className="eyebrow">Diagnóstico digital</p>
          <h2>
            Seu negócio pode estar perdendo oportunidades{" "}
            <span>que a tecnologia pode ajudar a recuperar.</span>
          </h2>
          <p>
            Descubra como sua empresa pode melhorar sua presença digital,
            organizar processos e aproveitar novas oportunidades.
          </p>
          <div className="diagnostic-note">
            <Icon name="compass" />
            <div>
              <strong>Primeiro, entender. Depois, construir.</strong>
              <p>
                Uma orientação inicial, sem cadastro. Nenhuma resposta é enviada
                automaticamente.
              </p>
            </div>
          </div>
        </div>
        <div className="diagnostic-card">
          <ol
            className="diagnostic-progress"
            aria-label="Etapas do diagnóstico"
          >
            {stepNames.map((label, index) => (
              <li
                key={label}
                aria-current={index === step ? "step" : undefined}
                className={
                  index < step ? "complete" : index === step ? "current" : ""
                }
              >
                <span>
                  {index < step ? (
                    <Icon name="check" width={14} height={14} />
                  ) : (
                    "0" + (index + 1)
                  )}
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ol>
          <form onSubmit={advance} noValidate>
            <div className="diagnostic-step">
              <span className="step-kicker">Etapa 0{step + 1} / 04</span>
              <h3 ref={heading} tabIndex={-1}>
                {
                  [
                    "O que você quer melhorar?",
                    "Conte um pouco sobre o seu negócio.",
                    "Seu ponto de partida.",
                    "Vamos transformar isso em uma conversa.",
                  ][step]
                }
              </h3>
              {step === 0 && (
                <>
                  <p>Escolha o objetivo mais próximo do seu momento.</p>
                  <fieldset
                    className="objective-grid"
                    aria-describedby={
                      errors.objective ? "objective-error" : undefined
                    }
                  >
                    <legend className="sr-only">Objetivo da empresa</legend>
                    {objectives.map((item) => (
                      <label
                        className={`objective-option ${objective === item.value ? "selected" : ""}`}
                        key={item.value}
                      >
                        <input
                          type="radio"
                          name="objective"
                          value={item.value}
                          checked={objective === item.value}
                          onChange={() => {
                            if (!objective) trackConversion("diagnostic_start", { objective: item.value });
                            setObjective(item.value);
                            setErrors({});
                          }}
                          aria-describedby={
                            errors.objective ? "objective-error" : undefined
                          }
                        />
                        <Icon name={item.icon} width={21} height={21} />
                        <span>{item.label}</span>
                        <span className="radio-mark" aria-hidden="true" />
                      </label>
                    ))}
                  </fieldset>
                  {errors.objective && (
                    <p
                      className="field-error"
                      id="objective-error"
                      role="alert"
                    >
                      {errors.objective}
                    </p>
                  )}
                </>
              )}
              {step === 1 && (
                <div className="context-fields">
                  <div className="form-field">
                    <label htmlFor="segment">Segmento da empresa</label>
                    <select
                      id="segment"
                      value={segment}
                      onChange={(e) => setSegment(e.target.value)}
                      aria-invalid={Boolean(errors.segment)}
                      aria-describedby={
                        errors.segment ? "segment-error" : undefined
                      }
                    >
                      <option value="">Selecione uma opção</option>
                      {[
                        "Serviços",
                        "Comércio e varejo",
                        "Construção e arquitetura",
                        "Indústria",
                        "Educação",
                        "Saúde e bem-estar",
                        "Outro",
                      ].map((v) => (
                        <option key={v}>{v}</option>
                      ))}
                    </select>
                    {segment === "Outro" && (
                      <>
                        <label htmlFor="other-segment" className="sr-only">
                          Qual é o segmento?
                        </label>
                        <input
                          id="other-segment"
                          maxLength={80}
                          value={otherSegment}
                          onChange={(e) => setOtherSegment(e.target.value)}
                          placeholder="Qual é o segmento?"
                          aria-invalid={Boolean(errors.segment)}
                        />
                      </>
                    )}
                    {errors.segment && (
                      <p
                        id="segment-error"
                        className="field-error"
                        role="alert"
                      >
                        {errors.segment}
                      </p>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="challenge">
                      Qual é o principal desafio?
                    </label>
                    <textarea
                      id="challenge"
                      rows={3}
                      maxLength={500}
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      placeholder="Ex.: meus pedidos chegam por canais diferentes e é difícil acompanhar."
                      aria-invalid={Boolean(errors.challenge)}
                      aria-describedby={
                        errors.challenge
                          ? "challenge-hint challenge-error"
                          : "challenge-hint"
                      }
                    />
                    <span className="field-hint" id="challenge-hint">
                      Até 500 caracteres. Evite dados pessoais ou informações
                      confidenciais.
                    </span>
                    {errors.challenge && (
                      <p
                        id="challenge-error"
                        className="field-error"
                        role="alert"
                      >
                        {errors.challenge}
                      </p>
                    )}
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="tools">Já utiliza site ou sistema?</label>
                      <select
                        id="tools"
                        value={tools}
                        onChange={(e) => setTools(e.target.value)}
                        aria-invalid={Boolean(errors.tools)}
                        aria-describedby={
                          errors.tools ? "tools-error" : undefined
                        }
                      >
                        <option value="">Selecione</option>
                        {[
                          "Ainda não",
                          "Tenho um site",
                          "Tenho um sistema",
                          "Tenho site e sistema",
                          "Não sei informar",
                        ].map((v) => (
                          <option key={v}>{v}</option>
                        ))}
                      </select>
                      {errors.tools && (
                        <p
                          id="tools-error"
                          className="field-error"
                          role="alert"
                        >
                          {errors.tools}
                        </p>
                      )}
                    </div>
                    <div className="form-field">
                      <label htmlFor="priority">Qual é a prioridade?</label>
                      <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        aria-invalid={Boolean(errors.priority)}
                        aria-describedby={
                          errors.priority ? "priority-error" : undefined
                        }
                      >
                        <option value="">Selecione</option>
                        {[
                          "Preciso começar agora",
                          "Nos próximos meses",
                          "Estou explorando possibilidades",
                        ].map((v) => (
                          <option key={v}>{v}</option>
                        ))}
                      </select>
                      {errors.priority && (
                        <p
                          id="priority-error"
                          className="field-error"
                          role="alert"
                        >
                          {errors.priority}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && selected && (
                <>
                  <div className="recommendation">
                    <span className="eyebrow">Orientação preliminar</span>
                    <h4>{selected.recommendation}</h4>
                    <p>{selected.description}</p>
                  </div>
                  <p className="recommendation-caption">
                    Um caminho para explorar:
                  </p>
                  <ul className="recommendation-list">
                    {selected.next.map((item) => (
                      <li key={item}>
                        <Icon name="check" width={17} height={17} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="context-summary">
                    <span>{segmentLabel}</span>
                    <span>{priority}</span>
                  </div>
                  {contextAdvice && (
                    <div className="diagnostic-contextual-advice">
                      <strong>Um próximo passo para o seu contexto</strong>
                      <p>{contextAdvice.existing}</p>
                      <p>{contextAdvice.approach}</p>
                    </div>
                  )}
                  <p className="field-hint">
                    Esta é uma avaliação inicial. A solução e o escopo precisam
                    ser definidos após entender melhor o seu contexto.
                  </p>
                </>
              )}
              {step === 3 && (
                <>
                  <p>
                    Leve o resumo da sua orientação para o formulário da COSAQ,
                    ou utilize seu aplicativo de e-mail para escrever diretamente a
                    <strong> {contactEmail}</strong>.
                  </p>
                  <div className="contact-summary">
                    <span className="eyebrow">Seu objetivo</span>
                    <strong>{selected?.label}</strong>
                    <span>
                      {segmentLabel} · {priority}
                    </span>
                  </div>
                  <label className="consent-option">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <span>
                      Autorizo utilizar minhas respostas no formulário comercial ou
                      no e-mail que eu decidir enviar à COSAQ Digital.
                    </span>
                  </label>
                  <div className="diagnostic-email">
                    {consent && (
                      <button className="button button-primary" type="button" onClick={() => {
                        const summary = [`Objetivo: ${selected?.label ?? ""}`,`Segmento: ${segmentLabel}`,`Desafio: ${challenge}`,`Situação atual: ${tools}`,`Prioridade: ${priority}`].join("\n");
                        window.dispatchEvent(new CustomEvent("cosaq:diagnostic-contact", { detail: { service: "Diagnóstico digital", description: summary } }));
                        trackConversion("diagnostic_contact_click", { objective });
                        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                      }}>Solicitar conversa pelo site <Icon name="arrow" width={18} height={18} /></button>
                    )}
                    {consent ? (
                      <a className="button button-primary" href={emailHref}>
                        Abrir meu e-mail
                        <Icon name="mail" width={18} height={18} />
                      </a>
                    ) : (
                      <button
                        className="button button-primary"
                        disabled
                        type="button"
                      >
                        Abrir meu e-mail
                        <Icon name="mail" width={18} height={18} />
                      </button>
                    )}
                    <p>
                      Se preferir, use seu aplicativo de e-mail. A mensagem só
                      será enviada se você confirmar. As respostas não são
                      armazenadas nesta página.
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="diagnostic-controls">
              {step > 0 ? (
                <button className="button-back" type="button" onClick={back}>
                  <Icon name="back" width={17} height={17} />
                  Voltar
                </button>
              ) : (
                <span className="field-hint">Sem cadastro. No seu ritmo.</span>
              )}
              {step < 3 ? (
                <button className="button button-primary" type="submit">
                  {
                    [
                      "Continuar",
                      "Ver minha orientação",
                      "Preparar uma conversa",
                    ][step]
                  }
                  <Icon name="arrow" width={18} height={18} />
                </button>
              ) : (
                <button className="button-back" type="button" onClick={restart}>
                  Recomeçar
                  <Icon name="compass" width={17} height={17} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </SectionReveal>
  );
}
