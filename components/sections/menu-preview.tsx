import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionIntro } from "@/components/ui/section-intro";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
};

const menuItems: MenuItem[] = [
  { name: "Espresso Aurora", description: "Dose dupla com notas de chocolate e nozes.", price: "R$ 9", category: "Café" },
  { name: "Cappuccino Cremoso", description: "Leite vaporizado e final com canela suave.", price: "R$ 14", category: "Café" },
  { name: "Latte Baunilha", description: "Café espresso, leite e toque natural de baunilha.", price: "R$ 16", category: "Especial" },
  { name: "Toast Mediterrâneo", description: "Pão artesanal, ricota temperada e tomate confit.", price: "R$ 24", category: "Brunch" },
  { name: "Croissant de Amêndoas", description: "Massa folhada amanteigada e creme de amêndoas.", price: "R$ 18", category: "Padaria" },
  { name: "Cheesecake da Casa", description: "Base crocante e calda de frutas vermelhas.", price: "R$ 19", category: "Sobremesa" }
];

export function MenuPreview() {
  return (
    <section id="cardapio" className="section-shell scroll-mt-24">
      <div className="container-shell">
        <MotionReveal>
          <SectionIntro
            eyebrow="Cardápio"
            title="Sabores autorais para todos os momentos"
            description="Uma prévia dos favoritos da casa. Você pode adaptar este bloco com os produtos e preços reais da cafeteria."
          />
        </MotionReveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {menuItems.map((item, index) => (
            <MotionReveal key={item.name} delay={index * 0.05}>
              <article className="group flex h-full items-start justify-between gap-4 rounded-[1.6rem] border border-aurora-earth/70 bg-white/85 p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-aurora-olive/45 sm:p-6">
                <div className="space-y-3">
                  <p className="inline-flex rounded-full bg-aurora-beige/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-aurora-olive">
                    {item.category}
                  </p>
                  <h3 className="font-display text-[1.75rem] leading-tight text-aurora-text">{item.name}</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-aurora-muted">{item.description}</p>
                </div>
                <p className="rounded-full border border-aurora-earth/80 bg-aurora-offwhite px-3.5 py-1.5 text-sm font-semibold text-aurora-coffee">{item.price}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
