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
          </div>
        </div>
      </div>
    </section>
  );
}
