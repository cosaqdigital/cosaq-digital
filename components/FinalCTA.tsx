import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { contactHref } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="contato" className="section contact-section">
      <div className="shell">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">O próximo passo é uma conversa</p>
            <h2>
              Sua próxima ideia
              <br />
              merece <span>ganhar forma.</span>
            </h2>
            <p>
              Conte o que você quer melhorar, construir ou transformar. Vamos
              entender juntos o caminho para o seu negócio.
            </p>
            <div className="contact-market">
              <Icon name="globe" width={17} height={17} />
              Brasil e Estados Unidos. Comunicação em português.
            </div>
          </div>
          <div className="contact-actions">
            <ButtonLink href={contactHref()}>
              Conversar sobre meu projeto
            </ButtonLink>
            <a className="text-link" href="#diagnostico">
              Ainda não sei por onde começar
              <Icon name="arrow" width={18} height={18} />
            </a>
            <span>Comece pelo diagnóstico digital.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
