import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as BookOpen, a as Server, b as ArrowUpRight, c as Menu, d as Github, f as FileText, g as Brain, h as CircleAlert, i as Sun, l as Mail, m as CircleCheck, n as Wrench, o as Send, p as CodeXml, r as Terminal, s as Moon, t as X, u as Linkedin, v as Award, x as ArrowDown, y as ArrowUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0OayEObP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SiteCtx = (0, import_react.createContext)(null);
function SiteProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [lang, setLang] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
		if (stored === "dark" || stored === "light") setTheme(stored);
		const l = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
		if (l === "en" || l === "id") setLang(l);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		if (typeof window !== "undefined") window.localStorage.setItem("theme", theme);
	}, [theme]);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") window.localStorage.setItem("lang", lang);
		document.documentElement.lang = lang;
	}, [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteCtx.Provider, {
		value: {
			theme,
			toggleTheme: () => setTheme((t) => t === "light" ? "dark" : "light"),
			lang,
			toggleLang: () => setLang((l) => l === "en" ? "id" : "en")
		},
		children
	});
}
function useSite() {
	const ctx = (0, import_react.useContext)(SiteCtx);
	if (!ctx) throw new Error("useSite outside provider");
	return ctx;
}
function T({ en, id }) {
	const { lang } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: lang === "en" ? en : id });
}
var links = [
	{
		href: "#home",
		n: "01",
		en: "HOME",
		id: "BERANDA"
	},
	{
		href: "#about",
		n: "02",
		en: "ABOUT",
		id: "TENTANG"
	},
	{
		href: "#journey",
		n: "03",
		en: "JOURNEY",
		id: "PERJALANAN"
	},
	{
		href: "#projects",
		n: "04",
		en: "PROJECTS",
		id: "PROYEK"
	},
	{
		href: "#toolkit",
		n: "05",
		en: "TOOLKIT",
		id: "PERKAKAS"
	},
	{
		href: "#proof",
		n: "06",
		en: "PROOF",
		id: "BUKTI"
	},
	{
		href: "#connect",
		n: "07",
		en: "CONNECT",
		id: "KONTAK"
	}
];
function Nav() {
	const { theme, toggleTheme, lang, toggleLang } = useSite();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-background/85 border-b border-[#8CC0EB]/30 py-3 shadow-xs" : "bg-transparent py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "group flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.65rem] font-bold tracking-[0.4em] text-foreground",
						children: "N · A · S · Y · W · A"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 lg:gap-8 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						"data-hover": "explore",
						className: "group relative text-xs lg:text-sm font-medium text-foreground/80 transition-colors hover:text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[0.6rem] text-[#8CC0EB] mr-1",
								children: l.n
							}),
							lang === "en" ? l.en.charAt(0) + l.en.slice(1).toLowerCase() : l.id.charAt(0) + l.id.slice(1).toLowerCase(),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8CC0EB] transition-all duration-300 group-hover:w-full" })
						]
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-4 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: toggleLang,
							className: "font-mono text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground",
							"aria-label": "Toggle language",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: lang === "en" ? "text-foreground font-bold" : "",
									children: "EN"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-1 text-[#8CC0EB]",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: lang === "id" ? "text-foreground font-bold" : "",
									children: "ID"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleTheme,
							className: "grid h-8 w-8 place-items-center rounded-full border border-[#8CC0EB]/50 bg-mist text-foreground transition-colors hover:bg-[#AEE2FF]/40",
							"aria-label": "Toggle theme",
							children: theme === "light" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 13 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 13 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/resume.pdf",
							download: "CV_Nasywa_Chonifahtun_Fiqrihiyah.pdf",
							"data-hover": "open",
							className: "group inline-flex items-center gap-1.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-1.5 text-xs font-semibold text-[#172033] shadow-xs transition-all hover:bg-[#8CC0EB]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 12 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
									en: "Resume",
									id: "Resume"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 12,
									className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(true),
					className: "grid h-9 w-9 place-items-center rounded-full border border-[#8CC0EB]/60 bg-mist md:hidden",
					"aria-label": "Open menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 16 })
				})
			]
		})
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[60] bg-background overflow-y-auto md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-6 py-5 border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[0.65rem] font-bold tracking-[0.4em] text-foreground",
				children: "CHAPTER INDEX"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setOpen(false),
				className: "grid h-9 w-9 place-items-center rounded-full border border-[#8CC0EB]/60 bg-mist",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col px-6 py-8",
			children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "flex items-baseline gap-5 border-b border-border/60 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs text-[#8CC0EB]",
					children: [l.n, " /"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl font-medium tracking-tight",
					children: lang === "en" ? l.en : l.id
				})]
			}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: toggleLang,
						className: "font-mono text-xs font-semibold tracking-[0.2em] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: lang === "en" ? "text-foreground font-bold" : "",
								children: "EN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-1 text-[#8CC0EB]",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: lang === "id" ? "text-foreground font-bold" : "",
								children: "ID"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: toggleTheme,
						className: "grid h-9 w-9 place-items-center rounded-full border border-[#8CC0EB]/60 bg-mist",
						"aria-label": "Toggle theme",
						children: theme === "light" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 14 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/resume.pdf",
						download: "CV_Nasywa_Chonifahtun_Fiqrihiyah.pdf",
						onClick: () => setOpen(false),
						className: "inline-flex items-center gap-1.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-2 text-xs font-semibold text-[#172033]",
						children: ["Resume ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 12 })]
					})
				]
			})]
		})]
	})] });
}
var info = {
	AI: {
		label: "Currently Exploring",
		items: [
			"Computer Vision",
			"Deep Learning",
			"Applied AI"
		]
	},
	DATA: {
		label: "Working With",
		items: [
			"Data Science",
			"Statistics",
			"Machine Learning"
		]
	},
	SOFTWARE: {
		label: "Building With",
		items: [
			"React",
			"Python",
			"FastAPI",
			"Flask"
		]
	}
};
function ExplorationMap() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[5/6] w-full max-w-[520px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl border border-[#8CC0EB]/50 bg-[#EAF6FD]/90 dark:bg-[#172331]/90 shadow-md backdrop-blur-md overflow-hidden" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-[#AEE2FF]/25 via-transparent to-[#8CC0EB]/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#AEE2FF]/30 blur-3xl dark:bg-[#8CC0EB]/15" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tick, { className: "left-4 top-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tick, { className: "right-4 top-4 rotate-90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tick, { className: "left-4 bottom-4 -rotate-90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tick, { className: "right-4 bottom-4 rotate-180" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-6 top-5 font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#172033]/70 dark:text-[#F4F1EA]/70",
				children: "FIELD MAP · 01"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-6 top-5 font-mono text-[0.62rem] font-medium tracking-[0.24em] text-[#64748B]",
				children: "03 DOMAINS · 07 PROJECTS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 500 600",
				className: "absolute inset-0 h-full w-full pointer-events-none",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
						id: "blue-dots",
						width: "20",
						height: "20",
						patternUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "2",
							cy: "2",
							r: "0.8",
							className: "fill-[#8CC0EB]/35 dark:fill-[#8CC0EB]/25"
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "500",
						height: "600",
						fill: "url(#blue-dots)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: "stroke-[#8CC0EB]/70 dark:stroke-[#8CC0EB]/50",
						fill: "none",
						strokeWidth: "1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 250 130 C 220 220, 160 260, 130 310" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 250 130 C 280 220, 340 260, 370 310" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 130 340 C 180 400, 220 440, 250 470" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 370 340 C 320 400, 280 440, 250 470" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M 130 340 C 200 360, 300 360, 370 340",
								strokeDasharray: "4 4",
								opacity: "0.75",
								stroke: "#AEE2FF"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "26",
						y: "565",
						className: "fill-[#64748B] font-mono text-[9px]",
						letterSpacing: "1.5",
						children: "COORD: 06°12'S 106°49'E"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "380",
						y: "565",
						className: "fill-[#64748B] font-mono text-[9px]",
						letterSpacing: "1.5",
						children: "SYS_STATE: OK"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				top: "15%",
				left: "50%",
				size: "lg",
				label: "AI",
				active: active === "AI",
				onEnter: () => setActive("AI"),
				onLeave: () => setActive(null),
				animCls: "float-a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				top: "52%",
				left: "24%",
				size: "md",
				label: "DATA",
				active: active === "DATA",
				onEnter: () => setActive("DATA"),
				onLeave: () => setActive(null),
				animCls: "float-b"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				top: "52%",
				left: "76%",
				size: "md",
				label: "SOFTWARE",
				active: active === "SOFTWARE",
				onEnter: () => setActive("SOFTWARE"),
				onLeave: () => setActive(null),
				animCls: "float-c"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -translate-x-1/2 -translate-y-1/2 float-a z-10",
				style: {
					top: "79%",
					left: "50%"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-14 w-14 place-items-center rounded-full border border-[#8CC0EB] bg-[#FEF9F2] dark:bg-[#101820] shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rotate-45 bg-[#8CC0EB]" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.62rem] font-bold tracking-[0.28em] text-[#172033] dark:text-[#F4F1EA]",
						children: "BUILDING"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-5 left-5 right-5 z-20 rounded-lg border border-[#8CC0EB]/60 bg-[#FEF9F2]/95 dark:bg-[#101820]/95 backdrop-blur px-5 py-3.5 shadow-sm transition-all duration-300",
				children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#8CC0EB]",
					children: info[active].label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg font-semibold tracking-tight text-[#172033] dark:text-[#F4F1EA]",
						children: active
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: info[active].items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-[#AEE2FF]/40 border border-[#8CC0EB]/40 px-2.5 py-0.5 font-mono text-xs font-medium text-[#172033] dark:text-[#F4F1EA]",
							children: item
						}, item))
					})]
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#64748B]",
					children: "HOVER A NODE TO EXPLORE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 text-sm text-[#172033]/85 dark:text-[#F4F1EA]/85",
					children: [
						"Three domains, one practice —",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif italic text-[#172033] dark:text-[#F4F1EA]",
							children: "building to understand"
						}),
						"."
					]
				})] })
			})
		]
	});
}
function Tick({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `absolute h-3 w-3 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-0 h-px w-3 bg-[#8CC0EB]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-0 h-3 w-px bg-[#8CC0EB]" })]
	});
}
function Node({ top, left, size, label, active, onEnter, onLeave, animCls }) {
	const dim = size === "lg" ? "h-24 w-24" : "h-20 w-20";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onMouseEnter: onEnter,
		onMouseLeave: onLeave,
		onFocus: onEnter,
		onBlur: onLeave,
		"data-hover": "explore",
		className: `absolute -translate-x-1/2 -translate-y-1/2 ${animCls} z-10`,
		style: {
			top,
			left
		},
		"aria-label": `Explore ${label}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 rounded-full bg-[#AEE2FF] blur-md transition-all duration-300 ${active ? "opacity-90 scale-125" : "opacity-40"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `relative grid ${dim} place-items-center rounded-full border transition-all duration-300 ${active ? "border-[#8CC0EB] bg-[#AEE2FF] shadow-md scale-105" : "border-[#8CC0EB]/60 bg-[#FEF9F2]/90 dark:bg-[#172331]"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2 w-2 rounded-full transition-all ${active ? "bg-[#172033]" : "bg-[#8CC0EB] pulse-soft"}` })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `font-mono text-[0.68rem] tracking-[0.28em] font-semibold transition-colors ${active ? "text-[#172033] dark:text-[#AEE2FF]" : "text-[#172033]/80 dark:text-[#F4F1EA]/80"}`,
				children: label
			})]
		})
	});
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					el.style.transitionDelay = `${delay}ms`;
					el.classList.add("is-visible");
					io.unobserve(el);
				}
			});
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref: (n) => {
			ref.current = n;
		},
		className: `reveal ${className}`,
		children
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-screen pt-32 pb-20 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-[#AEE2FF]/20 blur-[120px] dark:bg-[#8CC0EB]/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[0.7rem] tracking-[0.32em] text-muted-foreground",
								children: "01 / HOME"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-16 bg-border" })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-8 font-serif text-[clamp(2.75rem,7vw,5.75rem)] font-medium leading-[0.98] tracking-[-0.02em] text-foreground",
								children: [
									"Digital Explorer",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-foreground/85",
										children: "& Builder"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-md text-lg leading-relaxed text-foreground/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
									en: "I build things to understand how they work.",
									id: "Saya membangun untuk memahami cara kerjanya."
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 220,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "label-mono",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
											en: "Exploring",
											id: "Menjelajahi"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 font-mono text-sm tracking-[0.14em] text-foreground",
										children: "AI · DATA · SOFTWARE"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-10 w-px bg-border sm:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-full border border-[#8CC0EB]/60 bg-mist px-3.5 py-1.5 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex h-2.5 w-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8CC0EB] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-[#8CC0EB]" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[0.68rem] font-medium tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: "AVAILABLE FOR INTERNSHIP",
												id: "TERSEDIA UNTUK MAGANG"
											})
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 300,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#journey",
									"data-hover": "explore",
									className: "group inline-flex items-center gap-3 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-6 py-3.5 text-sm font-medium text-[#172033] transition-all hover:-translate-y-0.5 hover:bg-[#8CC0EB] shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
										en: "Explore my journey",
										id: "Jelajahi perjalanan saya"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
										size: 14,
										className: "transition-transform group-hover:translate-y-0.5"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									"data-hover": "open",
									className: "group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3.5 text-sm text-foreground/80 transition-colors hover:border-[#8CC0EB] hover:bg-mist hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
										en: "View résumé",
										id: "Lihat resume"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 14,
										className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
									})]
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						className: "w-full flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplorationMap, {})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-16 max-w-7xl px-6 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.62rem] tracking-[0.32em] text-muted-foreground",
						children: "SCROLL · CONTINUE READING"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.62rem] tracking-[0.32em] text-muted-foreground",
						children: "NASYWA C. F. — FIELD JOURNAL / 2026"
					})]
				})
			})
		]
	});
}
function SectionLabel({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-mono text-[0.7rem] font-semibold tracking-[0.32em] text-[#64748B]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#8CC0EB]",
					children: n
				}),
				" / ",
				label
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 max-w-[120px] bg-[#8CC0EB]/40" })]
	});
}
var loop = [
	{
		key: "CURIOSITY",
		en: "Start with a question.",
		id: "Mulai dengan pertanyaan."
	},
	{
		key: "EXPLORE",
		en: "Research, study, understand.",
		id: "Riset, belajar, memahami."
	},
	{
		key: "EXPERIMENT",
		en: "Try. Test. Break. Iterate.",
		id: "Coba. Uji. Rusak. Iterasi."
	},
	{
		key: "BUILD",
		en: "Turn ideas into something real.",
		id: "Ubah ide menjadi nyata."
	},
	{
		key: "REFLECT",
		en: "What worked, what didn't, what's next.",
		id: "Apa yang berhasil, apa yang tidak, apa selanjutnya."
	}
];
var values = [
	{
		n: "01",
		en: {
			t: "Learn by doing",
			d: "Turning knowledge into something tangible."
		},
		id: {
			t: "Belajar dengan mempraktikkan",
			d: "Mengubah pengetahuan menjadi sesuatu yang nyata."
		}
	},
	{
		n: "02",
		en: {
			t: "Build with purpose",
			d: "Technology should be useful and meaningful."
		},
		id: {
			t: "Membangun dengan tujuan",
			d: "Teknologi harus bermakna dan berguna."
		}
	},
	{
		n: "03",
		en: {
			t: "Stay curious",
			d: "Keep asking questions beyond the obvious."
		},
		id: {
			t: "Tetap penasaran",
			d: "Terus bertanya melampaui yang tampak."
		}
	},
	{
		n: "04",
		en: {
			t: "Keep growing",
			d: "Treat every project as a step toward the next."
		},
		id: {
			t: "Terus bertumbuh",
			d: "Setiap proyek adalah langkah menuju berikutnya."
		}
	}
];
function About() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-24 border-t border-border py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: "02",
					label: "ABOUT"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid grid-cols-1 gap-16 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground",
								children: [
									"Curious by nature.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-foreground/85",
										children: "Building by practice."
									})
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 120,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 max-w-xl text-lg leading-relaxed text-foreground/85",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
										en: "I'm Nasywa — an Informatics student exploring the intersection of Artificial Intelligence, Software, and Data. I learn by turning questions into experiments, and experiments into working systems.",
										id: "Saya Nasywa — mahasiswa Informatika yang menjelajahi persimpangan Kecerdasan Buatan, Perangkat Lunak, dan Data. Saya belajar dengan mengubah pertanyaan menjadi eksperimen, lalu eksperimen menjadi sistem yang bekerja."
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 200,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
										en: "Curiosity is where I start. Building is how I learn. Each project is a field note — a small experiment in understanding how things work by making them exist.",
										id: "Rasa penasaran adalah titik mula. Membangun adalah cara saya belajar. Setiap proyek adalah catatan lapangan — eksperimen kecil untuk memahami cara kerja sesuatu dengan mewujudkannya."
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
								children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group rounded-lg border border-border/80 bg-background/50 p-5 transition-all duration-300 hover:border-[#8CC0EB]/60 hover:bg-mist shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-mono text-[0.65rem] font-semibold tracking-[0.24em] text-[#8CC0EB]",
											children: [v.n, " —"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-2 font-serif text-lg font-medium tracking-tight text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: v.en.t,
												id: v.id.t
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: v.en.d,
												id: v.id.d
											})
										})
									]
								}, v.n))
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.65rem] font-semibold tracking-[0.28em] text-[#64748B]",
							children: "MY DEFAULT LOOP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.6rem] font-medium tracking-[0.24em] text-[#8CC0EB]",
							children: "05 STAGES · REPEATING"
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-xl border border-[#8CC0EB]/50 bg-mist/60 p-8 md:p-12 shadow-sm backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-3 sm:grid-cols-5 md:gap-4",
								children: loop.map((s, i) => {
									const isActive = active === i;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setActive(i),
										onMouseEnter: () => setActive(i),
										onFocus: () => setActive(i),
										"data-hover": "explore",
										className: `group flex flex-col items-start rounded-lg border p-4 text-left transition-all duration-300 ${isActive ? "border-[#8CC0EB] bg-[#AEE2FF]/50 dark:bg-[#172331] shadow-sm scale-[1.02]" : "border-border/70 bg-background/60 text-muted-foreground hover:border-[#8CC0EB]/50 hover:bg-mist/80 hover:text-foreground"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex w-full items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `font-mono text-[0.6rem] font-semibold tracking-[0.22em] ${isActive ? "text-[#172033] dark:text-[#AEE2FF]" : "text-muted-foreground"}`,
												children: ["0", i + 1]
											}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `mt-2 font-serif text-lg font-medium tracking-tight md:text-xl ${isActive ? "text-[#172033] dark:text-[#F4F1EA]" : ""}`,
											children: s.key
										})]
									}, s.key);
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col md:flex-row md:items-center md:justify-between border-t border-[#8CC0EB]/30 pt-6 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-[#8CC0EB]/60 bg-[#AEE2FF]/40 px-3 py-1 font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]",
									children: [
										"STAGE 0",
										active + 1,
										" · ",
										loop[active].key
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-serif text-xl italic text-foreground md:text-2xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
										en: loop[active].en,
										id: loop[active].id
									})
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-xs text-[#8CC0EB] hidden md:block",
									children: "CURIOSITY → EXPLORE → EXPERIMENT → BUILD → REFLECT ↺"
								})]
							})]
						})
					})]
				})
			]
		})
	});
}
var chapters = [
	{
		year: "2024",
		tag: {
			en: "Starting point",
			id: "Titik awal"
		},
		title: "Informatics — President University",
		body: {
			en: "Started my Informatics journey and began exploring the foundations of technology.",
			id: "Memulai perjalanan Informatika dan mulai mengeksplorasi fondasi teknologi."
		}
	},
	{
		year: "2025",
		tag: {
			en: "First real-world experience",
			id: "Pengalaman dunia nyata pertama"
		},
		title: "Setsail BizAccel",
		body: {
			en: "A multidimensional experience — moving between building, creating, and coordinating inside a real organization.",
			id: "Pengalaman multidimensi — bergerak antara membangun, berkarya, dan mengoordinasi di dalam organisasi nyata."
		},
		strands: [
			{
				label: "WEB",
				en: "Improved and worked on web experiences.",
				id: "Mengembangkan dan meningkatkan pengalaman web."
			},
			{
				label: "MULTIMEDIA",
				en: "Created visual content and supported events.",
				id: "Membuat konten visual dan mendukung acara."
			},
			{
				label: "OPERATIONS",
				en: "Documentation, TOR, RAB, and organizational processes.",
				id: "Dokumentasi, TOR, RAB, dan proses organisasi."
			}
		]
	},
	{
		year: "2025 – 2026",
		tag: {
			en: "Building & contributing",
			id: "Membangun & berkontribusi"
		},
		title: "Projects, workshops, community",
		body: {
			en: "Learning became tangible — through software projects, AI experiments, workshops, and helping others learn: guiding jobseekers with English résumés, teaching CapCut and Canva to teens, and running discussions on digital literacy, privacy, hoaxes, and cyberbullying.",
			id: "Pembelajaran menjadi nyata — melalui proyek perangkat lunak, eksperimen AI, workshop, dan membantu orang lain belajar: memandu pencari kerja menyusun resume bahasa Inggris, mengajar CapCut dan Canva kepada remaja, serta berdiskusi tentang literasi digital, privasi, hoaks, dan perundungan siber."
		}
	},
	{
		year: "2026",
		tag: {
			en: "Deepening the exploration",
			id: "Memperdalam eksplorasi"
		},
		title: "AI · Data · Software",
		body: {
			en: "Exploring applied AI, data, backend systems, and the process of building technology for real problems.",
			id: "Mengeksplorasi AI terapan, data, sistem backend, dan proses membangun teknologi untuk masalah nyata."
		},
		status: "current"
	},
	{
		year: "NEXT",
		tag: {
			en: "Open chapter",
			id: "Bab terbuka"
		},
		title: "Available for internship",
		body: {
			en: "Looking for an opportunity to learn, contribute, and build in a real-world environment.",
			id: "Mencari kesempatan untuk belajar, berkontribusi, dan membangun di lingkungan nyata."
		},
		status: "next"
	}
];
function Journey() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "journey",
		className: "scroll-mt-24 border-t border-border py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				n: "03",
				label: "JOURNEY"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground",
						children: [
							"Where has curiosity",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-foreground/85",
								children: "taken me?"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-sm text-base leading-relaxed text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
								en: "Not a résumé — a path. Education, experience, building, and quiet exploration all shape the same trajectory.",
								id: "Bukan resume — sebuah jalur. Pendidikan, pengalaman, membangun, dan eksplorasi tenang membentuk lintasan yang sama."
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#8CC0EB] via-[#AEE2FF] to-border/40 md:left-[13px]" }), chapters.map((c, i) => {
							const isCurrent = c.status === "current";
							const isNext = c.status === "next";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "relative pl-10 md:pl-14 pb-12 last:pb-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full transition-all ${isCurrent ? "border-2 border-[#8CC0EB] bg-[#AEE2FF] shadow-md ring-4 ring-[#AEE2FF]/30" : isNext ? "border-2 border-[#8CC0EB] bg-mist" : "border border-[#8CC0EB]/60 bg-background"}`,
										children: isCurrent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#172033]" }) : isNext ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#8CC0EB] pulse-soft" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `rounded-xl p-6 transition-all duration-300 ${isCurrent ? "border border-[#8CC0EB] bg-mist shadow-sm" : isNext ? "border-2 border-dashed border-[#8CC0EB] bg-mist/70 shadow-sm" : "border border-transparent hover:border-border hover:bg-background/60"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-x-3 gap-y-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `font-mono text-xs font-bold tracking-[0.28em] ${isCurrent || isNext ? "text-[#172033] dark:text-[#AEE2FF]" : "text-foreground"}`,
														children: c.year
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-[#8CC0EB]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-[0.65rem] font-medium tracking-[0.2em] text-[#64748B] uppercase",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
															en: c.tag.en,
															id: c.tag.id
														})
													}),
													isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ml-auto rounded-full bg-[#AEE2FF] px-2.5 py-0.5 font-mono text-[0.6rem] font-semibold text-[#172033]",
														children: "CURRENT FOCUS"
													}),
													isNext && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ml-auto rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-3 py-1 font-mono text-[0.62rem] font-semibold tracking-[0.16em] text-[#172033] shadow-sm",
														children: "OPEN CHAPTER"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl",
												children: c.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 max-w-2xl text-base leading-relaxed text-foreground/80",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
													en: c.body.en,
													id: c.body.id
												})
											}),
											c.strands && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3",
												children: c.strands.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-lg border border-[#8CC0EB]/30 bg-background/80 p-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-mono text-[0.6rem] font-semibold tracking-[0.24em] text-[#8CC0EB]",
														children: s.label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-xs leading-relaxed text-foreground/80",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
															en: s.en,
															id: s.id
														})
													})]
												}, s.label))
											}),
											isNext && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-5 inline-flex items-center gap-2.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-2 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "relative flex h-2 w-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8CC0EB] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[#172033]" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[0.68rem] font-semibold tracking-[0.24em] text-[#172033]",
													children: "AVAILABLE FOR INTERNSHIP"
												})]
											})
										]
									})]
								})
							}, c.year + c.title);
						})]
					})
				})]
			})]
		})
	});
}
var projects = [
	{
		id: "bisindo",
		note: "FIELD NOTE 01",
		domain: "AI / COMPUTER VISION",
		year: "2026",
		title: "BISINDO Sign Language Learning & Detection System",
		question: {
			en: "How can computer vision support sign language learning?",
			id: "Bagaimana computer vision dapat mendukung pembelajaran bahasa isyarat?"
		},
		build: {
			en: "A web-based system that combines live camera input with deep learning to recognize BISINDO signs and guide learners in practice.",
			id: "Sistem berbasis web yang memadukan input kamera langsung dengan deep learning untuk mengenali isyarat BISINDO dan memandu proses belajar."
		},
		stack: [
			"Python",
			"Deep Learning",
			"Computer Vision",
			"Web"
		],
		githubUrl: "https://github.com/nadine6126/Sign-language-BISINDO-",
		featured: true
	},
	{
		id: "packwise",
		note: "FIELD NOTE 02",
		domain: "AI / BACKEND SYSTEMS",
		year: "2026",
		title: "PackWise — Risk Prediction API",
		question: {
			en: "How can AI assist risk assessment in packaging workflows?",
			id: "Bagaimana AI dapat membantu penilaian risiko dalam alur kerja packaging?"
		},
		build: {
			en: "An API layer combining applied ML with authentication and real-world system architecture for risk scoring.",
			id: "Lapisan API yang memadukan ML terapan dengan autentikasi dan arsitektur sistem nyata untuk penilaian risiko."
		},
		stack: [
			"Python",
			"FastAPI",
			"Supabase",
			"ML"
		],
		githubUrl: "https://github.com/siwsiw1"
	},
	{
		id: "pulupulu",
		note: "FIELD NOTE 03",
		domain: "DATA / STATISTICS",
		year: "2025",
		title: "Pulu-Pulu Calculator",
		question: {
			en: "How can statistical concepts become more accessible through software?",
			id: "Bagaimana konsep statistik menjadi lebih mudah diakses melalui perangkat lunak?"
		},
		build: {
			en: "A focused calculator turning statistical formulas into something interactive and legible.",
			id: "Kalkulator fokus yang mengubah rumus statistik menjadi sesuatu yang interaktif dan mudah dibaca."
		},
		stack: [
			"Python",
			"Flask",
			"SciPy"
		],
		githubUrl: "https://github.com/siwsiw1"
	},
	{
		id: "p3k",
		note: "FIELD NOTE 04",
		domain: "WEB DEVELOPMENT",
		year: "2025",
		title: "P3K Tutoring Platform",
		question: {
			en: "How can a web experience make learning opportunities easier to access?",
			id: "Bagaimana pengalaman web dapat membuat kesempatan belajar lebih mudah diakses?"
		},
		build: {
			en: "A responsive front-end that puts clarity of information above visual noise.",
			id: "Front-end responsif yang mengedepankan kejelasan informasi di atas kebisingan visual."
		},
		stack: [
			"HTML",
			"Tailwind CSS",
			"JavaScript"
		],
		githubUrl: "https://github.com/siwsiw1"
	}
];
function Projects() {
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && setOpen(null);
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);
	const featured = projects.find((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "scroll-mt-24 border-t border-border py-28 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: "04",
					label: "PROJECTS"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground",
							children: [
								"Things I built",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"while ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-foreground/85",
									children: "figuring things out."
								})
							]
						}) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5 lg:col-start-8 flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-base leading-relaxed text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
									en: "Each project is a field note — a question I explored by building. From experiments to working systems.",
									id: "Setiap proyek adalah catatan lapangan — pertanyaan yang saya jelajahi dengan membangun. Dari eksperimen menjadi sistem yang bekerja."
								})
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group mt-16 block w-full text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-[#8CC0EB]/60 bg-mist/60 p-6 md:p-10 shadow-sm transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-10 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-[0.65rem] font-semibold tracking-[0.24em] text-[#64748B]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#AEE2FF]/50 border border-[#8CC0EB]/40 px-2.5 py-0.5 text-[#172033] dark:text-[#F4F1EA]",
												children: featured.note
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#8CC0EB]",
												children: featured.year
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-mono text-[0.62rem] font-medium tracking-[0.2em] text-[#8CC0EB]",
										children: featured.domain
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										onClick: () => setOpen(featured),
										className: "mt-4 font-serif text-[clamp(1.75rem,3.8vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground cursor-pointer hover:text-[#8CC0EB] transition-colors",
										children: featured.title
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-[#8CC0EB]/30 pt-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "label-mono text-[#8CC0EB]",
												children: "The question"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 font-serif text-lg italic text-foreground/90",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
													en: featured.question.en,
													id: featured.question.id
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "label-mono text-[#8CC0EB]",
											children: "The build"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-sm leading-relaxed text-foreground/80",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: featured.build.en,
												id: featured.build.id
											})
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2 pt-2",
											children: featured.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full border border-[#8CC0EB]/50 bg-background/80 px-3 py-1 font-mono text-[0.62rem] font-medium tracking-[0.18em] text-[#172033] dark:text-[#F4F1EA]",
												children: s
											}, s))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-3 pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setOpen(featured),
												className: "inline-flex items-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-5 py-2.5 font-mono text-xs font-semibold text-[#172033] hover:bg-[#8CC0EB] transition-colors",
												children: ["VIEW CASE STUDY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: featured.githubUrl,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-mono text-xs font-medium text-foreground hover:bg-mist transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 14 }), " GITHUB"]
											})]
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => setOpen(featured),
									className: "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#8CC0EB]/60 bg-[#EAF6FD] dark:bg-[#172331] shadow-inner cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[#EAF6FD] via-[#FEF9F2]/70 to-[#AEE2FF]/30 dark:from-[#172331] dark:to-[#101820]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											viewBox: "0 0 800 500",
											className: "relative z-10 h-full w-full",
											"aria-hidden": true,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
													id: "soft-grid",
													width: "24",
													height: "24",
													patternUnits: "userSpaceOnUse",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														d: "M 24 0 L 0 0 0 24",
														fill: "none",
														stroke: "#8CC0EB",
														strokeWidth: "0.5",
														opacity: "0.25"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
													id: "wave-grad",
													x1: "0",
													y1: "0",
													x2: "1",
													y2: "0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
															offset: "0%",
															stopColor: "#8CC0EB",
															stopOpacity: "0.8"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
															offset: "50%",
															stopColor: "#AEE2FF",
															stopOpacity: "1"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
															offset: "100%",
															stopColor: "#8CC0EB",
															stopOpacity: "0.8"
														})
													]
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													width: "800",
													height: "500",
													fill: "url(#soft-grid)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
													x: "24",
													y: "36",
													className: "fill-[#172033]/70 dark:fill-[#F4F1EA]/70 font-mono text-[10px] font-semibold",
													letterSpacing: "2",
													children: "CANVAS :: BISINDO_SIGN_LANGUAGE_CV"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
													x: "620",
													y: "36",
													className: "fill-[#8CC0EB] font-mono text-[10px] font-semibold",
													letterSpacing: "1.5",
													children: "STATUS: ACTIVE"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
													fill: "none",
													stroke: "url(#wave-grad)",
													strokeWidth: "1.8",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 40 420 Q 100 390, 160 430 T 280 410 T 400 440 T 520 400 T 640 430 T 760 410" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
													className: "stroke-[#8CC0EB]",
													fill: "none",
													strokeWidth: "2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
															x: "290",
															y: "90",
															width: "310",
															height: "320",
															strokeDasharray: "8 6",
															opacity: "0.85"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
															d: "M 285 110 L 285 85 L 310 85",
															strokeWidth: "3",
															stroke: "#AEE2FF"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
															d: "M 605 110 L 605 85 L 580 85",
															strokeWidth: "3",
															stroke: "#AEE2FF"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
															d: "M 285 390 L 285 415 L 310 415",
															strokeWidth: "3",
															stroke: "#AEE2FF"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
															d: "M 605 390 L 605 415 L 580 415",
															strokeWidth: "3",
															stroke: "#AEE2FF"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "295",
													y: "95",
													width: "135",
													height: "24",
													rx: "4",
													fill: "#AEE2FF"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
													x: "305",
													y: "111",
													className: "fill-[#172033] font-mono text-[10px] font-bold",
													letterSpacing: "1.5",
													children: "DETECT :: 0.96"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
													className: "stroke-[#172033]/80 dark:stroke-[#AEE2FF]",
													fill: "none",
													strokeWidth: "1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 440 370 L 440 300 L 400 240 L 370 180" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 440 300 L 430 210 L 425 150" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 440 300 L 470 210 L 475 145" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 440 300 L 510 230 L 525 175" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 440 370 L 490 320 L 535 290" })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
													fill: "#AEE2FF",
													stroke: "#172033",
													strokeWidth: "1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "440",
															cy: "370",
															r: "5"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "440",
															cy: "300",
															r: "4"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "400",
															cy: "240",
															r: "4"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "370",
															cy: "180",
															r: "5",
															fill: "#8CC0EB"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "430",
															cy: "210",
															r: "4"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "425",
															cy: "150",
															r: "5",
															fill: "#8CC0EB"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "470",
															cy: "210",
															r: "4"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "475",
															cy: "145",
															r: "5",
															fill: "#8CC0EB"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "510",
															cy: "230",
															r: "4"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "525",
															cy: "175",
															r: "5",
															fill: "#8CC0EB"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "490",
															cy: "320",
															r: "4"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "535",
															cy: "290",
															r: "5",
															fill: "#8CC0EB"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
													x: "24",
													y: "472",
													className: "fill-[#172033]/70 dark:fill-[#F4F1EA]/70 font-mono text-[9.5px]",
													letterSpacing: "2",
													children: "LANDMARKS: 21_POINTS · REPO: nadine6126/Sign-language-BISINDO-"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: featured.githubUrl,
											target: "_blank",
											rel: "noreferrer",
											onClick: (e) => e.stopPropagation(),
											className: "absolute right-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-[#8CC0EB] bg-[#FEF9F2]/90 dark:bg-[#101820]/90 px-3.5 py-1.5 shadow-sm backdrop-blur hover:bg-[#AEE2FF]/40 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]",
												children: "GITHUB REPO"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
												size: 12,
												className: "text-[#8CC0EB] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
											})]
										})
									]
								})
							})]
						})
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-1 gap-8 md:grid-cols-3",
					children: rest.map((p, i) => {
						const bgClass = i === 0 ? "bg-mist/80 border-[#8CC0EB]/50" : i === 1 ? "bg-background border-border" : "bg-mist/50 border-[#8CC0EB]/40";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `group flex h-full flex-col justify-between rounded-xl border p-6 text-left transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-md ${bgClass}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => setOpen(p),
									className: "cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between font-mono text-[0.6rem] font-semibold tracking-[0.24em] text-[#64748B]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded bg-[#AEE2FF]/40 px-2 py-0.5 text-[#172033] dark:text-[#F4F1EA]",
												children: p.note
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#8CC0EB]",
												children: p.year
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 font-mono text-[0.6rem] font-medium tracking-[0.2em] text-[#8CC0EB]",
											children: p.domain
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 font-serif text-2xl font-medium tracking-tight text-foreground group-hover:text-[#8CC0EB] transition-colors",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-serif text-base italic text-foreground/80",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: p.question.en,
												id: p.question.id
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 border-t border-[#8CC0EB]/30 pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap items-center gap-1.5",
											children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full border border-[#8CC0EB]/30 bg-background/60 px-2.5 py-0.5 font-mono text-[0.6rem] text-muted-foreground",
												children: s
											}, s))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.githubUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1 text-xs font-medium text-[#8CC0EB] hover:underline",
											children: ["GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 12 })]
										})]
									})
								})]
							})
						}, p.id);
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDetail, {
			project: open,
			onClose: () => setOpen(null)
		})]
	});
}
function ProjectDetail({ project, onClose }) {
	const parts = [
		{
			n: "01",
			en: {
				t: "The question",
				d: project.question.en
			},
			id: {
				t: "Pertanyaan",
				d: project.question.id
			}
		},
		{
			n: "02",
			en: {
				t: "The approach",
				d: "Explored the problem through research, small experiments, and iterative sketches."
			},
			id: {
				t: "Pendekatan",
				d: "Menjelajahi masalah melalui riset, eksperimen kecil, dan sketsa berulang."
			}
		},
		{
			n: "03",
			en: {
				t: "The build",
				d: project.build.en
			},
			id: {
				t: "Membangun",
				d: project.build.id
			}
		},
		{
			n: "04",
			en: {
				t: "The repository",
				d: `Source code and project structure available on GitHub at ${project.githubUrl}`
			},
			id: {
				t: "Repositori",
				d: `Kode sumber dan struktur proyek tersedia di GitHub pada ${project.githubUrl}`
			}
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[80] flex justify-end bg-[#172033]/40 backdrop-blur-sm",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-full w-full max-w-2xl overflow-y-auto bg-background shadow-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-[#AEE2FF]/40 px-2 py-0.5 text-[#172033] font-semibold",
							children: project.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#8CC0EB] font-medium",
							children: project.domain
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "grid h-9 w-9 place-items-center rounded-full border border-[#8CC0EB]/50 bg-mist hover:bg-[#AEE2FF]/40 transition-colors",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						size: 15,
						className: "text-[#172033] dark:text-[#F4F1EA]"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 py-10 md:px-10 md:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: project.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-[#8CC0EB]/50 bg-mist px-3 py-1 font-mono text-[0.62rem] font-medium tracking-[0.18em] text-[#172033] dark:text-[#F4F1EA]",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-8",
						children: parts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-[#8CC0EB]/30 bg-mist/40 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[0.65rem] font-bold tracking-[0.24em] text-[#8CC0EB]",
									children: [p.n, " —"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-serif text-xl font-medium tracking-tight text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
										en: p.en.t,
										id: p.id.t
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 text-base leading-relaxed text-foreground/85",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
									en: p.en.d,
									id: p.id.d
								})
							})]
						}, p.n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex flex-wrap items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.githubUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-6 py-3 text-sm font-semibold text-[#172033] shadow-xs transition-colors hover:bg-[#8CC0EB]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
									en: "View Repository on GitHub",
									id: "Lihat Repositori di GitHub"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })
							]
						})
					})
				]
			})]
		})
	});
}
var groups = [
	{
		id: "languages",
		icon: CodeXml,
		title: {
			en: "LANGUAGES",
			id: "BAHASA PEMROGRAMAN"
		},
		skills: [
			{
				name: "Python",
				desc: {
					en: "AI, ML & Backend Data",
					id: "AI, ML & Backend Data"
				}
			},
			{
				name: "JavaScript",
				desc: {
					en: "Interactive Web & Logic",
					id: "Web Interaktif & Logika"
				}
			},
			{
				name: "C++",
				desc: {
					en: "Algorithm Foundations",
					id: "Fondasi Algoritma"
				}
			},
			{
				name: "PHP",
				desc: {
					en: "Backend & Web Scripting",
					id: "Backend & Web Scripting"
				}
			},
			{
				name: "HTML & CSS",
				desc: {
					en: "Structure & Editorial Layouts",
					id: "Struktur & Tata Letak Editorial"
				}
			}
		]
	},
	{
		id: "ai-data",
		icon: Brain,
		title: {
			en: "AI & DATA",
			id: "AI & DATA"
		},
		skills: [
			{
				name: "TensorFlow",
				desc: {
					en: "Deep Learning Models",
					id: "Model Deep Learning"
				}
			},
			{
				name: "Keras",
				desc: {
					en: "Neural Network Workflows",
					id: "Alur Kerja Jaringan Saraf"
				}
			},
			{
				name: "Scikit-learn",
				desc: {
					en: "Applied Machine Learning",
					id: "Machine Learning Terapan"
				}
			},
			{
				name: "SciPy",
				desc: {
					en: "Scientific & Statistical Computing",
					id: "Komputasi Ilmiah & Statistik"
				}
			},
			{
				name: "Pandas",
				desc: {
					en: "Data Manipulation & Analysis",
					id: "Manipulasi & Analisis Data"
				}
			},
			{
				name: "NumPy",
				desc: {
					en: "Numerical Operations",
					id: "Operasi Numerik"
				}
			}
		]
	},
	{
		id: "web-backend",
		icon: Server,
		title: {
			en: "WEB & BACKEND",
			id: "WEB & BACKEND"
		},
		skills: [
			{
				name: "React",
				desc: {
					en: "Modern UI Component Systems",
					id: "Sistem Komponen UI Modern"
				}
			},
			{
				name: "FastAPI",
				desc: {
					en: "High-Performance Python APIs",
					id: "API Python Performa Tinggi"
				}
			},
			{
				name: "Flask",
				desc: {
					en: "Lightweight Web Services",
					id: "Layanan Web Ringan"
				}
			},
			{
				name: "Laravel",
				desc: {
					en: "PHP Web Framework",
					id: "Framework Web PHP"
				}
			},
			{
				name: "Tailwind CSS",
				desc: {
					en: "Utility-First Styling",
					id: "Styling Utility-First"
				}
			},
			{
				name: "MySQL",
				desc: {
					en: "Relational Database Management",
					id: "Manajemen Database Relasional"
				}
			}
		]
	},
	{
		id: "tools-platforms",
		icon: Wrench,
		title: {
			en: "TOOLS & PLATFORMS",
			id: "ALAT & PLATFORM"
		},
		skills: [
			{
				name: "Git & GitHub",
				desc: {
					en: "Version Control & Collaboration",
					id: "Kontrol Versi & Kolaborasi"
				}
			},
			{
				name: "Supabase",
				desc: {
					en: "Open-source Backend & Auth",
					id: "Backend & Autentikasi Open-source"
				}
			},
			{
				name: "Figma",
				desc: {
					en: "UI/UX & Wireframing",
					id: "UI/UX & Wireframing"
				}
			},
			{
				name: "Google Colab",
				desc: {
					en: "Interactive Python & ML Notebooks",
					id: "Notebook Interactive Python & ML"
				}
			},
			{
				name: "Kaggle",
				desc: {
					en: "Data Science & Experiments",
					id: "Sains Data & Eksperimen"
				}
			}
		]
	}
];
function Toolkit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "toolkit",
		className: "scroll-mt-24 border-t border-border py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: "05",
					label: "TOOLKIT"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground",
							children: [
								"The tools I use",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-foreground/85",
									children: "explore and build."
								})
							]
						}) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5 lg:col-start-8 flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-base leading-relaxed text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
									en: "A focused set of technologies explored through projects, coursework, and practical experimentation.",
									id: "Rangkaian teknologi terfokus yang dijelajahi melalui proyek, perkuliahan, dan eksperimen praktis."
								})
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-1 gap-8 md:grid-cols-2",
					children: groups.map((group, groupIdx) => {
						const Icon = group.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: groupIdx * 90,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group h-full rounded-2xl border border-[#8CC0EB]/40 bg-mist/50 p-6 md:p-8 shadow-xs transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-[#8CC0EB]/30 pb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 place-items-center rounded-lg border border-[#8CC0EB]/60 bg-[#AEE2FF]/40 text-[#172033] dark:text-[#F4F1EA]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												size: 18,
												className: "text-[#172033] dark:text-[#AEE2FF]"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-mono text-xs font-bold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: group.title.en,
												id: group.title.id
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[0.62rem] font-semibold text-[#8CC0EB]",
										children: ["0", groupIdx + 1]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 divide-y divide-[#8CC0EB]/20",
									children: group.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center justify-between py-3 transition-colors hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-lg font-medium tracking-tight text-foreground",
											children: skill.name
										}), skill.desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[0.62rem] font-medium tracking-[0.16em] text-muted-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: skill.desc.en,
												id: skill.desc.id
											})
										})]
									}, skill.name))
								})]
							})
						}, group.id);
					})
				})
			]
		})
	});
}
var proofData = [
	{
		id: "certifications",
		icon: Award,
		label: {
			en: "CERTIFICATIONS",
			id: "SERTIFIKASI"
		},
		items: [{
			title: "BNSP Data Science Certification",
			org: "Badan Nasional Sertifikasi Profesi (BNSP)",
			desc: {
				en: "National certification validating core competencies in data analysis, statistical modeling, and data science methodology.",
				id: "Sertifikasi nasional yang memvalidasi kompetensi inti dalam analisis data, pemodelan statistik, dan metodologi sains data."
			},
			year: "VERIFIED"
		}]
	},
	{
		id: "programs",
		icon: BookOpen,
		label: {
			en: "PROGRAMS & EXPERIENCES",
			id: "PROGRAM & PENGALAMAN"
		},
		items: [{
			title: "Google AI Talent Development Program",
			org: "Google",
			desc: {
				en: "Intensive training program focused on applied artificial intelligence, machine learning fundamentals, and real-world problem solving.",
				id: "Program pelatihan intensif terfokus pada kecerdasan buatan terapan, fondasi machine learning, dan pemecahan masalah dunia nyata."
			}
		}, {
			title: "Samsung Innovation Campus",
			org: "Samsung",
			desc: {
				en: "Technology education program covering AI, Python programming, IoT, and software development practices.",
				id: "Program pendidikan teknologi yang mencakup AI, pemrograman Python, IoT, dan praktik pengembangan perangkat lunak."
			}
		}]
	},
	{
		id: "projects-comp",
		icon: Terminal,
		label: {
			en: "COMPETITIONS & PROJECT EXPERIENCES",
			id: "PENGALAMAN KOMPETISI & PROYEK"
		},
		items: [{
			title: "Kaggle Machine Learning Projects",
			org: "Kaggle",
			desc: {
				en: "Practical exploration of dataset preprocessing, feature engineering, and model training through Kaggle benchmarks.",
				id: "Eksplorasi praktis pra-pemrosesan dataset, rekayasa fitur, dan pelatihan model melalui tolok ukur Kaggle."
			}
		}, {
			title: "Applied AI & ML Project Development",
			org: "Independent / Academic",
			desc: {
				en: "Hands-on experience building computer vision and API prediction tools from problem definition to functional prototype.",
				id: "Pengalaman langsung membangun alat computer vision dan prediksi API dari definisi masalah hingga prototipe fungsional."
			}
		}]
	}
];
function Proof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proof",
		className: "scroll-mt-24 border-t border-border py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: "06",
					label: "PROOF"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground",
							children: [
								"Things that",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"keep me ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-foreground/85",
									children: "moving."
								})
							]
						}) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5 lg:col-start-8 flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-base leading-relaxed text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
									en: "A growing collection of milestones, certifications, and practical learning experiences.",
									id: "Koleksi bertumbuh dari pencapaian, sertifikasi, dan pengalaman belajar praktis."
								})
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 space-y-12",
					children: proofData.map((category, catIdx) => {
						const Icon = category.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: catIdx * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-[#8CC0EB]/40 bg-mist/40 p-6 md:p-8 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 border-b border-[#8CC0EB]/30 pb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-9 w-9 place-items-center rounded-lg border border-[#8CC0EB]/50 bg-[#AEE2FF]/40 text-[#172033] dark:text-[#F4F1EA]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-mono text-xs font-bold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
											en: category.label.en,
											id: category.label.id
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-1 gap-6 md:grid-cols-2",
									children: category.items.map((item, itemIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "group flex flex-col justify-between rounded-xl border border-border/80 bg-background/80 p-5 transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist/70 shadow-2xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[0.62rem] font-semibold text-[#8CC0EB]",
													children: item.org
												}), item.year && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#AEE2FF]/50 border border-[#8CC0EB]/40 px-2 py-0.5 font-mono text-[0.6rem] font-bold text-[#172033]",
													children: item.year
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "mt-3 font-serif text-xl font-medium tracking-tight text-foreground",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
													en: item.desc.en,
													id: item.desc.id
												})
											})
										] })
									}, item.title))
								})]
							})
						}, category.id);
					})
				})
			]
		})
	});
}
function Connect() {
	const { lang } = useSite();
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const validate = () => {
		const errs = {};
		if (!formData.name.trim()) errs.name = lang === "en" ? "Name is required." : "Nama wajib diisi.";
		if (!formData.email.trim()) errs.email = lang === "en" ? "Email is required." : "Email wajib diisi.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = lang === "en" ? "Please enter a valid email address." : "Masukkan alamat email yang valid.";
		if (!formData.message.trim()) errs.message = lang === "en" ? "Message is required." : "Pesan wajib diisi.";
		setErrors(errs);
		return Object.keys(errs).length === 0;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSuccess(true);
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: ""
			});
			setErrors({});
		}, 600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "connect",
		className: "scroll-mt-24 border-t border-border py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				n: "07",
				label: "CONNECT"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid grid-cols-1 gap-16 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground",
							children: [
								"Let's build",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"something ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-foreground/85",
									children: "useful."
								})
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-lg text-lg leading-relaxed text-foreground/85",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
									en: "Currently open to internship opportunities where I can learn, contribute, and grow through real-world projects.",
									id: "Saat ini terbuka untuk kesempatan magang tempat saya dapat belajar, berkontribusi, dan berkembang melalui proyek nyata."
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "label-mono text-[#8CC0EB]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
										en: "AREAS OF INTEREST",
										id: "BIDANG MINAT"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: [
										"AI",
										"DATA",
										"SOFTWARE DEVELOPMENT"
									].map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-[#8CC0EB]/50 bg-[#AEE2FF]/30 px-3.5 py-1 font-mono text-xs font-semibold text-[#172033] dark:text-[#F4F1EA]",
										children: area
									}, area))
								})]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 220,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 space-y-4 border-t border-[#8CC0EB]/30 pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:nasywa.fiqrihiyah@gmail.com",
									className: "group flex items-center gap-4 rounded-xl border border-[#8CC0EB]/40 bg-mist/60 p-4 transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-lg border border-[#8CC0EB]/50 bg-[#AEE2FF]/40 text-[#172033] dark:text-[#F4F1EA]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[0.6rem] font-semibold tracking-[0.2em] text-[#8CC0EB]",
										children: "EMAIL"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-sm font-medium text-foreground group-hover:text-[#8CC0EB] transition-colors",
										children: "nasywa.fiqrihiyah@gmail.com"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.linkedin.com/in/nasywa-chonifahtun-fiqrihiyah",
										target: "_blank",
										rel: "noreferrer",
										className: "group flex items-center gap-3.5 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-9 w-9 place-items-center rounded-lg border border-[#8CC0EB]/40 bg-mist text-[#172033] dark:text-[#F4F1EA]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 16 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[0.6rem] font-semibold text-muted-foreground",
											children: "LINKEDIN"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-xs font-medium text-foreground truncate max-w-[150px]",
											children: "nasywa-chonifahtun-fiqrihiyah"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://github.com/siwsiw1",
										target: "_blank",
										rel: "noreferrer",
										className: "group flex items-center gap-3.5 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-9 w-9 place-items-center rounded-lg border border-[#8CC0EB]/40 bg-mist text-[#172033] dark:text-[#F4F1EA]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[0.6rem] font-semibold text-muted-foreground",
											children: "GITHUB"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-xs font-medium text-foreground",
											children: "siwsiw1"
										})] })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/resume.pdf",
										download: "CV_Nasywa_Chonifahtun_Fiqrihiyah.pdf",
										"data-hover": "open",
										className: "group flex w-full items-center justify-center gap-3 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-6 py-4 text-sm font-semibold text-[#172033] shadow-sm transition-all hover:bg-[#8CC0EB]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
											en: "DOWNLOAD RESUME",
											id: "UNDUH RESUME"
										})]
									})
								})
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#8CC0EB]/50 bg-mist/60 p-6 md:p-10 shadow-sm backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-b border-[#8CC0EB]/30 pb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[0.65rem] font-bold tracking-[0.28em] text-[#172033] dark:text-[#F4F1EA]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
										en: "SEND A MESSAGE",
										id: "KIRIM PESAN"
									})
								})
							}), isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-12 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#8CC0EB] bg-[#AEE2FF] text-[#172033]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 28 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-serif text-2xl font-medium tracking-tight text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
											en: "Message Sent!",
											id: "Pesan Terkirim!"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
											en: "Thank you for reaching out. I'll get back to you as soon as possible.",
											id: "Terima kasih telah menghubungi. Saya akan segera membalas pesan Anda."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setIsSuccess(false),
										className: "mt-6 rounded-full border border-[#8CC0EB] bg-[#AEE2FF]/40 px-5 py-2.5 font-mono text-xs font-semibold text-[#172033] hover:bg-[#AEE2FF]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
											en: "Send Another Message",
											id: "Kirim Pesan Lain"
										})
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "mt-6 space-y-5",
								noValidate: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "name",
											className: "block font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: "NAME *",
												id: "NAMA *"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											id: "name",
											value: formData.name,
											onChange: (e) => setFormData({
												...formData,
												name: e.target.value
											}),
											className: `mt-1.5 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-[#8CC0EB] ${errors.name ? "border-destructive focus:ring-destructive" : "border-border/80 hover:border-[#8CC0EB]/60"}`,
											placeholder: lang === "en" ? "Your name" : "Nama Anda"
										}),
										errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 flex items-center gap-1 font-mono text-xs text-destructive",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { size: 12 }),
												" ",
												errors.name
											]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "email",
											className: "block font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: "EMAIL *",
												id: "EMAIL *"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											id: "email",
											value: formData.email,
											onChange: (e) => setFormData({
												...formData,
												email: e.target.value
											}),
											className: `mt-1.5 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-[#8CC0EB] ${errors.email ? "border-destructive focus:ring-destructive" : "border-border/80 hover:border-[#8CC0EB]/60"}`,
											placeholder: "you@example.com"
										}),
										errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 flex items-center gap-1 font-mono text-xs text-destructive",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { size: 12 }),
												" ",
												errors.email
											]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "subject",
										className: "block font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
											en: "SUBJECT",
											id: "SUBJEK"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										id: "subject",
										value: formData.subject,
										onChange: (e) => setFormData({
											...formData,
											subject: e.target.value
										}),
										className: "mt-1.5 w-full rounded-lg border border-border/80 bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-[#8CC0EB]/60 focus:outline-none focus:ring-2 focus:ring-[#8CC0EB]",
										placeholder: lang === "en" ? "Internship Opportunity / Inquiry" : "Peluang Magang / Pertanyaan"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "message",
											className: "block font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
												en: "MESSAGE *",
												id: "PESAN *"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "message",
											rows: 4,
											value: formData.message,
											onChange: (e) => setFormData({
												...formData,
												message: e.target.value
											}),
											className: `mt-1.5 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-[#8CC0EB] ${errors.message ? "border-destructive focus:ring-destructive" : "border-border/80 hover:border-[#8CC0EB]/60"}`,
											placeholder: lang === "en" ? "Tell me about your team or project..." : "Ceritakan tentang tim atau proyek Anda..."
										}),
										errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 flex items-center gap-1 font-mono text-xs text-destructive",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { size: 12 }),
												" ",
												errors.message
											]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: isSubmitting,
										className: "group flex w-full items-center justify-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-6 py-3.5 text-sm font-semibold text-[#172033] shadow-sm transition-all hover:bg-[#8CC0EB] disabled:opacity-50",
										children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
											en: "Sending...",
											id: "Mengirim..."
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
											en: "SEND MESSAGE",
											id: "KIRIM PESAN"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
											size: 14,
											className: "transition-transform group-hover:translate-x-0.5"
										})] })
									})
								]
							})]
						})
					})
				})]
			})]
		})
	});
}
function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-mist/40 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-10 md:flex-row md:items-center md:justify-between border-b border-[#8CC0EB]/30 pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs font-bold tracking-[0.4em] text-foreground",
					children: "NASYWA CHONIFAHTUN FIQRIHIYAH"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-serif text-lg italic text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
						en: "Informatics Student · Exploring AI, Data & Software Development.",
						id: "Mahasiswa Informatika · Mengeksplorasi AI, Data & Pengembang Perangkat Lunak."
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:nasywa.fiqrihiyah@gmail.com",
							className: "grid h-10 w-10 place-items-center rounded-full border border-[#8CC0EB]/50 bg-background text-foreground transition-all hover:bg-[#AEE2FF]/40 hover:border-[#8CC0EB]",
							"aria-label": "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.linkedin.com/in/nasywa-chonifahtun-fiqrihiyah",
							target: "_blank",
							rel: "noreferrer",
							className: "grid h-10 w-10 place-items-center rounded-full border border-[#8CC0EB]/50 bg-background text-foreground transition-all hover:bg-[#AEE2FF]/40 hover:border-[#8CC0EB]",
							"aria-label": "LinkedIn",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/siwsiw1",
							target: "_blank",
							rel: "noreferrer",
							className: "grid h-10 w-10 place-items-center rounded-full border border-[#8CC0EB]/50 bg-background text-foreground transition-all hover:bg-[#AEE2FF]/40 hover:border-[#8CC0EB]",
							"aria-label": "GitHub",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/resume.pdf",
							download: "CV_Nasywa_Chonifahtun_Fiqrihiyah.pdf",
							className: "inline-flex items-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-2 text-xs font-semibold text-[#172033] hover:bg-[#8CC0EB]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 14 }), " Resume"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: scrollToTop,
							className: "grid h-10 w-10 place-items-center rounded-full border border-[#8CC0EB]/50 bg-background text-foreground transition-all hover:bg-mist",
							"aria-label": "Back to top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 16 })
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[0.62rem] font-medium tracking-[0.28em] text-muted-foreground",
					children: "NASYWA C. F. · DIGITAL FIELD JOURNAL / 2026"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-[0.62rem] font-semibold tracking-[0.28em] text-[#8CC0EB]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#8CC0EB] pulse-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
						en: "STILL EXPLORING & BUILDING.",
						id: "MASIH MENJELAJAH & MEMBANGUN."
					})]
				})]
			})]
		})
	});
}
function CustomCursor() {
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	const [label, setLabel] = (0, import_react.useState)(null);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
		setEnabled(mq.matches);
		if (!mq.matches) return;
		document.documentElement.classList.add("cursor-none-all");
		let rx = 0, ry = 0, x = 0, y = 0;
		const move = (e) => {
			x = e.clientX;
			y = e.clientY;
			if (dotRef.current) dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
			const val = (e.target?.closest("[data-hover]"))?.dataset.hover ?? null;
			setLabel(val);
		};
		const loop = () => {
			rx += (x - rx) * .16;
			ry += (y - ry) * .16;
			if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
			requestAnimationFrame(loop);
		};
		window.addEventListener("mousemove", move);
		const raf = requestAnimationFrame(loop);
		return () => {
			window.removeEventListener("mousemove", move);
			cancelAnimationFrame(raf);
			document.documentElement.classList.remove("cursor-none-all");
		};
	}, []);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dotRef,
		className: "pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-secondary"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ringRef,
		className: `pointer-events-none fixed left-0 top-0 z-[100] flex h-8 w-8 items-center justify-center rounded-full border transition-[width,height,background-color,color,border-color] duration-300 ${label ? "h-[72px] w-[72px] border-primary bg-primary/30 text-foreground backdrop-blur-sm" : "border-foreground/30 bg-transparent text-transparent"}`,
		children: label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[0.6rem] tracking-[0.2em] uppercase",
			children: label === "open" ? "Open ↗" : label
		})
	})] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolkit, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Proof, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Connect, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		] })
	] });
}
//#endregion
export { Index as component };
