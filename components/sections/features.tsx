import { Coffee, Croissant, Leaf, Sofa } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const features = [
  {
    title: "Cafés especiais",
    description: "Extrações precisas em espresso e métodos filtrados com grãos sazonais.",
    icon: Coffee
  },
  {
    title: "Doces artesanais",
    description: "Bolos, cookies e tortas de produção própria com ingredientes selecionados.",
    icon: Croissant
  },
  {
    title: "Brunch",
    description: "Combinações equilibradas para manhãs tranquilas e encontros de fim de semana.",
    icon: Leaf
  },
  {
    title: "Ambiente aconchegante",
    description: "Espaço confortável para conversar, trabalhar e aproveitar sem pressa.",
    icon: Sofa
  }
];

export function Features() {
  return (
    <section id="diferenciais" className="section-shell scroll-mt-24 bg-[#f6efe4]">
      <div className="container-shell">
        <MotionReveal>
          <SectionIntro
            eyebrow="Diferenciais"
            title="Tudo pensado para uma experiência completa"
            description="Combinamos técnica, hospitalidade e atmosfera para transformar o café de todos os dias em um momento especial."
          />
        </MotionReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionReveal key={feature.title} delay={index * 0.06}>
                <article className="h-full rounded-3xl border border-aurora-earth/70 bg-aurora-offwhite p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 sm:p-6">
                  <span className="mb-4 inline-flex rounded-2xl bg-aurora-beige p-3 text-aurora-coffee">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-[1.7rem] leading-tight text-aurora-text">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-aurora-muted">{feature.description}</p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
