import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionIntro } from "@/components/ui/section-intro";

export function About() {
  return (
    <section id="sobre" className="section-shell scroll-mt-24">
      <div className="container-shell grid gap-8 rounded-[2rem] border border-aurora-earth/70 bg-white/75 p-6 shadow-soft sm:p-10 lg:grid-cols-2 lg:items-center">
        <MotionReveal>
          <SectionIntro
            eyebrow="Nossa Casa"
            title="Uma cafeteria boutique com sotaque bauruense"
            description="No Ateliê Aurora, o café é tratado com técnica, mas servido com afeto. Somos uma casa de bairro com proposta autoral: torra selecionada, cardápio sazonal e ambiente acolhedor para encontros, trabalho e boas conversas."
          />
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="rounded-3xl border border-aurora-earth/70 bg-aurora-beige/68 p-6 sm:p-8">
            <p className="font-display text-[1.95rem] leading-tight text-aurora-coffee">Nosso cuidado diário</p>
            <p className="mt-3 text-sm leading-relaxed text-aurora-muted">
              Trabalhamos com grãos frescos de microtorrefações paulistas e uma cozinha pequena, feita para manter qualidade em cada preparo.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-aurora-muted">
              <li>Cafés filtrados e espresso calibrados ao longo do dia.</li>
              <li>Doces e salgados com ingredientes de produtores locais.</li>
              <li>Atendimento próximo, sem pressa e com consistência.</li>
            </ul>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
