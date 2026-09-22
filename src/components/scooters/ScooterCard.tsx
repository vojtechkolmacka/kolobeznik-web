import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
  categoryLabel,
  verdictLabel,
  type Scooter,
} from "@/lib/content/scooters";
import { cn } from "@/lib/utils";

const verdictClass: Record<Scooter["verdict"], string> = {
  recommend: "bg-lime text-ink",
  mixed: "bg-paper text-ink",
  avoid: "bg-ink text-paper",
  beast: "bg-moss text-lime",
  draft: "bg-muted text-paper",
};

export function ScooterCard({ scooter }: { scooter: Scooter }) {
  return (
    <Link
      to="/testy/$slug"
      params={{ slug: scooter.slug }}
      className="group flex flex-col overflow-hidden rounded-lg bg-paper text-ink no-underline shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <img
          src={scooter.image}
          alt={scooter.name}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-sm px-2 py-1 font-display text-xs font-bold uppercase tracking-wide",
            verdictClass[scooter.verdict],
          )}
        >
          {verdictLabel[scooter.verdict]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          {categoryLabel[scooter.category]}
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-tight tracking-tight">
          {scooter.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{scooter.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-moss">
          Celý test
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
