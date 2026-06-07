import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/content/properties";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Explore MCRh short-stay apartments across Manchester, including City Centre, Ancoats and Old Trafford.",
};

export default function PropertiesPage() {
  return (
    <main className="pt-32">
      {/* Editorial header */}
      <section className="mx-auto max-w-[1280px] px-6 pb-[120px] md:px-16">
        <div className="mb-16 max-w-3xl">
          <h1 className="font-serif text-[40px] font-normal leading-[1.2] tracking-[-0.01em] text-midnight md:text-[64px] md:leading-[1.1] md:tracking-[-0.02em]">
            Curated Manchester stays
          </h1>
          <p className="mt-6 font-serif text-[28px] font-normal leading-[1.4] text-charcoal">
            A handpicked selection of premium short-let apartments in the heart
            of Manchester.
          </p>
        </div>

        {/* Filter chips — visual only */}
        <div className="mb-16 flex flex-wrap items-center gap-4">
          {["Area", "Guests", "Bedrooms", "Availability"].map((filter) => (
            <div
              key={filter}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-outline-soft px-4 py-2 transition-colors hover:bg-surface-variant"
            >
              <span className="text-xs font-semibold tracking-[0.15em] text-midnight uppercase">
                {filter}
              </span>
            </div>
          ))}
          <div className="ml-auto text-sm text-charcoal">
            {properties.length} Properties
          </div>
        </div>

        {/* Staggered 2-column grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {properties.map((property, i) => (
            <article
              key={property.slug}
              className={`group flex flex-col gap-4${i % 2 === 1 ? " md:mt-16" : ""}`}
            >
              <Link
                href={`/propriedades/${property.slug}`}
                className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-surface-variant"
              >
                <Image
                  src={property.imageSrc}
                  alt={property.imageAlt}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase backdrop-blur">
                    Available
                  </span>
                </div>
              </Link>
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-serif text-[24px] font-normal leading-[1.4] text-midnight">
                    {property.name}
                  </h2>
                  <span className="text-sm text-charcoal">{property.area}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded border border-outline-soft px-2 py-1 text-xs text-charcoal">
                    {property.bedrooms} Bed
                  </span>
                  <span className="rounded border border-outline-soft px-2 py-1 text-xs text-charcoal">
                    {property.maxGuests} guests
                  </span>
                  <span className="rounded border border-outline-soft px-2 py-1 text-xs text-charcoal">
                    {property.bathrooms} bath
                  </span>
                </div>
                <Link
                  href={`/propriedades/${property.slug}`}
                  className="mt-2 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-midnight uppercase transition-colors hover:text-brass-deep"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Map section */}
        <section className="mt-[120px] border-t border-outline-soft pt-[120px]">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-6 font-serif text-[40px] font-normal leading-[1.2] tracking-[-0.01em] text-midnight md:text-[64px] md:leading-[1.1] md:tracking-[-0.02em]">
              Explore stays across Manchester
            </h2>
            <p className="font-serif text-[28px] font-normal leading-[1.4] text-charcoal">
              Discover our collection across Manchester&apos;s most iconic
              neighbourhoods.
            </p>
          </div>
          <div className="relative aspect-[21/9] w-full cursor-crosshair overflow-hidden rounded-lg border border-outline-soft bg-background">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#0e1a2b 0.5px, transparent 0.5px)",
                backgroundSize: "24px 24px",
              }}
            />
            {properties.map((property, i) => (
              <div
                key={property.slug}
                className="group/marker absolute"
                style={{
                  left: `${20 + ((i * 13) % 60)}%`,
                  top: `${20 + ((i * 19) % 55)}%`,
                }}
              >
                <div className="h-4 w-4 animate-pulse rounded-full bg-brass shadow-lg" />
                <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-midnight px-3 py-1 text-[10px] font-semibold tracking-wider text-white opacity-0 transition-opacity group-hover/marker:opacity-100">
                  {property.area}
                </div>
              </div>
            ))}
            <div className="absolute bottom-6 right-6 rounded border border-outline-soft bg-background/90 px-4 py-2 backdrop-blur">
              <span className="text-[10px] font-semibold tracking-[0.15em] text-charcoal uppercase">
                Interactive Map View
              </span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
