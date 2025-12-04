import { Testimonial } from "@/lib/config";
import { Quote } from "lucide-react";

export function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <div className="card flex h-full flex-col gap-4 p-6">
      <Quote className="h-6 w-6 text-accent" />
      <p className="text-base text-slate-700">“{quote}”</p>
      <div className="mt-auto pt-2 text-sm font-semibold text-primary">{name}</div>
      <div className="text-xs text-slate-500">{role}</div>
interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="card h-full bg-white">
      <p className="text-slate-700">“{quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
        <div>
          <p className="text-sm font-semibold text-primary">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
