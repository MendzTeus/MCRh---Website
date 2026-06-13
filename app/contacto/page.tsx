import type { Metadata } from "next";
import Image from "next/image";
import { properties } from "@/content/properties";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MCRh for property enquiries or management services.",
};

const chambers = properties.find((p) => p.slug === "chambers") ?? properties[0]!;

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-container-max px-margin-mobile pb-section-gap pt-32 md:px-margin-desktop">
      <div className="mb-24 max-w-3xl md:mb-32">
        <h1 className="mb-8 font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
          Begin the conversation
        </h1>
        <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          Whether you&apos;re seeking a curated stay or expert management, our
          team is here to facilitate your next chapter in Manchester. Let us
          know how we can assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-16 flex flex-col gap-6 border-b border-outline-variant/50 sm:flex-row sm:gap-8">
            {[
              "Lettings Enquiries",
              "Property Management Enquiries",
              "General Contact",
            ].map((tab, index) => (
              <button
                key={tab}
                className={`pb-4 text-left font-label-caps text-label-caps sm:text-center ${
                  index === 0
                    ? "border-b-2 border-secondary text-on-surface"
                    : "border-b border-outline-variant text-outline"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form className="space-y-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <Field label="Full Name" name="name" type="text" />
              <Field label="Email Address" name="email" type="email" />
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <Field label="Phone Number (Optional)" name="phone" type="tel" />
              <label className="block">
                <span className="mb-3 block font-label-caps text-[10px] uppercase tracking-widest text-primary">
                  Property of Interest
                </span>
                <select className="w-full appearance-none rounded-lg border border-outline-variant/30 bg-surface-container-low px-4 py-4 font-body-md text-body-md text-on-surface outline-none transition-colors focus:border-primary">
                  <option>Chambers Residence</option>
                  <option>Wood Street</option>
                  <option>John Dalton Street</option>
                  <option>Other / Not Listed</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="mb-3 block font-label-caps text-[10px] uppercase tracking-widest text-primary">
                Your Message
              </span>
              <textarea
                className="w-full resize-none rounded-lg border border-outline-variant/30 bg-surface-container-low px-4 py-4 font-body-md text-body-md text-on-surface outline-none transition-colors focus:border-primary"
                rows={4}
              />
            </label>
            <div className="flex flex-col items-start justify-between gap-6 pt-8 sm:flex-row sm:items-center">
              <p className="flex items-center gap-2 font-body-md text-sm italic text-on-surface-variant/70">
                <span className="material-symbols-outlined text-base">
                  shield
                </span>
                Protected by invisible anti-spam.
              </p>
              <button
                className="ghost-btn flex items-center gap-3 font-label-caps text-label-caps text-primary uppercase tracking-widest"
                type="submit"
              >
                SEND ENQUIRY
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>

        <aside className="mt-24 lg:col-span-3 lg:col-start-10 lg:mt-0">
          <div className="sticky top-40 space-y-16">
            <div>
              <h3 className="mb-4 font-label-caps text-label-caps text-outline">
                Location
              </h3>
              <p className="font-body-md text-body-md leading-relaxed text-primary">
                MCRh Luxury Properties
                <br />
                {siteConfig.address}
                <br />
                Manchester
                <br />
                United Kingdom
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-label-caps text-label-caps text-outline">
                Operating Hours
              </h3>
              <p className="font-body-md text-body-md leading-relaxed text-primary">
                Monday - Friday
                <br />
                09:00 - 18:00
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-label-caps text-label-caps text-outline">
                Direct Contact
              </h3>
              <a
                className="group inline-flex items-center gap-3 font-body-md text-body-md text-primary transition-colors hover:text-secondary"
                href={siteConfig.whatsappUrl}
              >
                <span className="material-symbols-outlined">forum</span>
                <span className="border-b border-transparent transition-colors group-hover:border-secondary">
                  Message via WhatsApp
                </span>
              </a>
            </div>
            <div className="editorial-image h-48 w-full">
              <Image
                src={chambers.gallery[0]?.src ?? chambers.imageSrc}
                alt={chambers.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) {
  return (
    <label className="block">
      <span className="mb-3 block font-label-caps text-[10px] uppercase tracking-widest text-primary">
        {label}
      </span>
      <input
        className="w-full rounded-lg border border-outline-variant/30 bg-surface-container-low px-4 py-4 font-body-md text-body-md text-on-surface outline-none transition-colors focus:border-primary"
        name={name}
        type={type}
      />
    </label>
  );
}
