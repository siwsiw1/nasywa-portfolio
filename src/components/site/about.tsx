import { useState } from "react";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T } from "./theme-provider";

const loop = [
  { key: "CURIOSITY", en: "Start with a question.", id: "Mulai dengan pertanyaan." },
  { key: "EXPLORE", en: "Research, study, understand.", id: "Riset, belajar, memahami." },
  { key: "EXPERIMENT", en: "Try. Test. Break. Iterate.", id: "Coba. Uji. Rusak. Iterasi." },
  { key: "BUILD", en: "Turn ideas into something real.", id: "Ubah ide menjadi nyata." },
  { key: "REFLECT", en: "What worked, what didn't, what's next.", id: "Apa yang berhasil, apa yang tidak, apa selanjutnya." },
];

const values = [
  { n: "01", en: { t: "Learn by doing", d: "Turning knowledge into something tangible." }, id: { t: "Belajar dengan mempraktikkan", d: "Mengubah pengetahuan menjadi sesuatu yang nyata." } },
  { n: "02", en: { t: "Build with purpose", d: "Technology should be useful and meaningful." }, id: { t: "Membangun dengan tujuan", d: "Teknologi harus bermakna dan berguna." } },
  { n: "03", en: { t: "Stay curious", d: "Keep asking questions beyond the obvious." }, id: { t: "Tetap penasaran", d: "Terus bertanya melampaui yang tampak." } },
  { n: "04", en: { t: "Keep growing", d: "Treat every project as a step toward the next." }, id: { t: "Terus bertumbuh", d: "Setiap proyek adalah langkah menuju berikutnya." } },
];

export function About() {
  const [active, setActive] = useState(0);
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="02" label="ABOUT" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground">
                Curious by nature.
                <br />
                <span className="italic text-foreground/85">Building by practice.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/85">
                <T
                  en="I'm Nasywa — an Informatics student exploring the intersection of Artificial Intelligence, Software, and Data. I learn by turning questions into experiments, and experiments into working systems."
                  id="Saya Nasywa — mahasiswa Informatika yang menjelajahi persimpangan Kecerdasan Buatan, Perangkat Lunak, dan Data. Saya belajar dengan mengubah pertanyaan menjadi eksperimen, lalu eksperimen menjadi sistem yang bekerja."
                />
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                <T
                  en="Curiosity is where I start. Building is how I learn. Each project is a field note — a small experiment in understanding how things work by making them exist."
                  id="Rasa penasaran adalah titik mula. Membangun adalah cara saya belajar. Setiap proyek adalah catatan lapangan — eksperimen kecil untuk memahami cara kerja sesuatu dengan mewujudkannya."
                />
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={160}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {values.map((v) => (
                  <div
                    key={v.n}
                    className="group rounded-lg border border-border/80 bg-background/50 p-5 transition-all duration-300 hover:border-[#8CC0EB]/60 hover:bg-mist shadow-sm"
                  >
                    <div className="font-mono text-[0.65rem] font-semibold tracking-[0.24em] text-[#8CC0EB]">
                      {v.n} —
                    </div>
                    <h4 className="mt-2 font-serif text-lg font-medium tracking-tight text-foreground">
                      <T en={v.en.t} id={v.id.t} />
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      <T en={v.en.d} id={v.id.d} />
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Loop */}
        <div className="mt-28">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[0.65rem] font-semibold tracking-[0.28em] text-[#64748B]">
                MY DEFAULT LOOP
              </span>
              <span className="font-mono text-[0.6rem] font-medium tracking-[0.24em] text-[#8CC0EB]">
                05 STAGES · REPEATING
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 rounded-xl border border-[#8CC0EB]/50 bg-mist/60 p-8 md:p-12 shadow-sm backdrop-blur-sm">
              {/* Loop Stage Controls */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 md:gap-4">
                {loop.map((s, i) => {
                  const isActive = active === i;
                  return (
                    <button
                      key={s.key}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      data-hover="explore"
                      className={`group flex flex-col items-start rounded-lg border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-[#8CC0EB] bg-[#AEE2FF]/50 dark:bg-[#172331] shadow-sm scale-[1.02]"
                          : "border-border/70 bg-background/60 text-muted-foreground hover:border-[#8CC0EB]/50 hover:bg-mist/80 hover:text-foreground"
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className={`font-mono text-[0.6rem] font-semibold tracking-[0.22em] ${isActive ? "text-[#172033] dark:text-[#AEE2FF]" : "text-muted-foreground"}`}>
                          0{i + 1}
                        </span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" />
                        )}
                      </div>
                      <span className={`mt-2 font-serif text-lg font-medium tracking-tight md:text-xl ${isActive ? "text-[#172033] dark:text-[#F4F1EA]" : ""}`}>
                        {s.key}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Description Box */}
              <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between border-t border-[#8CC0EB]/30 pt-6 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#8CC0EB]/60 bg-[#AEE2FF]/40 px-3 py-1 font-mono text-[0.62rem] font-semibold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]">
                    STAGE 0{active + 1} · {loop[active].key}
                  </div>
                  <p className="mt-3 font-serif text-xl italic text-foreground md:text-2xl">
                    <T en={loop[active].en} id={loop[active].id} />
                  </p>
                </div>
                <div className="font-mono text-xs text-[#8CC0EB] hidden md:block">
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
