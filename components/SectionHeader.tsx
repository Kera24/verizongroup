import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
}

export function SectionHeader({ eyebrow, title, description, align = "left", actions }: SectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && <span className="badge">{eyebrow}</span>}
      <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-3xl">{title}</h2>
          {description && <p className="mt-2 text-slate-600">{description}</p>}
        </div>
        {actions && <div className="mt-4 md:mt-0">{actions}</div>}
      </div>
    </div>
  );
}
