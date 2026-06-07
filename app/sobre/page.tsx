import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet MCRh, Manchester short-let apartment and property management specialists.",
};

const values = [
  {
    icon: "✦",
    title: "Integrity",
    body: "Transparent communication and honest relationships with owners and guests alike.",
  },
  {
    icon: "◈",
    title: "Local Insight",
    body: "Deep knowledge of Manchester neighbourhoods, demand patterns and traveller expectations.",
  },
  {
    icon: "◇",
    title: "Discretion",
    body: "Your property, your business. We handle everything with complete professionalism and privacy.",
  },
  {
    icon: "◆",
    title: "Excellence",
    body: "Five-star standards applied consistently — from listing photography to final housekeeping check.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-6 py-[120px] text-center md:px-16">
        <p className="mb-6 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
          Our Story
        </p>
        <h1 className="font-serif text-[40px] font-normal leading-[1.2] tracking-[-0.01em] text-midnight md:text-[64px] md:leading-[1.1] md:tracking-[-0.02em]">
          Who we are
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.6] text-charcoal">
          MCRh is a Manchester-based short-let management company built on a
          genuine love of the city and a commitment to exceptional stays.
        </p>
      </section>

      {/* About sections */}
      <section className="mx-auto max-w-[1280px] border-t border-outline-soft/30 px-6 py-[120px] md:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="mb-6 font-serif text-[32px] font-normal leading-[1.3] text-midnight">
              Exquisite short-stay apartments
            </h2>
            <p className="mb-8 text-lg leading-[1.6] text-charcoal">
              We curate a collection of Manchester apartments — each chosen,
              designed and managed to deliver an experience that goes beyond the
              average short-let. From city-centre lofts to heritage residences,
              every property reflects our commitment to considered living.
            </p>
            <Link
              href="/propriedades"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase transition-opacity hover:opacity-70"
            >
              View Properties →
            </Link>
          </div>
          <div className="grid h-[480px] grid-cols-2 gap-4 lg:col-span-6 lg:col-start-7">
            <div className="overflow-hidden rounded-lg bg-surface-container" />
            <div className="mt-12 overflow-hidden rounded-lg bg-surface-container-high" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-[120px] md:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-2 lg:col-span-5 lg:col-start-8">
            <h2 className="mb-6 font-serif text-[32px] font-normal leading-[1.3] text-midnight">
              Experts in property management
            </h2>
            <p className="mb-8 text-lg leading-[1.6] text-charcoal">
              For landlords, we offer a full-service management solution that
              takes the operational burden away entirely. Listing, pricing,
              housekeeping, maintenance and guest communications — all handled
              with the same care we apply to every stay.
            </p>
            <Link
              href="/servicos/gestao"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase transition-opacity hover:opacity-70"
            >
              Management Services →
            </Link>
          </div>
          <div className="order-1 h-[480px] overflow-hidden rounded-lg bg-surface-container-high lg:order-1 lg:col-span-6" />
        </div>
      </section>

      {/* Manchester lens */}
      <section className="bg-surface-container-low py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
                The Manchester Lens
              </p>
              <h2 className="mb-6 font-serif text-[40px] font-normal leading-[1.2] tracking-[-0.01em] text-midnight md:text-[64px] md:leading-[1.1] md:tracking-[-0.02em]">
                Knowing the city inside and out.
              </h2>
              <p className="mb-8 text-lg leading-[1.6] text-charcoal">
                Our roots are in Manchester. We understand which neighbourhoods
                attract which guests, what drives occupancy by season, and how
                to position each property to perform at its best.
              </p>
            </div>
            <div className="h-[480px] overflow-hidden rounded-lg bg-surface-container-high lg:col-span-6 lg:col-start-7" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[1280px] px-6 py-[120px] md:px-16">
        <h2 className="mb-16 font-serif text-[32px] font-normal leading-[1.3] text-midnight">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="border-t border-outline-soft pt-8">
              <span className="mb-4 block text-3xl text-brass">
                {value.icon}
              </span>
              <h3 className="mb-3 font-serif text-[24px] font-normal leading-[1.4] text-midnight">
                {value.title}
              </h3>
              <p className="text-base leading-[1.6] text-charcoal">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight px-6 py-[160px] text-center md:px-16">
        <h2 className="mx-auto max-w-4xl font-serif text-[40px] font-normal leading-[1.2] text-white md:text-[64px] md:tracking-[-0.02em]">
          Partner with us.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-[1.6] text-white/70">
          Whether you are looking for a curated Manchester stay or a team to
          manage your property — we are here.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/propriedades"
            className="inline-flex items-center justify-center border border-white px-8 py-4 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-colors hover:bg-white hover:text-midnight"
          >
            View Properties
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center border border-brass px-8 py-4 text-xs font-semibold tracking-[0.15em] text-brass uppercase transition-colors hover:bg-brass/10"
          >
            Contact MCRh
          </Link>
        </div>
      </section>
    </main>
  );
}
