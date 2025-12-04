import { LucideIcon, Cloud, GraduationCap, Server, Workflow } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  GraduationCap,
  Server,
  Workflow,
};
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: keyof typeof iconMap;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = icon ? iconMap[icon] : Cloud;
  return (
    <div className="card p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
  icon: ReactNode;
  items?: string[];
}

export function ServiceCard({ title, description, icon, items }: ServiceCardProps) {
  return (
    <div className="card h-full space-y-4">
      <div className="flex items-center gap-3 text-primary">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-slate-600">{description}</p>
      {items && (
        <ul className="space-y-2 text-sm text-slate-700">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
