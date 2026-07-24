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
      {/* Field-note frame */}
      <div className="absolute inset-0 rounded-md border border-border/70 bg-surface/40 backdrop-blur-[2px]" />

      {/* Corner ticks */}
      <Tick className="left-3 top-3" />
      <Tick className="right-3 top-3 rotate-90" />
      <Tick className="left-3 bottom-3 -rotate-90" />
      <Tick className="right-3 bottom-3 rotate-180" />

      {/* Metadata */}
      <div className="absolute left-5 top-5 font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
        FIELD MAP · 01
      </div>
      <div className="absolute right-5 top-5 font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
        03 DOMAINS · 07 PROJECTS
      </div>

      {/* SVG connection lines */}
      <svg viewBox="0 0 500 600" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" className="fill-foreground/10" />
          </pattern>
        </defs>
        <rect width="500" height="600" fill="url(#dots)" />
        <g className="stroke-foreground/25" fill="none" strokeWidth="1">
          <path d="M 250 130 C 220 220, 160 260, 130 310" />
          <path d="M 250 130 C 280 220, 340 260, 370 310" />
          <path d="M 130 340 C 180 400, 220 440, 250 470" />
          <path d="M 370 340 C 320 400, 280 440, 250 470" />
          <path d="M 130 340 C 200 360, 300 360, 370 340" strokeDasharray="3 5" opacity="0.5" />
        </g>
      </svg>

      {/* Nodes */}
      <Node
        top="14%" left="50%" size="lg" tone="primary"
        label="AI" active={active === "AI"}
        onEnter={() => setActive("AI")} onLeave={() => setActive(null)}
        animCls="float-a"
      />
      <Node
        top="52%" left="22%" size="md" tone="secondary"
        label="DATA" active={active === "DATA"}
        onEnter={() => setActive("DATA")} onLeave={() => setActive(null)}
        animCls="float-b"
      />
      <Node
        top="52%" left="78%" size="md" tone="secondary"
        label="SOFTWARE" active={active === "SOFTWARE"}
        onEnter={() => setActive("SOFTWARE")} onLeave={() => setActive(null)}
        animCls="float-c"
      />

      {/* Center: BUILDING */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 float-a"
        style={{ top: "80%", left: "50%" }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="grid h-14 w-14 place-items-center rounded-full border border-foreground/60 bg-background/80">
            <div className="h-2 w-2 rotate-45 bg-secondary" />
          </div>
          <span className="font-mono text-[0.62rem] tracking-[0.28em] text-foreground/70">BUILDING</span>
        </div>
      </div>

      {/* Info panel */}
      <div className="absolute bottom-5 left-5 right-5 rounded border border-border bg-background/85 backdrop-blur px-4 py-3 transition-opacity">
        {active ? (
          <div>
            <div className="font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
              {info[active].label}
            </div>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-serif text-base font-medium tracking-tight text-foreground">
                {active}
              </span>
              <span className="text-sm text-muted-foreground">
                {info[active].items.join(" · ")}
              </span>
            </div>
          </div>
        ) : (
          <div>
            <div className="font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
              HOVER A NODE
            </div>
            <div className="mt-1 text-sm text-foreground/80">
              Three domains, one practice —{" "}
              <span className="font-serif italic">building to understand</span>.
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
      <span className="absolute left-0 top-0 h-px w-3 bg-foreground/50" />
      <span className="absolute left-0 top-0 h-3 w-px bg-foreground/50" />
    </div>
  );
}

function Node({
  top,
  left,
  size,
  tone,
  label,
  active,
  onEnter,
  onLeave,
  animCls,
}: {
  top: string;
  left: string;
  size: "md" | "lg";
  tone: "primary" | "secondary";
  label: string;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  animCls: string;
}) {
  const dim = size === "lg" ? "h-24 w-24" : "h-20 w-20";
  const bg = tone === "primary" ? "bg-primary" : "bg-secondary";
  return (
    <button
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      data-hover="explore"
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${animCls}`}
      style={{ top, left }}
      aria-label={`Explore ${label}`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <div
            className={`absolute inset-0 rounded-full ${bg} opacity-40 blur-md transition-opacity ${
              active ? "opacity-70" : ""
            }`}
          />
          <div
            className={`relative grid ${dim} place-items-center rounded-full border ${
              active ? "border-foreground/70" : "border-foreground/30"
            } ${bg}/25 backdrop-blur-sm transition-all`}
          >
            <div className={`h-1.5 w-1.5 rounded-full bg-secondary ${active ? "" : "pulse-soft"}`} />
          </div>
        </div>
        <span
          className={`font-mono text-[0.65rem] tracking-[0.28em] transition-colors ${
            active ? "text-foreground" : "text-foreground/70"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
}
