"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { StarMark } from "@/components/brand/StarMark";
import { COMPANY, NAV_LINKS } from "@/lib/config";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/90 backdrop-blur">
      <div className="container flex items-center justify-between py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
          aria-label={`${COMPANY.name} — home`}
        >
          <StarMark className="h-7 w-auto text-ink" />
          <span className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-ink">
            {COMPANY.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-sm py-1 transition-colors duration-fast ease-standard hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring ${
                  active
                    ? "text-ink underline decoration-link decoration-2 underline-offset-8"
                    : "text-ink-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/request-service" className="btn-primary !min-h-10 px-4 text-xs">
            Request a Proposal
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-border text-ink transition-colors duration-fast ease-standard hover:border-border-strong hover:bg-canvas-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {/* CSS-only expanding sheet (grid-rows trick); transitions are disabled
          globally under prefers-reduced-motion. */}
      <div
        className={`grid transition-[grid-template-rows] duration-slow ease-standard md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav id="mobile-nav" aria-label="Main" className="border-t border-border bg-canvas">
            <div className="container flex flex-col gap-1 py-4 text-sm font-medium">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? undefined : -1}
                    className={`rounded px-3 py-3 transition-colors duration-fast ease-standard hover:bg-canvas-subtle hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-focus-ring ${
                      active ? "bg-canvas-subtle text-ink" : "text-ink-muted"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/request-service"
                className="btn-primary mt-2 w-full justify-center"
                tabIndex={open ? undefined : -1}
                onClick={() => setOpen(false)}
              >
                Request a Proposal
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
