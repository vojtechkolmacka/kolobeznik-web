import { b as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { h as Check, o as Minus, v as ArrowLeft } from "./_libs/lucide-react.mjs";
import { c as ScooterCard, d as scooters, f as verdictLabel, i as PageHero, l as categoryLabel, p as cn, r as Route$2, s as Button } from "./_ssr/router-BNACtsIj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CNy_n5uz.js
var import_jsx_runtime = require_jsx_runtime();
var verdictClass = {
	recommend: "bg-lime text-ink",
	mixed: "bg-paper text-ink",
	avoid: "bg-ink text-paper",
	beast: "bg-moss text-lime",
	draft: "bg-muted text-paper"
};
function ScooterDetail() {
	const { scooter } = Route$2.useLoaderData();
	const related = scooters.filter((s) => s.category === scooter.category && s.slug !== scooter.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: `${categoryLabel[scooter.category]} · ${verdictLabel[scooter.verdict]}`,
			title: scooter.name,
			lead: scooter.blurb,
			image: scooter.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.15fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/testy",
					className: "inline-flex items-center gap-1.5 text-sm text-muted no-underline hover:text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Všechny testy"]
				}),
				scooter.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-relaxed text-pretty",
					children: scooter.body
				}) : null,
				scooter.specs && scooter.specs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold uppercase tracking-tight",
						children: "Specifikace"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-4 divide-y divide-ink/10 border-y border-ink/10",
						children: scooter.specs.map((sp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: sp.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right font-medium",
								children: sp.value
							})]
						}, sp.label))
					})]
				}) : null,
				(scooter.pros.length > 0 || scooter.cons.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-lime/35 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold uppercase tracking-tight",
							children: "Výhody"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: scooter.pros.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-moss" }), p]
							}, p))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-surface p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold uppercase tracking-tight",
							children: "Nevýhody"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: scooter.cons.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "mt-0.5 size-4 shrink-0 text-muted" }), p]
							}, p))
						})]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: scooter.image,
					alt: scooter.name,
					className: "w-full rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-ink p-6 text-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("inline-block rounded-sm px-2 py-1 font-display text-xs font-bold uppercase", verdictClass[scooter.verdict]),
							children: verdictLabel[scooter.verdict]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-paper/75",
							children: "Chcete tenhle stroj — nebo podobný — projet v reálu? Ozvěte se."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								children: "Objednat test"
							})
						})
					]
				})]
			})]
		}),
		related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-extrabold uppercase tracking-tight",
				children: "Další ze stejné ligy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-3",
				children: related.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScooterCard, { scooter: s }, s.slug))
			})]
		}) : null
	] });
}
//#endregion
export { ScooterDetail as component };
