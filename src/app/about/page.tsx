import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import {
  processSteps,
  siteConfig,
  solutionPillars,
  stats,
  values,
} from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the mission behind Gear Up Motor Driving School and learn how Mrs. Manisha Jangam helps learners build road confidence.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About Gear Up"
        title="A driving school built to turn hesitation into confidence"
        description={`Gear Up Motor Driving School is led by ${siteConfig.founder}, with a clear mission: help learners, especially women, move from “I can’t drive” to “I drive with confidence.” The focus is practical skill, calm coaching, and independent everyday driving.`}
        actions={
          <>
            <Link
              href="/contact#enroll"
              className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
            >
              Start Your Journey
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-brand-ink/10 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
            >
              Explore Programs
            </Link>
          </>
        }
      />

      <section className="pb-20 pt-10">
        <div className="site-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface-card rounded-[32px] p-8">
            <SectionHeading
              eyebrow="Founder vision"
              title="Teaching that respects beginners and believes in their independence"
              description="The school is shaped by a simple belief: confidence is teachable. When learners are given patience, safety, and structured guidance, they stop doubting themselves and start driving with clarity."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-card rounded-[28px] p-6">
                <p className="text-3xl font-semibold text-brand-red">
                  {stat.value}
                </p>
                <p className="mt-3 text-lg font-semibold text-brand-ink">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-brand-ink/70">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell">
          <SectionHeading
            eyebrow="What defines the school"
            title="Every lesson is guided by trust, safety, and practical progress"
            description="The experience is intentionally designed to help learners feel safe, capable, and motivated to keep improving."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="surface-card rounded-[28px] p-6"
              >
                <h2 className="text-xl font-semibold text-brand-ink">
                  {value.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-card rounded-[32px] p-8">
            <SectionHeading
              eyebrow="Why it works"
              title="A calm, structured path from first lesson to real-road confidence"
              description="Progress becomes easier when teaching is broken into clear, repeatable steps instead of rushed practice."
            />
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[24px] border border-brand-ink/8 bg-white/80 p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-ink/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {solutionPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="surface-card rounded-[28px] p-6"
              >
                <h2 className="text-xl font-semibold text-brand-ink">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
