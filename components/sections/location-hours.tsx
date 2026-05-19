import { Clock3, MapPin } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const hours = [
  "Segunda a Sexta: 07h - 20h",
  "Sábado: 08h - 21h",
  "Domingo: 08h - 18h"
];

export function LocationHours() {
  return (
    <section id="localizacao" className="section-shell scroll-mt-24">
      <div className="container-shell grid gap-6 lg:grid-cols-2">
        <MotionReveal>
          <div className="h-full rounded-[1.8rem] border border-aurora-earth/70 bg-white/82 p-6 shadow-soft sm:p-8">
            <SectionIntro
              eyebrow="Visite-nos"
              title="No coração do bairro"
              description="Rua das Acácias, 245 - Centro, sua cidade. Próximo à praça principal e com acesso fácil para pedestres e ciclistas."
            />
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-aurora-beige px-4 py-2 text-sm font-medium text-aurora-coffee">
              <MapPin className="h-4 w-4" />
              Endereço com ponto de referência
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="h-full rounded-[1.8rem] border border-aurora-earth/70 bg-aurora-beige/72 p-6 shadow-soft sm:p-8">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-aurora-olive">
              <Clock3 className="h-4 w-4" />
              Horários
            </p>
            <h3 className="font-display text-[2rem] leading-tight text-aurora-coffee">Funcionamento</h3>
            <ul className="mt-6 space-y-3 text-sm text-aurora-muted sm:text-base">
              {hours.map((item) => (
                <li key={item} className="rounded-xl border border-aurora-earth/70 bg-white/74 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
