import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteConfig.name} | Drive with Confidence`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Drive with Confidence`,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: "/assets/OG_IMAGE.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Drive with Confidence`,
    description: siteConfig.description,
    images: ["/assets/OG_IMAGE.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", geist.variable, "font-sans")}>
      <body className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileCta />
      </body>
    </html>
  );
}
