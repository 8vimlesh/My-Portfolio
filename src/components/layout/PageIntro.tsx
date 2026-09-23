interface PageIntroProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ number, eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="mb-12 md:mb-16">
      <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <span className="font-mono">{number}</span>
        <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter">{title}</h1>
      <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">{description}</p>
    </header>
  );
}
