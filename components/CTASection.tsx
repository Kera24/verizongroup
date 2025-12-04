import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
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
