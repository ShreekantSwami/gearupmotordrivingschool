import Link from "next/link";

import { siteConfig } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="pb-24 pt-12">
      <div className="site-shell">
        <div className="hero-card grid gap-8 rounded-[32px] px-6 py-10 text-white sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow border-white/15 bg-white/10 text-white">
              Limited personal attention slots
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Start your learning journey with calm guidance from{" "}
              {siteConfig.founder}.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Whether you are touching a handle for the first time or returning
              after a bad experience, Gear Up is built to help you move from
              doubt to steady confidence.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-[28px] border border-white/12 bg-white/10 p-6">
            <div className="flex items-center justify-between text-sm text-white/75">
              <span>Location</span>
              <span>{siteConfig.locationShort}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-white/75">
              <span>Hours</span>
              <span>{siteConfig.hours}</span>
            </div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#enroll"
                className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-brand-ink transition hover:translate-y-[-1px]"
              >
                Enroll Now
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
