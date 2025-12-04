import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  items?: string[];
}

export default function ServiceCard({ title, description, icon, items }: ServiceCardProps) {
  return (
    <div className="card-shadow h-full rounded-xl p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-3">
        {icon && <div className="rounded-lg bg-accent/10 p-2 text-accent">{icon}</div>}
        <div>
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <p className="mt-2 text-sm text-slate-600">{description}</p>
        </div>
      </div>
      {items && (
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
