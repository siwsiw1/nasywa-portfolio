import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useSite, T } from "./theme-provider";

const links = [
  { href: "#home", n: "01", en: "HOME", id: "BERANDA" },
  { href: "#about", n: "02", en: "ABOUT", id: "TENTANG" },
  { href: "#journey", n: "03", en: "JOURNEY", id: "PERJALANAN" },
  { href: "#projects", n: "04", en: "PROJECTS", id: "PROYEK" },
  { href: "#toolkit", n: "05", en: "TOOLKIT", id: "PERKAKAS" },
  { href: "#proof", n: "06", en: "PROOF", id: "BUKTI" },
  { href: "#connect", n: "07", en: "CONNECT", id: "KONTAK" },
];

export function Nav() {
  const { theme, toggleTheme, lang, toggleLang } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-background/70 border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#home" className="group flex items-center gap-2">
            <span className="font-mono text-[0.65rem] tracking-[0.4em] text-muted-foreground">
              N · A · S · Y · W · A
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.slice(0, 4).map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-hover="explore"
                className="group relative text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="font-mono text-[0.6rem] text-muted-foreground/70 mr-1.5">
                  {l.n}
                </span>
                {lang === "en" ? l.en.charAt(0) + l.en.slice(1).toLowerCase() : l.id.charAt(0) + l.id.slice(1).toLowerCase()}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={toggleLang}
              className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-foreground" : ""}>EN</span>
              <span className="mx-1 opacity-40">/</span>
              <span className={lang === "id" ? "text-foreground" : ""}>ID</span>
            </button>
            <button
              onClick={toggleTheme}
              className="grid h-8 w-8 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={13} /> : <Sun size={13} />}
            </button>
            <a
              href="#connect"
              data-hover="open"
              className="group inline-flex items-center gap-1.5 rounded-full border border-foreground/80 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              <T en="Resume" id="Resume" />
              <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
            aria-label="Open menu"
          >
            <Menu size={16} />
          </button>
        </div>
      </header>

      {/* Mobile chapter-index nav */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-background md:hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <span className="font-mono text-[0.65rem] tracking-[0.4em] text-muted-foreground">
              CHAPTER INDEX
            </span>
            <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-border">
              <X size={16} />
            </button>
          </div>
          <div className="flex flex-col px-6 py-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-5 border-b border-border/60 py-5"
              >
                <span className="font-mono text-xs text-muted-foreground">{l.n} /</span>
                <span className="text-2xl font-medium tracking-tight">{lang === "en" ? l.en : l.id}</span>
              </a>
            ))}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={toggleLang}
                className="font-mono text-xs tracking-[0.2em] text-muted-foreground"
              >
                <span className={lang === "en" ? "text-foreground" : ""}>EN</span>
                <span className="mx-1 opacity-40">/</span>
                <span className={lang === "id" ? "text-foreground" : ""}>ID</span>
              </button>
              <button
                onClick={toggleTheme}
                className="grid h-9 w-9 place-items-center rounded-full border border-border"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              </button>
              <a
                href="#connect"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-foreground px-4 py-2 text-xs"
              >
                Resume <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
