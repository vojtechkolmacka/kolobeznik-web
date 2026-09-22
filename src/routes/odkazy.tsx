import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/content/site";

export const Route = createFileRoute("/odkazy")({
  component: LinksPage,
  head: () => ({
    meta: [
      { title: "Odkazy · Koloběžník" },
      { name: "description", content: "Facebook, HeroHero a další stopy Koloběžníka." },
    ],
  }),
});

const links = [
  {
    name: "Facebook",
    href: site.facebook,
    text: "Aktuality, fotky z terénu, krátké hlášky z kopce.",
  },
  {
    name: "HeroHero",
    href: site.herohero,
    text: "Pokud chcete Koloběžníka podržet, tady to dává smysl.",
  },
  {
    name: "Mapy.cz — Růžďka 259",
    href: site.mapUrl,
    text: "Při kraji lesa směrem na Brdo.",
  },
];

export function LinksPage() {
  return (
    <main>
      <PageHero
        kicker="Odkazy"
        title={site.motto}
        lead="Stopy mimo tenhle web. Žádný katalog e-shopů — jen to, kudy se opravdu pohybuju."
      />
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <ul className="space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start justify-between gap-4 rounded-lg bg-surface p-5 text-ink no-underline transition-colors hover:bg-ink hover:text-lime"
              >
                <span>
                  <span className="font-display text-2xl font-bold uppercase tracking-tight">
                    {l.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted hover:text-inherit">
                    {l.text}
                  </span>
                </span>
                <ExternalLink className="mt-1 size-5 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
