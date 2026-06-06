import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.22em] text-stone-500 uppercase">
          Manchester short-let specialists
        </p>
        <h1 className="mt-5 text-4xl leading-tight font-semibold text-stone-950 sm:text-6xl">
          Short-stay apartments and property management by MCRh.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          {siteConfig.description} Explore curated city stays, direct enquiries,
          and management services shaped around Manchester landlords and guests.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/propriedades"
            className="inline-flex h-12 items-center justify-center rounded bg-stone-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
          >
            View properties
          </Link>
          <Link
            href="/contacto"
            className="inline-flex h-12 items-center justify-center rounded border border-stone-300 px-5 text-sm font-semibold text-stone-950 transition-colors hover:border-stone-950"
          >
            Contact MCRh
          </Link>
        </div>
      </div>
    </Container>
  );
}
