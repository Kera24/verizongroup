interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-[#06B6D4]">{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-base text-slate-600">{subtitle}</p>}
    </div>
  );
}
