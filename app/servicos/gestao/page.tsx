import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { managementServicePage } from "@/content/pages";

export const metadata: Metadata = {
  title: "Property Management Services",
  description:
    "Short-let property management services in Manchester, from housekeeping and guest communications to listing optimisation.",
};

export default function ManagementServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={managementServicePage.eyebrow}
        title={managementServicePage.title}
        intro={managementServicePage.intro}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr]">
          <SectionHeading
            eyebrow="Managed operations"
            title="Built for owners who want the income without the daily friction."
          />
          <div className="space-y-6 text-lg leading-8 text-charcoal">
            {managementServicePage.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface-container">
        <div className="grid gap-6 md:grid-cols-2">
          {managementServicePage.features.map((feature) => (
            <Card key={feature.title}>
              <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
                Service
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight font-normal text-midnight">
                {feature.title}
              </h2>
              <p className="mt-5 leading-7 text-charcoal">{feature.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="border-outline-soft bg-surface-container-low grid gap-8 rounded-lg border p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
              Property management enquiries
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight font-normal text-midnight">
              Let us take away the hassle from you today.
            </h2>
          </div>
          <ButtonLink href="/contacto">Contact MCRh</ButtonLink>
        </div>
      </Section>
    </>
  );
}
