import Image from "next/image";
import Link from "next/link";
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
      <figure className={styles.visual}>
        <Image
          src="/writers/plataforma-hero.webp"
          alt="Livraria digital e leitura de e-books em notebook, tablet e celular"
          width={1200}
          height={800}
          sizes="(max-width: 767px) calc(100vw - 42px), (max-width: 1199px) 53vw, (max-width: 1440px) 52vw, 705px"
        />
        <figcaption>Imagem conceitual da plataforma</figcaption>
      </figure>
    </section>
  );
}
