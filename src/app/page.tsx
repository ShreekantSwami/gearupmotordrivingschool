import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";
import { HomeHero } from "@/components/home-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import {
  faqItems,
  painPoints,
  programs,
  siteConfig,
  solutionPillars,
  testimonials as staticTestimonials,
} from "@/data/site";
import { getGoogleReviews } from "@/lib/google-reviews";

import { PhotoGallery } from "@/components/photo-gallery";

export default async function Home() {
  const googleData = await getGoogleReviews();

  const rating = googleData?.rating || siteConfig.rating;
  const ratingCount = googleData?.user_ratings_total || siteConfig.ratingCount;
  const livePhotos = googleData?.photos || [];

  // Format live reviews or fallback to static ones if API fails
  const reviewsToDisplay =
    googleData?.reviews && googleData.reviews.length > 0
      ? googleData.reviews.slice(0, 3).map((r) => ({
          id: r.author_name + r.time,
          quote: r.text,
          author: r.author_name,
          role: r.relative_time_description,
          source: "Google Reviews",
          rating: r.rating,
          avatar: r.profile_photo_url,
          url: r.author_url,
        }))
      : staticTestimonials.slice(0, 3).map((t, i) => ({
          id: t.author + i,
          ...t,
          rating: 5,
          avatar: null,
          url: null,
        }));

  return (
    <main className="overflow-hidden">
      <HomeHero rating={rating} ratingCount={ratingCount} />

      {/* Pain Points Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="site-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="The Challenge"
              title="Why many people delay learning to drive"
              description="The barrier is rarely just the vehicle. It is fear, uncertainty, and the lack of a learning environment that feels safe enough to begin."
              align="center"
            />
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {painPoints.map((point, i) => (
              <FadeIn key={point.title} delay={i * 0.1}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="pr-8">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-brand-red bg-brand-red/5 mb-6">
                The Solution
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                A calm process that turns fear into capability
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gear Up focuses on patient instruction, practical repetition,
                and structured confidence-building so learners can progress
                without feeling rushed or judged.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {solutionPillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.1}>
                <Card className="h-full border-slate-100 shadow-sm hover:border-brand-red/20 transition-colors">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        className="py-24 bg-slate-950 text-white relative overflow-hidden"
        id="programs"
      >
        {/* Abstract background effect */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 via-slate-950 to-slate-950" />

        <div className="site-shell relative z-10">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-brand-yellow font-medium uppercase tracking-wider text-sm mb-4">
                Programs
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                High-demand training tracks for modern learners
              </h2>
              <p className="text-slate-400 text-lg">
                Choose the vehicle category that matches your goal and learn
                with a process built for clarity, road safety, and steady
                confidence.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {programs.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.1}>
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-white overflow-hidden group">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {program.shortLabel}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-brand-red/20 text-brand-red text-xs font-medium">
                        Popular
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                    <CardDescription className="text-slate-300 text-sm leading-relaxed mt-2">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {program.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-6 border-t border-white/10 pt-6">
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                          Best For
                        </p>
                        <p className="text-sm text-slate-200">
                          {program.bestFor}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                          Outcome
                        </p>
                        <p className="text-sm text-slate-200">
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

      {/* Interactive Photo Gallery */}
      {livePhotos.length > 0 && (
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="site-shell mb-8">
            <FadeIn>
              <SectionHeading
                eyebrow="Inside the school"
                title="Glimpses of real training"
                description="See our vehicles, training environment, and the actual learning experience uploaded directly to our business profile."
                align="center"
              />
            </FadeIn>
          </div>
          <PhotoGallery photos={livePhotos} />
        </section>
      )}

      {/* Testimonials */}
      <section className="py-24 bg-slate-50" id="testimonials">
        <div className="site-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="Testimonials"
              title="What trust looks like in learner feedback"
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
                href="/testimonials"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    className:
                      "rounded-full bg-white shadow-sm hover:bg-slate-50 border-slate-200",
                  }),
                )}
              >
                Read more stories
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="site-shell max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Common questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Answers to help remove the friction that stops many learners
                from starting.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Accordion className="w-full bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${i}`}
                  className="border-b-0"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-brand-red py-4 px-4 hover:no-underline rounded-lg hover:bg-muted/50 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-4 pb-4 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
