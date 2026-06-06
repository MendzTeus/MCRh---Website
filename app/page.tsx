import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PropertyCard } from "@/components/ui/property-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProperties, siteConfig } from "@/content/site";

const stats = [
  { label: "Manchester stays", value: "Curated" },
  { label: "Guest support", value: "24/7" },
  { label: "Owner services", value: "Full" },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[720px] overflow-hidden bg-midnight text-white">
        <Image
          src="/images/mcrh-hero-reference.png"
          alt="Luxury Manchester apartment interior reference"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-midnight/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/70 to-transparent" />
        <Container className="relative flex min-h-[720px] items-end pb-10 pt-32 sm:pb-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.15em] text-brass uppercase">
              Manchester short-let specialists
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-tight font-normal text-white sm:text-7xl">
              Short-stay apartments with quiet luxury built in.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {siteConfig.description} Explore curated city stays, live
              availability and management services shaped around Manchester
              landlords and guests.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/propriedades"
                variant="secondary"
                className="border-brass text-white hover:bg-brass hover:text-midnight"
              >
                View properties
              </ButtonLink>
              <ButtonLink
                href="/contacto"
                variant="ghost"
                className="border-white/35 text-white hover:border-white hover:bg-white hover:text-midnight"
              >
                Contact MCRh
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <Container className="relative z-10 mt-0 sm:-mt-12">
        <div className="grid gap-4 rounded-lg border border-outline-soft bg-surface-container-low p-4 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-end md:p-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
              Property
            </p>
            <p className="mt-3 border-b border-midnight pb-3 text-base text-midnight">
              Chapel Walks Chambers
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
          <ButtonLink
            href="/propriedades/chambers"
            className="w-full md:w-auto"
          >
            Check availability
          </ButtonLink>
        </div>
      </Container>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="Featured homes"
            title="Selected city apartments for stays that feel considered."
            body="The public site will become data-driven after this foundation, but the visual system is already set up for property cards, live availability and direct enquiries."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-surface">
                <p className="font-serif text-3xl text-midnight">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-semibold tracking-[0.15em] text-charcoal uppercase">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.href} {...property} />
          ))}
        </div>
      </Section>

      <Section className="bg-surface-container">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Services"
            title="For guests and landlords, the experience is managed end to end."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <h3 className="font-serif text-3xl font-normal text-midnight">
                Property management
              </h3>
              <p className="mt-4 leading-7 text-charcoal">
                Guest communications, listing optimisation, housekeeping,
                check-in and operational care for short-let properties.
              </p>
              <ButtonLink
                href="/servicos/gestao"
                variant="ghost"
                className="mt-6"
              >
                Management
              </ButtonLink>
            </Card>
            <Card>
              <h3 className="font-serif text-3xl font-normal text-midnight">
                Design services
              </h3>
              <p className="mt-4 leading-7 text-charcoal">
                Interior updates, furnishing direction and presentation work
                that helps properties photograph and perform better.
              </p>
              <ButtonLink
                href="/servicos/design"
                variant="ghost"
                className="mt-6"
              >
                Design
              </ButtonLink>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
