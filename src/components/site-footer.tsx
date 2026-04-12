import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { navigation, siteConfig } from "@/data/site";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-ink/8 bg-white/70 pb-24 pt-14 md:pb-12">
      <div className="site-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          {/* <BrandLogo /> */}
          <Image
            // src="/assets/full-logo.jpg"
            src="/assets/full-logo.png"
            height={50}
            width={150}
            alt="Website Logo"
            className="h-25 w-fit object-cover border border-white"
            priority
          />
          <p className="mt-5 max-w-xl text-sm leading-7 text-brand-ink/70">
            {siteConfig.description}
          </p>
          <div className="mt-6 space-y-2 text-sm text-brand-ink/70">
            <p>{siteConfig.location}</p>
            <p>{siteConfig.hours}</p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink/55">
              Navigate
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-brand-ink/70">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-brand-red"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink/55">
              Quick actions
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/contact#enroll"
                className="inline-flex w-fit items-center justify-center rounded-full border border-brand-ink/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-px"
              >
                Request&nbsp;Enrollment
              </Link>
              <Link
                href={siteConfig.mapsUrl}
                className="inline-flex w-fit items-center justify-center rounded-full border border-brand-ink/10 px-5 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
