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
    </div>
  );
}
