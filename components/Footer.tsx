import Link from "next/link";
import { SITE_CONFIG, navigationLinks } from "@/lib/config";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-section grid gap-10 py-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white font-bold">
              VG
            </div>
            <div>
              <p className="text-xl font-semibold text-primary">{SITE_CONFIG.name}</p>
              <p className="text-sm text-slate-500">{SITE_CONFIG.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-slate-600">
            We design, deploy, and manage digital infrastructure so your team can focus on delivering standout learning and
            business outcomes.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <h3 className="text-sm font-semibold text-primary">Contact</h3>
          <p>{SITE_CONFIG.contactEmail}</p>
          <p>{SITE_CONFIG.contactPhone}</p>
          <p>{SITE_CONFIG.location}</p>
          <div className="flex items-center gap-3 pt-2">
            <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:border-accent">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:border-accent">
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  );
}
