import { Clock, MapPin, Star } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { EnrollmentForm } from "@/components/enrollment-form";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Submit your enquiry to Gear Up Motor Driving School and choose the right training track for your driving goals.",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact and enroll"
        title="Take the first confident step"
        description="Tell the team what you want to learn and Gear Up can guide you toward the right vehicle track, batch style, and next step."
        actions={
          <Link
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
                className: "rounded-full h-12",
              }),
            )}
          >
            <MapPin className="mr-2 h-4 w-4" /> Get Directions
          </Link>
        }
      />

      <section className="py-24 bg-slate-50">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="grid gap-6">
            <FadeIn delay={0}>
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-brand-red" />
                    </div>
                    <p className="font-semibold text-foreground uppercase tracking-wider text-sm">
                      Visit the school
                    </p>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Learn in a local, approachable environment
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {siteConfig.location}
                  </p>
                  <Link
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-brand-red hover:underline"
                  >
                    Open in Maps →
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-slate-600" />
                    </div>
                    <p className="font-semibold text-foreground uppercase tracking-wider text-sm">
                      Hours
                    </p>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Flexible timing for real schedules
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {siteConfig.hours}. That makes it easier to fit lessons
                    around work, home responsibilities, and study schedules.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <p className="font-semibold text-foreground uppercase tracking-wider text-sm">
                      Best for
                    </p>
                  </div>
                  <ul className="grid gap-3 text-sm leading-relaxed text-muted-foreground list-inside list-disc">
                    <li>Complete beginners who feel nervous about starting</li>
                    <li>
                      Women who want independent local commuting confidence
                    </li>
                    <li>
                      Learners choosing between manual, automatic, gear, or
                      gearless
                    </li>
                    <li>
                      Drivers returning after a long gap or past hesitation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="sticky top-24">
              <EnrollmentForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
