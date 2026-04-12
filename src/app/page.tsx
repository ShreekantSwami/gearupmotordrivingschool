import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import {
  benefits,
  caseStudies,
  faqItems,
  painPoints,
  processSteps,
  programs,
  siteConfig,
  solutionPillars,
  stats,
  testimonials,
  trustSignals,
} from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="section-glow pb-20 pt-10">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="eyebrow">
              Confidence-first driving school in {siteConfig.locationShort}
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl xl:text-6xl">
              Learn to drive with calm guidance, practical skill, and the
              confidence to go on your own.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 sm:text-lg">
              Gear Up Motor Driving School, led by {siteConfig.founder}, helps
              learners, especially women, build real independence through safe,
              motivating training for two-wheelers and four-wheelers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#enroll"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
              >
                <span className="text-white">Enroll Now</span>
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-brand-ink/10 px-6 py-3.5 text-sm font-semibold text-brand-ink transition hover:bg-white"
              >
                View Programs
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="surface-card rounded-[24px] px-4 py-4 text-sm leading-7 text-brand-ink/70"
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="hero-card grid-fade rounded-4xl p-8 text-white sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-4xl text-brand-yellow">
                    Gear Up
                  </p>
                  <p className="max-w-xs text-sm mt-7 text-white/72">
                    From “I can't drive” to “I drive with confidence.”
                  </p>
                </div>
                <Image
                  src="/assets/logo.png"
                  // className="mix-blend-darken"
                  alt="Gear Up brand mark"
                  width={96}
                  height={96}
                  priority
                />
              </div>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl border border-white/12 bg-white/8 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-white/55">
                    Why families trust Gear Up
                  </p>
                  <ul className="mt-4 list-disc pl-5 wrap-anywhere grid gap-3 text-sm space-y-1 text-white/78">
                    <li>Supportive coaching for nervous first-timers</li>
                    <li>Two-wheeler and four-wheeler options in one brand</li>
                    <li>
                      Daily timing that fits work, home, and study routines
                    </li>
                  </ul>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white px-5 py-5 text-brand-ink">
                    <p className="text-3xl font-semibold text-brand-red">
                      {siteConfig.rating}/5
                    </p>
                    <p className="mt-2 text-sm leading-7 text-brand-ink/72">
                      Public rating snapshot from {siteConfig.ratingCount}{" "}
                      ratings.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/12 bg-white/8 px-5 py-5">
                    <p className="text-2xl font-semibold text-brand-yellow">
                      {siteConfig.hours}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/72">
                      Flexible training windows for busy learners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="surface-card rounded-[28px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
                Mission
              </p>
              <p className="mt-3 text-base leading-8 text-brand-ink/72">
                Create a welcoming environment where women and beginners feel
                safe enough to learn, strong enough to improve, and confident
                enough to drive independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Pain points"
            title="Why many people delay learning to drive"
            description="The barrier is rarely just the vehicle. It is fear, uncertainty, and the lack of a learning environment that feels safe enough to begin."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {painPoints.map((point) => (
              <article
                key={point.title}
                className="surface-card rounded-[28px] p-6"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
                  {point.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card rounded-[32px] p-8">
            <SectionHeading
              eyebrow="The solution"
              title="A calm process that turns fear into capability"
              description="Gear Up focuses on patient instruction, practical repetition, and structured confidence-building so learners can progress without feeling rushed or judged."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
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

      <section className="pb-20" id="programs">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Programs"
            title="High-demand training tracks for modern learners"
            description="Choose the vehicle category that matches your goal and learn with a process built for clarity, road safety, and steady confidence."
          />
          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.title}
                className="surface-card rounded-[32px] p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow">{program.shortLabel}</p>
                  <span className="rounded-full bg-brand-red/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
                    Popular track
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-brand-ink">
                  {program.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                  {program.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {program.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-brand-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Social proof"
            title="Trust signals that reduce hesitation"
            description="Confidence increases when the school itself feels credible, consistent, and clearly focused on learner outcomes."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="surface-card rounded-[28px] p-6 text-center"
              >
                <p className="text-3xl font-semibold text-brand-red">
                  {stat.value}
                </p>
                <p className="mt-3 text-lg font-semibold text-brand-ink">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-brand-ink/70">
                  {stat.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Results"
            title="The transformation learners want most"
            description="The real win is everyday independence: commuting confidently, handling responsibilities, and trusting your decisions on the road."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="surface-card rounded-[28px] p-6"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
                  {study.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                  {study.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20" id="testimonials">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="What trust looks like in learner feedback"
            description="Public review snapshots already point to polite guidance, strong teaching, and a better confidence-building experience."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="surface-card rounded-[28px] p-6"
              >
                <p className="text-base leading-8 text-brand-ink/75">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6 border-t border-brand-ink/8 pt-5">
                  <p className="text-lg font-semibold text-brand-ink">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 text-sm text-brand-ink/65">
                    {testimonial.role}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-brand-red">
                    {testimonial.source}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface-card rounded-[32px] p-8">
            <SectionHeading
              eyebrow="How it works"
              title="A simple path from first enquiry to independent driving"
              description="The journey is designed to remove confusion, build momentum quickly, and keep learners progressing at a comfortable pace."
            />
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="surface-card rounded-[28px] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
                  Step {index + 1}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-brand-ink">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Benefits and outcomes"
            title="What changes once learners feel capable on the road"
            description="Driving confidence changes daily life. It unlocks convenience, independence, and a stronger sense of control."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit}
                className="surface-card rounded-[28px] p-6"
              >
                <p className="text-base leading-8 text-brand-ink/72">
                  {benefit}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions before enrolling"
            description="These answers help remove the friction that stops many learners from starting."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="surface-card rounded-[28px] p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-brand-ink">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
