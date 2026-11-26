import { translator } from "@/lib/i18n/copy";
import { localizeHref, type Locale } from "@/lib/i18n/routes";
import Link from "next/link";
import { AuthorMockup, CatalogMockup, ReaderMockup } from "@/app/para-escritores/Mockups";
import { WritersDevicePreview } from "@/components/WritersDevicePreview";
import { writersLink } from "@/lib/site";
import styles from "./WritersFeature.module.css";

export function WritersFeature({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <section className={`shell ${styles.feature}`} aria-labelledby="writers-feature-title">
      <div className={styles.copy}>
        <p className={styles.label}>{t("Para escritores independentes")}</p>
        <h2 id="writers-feature-title">{t("Sua livraria digital, com a sua marca.")}</h2>
        <p className={styles.description}>{t("Venda seus e-books diretamente aos leitores e ofereça leitura online em uma plataforma com a sua identidade.")}</p>
        <Link href={localizeHref(locale, writersLink.href)} className={`button button-primary ${styles.cta}`}>{t("Conhecer a plataforma")}</Link>
      </div>
      <WritersDevicePreview locale={locale}
        notebook={<AuthorMockup locale={locale} devicePreview />}
        tablet={<CatalogMockup locale={locale} devicePreview />}
        phone={<ReaderMockup locale={locale} devicePreview />}
      />
    </section>
  );
}
