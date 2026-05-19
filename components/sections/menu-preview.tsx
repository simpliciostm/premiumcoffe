import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionIntro } from "@/components/ui/section-intro";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Café Coado do Dia",
    description: "Filtrado em V60 com grão fresco e perfil sensorial da semana.",
    price: "R$ 12",
    category: "Café"
  },
  {
    name: "Pingado Cremoso",
    description: "Espresso curto com leite vaporizado na medida certa.",
    price: "R$ 10",
    category: "Clássicos"
  },
  {
    name: "Pão de Queijo da Casa",
    description: "Unidade grande, casquinha crocante e interior macio.",
    price: "R$ 11",
    category: "Padaria"
  },
  {
    name: "Tostado de Queijo Canastra",
    description: "Pão de fermentação natural, queijo canastra e tomate assado.",
    price: "R$ 29",
    category: "Brunch"
  },
  {
    name: "Bolo de Fubá com Goiabada",
    description: "Receita artesanal servida em fatia generosa.",
    price: "R$ 16",
    category: "Confeitaria"
  },
  {
    name: "Cuscuz Paulista de Brunch",
    description: "Versão leve e autoral com ovos cremosos e saladinha fresca.",
    price: "R$ 34",
    category: "Especial"
  }
];

export function MenuPreview() {
  return (
    <section id="cardapio" className="section-shell scroll-mt-24">
      <div className="container-shell">
        <MotionReveal>
          <SectionIntro
            eyebrow="Cardápio"
            title="Sabores brasileiros com execução de cafeteria boutique"
            description="Itens pensados para a rotina da cidade: café bem tirado, brunch equilibrado e vitrine artesanal feita todos os dias."
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
