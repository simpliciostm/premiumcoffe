import Image from "next/image";
import { ArrowRight, Coffee, MessageCircle } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { contactLinks, siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-28 px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
      <div className="container-shell grid gap-11 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <MotionReveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-aurora-earth/80 bg-aurora-beige/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-aurora-olive">
            <Coffee className="h-3.5 w-3.5" />
            Cafeteria boutique no centro de Bauru
          </p>
          <h1 className="max-w-xl font-display text-[2.5rem] leading-[1.05] text-aurora-text sm:text-[3.2rem] lg:text-[3.9rem]">
            {siteConfig.shortName}: cafés especiais e pausas com personalidade.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-aurora-muted sm:text-lg">
            Um espaço pensado para quem valoriza boa extração, comida fresca e atendimento próximo. Aqui, cada detalhe foi criado para virar rotina de quem ama café.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={contactLinks.whatsappReservation} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">
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
              <div className="overflow-hidden rounded-3xl border border-white/70 shadow-[0_8px_28px_rgba(47,36,29,0.1)]">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80"
                  alt="Mesa com xícara de café, prensa francesa e notebook"
                  width={1400}
                  height={933}
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="h-56 w-full object-cover sm:h-64"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-aurora-coffee">Desde 2021</p>
                  <p className="text-xs text-aurora-muted">Referência local em cafés especiais</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-aurora-coffee">4.9</p>
                  <p className="text-xs text-aurora-muted">Avaliação média dos clientes</p>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
