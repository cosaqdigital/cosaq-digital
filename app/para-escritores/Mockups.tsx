import { translator } from "@/lib/i18n/copy";
import type { Locale } from "@/lib/i18n/routes";
import { Icon } from "@/components/Icon";
import { identities } from "./content";
import styles from "./writers.module.css";

const books = ["O Último Vale", "Cartas do Norte", "Entre Páginas", "Depois do Silêncio"] as const;

export function BookCovers({ locale, all = false }: { locale: Locale; all?: boolean }) {
  const t = translator(locale);
  return (
    <div className={styles.books}>
      {(all ? books : books.slice(0, 3)).map((title, index) => (
        <div className={styles.bookCover} data-cover={index} key={title}><span>{t(title)}</span></div>
      ))}
    </div>
  );
}

export function AuthorMockup({ locale, identity = identities[0], devicePreview = false }: { locale: Locale;
  identity?: (typeof identities)[number];
  devicePreview?: boolean;
}) {
  const t = translator(locale);
  return (
    <div className={styles.authorMock} data-identity={identity.style} data-device-preview={devicePreview || undefined} aria-hidden="true">
      <div className={styles.mockNav}><b>{t(identity.author)}</b><span>{t("Obras Sobre")}</span></div>
      <div className={styles.authorArt}>
        <span>{t(identity.genre)}</span>
        <strong>{t(identity.title)}</strong>
        <i>{t("Explorar obras")}</i>
      </div>
      <div className={styles.shelf}><b>{t("Na estante")}</b><BookCovers locale={locale} /></div>
    </div>
  );
}

export function CatalogMockup({ locale, devicePreview = false }: { locale: Locale; devicePreview?: boolean }) {
  const t = translator(locale);
  return (
    <div className={styles.catalogMock} data-device-preview={devicePreview || undefined} aria-hidden="true">
      <div className={styles.mockNav}><b>{t("Livraria do autor")}</b><span>{t("Minha conta")}</span></div>
      <div className={styles.catalogInner}>
        <strong>{t("Explore o catálogo")}</strong>
        <div className={styles.mockTags}><span>{t("Todos os livros")}</span><span>{t("Séries")}</span><span>{t("Lançamentos")}</span></div>
        <BookCovers locale={locale} all />
      </div>
    </div>
  );
}

export function ReaderMockup({ locale, devicePreview = false }: { locale: Locale; devicePreview?: boolean }) {
  const t = translator(locale);
  return (
    <div className={styles.readerMock} data-device-preview={devicePreview || undefined} aria-hidden="true">
      <div className={styles.mockNav}><b>{t("‹ O Último Vale")}</b><span>{t("Aa")}</span></div>
      <div className={styles.paper}>
        <span>{t("CAPÍTULO I")}</span>
        <strong>{t("O caminho de volta")}</strong>
        <p>{t("O vento encontrou a casa antes de mim. Passou pelas janelas abertas, levantou a poeira das tábuas e fez a cortina dançar como nos verões da minha infância.")}</p>
        <p>{t("Àquela hora o vale inteiro parecia suspenso. Entre a montanha e o rio, ainda havia luz suficiente para reconhecer o caminho.")}</p>
      </div>
      <div className={styles.readProgress}><i /><span>{t("Capítulo 1 de 12")}</span></div>
    </div>
  );
}

export function DashboardMockup({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <div className={styles.dashboardMock} aria-hidden="true">
      <div className={styles.mockNav}><b>{t("Gestão da livraria")}</b><span>{t("Painel ilustrativo")}</span></div>
      <div className={styles.dashboardInner}>
        <strong>{t("Visão geral")}</strong>
        <div className={styles.mockStats}><span><Icon name="layers" />{t("Catálogo")}</span><span><Icon name="grow" />{t("Pedidos")}</span></div>
        <div className={styles.mockTable}>
          <div><b>{t("Obra")}</b><b>{t("Status")}</b></div>
          <div><span>{t("O Último Vale")}</span><span>{t("Publicado")}</span></div>
          <div><span>{t("Cartas do Norte")}</span><span>{t("Rascunho")}</span></div>
        </div>
      </div>
    </div>
  );
}
