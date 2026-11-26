import { translator } from "@/lib/i18n/copy";
import { localizeHref, pagePath, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { contactEmail } from "@/lib/site";

export default function PrivacyPolicyPage({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <main id="conteudo" className="legal-page section">
      <div className="shell legal-content">
        <p className="eyebrow">{t("Privacy and data protection")}</p>
        <h1>{t("Privacy Policy")}</h1>
        <p>{t("Last updated: October 28, 2026.")}</p>

        <section>
          <h2>{t("1. Who we are and scope")}</h2>
          <p>{t("COSAQ Digital Tecnologia e Marketing Ltda. (\"COSAQ Digital\", \"we\", \"us\") builds websites, platforms, automations and business integrations. This Privacy Policy explains how we process personal data through cosaqdigital.com and through business solutions authorized by our customers, including integrations with the WhatsApp Business Platform.")}</p>
        </section>

        <section>
          <h2>{t("2. Information we may process")}</h2>
          <p>{t("Depending on how you interact with us or the service being provided, we may process names, email addresses, company information, phone numbers, information submitted through forms, support communications, technical logs, IP addresses, browsing information and technical identifiers required to operate an integration.")}</p>
        </section>

        <section>
          <h2>{t("3. WhatsApp Business and Meta integrations")}</h2>
          <p>{t("When a business authorizes an integration, we may process data strictly necessary to configure and operate the WhatsApp Business Platform. This may include business account identifiers, phone number identifiers, message templates, webhook events, message metadata and, when required to provide the requested service, message content and recipient information. Technical authorization credentials or tokens may also be processed securely while needed to maintain an authorized integration.")}</p>
          <p>{t("For data relating to a customer's end users, the customer generally determines the purpose and means of processing and COSAQ Digital acts as a processor/service provider under the customer's documented instructions.")}</p>
        </section>

        <section>
          <h2>{t("4. Why we use information")}</h2>
          <p>{t("We use information to respond to inquiries, provide and maintain services, configure integrations, send authorized communications on behalf of customers, manage templates and technical settings, provide support, prevent abuse and fraud, maintain security, monitor performance, comply with legal obligations and improve our products and services.")}</p>
        </section>

        <section>
          <h2>{t("5. Legal bases")}</h2>
          <p>{t("We process personal data in accordance with applicable privacy laws, including the Brazilian LGPD where applicable. Depending on the context, our legal bases may include performance of a contract, steps requested before entering a contract, consent, compliance with legal obligations, exercise of legal rights and legitimate interests that do not override the rights of individuals.")}</p>
        </section>

        <section>
          <h2>{t("6. Sharing and service providers")}</h2>
          <p>{t("We do not sell personal data. We may share information only as needed with infrastructure, hosting, communications, analytics, security and other service providers used to deliver our services. This can include Meta Platforms when a customer authorizes an integration with WhatsApp or other Meta products. We may also disclose information when required by law.")}</p>
        </section>

        <section>
          <h2>{t("7. International data transfers")}</h2>
          <p>{t("We support operations in Brazil and the United States and use global service providers. Information may therefore be processed in other countries. We use appropriate contractual, technical and organizational safeguards for international transfers as required by applicable law.")}</p>
        </section>

        <section>
          <h2>{t("8. Data retention")}</h2>
          <p>{t("We retain information only for as long as necessary for the purposes described in this Policy, to deliver services, maintain security and meet legal obligations. Integration data may be retained while an authorization remains active and then deleted or anonymized, subject to lawful retention requirements.")}</p>
        </section>

        <section>
          <h2>{t("9. Security")}</h2>
          <p>{t("We use reasonable access controls and technical and organizational safeguards designed to reduce the risk of unauthorized access, alteration, disclosure or destruction. No internet-connected system, however, can guarantee absolute security.")}</p>
        </section>

        <section>
          <h2>{t("10. Your rights and deletion requests")}</h2>
          <p>{t("Depending on applicable law, you may have rights to request access, correction, confirmation of processing, portability, deletion, anonymization, restriction or information about sharing. For deletion instructions, visit our")}{" "}
            <Link href={localizeHref(locale, "/data-deletion")}>{t("Data Deletion page")}</Link> {t("or contact")}{" "}
            <a href={localizeHref(locale, `mailto:${contactEmail}`)}>{t(contactEmail)}</a>.
          </p>
        </section>

        <section>
          <h2>{t("11. Children")}</h2>
          <p>{t("Our business services are not directed to children. We do not knowingly collect children's personal data for commercial purposes without an appropriate legal basis and required authorization.")}</p>
        </section>

        <section>
          <h2>{t("12. Changes to this Policy")}</h2>
          <p>{t("We may update this Policy to reflect legal, technical or operational changes. The current version will remain available on this page with its effective date.")}</p>
        </section>

        <section>
          <h2>{t("13. Contact")}</h2>
          <p>{t("Privacy and data protection questions can be sent to")}{" "}
            <a href={localizeHref(locale, `mailto:${contactEmail}`)}>{t(contactEmail)}</a>.
          </p>
        </section>

        <p>{t("Portuguese version:")} <Link href={pagePath("pt", "privacy")} hrefLang="pt-BR" lang="pt-BR">Política de Privacidade</Link>.
        </p>
        <Link href={localizeHref(locale, "/")} className="text-link">{t("← Back to the home page")}</Link>
      </div>
    </main>
  );
}
