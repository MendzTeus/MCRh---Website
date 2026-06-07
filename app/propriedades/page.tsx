import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { PropertyCard } from "@/components/ui/property-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { properties } from "@/content/properties";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Explore MCRh short-stay apartments across Manchester, including City Centre, Ancoats and Old Trafford.",
};

export default function PropertiesPage() {
  return (
    <>
      <Section className="bg-midnight text-white">
        <div className="grid min-h-[500px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.15em] text-brass uppercase">
              Manchester collection
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-tight font-normal sm:text-7xl">
              City stays selected for comfort, location and character.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Browse the current MCRh apartment collection. Each property page
              will connect to live availability and direct enquiries as the
              booking workflow comes online.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded bg-surface-container text-midnight">
              <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(14,26,43,.08)_1px,transparent_1px),linear-gradient(rgba(14,26,43,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
              {properties.map((property, index) => (
                <div
                  key={property.slug}
                  className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-brass bg-midnight text-xs font-semibold text-white"
                  style={{
                    left: `${18 + ((index * 13) % 62)}%`,
                    top: `${20 + ((index * 19) % 58)}%`,
                  }}
                  aria-label={property.name}
                >
                  {index + 1}
                </div>
              ))}
              <div className="absolute bottom-5 left-5 right-5 rounded border border-outline-soft bg-surface/90 p-4 backdrop-blur-md">
                <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
                  Map preview
                </p>
                <p className="mt-2 text-sm text-charcoal">
                  Location context placeholder. Real map data comes when
                  property coordinates are confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Available homes"
            title={`${properties.length} Manchester property groups`}
            body="Grouped from the existing MCRh content so the public site can become dynamic without duplicating each apartment page by hand."
          />
          <ButtonLink href="/contacto" variant="ghost">
            Ask about availability
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.slug}
              name={property.name}
              area={property.area}
              href={`/propriedades/${property.slug}`}
              imageSrc={property.imageSrc}
              imageAlt={property.imageAlt}
              specs={[
                `${property.maxGuests} guests`,
                `${property.bedrooms} beds`,
                `${property.bathrooms} baths`,
              ]}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
