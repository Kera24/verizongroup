'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="section bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-teal-200 ring-1 ring-white/20">
              Managed learning & cloud infrastructure
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Complete digital infrastructure for your learning and business.
            </h1>
            <p className="text-lg text-slate-200">
              Verizon Group designs, deploys, and manages Moodle platforms, secure hosting, and cloud-native systems that keep your organisation always-on.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/request-service"
                className="inline-flex items-center justify-center rounded-lg bg-[#06B6D4] px-6 py-3 text-sm font-semibold text-slate-900 shadow-card transition hover:bg-[#0ea5c6]"
              >
                Request a Service
              </Link>
              <Link
                href="/book-meeting"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Book a Meeting
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
              alt="Cloud operations"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute -left-10 -top-10 hidden h-24 w-24 rounded-2xl bg-[#06B6D4]/50 blur-3xl lg:block" />
          <div className="absolute -bottom-10 -right-10 hidden h-24 w-24 rounded-2xl bg-white/40 blur-3xl lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
