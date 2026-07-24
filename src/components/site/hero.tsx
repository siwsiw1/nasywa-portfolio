import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ExplorationMap } from "./exploration-map";
import { T } from "./theme-provider";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        {/* Left */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.7rem] tracking-[0.32em] text-muted-foreground">
                01 / HOME
              </span>
              <span className="h-px w-16 bg-border" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 font-serif text-[clamp(2.75rem,7vw,5.75rem)] font-medium leading-[0.98] tracking-[-0.02em] text-foreground">
              Digital Explorer
              <br />
              <span className="italic text-foreground/80">& Builder</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/80">
              <T
                en="I build things to understand how they work."
                id="Saya membangun untuk memahami cara kerjanya."
              />
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <div>
                <div className="label-mono">
                  <T en="Exploring" id="Menjelajahi" />
                </div>
                <div className="mt-1.5 font-mono text-sm tracking-[0.14em] text-foreground">
                  AI · DATA · SOFTWARE
                </div>
              </div>
              <div className="hidden h-10 w-px bg-border sm:block" />
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                </span>
                <span className="font-mono text-[0.7rem] tracking-[0.24em] text-foreground">
                  <T en="AVAILABLE FOR INTERNSHIP" id="TERSEDIA UNTUK MAGANG" />
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                data-hover="explore"
                className="group inline-flex items-center gap-3 rounded-full border border-foreground/80 bg-primary/40 px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/60"
              >
                <T en="Explore my journey" id="Jelajahi perjalanan saya" />
                <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#"
                data-hover="open"
                className="group inline-flex items-center gap-2 px-2 py-3.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                <T en="View résumé" id="Lihat resume" />
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right - Map */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <Reveal delay={200}>
            <ExplorationMap />
          </Reveal>
        </div>
      </div>

      {/* Bottom scroll strip */}
      <div className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between border-t border-border pt-5">
          <span className="font-mono text-[0.62rem] tracking-[0.32em] text-muted-foreground">
            SCROLL · CONTINUE READING
          </span>
          <span className="font-mono text-[0.62rem] tracking-[0.32em] text-muted-foreground">
            NASYWA C. F. — FIELD JOURNAL / 2026
          </span>
        </div>
      </div>
    </section>
  );
}
