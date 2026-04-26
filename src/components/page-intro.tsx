import { FadeIn } from "@/components/fade-in";
import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
}: PageIntroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 bg-gradient-to-tr from-brand-red/20 via-brand-yellow/10 to-transparent blur-[80px] rounded-full pointer-events-none" />
      </div>

      <div className="site-shell">
        <FadeIn className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/50 backdrop-blur-md px-3 py-1 text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            {eyebrow}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          {actions ? (
            <div className="mt-10 flex flex-wrap gap-4">{actions}</div>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
