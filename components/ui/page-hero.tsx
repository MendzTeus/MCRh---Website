import Image from "next/image";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  imageSrc = "/images/mcrh-hero-reference.png",
  imageAlt = "Luxury Manchester apartment interior",
  className,
}: PageHeroProps) {
  return (
    <section className={cn("bg-midnight text-white", className)}>
      <Container className="grid min-h-[560px] gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.15em] text-brass uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-tight font-normal sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            {intro}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 lg:aspect-[5/4]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/35 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
