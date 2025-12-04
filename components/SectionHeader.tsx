import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: ReactNode;
}

export function SectionHeader({ title, subtitle, align = "center", action }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start"}`}>
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">{subtitle ?? ""}</p>
      <h2 className="text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
      {action && <div className="pt-2">{action}</div>}
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
