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
    <section className="section-glow pb-10 pt-10">
      <div className="site-shell">
        <div className="surface-card grid-fade rounded-[32px] px-6 py-10 sm:px-8 lg:px-10">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-brand-ink/72 sm:text-lg">
            {description}
          </p>
          {actions ? (
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
