import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-accent/10">
      <div className="section-container grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col justify-center gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-wide text-accent"
          >
            Verizon Group
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Complete digital infrastructure for your learning and business.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg text-slate-700"
          >
            End-to-end Moodle implementations, secure hosting, cloud infrastructure, and managed services crafted for education providers and enterprises.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/request-service" className="btn-primary text-center">
              Request a Service
            </Link>
            <Link href="/book-meeting" className="btn-secondary text-center">
              Book a Meeting
            </Link>
          </motion.div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div className="rounded-lg bg-white/70 p-3 shadow-sm">
              <p className="font-semibold text-primary">99.9% uptime</p>
              <p>Monitored hosting</p>
            </div>
            <div className="rounded-lg bg-white/70 p-3 shadow-sm">
              <p className="font-semibold text-primary">Education-first</p>
              <p>Moodle experts</p>
            </div>
            <div className="rounded-lg bg-white/70 p-3 shadow-sm">
              <p className="font-semibold text-primary">Secure by design</p>
              <p>Hardening & backups</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="card-shadow relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1400&q=80"
              alt="Cloud infrastructure dashboard"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 space-y-1 rounded-lg bg-white/80 p-4 text-sm text-primary shadow-lg">
              <p className="font-semibold">Managed learning cloud</p>
              <p className="text-slate-600">Secure hosting, proactive monitoring, and expert support for every release.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
