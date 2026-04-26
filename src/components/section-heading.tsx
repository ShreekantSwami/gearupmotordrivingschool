type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <p
        className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-brand-red bg-brand-red/5 mb-6 ${align === "center" ? "mx-auto" : ""}`.trim()}
      >
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
