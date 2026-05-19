import { MessageCircle } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";

const whatsappLink = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Caf%C3%A9%20Aurora";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-24 px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8">
      <MotionReveal className="container-shell overflow-hidden rounded-[2rem] border border-aurora-earth/70 bg-aurora-coffee p-8 text-aurora-offwhite shadow-soft sm:p-11">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurora-beige">Reserve seu momento</p>
            <h2 className="mt-3 max-w-2xl font-display text-[2rem] leading-[1.08] sm:text-[2.55rem]">
              Pronto para transformar sua cafeteria em uma vitrine premium?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#f4ead9] sm:text-base">
              Este layout foi pensado para apresentar sua marca com clareza e sofisticação. Personalize textos, fotos e links para publicar rapidamente.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-aurora-beige px-7 py-3.5 text-sm font-semibold text-aurora-coffee transition duration-300 hover:-translate-y-0.5 hover:bg-[#efdfca] sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
