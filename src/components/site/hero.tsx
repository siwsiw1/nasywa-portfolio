import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { ExplorationMap } from "./exploration-map";
import { LiveClock } from "./live-clock";
import { useSite } from "./theme-provider";
import { Reveal } from "./reveal";

export function Hero() {
  const { openResume } = useSite();

  return (
    <section id="home" className="relative min-h-screen pt-28 sm:pt-32 pb-20 overflow-hidden">
      {/* Soft atmospheric blue mist glow in top background */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-[#AEE2FF]/20 blur-[120px] dark:bg-[#8CC0EB]/10" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Section Indicator & Live WIB Clock */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.7rem] font-bold tracking-[0.32em] text-[#8CC0EB]">
                  01 / HOME
                </span>
                <span className="h-px w-12 bg-border" />
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase hidden sm:inline-block">
                  Informatics Student & Builder
                </span>
              </div>
              <LiveClock />
            </div>
          </Reveal>

          {/* Main Visual Headline */}
          <Reveal delay={80}>
            <h1 className="mt-8 font-serif text-[clamp(2.75rem,6.5vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.02em] text-foreground">
              I Learn by
              <br />
              <span className="italic text-[#8CC0EB] font-normal">Building Things.</span>
            </h1>
          </Reveal>

          {/* Supporting Description */}
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-foreground/85">
              Exploring AI, data, and software development through real projects, experiments, and problems worth solving.
            </p>
          </Reveal>

          {/* Status & Focus Tags */}
          <Reveal delay={220}>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2.5 rounded-full border border-[#8CC0EB]/60 bg-[#AEE2FF]/25 dark:bg-[#8CC0EB]/15 px-3.5 py-1.5 shadow-xs">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8CC0EB] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#8CC0EB]" />
                  </span>
                  <span className="font-mono text-[0.68rem] font-bold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]">
                    AVAILABLE FOR INTERNSHIP
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                <Sparkles size={12} className="text-[#8CC0EB] shrink-0" />
                <span className="font-mono text-[0.65rem] tracking-wider uppercase">Open to roles in:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["AI / Machine Learning", "Data", "Software Development", "Digital Transformation"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#8CC0EB]/30 bg-mist px-2.5 py-0.5 font-mono text-[0.64rem] font-medium text-foreground/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                data-hover="VIEW"
                className="group inline-flex items-center gap-3 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-6 py-3.5 text-sm font-semibold text-[#172033] transition-all hover:-translate-y-0.5 hover:bg-[#8CC0EB] shadow-sm"
              >
                Explore my journey
                <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <button
                onClick={openResume}
                data-hover="OPEN ↗"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3.5 text-sm font-medium text-foreground/80 transition-colors hover:border-[#8CC0EB] hover:bg-mist hover:text-foreground cursor-pointer"
              >
                View résumé
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Right - Interactive Field Map / Orbit */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <Reveal delay={200} className="w-full flex justify-center">
            <ExplorationMap />
          </Reveal>
        </div>
      </div>

      {/* Bottom technical footer strip */}
      <div className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-border pt-5">
          <span className="font-mono text-[0.62rem] tracking-[0.32em] text-muted-foreground">
            SCROLL · CONTINUE READING
          </span>
          <span className="font-mono text-[0.62rem] tracking-[0.32em] text-muted-foreground">
            NASYWA C. F. — DIGITAL FIELD JOURNAL / 2026
          </span>
        </div>
      </div>
    </section>
  );
}
