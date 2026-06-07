"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 w-full max-w-container-max mx-auto">
        {/* Left links */}
        <div className="hidden md:flex space-x-8 items-center flex-1">
          <Link className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 transition-colors duration-300" href="/">Home</Link>
          <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/propriedades">Book Now</Link>
          <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/servicos/design">Design Services</Link>
        </div>
        {/* Logo center */}
        <div className="flex-shrink-0 text-center flex-1 md:flex-none">
          <Link className="text-headline-md font-headline-md tracking-tighter text-primary" href="/">MCRh</Link>
        </div>
        {/* Right links */}
        <div className="hidden md:flex space-x-8 items-center justify-end flex-1">
          <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/sobre">About Us</Link>
          <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/contacto">Contact Us</Link>
          <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/servicos/gestao">Management Services</Link>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-primary">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
