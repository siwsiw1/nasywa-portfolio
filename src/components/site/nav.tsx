import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight, FileText } from "lucide-react";
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
            ? "backdrop-blur-md bg-background/85 border-b border-[#8CC0EB]/30 py-3 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#home" className="group flex items-center gap-2">
            <span className="font-mono text-[0.65rem] font-bold tracking-[0.4em] text-foreground">
              N · A · S · Y · W · A
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" />
          </a>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-hover="explore"
                className="group relative text-xs lg:text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="font-mono text-[0.6rem] text-[#8CC0EB] mr-1">
                  {l.n}
                </span>
                {lang === "en" ? l.en.charAt(0) + l.en.slice(1).toLowerCase() : l.id.charAt(0) + l.id.slice(1).toLowerCase()}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8CC0EB] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={toggleLang}
              className="font-mono text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-foreground font-bold" : ""}>EN</span>
              <span className="mx-1 text-[#8CC0EB]">/</span>
              <span className={lang === "id" ? "text-foreground font-bold" : ""}>ID</span>
            </button>

            <button
              onClick={toggleTheme}
              className="grid h-8 w-8 place-items-center rounded-full border border-[#8CC0EB]/50 bg-mist text-foreground transition-colors hover:bg-[#AEE2FF]/40"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={13} /> : <Sun size={13} />}
            </button>

            <a
              href="/resume.pdf"
              download="CV_Nasywa_Chonifahtun_Fiqrihiyah.pdf"
              data-hover="open"
              className="group inline-flex items-center gap-1.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-1.5 text-xs font-semibold text-[#172033] shadow-xs transition-all hover:bg-[#8CC0EB]"
            >
              <FileText size={12} />
              <T en="Resume" id="Resume" />
              <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#8CC0EB]/60 bg-mist md:hidden"
            aria-label="Open menu"
          >
            <Menu size={16} />
          </button>
        </div>
      </header>

      {/* Mobile chapter-index nav */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-background overflow-y-auto md:hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <span className="font-mono text-[0.65rem] font-bold tracking-[0.4em] text-foreground">
              CHAPTER INDEX
            </span>
            <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-[#8CC0EB]/60 bg-mist">
              <X size={16} />
            </button>
          </div>
          <div className="flex flex-col px-6 py-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-5 border-b border-border/60 py-4"
              >
                <span className="font-mono text-xs text-[#8CC0EB]">{l.n} /</span>
                <span className="text-xl font-medium tracking-tight">{lang === "en" ? l.en : l.id}</span>
              </a>
            ))}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={toggleLang}
                className="font-mono text-xs font-semibold tracking-[0.2em] text-muted-foreground"
              >
                <span className={lang === "en" ? "text-foreground font-bold" : ""}>EN</span>
                <span className="mx-1 text-[#8CC0EB]">/</span>
                <span className={lang === "id" ? "text-foreground font-bold" : ""}>ID</span>
              </button>
              <button
                onClick={toggleTheme}
                className="grid h-9 w-9 place-items-center rounded-full border border-[#8CC0EB]/60 bg-mist"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              </button>
              <a
                href="/resume.pdf"
                download="CV_Nasywa_Chonifahtun_Fiqrihiyah.pdf"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-2 text-xs font-semibold text-[#172033]"
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
