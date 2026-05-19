import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const galleryItems = [
  { title: "Balcão principal", tone: "from-[#ddc3a5] to-[#b68f68]", description: "Texturas quentes e atendimento próximo." },
  { title: "Mesa de brunch", tone: "from-[#ccb296] to-[#9e7859]", description: "Pratos autorais com apresentação leve." },
  { title: "Cantinho de leitura", tone: "from-[#cfbea8] to-[#8d6f53]", description: "Luz suave para uma pausa tranquila." },
  { title: "Bar de métodos", tone: "from-[#e2d2bc] to-[#b48f6b]", description: "Extrações feitas com técnica e cuidado." }
];

export function Gallery() {
  return (
    <section id="galeria" className="section-shell scroll-mt-24 bg-[#f6efe4]">
      <div className="container-shell">
        <MotionReveal>
          <SectionIntro
            eyebrow="Galeria"
            title="Um ambiente pensado para acolher"
            description="Substitua estes placeholders por fotos reais do espaço, equipe e pratos para aumentar a conversão da página."
          />
        </MotionReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {galleryItems.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.06}>
              <article className={`group relative overflow-hidden rounded-[1.65rem] border border-aurora-earth/65 bg-gradient-to-br ${item.tone} p-4 shadow-soft`}>
                <div className="relative h-56 overflow-hidden rounded-2xl border border-white/55 bg-white/20 sm:h-64">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_40%),radial-gradient(circle_at_80%_85%,rgba(74,52,38,0.24),transparent_44%)]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent p-4">
                    <p className="font-display text-2xl leading-none text-aurora-offwhite">{item.title}</p>
                    <p className="mt-2 text-xs text-[#f8efe3]">{item.description}</p>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
