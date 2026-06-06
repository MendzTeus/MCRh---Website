import Link from "next/link";
import { Container } from "@/components/layout/container";
import { mainNav, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-midnight text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1fr_auto]">
        <div className="max-w-md">
          <p className="font-serif text-3xl font-normal">{siteConfig.name}</p>
          <div className="mt-5 h-px w-16 bg-brass" />
          <p className="mt-5 text-sm leading-6 text-white/70">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm text-white/55">{siteConfig.address}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-brass uppercase">
            Explore
          </p>
          <nav
            aria-label="Footer navigation"
            className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-5 text-xs text-white/45">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
