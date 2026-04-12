import Link from "next/link";

export function MobileCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
      <Link
        href="/contact#enroll"
        className="flex items-center justify-center rounded-full bg-brand-red px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(245,34,42,0.28)] transition hover:translate-y-[-1px]"
      >
        Enroll Now
      </Link>
    </div>
  );
}
