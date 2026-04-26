import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { PhotoGallery } from "@/components/photo-gallery";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getGoogleReviews } from "@/lib/google-reviews";
import { cn } from "@/lib/utils";

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

export default async function AboutPage() {
  const googleData = await getGoogleReviews();
  const livePhotos = googleData?.photos || [];

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
              className={cn(
                buttonVariants({
                  size: "lg",
                  className:
                    "rounded-full bg-brand-red text-white hover:bg-brand-red/90 h-12",
                }),
              )}
            >
              Start Your Journey
            </Link>
            <Link
              href="/programs"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "rounded-full h-12",
                }),
              )}
            >
              Explore Programs
            </Link>
          </>
        }
      />

      <section className="pb-24 pt-12">
        <div className="site-shell grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <FadeIn className="pr-6">
            <SectionHeading
              eyebrow="Founder vision"
              title="Teaching that respects beginners and believes in their independence"
              description="The school is shaped by a simple belief: confidence is teachable. When learners are given patience, safety, and structured guidance, they stop doubting themselves and start driving with clarity."
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-8">
                    <p className="text-4xl font-bold text-brand-red">
                      {stat.value}
                    </p>
                    <p className="mt-4 text-lg font-semibold text-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {stat.detail}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Photo Gallery */}
      {livePhotos.length > 0 && (
        <section className="py-24 border-t border-slate-100 overflow-hidden">
          <div className="site-shell mb-8">
            <FadeIn>
              <SectionHeading
                eyebrow="Our Environment"
                title="A look inside our training"
                description="Real moments of confidence building, direct from our learners."
                align="center"
              />
            </FadeIn>
          </div>
          <PhotoGallery photos={livePhotos} />
        </section>
      )}

      <section className="py-24 bg-slate-50">
        <div className="site-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="What defines the school"
              title="Every lesson is guided by trust, safety, and practical progress"
              description="The experience is intentionally designed to help learners feel safe, capable, and motivated to keep improving."
              align="center"
            />
          </FadeIn>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <Card className="h-full border-slate-100 shadow-sm hover:border-brand-red/20 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <div className="pr-8">
              <SectionHeading
                eyebrow="Why it works"
                title="A calm, structured path from first lesson to real-road confidence"
                description="Progress becomes easier when teaching is broken into clear, repeatable steps instead of rushed practice."
              />
              <div className="mt-10 grid gap-4">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-red mb-2">
                      Step {index + 1}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-6">
            {solutionPillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.1}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
                  <CardHeader>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
