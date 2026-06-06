import Link from "next/link";
import { Container } from "@/components/layout/container";
import { mainNav, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <Container className="flex min-h-20 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.18em] text-stone-950 uppercase"
        >
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="inline-flex h-10 items-center justify-center rounded border border-stone-950 px-4 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-950 hover:text-white"
        >
          Enquire
        </Link>
      </Container>
    </header>
  );
}
