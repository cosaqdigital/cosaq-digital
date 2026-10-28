import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | COSAQ Digital",
  description:
    "Terms governing the use of COSAQ Digital websites, software, automations and business integrations.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main id="content" className="legal-page section">
      <div className="shell legal-content">
        <p className="eyebrow">Service terms</p>
        <h1>Terms of Service</h1>
        <p>Last updated: October 28, 2026.</p>

        <section>
          <h2>1. Acceptance</h2>
          <p>
            These Terms govern access to COSAQ Digital websites, software,
            automations, integrations and related services. By using a service
            or authorizing an integration, you agree to these Terms and to any
            applicable proposal, order form or written agreement.
          </p>
        </section>

        <section>
          <h2>2. Services</h2>
          <p>
            COSAQ Digital develops and operates digital products and business
            integrations. Features may change as products evolve or as
            third-party platforms modify their APIs, policies or availability.
          </p>
        </section>

        <section>
          <h2>3. Third-party platforms</h2>
          <p>
            Some services depend on third-party platforms, including Meta and
            the WhatsApp Business Platform. Use of those platforms is also
            subject to their terms, policies and technical requirements. COSAQ
            Digital does not control third-party availability or policy changes.
          </p>
        </section>

        <section>
          <h2>4. Customer responsibilities</h2>
          <p>
            Customers must provide accurate information, maintain appropriate
            account permissions, obtain required notices and consents, and use
            messaging and automation features only for lawful and authorized
            purposes. Customers are responsible for the content they submit or
            instruct us to process and for complying with applicable messaging,
            marketing, privacy and consumer protection rules.
          </p>
        </section>

        <section>
          <h2>5. Acceptable use</h2>
          <p>
            You may not use our services for unlawful, deceptive, abusive,
            infringing, malicious or unauthorized activity, including spam,
            attempts to bypass platform controls or access to data without
            permission. We may suspend an integration when reasonably necessary
            to protect users, systems or comply with law or platform rules.
          </p>
        </section>

        <section>
          <h2>6. Fees and commercial terms</h2>
          <p>
            Fees, billing schedules, project scope and deliverables, when
            applicable, are defined in the relevant proposal, order or service
            agreement. Third-party usage charges may be billed directly by the
            provider or passed through as agreed.
          </p>
        </section>

        <section>
          <h2>7. Intellectual property</h2>
          <p>
            Each party retains ownership of its pre-existing intellectual
            property. Rights in custom deliverables are governed by the
            applicable project agreement. COSAQ Digital retains ownership of
            reusable know-how, frameworks, tools and components unless
            expressly agreed otherwise.
          </p>
        </section>

        <section>
          <h2>8. Privacy and confidentiality</h2>
          <p>
            Personal data is handled according to our{" "}
            <Link href="/privacy">Privacy Policy</Link>. Where COSAQ Digital
            processes data on behalf of a customer, we follow the
            customer&apos;s documented instructions and applicable data
            protection obligations.
          </p>
        </section>

        <section>
          <h2>9. Availability and warranties</h2>
          <p>
            We work to provide reliable services, but do not guarantee
            uninterrupted operation or that third-party APIs will remain
            unchanged. Except where prohibited by law, services are provided
            without warranties beyond those expressly stated in a written
            agreement.
          </p>
        </section>

        <section>
          <h2>10. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, neither party is liable for
            indirect or consequential losses arising solely from circumstances
            outside its reasonable control. Any contractual liability limits
            stated in a signed service agreement will apply to that engagement.
          </p>
        </section>

        <section>
          <h2>11. Suspension and termination</h2>
          <p>
            Access may be suspended or terminated for material breach, unlawful
            use, security risk, non-payment under an applicable agreement or
            when required by a platform provider or law. Upon termination,
            authorized integrations may be disconnected and data will be
            handled according to our retention and deletion obligations.
          </p>
        </section>

        <section>
          <h2>12. Changes to these Terms</h2>
          <p>
            We may update these Terms to reflect changes in law, technology or
            our services. The current version and effective date will remain
            available on this page.
          </p>
        </section>

        <section>
          <h2>13. Governing rules and contact</h2>
          <p>
            These Terms are interpreted under applicable law and do not limit
            mandatory rights that cannot legally be waived. Questions can be
            sent to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </section>

        <Link href="/" className="text-link">← Back to the home page</Link>
      </div>
    </main>
  );
}
