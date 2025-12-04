import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="section-space">
      <div className="container-section">
        <div className="card flex flex-col items-start gap-6 bg-primary px-8 py-10 text-white shadow-soft lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Let’s collaborate</p>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-base text-slate-100">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary bg-white text-primary shadow-lg shadow-white/30 hover:shadow-xl">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link href={secondaryHref} className="btn-secondary border-white/30 bg-transparent text-white hover:border-white">
                {secondaryLabel}
              </Link>
            )}
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTASection({ title, description, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-12 text-white shadow-soft md:px-12 md:py-16">
          <div className="absolute right-10 top-10 hidden h-32 w-32 rounded-full bg-accent/20 blur-3xl md:block" />
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>
              <p className="mt-3 text-lg text-slate-100">{description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Link href={primaryCta.href} className="btn-primary bg-white text-primary hover:text-primary">
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary bg-transparent text-white hover:text-accent">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
