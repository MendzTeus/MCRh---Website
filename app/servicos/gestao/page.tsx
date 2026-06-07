import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Management Services",
  description:
    "Short-let property management services in Manchester, from housekeeping and guest communications to listing optimisation.",
};

const services = [
  "Interior & Exterior Design Refurbishment",
  "General Maintenance",
  "Listing Optimisation",
  "Guest Communications",
  "Professional Housekeeping",
  "Guest Check-in and Checkout",
];

const process = [
  {
    num: "01",
    title: "Consult",
    body: "Initial assessment to understand your goals and evaluate the property's potential.",
  },
  {
    num: "02",
    title: "Prepare",
    body: "Styling, photography, and rigorous preparation to meet our luxury standards.",
  },
  {
    num: "03",
    title: "Launch",
    body: "Strategic multi-platform listing optimisation and targeted marketing rollout.",
  },
  {
    num: "04",
    title: "Manage",
    body: "Ongoing proactive care, guest relations, and financial reporting.",
  },
];

const whyUs = [
  {
    title: "Maximum Yield",
    body: "Strategic pricing and high occupancy rates driven by premium presentation.",
  },
  {
    title: "Peace of Mind",
    body: "Rigorous vetting, secure processes, and proactive maintenance protect your asset.",
  },
  {
    title: "Professional Care",
    body: "A dedicated team ensuring 5-star experiences and impeccable property condition.",
  },
];

export default function ManagementServicesPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 text-center md:px-16 lg:py-32">
        <span className="mb-6 block text-xs font-semibold tracking-[0.15em] text-brass uppercase">
          Management Services
        </span>
        <h1 className="mx-auto max-w-4xl font-serif text-[40px] font-normal leading-[1.1] text-midnight md:text-[64px] md:tracking-[-0.02em]">
          Property management, handled with care
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.6] text-charcoal">
          Expert short-let and comprehensive property management in Manchester.
          We curate experiences for discerning guests while maximising yields and
          providing absolute peace of mind for owners.
        </p>
      </section>

      {/* Editorial intro */}
      <section className="mx-auto max-w-[1280px] px-6 py-[120px] md:px-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="order-2 mt-12 lg:order-1 lg:col-span-5 lg:mt-0">
            <h2 className="mb-6 font-serif text-[32px] font-normal leading-[1.3] text-midnight">
              A Curated Approach
            </h2>
            <p className="mb-8 text-lg leading-[1.6] text-charcoal">
              Our comprehensive management services are designed for property
              owners who demand excellence. From rigorous tenant vetting to
              impeccable interior styling, we oversee every detail to ensure
              your asset performs flawlessly.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase transition-opacity hover:opacity-70"
            >
              Discover Our Services →
            </a>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-surface-container" />
          </div>
        </div>
      </section>

      {/* Services list */}
      <section
        id="services"
        className="mx-auto max-w-[1280px] px-6 py-[120px] md:px-16"
      >
        <div className="max-w-3xl">
          <h2 className="mb-12 font-serif text-[24px] font-normal leading-[1.4] text-midnight">
            Comprehensive Care
          </h2>
          <div className="border-t border-brass/30" />
          {services.map((service) => (
            <div key={service}>
              <div className="group flex items-center justify-between py-6">
                <h3 className="font-serif text-[24px] font-normal leading-[1.4] text-midnight transition-colors group-hover:text-brass-deep">
                  {service}
                </h3>
                <span className="text-outline-soft transition-colors group-hover:text-brass-deep">
                  +
                </span>
              </div>
              <div className="border-t border-brass/30" />
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-container-low py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <div className="mb-20 text-center">
            <span className="mb-4 block text-xs font-semibold tracking-[0.15em] text-brass uppercase">
              The Process
            </span>
            <h2 className="font-serif text-[32px] font-normal leading-[1.3] text-midnight">
              A Seamless Transition
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.num}
                className="relative border border-outline-soft/30 bg-background p-8"
              >
                <span className="absolute right-6 top-6 font-serif text-[64px] font-normal leading-none text-surface-variant/50">
                  {step.num}
                </span>
                <h4 className="relative z-10 mb-4 font-serif text-[24px] font-normal leading-[1.4] text-midnight">
                  {step.title}
                </h4>
                <p className="relative z-10 text-base leading-[1.6] text-charcoal">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us + CTA */}
      <section className="mx-auto max-w-[1280px] px-6 py-[120px] md:px-16">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-serif text-[32px] font-normal leading-[1.3] text-midnight">
              Why Entrust Us?
            </h2>
            <ul className="space-y-6 text-lg leading-[1.6] text-charcoal">
              {whyUs.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-1 text-brass">✓</span>
                  <span>
                    <strong>{item.title}:</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center bg-midnight p-12 text-center">
            <h3 className="mb-6 font-serif text-[32px] font-normal leading-[1.3] text-white">
              Elevate Your Asset
            </h3>
            <p className="mb-10 max-w-md text-base leading-[1.6] text-white/70">
              Connect with our management team to discuss how we can tailor our
              services to your property.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center border border-brass px-8 py-4 text-xs font-semibold tracking-[0.15em] text-brass uppercase transition-colors hover:bg-brass/10"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
