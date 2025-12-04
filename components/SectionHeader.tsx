interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`space-y-2 ${alignment}`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p>}
      <h2 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h2>
      {description && <p className="max-w-2xl text-sm text-slate-600 sm:text-base">{description}</p>}
    </div>
  );
}
