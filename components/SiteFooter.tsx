import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            COSAQ Digital<span className="accent">.</span>
          </Link>
          <p>
            Desenvolvimento e gestão
            <br />
            de soluções digitais.
          </p>
          <p className="small">
            Atendimento em português.
            <br />
            Empresas no Brasil e nos Estados Unidos.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <Link href="/servicos">Soluções</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/sobre">A COSAQ</Link>
        </div>
        <div>
          <p className="eyebrow">Seu próximo projeto</p>
          <p>Conte o que sua empresa precisa resolver.</p>
          <Link href="/contato" className="text-link">
            Conversar sobre meu projeto ↗
          </Link>
          <Link href="/privacidade">Privacidade</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} COSAQ Digital</span>
        <span>Sites · Plataformas · Automações · Blogs</span>
      </div>
    </footer>
  );
}
