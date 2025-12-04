import Link from 'next/link';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CTASection({ title, subtitle, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="card relative overflow-hidden px-6 py-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4]/10 via-white to-[#06B6D4]/10" />
          <div className="relative space-y-4">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h3>
            <p className="text-base text-slate-600">{subtitle}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-lg bg-[#06B6D4] px-6 py-3 text-sm font-semibold text-slate-900 shadow-card transition hover:bg-[#0ea5c6]"
              >
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
