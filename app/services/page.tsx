import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { serviceCategories } from "@/lib/config";

export const metadata = {
  title: "Our Services | Verizon Group",
  description: "Explore Moodle, hosting, cloud infrastructure, and managed support services.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section className="gradient-bg">
        <div className="container-section space-y-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">What we offer</p>
          <h1 className="text-4xl font-bold text-primary">Our Services</h1>
          <p className="mx-auto max-w-3xl text-base text-slate-600">
            From full-service Moodle implementations to cloud-native DevOps, Verizon Group provides the expertise and managed
            services that keep your platforms reliable, secure, and ready to scale.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-section space-y-10">
          <SectionHeader
            title="Service categories"
            subtitle="Delivery you can rely on"
            align="left"
            action={<p className="max-w-2xl text-base text-slate-600">We embed with your teams to deliver fast and support long term.</p>}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <div key={category.title} className="card space-y-3 p-6">
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        description="Book a consultation or submit your requirements and we’ll map the right solution for you."
        primaryHref="/book-meeting"
        primaryLabel="Book a Meeting"
        secondaryHref="/request-service"
        secondaryLabel="Request Service"
      />
    </div>
  );
}
