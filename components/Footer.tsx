import Link from "next/link";
import { Brand } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { contactEmail, projects } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link
            href="/#inicio"
            className="brand"
            aria-label="COSAQ Digital — início"
          >
            <Brand />
          </Link>
          <p>
            Transformamos desafios de negócio em experiências e soluções
            digitais.
          </p>
          <span className="market-label">
            <Icon name="globe" width={16} height={16} />
            Brasil e Estados Unidos
          </span>
        </div>
        <div>
          <h2>Soluções</h2>
          {services.map((service) => (
            <Link key={service.slug} href={"/solucoes/" + service.slug}>{service.title}</Link>
          ))}
          <Link href="/solucoes">Ver todas as soluções</Link>
        </div>
        <div>
          <h2>Conheça nosso trabalho</h2>
          {projects.map((p) => (
            <Link key={p.slug} href={`/projetos/${p.slug}`}>
              {p.title}
            </Link>
          ))}
          <Link href="/#diagnostico">Diagnóstico digital</Link>
          <Link href="/#sobre">Como trabalhamos</Link>
          <Link href="/privacidade">Política de Privacidade</Link>
        </div>
        <div>
          <h2>
            Uma boa ideia começa
            <br />
            com uma conversa.
          </h2>
          <a className="footer-email" href={`mailto:${contactEmail}`}>
            {contactEmail}
            <Icon name="external" width={16} height={16} />
          </a>
          <p>
            Conte o que sua empresa precisa. Vamos entender o próximo passo.
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} COSAQ Digital.</span>
        <span>Estratégia. Tecnologia. Negócios.</span>
        <Link href="/#inicio">Voltar ao início ↑</Link>
      </div>
    </footer>
  );
}
