import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Deletion | COSAQ Digital",
  description:
    "Instructions for requesting deletion of personal data processed by COSAQ Digital and authorized business integrations.",
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <main id="content" className="legal-page section">
      <div className="shell legal-content">
        <p className="eyebrow">Privacy request</p>
        <h1>Data Deletion Instructions</h1>
        <p>Last updated: October 28, 2026.</p>

        <section>
          <h2>For COSAQ Digital customers and account administrators</h2>
          <p>
            To request deletion of personal data associated with a COSAQ
            Digital service or an authorized integration, email{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with the
            subject <strong>Data Deletion Request</strong>. Include only the
            information needed for us to locate and verify the account, such as
            your business name, the email used for the service and, when
            relevant, the Meta Business or WhatsApp Business account identifier.
          </p>
        </section>

        <section>
          <h2>For people who received a message from one of our customers</h2>
          <p>
            If a business contacted you through a solution operated with COSAQ
            Digital, that business is generally the controller of your
            information. You may contact that business directly to exercise
            your privacy rights. You may also email us at{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>, identify
            the business that contacted you and provide the minimum information
            needed to locate the relevant record.
          </p>
        </section>

        <section>
          <h2>What happens after a verified request</h2>
          <p>
            After we verify the request and the requester&apos;s authority, we
            will delete or anonymize data under our control that is no longer
            required, and where applicable instruct relevant processors to do
            the same. Some information may be retained when necessary for legal
            obligations, security, fraud prevention, dispute resolution or the
            establishment, exercise or defense of legal claims.
          </p>
        </section>

        <section>
          <h2>Revoking a Meta or WhatsApp authorization</h2>
          <p>
            Business administrators may also revoke application access from
            their Meta business settings or authorized app controls. Revoking
            access stops future authorized processing through that connection,
            but does not replace a deletion request for information that may
            already be lawfully retained.
          </p>
        </section>

        <section>
          <h2>Response time</h2>
          <p>
            We acknowledge and process verified requests within the timeframes
            required by applicable law. If we need additional information to
            confirm identity or authority, we will request only what is
            reasonably necessary.
          </p>
        </section>

        <section>
          <h2>Português</h2>
          <p>
            Para solicitar exclusão de dados, envie um e-mail para{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a> com o
            assunto <strong>Solicitação de Exclusão de Dados</strong>. Informe
            apenas os dados mínimos necessários para localizar e validar a
            solicitação. Após a verificação, excluiremos ou anonimizaremos os
            dados sob nosso controle que não precisem ser mantidos por obrigação
            legal, segurança ou defesa de direitos.
          </p>
        </section>

        <p>
          See also our <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/terms">Terms of Service</Link>.
        </p>
        <Link href="/" className="text-link">← Back to the home page</Link>
      </div>
    </main>
  );
}
