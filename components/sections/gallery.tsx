import Image from "next/image";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const galleryItems = [
  {
    title: "Balcão principal",
    image: "/images/gallery-1.svg",
    description: "Texturas quentes e atendimento próximo.",
    sizes: "(max-width: 768px) 100vw, 48vw"
  },
  {
    title: "Mesa de brunch",
    image: "/images/gallery-2.svg",
    description: "Pratos autorais com apresentação leve.",
    sizes: "(max-width: 768px) 100vw, 48vw"
  },
  {
    title: "Cantinho de leitura",
    image: "/images/gallery-3.svg",
    description: "Luz suave para uma pausa tranquila.",
    sizes: "(max-width: 768px) 100vw, 48vw"
  },
  {
    title: "Bar de métodos",
    image: "/images/gallery-4.svg",
    description: "Extrações feitas com técnica e cuidado.",
    sizes: "(max-width: 768px) 100vw, 48vw"
  }
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
              <article className="group relative overflow-hidden rounded-[1.65rem] border border-aurora-earth/65 bg-white/60 p-3 shadow-soft">
                <div className="relative h-56 overflow-hidden rounded-2xl border border-white/55 sm:h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={item.sizes}
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
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
