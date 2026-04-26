"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  MapPin,
  Shield,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig, trustSignals } from "@/data/site";

interface HomeHeroProps {
  rating: number | string;
  ratingCount: number | string;
}

export function HomeHero({ rating, ratingCount }: HomeHeroProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden"
    >
      {/* Background mesh/gradients for Stripe-like feel */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 bg-gradient-to-tr from-brand-red/20 via-brand-yellow/10 to-transparent blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="site-shell relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/50 backdrop-blur-md px-3 py-1 text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-red" />
            Confidence-first driving school in {siteConfig.locationShort}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-7xl">
            Drive with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">
              confidence
            </span>{" "}
            and independence.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Gear Up Motor Driving School, led by {siteConfig.founder}, helps
            learners, especially women, build real independence through safe,
            motivating training for two-wheelers and four-wheelers.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact#enroll"
              className={buttonVariants({
                size: "lg",
                className:
                  "rounded-full bg-brand-red !text-white hover:bg-brand-red/90 h-12 px-8 text-base shadow-lg shadow-brand-red/25 transition-transform hover:-translate-y-0.5",
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
                  "rounded-full h-12 px-8 text-base bg-background/50 backdrop-blur-sm",
              })}
            >
              View Programs
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-red" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1, opacity }}
          className="relative hidden lg:block w-full max-w-md mx-auto lg:ml-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-800 p-1 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
            <div className="relative rounded-[22px] bg-slate-950/50 backdrop-blur-xl p-8 text-white border border-white/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-white text-sm">
                    Gear Up Driving School
                  </p>
                  <p className="text-slate-400 mt-2 text-sm max-w-[200px]">
                    From "I can't drive" to "I drive with confidence."
                  </p>
                </div>
                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                  <Shield className="h-8 w-8 text-brand-yellow" />
                </div>
              </div>

              <div className="mt-10 grid gap-4 grid-cols-2">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <Star className="h-6 w-6 text-brand-yellow mb-3" />
                  <div className="font-bold text-lg text-white mt-2 flex items-center gap-2">
                    {rating}{" "}
                    <Star className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    From {ratingCount} reviews
                  </p>
                </div>
                <div className="rounded-2xl bg-brand-red/10 border border-brand-red/20 p-5">
                  <Car className="h-6 w-6 text-brand-red mb-3" />
                  <p className="text-lg font-semibold text-white leading-tight">
                    2W & 4W
                  </p>
                  <p className="text-xs text-brand-red/70 mt-1">
                    Manual & Auto
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            }}
            className="absolute -right-8 -bottom-8 rounded-2xl bg-white p-5 shadow-xl border border-slate-100 flex items-center gap-4 min-w-[200px]"
          >
            <div className="h-10 w-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">
                Local Experts
              </p>
              <p className="text-xs text-slate-500">
                {siteConfig.locationShort}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
