import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  X,
  Github,
  Cpu,
  Code2,
  Database,
  Bot,
  Layers,
  Sparkles,
  FileText,
  CheckCircle2,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";

type FilterCategory = "ALL" | "AI / ML" | "COMPUTER VISION" | "SOFTWARE" | "ROBOTICS";

type FeaturedProject = {
  id: string;
  note: string;
  domain: string;
  filterCategory: FilterCategory[];
  year: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  paperUrl?: string;
  demoUrl?: string;
  isTeamProject?: boolean;
  problem: string;
  approach: string;
  highlights: string[];
  myContribution: string;
  result: string;
  visualType: "rag" | "robotics" | "backend" | "cv";
};

type SecondaryProject = {
  id: string;
  note: string;
  domain: string;
  filterCategory: FilterCategory[];
  year: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    id: "jejaknusantara",
    note: "FEATURED 01",
    domain: "AI / NLP / RAG",
    filterCategory: ["ALL", "AI / ML"],
    year: "2026",
    title: "JejakNusantara",
    tagline: "RAG-Based Indonesian History Chatbot",
    category: "AI / NLP / RAG",
    description:
      "An educational Retrieval-Augmented Generation chatbot grounded in Indonesian history textbooks. The system explores document preprocessing, chunking, multilingual embeddings, similarity-based retrieval, local LLMs, and model evaluation.",
    stack: ["Python", "RAG", "LLM", "Llama 3", "Qwen", "Ollama", "Embeddings"],
    githubUrl: "https://github.com/siwsiw1",
    isTeamProject: true,
    problem:
      "Indonesian history education often faces challenges in making textbook content interactive while ensuring AI-generated answers remain factually grounded without hallucinating historical events.",
    approach:
      "Designed an end-to-end RAG system that preprocesses textbooks into semantic chunks, generates multilingual vector embeddings, performs similarity-based retrieval, and routes context to local LLMs (Llama 3 & Qwen).",
    highlights: [
      "RAG pipeline strictly grounded in Indonesian history textbooks",
      "Local LLM experimentation using Llama 3 and Qwen via Ollama",
      "Multilingual embeddings & similarity-based vector retrieval",
      "QLoRA / LoRA fine-tuning experimentation for Qwen",
      "Evaluation using ROUGE, precision, recall, F1-score, response time, and human evaluation",
    ],
    myContribution:
      "Collaborated on the RAG system architecture, dataset preprocessing & chunking pipeline, local LLM evaluation metrics, and retrieval accuracy testing.",
    result:
      "Demonstrated significantly higher factual accuracy on Indonesian history queries compared to ungrounded base LLMs, reducing hallucinations in test cases.",
    visualType: "rag",
  },
  {
    id: "trash-robotics",
    note: "FEATURED 02",
    domain: "VISION / ROBOTICS / IOT",
    filterCategory: ["ALL", "COMPUTER VISION", "ROBOTICS"],
    year: "2026",
    title: "Coordinated Trash Collection System",
    tagline: "Autonomous Vision-Guided Robotic Trash Collector",
    category: "Computer Vision / Robotics / IoT",
    description:
      "An autonomous trash collection prototype integrating real-time computer vision, a 4-DOF robotic arm, and a line-following mobile robot.",
    stack: ["Python", "YOLOv8n", "Flask", "Arduino", "Computer Vision", "Robotics"],
    githubUrl: "https://github.com/siwsiw1",
    paperUrl: "#",
    isTeamProject: true,
    problem:
      "Automating physical waste management requires combining real-time visual perception with precise robotic manipulation and mobile autonomous transport.",
    approach:
      "Built a multi-subsystem architecture where a YOLOv8n vision model detects trash, a Flask integration layer communicates coordinates via serial, an Arduino Nano controls a 4-DOF robotic arm for pickup, and an Arduino UNO guides the mobile platform.",
    highlights: [
      "Real-time YOLOv8n object detection and trash classification",
      "4-DOF robotic arm controlled via Arduino Nano servo sequencing",
      "Line-following mobile robot powered by Arduino UNO",
      "Flask web interface as the central system integration layer",
      "Serial communication protocol between CV system and hardware",
      "Autonomous detection, pickup, placement, and transportation workflow",
    ],
    myContribution:
      "Primarily responsible for building and engineering the robotic arm subsystem — including physical construction, servo-based kinematics sequence, Arduino Nano control logic, and serial integration with the vision pipeline. Associated with a formal research paper.",
    result:
      "Successfully demonstrated an autonomous trash detection, pickup, and transportation sequence in physical trials.",
    visualType: "robotics",
  },
  {
    id: "packwise",
    note: "FEATURED 03",
    domain: "AI / DECISION SYSTEMS",
    filterCategory: ["ALL", "AI / ML", "SOFTWARE"],
    year: "2026",
    title: "PackWise AI",
    tagline: "Packaging Decision Support System",
    category: "AI / Decision Support / Backend",
    description:
      "A packaging decision-support system that translates product and packaging variables into structured risk assessments and recommendations.",
    stack: ["Python", "FastAPI", "Supabase", "Rule-Based System"],
    githubUrl: "https://github.com/siwsiw1",
    problem:
      "Evaluating packaging suitability for fragile or sensitive goods requires evaluating multi-variable physical risks through transparent, deterministic domain rules.",
    approach:
      "Developed a rule-based risk assessment engine using Python and FastAPI, translating expert packaging domain knowledge into structured scoring rules backed by Supabase database and authentication services.",
    highlights: [
      "Rule-based risk assessment logic for deterministic packaging evaluation",
      "Domain knowledge translated into structured decision rules",
      "Production-ready FastAPI backend architecture",
      "Supabase authentication & relational data integration",
      "Risk assessment workflow integrated with broader packaging recommendations",
    ],
    myContribution:
      "Primarily developed the rule-based risk assessment component, domain decision rules, backend authentication integration, and API workflow.",
    result:
      "Delivered a transparent, verifiable risk-scoring backend integrated into the broader PackWise recommendation suite.",
    visualType: "backend",
  },
  {
    id: "bisindo",
    note: "FEATURED 04",
    domain: "DEEP LEARNING / ACCESSIBILITY",
    filterCategory: ["ALL", "AI / ML", "COMPUTER VISION", "SOFTWARE"],
    year: "2026",
    title: "BISINDO Sign Language System",
    tagline: "Learning & Recognition Application",
    category: "Deep Learning / Computer Vision / Accessibility",
    description:
      "A web-based learning and recognition system designed to support BISINDO sign language learning through interactive educational content and live camera-based sign recognition.",
    stack: ["Python", "TensorFlow/Keras", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/nadine6126/Sign-language-BISINDO-",
    problem:
      "Lowering the entry barrier for learning Indonesian Sign Language (BISINDO) requires accessible interactive tools with instant visual feedback.",
    approach:
      "Trained a deep learning gesture recognition model with TensorFlow/Keras and deployed it inside a web interface that processes live camera feeds to evaluate user gesture practice.",
    highlights: [
      "Deep learning-based sign gesture recognition",
      "Real-time live camera feed computer vision inference",
      "Interactive learning modules with instant gesture validation",
      "End-to-end AI application bridging machine learning and user experience",
    ],
    myContribution:
      "Designed and built the computer vision inference pipeline, sign recognition model training flow, and interactive user practice interface.",
    result:
      "Created a functional end-to-end accessibility application for interactive sign language recognition.",
    visualType: "cv",
  },
];

