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
