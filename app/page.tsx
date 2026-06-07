import Image from "next/image";
import Link from "next/link";
import { properties } from "@/content/properties";

const featured = properties.find((p) => p.slug === "chambers") ?? properties[0]!;
const featured2 = properties.find((p) => p.slug === "john-dalton-st") ?? properties[1]!;
const gallery = properties.filter(
  (p) => !["chambers", "john-dalton-st"].includes(p.slug),
).slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero — full viewport, nav overlays */}
      <section className="relative flex min-h-screen w-full items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={featured.gallery[0]?.src ?? featured.imageSrc}
            alt={featured.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/30 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-end justify-between gap-8 px-6 pb-16 md:flex-row md:items-end md:px-16 md:pb-[120px]">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-brass uppercase">
              Manchester short-let specialists
            </p>
            <h1 className="font-serif text-[40px] font-normal leading-[1.2] tracking-[-0.01em] md:text-[64px] md:leading-[1.1] md:tracking-[-0.02em]">
              Experts In Short-Term Lettings
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-[1.6] text-white/90">
              The first choice for property rentals &amp; hosting in Manchester
            </p>
          </div>
          <div className="shrink-0 pb-1">
            <Link
              href="/propriedades"
              className="inline-flex items-center justify-center border border-white px-8 py-4 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-colors hover:bg-white hover:text-midnight"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Featured property 1 — asymmetric grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-[120px] md:px-16">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="relative h-[480px] md:col-span-7 md:h-[720px]">
            <div className="absolute left-0 top-0 h-3/4 w-3/4 overflow-hidden rounded-lg">
              <Image
                src={featured.gallery[0]?.src ?? featured.imageSrc}
                alt={featured.name}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-10 h-1/2 w-1/2 overflow-hidden rounded-lg border border-background">
              <Image
                src={featured.gallery[1]?.src ?? featured.imageSrc}
                alt={`${featured.name} detail`}
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-12 md:col-span-5 md:mt-0 md:pl-12">
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
              Featured Property
            </span>
            <h2 className="mb-6 font-serif text-[32px] font-normal leading-[1.3] text-midnight">
              {featured.name}
            </h2>
            <p className="mb-8 text-base leading-[1.6] text-charcoal/80">
              {featured.headline}
            </p>
            <Link
              href={`/propriedades/${featured.slug}`}
              className="inline-flex items-center justify-center border border-midnight px-8 py-4 text-xs font-semibold tracking-[0.15em] text-midnight uppercase transition-colors hover:bg-surface-variant"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured property 2 — reversed */}
      <section className="bg-surface-container-low py-[120px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-12 md:px-16">
          <div className="order-2 mt-12 md:order-1 md:col-span-5 md:mt-0 md:pr-12">
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
              Heritage Collection
            </span>
            <h2 className="mb-6 font-serif text-[32px] font-normal leading-[1.3] text-midnight">
              {featured2.name}
            </h2>
            <p className="mb-8 text-base leading-[1.6] text-charcoal/80">
              {featured2.headline}
            </p>
            <Link
              href={`/propriedades/${featured2.slug}`}
              className="inline-flex items-center justify-center border border-midnight px-8 py-4 text-xs font-semibold tracking-[0.15em] text-midnight uppercase transition-colors hover:bg-surface-variant"
            >
              Explore Details
            </Link>
          </div>
          <div className="order-1 md:order-2 md:col-span-7">
            <div className="grid h-[480px] grid-cols-2 gap-4 md:h-[640px]">
              <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
                <Image
                  src={featured2.gallery[0]?.src ?? featured2.imageSrc}
                  alt={featured2.name}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
                <Image
                  src={featured2.gallery[1]?.src ?? featured2.imageSrc}
                  alt={`${featured2.name} detail`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 flex items-center justify-center rounded-lg bg-surface-variant p-8">
                <p className="text-center font-serif text-[28px] font-normal leading-[1.4] text-midnight">
                  &ldquo;A masterclass in urban sanctuary.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — 3 columns staggered */}
      <section className="mx-auto max-w-[1280px] px-6 py-[120px] md:px-16">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-[32px] font-normal leading-[1.3] text-midnight">
            The Collective
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal">
            A curated selection of our finest properties, designed for the
            discerning traveler.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {gallery.map((property, i) => (
            <Link
              key={property.slug}
              href={`/propriedades/${property.slug}`}
              className={`group relative block aspect-[3/4] overflow-hidden rounded-lg${i === 1 ? " md:mt-12" : ""}`}
            >
              <Image
                src={property.imageSrc}
                alt={property.imageAlt}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight/20 transition-colors duration-500 group-hover:bg-midnight/45" />
              <div className="absolute bottom-0 left-0 translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-serif text-[24px] font-normal leading-[1.4] text-white">
                  {property.name}
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.15em] text-brass uppercase">
                  View Property
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/propriedades"
            className="inline-flex items-center justify-center border border-midnight px-8 py-4 text-xs font-semibold tracking-[0.15em] text-midnight uppercase transition-colors hover:bg-surface-variant"
          >
            View All Properties
          </Link>
        </div>
      </section>
    </>
  );
}
