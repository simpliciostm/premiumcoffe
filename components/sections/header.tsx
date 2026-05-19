"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#sobre", label: "Nossa Casa" },
  { href: "#diferenciais", label: "Experiência" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#galeria", label: "Ambiente" },
  { href: "#localizacao", label: "Bauru" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-aurora-earth/60 bg-aurora-offwhite/88 shadow-[0_8px_24px_rgba(47,36,29,0.08)] backdrop-blur-md">
      <div className="container-shell flex items-center justify-between py-3">
        <a href="#inicio" className="font-display text-[1.5rem] leading-none tracking-wide text-aurora-coffee sm:text-[1.65rem]" aria-label="Ir para o início">
          {siteConfig.shortName}
        </a>

        <button
          type="button"
          className="inline-flex rounded-full border border-aurora-earth bg-white/80 p-2 text-aurora-coffee md:hidden"
          onClick={() => setIsOpen((state) => !state)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center gap-7 text-sm font-medium text-aurora-muted md:flex" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-aurora-coffee">
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn-secondary px-5 py-2.5 text-xs uppercase tracking-[0.12em]">
            Reservar
          </a>
        </nav>
      </div>

      <nav
        id="mobile-menu"
        className={`overflow-hidden border-t border-aurora-earth/70 bg-aurora-offwhite px-4 transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80 pb-4 pt-3" : "max-h-0 py-0"
        }`}
        aria-label="Menu mobile"
      >
        <ul className="space-y-2 text-sm font-medium text-aurora-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-aurora-beige/60 hover:text-aurora-coffee">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-xl bg-aurora-coffee px-3 py-2.5 text-center font-semibold text-aurora-offwhite"
            >
              Reservar pelo WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
