import type { Metadata } from "next";
import Link from "next/link";

import { EnrollmentForm } from "@/components/enrollment-form";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/data/site";

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
            className="inline-flex items-center justify-center rounded-full border border-brand-ink/10 px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
          >
            Get Directions
          </Link>
        }
      />

      <section className="pb-20">
        <div className="site-shell grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="grid gap-5">
            <article className="surface-card rounded-[28px] p-6">
              <p className="eyebrow">Visit the school</p>
              <h2 className="mt-4 text-2xl font-semibold text-brand-ink">
                Learn in a local, approachable environment
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                {siteConfig.location}
              </p>
              <Link
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-brand-ink/10 px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
              >
                Open in Maps
              </Link>
            </article>

            <article className="surface-card rounded-[28px] p-6">
              <p className="eyebrow">Hours</p>
              <h2 className="mt-4 text-2xl font-semibold text-brand-ink">
                Flexible timing for real schedules
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                {siteConfig.hours}. That makes it easier to fit lessons around
                work, home responsibilities, and study schedules.
              </p>
            </article>

            <article className="surface-card rounded-[28px] p-6">
              <p className="eyebrow">Best for</p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-brand-ink/72">
                <li>Complete beginners who feel nervous about starting</li>
                <li>Women who want independent local commuting confidence</li>
                <li>
                  Learners choosing between manual, automatic, gear, or gearless
                </li>
                <li>Drivers returning after a long gap or past hesitation</li>
              </ul>
            </article>
          </div>

          <EnrollmentForm />
        </div>
      </section>
    </main>
  );
}
