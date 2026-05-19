type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionIntro({ eyebrow, title, description, centered = false }: SectionIntroProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-aurora-olive">{eyebrow}</p>
      <h2 className="font-display text-[2rem] leading-[1.1] text-aurora-text sm:text-[2.35rem]">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-aurora-muted sm:text-base">{description}</p>
    </div>
  );
}
