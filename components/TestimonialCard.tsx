interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="card-shadow h-full rounded-xl p-6">
      <p className="text-lg font-semibold text-primary">“{quote}”</p>
      <div className="mt-4 text-sm text-slate-600">
        <p className="font-semibold text-primary">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}
