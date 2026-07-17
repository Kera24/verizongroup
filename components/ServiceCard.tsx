import { StarSpark } from "@/components/brand/StarMark";
import type { Service } from "@/lib/config";

export function ServiceCard({ title, description, icon: Icon, items }: Service) {
  return (
    <div className="card card-hover h-full">
      <div className="flex h-11 w-11 items-center justify-center rounded bg-secondary text-ink-secondary">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-5 text-h4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
      {items && (
        <ul className="mt-4 space-y-2.5 text-sm text-ink-secondary">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <StarSpark className="mt-1 h-2.5 w-2.5 shrink-0 text-link" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
