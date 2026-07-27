import { useState } from "react";
import { ArrowUpRight, Compass, Cpu, Database, Code2, Bot } from "lucide-react";

type Key = "AI" | "DATA" | "SOFTWARE" | "ROBOTICS" | null;

interface FieldDetail {
  title: string;
  badge: string;
  icon: typeof Cpu;
  focusLabel: string;
  items: string[];
  projects: { name: string; href: string }[];
}

const fields: Record<Exclude<Key, null>, FieldDetail> = {
  AI: {
    title: "AI / ML",
    badge: "01 · INTELLIGENCE",
    icon: Cpu,
    focusLabel: "Current Focus:",
    items: ["Deep Learning", "Computer Vision", "RAG & LLMs"],
    projects: [
      { name: "BISINDO Sign Language", href: "#projects" },
      { name: "JejakNusantara AI", href: "#projects" },
    ],
  },
  DATA: {
    title: "DATA",
    badge: "02 · ANALYSIS",
    icon: Database,
    focusLabel: "Currently Exploring:",
    items: ["Data Analysis", "Machine Learning", "Predictive Systems"],
    projects: [
      { name: "PackWise AI Analytics", href: "#projects" },
      { name: "Predictive Models", href: "#projects" },
    ],
  },
  SOFTWARE: {
    title: "SOFTWARE",
    badge: "03 · SYSTEMS",
    icon: Code2,
    focusLabel: "I Build With:",
    items: ["Python", "React", "FastAPI", "Flask"],
    projects: [
      { name: "P2C Platform", href: "#projects" },
      { name: "P3K Web System", href: "#projects" },
      { name: "PackWise AI Engine", href: "#projects" },
    ],
  },
  ROBOTICS: {
    title: "ROBOTICS",
    badge: "04 · HARDWARE",
    icon: Bot,
    focusLabel: "Built Before:",
    items: ["YOLOv8n", "Arduino", "4-DOF Robotic Arm"],
    projects: [{ name: "Trash Collection System", href: "#projects" }],
  },
};

