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
                <span className="italic">taken me?</span>
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
              {/* organic path */}
              <div className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent md:left-[9px]" />

              {chapters.map((c, i) => (
                <Reveal key={c.year + c.title} delay={i * 60}>
                  <li className="relative pl-8 md:pl-12 pb-14 last:pb-0">
                    <span
                      className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full md:h-5 md:w-5 ${
                        c.status === "current"
                          ? "bg-primary"
                          : c.status === "next"
                          ? "border border-foreground bg-background"
                          : "bg-foreground"
                      }`}
                    >
                      {c.status === "next" && <span className="h-1.5 w-1.5 rounded-full bg-foreground pulse-soft" />}
                    </span>

                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-[0.7rem] tracking-[0.28em] text-foreground">
                        {c.year}
                      </span>
                      <span className="font-mono text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                        <T en={c.tag.en} id={c.tag.id} />
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/75">
                      <T en={c.body.en} id={c.body.id} />
                    </p>

                    {c.strands && (
                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {c.strands.map((s) => (
                          <div key={s.label} className="border-t border-border pt-3">
                            <div className="font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
                              {s.label}
                            </div>
                            <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                              <T en={s.en} id={s.id} />
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {c.status === "next" && (
                      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-foreground/70 px-3.5 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary pulse-soft" />
                        <span className="font-mono text-[0.62rem] tracking-[0.24em] text-foreground">
                          AVAILABLE FOR INTERNSHIP
                        </span>
                      </div>
                    )}
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
