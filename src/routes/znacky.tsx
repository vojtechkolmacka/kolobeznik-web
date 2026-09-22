import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { scooters } from "@/lib/content/scooters";

export const Route = createFileRoute("/znacky")({
  component: BrandsPage,
  head: () => ({
    meta: [
      { title: "Značky koloběžek · Koloběžník" },
      {
        name: "description",
        content: "Značky koloběžek — rozdíly, přednosti a nevšednosti. Připravuje se.",
      },
    ],
  }),
});

const brands = Array.from(
  new Set(
    scooters.map((s) => s.name.replace(/\s+\d.*$/, "").split(" ").slice(0, 2).join(" ")),
  ),
);

export function BrandsPage() {
  return (
    <main>
      <PageHero
        kicker="Značky koloběžek"
        title="Rozdíly, přednosti a nevšednosti"
        lead="Připravuje se. Zatím tu máte značky, které už mám odjeté a popsané v testech."
        image="/images/e-kick.jpg"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Tahle stránka se teprve plní. Nechci sem dávat katalog z e-shopu — spíš
          to, čím se značky liší, když je vezmete z kopce, do spoje a přes zimu.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {scooters.map((s) => (
            <li key={s.slug}>
              <Link
                to="/testy/$slug"
                params={{ slug: s.slug }}
                className="flex items-center justify-between rounded-md bg-surface px-4 py-3 text-ink no-underline hover:bg-ink hover:text-lime"
              >
                <span className="font-display text-lg font-bold uppercase tracking-tight">
                  {s.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">{brands.length} jmen v terénu — a další se dopisují.</p>
      </div>
    </main>
  );
}
