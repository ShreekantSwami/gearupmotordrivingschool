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
      <p className={`eyebrow ${align === "center" ? "mx-auto" : ""}`.trim()}>
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-brand-ink/70 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
