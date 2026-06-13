import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/content/properties";

export const metadata: Metadata = {
  title: "Design Services",
  description:
    "Interior design and styling services for Manchester apartments and short-stay properties.",
};

const chambers = properties.find((p) => p.slug === "chambers") ?? properties[0]!;
const woodStreet =
  properties.find((p) => p.slug === "wood-street") ?? properties[1]!;

const disciplines = [
  ["01", "Interior Design", "Comprehensive spatial planning and aesthetic direction. We develop bespoke design narratives that align with your property's unique architecture and target demographic."],
  ["02", "Refurbishment", "Strategic upgrades that maximize impact and durability, from hardwearing premium materials to minor architectural adjustments."],
  ["03", "Styling & Staging", "The final critical layer: art, objects and textiles that move a room from furnished to curated."],
  ["04", "Photography Preparation", "Meticulous preparation for editorial-style photoshoots that capture the essence of the stay and drive booking conversion."],
];

export default function DesignServicesPage() {
  return (
    <>
      <section className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile py-section-gap pt-[160px] md:grid-cols-12 md:px-margin-desktop">
        <div className="md:col-span-8 md:pr-12">
          <h1 className="mb-8 font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
            Design-led spaces
            <br />
            for memorable stays
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Elevating the art of hospitality through meticulously curated
            interiors. We transform properties into immersive environments that
            resonate with the discerning traveler.
          </p>
        </div>
        <div className="mt-12 md:col-span-4 md:mt-0">
          <div className="editorial-image aspect-[3/4]">
            <Image
              src={woodStreet.gallery[0]?.src ?? woodStreet.imageSrc}
              alt={woodStreet.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-gap">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
          <div className="flex items-start md:col-span-4">
            <span className="block w-16 border-t border-secondary pt-2 font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              Our Approach
            </span>
          </div>
          <div className="md:col-span-8">
            <p className="font-quote text-quote leading-relaxed text-primary">
              We believe that a space should do more than simply shelter; it
              should evoke emotion, provide decompression, and tell a story.
              Through expert interior design, strategic refurbishment, and
              meticulous styling, we craft guest-ready presentations that define
              modern boutique hospitality.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="editorial-image z-10 h-[420px] md:col-span-7 md:-ml-8 md:h-[600px]">
            <Image
              src={chambers.gallery[1]?.src ?? chambers.imageSrc}
              alt={chambers.gallery[1]?.alt ?? chambers.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="editorial-image z-20 mt-12 h-[320px] shadow-2xl shadow-surface-container md:col-span-5 md:-ml-12 md:mt-[300px] md:h-[400px]">
            <Image
              src={chambers.gallery[2]?.src ?? chambers.imageSrc}
              alt={chambers.gallery[2]?.alt ?? chambers.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-24">
          <h2 className="mb-4 font-headline-md text-headline-md text-primary">
            Core Disciplines
          </h2>
          <div className="h-px w-24 bg-outline-variant" />
        </div>
        <div className="grid grid-cols-1 gap-x-gutter gap-y-24 md:grid-cols-2">
          {disciplines.map(([number, title, body]) => (
            <div key={title} className="group flex flex-col gap-6">
              <div className="flex items-baseline gap-4">
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  {number}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary transition-colors duration-300 group-hover:text-secondary">
                  {title}
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-container px-margin-mobile py-section-gap text-center text-on-primary md:px-margin-desktop">
        <div className="mx-auto max-w-3xl">
          <span className="material-symbols-outlined mb-8 block text-4xl text-secondary-container opacity-50">
            format_quote
          </span>
          <blockquote className="mb-8 font-quote text-quote text-surface-bright">
            &quot;True luxury in hospitality is invisible. It&apos;s the absence
            of friction, the presence of intentionality, and a space that feels
            like it has been waiting for you.&quot;
          </blockquote>
          <cite className="font-label-caps text-label-caps not-italic text-primary-fixed-dim uppercase tracking-widest">
            MCRh Design Philosophy
          </cite>
        </div>
      </section>

      <section className="px-margin-mobile py-section-gap text-center md:px-margin-desktop">
        <h2 className="mb-8 font-headline-md text-headline-md text-primary">
          Begin Your Transformation
        </h2>
        <Link
          className="ghost-btn inline-block font-label-caps text-label-caps text-primary uppercase tracking-widest"
          href="/contacto"
        >
          Enquire Now
        </Link>
      </section>
    </>
  );
}
