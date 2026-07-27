import { useState } from "react";
import { Award, GraduationCap, RotateCw } from "lucide-react";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T } from "./theme-provider";

const loopStages = [
  {
    key: "CURIOSITY",
    stage: "01",
    en: "Start with a core question about how a system or algorithm functions.",
    id: "Mulai dengan pertanyaan inti tentang cara kerja suatu sistem atau algoritma.",
  },
  {
    key: "EXPLORE",
    stage: "02",
    en: "Deep-dive into fundamentals, research docs, and theoretical concepts.",
    id: "Mendalami fondasi, dokumentasi riset, dan konsep teoritis.",
  },
  {
    key: "EXPERIMENT",
    stage: "03",
    en: "Build small prototypes, run tests, debug edge cases, and iterate.",
    id: "Membangun prototipe kecil, menguji, melakukan debug, dan iterasi.",
  },
  {
    key: "BUILD",
    stage: "04",
    en: "Engineered code into clean, functioning software and AI tools.",
    id: "Mengolah kode menjadi perangkat lunak fungsional dan alat AI yang rapi.",
  },
  {
    key: "REFLECT",
    stage: "05",
    en: "Analyze what worked, what failed, and what to improve next.",
    id: "Menganalisis apa yang berhasil, apa yang gagal, dan perbaikan selanjutnya.",
  },
];

export function About() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="02" label="ABOUT & IDENTITY" />
        </Reveal>

        {/* Narrative & Identity Section */}
        <div className="mt-12 max-w-4xl">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
              Curious by nature.
              <br />
              <span className="italic text-[#8CC0EB] font-normal">Building by practice.</span>
            </h2>
          </Reveal>

          {/* Academic Credibility Badges */}
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF]/30 dark:bg-[#8CC0EB]/20 px-4 py-1.5 font-mono text-xs font-semibold text-[#172033] dark:text-[#F4F1EA] shadow-2xs">
                <GraduationCap size={15} className="text-[#8CC0EB]" />
                President University · Informatics (AI Concentration)
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-1.5 font-mono text-xs font-semibold text-foreground shadow-2xs">
                <Award size={14} className="text-[#8CC0EB]" />
                GPA 3.78 / 4.00 · Jababeka 2nd Rank Scholarship
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-foreground/90 font-sans">
              <T
                en="I'm Nasywa — an Informatics student at President University focused on Artificial Intelligence, Data Science, and Software Development. I learn by turning theoretical questions into experiments, and experiments into working systems."
                id="Saya Nasywa — mahasiswa Informatika di President University yang berfokus pada Kecerdasan Buatan, Sains Data, dan Pengembangan Perangkat Lunak. Saya belajar dengan mengubah pertanyaan teori menjadi eksperimen, dan eksperimen menjadi sistem yang bekerja."
              />
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground/80 font-sans">
              <T
                en="Whether exploring retrieval-augmented generation (RAG), training computer vision models, engineering rule-based backend decision engines, or organizing student workshops, I am driven by understanding how technology works under the hood and building things that matter."
                id="Baik saat mengeksplorasi RAG, melatih model computer vision, merancang mesin keputusan backend, atau mengorganisir workshop mahasiswa, saya terdorong untuk memahami cara kerja teknologi secara mendalam dan membangun solusi yang bermanfaat."
              />
            </p>
          </Reveal>
        </div>

        {/* My Default Loop Section */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-baseline justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2 font-mono text-[0.65rem] font-bold tracking-[0.28em] text-foreground uppercase">
                <RotateCw size={14} className="text-[#8CC0EB]" />
                MY DEFAULT LOOP
              </div>
              <span className="font-mono text-[0.6rem] font-medium tracking-[0.24em] text-[#8CC0EB] uppercase">
                05 STAGES · REPEATING TRAJECTORY
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 rounded-2xl border border-[#8CC0EB]/50 bg-mist/60 p-6 sm:p-8 md:p-10 shadow-xs backdrop-blur-sm">
              {/* Loop Stage Tabs (Standard pointer behavior, clean hover) */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 md:gap-4">
                {loopStages.map((s, i) => {
                  const isActive = activeStageIndex === i;
                  return (
                    <button
                      key={s.key}
                      onClick={() => setActiveStageIndex(i)}
                      onMouseEnter={() => setActiveStageIndex(i)}
                      onFocus={() => setActiveStageIndex(i)}
                      className={`group flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#8CC0EB] bg-[#AEE2FF]/40 dark:bg-[#172331] shadow-xs scale-[1.02]"
                          : "border-border/70 bg-background/70 text-muted-foreground hover:border-[#8CC0EB]/50 hover:bg-mist/80 hover:text-foreground"
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span
                          className={`font-mono text-[0.6rem] font-bold tracking-[0.22em] ${
                            isActive
                              ? "text-[#172033] dark:text-[#AEE2FF]"
                              : "text-muted-foreground"
                          }`}
                        >
                          {s.stage}
                        </span>
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" />}
                      </div>
                      <span
                        className={`mt-2 font-serif text-lg font-bold tracking-tight md:text-xl ${
                          isActive ? "text-foreground" : "text-foreground/70"
                        }`}
                      >
                        {s.key}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Description Detail Box */}
              <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between border-t border-[#8CC0EB]/30 pt-6 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#8CC0EB]/60 bg-[#AEE2FF]/40 dark:bg-[#8CC0EB]/20 px-3 py-1 font-mono text-[0.62rem] font-bold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]">
                    STAGE {loopStages[activeStageIndex].stage} · {loopStages[activeStageIndex].key}
                  </div>
                  <p className="mt-3 font-serif text-xl italic text-foreground md:text-2xl font-normal">
                    <T en={loopStages[activeStageIndex].en} id={loopStages[activeStageIndex].id} />
                  </p>
                </div>
                <div className="font-mono text-xs font-semibold text-[#8CC0EB] hidden md:block tracking-wider">
                  CURIOSITY → EXPLORE → EXPERIMENT → BUILD → REFLECT ↺
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
