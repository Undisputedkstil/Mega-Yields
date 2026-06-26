interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.22_0.04_148)] text-[oklch(0.97_0.018_90)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 0%, oklch(0.74 0.13 78 / 0.35), transparent 60%), radial-gradient(40% 60% at 0% 100%, oklch(0.5 0.12 145 / 0.4), transparent 60%)",
        }}
      />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow text-[var(--color-gold)]">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{intro}</p>}
      </div>
    </section>
  );
}
