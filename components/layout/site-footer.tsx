import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-primary-container text-on-primary-container w-full border-t border-outline-variant py-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-start px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto gap-12 md:gap-0">
        <div className="flex-1">
          <Link className="text-headline-sm font-headline-sm text-on-primary block mb-6" href="/">MCRh</Link>
          <p className="font-body-md text-body-md max-w-xs opacity-80">
            Curating exceptional stays in Manchester&apos;s most sought-after locations.
          </p>
        </div>
        <div className="flex-1 flex flex-col space-y-4">
          <Link className="font-body-md text-body-md text-on-primary hover:text-secondary-fixed-dim transition-colors duration-300" href="/propriedades">Properties</Link>
          <Link className="font-body-md text-body-md text-on-primary-container hover:text-secondary-fixed-dim transition-colors duration-300" href="/servicos/gestao">Management</Link>
          <Link className="font-body-md text-body-md text-on-primary-container hover:text-secondary-fixed-dim transition-colors duration-300" href="/servicos/design">Design</Link>
          <Link className="font-body-md text-body-md text-on-primary-container hover:text-secondary-fixed-dim transition-colors duration-300" href="/sobre">About</Link>
          <Link className="font-body-md text-body-md text-on-primary-container hover:text-secondary-fixed-dim transition-colors duration-300" href="/contacto">Contact</Link>
        </div>
        <div className="flex-1 flex justify-start md:justify-end">
          <p className="font-body-md text-body-md opacity-60">© {new Date().getFullYear()} MCRh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
