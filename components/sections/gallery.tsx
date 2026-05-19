import Image from "next/image";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const galleryItems = [
  {
    title: "Balcão e vitrine",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80",
    description: "Atendimento próximo e vitrine fresca ao longo do dia.",
    sizes: "(max-width: 768px) 100vw, 48vw"
  },
  {
    title: "Mesa de brunch",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
    description: "Composição equilibrada para manhãs tranquilas em Bauru.",
    sizes: "(max-width: 768px) 100vw, 48vw"
  },
  {
    title: "Cafés e métodos",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=80",
    description: "Extrações cuidadosas com foco em sabor e consistência.",
    sizes: "(max-width: 768px) 100vw, 48vw"
  },
  {
    title: "Ambiente boutique",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1600&q=80",
    description: "Espaço acolhedor para trabalho, encontros e pausa.",
    sizes: "(max-width: 768px) 100vw, 48vw"
  }
];

export function Gallery() {
  return (
    <section id="galeria" className="section-shell scroll-mt-24 bg-[#f6efe4]">
      <div className="container-shell">
        <MotionReveal>
          <SectionIntro
            eyebrow="Ambiente"
            title="Uma casa elegante para viver o café com calma"
            description="Seleção visual inspirada no clima de uma cafeteria boutique real, com atmosfera acolhedora e contemporânea."
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
