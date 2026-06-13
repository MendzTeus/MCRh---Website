import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPropertyBySlug, properties } from "@/content/properties";
import { unitImage, unitSlug } from "@/lib/property-units";

type PropertyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {};
  }

  return {
    title: property.name,
    description: property.description,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      <section className="relative flex h-[80vh] min-h-[600px] w-full flex-col justify-end overflow-hidden px-margin-mobile pb-margin-desktop pt-20 md:px-margin-desktop">
        <Image
          src={property.imageSrc}
          alt={property.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-container-max">
          <span className="mb-4 block font-label-caps text-label-caps text-secondary-container uppercase tracking-[0.15em]">
            {property.area}
          </span>
          <h1 className="mb-6 max-w-3xl font-display-lg-mobile text-display-lg-mobile text-on-primary md:font-display-lg md:text-display-lg">
            {property.name}
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-primary/80">
            A masterful blend of heritage architecture and contemporary
            restraint, offering unparalleled discretion in the city centre.
          </p>
        </div>
      </section>

      <div className="relative z-30 -mt-12 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col items-center gap-4 rounded-lg border border-outline-variant/30 bg-surface/95 p-4 shadow-lg md:flex-row md:gap-6 md:p-6">
          <div className="w-full flex-1">
            <label className="mb-1 block font-label-caps text-[10px] uppercase tracking-widest text-on-surface">
              Property
            </label>
            <div className="border-b border-outline-variant/30 pb-2 font-body-md text-on-surface">
              {property.name}
            </div>
          </div>
          <div className="w-full flex-1">
            <label className="mb-1 block font-label-caps text-[10px] uppercase tracking-widest text-on-surface">
              Dates
            </label>
            <div className="flex cursor-pointer items-center justify-between border-b border-outline-variant/30 pb-2 font-body-md text-on-surface">
              <span>Select dates</span>
              <span className="material-symbols-outlined text-sm">
                calendar_today
              </span>
            </div>
          </div>
          <div className="w-full flex-1">
            <label className="mb-1 block font-label-caps text-[10px] uppercase tracking-widest text-on-surface">
              Guests
            </label>
            <div className="flex cursor-pointer items-center justify-between border-b border-outline-variant/30 pb-2 font-body-md text-on-surface">
              <span>{Math.min(property.maxGuests, 4)} Guests</span>
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </div>
          </div>
          <Link
            className="w-full border border-primary bg-primary px-8 py-4 text-center font-label-caps text-label-caps text-on-primary uppercase tracking-widest transition-colors hover:bg-primary-container md:w-auto"
            href={`/contacto?property=${property.slug}`}
          >
            Book Now
          </Link>
        </div>
      </div>

      <section className="border-b border-outline-variant/30 py-6">
        <div className="mx-auto flex max-w-container-max flex-wrap justify-center gap-8 px-margin-mobile md:px-margin-desktop">
          {[
            ["person", `${property.maxGuests} GUESTS`],
            ["bed", `${property.bedrooms} BEDROOMS`],
            ["king_bed", `${property.beds} BEDS`],
            ["bathtub", `${property.bathrooms} BATHROOMS`],
          ].map(([icon, label]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant">
                {icon}
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.15em]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container-max border-t border-outline-variant/30 px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-20">
          <span className="mb-2 block font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em]">
            The Collection
          </span>
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
            {property.name.includes("Residence")
              ? `${property.name}s`
              : `${property.name} Residences`}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          {property.units.map((unit, index) => {
            const image = unitImage(property, index);

            return (
              <div
                key={unitSlug(unit)}
                className={`group cursor-pointer md:col-span-6${
                  index > 1 ? " md:mt-12" : ""
                }`}
              >
                <Link
                  className="editorial-image mb-4 block aspect-[16/9]"
                  href={`/propriedades/${property.slug}/${unitSlug(unit)}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {unit.title}
                    </h3>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                      {unit.label ?? unit.specs}
                    </p>
                  </div>
                  <Link
                    className="shrink-0 border-b border-primary pb-1 font-label-caps text-label-caps text-primary"
                    href={`/propriedades/${property.slug}/${unitSlug(unit)}`}
                  >
                    VIEW RESIDENCE
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-container-max border-t border-outline-variant/30 px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg bg-surface-dim">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#101c2d_1px,transparent_1px)] [background-size:24px_24px]" />
              <span className="relative font-label-caps text-on-surface-variant/60">
                EDITORIAL MAP PLACEHOLDER
              </span>
            </div>
          </div>
          <div className="md:col-span-5">
            <span className="mb-2 block font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em]">
              The Neighborhood
            </span>
            <h2 className="mb-8 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
              Prime Manchester
            </h2>
            <div className="space-y-6">
              {[
                ["City Centre", "5 min walk"],
                ["Deansgate Station", "8 min walk"],
                ["Etihad Stadium", "12 min drive"],
                ["Manchester Piccadilly", "15 min walk"],
              ].map(([place, time]) => (
                <div
                  key={place}
                  className="flex items-end justify-between border-b border-outline-variant/30 pb-2"
                >
                  <span className="font-body-lg text-on-surface">{place}</span>
                  <span className="font-label-caps text-[10px] uppercase text-on-surface-variant">
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
