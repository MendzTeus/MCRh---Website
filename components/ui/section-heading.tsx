import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="text-brass-deep text-xs font-semibold tracking-[0.15em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-serif text-4xl leading-tight font-normal text-midnight sm:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal">{body}</p>
      ) : null}
    </div>
  );
}
