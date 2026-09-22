import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { prices } from "@/lib/content/site";

export const Route = createFileRoute("/cenik")({
  component: PricePage,
  head: () => ({
    meta: [
      { title: "Ceník · Koloběžník" },
      {
        name: "description",
        content:
          "Údržba, servis, zátěžové testy, zapůjčení koloběžky a individuální trénink.",
      },
    ],
  }),
});

export function PricePage() {
  return (
    <main>
      <PageHero
        kicker="Ceník"
        title="Servis, testy, zaučení"
        lead="Hodiny v dílně, kilometry v terénu. Materiál k opravě se počítá zvlášť."
        image="/images/workshop-orig.jpg"
      />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {prices.map((p) => (
            <li key={p.name} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="max-w-lg">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                  {p.name}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.detail}</p>
              </div>
              <p className="shrink-0 font-display text-2xl font-extrabold uppercase tracking-tight text-moss">
                {p.price}
                {p.unit ? (
                  <span className="ml-2 text-sm font-semibold text-muted">/ {p.unit}</span>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          Zapůjčení koloběžky je oproti vratné záloze 1 000 Kč. U servisu se přičítá
          potřebný materiál. Reklama a propagace značky individuálně.
        </p>
        <Button asChild variant="ink" className="mt-8">
          <Link to="/kontakt">Domluvit termín</Link>
        </Button>
      </div>
    </main>
  );
}
