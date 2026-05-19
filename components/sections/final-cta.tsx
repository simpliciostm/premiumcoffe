import { MessageCircle } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { contactLinks } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-24 px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8">
      <MotionReveal className="container-shell overflow-hidden rounded-[2rem] border border-aurora-earth/70 bg-aurora-coffee p-8 text-aurora-offwhite shadow-soft sm:p-11">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurora-beige">Atendimento Boutique</p>
            <h2 className="mt-3 max-w-2xl font-display text-[2rem] leading-[1.08] sm:text-[2.55rem]">
              Faça sua reserva e conheça o ritmo do café bem servido em Bauru.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#f4ead9] sm:text-base">
              Nossa equipe responde rápido no WhatsApp para reservas, encomendas e eventos intimistas.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href={contactLinks.whatsappInfo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-aurora-beige px-7 py-3.5 text-sm font-semibold text-aurora-coffee transition duration-300 hover:-translate-y-0.5 hover:bg-[#efdfca] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com a equipe
            </a>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
