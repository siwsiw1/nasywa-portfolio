import { useState } from "react";

type Key = "AI" | "DATA" | "SOFTWARE" | null;

const info: Record<Exclude<Key, null>, { label: string; items: string[] }> = {
  AI: { label: "Currently Exploring", items: ["Computer Vision", "Deep Learning", "Applied AI"] },
  DATA: { label: "Working With", items: ["Data Science", "Statistics", "Machine Learning"] },
  SOFTWARE: { label: "Building With", items: ["React", "Python", "FastAPI", "Flask"] },
};

export function ExplorationMap() {
  const [active, setActive] = useState<Key>(null);

  return (
    <div className="relative aspect-[5/6] w-full max-w-[520px]">
      {/* Container: Soft blue surface mist #EAF6FD with crisp blue-tinted border */}
      <div className="absolute inset-0 rounded-xl border border-[#8CC0EB]/50 bg-[#EAF6FD]/90 dark:bg-[#172331]/90 shadow-md backdrop-blur-md overflow-hidden" />

      {/* Subtle radial blue atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-[#AEE2FF]/25 via-transparent to-[#8CC0EB]/20" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#AEE2FF]/30 blur-3xl dark:bg-[#8CC0EB]/15" />

      {/* Corner ticks */}
      <Tick className="left-4 top-4" />
      <Tick className="right-4 top-4 rotate-90" />
      <Tick className="left-4 bottom-4 -rotate-90" />
      <Tick className="right-4 bottom-4 rotate-180" />

      {/* Metadata & Technical annotations */}
      <div className="absolute left-6 top-5 font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#172033]/70 dark:text-[#F4F1EA]/70">
        FIELD MAP · 01
      </div>
      <div className="absolute right-6 top-5 font-mono text-[0.62rem] font-medium tracking-[0.24em] text-[#64748B]">
        03 DOMAINS · 07 PROJECTS
      </div>

      {/* SVG connection lines in blue */}
      <svg viewBox="0 0 500 600" className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden>
        <defs>
          <pattern id="blue-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" className="fill-[#8CC0EB]/35 dark:fill-[#8CC0EB]/25" />
          </pattern>
        </defs>
        <rect width="500" height="600" fill="url(#blue-dots)" />
        
        {/* Crisp blue connection paths */}
        <g className="stroke-[#8CC0EB]/70 dark:stroke-[#8CC0EB]/50" fill="none" strokeWidth="1.5">
          <path d="M 250 130 C 220 220, 160 260, 130 310" />
          <path d="M 250 130 C 280 220, 340 260, 370 310" />
          <path d="M 130 340 C 180 400, 220 440, 250 470" />
          <path d="M 370 340 C 320 400, 280 440, 250 470" />
          <path d="M 130 340 C 200 360, 300 360, 370 340" strokeDasharray="4 4" opacity="0.75" stroke="#AEE2FF" />
        </g>

        {/* Technical coordinate markings */}
        <text x="26" y="565" className="fill-[#64748B] font-mono text-[9px]" letterSpacing="1.5">
          COORD: 06°12'S 106°49'E
        </text>
        <text x="380" y="565" className="fill-[#64748B] font-mono text-[9px]" letterSpacing="1.5">
          SYS_STATE: OK
        </text>
      </svg>

      {/* Nodes */}
      <Node
        top="15%" left="50%" size="lg"
        label="AI" active={active === "AI"}
        onEnter={() => setActive("AI")} onLeave={() => setActive(null)}
        animCls="float-a"
      />
      <Node
        top="52%" left="24%" size="md"
        label="DATA" active={active === "DATA"}
        onEnter={() => setActive("DATA")} onLeave={() => setActive(null)}
        animCls="float-b"
      />
      <Node
        top="52%" left="76%" size="md"
        label="SOFTWARE" active={active === "SOFTWARE"}
        onEnter={() => setActive("SOFTWARE")} onLeave={() => setActive(null)}
        animCls="float-c"
      />

      {/* Center: BUILDING */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 float-a z-10"
        style={{ top: "79%", left: "50%" }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="grid h-14 w-14 place-items-center rounded-full border border-[#8CC0EB] bg-[#FEF9F2] dark:bg-[#101820] shadow-sm">
            <div className="h-2.5 w-2.5 rotate-45 bg-[#8CC0EB]" />
          </div>
          <span className="font-mono text-[0.62rem] font-bold tracking-[0.28em] text-[#172033] dark:text-[#F4F1EA]">BUILDING</span>
        </div>
      </div>

      {/* Info panel with soft blue background */}
      <div className="absolute bottom-5 left-5 right-5 z-20 rounded-lg border border-[#8CC0EB]/60 bg-[#FEF9F2]/95 dark:bg-[#101820]/95 backdrop-blur px-5 py-3.5 shadow-sm transition-all duration-300">
        {active ? (
          <div>
            <div className="font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#8CC0EB]">
              {info[active].label}
            </div>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-serif text-lg font-semibold tracking-tight text-[#172033] dark:text-[#F4F1EA]">
                {active}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {info[active].items.map((item) => (
                  <span key={item} className="rounded-full bg-[#AEE2FF]/40 border border-[#8CC0EB]/40 px-2.5 py-0.5 font-mono text-xs font-medium text-[#172033] dark:text-[#F4F1EA]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#64748B]">
              HOVER A NODE TO EXPLORE
            </div>
            <div className="mt-1 text-sm text-[#172033]/85 dark:text-[#F4F1EA]/85">
              Three domains, one practice —{" "}
              <span className="font-serif italic text-[#172033] dark:text-[#F4F1EA]">building to understand</span>.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Tick({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <span className="absolute left-0 top-0 h-px w-3 bg-[#8CC0EB]" />
      <span className="absolute left-0 top-0 h-3 w-px bg-[#8CC0EB]" />
    </div>
  );
}

function Node({
  top,
  left,
  size,
  label,
  active,
  onEnter,
  onLeave,
  animCls,
}: {
  top: string;
  left: string;
  size: "md" | "lg";
  label: string;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  animCls: string;
}) {
  const dim = size === "lg" ? "h-24 w-24" : "h-20 w-20";
  return (
    <button
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      data-hover="explore"
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${animCls} z-10`}
      style={{ top, left }}
      aria-label={`Explore ${label}`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          {/* Subtle soft blue aura */}
          <div
            className={`absolute inset-0 rounded-full bg-[#AEE2FF] blur-md transition-all duration-300 ${
              active ? "opacity-90 scale-125" : "opacity-40"
            }`}
          />
          <div
            className={`relative grid ${dim} place-items-center rounded-full border transition-all duration-300 ${
              active
                ? "border-[#8CC0EB] bg-[#AEE2FF] shadow-md scale-105"
                : "border-[#8CC0EB]/60 bg-[#FEF9F2]/90 dark:bg-[#172331]"
            }`}
          >
            <div className={`h-2 w-2 rounded-full transition-all ${active ? "bg-[#172033]" : "bg-[#8CC0EB] pulse-soft"}`} />
          </div>
        </div>
        <span
          className={`font-mono text-[0.68rem] tracking-[0.28em] font-semibold transition-colors ${
            active ? "text-[#172033] dark:text-[#AEE2FF]" : "text-[#172033]/80 dark:text-[#F4F1EA]/80"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
}
