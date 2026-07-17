import { StarSpark } from "@/components/brand/StarMark";
import { type Testimonial } from "@/lib/config";

export function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <figure className="card card-hover flex h-full flex-col">
      <StarSpark className="h-4 w-4 text-link" aria-hidden />
      <blockquote className="mt-4 flex-1">
        <p className="font-display text-lg leading-snug text-ink">“{quote}”</p>
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-semibold text-ink">{name}</p>
        <p className="mt-0.5 text-sm text-ink-muted">{role}</p>
      </figcaption>
    </figure>
  );
}
