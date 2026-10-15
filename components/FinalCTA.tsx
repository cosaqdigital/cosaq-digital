import { Icon } from "@/components/Icon";
import { LeadForm } from "@/components/LeadForm";

export function FinalCTA() {
  return (
    <section id="contato" className="section contact-section">
      <div className="shell">
        <div className="contact-panel contact-panel-form">
          <div className="contact-intro">
            <p className="eyebrow">O próximo passo é uma conversa</p>
            <h2>Sua próxima ideia merece <span>ganhar forma.</span></h2>
            <p>
              Um site que gera confiança, um sistema que organiza a operação
              ou uma plataforma para um novo modelo de negócio: vamos conversar
              sobre o que faz sentido para sua empresa.
            </p>
            <div className="contact-market">
              <Icon name="globe" width={17} height={17} />
              Brasil e Estados Unidos. Atendimento em português.
            </div>
            <a href="#diagnostico" className="text-link contact-diagnostic-link">
              Ainda não sabe por onde começar? Faça o diagnóstico digital.
            </a>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
