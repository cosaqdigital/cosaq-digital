import { translator } from "@/lib/i18n/copy";
import type { Locale } from "@/lib/i18n/routes";
import { Icon } from "@/components/Icon";
import { LeadForm } from "@/components/LeadForm";

export function FinalCTA({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <section id="contato" className="section contact-section">
      <div className="shell">
        <div className="contact-panel contact-panel-form">
          <div className="contact-intro">
            <p className="eyebrow">{t("O próximo passo é uma conversa")}</p>
            <h2>{t("Sua próxima ideia merece")} <span>{t("ganhar forma.")}</span></h2>
            <p>{t("Um site que gera confiança, um sistema que organiza a operação ou uma plataforma para um novo modelo de negócio: vamos conversar sobre o que faz sentido para sua empresa.")}</p>
            <div className="contact-market">
              <Icon name="globe" width={17} height={17} />{t("Brasil e Estados Unidos. Atendimento em português.")}</div>
            <a href="#diagnostico" className="text-link contact-diagnostic-link">{t("Ainda não sabe por onde começar? Faça o diagnóstico digital.")}</a>
          </div>
          <LeadForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
