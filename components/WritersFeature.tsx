import Link from "next/link";
import { AuthorMockup, CatalogMockup, ReaderMockup } from "@/app/para-escritores/Mockups";
import { WritersDevicePreview } from "@/components/WritersDevicePreview";
import { writersLink } from "@/lib/site";
import styles from "./WritersFeature.module.css";

export function WritersFeature() {
  return (
    <section className={`shell ${styles.feature}`} aria-labelledby="writers-feature-title">
      <div className={styles.copy}>
        <p className={styles.label}>Para escritores independentes</p>
        <h2 id="writers-feature-title">Sua livraria digital, com a sua marca.</h2>
        <p className={styles.description}>
          Venda seus e-books diretamente aos leitores e ofereça leitura online
          em uma plataforma com a sua identidade.
        </p>
        <Link href={writersLink.href} className={`button button-primary ${styles.cta}`}>
          Conhecer a plataforma
        </Link>
      </div>
      <WritersDevicePreview
        notebook={<AuthorMockup devicePreview />}
        tablet={<CatalogMockup devicePreview />}
        phone={<ReaderMockup devicePreview />}
      />
    </section>
  );
}
