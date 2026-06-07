"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/content/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-outline-soft/30 bg-background/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-5 md:px-16">
        <Link
          href="/"
          className="font-serif text-2xl font-normal tracking-tight text-midnight"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav
            .filter((item) => item.label !== "Home")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-[0.15em] text-charcoal uppercase transition-colors hover:text-brass-deep"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <Link
          href="/contacto"
          className="inline-flex items-center justify-center border border-midnight px-6 py-3 text-xs font-semibold tracking-[0.15em] text-midnight uppercase transition-colors hover:bg-surface-container"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
