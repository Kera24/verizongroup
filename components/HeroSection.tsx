"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-bg">
      <div className="container-section grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-accent shadow-soft">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Trusted managed services for learning platforms
          </div>
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">
            Complete digital infrastructure for your learning and business.
          </h1>
          <p className="text-lg text-slate-600">
            {SITE_CONFIG.tagline} We design, deploy, and maintain Moodle, hosting, and cloud architectures built for performance
            and peace of mind.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/request-service" className="btn-primary">
              Request a Service
            </Link>
            <Link href="/book-meeting" className="btn-secondary">
              Book a Meeting
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              24/7 monitoring
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Education-first expertise
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-soft border border-slate-100 bg-white">
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80"
              alt="Cloud infrastructure"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 rounded-2xl bg-white/80 p-4 backdrop-blur shadow-lg">
              <p className="text-sm font-semibold text-primary">Managed Services Dashboard</p>
              <p className="text-xs text-slate-600">
                Uptime, performance metrics, security checks, and live support at your fingertips.
              </p>
              <div className="flex gap-2 text-xs">
                {['99.95% uptime', 'SOC2-ready', 'Global CDN'].map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
