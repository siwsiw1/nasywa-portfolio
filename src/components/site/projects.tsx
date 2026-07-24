import { useEffect, useState } from "react";
import { ArrowUpRight, X, Github, Activity, Cpu, Code2 } from "lucide-react";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T } from "./theme-provider";

type Project = {
  id: string;
  note: string;
  domain: string;
  year: string;
  title: string;
  question: { en: string; id: string };
  build: { en: string; id: string };
  stack: string[];
  githubUrl: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "bisindo",
    note: "FIELD NOTE 01",
    domain: "AI / COMPUTER VISION",
    year: "2026",
    title: "BISINDO Sign Language Learning & Detection System",
    question: {
      en: "How can computer vision support sign language learning?",
      id: "Bagaimana computer vision dapat mendukung pembelajaran bahasa isyarat?",
    },
    build: {
      en: "A web-based system that combines live camera input with deep learning to recognize BISINDO signs and guide learners in practice.",
      id: "Sistem berbasis web yang memadukan input kamera langsung dengan deep learning untuk mengenali isyarat BISINDO dan memandu proses belajar.",
    },
    stack: ["Python", "Deep Learning", "Computer Vision", "Web"],
    githubUrl: "https://github.com/nadine6126/Sign-language-BISINDO-",
    featured: true,
  },
  {
    id: "packwise",
    note: "FIELD NOTE 02",
    domain: "AI / BACKEND SYSTEMS",
    year: "2026",
    title: "PackWise — Risk Prediction API",
    question: {
      en: "How can AI assist risk assessment in packaging workflows?",
      id: "Bagaimana AI dapat membantu penilaian risiko dalam alur kerja packaging?",
    },
    build: {
      en: "An API layer combining applied ML with authentication and real-world system architecture for risk scoring.",
      id: "Lapisan API yang memadukan ML terapan dengan autentikasi dan arsitektur sistem nyata untuk penilaian risiko.",
    },
    stack: ["Python", "FastAPI", "Supabase", "ML"],
    githubUrl: "https://github.com/siwsiw1",
  },
  {
    id: "pulupulu",
    note: "FIELD NOTE 03",
    domain: "DATA / STATISTICS",
    year: "2025",
    title: "Pulu-Pulu Calculator",
    question: {
      en: "How can statistical concepts become more accessible through software?",
      id: "Bagaimana konsep statistik menjadi lebih mudah diakses melalui perangkat lunak?",
    },
    build: {
      en: "A focused calculator turning statistical formulas into something interactive and legible.",
      id: "Kalkulator fokus yang mengubah rumus statistik menjadi sesuatu yang interaktif dan mudah dibaca.",
    },
    stack: ["Python", "Flask", "SciPy"],
    githubUrl: "https://github.com/siwsiw1",
  },
  {
    id: "p3k",
    note: "FIELD NOTE 04",
    domain: "WEB DEVELOPMENT",
    year: "2025",
    title: "P3K Tutoring Platform",
    question: {
      en: "How can a web experience make learning opportunities easier to access?",
      id: "Bagaimana pengalaman web dapat membuat kesempatan belajar lebih mudah diakses?",
    },
    build: {
      en: "A responsive front-end that puts clarity of information above visual noise.",
      id: "Front-end responsif yang mengedepankan kejelasan informasi di atas kebisingan visual.",
    },
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/siwsiw1",
  },
];

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="04" label="PROJECTS" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground">
                Things I built
                <br />
                while <span className="italic text-foreground/85">figuring things out.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={120}>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                <T
                  en="Each project is a field note — a question I explored by building. From experiments to working systems."
                  id="Setiap proyek adalah catatan lapangan — pertanyaan yang saya jelajahi dengan membangun. Dari eksperimen menjadi sistem yang bekerja."
                />
              </p>
            </Reveal>
          </div>
        </div>

        {/* Featured Project Canvas */}
        <Reveal>
          <div className="group mt-16 block w-full text-left">
            <div className="rounded-2xl border border-[#8CC0EB]/60 bg-mist/60 p-6 md:p-10 shadow-sm transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-md">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                {/* Left details */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[0.65rem] font-semibold tracking-[0.24em] text-[#64748B]">
                      <span className="rounded-full bg-[#AEE2FF]/50 border border-[#8CC0EB]/40 px-2.5 py-0.5 text-[#172033] dark:text-[#F4F1EA]">
                        {featured.note}
                      </span>
                      <span>·</span>
                      <span className="text-[#8CC0EB]">{featured.year}</span>
                    </div>
                    <div className="mt-3 font-mono text-[0.62rem] font-medium tracking-[0.2em] text-[#8CC0EB]">
                      {featured.domain}
                    </div>
                    <h3
                      onClick={() => setOpen(featured)}
                      className="mt-4 font-serif text-[clamp(1.75rem,3.8vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground cursor-pointer hover:text-[#8CC0EB] transition-colors"
                    >
                      {featured.title}
                    </h3>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="border-t border-[#8CC0EB]/30 pt-4">
                      <div className="label-mono text-[#8CC0EB]">The question</div>
                      <p className="mt-1.5 font-serif text-lg italic text-foreground/90">
                        <T en={featured.question.en} id={featured.question.id} />
                      </p>
                    </div>
                    <div>
                      <div className="label-mono text-[#8CC0EB]">The build</div>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                        <T en={featured.build.en} id={featured.build.id} />
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {featured.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-[#8CC0EB]/50 bg-background/80 px-3 py-1 font-mono text-[0.62rem] font-medium tracking-[0.18em] text-[#172033] dark:text-[#F4F1EA]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={() => setOpen(featured)}
                        className="inline-flex items-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-5 py-2.5 font-mono text-xs font-semibold text-[#172033] hover:bg-[#8CC0EB] transition-colors"
                      >
                        VIEW CASE STUDY <ArrowUpRight size={13} />
                      </button>
                      <a
                        href={featured.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-mono text-xs font-medium text-foreground hover:bg-mist transition-colors"
                      >
                        <Github size={14} /> GITHUB
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Digital Research Canvas */}
                <div className="lg:col-span-7">
                  <div
                    onClick={() => setOpen(featured)}
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#8CC0EB]/60 bg-[#EAF6FD] dark:bg-[#172331] shadow-inner cursor-pointer"
                  >
                    {/* Soft ambient background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EAF6FD] via-[#FEF9F2]/70 to-[#AEE2FF]/30 dark:from-[#172331] dark:to-[#101820]" />

                    {/* Technical SVG Visualization */}
                    <svg viewBox="0 0 800 500" className="relative z-10 h-full w-full" aria-hidden>
                      <defs>
                        <pattern id="soft-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#8CC0EB" strokeWidth="0.5" opacity="0.25" />
                        </pattern>
                        <linearGradient id="wave-grad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#8CC0EB" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#AEE2FF" stopOpacity="1" />
                          <stop offset="100%" stopColor="#8CC0EB" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                      <rect width="800" height="500" fill="url(#soft-grid)" />

                      {/* Technical Annotation Headers */}
                      <text x="24" y="36" className="fill-[#172033]/70 dark:fill-[#F4F1EA]/70 font-mono text-[10px] font-semibold" letterSpacing="2">
                        CANVAS :: BISINDO_SIGN_LANGUAGE_CV
                      </text>
                      <text x="620" y="36" className="fill-[#8CC0EB] font-mono text-[10px] font-semibold" letterSpacing="1.5">
                        STATUS: ACTIVE
                      </text>

                      {/* Signal / Waveform Graph */}
                      <g fill="none" stroke="url(#wave-grad)" strokeWidth="1.8">
                        <path d="M 40 420 Q 100 390, 160 430 T 280 410 T 400 440 T 520 400 T 640 430 T 760 410" />
                      </g>
                      
                      {/* Bounding box with detection corners */}
                      <g className="stroke-[#8CC0EB]" fill="none" strokeWidth="2">
                        <rect x="290" y="90" width="310" height="320" strokeDasharray="8 6" opacity="0.85" />
                        {/* Corner brackets */}
                        <path d="M 285 110 L 285 85 L 310 85" strokeWidth="3" stroke="#AEE2FF" />
                        <path d="M 605 110 L 605 85 L 580 85" strokeWidth="3" stroke="#AEE2FF" />
                        <path d="M 285 390 L 285 415 L 310 415" strokeWidth="3" stroke="#AEE2FF" />
                        <path d="M 605 390 L 605 415 L 580 415" strokeWidth="3" stroke="#AEE2FF" />
                      </g>

                      {/* Detection Label Badge */}
                      <rect x="295" y="95" width="135" height="24" rx="4" fill="#AEE2FF" />
                      <text x="305" y="111" className="fill-[#172033] font-mono text-[10px] font-bold" letterSpacing="1.5">
                        DETECT :: 0.96
                      </text>

                      {/* Computer Vision Hand Landmark Nodes & Skeleton */}
                      <g className="stroke-[#172033]/80 dark:stroke-[#AEE2FF]" fill="none" strokeWidth="1.5">
                        {/* Palm to fingers connections */}
                        <path d="M 440 370 L 440 300 L 400 240 L 370 180" />
                        <path d="M 440 300 L 430 210 L 425 150" />
                        <path d="M 440 300 L 470 210 L 475 145" />
                        <path d="M 440 300 L 510 230 L 525 175" />
                        <path d="M 440 370 L 490 320 L 535 290" />
                      </g>

                      {/* Landmark Dots */}
                      <g fill="#AEE2FF" stroke="#172033" strokeWidth="1.5">
                        <circle cx="440" cy="370" r="5" />
                        <circle cx="440" cy="300" r="4" />
                        <circle cx="400" cy="240" r="4" />
                        <circle cx="370" cy="180" r="5" fill="#8CC0EB" />

                        <circle cx="430" cy="210" r="4" />
                        <circle cx="425" cy="150" r="5" fill="#8CC0EB" />

                        <circle cx="470" cy="210" r="4" />
                        <circle cx="475" cy="145" r="5" fill="#8CC0EB" />

                        <circle cx="510" cy="230" r="4" />
                        <circle cx="525" cy="175" r="5" fill="#8CC0EB" />

                        <circle cx="490" cy="320" r="4" />
                        <circle cx="535" cy="290" r="5" fill="#8CC0EB" />
                      </g>

                      {/* Bottom Technical Telemetry */}
                      <text x="24" y="472" className="fill-[#172033]/70 dark:fill-[#F4F1EA]/70 font-mono text-[9.5px]" letterSpacing="2">
                        LANDMARKS: 21_POINTS · REPO: nadine6126/Sign-language-BISINDO-
                      </text>
                    </svg>

                    {/* Top right floating overlay button */}
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-[#8CC0EB] bg-[#FEF9F2]/90 dark:bg-[#101820]/90 px-3.5 py-1.5 shadow-sm backdrop-blur hover:bg-[#AEE2FF]/40 transition-colors"
                    >
                      <span className="font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]">
                        GITHUB REPO
                      </span>
                      <ArrowUpRight size={12} className="text-[#8CC0EB] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Secondary Field Notes (Alternating Surfaces) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {rest.map((p, i) => {
            const bgClass =
              i === 0
                ? "bg-mist/80 border-[#8CC0EB]/50"
                : i === 1
                ? "bg-background border-border"
                : "bg-mist/50 border-[#8CC0EB]/40";

            return (
              <Reveal key={p.id} delay={i * 80}>
                <div
                  className={`group flex h-full flex-col justify-between rounded-xl border p-6 text-left transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-md ${bgClass}`}
                >
                  <div onClick={() => setOpen(p)} className="cursor-pointer">
                    <div className="flex items-center justify-between font-mono text-[0.6rem] font-semibold tracking-[0.24em] text-[#64748B]">
                      <span className="rounded bg-[#AEE2FF]/40 px-2 py-0.5 text-[#172033] dark:text-[#F4F1EA]">
                        {p.note}
                      </span>
                      <span className="text-[#8CC0EB]">{p.year}</span>
                    </div>
                    <div className="mt-3 font-mono text-[0.6rem] font-medium tracking-[0.2em] text-[#8CC0EB]">
                      {p.domain}
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-medium tracking-tight text-foreground group-hover:text-[#8CC0EB] transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-serif text-base italic text-foreground/80">
                      <T en={p.question.en} id={p.question.id} />
                    </p>
                  </div>

                  <div className="mt-8 border-t border-[#8CC0EB]/30 pt-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-[#8CC0EB]/30 bg-background/60 px-2.5 py-0.5 font-mono text-[0.6rem] text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#8CC0EB] hover:underline"
                      >
                        GitHub <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Detail drawer */}
      {open && <ProjectDetail project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const parts: { n: string; en: { t: string; d: string }; id: { t: string; d: string } }[] = [
    { n: "01", en: { t: "The question", d: project.question.en }, id: { t: "Pertanyaan", d: project.question.id } },
    { n: "02", en: { t: "The approach", d: "Explored the problem through research, small experiments, and iterative sketches." }, id: { t: "Pendekatan", d: "Menjelajahi masalah melalui riset, eksperimen kecil, dan sketsa berulang." } },
    { n: "03", en: { t: "The build", d: project.build.en }, id: { t: "Membangun", d: project.build.id } },
    { n: "04", en: { t: "The repository", d: `Source code and project structure available on GitHub at ${project.githubUrl}` }, id: { t: "Repositori", d: `Kode sumber dan struktur proyek tersedia di GitHub pada ${project.githubUrl}` } },
  ];

  return (
    <div className="fixed inset-0 z-[80] flex justify-end bg-[#172033]/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="h-full w-full max-w-2xl overflow-y-auto bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur md:px-10">
          <div className="flex items-center gap-3 font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
            <span className="rounded bg-[#AEE2FF]/40 px-2 py-0.5 text-[#172033] font-semibold">{project.note}</span>
            <span>·</span>
            <span className="text-[#8CC0EB] font-medium">{project.domain}</span>
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#8CC0EB]/50 bg-mist hover:bg-[#AEE2FF]/40 transition-colors"
            aria-label="Close"
          >
            <X size={15} className="text-[#172033] dark:text-[#F4F1EA]" />
          </button>
        </div>

        <div className="px-6 py-10 md:px-10 md:py-14">
          <h3 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#8CC0EB]/50 bg-mist px-3 py-1 font-mono text-[0.62rem] font-medium tracking-[0.18em] text-[#172033] dark:text-[#F4F1EA]"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {parts.map((p) => (
              <div key={p.n} className="rounded-lg border border-[#8CC0EB]/30 bg-mist/40 p-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[0.65rem] font-bold tracking-[0.24em] text-[#8CC0EB]">
                    {p.n} —
                  </span>
                  <h4 className="font-serif text-xl font-medium tracking-tight text-foreground">
                    <T en={p.en.t} id={p.id.t} />
                  </h4>
                </div>
                <p className="mt-2.5 text-base leading-relaxed text-foreground/85">
                  <T en={p.en.d} id={p.id.d} />
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-6 py-3 text-sm font-semibold text-[#172033] shadow-xs transition-colors hover:bg-[#8CC0EB]"
            >
              <Github size={16} />
              <T en="View Repository on GitHub" id="Lihat Repositori di GitHub" />
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
