import Link from "next/link";
export default function NotFound() {
  return (
    <main id="conteudo" className="page-intro shell">
      <p className="eyebrow">Página não encontrada</p>
      <h1>Vamos encontrar outro caminho.</h1>
      <p className="intro-copy">
        Esse endereço não está disponível. Conheça nossas soluções ou volte ao
        início.
      </p>
      <div className="hero-actions">
        <Link className="button" href="/">
          Voltar ao início
        </Link>
        <Link className="button button-ghost" href="/servicos">
          Conhecer soluções
        </Link>
      </div>
    </main>
  );
}
