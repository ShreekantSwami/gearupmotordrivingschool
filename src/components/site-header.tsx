import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="site-shell flex items-center justify-between gap-6 py-4">
        <div className="flex items-center">
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/full-logo.png"
              height={50}
              width={150}
              alt="Gear Up Logo"
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <Link
            href="/programs"
            className={buttonVariants({
              variant: "ghost",
              className: "rounded-full",
            })}
          >
            View Programs
          </Link>
          <Link
            href="/contact#enroll"
            className={buttonVariants({
              className:
                "rounded-full bg-brand-red !text-white hover:bg-brand-red/90",
            })}
          >
            Enroll Now
          </Link>
        </div>
      </div>

      <div className="border-t lg:hidden">
        <nav className="site-shell flex gap-5 overflow-x-auto py-3 text-sm font-medium text-muted-foreground">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
