import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet MCRh, Manchester short-let apartment and property management specialists.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        intro={aboutPage.intro}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1fr]">
          <SectionHeading
            eyebrow="Manchester hospitality"
            title="Personal short-let management, shaped around the city."
          />
          <div className="space-y-6 text-lg leading-8 text-charcoal">
            {aboutPage.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface-container">
        <div className="grid gap-6 md:grid-cols-2">
          {aboutPage.sections.map((section) => (
            <Card key={section.title}>
              <h2 className="font-serif text-3xl leading-tight font-normal text-midnight">
                {section.title}
              </h2>
              <p className="mt-5 leading-7 text-charcoal">{section.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="What we manage"
            title="The operational details that make a stay feel effortless."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutPage.services.map((service) => (
              <div
                key={service}
                className="border-outline-soft bg-surface-container-low rounded-lg border px-5 py-4 text-sm font-semibold tracking-[0.08em] text-midnight uppercase"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-midnight text-white">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-brass uppercase">
              Work with MCRh
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight font-normal">
              Looking for a stay or a team to manage your property?
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
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
              className="border-white/30 text-white hover:border-white hover:bg-white hover:text-midnight"
            >
              Contact us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
