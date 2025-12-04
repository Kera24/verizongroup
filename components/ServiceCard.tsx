import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
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