const secondaryProjects: SecondaryProject[] = [
  {
    id: "p2c",
    note: "ARCHIVE 01",
    domain: "DATA / STATISTICS",
    filterCategory: ["ALL", "SOFTWARE"],
    year: "2025",
    title: "Pulu-Pulu Calculator (P2C)",
    description:
      "A specialized web calculator turning statistical formulas into interactive, legible computational tools.",
    stack: ["Python", "Flask", "SciPy"],
    githubUrl: "https://github.com/siwsiw1",
  },
  {
    id: "p3k",
    note: "ARCHIVE 02",
    domain: "WEB DEVELOPMENT",
    filterCategory: ["ALL", "SOFTWARE"],
    year: "2025",
    title: "P3K Tutoring Platform",
    description:
      "A responsive tutoring platform front-end prioritizing clarity of educational information above visual clutter.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Alpine.js"],
    githubUrl: "https://github.com/siwsiw1",
  },
  {
    id: "android-todo",
    note: "ARCHIVE 03",
    domain: "MOBILE / ANDROID",
    filterCategory: ["ALL", "SOFTWARE"],
    year: "2025",
    title: "Android To-Do List Application",
    description:
      "A native Android task management application exploring Java, SQLite persistence, and custom adapters.",
    stack: ["Android Studio", "Java", "SQLite"],
    githubUrl: "https://github.com/siwsiw1",
  },
  {
    id: "factory-escape",
    note: "ARCHIVE 04",
    domain: "GAME DEV / 3D",
    filterCategory: ["ALL", "SOFTWARE"],
    year: "2024",
    title: "Factory Escape 3D",
    description:
      "An interactive 3D escape game environment built with Luau scripting, custom 3D models, and spatial mechanics.",
    stack: ["Lua / Luau", "Roblox Studio", "Blender"],
    githubUrl: "https://github.com/siwsiw1",
  },
  {
    id: "gold-analysis",
    note: "ARCHIVE 05",
    domain: "DATA ANALYTICS",
    filterCategory: ["ALL", "AI / ML"],
    year: "2024",
    title: "Gold Price Analysis",
    description:
      "An analytical data project exploring historical gold pricing trends, time-series data, and visualization.",
    stack: ["Python", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/siwsiw1",
  },
];

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("ALL");
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveProject(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const filteredProjects = featuredProjects.filter((p) =>
    selectedFilter === "ALL" ? true : p.filterCategory.includes(selectedFilter),
  );

  const INITIAL_PROJECTS_LIMIT = 3;

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_PROJECTS_LIMIT);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="04" label="CURATED PROJECTS" />
        </Reveal>

        {/* Introduction */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
                Problems explored,
                <br />
                <span className="italic text-[#8CC0EB] font-normal">systems built & tested.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <Reveal delay={120}>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
                I build across AI, machine learning, computer vision, software development, web
                applications, and physical computing. Each project is a reflection of real problems
                explored and practical systems engineered.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Filter Navigation */}
        <Reveal delay={180}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
            <div className="flex items-center gap-2 font-mono text-[0.68rem] font-bold tracking-[0.24em] text-[#8CC0EB]">
              <Filter size={13} />
              FILTER BY DOMAIN:
            </div>

            <div className="flex flex-wrap gap-2">
              {(
                ["ALL", "AI / ML", "COMPUTER VISION", "SOFTWARE", "ROBOTICS"] as FilterCategory[]
              ).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedFilter(cat);
                    setShowAllProjects(false);
                  }}
                  data-hover="SELECT"
                  className={`rounded-full px-4 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
                    selectedFilter === cat
                      ? "border border-[#8CC0EB] bg-[#AEE2FF] text-[#172033] shadow-xs"
                      : "border border-border/80 bg-mist/50 text-foreground/70 hover:border-[#8CC0EB]/60 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="mt-14 space-y-16">
          {displayedProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 60}>
              <div className="group relative rounded-2xl border border-[#8CC0EB]/50 bg-[#FEF9F2]/90 dark:bg-[#172331]/90 p-6 sm:p-8 md:p-10 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-md">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                  {/* Project Info */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 font-mono text-[0.62rem] font-bold tracking-[0.24em]">
                        <span className="rounded-full bg-[#AEE2FF]/50 dark:bg-[#8CC0EB]/20 border border-[#8CC0EB]/40 px-3 py-0.5 text-[#172033] dark:text-[#F4F1EA]">
                          {project.note}
                        </span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-[#8CC0EB]">{project.year}</span>
                      </div>

                      <div className="mt-3 font-mono text-[0.64rem] font-semibold tracking-[0.2em] text-[#8CC0EB]">
                        {project.category}
                      </div>

                      <h3
                        onClick={() => setActiveProject(project)}
                        data-hover="INSPECT"
                        className="mt-3 font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-tight text-foreground cursor-pointer transition-colors hover:text-[#8CC0EB]"
                      >
                        {project.title}
                      </h3>

                      <p className="mt-2 font-serif text-base italic text-foreground/80">
                        {project.tagline}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8 space-y-5 border-t border-[#8CC0EB]/30 pt-5">
                      {/* Individual Contribution Callout */}
                      <div className="rounded-lg border border-[#8CC0EB]/40 bg-[#EAF6FD]/80 dark:bg-[#101820]/80 p-3.5">
                        <div className="flex items-center gap-1.5 font-mono text-[0.6rem] font-bold tracking-[0.2em] text-[#8CC0EB] uppercase">
                          <CheckCircle2 size={12} />
                          My Engineering Contribution
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-foreground/90 font-sans">
                          {project.myContribution}
                        </p>
                      </div>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-md border border-[#8CC0EB]/40 bg-background/90 px-2.5 py-0.5 font-mono text-[0.62rem] font-medium text-foreground/90"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                          onClick={() => setActiveProject(project)}
                          data-hover="OPEN ↗"
                          className="inline-flex items-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-5 py-2.5 font-mono text-xs font-bold text-[#172033] transition-colors hover:bg-[#8CC0EB] cursor-pointer shadow-xs"
                        >
                          INSPECT CASE STUDY <ArrowUpRight size={13} />
                        </button>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            data-hover="GITHUB"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 font-mono text-xs font-semibold text-foreground transition-colors hover:bg-mist"
                          >
                            <Github size={13} /> GITHUB
                          </a>
                        )}
                        {project.paperUrl && (
                          <span className="inline-flex items-center gap-1 font-mono text-[0.62rem] font-medium text-[#8CC0EB] border border-[#8CC0EB]/30 rounded-full px-3 py-1">
                            <FileText size={11} /> Paper Available
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Custom Visual Canvas */}
                  <div className="lg:col-span-7">
                    <div
                      onClick={() => setActiveProject(project)}
                      data-hover="INSPECT"
                      className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#8CC0EB]/60 bg-[#EAF6FD] dark:bg-[#101820] shadow-inner cursor-pointer"
                    >
                      <ProjectVisualCanvas type={project.visualType} title={project.title} />

                      <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
                        <span className="rounded-full border border-[#8CC0EB]/60 bg-[#FEF9F2]/90 dark:bg-[#172331]/90 px-3 py-1 font-mono text-[0.6rem] font-bold tracking-[0.2em] text-[#172033] dark:text-[#F4F1EA] backdrop-blur shadow-xs">
                          INTERACTIVE PREVIEW
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Projects Expand Button */}
        {filteredProjects.length > INITIAL_PROJECTS_LIMIT && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllProjects((prev) => !prev)}
              data-hover={showAllProjects ? "LESS" : "MORE"}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF]/40 dark:bg-[#172331] px-6 py-3 font-mono text-xs font-bold text-[#172033] dark:text-[#F4F1EA] shadow-xs transition-all duration-300 hover:bg-[#AEE2FF] hover:border-[#8CC0EB] hover:shadow-md cursor-pointer"
            >
              {showAllProjects ? (
                <>
                  SHOW LESS PROJECTS <ChevronUp size={15} />
                </>
              ) : (
                <>
                  VIEW ALL PROJECTS ({filteredProjects.length}) <ChevronDown size={15} />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}

{
  /* Custom Technical SVG Visual Canvas Component */
}
function ProjectVisualCanvas({ type, title }: { type: string; title: string }) {
  return (
    <div className="relative h-full w-full select-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EAF6FD] via-[#FEF9F2]/80 to-[#AEE2FF]/30 dark:from-[#172331] dark:to-[#101820]" />

      <svg viewBox="0 0 800 500" className="relative z-10 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id={`grid-${type}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="#8CC0EB"
              strokeWidth="0.5"
              opacity="0.22"
            />
          </pattern>
        </defs>
        <rect width="800" height="500" fill={`url(#grid-${type})`} />

        {/* Top Header Telemetry */}
        <text
          x="24"
          y="36"
          className="fill-[#172033]/70 dark:fill-[#F4F1EA]/70 font-mono text-[10px] font-bold"
          letterSpacing="2"
        >
          SYSTEM_CANVAS :: {title.toUpperCase().replace(/\s+/g, "_")}
        </text>
        <text
          x="630"
          y="36"
          className="fill-[#8CC0EB] font-mono text-[10px] font-bold"
          letterSpacing="1.5"
        >
          STATUS: VERIFIED
        </text>

        {type === "rag" && (
          <g>
            {/* Document Chunking to Vector Embedding Flow */}
            <rect
              x="60"
              y="160"
              width="140"
              height="180"
              rx="8"
              className="fill-[#FEF9F2]/90 dark:fill-[#172331] stroke-[#8CC0EB]"
              strokeWidth="1.5"
            />
            <text
              x="80"
              y="190"
              className="fill-[#8CC0EB] font-mono text-[11px] font-bold"
              letterSpacing="1"
            >
              01_TEXTBOOK
            </text>
            <line
              x1="80"
              y1="210"
              x2="180"
              y2="210"
              stroke="#8CC0EB"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="80"
              y1="230"
              x2="160"
              y2="230"
              stroke="#8CC0EB"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="80"
              y1="250"
              x2="175"
              y2="250"
              stroke="#8CC0EB"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="80"
              y1="270"
              x2="140"
              y2="270"
              stroke="#8CC0EB"
              strokeWidth="1"
              opacity="0.5"
            />
            <text x="80" y="315" className="fill-[#64748B] font-mono text-[9px]">
              CHUNK_SIZE: 512
            </text>

            {/* Flow Arrow */}
            <path d="M 210 250 L 270 250" stroke="#8CC0EB" strokeWidth="2" strokeDasharray="4 4" />
            <polygon points="270,246 278,250 270,254" fill="#8CC0EB" />

            {/* Vector DB */}
            <circle
              cx="340"
              cy="250"
              r="55"
              className="fill-[#AEE2FF]/40 dark:fill-[#8CC0EB]/20 stroke-[#8CC0EB]"
              strokeWidth="2"
            />
            <text
              x="305"
              y="245"
              className="fill-[#172033] dark:text-[#F4F1EA] font-mono text-[11px] font-bold"
            >
              MULTILINGUAL
            </text>
            <text x="312" y="262" className="fill-[#8CC0EB] font-mono text-[10px] font-bold">
              EMBEDDINGS
            </text>

            {/* Flow Arrow */}
            <path d="M 405 250 L 465 250" stroke="#8CC0EB" strokeWidth="2" strokeDasharray="4 4" />
            <polygon points="465,246 473,250 465,254" fill="#8CC0EB" />

            {/* LLM Box */}
            <rect
              x="480"
              y="160"
              width="240"
              height="180"
              rx="8"
              className="fill-[#FEF9F2]/90 dark:fill-[#172331] stroke-[#8CC0EB]"
              strokeWidth="2"
            />
            <rect x="495" y="180" width="210" height="32" rx="4" fill="#AEE2FF" />
            <text x="510" y="200" className="fill-[#172033] font-mono text-[11px] font-bold">
              LLAMA 3 / QWEN INFERENCE
            </text>
            <text x="500" y="245" className="fill-[#64748B] font-mono text-[10px]">
              OLLAMA LOCAL ENVIRONMENT
            </text>
            <text x="500" y="270" className="fill-[#64748B] font-mono text-[10px]">
              QLORA FINE-TUNED WEIGHTS
            </text>
            <text x="500" y="315" className="fill-[#8CC0EB] font-mono text-[10px] font-bold">
              FACTUAL GROUNDING: HIGH
            </text>
          </g>
        )}

        {type === "robotics" && (
          <g>
            {/* YOLOv8 -> Flask -> Arduino Nano -> Arm -> Mobile Robot Flow */}
            <rect
              x="50"
              y="170"
              width="150"
              height="150"
              rx="8"
              className="fill-[#FEF9F2] dark:fill-[#172331] stroke-[#8CC0EB]"
              strokeWidth="2"
            />
            <text x="65" y="200" className="fill-[#8CC0EB] font-mono text-[11px] font-bold">
              YOLOV8N VISION
            </text>
            <text x="65" y="225" className="fill-[#64748B] font-mono text-[9.5px]">
              CAMERA INFERENCE
            </text>
            <text x="65" y="250" className="fill-[#64748B] font-mono text-[9.5px]">
              BOUNDING BOX COORDS
            </text>

            <path d="M 210 245 L 270 245" stroke="#8CC0EB" strokeWidth="2" />
            <text x="215" y="235" className="fill-[#8CC0EB] font-mono text-[8.5px]">
              SERIAL LINK
            </text>

            <rect
              x="280"
              y="170"
              width="160"
              height="150"
              rx="8"
              className="fill-[#AEE2FF]/30 dark:fill-[#8CC0EB]/20 stroke-[#8CC0EB]"
              strokeWidth="2"
            />
            <text
              x="295"
              y="200"
              className="fill-[#172033] dark:fill-[#F4F1EA] font-mono text-[11px] font-bold"
            >
              ARDUINO NANO
            </text>
            <text x="295" y="225" className="fill-[#8CC0EB] font-mono text-[10px] font-bold">
              4-DOF ROBOTIC ARM
            </text>
            <text x="295" y="250" className="fill-[#64748B] font-mono text-[9.5px]">
              SERVO KINEMATICS
            </text>
            <text x="295" y="275" className="fill-[#64748B] font-mono text-[9.5px]">
              PICKUP SEQUENCE
            </text>

            <path d="M 450 245 L 510 245" stroke="#8CC0EB" strokeWidth="2" />

            <rect
              x="520"
              y="170"
              width="220"
              height="150"
              rx="8"
              className="fill-[#FEF9F2] dark:fill-[#172331] stroke-[#8CC0EB]"
              strokeWidth="2"
            />
            <text x="535" y="200" className="fill-[#8CC0EB] font-mono text-[11px] font-bold">
              ARDUINO UNO MOBILE
            </text>
            <text x="535" y="225" className="fill-[#64748B] font-mono text-[9.5px]">
              LINE-FOLLOWING ROBOT
            </text>
            <text x="535" y="250" className="fill-[#64748B] font-mono text-[9.5px]">
              FLASK INTEGRATION LAYER
            </text>
            <text x="535" y="280" className="fill-[#8CC0EB] font-mono text-[10px] font-bold">
              AUTONOMOUS TRANSPORT
            </text>
          </g>
        )}

        {type === "backend" && (
          <g>
            {/* FastAPI + Supabase Rule Engine */}
            <rect
              x="80"
              y="150"
              width="200"
              height="200"
              rx="8"
              className="fill-[#FEF9F2] dark:fill-[#172331] stroke-[#8CC0EB]"
              strokeWidth="2"
            />
            <text x="100" y="185" className="fill-[#8CC0EB] font-mono text-[11px] font-bold">
              PACKAGING INPUTS
            </text>
            <line
              x1="100"
              y1="200"
              x2="260"
              y2="200"
              stroke="#8CC0EB"
              strokeWidth="1"
              opacity="0.4"
            />
            <text x="100" y="225" className="fill-[#64748B] font-mono text-[10px]">
              Product Fragility Index
            </text>
            <text x="100" y="250" className="fill-[#64748B] font-mono text-[10px]">
              Transport Distance
            </text>
            <text x="100" y="275" className="fill-[#64748B] font-mono text-[10px]">
              Material Compatibility
            </text>
            <text x="100" y="300" className="fill-[#64748B] font-mono text-[10px]">
              Environmental Conditions
            </text>

            <path d="M 290 250 L 370 250" stroke="#8CC0EB" strokeWidth="2" strokeDasharray="4 4" />

            <rect
              x="380"
              y="150"
              width="340"
              height="200"
              rx="8"
              className="fill-[#AEE2FF]/30 dark:fill-[#8CC0EB]/20 stroke-[#8CC0EB]"
              strokeWidth="2"
            />
            <rect x="395" y="170" width="310" height="32" rx="4" fill="#AEE2FF" />
            <text x="410" y="191" className="fill-[#172033] font-mono text-[11px] font-bold">
              FASTAPI RULE ENGINE & RISK MODEL
            </text>
            <text x="410" y="230" className="fill-[#64748B] font-mono text-[10px]">
              Domain Risk Rules Assessment
            </text>
            <text x="410" y="255" className="fill-[#64748B] font-mono text-[10px]">
              Supabase Relational Data & Auth
            </text>
            <text x="410" y="280" className="fill-[#64748B] font-mono text-[10px]">
              Deterministic Risk Scoring Output
            </text>
            <text x="410" y="315" className="fill-[#8CC0EB] font-mono text-[11px] font-bold">
              RECOMMENDATION ENGINE: OK
            </text>
          </g>
        )}

        {type === "cv" && (
          <g>
            {/* Computer Vision Skeleton & Landmark Points */}
            <g className="stroke-[#8CC0EB]" fill="none" strokeWidth="2">
              <rect x="260" y="90" width="380" height="330" strokeDasharray="6 4" opacity="0.8" />
              <path d="M 255 110 L 255 85 L 280 85" strokeWidth="3" stroke="#AEE2FF" />
              <path d="M 645 110 L 645 85 L 620 85" strokeWidth="3" stroke="#AEE2FF" />
              <path d="M 255 400 L 255 425 L 280 425" strokeWidth="3" stroke="#AEE2FF" />
              <path d="M 645 400 L 645 425 L 620 425" strokeWidth="3" stroke="#AEE2FF" />
            </g>
            <rect x="270" y="100" width="180" height="26" rx="4" fill="#AEE2FF" />
            <text x="280" y="117" className="fill-[#172033] font-mono text-[10.5px] font-bold">
              BISINDO GESTURE :: 98.4%
            </text>

            <g className="stroke-[#172033] dark:stroke-[#AEE2FF]" fill="none" strokeWidth="2">
              <path d="M 440 370 L 440 300 L 400 240 L 370 180" />
              <path d="M 440 300 L 430 210 L 425 150" />
              <path d="M 440 300 L 470 210 L 475 145" />
              <path d="M 440 300 L 510 230 L 525 175" />
              <path d="M 440 370 L 490 320 L 535 290" />
            </g>

            <g fill="#AEE2FF" stroke="#172033" strokeWidth="1.5">
              <circle cx="440" cy="370" r="5" />
              <circle cx="440" cy="300" r="4" />
              <circle cx="400" cy="240" r="4" />
              <circle cx="370" cy="180" r="6" fill="#8CC0EB" />
              <circle cx="430" cy="210" r="4" />
              <circle cx="425" cy="150" r="6" fill="#8CC0EB" />
              <circle cx="470" cy="210" r="4" />
              <circle cx="475" cy="145" r="6" fill="#8CC0EB" />
              <circle cx="510" cy="230" r="4" />
              <circle cx="525" cy="175" r="6" fill="#8CC0EB" />
              <circle cx="490" cy="320" r="4" />
              <circle cx="535" cy="290" r="6" fill="#8CC0EB" />
            </g>
          </g>
        )}

        {/* Bottom Technical Telemetry */}
        <text
          x="24"
          y="475"
          className="fill-[#172033]/70 dark:fill-[#F4F1EA]/70 font-mono text-[9.5px]"
          letterSpacing="1.8"
        >
          ARCHIVAL NOTE :: CASE STUDY READY · CLICK TO OPEN FULL DOCUMENTATION
        </text>
      </svg>
    </div>
  );
}

