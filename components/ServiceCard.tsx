import { LucideIcon, Cloud, GraduationCap, Server, Workflow } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  GraduationCap,
  Server,
  Workflow,
};

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
    </div>
  );
}
