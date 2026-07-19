import { StarSpark } from "@/components/brand/StarMark";
import type { Faq } from "@/lib/config";

/**
 * §7.8 — numbered FAQ rows on hairline dividers, built on <details> so
 * questions and answers work (and are crawlable) without JavaScript.
 * The star marker rotates 45° on open; height animates 320ms where the
 * browser supports it. Keyboard operable natively via <summary>.
 */
export function FaqList({
  faqs,
  defaultOpenFirst = false,
  startIndex = 0,
}: {
  faqs: Faq[];
  defaultOpenFirst?: boolean;
  startIndex?: number;
}) {
  return (
    <div className="border-y border-hairline">
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          className="faq-item group border-b border-hairline last:border-b-0"
          open={defaultOpenFirst && index === 0}
        >
          <summary className="xrow flex min-h-11 cursor-pointer list-none items-baseline gap-5 py-6 pl-6 pr-1 text-left transition-colors duration-micro ease-micro hover:text-steel [&::-webkit-details-marker]:hidden">
            <span className="slug w-8 shrink-0 tabular" aria-hidden>
              {String(startIndex + index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-display text-[1.1875rem] font-medium leading-snug text-ink">
              {faq.question}
            </span>
            <StarSpark
              className="faq-marker h-3 w-3 shrink-0 translate-y-[-0.1em] self-center text-steel"
              aria-hidden
            />
          </summary>
          <div className="pb-7 pl-6 sm:pl-[4.75rem]">
            <p className="max-w-measure text-body text-grey">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
