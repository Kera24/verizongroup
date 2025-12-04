interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "";
  const descriptionAlignment = align === "center" ? "mx-auto" : "";

  return (
    <div className={`space-y-3 ${alignment}`}>
      {eyebrow && <p className="badge">{eyebrow}</p>}
      <h2 className="text-2xl font-semibold text-primary md:text-3xl">{title}</h2>
      {description && <p className={`max-w-3xl text-sm text-slate-600 md:text-base ${descriptionAlignment}`}>{description}</p>}
    </div>
  );
}
