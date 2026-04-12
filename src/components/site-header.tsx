import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { navigation } from "@/data/site";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/8 bg-[color:rgba(255,253,248,0.88)] backdrop-blur-xl">
      <div className="site-shell flex items-center justify-between gap-6 py-4">
        {/* <div className="h-12.5 w-full">
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/logo.jpg"
              height={50}
              width={150}
              alt="Website Logo"
              className="border border-green-500"
            />
          </Link>
        </div> */}
        <div className="flex items-center">
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/full-logo.png"
              height={50}
              width={150}
              alt="Website Logo"
              className="h-17.5 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-ink/70 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/programs"
            className="rounded-full border border-brand-ink/10 px-5 py-3 text-sm font-semibold text-brand-ink transition hover:bg-white"
          >
            View Programs
          </Link>
          <Link
            href="/contact#enroll"
            className="rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      <div className="border-t border-brand-ink/6 lg:hidden">
        <nav className="site-shell flex gap-5 overflow-x-auto py-3 text-sm font-medium text-brand-ink/70">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
