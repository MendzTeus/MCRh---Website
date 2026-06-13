import Link from "next/link";

export function SiteHeader() {
  return (
    <nav
      id="main-nav"
      className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 backdrop-blur-xl transition-all duration-300 ease-in-out"
    >
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-6 md:px-margin-desktop">
        <Link
          className="font-display-lg text-headline-sm tracking-tighter text-primary"
          href="/"
        >
          MCRh
        </Link>
        <div className="hidden items-center space-x-8 font-label-caps text-label-caps md:flex">
          <Link className="rounded px-3 py-2 text-on-surface-variant transition-colors hover:text-primary" href="/propriedades">
            Properties
          </Link>
          <Link className="rounded px-3 py-2 text-on-surface-variant transition-colors hover:text-primary" href="/servicos/design">
            Design Services
          </Link>
          <Link className="rounded px-3 py-2 text-on-surface-variant transition-colors hover:text-primary" href="/servicos/gestao">
            Management Services
          </Link>
          <Link className="rounded px-3 py-2 text-on-surface-variant transition-colors hover:text-primary" href="/sobre">
            About
          </Link>
          <Link className="rounded px-3 py-2 text-on-surface-variant transition-colors hover:text-primary" href="/contacto">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="hidden border border-primary px-6 py-3 font-label-caps text-label-caps text-primary uppercase tracking-widest transition-colors hover:bg-primary/5 md:block"
            href="/propriedades"
          >
            Book Now
          </Link>
          <Link className="text-primary md:hidden" href="/propriedades">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
