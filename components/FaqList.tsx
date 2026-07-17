import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/config";

/**
 * Server-rendered, dependency-free FAQ accordion built on <details> so
 * questions and answers work (and are crawlable) without JavaScript.
 * Opening animates only where the browser supports it and motion is allowed.
 */
export function FaqList({ faqs, defaultOpenFirst = false }: { faqs: Faq[]; defaultOpenFirst?: boolean }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((faq, index) => (
        <details key={faq.question} className="faq-item group" open={defaultOpenFirst && index === 0}>
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-h4 font-medium text-ink transition-colors duration-fast ease-standard hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-ink-muted transition-transform duration-base ease-standard group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="max-w-measure pb-6 text-base leading-relaxed text-ink-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
