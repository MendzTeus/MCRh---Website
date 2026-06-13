import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile py-section-gap md:grid-cols-2 md:px-margin-desktop lg:grid-cols-4">
        <div>
          <Link
            className="mb-6 block font-headline-md text-headline-md text-primary"
            href="/"
          >
            MCRh
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant/80">
            © {new Date().getFullYear()} MCRh. Luxury short-term lettings.
          </p>
        </div>
        <div className="lg:col-start-3">
          <Link className="mb-4 block text-on-surface-variant/80 transition-colors hover:text-secondary" href="/propriedades">
            Properties
          </Link>
          <Link className="mb-4 block text-on-surface-variant/80 transition-colors hover:text-secondary" href="/servicos/design">
            Design Services
          </Link>
          <Link className="mb-4 block text-on-surface-variant/80 transition-colors hover:text-secondary" href="/servicos/gestao">
            Management Services
          </Link>
        </div>
        <div>
          <Link className="mb-4 block text-on-surface-variant/80 transition-colors hover:text-secondary" href="/sobre">
            About
          </Link>
          <Link className="mb-4 block text-on-surface-variant/80 transition-colors hover:text-secondary" href="/contacto">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
