import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50 pb-24 pt-16 md:pb-16">
      <div className="site-shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Image
            src="/assets/full-logo.png"
            height={50}
            width={150}
            alt="Gear Up Logo"
            className="h-12 w-auto object-contain opacity-90"
            priority
          />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-8 space-y-2 text-sm text-slate-500 font-medium">
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />{" "}
              {siteConfig.location}
            </p>
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />{" "}
              {siteConfig.hours}
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-6">
              Navigate
            </p>
            <div className="flex flex-col gap-4 text-sm font-medium text-muted-foreground">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-brand-red w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-6">
              Quick actions
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact#enroll"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full justify-between group",
                })}
              >
                Request Enrollment
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
              <Link
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "secondary",
                  className: "w-full justify-between group",
                })}
              >
                Get Directions
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="site-shell mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>Built with confidence.</p>
      </div>
    </footer>
  );
}