export function ExplorationMap() {
  const [active, setActive] = useState<Key>("AI");

  return (
    <div className="relative aspect-[4/5] sm:aspect-[5/6] w-full max-w-[540px] select-none">
      {/* Outer Card Shell with editorial styling */}
      <div className="absolute inset-0 rounded-2xl border border-[#8CC0EB]/50 bg-[#EAF6FD]/90 dark:bg-[#172331]/95 shadow-lg backdrop-blur-md overflow-hidden transition-all" />

      {/* Atmospheric Soft Blue Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#AEE2FF]/20 via-transparent to-[#8CC0EB]/20" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#AEE2FF]/25 blur-3xl dark:bg-[#8CC0EB]/15" />

      {/* Corner Ticks */}
      <Tick className="left-4 top-4" />
      <Tick className="right-4 top-4 rotate-90" />
      <Tick className="left-4 bottom-4 -rotate-90" />
      <Tick className="right-4 bottom-4 rotate-180" />

      {/* Header Annotations — Fixed No-Overlap Flex Layout */}
      <div className="absolute left-6 right-6 top-5 flex items-center justify-between font-mono text-[0.6rem] sm:text-[0.62rem] font-semibold tracking-[0.18em]">
        <div className="flex items-center gap-1.5 text-[#172033]/80 dark:text-[#F4F1EA]/80 shrink-0">
          <Compass size={12} className="text-[#8CC0EB]" />
          <span>CURRENT ORBIT</span>
        </div>
        <span className="text-[#64748B] dark:text-[#94A3B8] shrink-0">04 FIELDS</span>
      </div>

      {/* SVG Canvas for Orbits & Connection Lines */}
      <svg
        viewBox="0 0 500 640"
        className="absolute inset-0 h-full w-full pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="blue-orbit-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" className="fill-[#8CC0EB]/30 dark:fill-[#8CC0EB]/20" />
          </pattern>
        </defs>
        <rect width="500" height="640" fill="url(#blue-orbit-dots)" />

        {/* Central Orbital Rings around (250, 218) */}
        <circle
          cx="250"
          cy="218"
          r="120"
          fill="none"
          stroke="#8CC0EB"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.35"
        />
        <circle
          cx="250"
          cy="218"
          r="70"
          fill="none"
          stroke="#AEE2FF"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Dynamic connection lines to nodes */}
        {/* Top: AI (250, 95) */}
        <line
          x1="250"
          y1="218"
          x2="250"
          y2="95"
          stroke="#8CC0EB"
          strokeWidth={active === "AI" ? "2" : "1.2"}
          strokeDasharray={active === "AI" ? "none" : "4 4"}
          opacity={active === "AI" ? "0.9" : "0.4"}
        />
        {/* Left: DATA (130, 218) */}
        <line
          x1="250"
          y1="218"
          x2="130"
          y2="218"
          stroke="#8CC0EB"
          strokeWidth={active === "DATA" ? "2" : "1.2"}
          strokeDasharray={active === "DATA" ? "none" : "4 4"}
          opacity={active === "DATA" ? "0.9" : "0.4"}
        />
        {/* Right: SOFTWARE (370, 218) */}
        <line
          x1="250"
          y1="218"
          x2="370"
          y2="218"
          stroke="#8CC0EB"
          strokeWidth={active === "SOFTWARE" ? "2" : "1.2"}
          strokeDasharray={active === "SOFTWARE" ? "none" : "4 4"}
          opacity={active === "SOFTWARE" ? "0.9" : "0.4"}
        />
        {/* Bottom: ROBOTICS (250, 340) */}
        <line
          x1="250"
          y1="218"
          x2="250"
          y2="340"
          stroke="#8CC0EB"
          strokeWidth={active === "ROBOTICS" ? "2" : "1.2"}
          strokeDasharray={active === "ROBOTICS" ? "none" : "4 4"}
          opacity={active === "ROBOTICS" ? "0.9" : "0.4"}
        />

        {/* Technical Coordinate Annotations */}
        <text x="24" y="618" className="fill-[#64748B] font-mono text-[9px]" letterSpacing="1.5">
          SYSTEM_ORBIT: ACTIVE
        </text>
        <text x="375" y="618" className="fill-[#64748B] font-mono text-[9px]" letterSpacing="1.5">
          SCALE: 1:1 INTERACTION
        </text>
      </svg>

      {/* Center Core: SYSTEM HUB */}
      <div className="absolute left-1/2 top-[34.1%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-1">
          <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-[#8CC0EB] bg-[#FEF9F2] dark:bg-[#101820] shadow-sm">
            <div className="h-2 w-2 rotate-45 bg-[#8CC0EB] animate-pulse" />
          </div>
          <span className="font-mono text-[0.54rem] font-bold tracking-[0.22em] text-[#172033]/80 dark:text-[#F4F1EA]/80">
            SYSTEM HUB
          </span>
        </div>
      </div>

      {/* Nodes */}
      {/* 1. AI / ML (Top) */}
      <Node
        top="14.8%"
        left="50%"
        label="AI / ML"
        icon={Cpu}
        active={active === "AI"}
        onEnter={() => setActive("AI")}
        animCls="float-a"
      />

      {/* 2. DATA (Left) */}
      <Node
        top="34.1%"
        left="26%"
        label="DATA"
        icon={Database}
        active={active === "DATA"}
        onEnter={() => setActive("DATA")}
        animCls="float-b"
      />

      {/* 3. SOFTWARE (Right) */}
      <Node
        top="34.1%"
        left="74%"
        label="SOFTWARE"
        icon={Code2}
        active={active === "SOFTWARE"}
        onEnter={() => setActive("SOFTWARE")}
        animCls="float-c"
      />

      {/* 4. ROBOTICS (Bottom) */}
      <Node
        top="53.1%"
        left="50%"
        label="ROBOTICS"
        icon={Bot}
        active={active === "ROBOTICS"}
        onEnter={() => setActive("ROBOTICS")}
        animCls="float-a"
      />

      {/* Contextual Detail Panel */}
      <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-[#8CC0EB]/60 bg-[#FEF9F2]/95 dark:bg-[#101820]/95 backdrop-blur-md p-4 shadow-sm transition-all duration-300">
        {active && fields[active] ? (
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.62rem] font-bold tracking-[0.24em] text-[#8CC0EB]">
                {fields[active].badge}
              </span>
              <span className="font-mono text-[0.58rem] text-muted-foreground hidden sm:inline-block">
                SELECT A NODE TO INSPECT
              </span>
            </div>

            <div className="mt-1 flex items-center gap-2">
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#172033] dark:text-[#F4F1EA]">
                {fields[active].title}
              </h3>
            </div>

            {/* Focus Items */}
            <div className="mt-1.5">
              <div className="font-mono text-[0.6rem] font-medium uppercase text-[#64748B] dark:text-[#94A3B8]">
                {fields[active].focusLabel}
              </div>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {fields[active].items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#8CC0EB]/40 bg-[#AEE2FF]/30 dark:bg-[#8CC0EB]/20 px-2 py-0.5 font-mono text-[0.65rem] font-medium text-[#172033] dark:text-[#F4F1EA]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Connected Projects */}
            <div className="mt-2.5 border-t border-border/50 pt-2">
              <div className="font-mono text-[0.58rem] font-medium uppercase text-[#64748B] dark:text-[#94A3B8]">
                Connected Projects:
              </div>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                {fields[active].projects.map((proj) => (
                  <a
                    key={proj.name}
                    href={proj.href}
                    data-hover="VIEW"
                    className="group/proj inline-flex items-center gap-1 font-mono text-[0.7rem] font-semibold text-[#172033] dark:text-[#AEE2FF] hover:underline underline-offset-4"
                  >
                    <span>{proj.name}</span>
                    <ArrowUpRight
                      size={11}
                      className="transition-transform group-hover/proj:-translate-y-0.5 group-hover/proj:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#64748B]">
              HOVER OR TAP A FIELD TO INSPECT
            </div>
            <div className="mt-1 text-sm text-foreground/80">
              Explore four core engineering domains —{" "}
              <span className="font-serif italic text-foreground font-medium">
                building real systems to understand deep concepts
              </span>
              .
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
  label,
  icon: Icon,
  active,
  onEnter,
  animCls,
}: {
  top: string;
  left: string;
  label: string;
  icon: typeof Cpu;
  active: boolean;
  onEnter: () => void;
  animCls: string;
}) {
  return (
    <button
      onMouseEnter={onEnter}
      onClick={onEnter}
      onFocus={onEnter}
      data-hover="FOCUS"
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${animCls} z-10 cursor-pointer outline-none`}
      style={{ top, left }}
      aria-label={`Inspect ${label}`}
    >
      <div className="flex flex-col items-center gap-1">
        <div className="relative">
          {/* Soft blue aura */}
          <div
            className={`absolute inset-0 rounded-full bg-[#AEE2FF] blur-md transition-all duration-300 ${
              active ? "opacity-90 scale-125" : "opacity-35"
            }`}
          />
          <div
            className={`relative grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full border transition-all duration-300 ${
              active
                ? "border-[#8CC0EB] bg-[#AEE2FF] shadow-md scale-105"
                : "border-[#8CC0EB]/60 bg-[#FEF9F2]/95 dark:bg-[#172331]"
            }`}
          >
            <Icon
              size={18}
              className={`transition-colors ${active ? "text-[#172033]" : "text-[#8CC0EB]"}`}
            />
          </div>
        </div>
        <span
          className={`font-mono text-[0.6rem] sm:text-[0.64rem] tracking-[0.22em] font-bold transition-colors ${
            active
              ? "text-[#172033] dark:text-[#AEE2FF]"
              : "text-[#172033]/80 dark:text-[#F4F1EA]/80"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
}
