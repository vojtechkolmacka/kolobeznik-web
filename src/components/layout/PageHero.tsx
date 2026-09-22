import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lead,
  image,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  image?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ink text-paper",
        image ? "min-h-[42vh]" : "py-16 md:py-20",
      )}
    >
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-45"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {kicker ? (
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-lime">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-balance sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-paper/80 sm:text-lg">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
