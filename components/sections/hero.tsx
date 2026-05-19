import { ArrowRight, Coffee, MessageCircle } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";

const whatsappLink = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20reservar%20uma%20mesa%20no%20Caf%C3%A9%20Aurora";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-28 px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
      <div className="container-shell grid gap-11 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <MotionReveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-aurora-earth/80 bg-aurora-beige/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-aurora-olive">
            <Coffee className="h-3.5 w-3.5" />
            A experiência do café em outro nível
          </p>
          <h1 className="max-w-xl font-display text-[2.5rem] leading-[1.05] text-aurora-text sm:text-[3.35rem] lg:text-[4rem]">
            Sabor artesanal, manhãs memoráveis e encontros com calma.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-aurora-muted sm:text-lg">
            No Café Aurora, cada xícara é preparada com grãos selecionados e cuidado em cada detalhe para transformar sua pausa em um momento especial.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <a href="#cardapio" className="btn-secondary w-full sm:w-auto">
              Ver Cardápio
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.14}>
          <div className="relative overflow-hidden rounded-[2rem] border border-aurora-earth/70 bg-gradient-to-br from-aurora-beige via-[#ebddca] to-[#d4b798] p-6 shadow-soft sm:p-8">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-aurora-olive/18" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-aurora-coffee/14" />
            <div className="relative space-y-5">
              <div className="rounded-3xl border border-white/70 bg-white/78 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-aurora-muted">Blend da casa</p>
                <p className="mt-2 font-display text-3xl text-aurora-coffee sm:text-[2.15rem]">Aurora Signature</p>
                <p className="mt-3 text-sm text-aurora-muted">Gotas de caramelo, chocolate amargo e final aveludado.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-aurora-coffee">+40</p>
                  <p className="text-xs text-aurora-muted">Opções no menu</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-aurora-coffee">4.9</p>
                  <p className="text-xs text-aurora-muted">Avaliação média</p>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
