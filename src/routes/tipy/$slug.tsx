import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { getTip } from "@/lib/content/tips";

export const Route = createFileRoute("/tipy/$slug")({
  component: TipDetail,
  loader: ({ params }) => {
    const tip = getTip(params.slug);
    if (!tip) throw notFound();
    return { tip };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.tip.title ?? "Tip"} · Koloběžník` },
      { name: "description", content: loaderData?.tip.excerpt ?? "" },
    ],
  }),
});

function TipDetail() {
  const { tip } = Route.useLoaderData();
  return (
    <main>
      <PageHero kicker={tip.date} title={tip.title} lead={tip.excerpt} image={tip.image} />
      <article className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <Link
          to="/tipy"
          className="inline-flex items-center gap-1.5 text-sm text-muted no-underline hover:text-ink"
        >
          <ArrowLeft className="size-4" />
          Všechny tipy
        </Link>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty">
          {tip.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
