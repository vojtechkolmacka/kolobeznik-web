//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-BAcABEl-.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/cenik",
			"/kontakt",
			"/novinky",
			"/o-mne",
			"/odkazy",
			"/znacky",
			"/testy/$slug",
			"/tipy/$slug",
			"/testy/",
			"/tipy/"
		],
		preloads: ["/assets/index-eA3tpUDO.js", "/assets/utils-BRzfAcLu.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-eA3tpUDO.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: ["/assets/routes-C4qhYZej.js"]
	},
	"/testy/$slug": {
		filePath: "/workspace/src/routes/testy/$slug.tsx",
		children: void 0,
		preloads: ["/assets/_slug-D29Mnqc1.js", "/assets/arrow-left-BGIQXkXC.js"]
	},
	"/tipy/$slug": {
		filePath: "/workspace/src/routes/tipy/$slug.tsx",
		children: void 0,
		preloads: ["/assets/_slug-De78v-J3.js", "/assets/arrow-left-BGIQXkXC.js"]
	}
} });
//#endregion
export { tsrStartManifest };
