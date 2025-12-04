"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
}

export function HeroSection({ headline, subheadline, primaryCta, secondaryCta, imageUrl }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="badge">Verizon Group</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-primary md:text-4xl lg:text-5xl">{headline}</h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-600">{subheadline}</p>
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
            <Link href="#services" className="text-sm font-semibold text-primary underline-offset-8 hover:text-accent hover:underline">
              View Services
            </Link>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-soft md:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              "Education-first expertise",
              "Managed hosting & monitoring",
              "Security-first architecture",
              "Analytics & reporting",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-primary shadow-soft">
            <img
              src={
                imageUrl ||
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              }
              alt="Cloud infrastructure"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm uppercase tracking-wide text-accent">Managed platform experts</p>
              <p className="mt-2 text-lg font-semibold">Moodle, cloud, and DevOps handled end-to-end.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
