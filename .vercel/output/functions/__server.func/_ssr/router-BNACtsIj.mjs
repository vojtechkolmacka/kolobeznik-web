import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as Menu, g as ArrowUpRight, i as Search, l as MapPin, m as Clock, p as ExternalLink, r as TriangleAlert, t as X, u as Mail } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/ScooterCard-CTuP6QnJ.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-display text-lg tracking-wide uppercase transition-transform duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime", {
	variants: {
		variant: {
			primary: "bg-lime text-ink hover:bg-paper",
			ink: "bg-ink text-paper hover:bg-moss hover:text-lime",
			outline: "bg-transparent text-paper shadow-[0_0_0_1px_rgba(243,239,228,0.35)] hover:bg-paper hover:text-ink",
			ghost: "bg-transparent text-ink hover:bg-ink/8",
			limeOutline: "bg-transparent text-ink shadow-[0_0_0_1px_rgba(18,20,15,0.18)] hover:bg-ink hover:text-lime"
		},
		size: {
			md: "h-12 px-5 min-h-11",
			lg: "h-14 px-7 min-h-12",
			sm: "h-10 px-4 text-base min-h-10"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var categories = [
	{
		id: "all",
		label: "Vše"
	},
	{
		id: "folding",
		label: "Skládací"
	},
	{
		id: "sport",
		label: "Sportovní"
	},
	{
		id: "electric",
		label: "Elektro"
	},
	{
		id: "special",
		label: "Speciál"
	}
];
var verdictLabel = {
	recommend: "Doporučeno",
	mixed: "S výhradami",
	avoid: "Nedoporučeno",
	beast: "Bestie",
	draft: "Připravuje se"
};
var categoryLabel = {
	folding: "Skládací",
	sport: "Sportovní",
	electric: "Elektro",
	special: "Speciál"
};
var scooters = [
	{
		slug: "spartan-jumbo",
		name: "Spartan Jumbo",
		category: "folding",
		verdict: "mixed",
		image: "/images/scooter-01.jpg",
		blurb: "Lehká, skladná, jednoduše přenosná — skládání už je jiná písnička.",
		pros: ["Lehká, skladná, jednoduše přenosná"],
		cons: ["Složitější systém skládání"]
	},
	{
		slug: "jd-bug-ms132",
		name: "JD Bug MS132",
		category: "folding",
		verdict: "recommend",
		image: "/images/scooter-02.jpg",
		blurb: "Zatím asi nejkvalitněji zpracovaná skládačka. Odjezdila se mnou dokonce tři zimy.",
		body: "Opravdu jedna z mála, ne-li jediná skládací koloběžka, se kterou je možno jezdit i lehký freestyle.",
		pros: [
			"Velmi kvalitní konstrukce, lehká i skladná",
			"Mezipoloha pro odstavení koloběžky (místo stojánku)",
			"Tři zimy v terénu — a pořád jezdí"
		],
		cons: ["Malá kolečka, vcelku se člověk nadře"]
	},
	{
		slug: "kruzzel-hyperion",
		name: "Kruzzel Hyperion",
		category: "folding",
		verdict: "avoid",
		image: "/images/scooter-03.jpg",
		blurb: "Výbava a cena lákají. Konstrukce to neustojí.",
		pros: ["Výbava + nízká cena, velká kola, rychlá"],
		cons: ["Velmi chabá konstrukce — vpředu u skládání se mi ani ne po měsíci rozlomila téměř vejpůl"]
	},
	{
		slug: "tempish-tecnique-top",
		name: "Tempish Tecnique Top",
		category: "folding",
		verdict: "mixed",
		image: "/images/scooter-04.jpg",
		blurb: "Velká 20\" kola, výbava až na rozdávání. Po čase začne chrastit.",
		specs: [{
			label: "Hmotnost",
			value: "cca 6,5 kg"
		}],
		pros: [
			"Velká 20\" kola, rychlá",
			"Držák na lahve, stojánek, kotoučová zadní brzda",
			"Široký a snížený nášlap, skládání na sešlápnutí",
			"Tvarovaný představec, odpružení předního i zadního kola",
			"Mezipoloha pro parkování bez stojanu"
		],
		cons: ["Po delší době používání se ozývá chrastění", "Třecí brzda je po nějaké době „ohořená“ — materiál plast + kov"]
	},
	{
		slug: "spartan-jumbo-ii",
		name: "Spartan Jumbo II",
		category: "folding",
		verdict: "mixed",
		image: "/images/scooter-05.jpg",
		blurb: "Rychlá a lehká i přes robustní konstrukci. Známý problém se skládáním.",
		pros: [
			"Rychlá, zadní odpružení (listové tlumiče)",
			"I přes robustní konstrukci velmi lehká",
			"Třecí brzda s velmi dobrým odvodem tepla"
		],
		cons: [
			"Po delší době tentýž problém jako u Kruzzel Hyperion",
			"Třecí brzda málo účinná",
			"Méně praktický skládací mechanismus"
		]
	},
	{
		slug: "six-degrees-lw-205",
		name: "Six Degrees Authentic Aluminium LW 205",
		category: "folding",
		verdict: "recommend",
		image: "/images/scooter-06.jpg",
		blurb: "Letecký hliník, lehká, rychlá. Stojánek by mohl být chytřejší.",
		pros: [
			"Kvalitní zpracování a konstrukce z leteckého hliníku",
			"Velmi lehká i rychlá, 20\" kola, stojánek",
			"Kvalitní zadní třecí brzda s výborným odvodem tepla"
		],
		cons: ["Stojánek by nemusel být tolik „utopený“ pod nášlapnou deskou"]
	},
	{
		slug: "spokey-taranis-plus",
		name: "Spokey Taranis Plus",
		category: "folding",
		verdict: "mixed",
		image: "/images/scooter-07.jpg",
		blurb: "Režim trolley jako kufr na kolečkách. Vyšší lidé dělají dřepy.",
		pros: [
			"Tvarovaná konstrukce pro režim trolley",
			"20\" kola, držák na lahve, široký nášlap",
			"Kotoučová zadní brzda, skládání na sešlápnutí",
			"Tvarovaný představec, odpružení předního kola"
		],
		cons: ["Vyšší nášlap (vyšší lidé dělají „dřepy“)", "Upevnění předního kola má tendenci se rychle vychodit a „házet do osmičky“"]
	},
	{
		slug: "hudora-bigwheel-205",
		name: "Hudora BigWheel 205",
		category: "folding",
		verdict: "mixed",
		image: "/images/scooter-08.jpg",
		blurb: "Německá výroba, patentované rychlé skládání. Pozor na samovolné složení.",
		pros: [
			"Rychlá, rychlé skládání",
			"Patentovaný mechanismus pro jednoduché a rychlé složení",
			"Německá výroba"
		],
		cons: ["Chybí pojistka proti samovolnému skládání"]
	},
	{
		slug: "xootr-street",
		name: "Xootr Street",
		category: "folding",
		verdict: "recommend",
		image: "/images/scooter-09.jpg",
		blurb: "Americká výroba, nosnost až 300 kg. Cítíte každý šutr — a zaplatíte to.",
		body: "Hodně kvalitní koloběžka americké výroby. No věřitel na nosnost až 300 kg. Většina skládacích koloběžek má totiž nosnost max. 130 kg. Bohužel tento parametr je vykoupen trochu vyšší cenou, která se pohybuje cca kolem 10 000 Kč.",
		specs: [{
			label: "Nosnost",
			value: "až 300 kg"
		}, {
			label: "Cena",
			value: "cca 10 000 Kč"
		}],
		pros: ["Rychlá, jednoduché složení a rozložení, lehká, obrovská nosnost"],
		cons: ["Vyšší cena", "Díky nízkoprofilovým kolům cítíte každý šutr"]
	},
	{
		slug: "jd-bug-deluxe-b",
		name: "JD Bug Deluxe B",
		category: "folding",
		verdict: "mixed",
		image: "/images/scooter-10.jpg",
		blurb: "Extra široké pneumatiky = pohodlná jízda. Brzda je slabší článek.",
		pros: ["Rychlá a pohodlná jízda díky extra širokým pneumatikám"],
		cons: ["Slabší účinnost nášlapné brzdy"]
	},
	{
		slug: "micro-sprite",
		name: "Micro Sprite",
		category: "folding",
		verdict: "recommend",
		image: "/images/scooter-11.jpg",
		blurb: "Švýcarská výroba, patentované skládání, šroubované díly. Kolečka jsou mrňavá.",
		pros: [
			"Švýcarská výroba, velmi skladná — patentovaný skládací mechanismus",
			"Skládací rukojeti, stojánek, nízký nášlap",
			"Na tak malou koloběžku velmi rychlá",
			"Většina dílů je přišroubována — snadno vyměnitelná"
		],
		cons: ["Velmi malá kolečka"]
	},
	{
		slug: "snehobezka",
		name: "Sněhoběžka",
		category: "special",
		verdict: "beast",
		image: "/images/snow.jpg",
		blurb: "Když kola selhávají. Na sněhu až neuvěřitelně rychlá. Brzdu nemá.",
		body: "Sněhoběžka, když kola selhávají…",
		pros: ["Na sněhu až neuvěřitelně rychlá"],
		cons: ["Nemá brzdu"]
	},
	{
		slug: "myhood-tour",
		name: "MyHood Tour",
		category: "folding",
		verdict: "mixed",
		image: "/images/scooter-13.jpg",
		blurb: "Jedna z nejskladnějších vůbec. Složíte do kufru. Kloub to odskáče.",
		body: "Jedna z nejskladnějších koloběžek vůbec. Lze v pohodě složit do kufru a vzít s sebou na dovolenou. Přitom není vůbec drahá, koupit lze už za 1 500 Kč.",
		specs: [{
			label: "Cena",
			value: "od 1 500 Kč"
		}],
		pros: ["Levná, maximálně skladná a mobilní koloběžka"],
		cons: ["Docela brzo se objevil problém se skládacím mechanismem v místě kloubu půlení nášlapné desky"]
	},
	{
		slug: "jd-bug-ms105",
		name: "JD Bug MS105",
		category: "folding",
		verdict: "mixed",
		image: "/images/scooter-14.jpg",
		blurb: "Lehoučká, skladná i vcelku rychlá. Manévrovatelnost zaostává.",
		body: "Lehoučká skladná i vcelku rychlá koloběžka.",
		pros: ["Velmi skladná, kvalitní konstrukce a zpracování, velmi lehká"],
		cons: ["Malá kolečka, malá manévrovatelnost"]
	},
	{
		slug: "sulov-condor-26-20",
		name: "Sulov Condor 26/20",
		category: "sport",
		verdict: "recommend",
		image: "/images/scooter-15.jpg",
		blurb: "Velká nafukovací kola 26\"/20\" — město i cyklostezka, pohodlně přes nerovnosti.",
		body: "Sportovní koloběžka Sulov CONDOR je díky velkým nafukovacím kolům 26\"/20\" ideální pro jízdu ve městě i na zpevněných cyklostezkách.",
		specs: [
			{
				label: "Rám",
				value: "Odlehčená ocel"
			},
			{
				label: "Kola",
				value: "26\" vpředu / 20\" vzadu, nafukovací"
			},
			{
				label: "Brzdy",
				value: "Hliníkové V-brzdy"
			},
			{
				label: "Nosnost",
				value: "120 kg"
			},
			{
				label: "Hmotnost",
				value: "cca 12,9 kg"
			}
		],
		pros: [
			"Přední 26\" kolo skvěle přejíždí nerovnosti",
			"Dobrý poměr cena/výkon včetně doplňků",
			"Stabilní a plynulá jízda",
			"Držák na lahev, blatník a stojánek v základu"
		],
		cons: [
			"S téměř 13 kg nepatří mezi nejlehčí",
			"Ocel je těžší než hliník",
			"Méně obratná v ostrých zatáčkách"
		]
	},
	{
		slug: "quick-sport-tala",
		name: "Quick Sport Tala",
		category: "sport",
		verdict: "recommend",
		image: "/images/scooter-16.jpg",
		blurb: "Nosnost až 150 kg. Solidní volba na rovné povrchy pro celou rodinu.",
		body: "Myslím, že je to solidní volba pro někoho, kdo hledá univerzální a stabilní koloběžku na rovné povrchy.",
		specs: [
			{
				label: "Min. výška jezdce",
				value: "140 cm"
			},
			{
				label: "Rám / vidlice",
				value: "Ocel"
			},
			{
				label: "Brzdy",
				value: "V-brake"
			},
			{
				label: "Kola",
				value: "20\" vpředu / 16\" vzadu"
			},
			{
				label: "Hmotnost",
				value: "7,4 kg"
			},
			{
				label: "Nosnost",
				value: "až 150 kg"
			}
		],
		pros: [
			"Stabilní a zároveň slušně rychlá",
			"Hodí se pro dospívající i dospělé",
			"Výjimečná nosnost 150 kg",
			"Výškově nastavitelná řídítka",
			"Ideální na město, cyklostezky, parky"
		],
		cons: [
			"Ocelový rám je těžší než hliník",
			"Není vhodná do těžšího terénu",
			"V-brake za mokra zaostávají za kotouči"
		]
	},
	{
		slug: "yedoo-city",
		name: "Yedoo City",
		category: "sport",
		verdict: "recommend",
		image: "/images/scooter-17.jpg",
		blurb: "Lehká, obratná městská koloběžka. Na šotolině ucítíte každý kamínek.",
		body: "Yedoo City je ideální volba, pokud chceš něco lehkého, s čím se budeš prohánět po městě.",
		specs: [
			{
				label: "Rám",
				value: "Odlehčená ocel"
			},
			{
				label: "Kola",
				value: "16\" / 12\", nafukovací"
			},
			{
				label: "Brzdy",
				value: "V-brzdy Alhonga"
			},
			{
				label: "Nosnost",
				value: "120 kg"
			},
			{
				label: "Hmotnost",
				value: "cca 9,3 kg"
			}
		],
		pros: [
			"Výborná manévrovatelnost v městském provozu",
			"Váha pod 10 kg — MHD, schody, auto",
			"Kvalitní zpracování Yedoo",
			"Na rovném asfaltu je jako doma"
		],
		cons: [
			"Menší kola nejsou pohodlná na nerovnostech",
			"Pro udržení rychlosti víc práce než u velkých kol",
			"Stojánek a blatníky se často dokupují"
		]
	},
	{
		slug: "nipper-n12",
		name: "Nipper N12",
		category: "special",
		verdict: "draft",
		image: "/images/scooter-18.jpg",
		blurb: "Test se připravuje — zatím jen na soupisce.",
		pros: [],
		cons: [],
		body: "Recenze tohoto modelu se připravuje. Jakmile s ním odjezdím dost kilometrů, doplním přednosti i nedostatky."
	},
	{
		slug: "razor-a5-air",
		name: "Razor A5 Air",
		category: "folding",
		verdict: "recommend",
		image: "/images/scooter-19.jpg",
		blurb: "Foukací kola, nechrastí ani po delší době. Pomalejší než plná kolečka.",
		pros: [
			"Velmi skladná, kvalitní konstrukce, velmi lehká",
			"Pohodlné foukací kola",
			"Díky patentované konstrukci ani po delší době nechrastí"
		],
		cons: ["Foukaná kolečka jsou pomalejší než plná, nefoukaná"]
	},
	{
		slug: "toursor-e5b",
		name: "Toursor E5B 60V 35Ah 2×2800W",
		category: "electric",
		verdict: "beast",
		image: "/images/scooter-20.jpg",
		blurb: "5 600 W, 85–90 km/h, 50 kg. Bestie mimo silnice. Bez homologace.",
		body: "Je to naprostá bestie, která je dělaná pro fajnšmekry, co chtějí jezdit mimo silnice a potřebují obrovský výkon a rychlost. Je to ale za cenu velkých omezení, hlavně kvůli nehomologaci.",
		specs: [
			{
				label: "Motor",
				value: "2× 2800 W (5 600 W)"
			},
			{
				label: "Baterie",
				value: "60 V, 35 Ah"
			},
			{
				label: "Rychlost",
				value: "85–90 km/h"
			},
			{
				label: "Dojezd",
				value: "až 100 km+"
			},
			{
				label: "Hmotnost",
				value: "45–50 kg"
			},
			{
				label: "Nosnost",
				value: "150 kg"
			},
			{
				label: "Brzdy",
				value: "Hydraulické kotoučové"
			},
			{
				label: "Pneumatiky",
				value: "11\" off-road"
			},
			{
				label: "Homologace",
				value: "Ne (ČR)"
			}
		],
		pros: [
			"Brutální výkon — žádný kopec není problém",
			"Dlouhý dojezd s 35Ah baterií",
			"Hydraulické odpružení a 11\" kola i v terénu"
		],
		cons: [
			"Téměř 50 kg — není k přenášení",
			"Žádná homologace na veřejné komunikace",
			"Vysoká cena"
		]
	},
	{
		slug: "sencor-scooter-two-long-range",
		name: "Sencor Scooter Two Long Range 2021",
		category: "electric",
		verdict: "recommend",
		image: "/images/scooter-21.jpg",
		blurb: "Osobně odježděné dvě celé zimy. 400 W, které v kopci umí víc, než papír slibuje.",
		specs: [
			{
				label: "Motor",
				value: "400 W"
			},
			{
				label: "Baterie",
				value: "36 V, 10 Ah (dojezd až 45 km)"
			},
			{
				label: "Rychlost",
				value: "25 km/h / Sport 30 km/h"
			},
			{
				label: "Stoupání",
				value: "až 15°"
			},
			{
				label: "Hmotnost",
				value: "16 kg"
			},
			{
				label: "Nosnost",
				value: "120 kg"
			},
			{
				label: "Brzdy",
				value: "Kotoučová a elektrická"
			},
			{
				label: "Pneumatiky",
				value: "10\" nafukovací"
			}
		],
		pros: [
			"Bezkonkurenční poměr cena/výkon v době prodeje",
			"Odolnost — osobně odježděno 2× celá zima",
			"Levné a dostupné díly dodnes",
			"V kopcích s dopomocí odrazů efektivnější než papírově silnější stroje",
			"10\" profilová kola, komfort bez obav z defektu"
		],
		cons: ["Žádné odpružení — na horších silnicích znát", "Model 2021, na trhu jsou modernější stroje"]
	},
	{
		slug: "vega-viron-1000w",
		name: "Vega Viron 1000W",
		category: "electric",
		verdict: "mixed",
		image: "/images/scooter-22.jpg",
		blurb: "Kus železa 38 kg, řetěz, olověné baterie, sedadlo. Jen na soukromý pozemek.",
		specs: [
			{
				label: "Motor",
				value: "1000 W, vzduchem chlazený, řetěz"
			},
			{
				label: "Baterie",
				value: "36 V, 12 Ah (3× 12V olovo)"
			},
			{
				label: "Rychlost",
				value: "až 32 km/h (lze 6 km/h)"
			},
			{
				label: "Dojezd",
				value: "udávaných až 30 km"
			},
			{
				label: "Hmotnost",
				value: "38 kg"
			},
			{
				label: "Nosnost",
				value: "120 kg"
			},
			{
				label: "Brzdy",
				value: "Kotoučové vpředu i vzadu"
			},
			{
				label: "Homologace",
				value: "Ne (ČR)"
			}
		],
		pros: [
			"1000 W si poradí s kopci i terénem",
			"Plné odpružení a demontovatelné sedadlo",
			"Hodí se i na lesní a polní cesty",
			"Řetězový převod = krouticí moment do kopce"
		],
		cons: [
			"38 kg — MHD a schody skoro nemožné",
			"Řetěz chce mazání a napínání",
			"Olověné baterie, malý dojezd",
			"Bez homologace — jen soukromý pozemek"
		]
	},
	{
		slug: "nitro-scooter-x500-premium",
		name: "Nitro Scooter X500 Premium",
		category: "electric",
		verdict: "recommend",
		image: "/images/scooter-23.jpg",
		blurb: "Homologovaná česká značka, odnímatelná baterie. V kopcích 500 W ztrácí dech.",
		specs: [
			{
				label: "Motor",
				value: "500 W"
			},
			{
				label: "Baterie",
				value: "odnímatelná 48 V, 13 Ah"
			},
			{
				label: "Rychlost",
				value: "25 km/h (homologace)"
			},
			{
				label: "Dojezd",
				value: "až 40 km"
			},
			{
				label: "Hmotnost",
				value: "17 kg"
			},
			{
				label: "Nosnost",
				value: "120 kg"
			},
			{
				label: "Pneumatiky",
				value: "10\" nafukovací"
			},
			{
				label: "Homologace",
				value: "Ano (ČR)"
			}
		],
		pros: [
			"Homologace — legálně na veřejné komunikace",
			"Odnímatelná baterie, snadné nabíjení",
			"Bubnová + třecí brzda, slušná světla",
			"Česká značka — dostupný servis a díly"
		],
		cons: ["500 W v kopcích rychle ztrácí dech a potřebuješ se odrážet — Sencor 400 W to s odrazy zvládá lépe"]
	},
	{
		slug: "tajfun-500w",
		name: "Tajfun 500W (RCskladem)",
		category: "electric",
		verdict: "mixed",
		image: "/images/scooter-24.jpg",
		blurb: "Solidní dojezd a komfort za cenu. Servis u méně známé značky je sázka.",
		specs: [
			{
				label: "Motor",
				value: "500 W"
			},
			{
				label: "Baterie",
				value: "48 V, 13 Ah"
			},
			{
				label: "Rychlost",
				value: "až 40 km/h (veřejně 25 km/h)"
			},
			{
				label: "Dojezd",
				value: "udávaných 60 km, reálně 40–50 km"
			},
			{
				label: "Hmotnost",
				value: "cca 20 kg"
			},
			{
				label: "Nosnost",
				value: "120 kg"
			},
			{
				label: "Brzdy",
				value: "Kotoučové"
			},
			{
				label: "Odpružení",
				value: "Přední i zadní"
			}
		],
		pros: [
			"500 W stačí na město i rekreační výlety",
			"Solidní dojezd",
			"Odpružení a kotouče = komfort i bezpečí",
			"Často dostupnější než prémiové značky",
			"Senzor, alarm a dálkový ovladač"
		],
		cons: ["Výrobce neuvádí úhel stoupání", "U méně známé značky složitější servis a díly"]
	},
	{
		slug: "kaabo-skywalker-10h-800eco",
		name: "Kaabo Skywalker 10H 800Eco CZ edition",
		category: "electric",
		verdict: "recommend",
		image: "/images/scooter-25.jpg",
		blurb: "800 W, stoupání 25°, servis s vyzvednutím doma. Těch 20 kg už ucítíš.",
		specs: [
			{
				label: "Motor",
				value: "800 W"
			},
			{
				label: "Baterie",
				value: "48 V, 13 Ah (dojezd až 50 km)"
			},
			{
				label: "Rychlost",
				value: "45 km/h"
			},
			{
				label: "Stoupání",
				value: "až 25°"
			},
			{
				label: "Hmotnost",
				value: "cca 20 kg"
			},
			{
				label: "Nosnost",
				value: "120 kg"
			},
			{
				label: "Brzdy",
				value: "Kotoučové"
			},
			{
				label: "Pneumatiky",
				value: "10\" nafukovací"
			}
		],
		pros: [
			"800 W a stoupání až 25° — kopec tě nezastaví",
			"Pružinové odpružení, nafukovací kola, kotouče, podsvícený deck",
			"Kaabo nabízí servis s vyzvednutím u tebe doma",
			"Ověřená značka, dostupnost dílů"
		],
		cons: [
			"20 kg je dost na přenášení",
			"Vyšší cena",
			"Na veřejných komunikacích platí omezení rychlosti"
		]
	},
	{
		slug: "galaxy-calypso",
		name: "Galaxy Calypso",
		category: "electric",
		verdict: "draft",
		image: "/images/scooter-26.jpg",
		blurb: "Na soupisce. Recenze se dopisuje.",
		pros: [],
		cons: [],
		body: "Recenze modelu Galaxy Calypso se připravuje. Až bude hotová, najdete tu přednosti, nedostatky i doporučené využití."
	},
	{
		slug: "bouyeda-s3-11",
		name: "Bouyeda S3-11",
		category: "electric",
		verdict: "beast",
		image: "/images/scooter-27.jpg",
		blurb: "Dva motory 3000 W, 85 km/h, 100 km, stoupání 45°. Silná a odolná.",
		body: "Boyueda S3-11 je elektrická koloběžka pro náročné. Má dva motory o výkonu 3000 W, takže se s ní rozjedeš na 85 km/h. Na jedno nabití ujedeš až 100 km. Váží 50 kg a má 11palcové terénní gumy, takže zvládne i horší cesty. Zvládne stoupání až 45 stupňů. Má přední i zadní odpružení, skládací mechanismus a je odolná proti dešti. Nechybí ani LED osvětlení angel-eyes. Nabíjet ji můžeš dvěma nabíječkami najednou — s jednou to trvá 6–8 hodin, se dvěma jen 3–4 hodiny. Je to prostě silná a odolná koloběžka, která tě doveze, kam potřebuješ.",
		specs: [
			{
				label: "Motory",
				value: "2× 3000 W"
			},
			{
				label: "Rychlost",
				value: "85 km/h"
			},
			{
				label: "Dojezd",
				value: "až 100 km"
			},
			{
				label: "Baterie",
				value: "60 V, 38 Ah"
			},
			{
				label: "Hmotnost",
				value: "50 kg"
			},
			{
				label: "Stoupání",
				value: "až 45°"
			},
			{
				label: "Pneumatiky",
				value: "11\" terénní"
			},
			{
				label: "Nabíjení",
				value: "6–8 h / 3–4 h se dvěma nabíječkami"
			}
		],
		pros: [
			"Obrovský výkon a stoupání až 45°",
			"Dlouhý dojezd, terénní gumy",
			"Odpružení, skládání, odolnost proti dešti",
			"Rychlé nabíjení se dvěma nabíječkami"
		],
		cons: ["50 kg — přenášení je boj", "Výkon mimo běžný silniční provoz"]
	}
];
function getScooter(slug) {
	return scooters.find((s) => s.slug === slug);
}
var featuredSlugs = [
	"jd-bug-ms132",
	"sencor-scooter-two-long-range",
	"kaabo-skywalker-10h-800eco",
	"sulov-condor-26-20"
];
var verdictClass = {
	recommend: "bg-lime text-ink",
	mixed: "bg-paper text-ink",
	avoid: "bg-ink text-paper",
	beast: "bg-moss text-lime",
	draft: "bg-muted text-paper"
};
function ScooterCard({ scooter }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/testy/$slug",
		params: { slug: scooter.slug },
		className: "group flex flex-col overflow-hidden rounded-lg bg-paper text-ink no-underline shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: scooter.image,
				alt: scooter.name,
				className: "size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("absolute left-3 top-3 rounded-sm px-2 py-1 font-display text-xs font-bold uppercase tracking-wide", verdictClass[scooter.verdict]),
				children: verdictLabel[scooter.verdict]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted",
					children: categoryLabel[scooter.category]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-2xl font-bold uppercase leading-tight tracking-tight",
					children: scooter.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
					children: scooter.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-moss",
					children: ["Celý test", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
				})
			]
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BNACtsIj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var site = {
	name: "Koloběžník",
	tagline: "Začněte jezdit na koloběžce už dnes",
	motto: "Všem koloběžníkům R.E.S.P.E.C.T.",
	description: "Nezávislé zátěžové testy skládacích a elektrických koloběžek v jakýchkoli podmínkách. Servis, zaučení a technické poradenství z Růžďky na Vsetínsku.",
	phone: "+420 774 905 857",
	phoneHref: "tel:+420774905857",
	email: "info.kolobeznik@gmail.com",
	emailHref: "mailto:info.kolobeznik@gmail.com",
	address: "Růžďka 259, 756 25 Růžďka",
	addressNote: "Při kraji lesa směrem na Brdo",
	mapUrl: "https://mapy.cz/zakladni?q=R%C5%AF%C5%BE%C4%8Fka%20259",
	osmEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=17.96%2C49.37%2C18.03%2C49.42&layer=mapnik&marker=49.3939%2C17.9956",
	facebook: "https://m.facebook.com/Kolob%C4%9B%C5%BEn%C3%ADk-100565005664665/",
	herohero: "https://herohero.co/kolobeznik",
	hours: [
		{
			days: "Pondělí – čtvrtek",
			time: "19:00 – 23:00"
		},
		{
			days: "Pátek – sobota",
			time: "13:00 – 23:00"
		},
		{
			days: "Neděle",
			time: "9:00 – 19:00"
		}
	],
	hoursNote: "Jsem spíš v terénu a v dílně než za pultem. Před návštěvou prosím zavolejte nebo napište.",
	record: "72 km/h"
};
var nav = [
	{
		to: "/",
		label: "Úvod"
	},
	{
		to: "/testy",
		label: "Testy"
	},
	{
		to: "/cenik",
		label: "Ceník"
	},
	{
		to: "/o-mne",
		label: "O mně"
	},
	{
		to: "/tipy",
		label: "Tipy"
	},
	{
		to: "/novinky",
		label: "Novinky"
	},
	{
		to: "/znacky",
		label: "Značky"
	},
	{
		to: "/odkazy",
		label: "Odkazy"
	},
	{
		to: "/kontakt",
		label: "Kontakt"
	}
];
var services = [
	{
		title: "Testování skládacích koloběžek",
		text: "Otestuji jakoukoli skládací koloběžku — v jakýchkoli představitelných i nepředstavitelných podmínkách. Shrnu přednosti i nedostatky. Navrhnu náměty ke zlepšení.",
		href: "/testy",
		icon: "gauge"
	},
	{
		title: "Zátěžové testy",
		text: "Komplexní zátěžový test kvality zpracování. Silné a slabé stránky, kategorizace a vhodné využití konkrétního stroje.",
		href: "/cenik",
		icon: "wrench"
	},
	{
		title: "Technické poradenství",
		text: "Silné a slabé stránky vaší koloběžky, kategorizace a vhodné využití. Bez marketingového kecání — jen to, co vydrží kopec, zimu a skládání do spoje.",
		href: "/kontakt",
		icon: "message"
	},
	{
		title: "Zaučení a technika jízdy",
		text: "Technika správné jízdy na koloběžce. Základy, kontrola před jízdou, školení bezpečnosti. Vždy helma. Pak teprve rychlost.",
		href: "/cenik",
		icon: "ride"
	}
];
var prices = [
	{
		name: "Základní údržba",
		detail: "Kontrola dotažení spojů, pročištění a promazání točivých komponent.",
		price: "500 Kč",
		unit: "1 hodina"
	},
	{
		name: "Středně náročný servis",
		detail: "Výměna kol, ložisek, seřízení brzd. Plus potřebný materiál pro opravu.",
		price: "800 Kč",
		unit: "1 hodina"
	},
	{
		name: "Komplexní servis",
		detail: "Výměna opotřebených komponent, brzdového obložení, opravy těžkých závad (je-li to možné), upgrade a tuning. Plus materiál.",
		price: "1 600 Kč",
		unit: "zásah"
	},
	{
		name: "Zapůjčení koloběžky",
		detail: "Zapůjčení na 12 až 24 hodin. Oproti vratné záloze 1 000 Kč.",
		price: "800 / 1 400 Kč",
		unit: "12 / 24 h"
	},
	{
		name: "Zátěžové testy koloběžek",
		detail: "Komplexní zátěžový test kvality zpracování.",
		price: "1 500 Kč",
		unit: "den"
	},
	{
		name: "Individuální trénink",
		detail: "Základy jízdy na koloběžce, kontrola koloběžky před jízdou, školení bezpečnosti.",
		price: "225 Kč",
		unit: "1 lekce"
	},
	{
		name: "Reklama a propagace značky",
		detail: "Individuálně dle dohody.",
		price: "dohodou",
		unit: ""
	}
];
function Logo({ light = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("group flex items-center gap-2.5 no-underline", className),
		"aria-label": "Koloběžník — úvod",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("flex size-9 items-center justify-center rounded-sm", light ? "bg-lime text-ink" : "bg-ink text-lime"),
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "size-5",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "7",
						cy: "24",
						r: "3.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "24",
						cy: "24",
						r: "3.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M7 24h11.5L22 10h4",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M16 24V14",
						strokeLinecap: "round"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-display text-2xl font-bold uppercase leading-none tracking-wide", light ? "text-paper" : "text-ink"),
			children: "Koloběžník"
		})]
	});
}
function SiteHeader({ inverted = false }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40", inverted ? "bg-ink/90 text-paper backdrop-blur-md" : "bg-paper/90 text-ink backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: inverted }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Hlavní menu",
					children: nav.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("px-2.5 py-2 font-display text-[15px] font-semibold uppercase tracking-wide no-underline transition-colors", inverted ? active ? "text-lime" : "text-paper/75 hover:text-lime" : active ? "text-moss" : "text-ink/70 hover:text-ink"),
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("relative flex size-11 items-center justify-center lg:hidden", inverted ? "text-paper" : "text-ink"),
					"aria-label": open ? "Zavřít menu" : "Otevřít menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("overflow-hidden transition-[max-height,opacity] duration-200 ease-out lg:hidden", open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: cn("flex flex-col px-4 pb-5", inverted ? "bg-ink" : "bg-paper"),
				"aria-label": "Mobilní menu",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: cn("border-t py-3.5 font-display text-xl font-semibold uppercase tracking-wide no-underline", inverted ? "border-paper/10 text-paper" : "border-ink/10 text-ink"),
					children: item.label
				}, item.to))
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-paper/70",
						children: "Nezávislé testy skládacích a elektrických koloběžek. Servis, zaučení a zátěžovky z kraje lesa nad Růžďkou."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 font-display text-2xl font-bold uppercase tracking-wide text-lime",
						children: site.motto
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime",
					children: "Navigace"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 columns-2 gap-x-6 text-sm",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "mb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-paper/80 no-underline hover:text-lime",
							children: item.label
						})
					}, item.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime",
					children: "Kontakt"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "mt-4 not-italic text-sm leading-relaxed text-paper/80",
					children: [
						site.address,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						site.addressNote,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.phoneHref,
							className: "mt-2 inline-block text-paper no-underline hover:text-lime",
							children: site.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.emailHref,
							className: "text-paper no-underline hover:text-lime",
							children: site.email
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs text-paper/45 sm:px-6",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Koloběžník · Růžďka · Vsetínsko"
				]
			})
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm font-semibold uppercase tracking-[0.2em] text-moss",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-balance",
				children: "Tady nic nejezdí"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted text-pretty",
				children: "Tahle cesta nikam nevede. Zkus úvod, nebo se podívej na testy koloběžek."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Úvod"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "limeOutline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/testy",
						children: "Testy"
					})
				})]
			})
		]
	});
}
var styles_default = "/assets/styles-B2jM-Fio.css";
var APP_NAME = "Koloběžník";
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Nezávislé testy skládacích a elektrických koloběžek. Servis, zaučení a zátěžovky z Růžďky."
			},
			{
				name: "theme-color",
				content: "#12140F"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootLayout
});
function RootLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "cs",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-paper text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-screen flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { inverted: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$2 = () => import("./routes-4h9q6MVV.mjs");
var Route$10 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Koloběžník — testy skládacích koloběžek" }, {
		name: "description",
		content: "Začněte jezdit na koloběžce už dnes. Zátěžové testy, servis a zaučení z Růžďky na Vsetínsku."
	}] })
});
function PageHero({ kicker, title, lead, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative overflow-hidden bg-ink text-paper", image ? "min-h-[42vh]" : "py-16 md:py-20"),
		children: [
			image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-45"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24",
				children: [
					kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold uppercase tracking-[0.22em] text-lime",
						children: kicker
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-balance sm:text-6xl md:text-7xl",
						children: title
					}),
					lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-pretty text-paper/80 sm:text-lg",
						children: lead
					}) : null
				]
			})
		]
	});
}
var Route$9 = createFileRoute("/cenik")({
	component: PricePage,
	head: () => ({ meta: [{ title: "Ceník · Koloběžník" }, {
		name: "description",
		content: "Údržba, servis, zátěžové testy, zapůjčení koloběžky a individuální trénink."
	}] })
});
function PricePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Ceník",
		title: "Servis, testy, zaučení",
		lead: "Hodiny v dílně, kilometry v terénu. Materiál k opravě se počítá zvlášť.",
		image: "/images/workshop-orig.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-14 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-ink/10 border-y border-ink/10",
				children: prices.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold uppercase tracking-tight",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: p.detail
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "shrink-0 font-display text-2xl font-extrabold uppercase tracking-tight text-moss",
						children: [p.price, p.unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-2 text-sm font-semibold text-muted",
							children: ["/ ", p.unit]
						}) : null]
					})]
				}, p.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted",
				children: "Zapůjčení koloběžky je oproti vratné záloze 1 000 Kč. U servisu se přičítá potřebný materiál. Reklama a propagace značky individuálně."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ink",
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/kontakt",
					children: "Domluvit termín"
				})
			})
		]
	})] });
}
var Route$8 = createFileRoute("/kontakt")({
	component: ContactPage,
	head: () => ({ meta: [{ title: "Kontakt · Koloběžník" }, {
		name: "description",
		content: "Růžďka 259, tel. +420 774 905 857, info.kolobeznik@gmail.com"
	}] })
});
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "");
		const email = String(data.get("email") ?? "");
		const phone = String(data.get("phone") ?? "");
		const topic = String(data.get("topic") ?? "");
		const message = String(data.get("message") ?? "");
		const body = encodeURIComponent(`Jméno: ${name}\nE-mail: ${email}\nTelefon: ${phone}\nZáležitost: ${topic}\n\n${message}`);
		const subject = encodeURIComponent(`Koloběžník: ${topic || "zpráva"}`);
		window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Kontakt",
		title: "Napište, zavolejte, stavte se",
		lead: site.hoursNote,
		image: "/images/night-ride.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 text-moss" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-bold uppercase tracking-tight",
							children: "Adresa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								site.address,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								site.addressNote
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.mapUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-1 inline-block text-sm text-moss hover:text-ink",
							children: "Navigovat na Mapy.cz"
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-5 text-moss" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-bold uppercase tracking-tight",
						children: "Telefon"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.phoneHref,
						className: "text-sm text-ink no-underline hover:text-moss",
						children: site.phone
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-5 text-moss" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-bold uppercase tracking-tight",
						children: "E-mail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.emailHref,
						className: "text-sm text-ink no-underline hover:text-moss",
						children: site.email
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-5 text-moss" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-bold uppercase tracking-tight",
						children: "Kdy jsem k zastižení"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-1 space-y-1 text-sm text-muted",
						children: site.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.days }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-ink",
								children: h.time
							})]
						}, h.days))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Mapa Růžďka 259",
					src: site.osmEmbed,
					className: "h-64 w-full rounded-lg border-0",
					loading: "lazy"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "rounded-lg bg-surface p-6 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-extrabold uppercase tracking-tight",
					children: "Napsat zprávu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Otevře se váš e-mail. Nic se neukládá na server — zpráva jde rovnou mně."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: ["Jméno", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								required: true,
								className: "mt-1 h-11 w-full rounded-md bg-paper px-3 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: ["E-mail", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "email",
								type: "email",
								required: true,
								className: "mt-1 h-11 w-full rounded-md bg-paper px-3 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: ["Telefon", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								type: "tel",
								className: "mt-1 h-11 w-full rounded-md bg-paper px-3 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: ["Záležitost", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "topic",
								className: "mt-1 h-11 w-full rounded-md bg-paper px-3 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]",
								defaultValue: "Zátěžový test",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Zátěžový test" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Servis" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Zapůjčení" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Zaučení / trénink" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Propagace značky" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Jiné" })
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block text-sm",
					children: ["Zpráva", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						required: true,
						rows: 5,
						className: "mt-1 w-full rounded-md bg-paper px-3 py-2 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "ink",
					className: "mt-5",
					children: "Odeslat e-mailem"
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-moss",
					children: [
						"Pokud se e-mail neotevřel, napište přímo na ",
						site.email,
						"."
					]
				}) : null
			]
		})]
	})] });
}
var Route$7 = createFileRoute("/novinky")({
	component: NewsPage,
	head: () => ({ meta: [{ title: "Novinky, tipy, aplikace · Koloběžník" }, {
		name: "description",
		content: "Aplikace pro smartphone a nositelnou elektroniku. Cyclers na koloběžce."
	}] })
});
function NewsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Červenec",
		title: "Novinky, tipy a triky pro koloběh",
		lead: "Aplikace pro smartphone a nositelnou elektroniku — to, co na řídítkách opravdu používám.",
		image: "/images/field.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm font-semibold uppercase tracking-[0.18em] text-moss",
				children: "16. 7."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-4xl font-extrabold uppercase tracking-tight",
				children: "Aplikace Cyclers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-pretty",
				children: "Velmi zajímavá aplikace, kterou využívám docela často pro navigaci a statistiky na koloběžce. Trasy, převýšení, tempo — bez toho, abyste na řídítka věšeli cyklistický počítač z devadesátek."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/cyclers.jpg",
			alt: "Aplikace Cyclers",
			className: "w-full rounded-lg bg-surface object-contain p-4"
		})]
	})] });
}
var Route$6 = createFileRoute("/o-mne")({
	component: AboutPage,
	head: () => ({ meta: [{ title: "O mně · Koloběžník" }, {
		name: "description",
		content: "Jak z komplikované dopravy vznikl koníček. Osobní rekord 72 km/h, kopce, helma a skládací koloběžky."
	}] })
});
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "O mně",
		title: "Koloběžka jako východisko, pak jako posedlost",
		lead: "To, co začalo jako otravná nezbytnost až nutnost, se záhy stalo mým oblíbeným koníčkem.",
		image: "/images/first-scooter.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl space-y-5 text-base leading-relaxed text-pretty",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Začínal jsem tak, že mi byl takřka ze dne na den posunut spoj, kterým jsem několik let běžně jezdil do práce. Na výběr jsem měl několik variant: koupit auto (leasing, nebo starší jezdící pokladničku) — do čehož se mi moc nechtělo. Nebo být na místě o dvě hodiny dříve a vstávat o tři a půl hodiny dřív. Tak to už vůbec." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nakonec zvítězila koloběžka jako levné a rychlé řešení. Ráno skočím na kolobrndu, dojedu na ní dolů z kopce, složím ji a nasednu na svůj spoj do práce." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Samozřejmě že jsem ze začátku taky nebyl moc nadšený. Bydlím na kopci a skládací koloběžky nemají zrovna ideální — ba ani propracovaný — systém brzd. Největší obavy jsem měl, že rozdováděnou koloběžku neubrzdím. Ale po čase, několika divokých jízdách a propálených botách od blatníkové brzdy, se to zlomilo." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-bold uppercase leading-tight tracking-tight text-moss",
					children: "Základ je HLAVNĚ NEBRZDIT."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Je to sice adrenalin, ale nic, co by nešlo zvládnout. A když jsem překonal strach, začalo to i bavit. V současné době se bavím tím, že zkouším, jakou největší rychlost jsem schopen se skládací koloběžkou vyvinout — osobní rekord je ",
					site.record,
					". Také se zkouším nadále zdokonalovat v jízdě do kopce."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Mimochodem: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "VŽDY NOSTE HELMU" }),
					". A neuškodí mít i další chrániče."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Otestuji jakoukoli skládací koloběžku, a to v jakýchkoli představitelných i nepředstavitelných podmínkách. Shrnu přednosti i nedostatky. Navrhnu náměty ke zlepšení." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-bold uppercase tracking-wide text-ink",
					children: site.motto
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/portrait.jpg",
					alt: "Moje první skládací koloběžka",
					className: "w-full rounded-lg object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/first-scooter.jpg",
					alt: "Koloběžník v terénu",
					className: "w-full rounded-lg object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-ink p-6 text-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime",
							children: "Moje první skládací koloběžka"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-paper/75",
							children: "Od spoje na kopci až po zátěžové testy. Když chcete stroj projet poctivě — ozvěte se."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								children: "Napsat"
							})
						})
					]
				})
			]
		})]
	})] });
}
var Route$5 = createFileRoute("/odkazy")({
	component: LinksPage,
	head: () => ({ meta: [{ title: "Odkazy · Koloběžník" }, {
		name: "description",
		content: "Facebook, HeroHero a další stopy Koloběžníka."
	}] })
});
var links = [
	{
		name: "Facebook",
		href: site.facebook,
		text: "Aktuality, fotky z terénu, krátké hlášky z kopce."
	},
	{
		name: "HeroHero",
		href: site.herohero,
		text: "Pokud chcete Koloběžníka podržet, tady to dává smysl."
	},
	{
		name: "Mapy.cz — Růžďka 259",
		href: site.mapUrl,
		text: "Při kraji lesa směrem na Brdo."
	}
];
function LinksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Odkazy",
		title: site.motto,
		lead: "Stopy mimo tenhle web. Žádný katalog e-shopů — jen to, kudy se opravdu pohybuju."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-2xl px-4 py-14 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: l.href,
				target: "_blank",
				rel: "noreferrer",
				className: "flex items-start justify-between gap-4 rounded-lg bg-surface p-5 text-ink no-underline transition-colors hover:bg-ink hover:text-lime",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-bold uppercase tracking-tight",
					children: l.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-sm text-muted hover:text-inherit",
					children: l.text
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mt-1 size-5 shrink-0" })]
			}) }, l.href))
		})
	})] });
}
var Route$4 = createFileRoute("/znacky")({
	component: BrandsPage,
	head: () => ({ meta: [{ title: "Značky koloběžek · Koloběžník" }, {
		name: "description",
		content: "Značky koloběžek — rozdíly, přednosti a nevšednosti. Připravuje se."
	}] })
});
var brands = Array.from(new Set(scooters.map((s) => s.name.replace(/\s+\d.*$/, "").split(" ").slice(0, 2).join(" "))));
function BrandsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Značky koloběžek",
		title: "Rozdíly, přednosti a nevšednosti",
		lead: "Připravuje se. Zatím tu máte značky, které už mám odjeté a popsané v testech.",
		image: "/images/e-kick.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-base leading-relaxed text-muted",
				children: "Tahle stránka se teprve plní. Nechci sem dávat katalog z e-shopu — spíš to, čím se značky liší, když je vezmete z kopce, do spoje a přes zimu."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3",
				children: scooters.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/testy/$slug",
					params: { slug: s.slug },
					className: "flex items-center justify-between rounded-md bg-surface px-4 py-3 text-ink no-underline hover:bg-ink hover:text-lime",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-bold uppercase tracking-tight",
						children: s.name
					})
				}) }, s.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-muted",
				children: [brands.length, " jmen v terénu — a další se dopisují."]
			})
		]
	})] });
}
var Route$3 = createFileRoute("/testy/")({
	component: TestsPage,
	head: () => ({ meta: [{ title: "Moje koloběžky a testy · Koloběžník" }, {
		name: "description",
		content: "Osobní recenze skládacích, sportovních a elektrických koloběžek. Přednosti, nedostatky, reálné použití."
	}] })
});
function TestsPage() {
	const [cat, setCat] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return scooters.filter((s) => {
			if (cat !== "all" && s.category !== cat) return false;
			if (!query) return true;
			return s.name.toLowerCase().includes(query) || s.blurb.toLowerCase().includes(query);
		});
	}, [cat, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Moje koloběžky a testy",
		title: "Moje recenze koloběžek",
		lead: "Modely, které jsem si osobně vyzkoušel a porovnal. Koloběžky jsou skvělý způsob dopravy po městě i do přírody — zábava, pohyb, úspora času i peněz.",
		image: "/images/garage.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "tablist",
					"aria-label": "Kategorie",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": cat === c.id,
						onClick: () => setCat(c.id),
						className: cn("h-11 min-h-11 rounded-full px-4 font-display text-sm font-semibold uppercase tracking-wide transition-colors", cat === c.id ? "bg-ink text-lime" : "bg-surface text-ink hover:bg-ink hover:text-paper"),
						children: c.label
					}, c.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative block w-full md:w-72 md:shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Hledat model"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "search",
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Hledat model…",
							className: "h-11 w-full rounded-md bg-paper pl-10 pr-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none placeholder:text-muted focus:shadow-[0_0_0_2px_var(--color-lime)]"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [list.length, " modelů"]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-16 text-center text-muted",
				children: "Nic takového jsem ještě neotestoval."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScooterCard, { scooter: s }, s.slug))
			})
		]
	})] });
}
var $$splitComponentImporter$1 = () => import("../_slug-CNy_n5uz.mjs");
var Route$2 = createFileRoute("/testy/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	loader: ({ params }) => {
		const scooter = getScooter(params.slug);
		if (!scooter) throw notFound();
		return { scooter };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.scooter.name ?? "Test"} · Koloběžník` }, {
		name: "description",
		content: loaderData?.scooter.blurb ?? "Recenze koloběžky"
	}] })
});
var tips = [
	{
		slug: "dirtlej-dirtsuit",
		title: "Dirtlej Dirtsuit Core Edition",
		date: "16. 7. 2023",
		image: "/images/tip-dirtsuit.jpg",
		excerpt: "Víc než jen kombinéza, to je tvoje zbraň na bláto.",
		body: ["Dirtlej Dirtsuit Core Edition: víc než jen kombinéza, to je tvoje zbraň na bláto.", "Když testuju skládačky v podmínkách, které výrobce v manuálu radši neuvádí, oceníš oblečení, které neřeší, jestli zrovna padá déšť, sníh nebo bláto z lesní cesty nad Růžďkou."]
	},
	{
		slug: "humorny-navod",
		title: "Humorný návod",
		date: "29. 5. 2023",
		image: "/images/garage.jpg",
		excerpt: "Tak tady jsem se opravdu zasmál.",
		body: ["Tak tady jsem se opravdu zasmál.", "Koloběh bere spousta lidí smrtelně vážně. Přitom nejlepší jízdy začínají ve chvíli, kdy přestaneš řešit, jak u toho vypadáš, a začneš řešit, jestli tě ta věc uveze z kopce — a zase nahoru."]
	},
	{
		slug: "hovding-airbag",
		title: "Hövding — airbag na kolo",
		date: "29. 5. 2023",
		image: "/images/tip-hovding.jpg",
		excerpt: "Airbag jako límec kolem krku. Pohodlnější než helma, po použití na výměnu.",
		body: [
			"Hövding je airbag na kolo, který se nosí jako límec kolem krku. Když dojde k nehodě, airbag se nafoukne a chrání hlavu cyklisty.",
			"Výhodou Hövdingu je, že je mnohem pohodlnější než tradiční cyklistická helma a také poskytuje lepší ochranu krční páteře.",
			"Nevýhodou je cena a to, že po jednom použití musí být vyměněn za nový.",
			"Mimochodem: VŽDY NOSTE HELMU. A neuškodí mít i další chrániče."
		]
	},
	{
		slug: "batuzkova-kolobezka",
		title: "Batůžková koloběžka Valor",
		date: "29. 5. 2023",
		image: "/images/tip-backpack.jpg",
		excerpt: "Skládací mechanismus do batohu 80 × 30 × 15 cm. Mikro, ale poctivé.",
		body: ["Valor Kick Scooter — batůžková koloběžka pro každodenní dobrodružství. Díky skládacímu mechanismu ji snadno složíte do kompaktního batohu o rozměrech 80 × 30 × 15 cm.", "Lehká, ale odolná konstrukce, ideální pro děti od 8 let i dospělé. Nastavitelná řídítka, kolečka 200 mm, ABEC 7 ložiska, zadní blatníková brzda. Maximální nosnost 100 kg."]
	},
	{
		slug: "chytra-helma",
		title: "Chytrá helma W-TEC SafeTech",
		date: "29. 5. 2023",
		image: "/images/tip-helmet.jpg",
		excerpt: "Elegantní bílá helma, ideální pro bezpečnou jízdu na koloběžce.",
		body: ["Tato elegantní bílá helma W-TEC SafeTech je ideální pro bezpečnou jízdu na koloběžce.", "Helma není doplněk. Na skládačce z kopce, kde osobní rekord leze k 72 km/h, je to první věc, kterou si beru — dřív než koloběžku."]
	},
	{
		slug: "brasna-oxelo",
		title: "Brašna na koloběžku Oxelo",
		date: "29. 5. 2023",
		image: "/images/tip-oxelo.jpg",
		excerpt: "Velmi odolná brašna na koloběžku Oxelo.",
		body: ["Velmi odolná brašna na koloběžku Oxelo.", "Na skládačce nenosíš koš, nosíš to, co se vejde a co nevypadne v první zatáčce. Pořádná brašna je rozdíl mezi výletem a extrakcí věcí z příkopu."]
	},
	{
		slug: "brasna-wildman",
		title: "Brašna Wildman FrontBag V30",
		date: "29. 5. 2023",
		image: "/images/tip-wildman.jpg",
		excerpt: "Brašna na kolo / koloběžku WildMan FrontBag V30.",
		body: ["Brašna na kolo/koloběžku WildMan FrontBag V30.", "Hodí se, když potřebuješ mít telefon, klíče a nářadí po ruce a ne v batohu, který při odrážení tluče do zad."]
	},
	{
		slug: "blitzwheel",
		title: "BlitzWheel — opravdu mikrokoloběžka",
		date: "29. 5. 2023",
		image: "/images/tip-blitz.jpg",
		excerpt: "Opravdu mikrokoloběžka. Mikromobilita, jak má být.",
		body: ["BlitzWheel — opravdu mikrokoloběžka.", "Když má skládačka smysl, je to ve chvíli, kdy ji složíš, nasedneš na spoj a na druhé straně zase rozložíš. Tohle je přesně ta liga."]
	}
];
function getTip(slug) {
	return tips.find((t) => t.slug === slug);
}
var Route$1 = createFileRoute("/tipy/")({
	component: TipsPage,
	head: () => ({ meta: [{ title: "Zajímavosti a tipy, mikromobilita · Koloběžník" }, {
		name: "description",
		content: "Helmy, brašny, kombinézy a mikrokoloběžky — tipy z terénu."
	}] })
});
function TipsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Mikromobilita",
		title: "Zajímavosti a tipy",
		lead: "Věci, které na cestě reálně použiju — od airbagu na krk po batůžkovou koloběžku.",
		image: "/images/night.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: tips.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/tipy/$slug",
				params: { slug: t.slug },
				className: "group overflow-hidden rounded-lg bg-paper no-underline shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[16/10] overflow-hidden bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: t.image,
						alt: "",
						className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted",
							children: t.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl font-bold uppercase leading-tight tracking-tight",
							children: t.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: t.excerpt
						})
					]
				})]
			}, t.slug))
		})
	})] });
}
var $$splitComponentImporter = () => import("../_slug-BWTAt-3e.mjs");
var Route = createFileRoute("/tipy/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const tip = getTip(params.slug);
		if (!tip) throw notFound();
		return { tip };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.tip.title ?? "Tip"} · Koloběžník` }, {
		name: "description",
		content: loaderData?.tip.excerpt ?? ""
	}] })
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var CenikRoute = Route$9.update({
	id: "/cenik",
	path: "/cenik",
	getParentRoute: () => Route$11
});
var KontaktRoute = Route$8.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$11
});
var NovinkyRoute = Route$7.update({
	id: "/novinky",
	path: "/novinky",
	getParentRoute: () => Route$11
});
var OMneRoute = Route$6.update({
	id: "/o-mne",
	path: "/o-mne",
	getParentRoute: () => Route$11
});
var OdkazyRoute = Route$5.update({
	id: "/odkazy",
	path: "/odkazy",
	getParentRoute: () => Route$11
});
var ZnackyRoute = Route$4.update({
	id: "/znacky",
	path: "/znacky",
	getParentRoute: () => Route$11
});
var TestyIndexRoute = Route$3.update({
	id: "/testy/",
	path: "/testy/",
	getParentRoute: () => Route$11
});
var TestySlugRoute = Route$2.update({
	id: "/testy/$slug",
	path: "/testy/$slug",
	getParentRoute: () => Route$11
});
var TipyIndexRoute = Route$1.update({
	id: "/tipy/",
	path: "/tipy/",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute,
	CenikRoute,
	KontaktRoute,
	NovinkyRoute,
	OMneRoute,
	OdkazyRoute,
	ZnackyRoute,
	TestySlugRoute,
	TipySlugRoute: Route.update({
		id: "/tipy/$slug",
		path: "/tipy/$slug",
		getParentRoute: () => Route$11
	}),
	TestyIndexRoute,
	TipyIndexRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { services as a, ScooterCard as c, scooters as d, verdictLabel as f, PageHero as i, categoryLabel as l, Route as n, site as o, cn as p, Route$2 as r, Button as s, router_exports as t, featuredSlugs as u };
