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
          <svg className="brand-symbol" viewBox="0 0 100 60" aria-hidden="true">
            <path
              d="M56 17C46 2 22 1 11 15C0 29 10 51 28 51C40 51 47 42 54 33"
              fill="none"
              stroke="white"
              strokeWidth="9"
            />
            <path
              d="M43 43C54 58 77 58 88 44C99 29 89 9 72 9C59 9 52 18 46 26"
              fill="none"
              stroke="#0066ff"
              strokeWidth="9"
            />
            <path d="M29 21L68 41" stroke="#0066ff" strokeWidth="8" />
          </svg>
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