{
  /* Rich Case Study Drawer Modal */
}
function CaseStudyModal({ project, onClose }: { project: FeaturedProject; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end bg-[#172033]/60 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="h-full w-full max-w-3xl overflow-y-auto bg-[#FEF9F2] dark:bg-[#101820] shadow-2xl border-l border-[#8CC0EB]/40 select-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-[#FEF9F2]/95 dark:bg-[#101820]/95 px-6 py-4 backdrop-blur-md md:px-10">
          <div className="flex items-center gap-3 font-mono text-[0.62rem] font-bold tracking-[0.24em]">
            <span className="rounded-full bg-[#AEE2FF]/50 dark:bg-[#8CC0EB]/20 px-3 py-0.5 text-[#172033] dark:text-[#F4F1EA]">
              {project.note}
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="text-[#8CC0EB]">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            data-hover="CLOSE"
            className="grid h-9 w-9 place-items-center rounded-full border border-[#8CC0EB]/50 bg-mist hover:bg-[#AEE2FF]/40 transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X size={16} className="text-[#172033] dark:text-[#F4F1EA]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 py-8 md:px-10 md:py-12">
          {/* Header Title */}
          <div>
            <div className="font-mono text-[0.65rem] font-semibold tracking-[0.2em] text-[#8CC0EB]">
              CASE STUDY DOCUMENTATION
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {project.title}
            </h2>
            <p className="mt-2 font-serif text-lg italic text-foreground/80">{project.tagline}</p>
          </div>

          {/* Project Visual Diagram */}
          <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#8CC0EB]/60 bg-[#EAF6FD] dark:bg-[#172331]">
            <ProjectVisualCanvas type={project.visualType} title={project.title} />
          </div>

          {/* Individual Contribution Highlight Card */}
          <div className="mt-8 rounded-xl border border-[#8CC0EB] bg-[#AEE2FF]/25 dark:bg-[#8CC0EB]/15 p-5 shadow-xs">
            <div className="flex items-center gap-2 font-mono text-[0.68rem] font-bold tracking-[0.22em] text-[#172033] dark:text-[#AEE2FF]">
              <Sparkles size={14} className="text-[#8CC0EB]" />
              MY INDIVIDUAL CONTRIBUTION & ROLE
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
              {project.myContribution}
            </p>
          </div>

          {/* Structured Case Study Sections */}
          <div className="mt-10 space-y-8">
            {/* Section 01: Problem / Motivation */}
            <div className="rounded-xl border border-border/80 bg-mist/40 p-6">
              <div className="font-mono text-[0.64rem] font-bold tracking-[0.24em] text-[#8CC0EB]">
                01 / PROBLEM & MOTIVATION
              </div>
              <p className="mt-2 text-base leading-relaxed text-foreground/90">{project.problem}</p>
            </div>

            {/* Section 02: Technical Approach */}
            <div className="rounded-xl border border-border/80 bg-mist/40 p-6">
              <div className="font-mono text-[0.64rem] font-bold tracking-[0.24em] text-[#8CC0EB]">
                02 / TECHNICAL APPROACH & ARCHITECTURE
              </div>
              <p className="mt-2 text-base leading-relaxed text-foreground/90">
                {project.approach}
              </p>

              <div className="mt-4 border-t border-border/50 pt-3">
                <div className="font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted-foreground">
                  System Highlights:
                </div>
                <ul className="mt-2 space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8CC0EB] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 03: Result & Key Outcomes */}
            <div className="rounded-xl border border-border/80 bg-mist/40 p-6">
              <div className="font-mono text-[0.64rem] font-bold tracking-[0.24em] text-[#8CC0EB]">
                03 / KEY OUTCOMES & RESULTS
              </div>
              <p className="mt-2 text-base leading-relaxed text-foreground/90">{project.result}</p>
            </div>

            {/* Section 04: Technologies Used */}
            <div className="rounded-xl border border-border/80 bg-mist/40 p-6">
              <div className="font-mono text-[0.64rem] font-bold tracking-[0.24em] text-[#8CC0EB]">
                04 / TECHNICAL STACK & TOOLS
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[#8CC0EB]/50 bg-background px-3.5 py-1 font-mono text-xs font-semibold text-foreground shadow-2xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-border pt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-hover="GITHUB"
                className="inline-flex items-center gap-2 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-6 py-3 font-mono text-xs font-bold text-[#172033] shadow-xs transition-colors hover:bg-[#8CC0EB]"
              >
                <Github size={16} /> VIEW REPOSITORY ON GITHUB <ArrowUpRight size={14} />
              </a>
            )}

            {project.paperUrl && (
              <a
                href={project.paperUrl}
                data-hover="PAPER"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-mono text-xs font-semibold text-foreground transition-colors hover:bg-mist"
              >
                <FileText size={16} className="text-[#8CC0EB]" /> RESEARCH PAPER{" "}
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
