import Link from "next/link";
import { COMPANY } from "@/lib/config";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container grid gap-10 py-12 md:grid-cols-4 md:gap-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 text-lg font-semibold text-primary">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-soft">VG</div>
            <div>
              <div>{COMPANY.name}</div>
              <p className="text-sm text-slate-600">{COMPANY.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            We design, deploy, and manage digital platforms that power education and enterprise outcomes.
          </p>
          <div className="mt-4 space-y-1 text-sm text-slate-700">
            <div>{COMPANY.address}</div>
            <div>Email: {COMPANY.email}</div>
            <div>Phone: {COMPANY.phone}</div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary">Quick Links</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-700">
            <Link className="block hover:text-accent" href="/">
              Home
            </Link>
            <Link className="block hover:text-accent" href="/services">
              Services
            </Link>
            <Link className="block hover:text-accent" href="/contact">
              Contact
            </Link>
            <Link className="block hover:text-accent" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary">Follow</h4>
          <div className="mt-3 flex items-center gap-3 text-slate-600">
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft transition hover:-translate-y-0.5 hover:text-accent">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft transition hover:-translate-y-0.5 hover:text-accent">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
