import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T } from "./theme-provider";
import { Award, BookOpen, Terminal } from "lucide-react";

type ProofCategory = {
  id: string;
  icon: typeof Award;
  label: { en: string; id: string };
  items: {
    title: string;
    org?: string;
    desc: { en: string; id: string };
    year?: string;
  }[];
};

const proofData: ProofCategory[] = [
  {
    id: "certifications",
    icon: Award,
    label: { en: "CERTIFICATIONS", id: "SERTIFIKASI" },
    items: [
      {
        title: "BNSP Data Science Certification",
        org: "Badan Nasional Sertifikasi Profesi (BNSP)",
        desc: {
          en: "National certification validating core competencies in data analysis, statistical modeling, and data science methodology.",
          id: "Sertifikasi nasional yang memvalidasi kompetensi inti dalam analisis data, pemodelan statistik, dan metodologi sains data.",
        },
        year: "VERIFIED",
      },
    ],
  },
  {
    id: "programs",
    icon: BookOpen,
    label: { en: "PROGRAMS & EXPERIENCES", id: "PROGRAM & PENGALAMAN" },
    items: [
      {
        title: "Google AI Talent Development Program",
        org: "Google",
        desc: {
          en: "Intensive training program focused on applied artificial intelligence, machine learning fundamentals, and real-world problem solving.",
          id: "Program pelatihan intensif terfokus pada kecerdasan buatan terapan, fondasi machine learning, dan pemecahan masalah dunia nyata.",
        },
      },
      {
        title: "Samsung Innovation Campus",
        org: "Samsung",
        desc: {
          en: "Technology education program covering AI, Python programming, IoT, and software development practices.",
          id: "Program pendidikan teknologi yang mencakup AI, pemrograman Python, IoT, dan praktik pengembangan perangkat lunak.",
        },
      },
    ],
  },
  {
    id: "projects-comp",
    icon: Terminal,
    label: { en: "COMPETITIONS & PROJECT EXPERIENCES", id: "PENGALAMAN KOMPETISI & PROYEK" },
    items: [
      {
        title: "Kaggle Machine Learning Projects",
        org: "Kaggle",
        desc: {
          en: "Practical exploration of dataset preprocessing, feature engineering, and model training through Kaggle benchmarks.",
          id: "Eksplorasi praktis pra-pemrosesan dataset, rekayasa fitur, dan pelatihan model melalui tolok ukur Kaggle.",
        },
      },
      {
        title: "Applied AI & ML Project Development",
        org: "Independent / Academic",
        desc: {
          en: "Hands-on experience building computer vision and API prediction tools from problem definition to functional prototype.",
          id: "Pengalaman langsung membangun alat computer vision dan prediksi API dari definisi masalah hingga prototipe fungsional.",
        },
      },
    ],
  },
];

export function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="06" label="PROOF" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground">
                Things that
                <br />
                keep me <span className="italic text-foreground/85">moving.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={120}>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                <T
                  en="A growing collection of milestones, certifications, and practical learning experiences."
                  id="Koleksi bertumbuh dari pencapaian, sertifikasi, dan pengalaman belajar praktis."
                />
              </p>
            </Reveal>
          </div>
        </div>

        {/* Honest Archive-style Grid */}
        <div className="mt-16 space-y-12">
          {proofData.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.id} delay={catIdx * 80}>
                <div className="rounded-2xl border border-[#8CC0EB]/40 bg-mist/40 p-6 md:p-8 shadow-xs">
                  <div className="flex items-center gap-3 border-b border-[#8CC0EB]/30 pb-4">
                    <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#8CC0EB]/50 bg-[#AEE2FF]/40 text-[#172033] dark:text-[#F4F1EA]">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-mono text-xs font-bold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]">
                      <T en={category.label.en} id={category.label.id} />
                    </h3>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={item.title}
                        className="group flex flex-col justify-between rounded-xl border border-border/80 bg-background/80 p-5 transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist/70 shadow-2xs"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[0.62rem] font-semibold text-[#8CC0EB]">
                              {item.org}
                            </span>
                            {item.year && (
                              <span className="rounded-full bg-[#AEE2FF]/50 border border-[#8CC0EB]/40 px-2 py-0.5 font-mono text-[0.6rem] font-bold text-[#172033]">
                                {item.year}
                              </span>
                            )}
                          </div>
                          <h4 className="mt-3 font-serif text-xl font-medium tracking-tight text-foreground">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            <T en={item.desc.en} id={item.desc.id} />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
