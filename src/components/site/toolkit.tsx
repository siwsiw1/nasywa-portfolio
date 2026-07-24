import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T } from "./theme-provider";
import { Code2, Brain, Server, Wrench } from "lucide-react";

type ToolGroup = {
  id: string;
  icon: typeof Code2;
  title: { en: string; id: string };
  skills: { name: string; desc?: { en: string; id: string } }[];
};

const groups: ToolGroup[] = [
  {
    id: "languages",
    icon: Code2,
    title: { en: "LANGUAGES", id: "BAHASA PEMROGRAMAN" },
    skills: [
      { name: "Python", desc: { en: "AI, ML & Backend Data", id: "AI, ML & Backend Data" } },
      { name: "JavaScript", desc: { en: "Interactive Web & Logic", id: "Web Interaktif & Logika" } },
      { name: "C++", desc: { en: "Algorithm Foundations", id: "Fondasi Algoritma" } },
      { name: "PHP", desc: { en: "Backend & Web Scripting", id: "Backend & Web Scripting" } },
      { name: "HTML & CSS", desc: { en: "Structure & Editorial Layouts", id: "Struktur & Tata Letak Editorial" } },
    ],
  },
  {
    id: "ai-data",
    icon: Brain,
    title: { en: "AI & DATA", id: "AI & DATA" },
    skills: [
      { name: "TensorFlow", desc: { en: "Deep Learning Models", id: "Model Deep Learning" } },
      { name: "Keras", desc: { en: "Neural Network Workflows", id: "Alur Kerja Jaringan Saraf" } },
      { name: "Scikit-learn", desc: { en: "Applied Machine Learning", id: "Machine Learning Terapan" } },
      { name: "SciPy", desc: { en: "Scientific & Statistical Computing", id: "Komputasi Ilmiah & Statistik" } },
      { name: "Pandas", desc: { en: "Data Manipulation & Analysis", id: "Manipulasi & Analisis Data" } },
      { name: "NumPy", desc: { en: "Numerical Operations", id: "Operasi Numerik" } },
    ],
  },
  {
    id: "web-backend",
    icon: Server,
    title: { en: "WEB & BACKEND", id: "WEB & BACKEND" },
    skills: [
      { name: "React", desc: { en: "Modern UI Component Systems", id: "Sistem Komponen UI Modern" } },
      { name: "FastAPI", desc: { en: "High-Performance Python APIs", id: "API Python Performa Tinggi" } },
      { name: "Flask", desc: { en: "Lightweight Web Services", id: "Layanan Web Ringan" } },
      { name: "Laravel", desc: { en: "PHP Web Framework", id: "Framework Web PHP" } },
      { name: "Tailwind CSS", desc: { en: "Utility-First Styling", id: "Styling Utility-First" } },
      { name: "MySQL", desc: { en: "Relational Database Management", id: "Manajemen Database Relasional" } },
    ],
  },
  {
    id: "tools-platforms",
    icon: Wrench,
    title: { en: "TOOLS & PLATFORMS", id: "ALAT & PLATFORM" },
    skills: [
      { name: "Git & GitHub", desc: { en: "Version Control & Collaboration", id: "Kontrol Versi & Kolaborasi" } },
      { name: "Supabase", desc: { en: "Open-source Backend & Auth", id: "Backend & Autentikasi Open-source" } },
      { name: "Figma", desc: { en: "UI/UX & Wireframing", id: "UI/UX & Wireframing" } },
      { name: "Google Colab", desc: { en: "Interactive Python & ML Notebooks", id: "Notebook Interactive Python & ML" } },
      { name: "Kaggle", desc: { en: "Data Science & Experiments", id: "Sains Data & Eksperimen" } },
    ],
  },
];

export function Toolkit() {
  return (
    <section id="toolkit" className="scroll-mt-24 border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="05" label="TOOLKIT" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.02em] text-foreground">
                The tools I use
                <br />
                to <span className="italic text-foreground/85">explore and build.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={120}>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                <T
                  en="A focused set of technologies explored through projects, coursework, and practical experimentation."
                  id="Rangkaian teknologi terfokus yang dijelajahi melalui proyek, perkuliahan, dan eksperimen praktis."
                />
              </p>
            </Reveal>
          </div>
        </div>

        {/* Editorial Grouping Layout */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {groups.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.id} delay={groupIdx * 90}>
                <div className="group h-full rounded-2xl border border-[#8CC0EB]/40 bg-mist/50 p-6 md:p-8 shadow-xs transition-all duration-300 hover:border-[#8CC0EB] hover:bg-mist hover:shadow-md">
                  <div className="flex items-center justify-between border-b border-[#8CC0EB]/30 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg border border-[#8CC0EB]/60 bg-[#AEE2FF]/40 text-[#172033] dark:text-[#F4F1EA]">
                        <Icon size={18} className="text-[#172033] dark:text-[#AEE2FF]" />
                      </div>
                      <h3 className="font-mono text-xs font-bold tracking-[0.24em] text-[#172033] dark:text-[#F4F1EA]">
                        <T en={group.title.en} id={group.title.id} />
                      </h3>
                    </div>
                    <span className="font-mono text-[0.62rem] font-semibold text-[#8CC0EB]">
                      0{groupIdx + 1}
                    </span>
                  </div>

                  <ul className="mt-6 divide-y divide-[#8CC0EB]/20">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between py-3 transition-colors hover:text-foreground">
                        <span className="font-serif text-lg font-medium tracking-tight text-foreground">
                          {skill.name}
                        </span>
                        {skill.desc && (
                          <span className="font-mono text-[0.62rem] font-medium tracking-[0.16em] text-muted-foreground">
                            <T en={skill.desc.en} id={skill.desc.id} />
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
