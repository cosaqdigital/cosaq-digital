import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { contactEmail } from "@/lib/site";

export default function DataDeletionPage({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <main id="conteudo" className="legal-page section">
      <div className="shell legal-content">
        <p className="eyebrow">{t("Privacy request")}</p>
        <h1>{t("Data Deletion Instructions")}</h1>
        <p>{t("Last updated: October 28, 2026.")}</p>

        <section>
          <h2>{t("For COSAQ Digital customers and account administrators")}</h2>
          <p>{t("To request deletion of personal data associated with a COSAQ Digital service or an authorized integration, email")}{" "}
            <a href={localizeHref(locale, `mailto:${contactEmail}`)}>{t(contactEmail)}</a> {t("with the subject")} <strong>{t("Data Deletion Request")}</strong>{t(". Include only the information needed for us to locate and verify the account, such as your business name, the email used for the service and, when relevant, the Meta Business or WhatsApp Business account identifier.")}</p>
        </section>

        <section>
          <h2>{t("For people who received a message from one of our customers")}</h2>
          <p>{t("If a business contacted you through a solution operated with COSAQ Digital, that business is generally the controller of your information. You may contact that business directly to exercise your privacy rights. You may also email us at")}{" "}
            <a href={localizeHref(locale, `mailto:${contactEmail}`)}>{t(contactEmail)}</a>{t(", identify the business that contacted you and provide the minimum information needed to locate the relevant record.")}</p>
        </section>

        <section>
          <h2>{t("What happens after a verified request")}</h2>
          <p>{t("After we verify the request and the requester's authority, we will delete or anonymize data under our control that is no longer required, and where applicable instruct relevant processors to do the same. Some information may be retained when necessary for legal obligations, security, fraud prevention, dispute resolution or the establishment, exercise or defense of legal claims.")}</p>
        </section>

        <section>
          <h2>{t("Revoking a Meta or WhatsApp authorization")}</h2>
          <p>{t("Business administrators may also revoke application access from their Meta business settings or authorized app controls. Revoking access stops future authorized processing through that connection, but does not replace a deletion request for information that may already be lawfully retained.")}</p>
        </section>

        <section>
          <h2>{t("Response time")}</h2>
          <p>{t("We acknowledge and process verified requests within the timeframes required by applicable law. If we need additional information to confirm identity or authority, we will request only what is reasonably necessary.")}</p>
        </section>

        <p>{t("See also our")} <Link href={localizeHref(locale, "/privacy")}>{t("Privacy Policy")}</Link> {t("and")}{" "}
          <Link href={localizeHref(locale, "/terms")}>{t("Terms of Service")}</Link>.
        </p>
        <Link href={localizeHref(locale, "/")} className="text-link">{t("← Back to the home page")}</Link>
      </div>
    </main>
  );
}
