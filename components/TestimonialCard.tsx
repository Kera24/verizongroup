import { type Testimonial } from "@/lib/config";

export function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <div className="card h-full">
      <p className="text-sm text-slate-700">“{quote}”</p>
      <div className="mt-4">
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  );
}
