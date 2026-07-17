import { StarSpark } from "@/components/brand/StarMark";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
}

export function SectionHeader({ eyebrow, title, description, align = "left", inverse = false }: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className={inverse ? "eyebrow-inverse" : "eyebrow"}>
          <StarSpark className={`h-3 w-3 ${inverse ? "text-steel-300" : "text-link"}`} aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-h2 ${inverse ? "text-inverse" : ""}`}>{title}</h2>
      {description && (
        <p
          className={`max-w-measure text-base leading-relaxed ${centered ? "mx-auto" : ""} ${
            inverse ? "text-inverse-muted" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
