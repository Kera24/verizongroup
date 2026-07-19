import type { ReactNode } from "react";
import { StarSpark } from "@/components/brand/StarMark";

/**
 * The slug (§3): a small monospace annotation label in the form
 * `yoranix / services · 01 — discovery`. Labels every major section
 * and does most of the technical-instrument work.
 */
export function Slug({
  children,
  tone = "default",
  star = true,
  className = "",
  as: Tag = "p",
}: {
  children: ReactNode;
  /** default = grey on canvas · inverse = muted on ink bands */
  tone?: "default" | "inverse";
  star?: boolean;
  className?: string;
  as?: "p" | "span" | "div";
}) {
  return (
    <Tag
      className={`${tone === "inverse" ? "slug-inverse" : "slug"} flex items-center gap-2.5 ${className}`}
    >
      {star && (
        <StarSpark
          className={`h-2.5 w-2.5 shrink-0 ${tone === "inverse" ? "text-inverse-muted" : "text-steel"}`}
          aria-hidden
        />
      )}
      {children}
    </Tag>
  );
}
