interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="card h-full p-6">
      <p className="text-slate-700">“{quote}”</p>
      <div className="mt-4 text-sm font-semibold text-slate-900">{name}</div>
      <div className="text-xs text-slate-500">{role}</div>
    </div>
  );
}
