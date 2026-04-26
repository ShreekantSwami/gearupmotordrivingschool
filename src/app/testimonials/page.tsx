import { ExternalLink, Star } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import {
  caseStudies,
  siteConfig,
  testimonials as staticTestimonials,
} from "@/data/site";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See the trust signals, learner review snapshots, and confidence-building results behind Gear Up Motor Driving School.",
};

export default async function TestimonialsPage() {
  const googleData = await getGoogleReviews();

  const rating = googleData?.rating || siteConfig.rating;
  const ratingCount = googleData?.user_ratings_total || siteConfig.ratingCount;

  // Format live reviews or fallback to static ones if API fails
  const reviewsToDisplay =
    googleData?.reviews && googleData.reviews.length > 0
      ? googleData.reviews.map((r) => ({
          id: r.author_name + r.time,
          quote: r.text,
          author: r.author_name,
          role: r.relative_time_description,
          source: "Google Reviews",
          rating: r.rating,
          avatar: r.profile_photo_url,
          url: r.author_url,
        }))
      : staticTestimonials.map((t, i) => ({
          id: t.author + i,
          ...t,
          rating: 5,
          avatar: null,
          url: null,
        }));

  return (
    <main>
      <PageIntro
        eyebrow="Testimonials and results"
        title="Why learners trust Gear Up to build real driving confidence"
        description="Trust grows when learners feel heard, supported, and capable on the road. These review snapshots and outcome stories reflect the kind of progress Gear Up is built to deliver."
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
            Become the Next Success Story
          </Link>
        }
      />

      <section className="py-24 bg-slate-50">
        <div className="site-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="Live Learner Voices"
              title="Review snapshots that reinforce trust"
              description={`Our live Google rating is ${rating}/5 from ${ratingCount} ratings, with feedback highlighting polite guidance, women-friendly support, and strong instruction.`}
              align="center"
            />
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {reviewsToDisplay.map((testimonial, i) => (
              <FadeIn key={testimonial.id} delay={i * 0.1}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <CardContent className="pt-8 flex-1 flex flex-col">
                    <div className="flex gap-1 mb-6">
                      {Array.from(
                        { length: testimonial.rating },
                        (_, starNumber) => starNumber + 1,
                      ).map((starNumber) => (
                        <Star
                          key={`${testimonial.id}-star-${starNumber}`}
                          className="h-4 w-4 fill-brand-yellow text-brand-yellow"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-8 flex-1">
                      "{testimonial.quote}"
                    </p>

                    <div className="mt-auto flex items-center gap-4">
                      {testimonial.avatar ? (
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={44}
                          height={44}
                          className="rounded-full bg-slate-100"
                        />
                      ) : (
                        <div className="h-11 w-11 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-semibold text-lg">
                          {testimonial.author.charAt(0)}
                        </div>
                      )}

                      <div>
                        {testimonial.url ? (
                          <Link
                            href={testimonial.url}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-foreground hover:underline hover:text-brand-red transition-colors inline-flex items-center gap-1"
                          >
                            {testimonial.author}
                          </Link>
                        ) : (
                          <p className="font-semibold text-foreground">
                            {testimonial.author}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          {testimonial.role} •{" "}
                          <span className="uppercase text-[10px] tracking-wider text-brand-red font-medium">
                            {testimonial.source}
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex justify-center">
              <Link
                href={`https://www.google.com/maps/place/?q=place_id:${process.env.GOOGLE_PLACE_ID || "ChIJgwakNzG75zsR0PJRdjPxuWY"}`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    className:
                      "rounded-full bg-white shadow-sm hover:bg-slate-50 border-slate-200",
                  }),
                )}
              >
                Read all {ratingCount} reviews on Google{" "}
                <ExternalLink className="ml-2 h-4 w-4 text-muted-foreground" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="site-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="Transformation stories"
              title="Results that matter in daily life"
              description="The most valuable outcome is not just controlling a vehicle. It is gaining the freedom to commute, handle responsibilities, and trust yourself on the road."
              align="center"
            />
          </FadeIn>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <FadeIn key={study.title} delay={i * 0.1}>
                <Card className="h-full border-slate-100 shadow-sm hover:border-brand-red/20 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl leading-tight text-foreground">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {study.result}
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
