import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPropertyBySlug, properties } from "@/content/properties";
import { getUnitBySlug, unitImage, unitSlug } from "@/lib/property-units";
import { siteConfig } from "@/content/site";

type UnitPageProps = {
  params: Promise<{
    slug: string;
    unit: string;
  }>;
};

export function generateStaticParams() {
  return properties.flatMap((property) =>
    property.units.map((unit) => ({
      slug: property.slug,
      unit: unitSlug(unit),
    })),
  );
}

export async function generateMetadata({
  params,
}: UnitPageProps): Promise<Metadata> {
  const { slug, unit: unitParam } = await params;
  const property = getPropertyBySlug(slug);
  const unit = property ? getUnitBySlug(property, unitParam) : null;

  if (!property || !unit) {
    return {};
  }

  return {
    title: `${unit.title} | ${property.name}`,
    description: unit.description,
  };
}

export default async function UnitPage({ params }: UnitPageProps) {
  const { slug, unit: unitParam } = await params;
  const property = getPropertyBySlug(slug);
  const unit = property ? getUnitBySlug(property, unitParam) : null;

  if (!property || !unit) {
    notFound();
  }

  const unitIndex = property.units.findIndex(
    (candidate) => unitSlug(candidate) === unitParam,
  );
  const hero = unitImage(property, Math.max(unitIndex, 0));
  const gallery = [0, 1, 2, 3].map((offset) =>
    unitImage(property, Math.max(unitIndex, 0) + offset),
  );

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[500px] w-full flex-col justify-end overflow-hidden px-margin-mobile pb-margin-desktop pt-20 md:h-[80vh] md:px-margin-desktop">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-container-max">
          <span className="mb-4 block font-label-caps text-label-caps text-secondary-container uppercase tracking-[0.15em]">
            {unit.label ?? "THE PENTHOUSE SUITE"}
          </span>
          <h1 className="mb-6 max-w-3xl font-display-lg-mobile text-display-lg-mobile text-on-primary md:font-display-lg md:text-display-lg">
            {unit.title}
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg italic text-on-primary/80">
            {unit.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-16 md:px-margin-desktop">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
          <div className="lg:w-[61.8%]">
            <section className="mb-12">
              <div className="grid grid-cols-2 gap-4">
                {gallery.map((image) => (
                  <div
                    key={image.src}
                    className="editorial-image aspect-square rounded-[8px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            <div className="mb-16 flex flex-wrap justify-between gap-8 border-b border-outline-variant/30 pb-8 text-on-surface-variant lg:justify-start">
              {[
                ["bed", `${property.bedrooms} Bedrooms`],
                ["bathtub", `${property.bathrooms} Bathrooms`],
                ["square_foot", unit.squareFeet ?? "Curated Space"],
              ].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl">
                    {icon}
                  </span>
                  <span className="font-label-caps text-label-caps uppercase">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <section className="mb-16">
              <h2 className="mb-8 border-b border-outline-variant/30 pb-4 text-left font-headline-md text-headline-md text-primary">
                The Penthouse Narrative
              </h2>
              <div className="columns-1 gap-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant md:columns-2">
                <p className="mb-6 break-inside-avoid">
                  Perched above the city&apos;s hum, {unit.title} is an
                  exercise in restraint and refinement. Every surface, from the
                  practical kitchen details to the layered bedroom textures, has
                  been selected to evoke grounding calm.
                </p>
                <p className="break-inside-avoid">
                  The space unfolds generously, prioritising natural light and
                  unencumbered movement. It is a canvas for your retreat,
                  designed not just to be seen, but to be felt.
                </p>
              </div>
            </section>

            <section className="mb-section-gap">
              <h3 className="mb-8 border-b border-outline-variant/30 pb-4 text-left font-headline-sm text-headline-sm text-primary">
                Curated Details
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  ["spa", "Aesop Botanical Toiletries"],
                  ["coffee_maker", "Nespresso Vertuo"],
                  ["wifi", "High-Speed Wi-Fi"],
                  ["bed", "Organic Cotton Linens"],
                ].map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-outline">
                      {icon}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:w-[38.2%]">
            <div className="sticky top-32 rounded-lg border border-outline-variant/30 bg-surface-container-low p-8">
              <h3 className="mb-8 border-b border-outline-variant/30 pb-4 font-headline-md text-headline-md text-primary">
                Reserve {unit.title.replace("Chambers Apt.", "Chambers")}
              </h3>
              <label className="mb-3 block font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">
                Guests
              </label>
              <div className="mb-8 flex cursor-pointer items-center justify-between border-b border-outline-variant/30 pb-3 font-body-md text-on-surface">
                <span>{Math.min(property.maxGuests, 4)} Guests</span>
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </div>
              <div className="mb-8 rounded bg-surface p-4">
                <div className="mb-4 flex items-center justify-between">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined text-sm">
                      chevron_left
                    </span>
                  </button>
                  <h4 className="font-body-lg text-body-lg font-semibold">
                    November 2024
                  </h4>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center font-label-caps text-[10px] text-on-surface-variant">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                  {Array.from({ length: 35 }, (_, index) => (
                    <span
                      key={index}
                      className={`flex aspect-square items-center justify-center rounded-full text-xs ${
                        index === 18
                          ? "bg-primary text-on-primary"
                          : index > 23
                            ? "text-outline line-through"
                            : "text-on-surface"
                      }`}
                    >
                      {index + 1 <= 30 ? index + 1 : ""}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-3">
                <Link
                  className="border border-primary bg-primary px-8 py-4 text-center font-label-caps text-label-caps text-on-primary uppercase tracking-widest"
                  href={`/contacto?property=${property.slug}&unit=${unitSlug(unit)}`}
                >
                  Book Direct
                </Link>
                <Link
                  className="flex items-center justify-center gap-2 border border-outline-variant/50 px-8 py-4 font-label-caps text-label-caps text-primary uppercase tracking-widest"
                  href={property.airbnbUrl ?? "/contacto"}
                >
                  <span>Airbnb</span>
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-center gap-2 border border-outline-variant/50 px-8 py-4 font-label-caps text-label-caps text-primary uppercase tracking-widest"
                  href={siteConfig.whatsappUrl}
                >
                  WhatsApp
                </Link>
              </div>
              <p className="mt-6 text-center font-label-caps text-xs uppercase tracking-widest text-on-surface-variant">
                You won&apos;t be charged yet
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-8 border-t border-outline-variant/30 pt-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <div className="editorial-image mb-6 aspect-[4/3]">
                <Image
                  src={property.gallery[0]?.src ?? property.imageSrc}
                  alt={property.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 grayscale mix-blend-multiply transition-all duration-700 hover:opacity-100 hover:grayscale-0"
                />
              </div>
              <h4 className="mb-1 font-headline-sm text-headline-sm text-primary">
                {property.name} Neighborhood
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Cultural District, City Center
              </p>
            </div>
            <div>
              <h3 className="mb-8 border-b border-outline-variant/30 pb-4 font-headline-sm text-headline-sm text-primary">
                Guest Perspectives
              </h3>
              <div className="rounded-lg bg-surface-container-low p-8">
                <p className="mb-6 font-quote text-quote text-on-surface">
                  &quot;An absolute sanctuary in the heart of Manchester. The
                  attention to detail and the quiet luxury aesthetic made our
                  stay unforgettable.&quot;
                </p>
                <div className="mb-4 flex gap-1 text-secondary">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className="material-symbols-outlined text-sm">
                      star
                    </span>
                  ))}
                </div>
                <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                  Eleanor R. - Airbnb Guest
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
