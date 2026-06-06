import Link from "next/link";
import { Container } from "@/components/layout/container";
import { mainNav, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-outline-soft/70 bg-background/85 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="font-serif text-2xl font-normal tracking-normal text-midnight"
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
              className="text-xs font-semibold tracking-[0.15em] text-charcoal uppercase transition-colors hover:text-midnight"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="inline-flex min-h-10 items-center justify-center rounded border border-brass px-4 py-2 text-xs font-semibold tracking-[0.15em] text-midnight uppercase transition-colors hover:bg-brass"
        >
          Enquire
        </Link>
      </Container>
    </header>
  );
}
