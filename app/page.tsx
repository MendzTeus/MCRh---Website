import Image from "next/image";
import Link from "next/link";
import { properties } from "@/content/properties";

const featured = properties.find((p) => p.slug === "chambers") ?? properties[0]!;
const featured2 = properties.find((p) => p.slug === "john-dalton-st") ?? properties[1]!;
const gallery = properties.filter((p) => !["chambers", "john-dalton-st"].includes(p.slug)).slice(0, 3);

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={featured.gallery[0]?.src ?? featured.imageSrc}
            alt={featured.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop pb-margin-desktop md:pb-section-gap max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-2xl text-on-primary">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">Experts In Short-Term Lettings</h1>
            <p className="font-body-lg text-body-lg opacity-90 max-w-lg">The first choice for property rentals &amp; hosting in Manchester</p>
          </div>
          <div className="mt-8 md:mt-0 pb-2">
            <Link
              className="inline-flex items-center justify-center border border-on-primary text-on-primary px-8 py-4 font-label-caps text-label-caps hover:bg-on-primary hover:text-primary transition-colors duration-300"
              href="/propriedades"
            >
              EXPLORE PROPERTIES
            </Link>
          </div>
        </div>
      </section>

      {/* Property Feature: Chambers */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 relative h-[600px] md:h-[800px]">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={featured.gallery[0]?.src ?? featured.imageSrc}
                alt={`${featured.name} main`}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-lg overflow-hidden shadow-sm md:-mr-8 z-10 border border-surface">
              <Image
                src={featured.gallery[1]?.src ?? featured.imageSrc}
                alt={`${featured.name} detail`}
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:pl-12 mt-12 md:mt-0">
            <span className="inline-block font-label-caps text-label-caps text-secondary mb-4 tracking-widest">FEATURED PROPERTY</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">{featured.name}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 opacity-80">
              {featured.description}
            </p>
            <Link
              className="inline-flex items-center justify-center border border-primary text-primary px-8 py-4 font-label-caps text-label-caps hover:bg-surface-variant transition-colors duration-300"
              href={`/propriedades/${featured.slug}`}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Property Feature: John Dalton Street */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:pr-12 order-2 md:order-1 mt-12 md:mt-0">
            <span className="inline-block font-label-caps text-label-caps text-secondary mb-4 tracking-widest">HERITAGE COLLECTION</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">{featured2.name}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 opacity-80">
              {featured2.description}
            </p>
            <Link
              className="inline-flex items-center justify-center border border-primary text-primary px-8 py-4 font-label-caps text-label-caps hover:bg-surface-variant transition-colors duration-300"
              href={`/propriedades/${featured2.slug}`}
            >
              EXPLORE DETAILS
            </Link>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4 h-[600px] md:h-[700px]">
              <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
                <Image
                  src={featured2.gallery[0]?.src ?? featured2.imageSrc}
                  alt={featured2.name}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                <Image
                  src={featured2.gallery[1]?.src ?? featured2.imageSrc}
                  alt={`${featured2.name} detail`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-lg overflow-hidden bg-surface-variant flex items-center justify-center p-8">
                <p className="font-quote text-quote text-primary text-center leading-snug">&ldquo;A masterclass in urban sanctuary.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">The Collective</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">A curated selection of our finest properties, designed for the discerning traveler.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.map((property, i) => (
            <Link
              key={property.slug}
              href={`/propriedades/${property.slug}`}
              className={`group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer${i === 1 ? " md:mt-12" : ""}`}
            >
              <Image
                src={property.imageSrc}
                alt={property.imageAlt}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">{property.name}</h3>
                <p className="font-label-caps text-label-caps text-secondary-fixed">VIEW PROPERTY</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            className="inline-flex items-center justify-center border border-primary text-primary px-8 py-4 font-label-caps text-label-caps hover:bg-surface-variant transition-colors duration-300"
            href="/propriedades"
          >
            VIEW ALL PROPERTIES
          </Link>
        </div>
      </section>
    </main>
  );
}
