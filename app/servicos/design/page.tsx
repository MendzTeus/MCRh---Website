import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design Services",
  description:
    "Interior design and styling services for Manchester apartments and short-stay properties.",
};

const disciplines = [
  {
    title: "Space Planning & Concept",
    body: "We develop a coherent spatial narrative — ensuring every room flows intuitively and each element serves both aesthetic and functional purpose.",
  },
  {
    title: "Furniture Selection & Procurement",
    body: "Carefully curated furniture and décor, sourced from premium suppliers, to achieve a look that is both timeless and photograph-ready.",
  },
  {
    title: "Material & Finish Specification",
    body: "From flooring to joinery, we select materials that convey quality, durability and the distinct character of your property.",
  },
  {
    title: "Styling & Art Direction",
    body: "Final layer of detail — textiles, art, plants, and objects — that transforms a furnished room into a memorable place to stay.",
  },
  {
    title: "Photography-Ready Preparation",
    body: "We prepare every space for listing photography, ensuring the property performs on booking platforms and converts browsers into guests.",
  },
];

export default function DesignServicesPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-6 py-[120px] md:grid-cols-12 md:px-16">
        <div className="md:col-span-8 md:pr-12">
          <h1 className="mb-8 font-serif text-[40px] font-normal leading-[1.1] text-midnight md:text-[64px] md:tracking-[-0.02em]">
            Design-led spaces for memorable stays
          </h1>
          <p className="max-w-2xl text-lg leading-[1.6] text-charcoal">
            Elevating the art of hospitality through meticulously curated
            interiors. We transform properties into immersive environments that
            resonate with the discerning traveller.
          </p>
        </div>
        <div className="relative md:col-span-4">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-surface-container" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-surface-container-low py-[120px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-12 md:px-16">
          <div className="md:col-span-4">
            <span className="mb-4 block text-xs font-semibold tracking-[0.15em] text-brass uppercase">
              Our Philosophy
            </span>
            <h2 className="font-serif text-[32px] font-normal leading-[1.3] text-midnight">
              Quiet Luxury, Thoughtfully Placed
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-[1.6] text-charcoal md:col-span-7 md:col-start-6">
            <p>
              Great design is not just about beautiful objects — it is about the
              experience of a space. We create environments that feel considered
              without being contrived, where every element earns its place.
            </p>
            <p>
              For short-let properties, design carries a commercial imperative.
              A well-designed apartment photographs better, converts better, and
              commands better reviews. Our work starts with that premise and
              elevates it into something genuinely worth returning to.
            </p>
          </div>
        </div>
      </section>

      {/* Core disciplines */}
      <section className="mx-auto max-w-[1280px] px-6 py-[120px] md:px-16">
        <div className="mb-24">
          <h2 className="mb-4 font-serif text-[32px] font-normal leading-[1.3] text-midnight">
            Core Disciplines
          </h2>
          <div className="h-px w-24 bg-outline-soft" />
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((item, i) => (
            <div key={item.title} className="border-t border-outline-soft pt-8">
              <span className="mb-4 block font-serif text-[64px] font-normal leading-none text-surface-variant">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-4 font-serif text-[24px] font-normal leading-[1.4] text-midnight">
                {item.title}
              </h3>
              <p className="text-base leading-[1.6] text-charcoal">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-midnight px-6 py-[120px] text-center md:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-[28px] font-normal leading-[1.4] text-white/60">
            &ldquo;
          </p>
          <blockquote className="font-serif text-[28px] font-normal leading-[1.4] text-white">
            Make the property feel intentional before guests compare it with the
            next option.
          </blockquote>
          <div className="mt-16">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center border border-brass px-8 py-4 text-xs font-semibold tracking-[0.15em] text-brass uppercase transition-colors hover:bg-brass/10"
            >
              Begin Your Transformation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
