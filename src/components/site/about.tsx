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
                <span className="italic">Building by practice.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/80">
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
              <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-10">
                {values.map((v) => (
                  <div key={v.n} className="border-t border-border pt-4">
                    <div className="font-mono text-[0.65rem] tracking-[0.24em] text-muted-foreground">
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
              <span className="font-mono text-[0.65rem] tracking-[0.28em] text-muted-foreground">
                MY DEFAULT LOOP
              </span>
              <span className="font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
                05 STAGES · REPEATING
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 rounded-md border border-border bg-surface/40 p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-between gap-y-6">
                {loop.map((s, i) => (
                  <div key={s.key} className="flex items-center gap-3">
                    <button
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      data-hover="explore"
                      className={`group flex flex-col items-start gap-1 transition-colors ${
                        active === i ? "text-foreground" : "text-foreground/50 hover:text-foreground"
                      }`}
                    >
                      <span className="font-mono text-[0.6rem] tracking-[0.22em] text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="font-serif text-lg font-medium tracking-tight md:text-xl">
                        {s.key}
                      </span>
                    </button>
                    {i < loop.length - 1 && (
                      <span className="mx-1 hidden text-foreground/40 md:inline">→</span>
                    )}
                  </div>
                ))}
                <span className="text-foreground/40 hidden md:inline">↺</span>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <div className="font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
                  {loop[active].key}
                </div>
                <p className="mt-2 font-serif text-xl italic text-foreground/85 md:text-2xl">
                  <T en={loop[active].en} id={loop[active].id} />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
