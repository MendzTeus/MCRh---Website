import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/content/properties";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet MCRh, Manchester short-let apartment and property management specialists.",
};

const chambers = properties.find((p) => p.slug === "chambers") ?? properties[0]!;
const woodStreet =
  properties.find((p) => p.slug === "wood-street") ?? properties[1]!;

const values = [
  ["verified_user", "Integrity", "Transparent communication and honest relationships with owners and guests alike."],
  ["location_on", "Local Insight", "Deep-rooted knowledge of Manchester's neighborhoods, maximizing property potential."],
  ["vpn_key", "Discretion", "Your property, your business. We handle every detail with complete professionalism and privacy."],
  ["diamond", "Excellence", "Five-star standards applied consistently, from listing photography to final housekeeping check."],
];

export default function AboutPage() {
  return (
    <>
      <header className="mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-[160px] md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="text-center md:col-span-8 md:col-start-3">
            <p className="mb-6 font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              Our Story
            </p>
            <h1 className="mb-8 font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
              Who we are
            </h1>
            <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              We are a Manchester-based short-let and property management
              specialist, built on years of refined Airbnb expertise. We partner
              with landlords to transform investments into high-yield income,
              delivered with a personal, boutique touch.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-container-max border-t border-outline-variant/30 px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-[160px] grid grid-cols-1 items-center gap-gutter md:grid-cols-2">
          <div className="order-2 pr-0 md:order-1 md:pr-12">
            <h2 className="mb-6 font-headline-md text-headline-md text-primary">
              Exquisite short-stay apartments
            </h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              Our curated portfolio represents the pinnacle of Manchester
              living. Each residence is meticulously selected and maintained to
              offer an unparalleled guest experience, blending residential
              comfort with editorial design.
            </p>
            <Link
              className="inline-flex items-center space-x-2 border-b border-secondary pb-1 font-label-caps text-label-caps text-secondary uppercase tracking-widest transition-colors hover:text-primary"
              href="/propriedades"
            >
              <span>View Portfolio</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="editorial-image order-1 aspect-[4/3] md:order-2">
            <Image
              src={chambers.gallery[0]?.src ?? chambers.imageSrc}
              alt={chambers.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-2">
          <div className="editorial-image aspect-[4/3]">
            <Image
              src={woodStreet.gallery[0]?.src ?? woodStreet.imageSrc}
              alt={woodStreet.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="pl-0 md:pl-12">
            <h2 className="mb-6 font-headline-md text-headline-md text-primary">
              Experts in property management
            </h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              For landlords, we offer a full-service management solution that
              takes the operational burden away entirely. Listing, pricing,
              housekeeping, maintenance and guest communications are handled
              with the same care we apply to every stay.
            </p>
            <Link
              className="inline-flex items-center space-x-2 border-b border-secondary pb-1 font-label-caps text-label-caps text-secondary uppercase tracking-widest transition-colors hover:text-primary"
              href="/servicos/gestao"
            >
              <span>Our Services</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              The Manchester Lens
            </p>
            <h2 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
              Knowing the city inside and out.
            </h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              Our profound local insight is our greatest asset. We navigate
              Manchester&apos;s dynamic landscape with precision, allowing us to
              position properties perfectly and curate experiences that resonate
              with discerning guests.
            </p>
          </div>
          <div className="editorial-image aspect-[16/10] md:col-span-6 md:col-start-7">
            <Image
              src={chambers.gallery[2]?.src ?? chambers.imageSrc}
              alt="Atmospheric view of Manchester hospitality"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
        <h2 className="mb-16 font-headline-md text-headline-md text-primary">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {values.map(([icon, title, body]) => (
            <div key={title} className="border-t border-outline-variant/30 pt-8">
              <span className="material-symbols-outlined mb-4 block text-3xl text-secondary">
                {icon}
              </span>
              <h3 className="mb-3 font-headline-sm text-headline-sm text-primary">
                {title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-container px-margin-mobile py-[160px] text-center text-on-primary md:px-margin-desktop">
        <h2 className="mb-8 font-display-lg-mobile text-display-lg-mobile text-on-primary md:font-display-lg md:text-display-lg">
          Partner with us.
        </h2>
        <p className="mx-auto mb-12 max-w-xl font-body-lg text-body-lg text-on-primary-container">
          Whether you are looking for a curated Manchester stay or a team to
          manage your property, we are here.
        </p>
        <Link
          className="inline-flex items-center justify-center border border-secondary-container px-8 py-4 font-label-caps text-label-caps text-secondary-container uppercase tracking-widest transition-colors hover:bg-secondary-container/10"
          href="/contacto"
        >
          Contact MCRh
        </Link>
      </section>
    </>
  );
}
