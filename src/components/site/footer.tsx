import { T } from "./theme-provider";
import { ArrowUp, FileText, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-mist/40 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between border-b border-[#8CC0EB]/30 pb-12">
          <div>
            <div className="font-mono text-xs font-bold tracking-[0.4em] text-foreground">
              NASYWA CHONIFAHTUN FIQRIHIYAH
            </div>
            <p className="mt-2 font-serif text-lg italic text-muted-foreground">
              <T
                en="Informatics Student · Exploring AI, Data & Software Development."
                id="Mahasiswa Informatika · Mengeksplorasi AI, Data & Pengembang Perangkat Lunak."
              />
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:nasywa.fiqrihiyah@gmail.com"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#8CC0EB]/50 bg-background text-foreground transition-all hover:bg-[#AEE2FF]/40 hover:border-[#8CC0EB]"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/nasywa-chonifahtun-fiqrihiyah"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#8CC0EB]/50 bg-background text-foreground transition-all hover:bg-[#AEE2FF]/40 hover:border-[#8CC0EB]"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/siwsiw1"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#8CC0EB]/50 bg-background text-foreground transition-all hover:bg-[#AEE2FF]/40 hover:border-[#8CC0EB]"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="/resume.pdf"
              download="CV_Nasywa_Chonifahtun_Fiqrihiyah.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-2 text-xs font-semibold text-[#172033] hover:bg-[#8CC0EB]"
            >
              <FileText size={14} /> Resume
            </a>
            <button
              onClick={scrollToTop}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#8CC0EB]/50 bg-background text-foreground transition-all hover:bg-mist"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="font-mono text-[0.62rem] font-medium tracking-[0.28em] text-muted-foreground">
            NASYWA C. F. · DIGITAL FIELD JOURNAL / 2026
          </div>
          <div className="flex items-center gap-2 font-mono text-[0.62rem] font-semibold tracking-[0.28em] text-[#8CC0EB]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8CC0EB] pulse-soft" />
            <T en="STILL EXPLORING & BUILDING." id="MASIH MENJELAJAH & MEMBANGUN." />
          </div>
        </div>
      </div>
    </footer>
  );
}
