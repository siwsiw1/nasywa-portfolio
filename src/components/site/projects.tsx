import { useEffect, useState } from "react";
import { ArrowUpRight, X, Github } from "lucide-react";
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
                while <span className="italic">figuring things out.</span>
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

        {/* Featured */}
        <Reveal>
          <button
            onClick={() => setOpen(featured)}
            data-hover="open"
            className="group mt-20 block w-full text-left"
          >
            <div className="grid grid-cols-1 gap-10 border-t border-border pt-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.28em] text-muted-foreground">
                  <span className="text-foreground">{featured.note}</span>
                  <span>·</span>
                  <span>{featured.domain}</span>
                  <span>·</span>
                  <span>{featured.year}</span>
                </div>
                <h3 className="mt-6 font-serif text-[clamp(1.75rem,3.8vw,3rem)] font-medium leading-[1.02] tracking-[-0.02em] text-foreground">
                  {featured.title}
                </h3>
              </div>

              <div className="lg:col-span-7">
                {/* Editorial visual */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-surface/40">
                  <svg viewBox="0 0 800 500" className="h-full w-full" aria-hidden>
                    <defs>
                      <pattern id="fg-dots" width="18" height="18" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.7" className="fill-foreground/10" />
                      </pattern>
                    </defs>
                    <rect width="800" height="500" fill="url(#fg-dots)" />
                    {/* hand silhouette abstraction */}
                    <g className="stroke-foreground/40" fill="none" strokeWidth="1.2">
                      <path d="M 340 380 C 340 300, 360 250, 380 220 L 400 130 C 402 118, 418 118, 420 130 L 428 240" />
                      <path d="M 428 240 L 440 120 C 442 108, 458 108, 460 120 L 464 250" />
                      <path d="M 464 250 L 476 140 C 478 128, 494 128, 496 140 L 496 260" />
                      <path d="M 496 260 L 508 170 C 510 158, 526 158, 526 170 L 522 275" />
                      <path d="M 340 380 Q 380 460, 500 460 Q 560 460, 560 380 L 560 270 C 555 258, 540 258, 535 270" />
                    </g>
                    {/* detection box */}
                    <g className="stroke-secondary" fill="none" strokeWidth="1.5">
                      <rect x="320" y="110" width="260" height="360" strokeDasharray="6 4" />
                    </g>
                    <text x="326" y="102" className="fill-foreground font-mono" fontSize="11" letterSpacing="2">
                      DETECT · 0.94
                    </text>
                    <g className="stroke-foreground/25" fill="none">
                      <line x1="0" y1="450" x2="800" y2="450" />
                    </g>
                    <text x="20" y="472" className="fill-foreground/60 font-mono" fontSize="10" letterSpacing="2.5">
                      BISINDO · SIGN · A · B · C · D · E · F · G · H · I · J · K · L · M
                    </text>
                  </svg>

                  <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1 backdrop-blur">
                    <span className="font-mono text-[0.6rem] tracking-[0.24em] text-foreground">
                      VIEW CASE STUDY
                    </span>
                    <ArrowUpRight size={11} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <div className="label-mono">The question</div>
                    <p className="mt-2 font-serif text-lg italic text-foreground/85">
                      <T en={featured.question.en} id={featured.question.id} />
                    </p>
                  </div>
                  <div>
                    <div className="label-mono">The build</div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      <T en={featured.build.en} id={featured.build.id} />
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[0.62rem] tracking-[0.18em] text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        </Reveal>

        {/* Secondary */}
        <div className="mt-24 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <button
                onClick={() => setOpen(p)}
                data-hover="open"
                className="group block w-full border-t border-border pt-6 text-left"
              >
                <div className="flex items-center justify-between font-mono text-[0.6rem] tracking-[0.28em] text-muted-foreground">
                  <span className="text-foreground">{p.note}</span>
                  <span>{p.year}</span>
                </div>
                <div className="mt-2 font-mono text-[0.6rem] tracking-[0.22em] text-muted-foreground">
                  {p.domain}
                </div>
                <h3 className="mt-4 font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-md font-serif text-base italic text-foreground/70">
                  <T en={p.question.en} id={p.question.id} />
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1 text-xs text-foreground/70 transition-transform group-hover:-translate-y-0.5">
                    Open <ArrowUpRight size={12} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
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
    { n: "04", en: { t: "The challenge", d: "To be documented — details on the hardest parts of getting this working." }, id: { t: "Tantangan", d: "Akan didokumentasikan — bagian tersulit dalam mewujudkan proyek ini." } },
    { n: "05", en: { t: "The learning", d: "To be documented — what building this taught me." }, id: { t: "Pembelajaran", d: "Akan didokumentasikan — pelajaran dari membangun proyek ini." } },
    { n: "06", en: { t: "The next step", d: "To be documented — what could be improved or explored next." }, id: { t: "Langkah berikutnya", d: "Akan didokumentasikan — hal yang bisa disempurnakan atau dijelajahi berikutnya." } },
  ];

  return (
    <div className="fixed inset-0 z-[80] flex justify-end bg-foreground/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="h-full w-full max-w-2xl overflow-y-auto bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur md:px-10">
          <div className="flex items-center gap-3 font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
            <span className="text-foreground">{project.note}</span>
            <span>·</span>
            <span>{project.domain}</span>
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-muted"
            aria-label="Close"
          >
            <X size={15} />
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
                className="rounded-full border border-border px-3 py-1 font-mono text-[0.62rem] tracking-[0.18em] text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {parts.map((p) => (
              <div key={p.n} className="border-t border-border pt-5">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[0.65rem] tracking-[0.24em] text-muted-foreground">
                    {p.n} —
                  </span>
                  <h4 className="font-serif text-xl font-medium tracking-tight text-foreground">
                    <T en={p.en.t} id={p.id.t} />
                  </h4>
                </div>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  <T en={p.en.d} id={p.id.d} />
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background"
            >
              View case study <ArrowUpRight size={13} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-foreground"
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
