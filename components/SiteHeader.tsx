"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  ["/servicos", "Soluções"],
  ["/projetos", "Projetos"],
  ["/sobre", "A COSAQ"],
  ["/contato", "Contato"],
];
export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link
          href="/"
          className="brand"
          aria-label="COSAQ Digital — início"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            C<span>↗</span>
          </span>
          <span>
            COSAQ<span className="brand-sub">DIGITAL</span>
          </span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar menu" : "Abrir menu"}
        </button>
        <nav
          id="main-navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Navegação principal"
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                path === href || path.startsWith(`${href}/`)
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="button button-small"
            onClick={() => setOpen(false)}
          >
            Vamos conversar <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
