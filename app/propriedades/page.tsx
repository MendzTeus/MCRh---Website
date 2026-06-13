import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/content/properties";

export const metadata: Metadata = {
  title: "Properties",
  description: "Explore MCRh short-stay apartments across Manchester.",
};

export default function PropertiesPage() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-[160px] md:px-margin-desktop">
      <div className="mb-16 max-w-3xl">
        <p className="mb-6 font-label-caps text-label-caps text-secondary uppercase tracking-widest">
          Book Now
        </p>
        <h1 className="mb-8 font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
          Curated Manchester stays
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          A handpicked selection of premium short-let residences in the heart of
          Manchester.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {properties.slice(0, 6).map((property, index) => (
          <article
            key={property.slug}
            className={`group${index % 2 === 1 ? " md:mt-16" : ""}`}
          >
            <Link
              className="editorial-image mb-4 block aspect-[16/10]"
              href={`/propriedades/${property.slug}`}
            >
              <Image
                src={property.imageSrc}
                alt={property.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  {property.name}
                </h2>
                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                  {property.area}
                </p>
              </div>
              <Link
                className="shrink-0 border-b border-primary pb-1 font-label-caps text-label-caps text-primary"
                href={`/propriedades/${property.slug}`}
              >
                VIEW RESIDENCE
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
