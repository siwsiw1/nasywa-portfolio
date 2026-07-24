import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T } from "./theme-provider";

type Chapter = {
  year: string;
  tag: { en: string; id: string };
  title: string;
  body: { en: string; id: string };
  strands?: { label: string; en: string; id: string }[];
  status?: "current" | "next";
};

const chapters: Chapter[] = [
  {
    year: "2024",
    tag: { en: "Starting point", id: "Titik awal" },
    title: "Informatics — President University",
    body: {
      en: "Started my Informatics journey and began exploring the foundations of technology.",
      id: "Memulai perjalanan Informatika dan mulai mengeksplorasi fondasi teknologi.",
    },
  },
  {
    year: "2025",
    tag: { en: "First real-world experience", id: "Pengalaman dunia nyata pertama" },
    title: "Setsail BizAccel",
    body: {
      en: "A multidimensional experience — moving between building, creating, and coordinating inside a real organization.",
      id: "Pengalaman multidimensi — bergerak antara membangun, berkarya, dan mengoordinasi di dalam organisasi nyata.",
    },
    strands: [
      { label: "WEB", en: "Improved and worked on web experiences.", id: "Mengembangkan dan meningkatkan pengalaman web." },
      { label: "MULTIMEDIA", en: "Created visual content and supported events.", id: "Membuat konten visual dan mendukung acara." },
      { label: "OPERATIONS", en: "Documentation, TOR, RAB, and organizational processes.", id: "Dokumentasi, TOR, RAB, dan proses organisasi." },
    ],
  },
  {
    year: "2025 – 2026",
    tag: { en: "Building & contributing", id: "Membangun & berkontribusi" },
    title: "Projects, workshops, community",
    body: {
      en: "Learning became tangible — through software projects, AI experiments, workshops, and helping others learn: guiding jobseekers with English résumés, teaching CapCut and Canva to teens, and running discussions on digital literacy, privacy, hoaxes, and cyberbullying.",
      id: "Pembelajaran menjadi nyata — melalui proyek perangkat lunak, eksperimen AI, workshop, dan membantu orang lain belajar: memandu pencari kerja menyusun resume bahasa Inggris, mengajar CapCut dan Canva kepada remaja, serta berdiskusi tentang literasi digital, privasi, hoaks, dan perundungan siber.",
    },
  },
  {
    year: "2026",
    tag: { en: "Deepening the exploration", id: "Memperdalam eksplorasi" },
    title: "AI · Data · Software",
    body: {
      en: "Exploring applied AI, data, backend systems, and the process of building technology for real problems.",
      id: "Mengeksplorasi AI terapan, data, sistem backend, dan proses membangun teknologi untuk masalah nyata.",
    },
    status: "current",
  },
  {
    year: "NEXT",
    tag: { en: "Open chapter", id: "Bab terbuka" },
    title: "Available for internship",
    body: {
      en: "Looking for an opportunity to learn, contribute, and build in a real-world environment.",
      id: "Mencari kesempatan untuk belajar, berkontribusi, dan membangun di lingkungan nyata.",
    },
    status: "next",
  },
];

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="03" label="JOURNEY" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground">
                Where has curiosity
                <br />
                <span className="italic text-foreground/85">taken me?</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
                <T
                  en="Not a résumé — a path. Education, experience, building, and quiet exploration all shape the same trajectory."
                  id="Bukan resume — sebuah jalur. Pendidikan, pengalaman, membangun, dan eksplorasi tenang membentuk lintasan yang sama."
                />
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative">
              {/* Organic path line with blue gradient */}
              <div className="pointer-events-none absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#8CC0EB] via-[#AEE2FF] to-border/40 md:left-[13px]" />

              {chapters.map((c, i) => {
                const isCurrent = c.status === "current";
                const isNext = c.status === "next";

                return (
                  <Reveal key={c.year + c.title} delay={i * 60}>
                    <li className="relative pl-10 md:pl-14 pb-12 last:pb-0">
                      {/* Node indicator */}
                      <span
                        className={`absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full transition-all ${
                          isCurrent
                            ? "border-2 border-[#8CC0EB] bg-[#AEE2FF] shadow-md ring-4 ring-[#AEE2FF]/30"
                            : isNext
                            ? "border-2 border-[#8CC0EB] bg-mist"
                            : "border border-[#8CC0EB]/60 bg-background"
                        }`}
                      >
                        {isCurrent ? (
                          <span className="h-2 w-2 rounded-full bg-[#172033]" />
                        ) : isNext ? (
                          <span className="h-2 w-2 rounded-full bg-[#8CC0EB] pulse-soft" />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" />
                        )}
                      </span>

                      {/* Content wrapper with distinct card styling for current & next */}
                      <div
                        className={`rounded-xl p-6 transition-all duration-300 ${
                          isCurrent
                            ? "border border-[#8CC0EB] bg-mist shadow-sm"
                            : isNext
                            ? "border-2 border-dashed border-[#8CC0EB] bg-mist/70 shadow-sm"
                            : "border border-transparent hover:border-border hover:bg-background/60"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className={`font-mono text-xs font-bold tracking-[0.28em] ${isCurrent || isNext ? "text-[#172033] dark:text-[#AEE2FF]" : "text-foreground"}`}>
                            {c.year}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-[#8CC0EB]" />
                          <span className="font-mono text-[0.65rem] font-medium tracking-[0.2em] text-[#64748B] uppercase">
                            <T en={c.tag.en} id={c.tag.id} />
                          </span>
                          {isCurrent && (
                            <span className="ml-auto rounded-full bg-[#AEE2FF] px-2.5 py-0.5 font-mono text-[0.6rem] font-semibold text-[#172033]">
                              CURRENT FOCUS
                            </span>
                          )}
                          {isNext && (
                            <span className="ml-auto rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-3 py-1 font-mono text-[0.62rem] font-semibold tracking-[0.16em] text-[#172033] shadow-sm">
                              OPEN CHAPTER
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                          {c.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/80">
                          <T en={c.body.en} id={c.body.id} />
                        </p>

                        {c.strands && (
                          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {c.strands.map((s) => (
                              <div key={s.label} className="rounded-lg border border-[#8CC0EB]/30 bg-background/80 p-3">
                                <div className="font-mono text-[0.6rem] font-semibold tracking-[0.24em] text-[#8CC0EB]">
                                  {s.label}
                                </div>
                                <p className="mt-1 text-xs leading-relaxed text-foreground/80">
                                  <T en={s.en} id={s.id} />
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {isNext && (
                          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-2 shadow-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8CC0EB] opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#172033]" />
                            </span>
                            <span className="font-mono text-[0.68rem] font-semibold tracking-[0.24em] text-[#172033]">
                              AVAILABLE FOR INTERNSHIP
                            </span>
                          </div>
                        )}
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
