import Image from "next/image";
import Link from "next/link";
import { properties } from "@/content/properties";

const chambers = properties.find((p) => p.slug === "chambers") ?? properties[0]!;
const johnDalton =
  properties.find((p) => p.slug === "john-dalton-st") ?? properties[1]!;
const woodStreet =
  properties.find((p) => p.slug === "wood-street") ?? properties[2]!;

export default function Home() {
  const gallery = [woodStreet, johnDalton, chambers];

  return (
    <>
      <section className="relative flex h-screen w-full items-end overflow-hidden">
        <Image
          src={chambers.gallery[0]?.src ?? chambers.imageSrc}
          alt={chambers.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        <div className="relative z-10 mx-auto flex w-full max-w-container-max flex-col items-end justify-between px-margin-mobile pb-margin-desktop md:flex-row md:px-margin-desktop md:pb-section-gap">
          <div className="max-w-2xl text-on-primary">
            <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile leading-tight md:font-display-lg md:text-display-lg">
              Experts In Short-Term Lettings
            </h1>
            <p className="max-w-lg font-body-lg text-body-lg opacity-90">
              The first choice for property rentals &amp; hosting in Manchester
            </p>
          </div>
          <div className="mt-8 pb-2 md:mt-0">
            <Link
              className="inline-flex items-center justify-center border border-on-primary px-8 py-4 font-label-caps text-label-caps text-on-primary transition-colors duration-300 hover:bg-on-primary hover:text-primary"
              href="/propriedades"
            >
              EXPLORE PROPERTIES
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile py-section-gap md:grid-cols-12 md:px-margin-desktop">
        <div className="relative h-[600px] md:col-span-7 md:h-[800px]">
          <div className="editorial-image absolute left-0 top-0 h-3/4 w-3/4 shadow-sm">
            <Image
              src={chambers.gallery[0]?.src ?? chambers.imageSrc}
              alt={chambers.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="editorial-image absolute bottom-0 right-0 z-10 h-1/2 w-1/2 border border-surface shadow-sm md:-mr-8">
            <Image
              src={chambers.gallery[1]?.src ?? chambers.imageSrc}
              alt={chambers.gallery[1]?.alt ?? chambers.imageAlt}
              fill
              sizes="(min-width: 768px) 30vw, 70vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12 md:col-span-5 md:mt-0 md:pl-12">
          <span className="mb-4 inline-block font-label-caps text-label-caps text-secondary tracking-widest">
            FEATURED PROPERTY
          </span>
          <h2 className="mb-6 font-headline-md text-headline-md text-primary">
            Chambers Residence
          </h2>
          <p className="mb-8 font-body-md text-body-md text-on-surface-variant opacity-80">
            Experience the perfect blend of Manchester&apos;s rich industrial
            heritage and contemporary luxury. Located in the heart of the city,
            Chambers Residence offers a serene escape with bespoke furnishings,
            towering ceilings, and an atmosphere of curated calm.
          </p>
          <Link
            className="inline-flex items-center justify-center border border-primary px-8 py-4 font-label-caps text-label-caps text-primary transition-colors duration-300 hover:bg-surface-variant"
            href="/propriedades/chambers"
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      <section className="bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-gutter md:grid-cols-12">
          <div className="order-2 mt-12 md:col-span-5 md:order-1 md:mt-0 md:pr-12">
            <span className="mb-4 inline-block font-label-caps text-label-caps text-secondary tracking-widest">
              HERITAGE COLLECTION
            </span>
            <h2 className="mb-6 font-headline-md text-headline-md text-primary">
              John Dalton Street
            </h2>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant opacity-80">
              Set within a meticulously restored historic building, this
              residence celebrates architectural grandeur while providing
              uncompromising modern comfort.
            </p>
            <Link
              className="inline-flex items-center justify-center border border-primary px-8 py-4 font-label-caps text-label-caps text-primary transition-colors duration-300 hover:bg-surface-variant"
              href="/propriedades/john-dalton-st"
            >
              EXPLORE DETAILS
            </Link>
          </div>
          <div className="order-1 md:col-span-7 md:order-2">
            <div className="grid h-[600px] grid-cols-2 gap-4 md:h-[700px]">
              <div className="editorial-image col-span-1 row-span-2">
                <Image
                  src={johnDalton.gallery[0]?.src ?? johnDalton.imageSrc}
                  alt={johnDalton.imageAlt}
                  fill
                  sizes="(min-width: 768px) 35vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="editorial-image col-span-1 row-span-1">
                <Image
                  src={johnDalton.gallery[1]?.src ?? johnDalton.imageSrc}
                  alt={johnDalton.gallery[1]?.alt ?? johnDalton.imageAlt}
                  fill
                  sizes="(min-width: 768px) 35vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 flex items-center justify-center overflow-hidden rounded-lg bg-surface-variant p-8">
                <p className="text-center font-quote text-quote leading-snug text-primary">
                  &quot;A masterclass in urban sanctuary.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile py-section-gap md:grid-cols-12 md:px-margin-desktop">
        <div className="relative h-[600px] md:col-span-7 md:h-[800px]">
          <div className="editorial-image absolute left-0 top-0 h-3/4 w-3/4 shadow-sm">
            <Image
              src={woodStreet.gallery[0]?.src ?? woodStreet.imageSrc}
              alt={woodStreet.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="editorial-image absolute bottom-0 right-0 z-10 h-1/2 w-1/2 border border-surface shadow-sm md:-mr-8">
            <Image
              src={woodStreet.gallery[1]?.src ?? woodStreet.imageSrc}
              alt={woodStreet.gallery[1]?.alt ?? woodStreet.imageAlt}
              fill
              sizes="(min-width: 768px) 30vw, 70vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12 md:col-span-5 md:mt-0 md:pl-12">
          <span className="mb-4 inline-block font-label-caps text-label-caps text-secondary tracking-widest">
            CITY SANCTUARY
          </span>
          <h2 className="mb-6 font-headline-md text-headline-md text-primary">
            Wood Street
          </h2>
          <p className="mb-8 font-body-md text-body-md text-on-surface-variant opacity-80">
            A polished two-bedroom residence with considered styling, lift
            access and a calm city-centre setting close to Manchester life.
          </p>
          <Link
            className="inline-flex items-center justify-center border border-primary px-8 py-4 font-label-caps text-label-caps text-primary transition-colors duration-300 hover:bg-surface-variant"
            href="/propriedades/wood-street"
          >
            VIEW RESIDENCE
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline-md text-headline-md text-primary">
            The Collective
          </h2>
          <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
            A curated selection of our finest properties, designed for the
            discerning traveler.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {gallery.map((property, index) => (
            <Link
              key={property.slug}
              href={`/propriedades/${property.slug}`}
              className={`group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg${
                index === 1 ? " md:mt-12" : ""
              }`}
            >
              <Image
                src={property.imageSrc}
                alt={property.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 transition-colors duration-500 group-hover:bg-primary/40" />
              <div className="absolute bottom-0 left-0 translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="mb-2 font-headline-sm text-headline-sm text-on-primary">
                  {property.name}
                </h3>
                <p className="font-label-caps text-label-caps text-secondary-fixed">
                  VIEW PROPERTY
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
