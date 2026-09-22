import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, d as GraduationCap, f as Gauge, n as Wrench, s as MessageSquare } from "../_libs/lucide-react.mjs";
import { a as services, c as ScooterCard, d as scooters, o as site, s as Button, u as featuredSlugs } from "./router-BNACtsIj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-4h9q6MVV.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	gauge: Gauge,
	wrench: Wrench,
	message: MessageSquare,
	ride: GraduationCap
};
function Home() {
	const featured = featuredSlugs.map((slug) => scooters.find((s) => s.slug === slug)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[88vh] overflow-hidden bg-ink text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Jízda na koloběžce lesní silnicí na Vsetínsku",
					className: "absolute inset-0 size-full object-cover object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:pb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold uppercase tracking-[0.24em] text-lime",
							children: "Růžďka · Vsetínsko"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl md:text-8xl",
							children: site.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-pretty text-paper/85 sm:text-lg",
							children: "Teprve na koloběžce je to ten pravý relax, zažijte radost z přirozeného pohybu. Odpočinete od ruchu, uděláte něco pro zdraví — a když to vezmete z kopce, je to adrenalin."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/testy",
									children: ["Moje testy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/kontakt",
									children: "Objednat test"
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-lime",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4",
				children: [
					{
						n: site.record,
						l: "osobní rekord na skládačce"
					},
					{
						n: `${scooters.length}`,
						l: "odjetých a popsaných modelů"
					},
					{
						n: "3 zimy",
						l: "na jedné JD Bug MS132"
					},
					{
						n: "24/7",
						l: "podmínky, které výrobce nezkouší"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-8 text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink/70",
						children: s.l
					})]
				}, s.l))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold uppercase tracking-[0.2em] text-moss",
					children: "Co umím"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-2xl font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance md:text-5xl",
					children: "Testování, servis, zaučení"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2",
					children: services.map((s) => {
						const Icon = icons[s.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: s.href,
							className: "group rounded-lg bg-surface p-6 text-ink no-underline shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-7 text-moss",
									strokeWidth: 1.6
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-bold uppercase tracking-tight",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: s.text
								})
							]
						}, s.title);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/portrait.jpg",
					alt: "Koloběžník se skládací koloběžkou",
					className: "aspect-[4/5] w-full rounded-lg object-cover object-top md:max-h-[640px]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold uppercase tracking-[0.2em] text-lime",
						children: "O mně"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance md:text-5xl",
						children: "Začalo to zmeškaným spojem"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-pretty text-paper/80",
						children: "To, co začalo jako otravná nezbytnost při komplikované dopravě, se záhy stalo oblíbeným koníčkem. Bydlím na kopci, skládačky nemají ideální brzdy — a přesto je základ HLAVNĚ NEBRZDIT. Když jsem překonal strach, začalo to bavit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-paper/80",
						children: "Otestuji jakoukoli skládací koloběžku, v jakýchkoli představitelných i nepředstavitelných podmínkách. Shrnu přednosti i nedostatky. Navrhnu náměty ke zlepšení."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "primary",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/o-mne",
							children: ["Celý příběh", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold uppercase tracking-[0.2em] text-moss",
					children: "Recenze"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-extrabold uppercase leading-none tracking-tight",
					children: "Odjeté kilometry"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "limeOutline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/testy",
						children: "Všechny testy"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: featured.map((s) => s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScooterCard, { scooter: s }, s.slug) : null)
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-moss py-16 text-paper md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance md:text-5xl",
					children: "Chcete otestovat stroj?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-lg text-paper/80",
					children: "Zátěžový test, servis nebo zaučení. Napište, zavolejte, nebo se stavte — při kraji lesa směrem na Brdo."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kontakt",
						children: ["Napsat Koloběžníkovi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
