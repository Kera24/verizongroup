import Link from "next/link";
import { StarSpark } from "@/components/brand/StarMark";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const CTA_STARS = [
  [6, 22, 0.5], [16, 74, 0.3], [30, 38, 0.45], [46, 82, 0.35], [58, 18, 0.5],
  [72, 62, 0.3], [84, 30, 0.45], [94, 76, 0.4], [90, 12, 0.3], [38, 12, 0.35],
] as const;

export function CTASection({ title, description, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-hero bg-inverse-surface px-7 py-14 text-inverse shadow-elevation-4 md:px-14 md:py-16">
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            {CTA_STARS.map(([x, y, o], i) => (
              <path
                key={i}
                d="M0 -1.4 Q 0 0 1.4 0 Q 0 0 0 1.4 Q 0 0 -1.4 0 Q 0 0 0 -1.4 Z"
                transform={`translate(${x} ${y}) scale(${0.5 + o})`}
                fill="rgb(168 184 214)"
                opacity={o * 0.5}
              />
            ))}
          </svg>
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 md:max-w-xl">
              <StarSpark className="h-4 w-4 text-steel-300" aria-hidden />
              <h2 className="text-h2 text-inverse">{title}</h2>
              <p className="max-w-measure text-base leading-relaxed text-inverse-muted">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={primaryCta.href} className="btn-inverse">
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-outline-inverse">
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
