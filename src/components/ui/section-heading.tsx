type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  /** Light text for dark sections. */
  inverted?: boolean;
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "center", inverted = false, id }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`text-sm font-semibold tracking-[0.18em] uppercase ${inverted ? "text-gold-400" : "text-gold-ink"}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-2 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${inverted ? "text-white" : ""}`}>
        {title}
      </h2>
      <span aria-hidden="true" className={`mt-4 block h-1 w-14 rounded-full bg-gold-400 ${centered ? "mx-auto" : ""}`} />
      {intro && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${inverted ? "text-on-dark" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}
