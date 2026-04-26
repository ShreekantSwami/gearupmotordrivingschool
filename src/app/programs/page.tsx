import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { programs } from "@/data/site";
import { cn } from "@/lib/utils";

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
            className={cn(
              buttonVariants({
                size: "lg",
                className:
                  "rounded-full bg-brand-red text-white hover:bg-brand-red/90 h-12",
              }),
            )}
          >
            Enroll for the Right Track
          </Link>
        }
      />

      <section className="py-24 bg-slate-50">
        <div className="site-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="Core training tracks"
              title="Programs for two-wheelers and four-wheelers"
              description="Each program focuses on control, practical road skills, and the confidence needed to drive without dependence on others."
              align="center"
            />
          </FadeIn>

          <div className="mt-16 grid gap-8 xl:grid-cols-2">
            {programs.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.1}>
                <Card className="h-full bg-white border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {program.shortLabel}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-medium">
                        Confidence Track
                      </span>
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed mt-2">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {program.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-6 border-t border-slate-100 pt-6">
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                          Best For
                        </p>
                        <p className="text-sm text-slate-700">
                          {program.bestFor}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                          Outcome
                        </p>
                        <p className="text-sm text-slate-700">
                          {program.outcome}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="site-shell grid gap-8 lg:grid-cols-3">
          <FadeIn delay={0}>
            <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
              <CardContent className="pt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red mb-4">
                  Approach
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Calm teaching over rushed correction
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Learners build skill faster when they understand why each
                  action matters instead of only reacting to mistakes.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
              <CardContent className="pt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red mb-4">
                  Road focus
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Practical confidence for daily life
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Lessons are shaped around the real routes and situations
                  learners face in everyday commuting and family mobility.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
              <CardContent className="pt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red mb-4">
                  Support
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ideal for hesitant first-timers
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The environment is intentionally motivating, especially for
                  women and learners who have delayed driving because of fear or
                  judgement.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
