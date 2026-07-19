"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { StarMark } from "@/components/brand/StarMark";
import { COMPANY, NAV_LINKS } from "@/lib/config";

/**
 * The top edge of the instrument frame (§6): mark + wordmark left,
 * quiet nav right, Contact as the single framed action.
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${COMPANY.name} — home`}
        >
          <StarMark className="h-8 w-auto text-ink" />
          <span className="font-display text-[0.9375rem] font-semibold uppercase tracking-[0.22em] text-ink">
            {COMPANY.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`py-1 font-sans text-sm transition-colors duration-micro ease-micro hover:text-ink ${
                  active ? "font-medium text-ink underline decoration-steel decoration-1 underline-offset-8" : "text-grey"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center rounded-sm border border-hairline-firm px-5 font-sans text-sm font-medium text-ink transition-colors duration-micro ease-micro hover:border-ink hover:bg-canvas-sunk"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-hairline-firm text-ink transition-colors duration-micro ease-micro hover:border-ink hover:bg-canvas-sunk md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {/* CSS-only expanding sheet (grid-rows trick); transitions collapse
          to instant under prefers-reduced-motion. */}
      <div
        className={`grid transition-[grid-template-rows] duration-layout ease-layout md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav id="mobile-nav" aria-label="Main" className="border-t border-hairline bg-canvas">
            <div className="container flex flex-col py-4">
              {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map((link, i) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? undefined : -1}
                    className={`flex items-baseline gap-4 border-b border-hairline py-4 font-sans text-base transition-colors duration-micro ease-micro last:border-b-0 hover:text-steel ${
                      active ? "font-medium text-ink" : "text-grey"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="slug w-7 shrink-0" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/request-service"
                className="btn-primary mt-5 w-full justify-center"
                tabIndex={open ? undefined : -1}
                onClick={() => setOpen(false)}
              >
                Start a project
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
