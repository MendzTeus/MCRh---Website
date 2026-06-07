import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { designServicePage } from "@/content/pages";

export const metadata: Metadata = {
  title: "Design Services",
  description:
    "Interior design and styling services for Manchester apartments and short-stay properties.",
};

export default function DesignServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={designServicePage.eyebrow}
        title={designServicePage.title}
        intro={designServicePage.intro}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr]">
          <SectionHeading
            eyebrow="Interior direction"
            title="Designed for comfort, photography and repeatable guest use."
          />
          <div className="space-y-6 text-lg leading-8 text-charcoal">
            {designServicePage.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface-container">
        <div className="grid gap-6 lg:grid-cols-3">
          {designServicePage.features.map((feature) => (
            <Card key={feature.title}>
              <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
                Design
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
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
              Before the listing
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-normal text-midnight">
              Make the property feel intentional before guests compare it with
              the next option.
            </h2>
          </div>
          <div className="border-outline-soft bg-surface-container-low rounded-lg border p-8">
            <p className="leading-8 text-charcoal">
              From furniture choices to the final photography-ready details, we
              help owners shape apartments that feel comfortable, polished and
              commercially ready for short-stay guests.
            </p>
            <ButtonLink href="/contacto" className="mt-6">
              Discuss a property
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
