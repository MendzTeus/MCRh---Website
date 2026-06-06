import Link from "next/link";
import { Container } from "@/components/layout/container";
import { mainNav, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-100">
      <Container className="grid gap-10 py-10 md:grid-cols-[1fr_auto]">
        <div className="max-w-md">
          <p className="text-lg font-semibold tracking-[0.18em] uppercase">
            {siteConfig.name}
          </p>
          <p className="mt-3 text-sm leading-6 text-stone-300">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm text-stone-400">{siteConfig.address}</p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-x-10 gap-y-3"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-stone-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="border-t border-stone-800 py-5 text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} MCRh. All rights reserved.</p>
      </Container>
    </footer>
  );
}
