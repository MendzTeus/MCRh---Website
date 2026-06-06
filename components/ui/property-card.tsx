import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type PropertyCardProps = {
  name: string;
  area: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  specs: string[];
  className?: string;
};

export function PropertyCard({
  name,
  area,
  href,
  imageSrc,
  imageAlt,
  specs,
  className,
}: PropertyCardProps) {
  return (
    <article
      className={cn(
        "group border-outline-soft bg-surface-container-low rounded-lg border",
        className,
      )}
    >
      <Link href={href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/45 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 rounded-full border border-white/35 bg-midnight/55 px-3 py-1 text-xs font-semibold tracking-[0.15em] text-white uppercase backdrop-blur-md">
            {area}
          </p>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl leading-snug font-normal text-midnight">
            {name}
          </h3>
          <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-outline-soft pt-5">
            {specs.map((spec) => (
              <div key={spec}>
                <dt className="sr-only">Feature</dt>
                <dd className="text-xs leading-5 font-semibold tracking-[0.12em] text-charcoal uppercase">
                  {spec}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-brass-deep mt-6 text-xs font-semibold tracking-[0.15em] uppercase">
            View property
          </p>
        </div>
      </Link>
    </article>
  );
}
