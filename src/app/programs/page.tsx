import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { programs } from "@/data/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore two-wheeler and four-wheeler training programs from Gear Up Motor Driving School, including gearless, geared, manual, and automatic options.",
};

export default function ProgramsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Programs"
        title="Training options built around the kind of independence you want"
        description="Choose a program that matches your goals, whether you want a smoother daily commute, better manual control, or a calmer path into driving for the first time."
        actions={
          <Link
            href="/contact#enroll"
            className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
          >
            Enroll for the Right Track
          </Link>
        }
      />

      <section className="pb-20">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Core training tracks"
            title="Programs for two-wheelers and four-wheelers"
            description="Each program focuses on control, practical road skills, and the confidence needed to drive without dependence on others."
          />
          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.title}
                className="surface-card rounded-[32px] p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow">{program.shortLabel}</p>
                  <span className="rounded-full bg-brand-red/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                    Confidence track
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-brand-ink">
                  {program.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                  {program.description}
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[24px] border border-brand-ink/8 bg-white/75 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink/55">
                      Best for
                    </p>
                    <p className="mt-3 text-sm leading-7 text-brand-ink/70">
                      {program.bestFor}
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-brand-ink/8 bg-white/75 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink/55">
                      Outcome
                    </p>
                    <p className="mt-3 text-sm leading-7 text-brand-ink/70">
                      {program.outcome}
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {program.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 rounded-[20px] bg-brand-ink px-4 py-3 text-sm text-white/80"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell grid gap-6 lg:grid-cols-3">
          <article className="surface-card rounded-[28px] p-6">
            <p className="eyebrow">Approach</p>
            <h2 className="mt-4 text-2xl font-semibold text-brand-ink">
              Calm teaching over rushed correction
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-ink/72">
              Learners build skill faster when they understand why each action
              matters instead of only reacting to mistakes.
            </p>
          </article>

          <article className="surface-card rounded-[28px] p-6">
            <p className="eyebrow">Road focus</p>
            <h2 className="mt-4 text-2xl font-semibold text-brand-ink">
              Practical confidence for daily life
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-ink/72">
              Lessons are shaped around the real routes and situations learners
              face in everyday commuting and family mobility.
            </p>
          </article>

          <article className="surface-card rounded-[28px] p-6">
            <p className="eyebrow">Support</p>
            <h2 className="mt-4 text-2xl font-semibold text-brand-ink">
              Ideal for hesitant first-timers
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-ink/72">
              The environment is intentionally motivating, especially for women
              and learners who have delayed driving because of fear or
              judgement.
            </p>
          </article>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
