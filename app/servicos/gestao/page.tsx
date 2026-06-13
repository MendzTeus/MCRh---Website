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
  ["01", "Consult", "Initial assessment to understand your goals and evaluate the property's potential."],
  ["02", "Prepare", "Styling, photography, and rigorous preparation to meet our luxury standards."],
  ["03", "Launch", "Strategic multi-platform listing optimization and targeted marketing rollout."],
  ["04", "Manage", "Ongoing proactive care, guest relations, and financial reporting."],
];

export default function ManagementServicesPage() {
  return (
    <>
      <section className="mx-auto flex max-w-container-max flex-col items-center px-margin-mobile py-20 pt-[160px] text-center md:px-margin-desktop lg:py-32 lg:pt-[180px]">
        <span className="mb-6 block font-label-caps text-label-caps text-secondary uppercase tracking-widest">
          Management Services
        </span>
        <h1 className="mb-8 max-w-4xl font-display-lg-mobile text-display-lg-mobile text-primary-container md:font-display-lg md:text-display-lg">
          Property management, handled with care
        </h1>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Expert short-let and comprehensive property management in Manchester.
          We curate experiences for discerning guests while maximizing yields
          and providing absolute peace of mind for owners.
        </p>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="order-2 mt-12 lg:order-1 lg:col-span-5 lg:mt-0">
            <h2 className="mb-6 font-headline-md text-headline-md text-primary-container">
              A Curated Approach
            </h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              Our comprehensive management services are designed for property
              owners who demand excellence. From rigorous tenant vetting to
              impeccable interior styling and rigorous maintenance, we oversee
              every detail to ensure your asset performs flawlessly and retains
              its premium allure.
            </p>
            <a
              className="inline-flex items-center space-x-2 font-label-caps text-label-caps text-secondary uppercase tracking-widest transition-opacity hover:opacity-70"
              href="#services"
            >
              <span>Discover Our Services</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <div className="aspect-square w-full rounded-lg bg-surface-container" />
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop"
        id="services"
      >
        <div className="max-w-3xl">
          <h2 className="mb-12 font-headline-sm text-headline-sm text-primary-container">
            Comprehensive Care
          </h2>
          <div className="border-t border-secondary opacity-30" />
          {services.map((service) => (
            <div key={service}>
              <div className="group flex items-center justify-between py-6">
                <h3 className="font-headline-sm text-headline-sm text-primary-container transition-colors group-hover:text-secondary">
                  {service}
                </h3>
                <span className="material-symbols-outlined text-outline-variant transition-colors group-hover:text-secondary">
                  add
                </span>
              </div>
              <div className="border-t border-secondary opacity-30" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-section-gap bg-surface-container-low py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-20 text-center">
            <span className="mb-4 block font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              The Process
            </span>
            <h2 className="font-headline-md text-headline-md text-primary-container">
              A Seamless Transition
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, body]) => (
              <div
                key={number}
                className="relative border border-outline-variant/30 bg-surface p-8"
              >
                <span className="absolute right-6 top-6 font-display-lg text-display-lg text-surface-variant/50">
                  {number}
                </span>
                <h4 className="relative z-10 mb-4 font-headline-sm text-headline-sm text-primary-container">
                  {title}
                </h4>
                <p className="relative z-10 font-body-md text-body-md text-on-surface-variant">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-headline-md text-headline-md text-primary-container">
              Why Entrust Us?
            </h2>
            <ul className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              {[
                ["Maximum Yield", "Strategic pricing and high occupancy rates driven by premium presentation."],
                ["Peace of Mind", "Rigorous vetting, secure processes, and proactive maintenance protect your asset."],
                ["Professional Care", "A dedicated team ensuring 5-star experiences and impeccable property condition."],
              ].map(([title, body]) => (
                <li key={title} className="flex items-start">
                  <span className="material-symbols-outlined mr-4 mt-1 text-secondary">
                    check
                  </span>
                  <span>
                    <strong>{title}:</strong> {body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center bg-primary-container p-12 text-center">
            <h3 className="mb-6 font-headline-md text-headline-md text-on-primary">
              Elevate Your Asset
            </h3>
            <p className="mb-10 max-w-md font-body-md text-body-md text-on-primary-container">
              Connect with our management team to discuss how we can tailor our
              services to your property.
            </p>
            <Link
              className="border border-secondary-container px-8 py-4 font-label-caps text-label-caps text-secondary-container uppercase tracking-widest transition-colors hover:bg-secondary-container/10"
              href="/contacto"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
