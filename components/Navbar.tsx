'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';
import { Menu, X } from 'lucide-react';

const linkBase = 'px-3 py-2 text-sm font-medium rounded-md transition-colors';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold text-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-card">
            VG
          </div>
          <div>
            <div className="text-lg">{siteConfig.name}</div>
            <p className="text-xs text-slate-500">{siteConfig.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {siteConfig.navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBase} ${active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/request-service"
            className="ml-2 inline-flex items-center justify-center rounded-lg bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-[#0891b2]"
          >
            Request a Proposal
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container flex flex-col gap-2 py-3">
            {siteConfig.navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`${linkBase} ${active ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/request-service"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-[#0891b2]"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
