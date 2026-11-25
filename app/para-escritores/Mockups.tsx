import { Icon } from "@/components/Icon";
import { identities } from "./content";
import styles from "./writers.module.css";

const books = ["O Último Vale", "Cartas do Norte", "Entre Páginas", "Depois do Silêncio"] as const;

export function BookCovers({ all = false }: { all?: boolean }) {
  return (
    <div className={styles.books}>
      {(all ? books : books.slice(0, 3)).map((title, index) => (
        <div className={styles.bookCover} data-cover={index} key={title}><span>{title}</span></div>
      ))}
    </div>
  );
}

export function AuthorMockup({ identity = identities[0], devicePreview = false }: {
  identity?: (typeof identities)[number];
  devicePreview?: boolean;
}) {
  return (
    <div className={styles.authorMock} data-identity={identity.style} data-device-preview={devicePreview || undefined} aria-hidden="true">
      <div className={styles.mockNav}><b>{identity.author}</b><span>Obras &nbsp; Sobre</span></div>
      <div className={styles.authorArt}>
        <span>{identity.genre}</span>
        <strong>{identity.title}</strong>
        <i>Explorar obras</i>
      </div>
      <div className={styles.shelf}><b>Na estante</b><BookCovers /></div>
    </div>
  );
}

export function CatalogMockup({ devicePreview = false }: { devicePreview?: boolean }) {
  return (
    <div className={styles.catalogMock} data-device-preview={devicePreview || undefined} aria-hidden="true">
      <div className={styles.mockNav}><b>Livraria do autor</b><span>Minha conta</span></div>
      <div className={styles.catalogInner}>
        <strong>Explore o catálogo</strong>
        <div className={styles.mockTags}><span>Todos os livros</span><span>Séries</span><span>Lançamentos</span></div>
        <BookCovers all />
      </div>
    </div>
  );
}

export function ReaderMockup({ devicePreview = false }: { devicePreview?: boolean }) {
  return (
    <div className={styles.readerMock} data-device-preview={devicePreview || undefined} aria-hidden="true">
      <div className={styles.mockNav}><b>‹ &nbsp; O Último Vale</b><span>Aa</span></div>
      <div className={styles.paper}>
        <span>CAPÍTULO I</span>
        <strong>O caminho de volta</strong>
        <p>O vento encontrou a casa antes de mim. Passou pelas janelas abertas, levantou a poeira das tábuas e fez a cortina dançar como nos verões da minha infância.</p>
        <p>Àquela hora o vale inteiro parecia suspenso. Entre a montanha e o rio, ainda havia luz suficiente para reconhecer o caminho.</p>
      </div>
      <div className={styles.readProgress}><i /><span>Capítulo 1 de 12</span></div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className={styles.dashboardMock} aria-hidden="true">
      <div className={styles.mockNav}><b>Gestão da livraria</b><span>Painel ilustrativo</span></div>
      <div className={styles.dashboardInner}>
        <strong>Visão geral</strong>
        <div className={styles.mockStats}><span><Icon name="layers" />Catálogo</span><span><Icon name="grow" />Pedidos</span></div>
        <div className={styles.mockTable}>
          <div><b>Obra</b><b>Status</b></div>
          <div><span>O Último Vale</span><span>Publicado</span></div>
          <div><span>Cartas do Norte</span><span>Rascunho</span></div>
        </div>
      </div>
    </div>
  );
}
