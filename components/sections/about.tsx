import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionIntro } from "@/components/ui/section-intro";

export function About() {
  return (
    <section id="sobre" className="section-shell scroll-mt-24">
      <div className="container-shell grid gap-8 rounded-[2rem] border border-aurora-earth/70 bg-white/75 p-6 shadow-soft sm:p-10 lg:grid-cols-2 lg:items-center">
        <MotionReveal>
          <SectionIntro
            eyebrow="Nossa essência"
            title="Uma cafeteria de bairro com alma contemporânea"
            description="Criamos um espaço acolhedor para quem valoriza café de qualidade, atendimento humano e pausas que inspiram o dia. Nossa proposta une técnicas de barismo, ingredientes frescos e um ambiente que convida a ficar."
          />
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="rounded-3xl border border-aurora-earth/70 bg-aurora-beige/68 p-6 sm:p-8">
            <p className="font-display text-[1.95rem] leading-tight text-aurora-coffee">Do grão à mesa</p>
            <p className="mt-3 text-sm leading-relaxed text-aurora-muted">
              Trabalhamos com torrefações parceiras e produtores selecionados para garantir consistência e personalidade em cada método de preparo.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-aurora-muted">
              <li>Seleção semanal de grãos especiais.</li>
              <li>Receitas autorais de doces e salgados.</li>
              <li>Curadoria musical e luz natural durante o dia.</li>
            </ul>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
