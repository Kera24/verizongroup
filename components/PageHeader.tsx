import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

/**
 * Standard route header: breadcrumb slug top-left, a mono annotation
 * top-right (the corner-slug treatment every route gets), then the
 * display headline and an answer-first capsule in plain language.
 */
export function PageHeader({
  trail,
  title,
  capsule,
  slugNote = "sydney, australia",
}: {
  trail: Crumb[];
  title: string;
  capsule?: string;
  slugNote?: string;
}) {
  return (
    <header className="border-b border-hairline">
      <div className="container pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="flex items-baseline justify-between gap-6">
          <Breadcrumbs trail={trail} />
          <p className="slug hidden sm:block" aria-hidden>
            {slugNote}
          </p>
        </div>
        {/* Two-column editorial header: headline left, capsule right,
            bottom-aligned — no dead right half. */}
        <div className="mt-9 grid items-end gap-x-6 gap-y-8 md:grid-cols-12">
          <h1
            className={`font-display text-display-l text-ink ${capsule ? "max-w-[14ch] md:col-span-7" : "max-w-[18ch] md:col-span-12"}`}
          >
            {title}
          </h1>
          {capsule && (
            <p className="max-w-[48ch] text-body-l text-grey md:col-span-5 md:col-start-8">
              {capsule}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
