import { Code2, Brain, Server, Database, Wrench, Globe } from "lucide-react";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T } from "./theme-provider";

type Category = {
  id: string;
  icon: typeof Code2;
  title: { en: string; id: string };
  isPrimary?: boolean;
  tools: string[];
};

const toolkitCategories: Category[] = [
  {
    id: "ai-data",
    icon: Brain,
    isPrimary: true,
    title: { en: "AI & DATA", id: "AI & DATA" },
    tools: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "RAG Architecture",
      "LLMs",
      "TensorFlow / Keras",
      "Scikit-learn",
      "Pandas & NumPy",
      "SciPy",
    ],
  },
  {
    id: "web-dev",
    icon: Globe,
    title: { en: "WEB & FRONTEND", id: "WEB & FRONTEND" },
    tools: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
  },
  {
    id: "backend-apis",
    icon: Server,
    title: { en: "BACKEND & APIs", id: "BACKEND & API" },
    tools: ["FastAPI", "Flask", "REST APIs"],
  },
  {
    id: "databases",
    icon: Database,
    title: { en: "DATABASES", id: "DATABASE" },
    tools: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    id: "languages",
    icon: Code2,
    title: { en: "LANGUAGES", id: "BAHASA PEMROGRAMAN" },
    tools: ["Python", "JavaScript", "C++", "Java", "PHP", "SQL"],
  },
  {
    id: "tools-platforms",
    icon: Wrench,
    title: { en: "TOOLS & PLATFORMS", id: "ALAT & PLATFORM" },
    tools: [
      "Git & GitHub",
      "Ollama",
      "Google Colab",
      "VS Code",
      "Android Studio",
      "Roboflow",
      "Vercel",
    ],
  },
];

export function Toolkit() {
  return (
    <section id="toolkit" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="05" label="TECHNICAL TOOLKIT" />
        </Reveal>

        {/* Introduction Narrative */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
                Tools I use to turn
                <br />
                <span className="italic text-[#8CC0EB] font-normal">
                  ideas into working systems.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <Reveal delay={100}>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/80">
                <T
                  en="A focused set of programming languages, AI frameworks, backend services, databases, and development tools I use across projects."
                  id="Rangkaian bahasa pemrograman, framework AI, layanan backend, database, dan alat pengembangan yang saya gunakan dalam berbagai proyek."
                />
              </p>
            </Reveal>
          </div>
        </div>

        {/* 3-Column Workbench Grid Layout */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toolkitCategories.map((cat, idx) => {
            const IconComponent = cat.icon;

            return (
              <Reveal key={cat.id} delay={idx * 60}>
                <div
                  className={`group flex h-full flex-col justify-between rounded-2xl border p-6 transition-all duration-300 ${
                    cat.isPrimary
                      ? "border-[#8CC0EB] bg-[#FEF9F2]/90 dark:bg-[#172331]/90 shadow-xs hover:shadow-md"
                      : "border-border/80 bg-mist/40 hover:border-[#8CC0EB]/60 hover:bg-mist/70"
                  }`}
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between border-b border-[#8CC0EB]/30 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-xl border border-[#8CC0EB]/60 bg-[#AEE2FF]/40 text-[#172033] dark:text-[#AEE2FF] shadow-2xs">
                          <IconComponent size={18} />
                        </div>
                        <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-foreground uppercase">
                          <T en={cat.title.en} id={cat.title.id} />
                        </h3>
                      </div>
                      {cat.isPrimary && (
                        <span className="rounded-full bg-[#AEE2FF] px-2 py-0.5 font-mono text-[0.55rem] font-bold text-[#172033]">
                          CORE
                        </span>
                      )}
                    </div>

                    {/* Tools Chips List */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cat.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[#8CC0EB]/40 bg-background/80 px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:border-[#8CC0EB] hover:bg-background"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" />
                          {tool}
                        </span>
                      ))}
                    </div>
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
