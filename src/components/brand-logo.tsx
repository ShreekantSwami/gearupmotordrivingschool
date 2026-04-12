import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  markSize?: number;
  showTagline?: boolean;
};

export function BrandLogo({
  className,
  markSize = 56,
  showTagline = true,
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`.trim()}>
      <Image
        src="/brand-mark.svg"
        alt="Gear Up Motor Driving School"
        width={markSize}
        height={markSize}
        className="shrink-0"
      />
      <div>
        <p className="font-display text-2xl leading-none text-brand-red">
          Gear Up
        </p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-ink/70">
          Motor Driving School
        </p>
        {showTagline ? (
          <p className="mt-1 text-sm text-brand-ink/70">
            Drive with confidence
          </p>
        ) : null}
      </div>
    </div>
  );
}
