"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG, navigationLinks } from "@/lib/config";

const NavLinks = () => (
  <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
    {navigationLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-sm font-medium text-slate-700 transition hover:text-primary"
      >
        {link.label}
      </Link>
    ))}
  </div>
);

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="container-section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold">
            VG
          </div>
          <div>
            <p className="text-lg font-semibold text-primary">{SITE_CONFIG.name}</p>
            <p className="text-xs text-slate-500">Digital Infrastructure</p>
          </div>
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          <NavLinks />
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Link href="/request-service" className="btn-primary">
            Request a Proposal
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-slate-100"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pb-6 shadow-soft">
          <div className="flex flex-col gap-4 pt-4">
            <NavLinks />
            <Link
              href="/request-service"
              className="btn-primary w-full text-center"
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
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { COMPANY } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/book-meeting", label: "Book Meeting" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-soft">
            VG
          </div>
          <div className="leading-tight">
            <div>{COMPANY.name}</div>
            <p className="text-xs font-medium text-slate-500">Digital Services</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <PrimaryButton href="/request-service">Request a Proposal</PrimaryButton>
        </div>
        <div className="md:hidden">
          <Link
            href="/request-service"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-soft"
          >
            Request
          </Link>
        </div>
      </div>
    </header>
  );
}

type PrimaryButtonProps = {
  href: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function PrimaryButton({ href, children }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/90"
    >
      {children}
    </Link>
  );
}
