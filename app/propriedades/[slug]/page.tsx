import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPropertyBySlug, properties } from "@/content/properties";
import { siteConfig } from "@/content/site";

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

  const [primaryGalleryImage, ...secondaryGalleryImages] = property.gallery;

  return (
    <>
      <section className="relative min-h-[720px] overflow-hidden bg-midnight text-white">
        <Image
          src={property.imageSrc}
          alt={property.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-midnight/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/72 to-transparent" />
        <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1280px] items-end px-6 pb-10 pt-32 sm:px-8 sm:pb-16 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.15em] text-brass uppercase">
              {property.area}
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-tight font-normal sm:text-7xl">
              {property.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {property.headline}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase backdrop-blur-md">
                {property.maxGuests} guests
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase backdrop-blur-md">
                {property.bedrooms} bedrooms
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase backdrop-blur-md">
                {property.bathrooms} bathrooms
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto mt-0 w-full max-w-[1280px] px-6 sm:-mt-12 sm:px-8 lg:px-16">
        <div className="grid gap-4 rounded-lg border border-outline-soft bg-surface-container-low p-4 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-end md:p-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
              Property
            </p>
            <p className="mt-3 border-b border-midnight pb-3 text-base text-midnight">
              {property.name}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
              Check in
            </p>
            <p className="mt-3 border-b border-midnight pb-3 text-base text-midnight">
              Select date
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
              Check out
            </p>
            <p className="mt-3 border-b border-midnight pb-3 text-base text-midnight">
              Select date
            </p>
          </div>
          <ButtonLink href={`/contacto?property=${property.slug}`}>
            Check availability
          </ButtonLink>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Property details"
              title={property.headline}
              body={property.description}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/contacto?property=${property.slug}`}>
                Book with MCRh
              </ButtonLink>
              {property.airbnbUrl ? (
                <ButtonLink href={property.airbnbUrl} variant="secondary">
                  Book with Airbnb
                </ButtonLink>
              ) : (
                <span className="inline-flex min-h-12 items-center justify-center rounded border border-outline-soft bg-surface-container px-5 py-3 text-xs font-semibold tracking-[0.15em] text-charcoal uppercase">
                  Airbnb link pending
                </span>
              )}
              <ButtonLink href={siteConfig.whatsappUrl} variant="ghost">
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Guests", property.maxGuests],
              ["Bedrooms", property.bedrooms],
              ["Beds", property.beds],
              ["Bathrooms", property.bathrooms],
            ].map(([label, value]) => (
              <Card key={label} className="bg-surface">
                <p className="font-serif text-4xl text-midnight">{value}</p>
                <p className="mt-3 text-xs font-semibold tracking-[0.15em] text-charcoal uppercase">
                  {label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface-container-low">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="A closer look at the space."
            body="Current property photography pulled into the new media pipeline, ready for the future admin uploader."
          />
          <ButtonLink
            href={`/contacto?property=${property.slug}`}
            variant="ghost"
          >
            Enquire about this stay
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {primaryGalleryImage ? (
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <Image
                src={primaryGalleryImage.src}
                alt={primaryGalleryImage.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          {secondaryGalleryImages.slice(0, 4).map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-container">
        <SectionHeading
          eyebrow="Rooms and apartment options"
          title="Texts pulled from the existing property content."
          body="These are the current accommodation descriptions from the old site, cleaned only where the source had duplicate or broken fragments."
        />
        <div className="mt-10 grid gap-5">
          {property.units.map((unit) => (
            <Card key={unit.title} className="bg-surface">
              <div className="grid gap-5 lg:grid-cols-[0.45fr_1fr]">
                <div>
                  <h2 className="font-serif text-3xl leading-tight font-normal text-midnight">
                    {unit.title}
                  </h2>
                  <p className="mt-4 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
                    {unit.specs}
                  </p>
                </div>
                <p className="leading-8 text-charcoal">{unit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Amenities"
            title="The practical details guests look for before booking."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {property.amenities.map((amenity) => (
              <div
                key={amenity}
                className="rounded-lg border border-outline-soft bg-surface-container-low px-5 py-4 text-sm font-semibold tracking-[0.08em] text-midnight uppercase"
              >
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-midnight text-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-brass uppercase">
              Location context
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight font-normal">
              {property.area} positioning, ready for real coordinates later.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/72">
              This visual map area is in place so each property can later show a
              precise location, nearby landmarks and the broader Manchester
              collection once coordinates are added.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:44px_44px]" />
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brass bg-brass text-sm font-semibold text-midnight">
              M
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded border border-white/15 bg-midnight/80 p-4 backdrop-blur-md">
              <p className="text-xs font-semibold tracking-[0.15em] text-brass uppercase">
                {property.name}
              </p>
              <p className="mt-2 text-sm text-white/70">{property.area}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
