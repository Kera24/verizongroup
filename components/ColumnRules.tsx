/**
 * §4 — the structural motif: hairline vertical column rules running the
 * full height of a section. Decorative only; hidden from screen readers.
 * `hero` marks the rules for the GSAP entrance draw (data-hero-rule).
 * Used in the hero and at most one or two other sections.
 */
export function ColumnRules({ hero = false }: { hero?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="container h-full">
        <div className="relative h-full">
          {[0, 25, 50, 75, 100].map((pct) => (
            <span
              key={pct}
              data-hero-rule={hero || undefined}
              className={`absolute top-0 h-full w-px bg-hairline [transform-origin:top] ${
                pct === 25 || pct === 75 ? "hidden md:block" : ""
              }`}
              style={{ left: `${pct}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
