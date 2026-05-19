import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { contactLinks } from "@/lib/site-config";

const socialLinks = [
  { label: "Instagram", href: contactLinks.instagram, icon: Instagram },
  { label: "WhatsApp", href: contactLinks.whatsappInfo, icon: MessageCircle }
];

export function Footer() {
  return (
    <footer className="border-t border-aurora-earth/70 bg-[#f3eadc] px-4 py-10 sm:px-6 lg:px-8">
      <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-[1.85rem] leading-none text-aurora-coffee">Café Aurora</p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-aurora-muted">
            <MapPin className="h-4 w-4" />
            Rua das Acácias, 245 - Centro
          </p>
        </div>

        <nav aria-label="Redes sociais" className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-aurora-earth bg-white/80 px-4 py-2.5 text-sm font-medium text-aurora-coffee transition duration-300 hover:-translate-y-0.5 hover:bg-aurora-beige"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
