import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="pb-24 pt-12 relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-6 py-12 sm:py-16 sm:px-12 text-white lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 shadow-2xl">
          {/* Subtle gradient accent inside the card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent pointer-events-none opacity-50" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-slate-300 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow" />
              </span>
              Limited personal attention slots
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Start your learning journey with calm guidance from{" "}
              {siteConfig.founder}.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              Whether you are touching a handle for the first time or returning
              after a bad experience, Gear Up is built to help you move from
              doubt to steady confidence.
            </p>
          </div>

          <div className="relative mt-10 lg:mt-0 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Location</span>
                <span className="font-medium text-white">
                  {siteConfig.locationShort}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Hours</span>
                <span className="font-medium text-white">
                  {siteConfig.hours}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/contact#enroll"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "w-full rounded-full bg-brand-red !text-white hover:bg-brand-red/90 h-12",
                })}
              >
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/programs"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "w-full rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 h-12",
                })}
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
