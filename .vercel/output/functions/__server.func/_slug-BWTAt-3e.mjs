import { b as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { v as ArrowLeft } from "./_libs/lucide-react.mjs";
import { i as PageHero, n as Route } from "./_ssr/router-BNACtsIj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BWTAt-3e.js
var import_jsx_runtime = require_jsx_runtime();
function TipDetail() {
	const { tip } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: tip.date,
		title: tip.title,
		lead: tip.excerpt,
		image: tip.image
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl px-4 py-12 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/tipy",
			className: "inline-flex items-center gap-1.5 text-sm text-muted no-underline hover:text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Všechny tipy"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-4 text-base leading-relaxed text-pretty",
			children: tip.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
		})]
	})] });
}
//#endregion
export { TipDetail as component };
