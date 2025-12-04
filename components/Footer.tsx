import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/config";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-muted/60">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <p className="text-xl font-semibold text-primary">{COMPANY.name}</p>
          <p className="text-sm text-slate-600">{COMPANY.tagline}</p>
          <div className="text-sm text-slate-600">
            <p>{COMPANY.address}</p>
            <p>{COMPANY.phone}</p>
            <p>{COMPANY.email}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-primary">Quick links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-accent">
              Privacy
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-primary">Connect</p>
          <div className="mt-3 flex items-center gap-3 text-slate-600">
            <Link href="#" aria-label="LinkedIn" className="rounded-full border border-slate-200 p-2 hover:border-accent">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter" className="rounded-full border border-slate-200 p-2 hover:border-accent">
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} Verizon Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
