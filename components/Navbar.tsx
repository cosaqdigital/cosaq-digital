"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Brand } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { trackConversion } from "@/lib/analytics";
import { navigation } from "@/lib/site";

const writersNavigation = [
  { label: "Plataforma", href: "#experiencia" },
  { label: "Leitura", href: "#leitura" },
  { label: "Planos", href: "#investimento" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Navbar() {
  const writersPage = usePathname() === "/para-escritores";
  const desktopLinks = writersPage ? writersNavigation : navigation.slice(1);
  const mobileLinks = writersPage ? writersNavigation : navigation;
  const contact = writersPage ? {
    href: "#contato-escritores",
    label: "Quero minha plataforma",
  } : { href: "/#contato", label: "Vamos conversar" };
  function openContact() {
    setOpen(false);
    if (writersPage) trackConversion("contact_click", { source: "para_escritores", placement: "menu" });
  }

  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    const query = window.matchMedia("(min-width: 1100px)");
    const resize = () => {
      if (query.matches) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    query.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
      query.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="site-header" ref={header}>
        <div className="shell header-row">
          <Link
            className="brand"
            href="/#inicio"
            aria-label="COSAQ Digital — início"
            onClick={() => setOpen(false)}
          >
            <Brand />
          </Link>
          <nav aria-label="Navegação principal" className="desktop-nav">
            {desktopLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href={contact.href} className="header-contact" onClick={openContact}>
            {contact.label}
            <Icon name="arrow" width={17} height={17} />
          </Link>
          <button
            className="menu-toggle"
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
        <nav
          id="mobile-menu"
          aria-label="Navegação mobile"
          hidden={!open}
          className="mobile-nav"
        >
          <div className="shell">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
                <Icon name="arrow" width={17} height={17} />
              </Link>
            ))}
            <Link href={contact.href} onClick={openContact}>
              {writersPage ? contact.label : "Conversar sobre meu projeto"}
              <Icon name="arrow" width={17} height={17} />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
