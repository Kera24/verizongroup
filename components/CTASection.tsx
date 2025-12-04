import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTASection({ title, description, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="section bg-primary">
      <div className="container flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-primary via-primary to-[#0b1220] px-8 py-12 text-white shadow-soft md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 md:max-w-xl">
          <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>
          <p className="text-sm text-slate-200 md:text-base">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primaryCta.href} className="btn-primary bg-white text-primary hover:bg-slate-50">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-secondary border-white/30 bg-transparent text-white hover:border-white">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
