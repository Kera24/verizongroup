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
      <div className="container space-y-9 pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="flex items-baseline justify-between gap-6">
          <Breadcrumbs trail={trail} />
          <p className="slug hidden sm:block" aria-hidden>
            {slugNote}
          </p>
        </div>
        <h1 className="max-w-[18ch] font-display text-display-l text-ink">{title}</h1>
        {capsule && <p className="max-w-[56ch] text-body-l text-grey">{capsule}</p>}
      </div>
    </header>
  );
}
