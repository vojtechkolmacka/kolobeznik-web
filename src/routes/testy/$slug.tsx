import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ScooterCard } from "@/components/scooters/ScooterCard";
import { Button } from "@/components/ui/button";
import {
  categoryLabel,
  getScooter,
  scooters,
  verdictLabel,
} from "@/lib/content/scooters";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/testy/$slug")({
  component: ScooterDetail,
  loader: ({ params }) => {
    const scooter = getScooter(params.slug);
    if (!scooter) throw notFound();
    return { scooter };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.scooter.name ?? "Test"} · Koloběžník` },
      {
        name: "description",
        content: loaderData?.scooter.blurb ?? "Recenze koloběžky",
      },
    ],
  }),
});

const verdictClass: Record<string, string> = {
  recommend: "bg-lime text-ink",
  mixed: "bg-paper text-ink",
  avoid: "bg-ink text-paper",
  beast: "bg-moss text-lime",
  draft: "bg-muted text-paper",
};

function ScooterDetail() {
  const { scooter } = Route.useLoaderData();
  const related = scooters
    .filter((s) => s.category === scooter.category && s.slug !== scooter.slug)
    .slice(0, 3);

  return (
    <main>
      <PageHero
        kicker={`${categoryLabel[scooter.category]} · ${verdictLabel[scooter.verdict]}`}
        title={scooter.name}
        lead={scooter.blurb}
        image={scooter.image}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.15fr_0.85fr]">
        <article>
          <Link
            to="/testy"
            className="inline-flex items-center gap-1.5 text-sm text-muted no-underline hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Všechny testy
          </Link>
          {scooter.body ? (
            <p className="mt-6 text-base leading-relaxed text-pretty">{scooter.body}</p>
          ) : null}

          {scooter.specs && scooter.specs.length > 0 ? (
            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                Specifikace
              </h2>
              <dl className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                {scooter.specs.map((sp) => (
                  <div key={sp.label} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-muted">{sp.label}</dt>
                    <dd className="text-right font-medium">{sp.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {(scooter.pros.length > 0 || scooter.cons.length > 0) && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-lime/35 p-5">
                <h2 className="font-display text-xl font-bold uppercase tracking-tight">
                  Výhody
                </h2>
                <ul className="mt-3 space-y-2">
                  {scooter.pros.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-moss" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-surface p-5">
                <h2 className="font-display text-xl font-bold uppercase tracking-tight">
                  Nevýhody
                </h2>
                <ul className="mt-3 space-y-2">
                  {scooter.cons.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-relaxed">
                      <Minus className="mt-0.5 size-4 shrink-0 text-muted" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </article>
        <aside className="space-y-4">
          <img
            src={scooter.image}
            alt={scooter.name}
            className="w-full rounded-lg object-cover"
          />
          <div className="rounded-lg bg-ink p-6 text-paper">
            <span
              className={cn(
                "inline-block rounded-sm px-2 py-1 font-display text-xs font-bold uppercase",
                verdictClass[scooter.verdict],
              )}
            >
              {verdictLabel[scooter.verdict]}
            </span>
            <p className="mt-4 text-sm text-paper/75">
              Chcete tenhle stroj — nebo podobný — projet v reálu? Ozvěte se.
            </p>
            <Button asChild className="mt-5">
              <Link to="/kontakt">Objednat test</Link>
            </Button>
          </div>
        </aside>
      </div>
      {related.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight">
            Další ze stejné ligy
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <ScooterCard key={s.slug} scooter={s} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
