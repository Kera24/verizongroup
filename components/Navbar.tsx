"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/config";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold text-primary">
          Verizon Group
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-accent ${pathname === link.href ? "text-primary" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/request-service" className="btn-primary text-xs">
            Request a Proposal
          </Link>
        </nav>
        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-accent hover:text-accent md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="container flex flex-col gap-2 py-4 text-sm font-semibold text-slate-700">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 transition hover:bg-accent/10 hover:text-accent ${
                  pathname === link.href ? "text-primary" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-service"
              className="btn-primary w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
