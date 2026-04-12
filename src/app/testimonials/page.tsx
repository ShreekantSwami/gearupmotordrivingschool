import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, siteConfig, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See the trust signals, learner review snapshots, and confidence-building results behind Gear Up Motor Driving School.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Testimonials and results"
        title="Why learners trust Gear Up to build real driving confidence"
        description="Trust grows when learners feel heard, supported, and capable on the road. These review snapshots and outcome stories reflect the kind of progress Gear Up is built to deliver."
        actions={
          <Link
            href="/contact#enroll"
            className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
          >
            Become the Next Success Story
          </Link>
        }
      />

      <section className="pb-20">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Learner voices"
            title="Review snapshots that reinforce trust"
            description={`The public rating snapshot currently shows ${siteConfig.rating}/5 from ${siteConfig.ratingCount} ratings, with feedback highlighting polite guidance, women-friendly support, and strong instruction.`}
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
        <div className="site-shell">
          <SectionHeading
            eyebrow="Transformation stories"
            title="Results that matter in daily life"
            description="The most valuable outcome is not just controlling a vehicle. It is gaining the freedom to commute, handle responsibilities, and trust yourself on the road."
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

      <CtaBanner />
    </main>
  );
}
