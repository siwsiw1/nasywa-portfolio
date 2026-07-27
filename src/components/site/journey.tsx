import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Trophy,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  Video,
  FileCheck,
} from "lucide-react";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T } from "./theme-provider";

type YearTab = "ALL" | "2024" | "2025" | "2026";

type Milestone = {
  year: "2024" | "2025" | "2026";
  title: { en: string; id: string };
  category: { en: string; id: string };
  highlight?: boolean;
};

const milestonesList: Milestone[] = [
  {
    year: "2024",
    title: {
      en: "Started studying Informatics (AI Concentration) at President University",
      id: "Memulai studi Informatika (Konsentrasi AI) di President University",
    },
    category: { en: "Academic Foundation", id: "Fondasi Akademik" },
    highlight: true,
  },
  {
    year: "2024",
    title: {
      en: "Awarded Jababeka Scholarship — 2nd Rank Awardee",
      id: "Menerima Beasiswa Jababeka — Awardee Peringkat 2",
    },
    category: { en: "Academic Merit", id: "Prestasi Akademik" },
    highlight: true,
  },
  {
    year: "2025",
    title: {
      en: "Gained professional web dev & cross-functional experience at Setsail BizAccel",
      id: "Mendapatkan pengalaman web dev & lintas fungsi di Setsail BizAccel",
    },
    category: { en: "Professional Work", id: "Pengalaman Kerja" },
  },
  {
    year: "2025",
    title: {
      en: "Worked in Talent Acquisition at President University ICC (900+ resumes verified)",
      id: "Bekerja di Talent Acquisition ICC President University (900+ resume diverifikasi)",
    },
    category: { en: "Professional Work", id: "Pengalaman Kerja" },
    highlight: true,
  },
  {
    year: "2025",
    title: {
      en: "Reached Top 5 in Hacksphere × KAI Hackathon",
      id: "Meraih Top 5 di Hacksphere × KAI Hackathon",
    },
    category: { en: "Competition", id: "Kompetisi" },
    highlight: true,
  },
  {
    year: "2025",
    title: {
      en: "Selected as Top 200 participant in Link Women Intensive Bootcamp",
      id: "Terpilih sebagai Peserta Top 200 di Link Women Intensive Bootcamp",
    },
    category: { en: "Bootcamp & Leadership", id: "Bootcamp & Kepemimpinan" },
  },
  {
    year: "2026",
    title: {
      en: "Participating in Datathon by Faculty of Computer Science, Universitas Indonesia",
      id: "Berpartisipasi dalam Datathon Fasilkom Universitas Indonesia",
    },
    category: { en: "Data Competition", id: "Kompetisi Data" },
    highlight: true,
  },
  {
    year: "2026",
    title: {
      en: "Building applied systems across AI, RAG, Data, and Backend engineering",
      id: "Membangun sistem terapan di bidang AI, RAG, Data, dan Backend engineering",
    },
    category: { en: "Active Technical Focus", id: "Fokus Teknikal Aktif" },
    highlight: true,
  },
];

export function Journey() {
  const [activeTab, setActiveTab] = useState<YearTab>("ALL");

  const filteredMilestones = milestonesList.filter(
    (m) => activeTab === "ALL" || m.year === activeTab,
  );

  return (
    <section id="journey" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="03" label="JOURNEY & EVOLUTION" />
        </Reveal>

        {/* Hero Narrative Section */}
        <div className="mt-10 max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
              How I got here —
              <br />
              <span className="italic text-[#8CC0EB] font-normal">and where I am going next.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/85">
              <T
                en="My journey is an evolving progression from exploring technical foundations, engineering software, managing data, gaining professional experience, and discovering my long-term direction."
                id="Perjalanan saya adalah perkembangan dinamis dari mengeksplorasi fondasi teknis, merancang perangkat lunak, mengolah data, mendapatkan pengalaman profesional, hingga menemukan arah tujuan jangka panjang."
              />
            </p>
          </Reveal>
        </div>

        {/* LAYER A: EDUCATION */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <GraduationCap size={20} className="text-[#8CC0EB]" />
              <h3 className="font-mono text-xs font-bold tracking-[0.28em] text-[#8CC0EB] uppercase">
                ACADEMIC ANCHOR & EDUCATION
              </h3>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 relative overflow-hidden rounded-2xl border border-[#8CC0EB]/60 bg-[#FEF9F2]/90 dark:bg-[#172331]/90 p-6 sm:p-8 md:p-10 shadow-sm backdrop-blur-sm transition-all hover:border-[#8CC0EB]">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Left Education Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-[0.64rem] font-bold tracking-[0.24em]">
                    <span className="rounded-full bg-[#AEE2FF]/60 dark:bg-[#8CC0EB]/20 border border-[#8CC0EB]/50 px-3 py-1 text-[#172033] dark:text-[#F4F1EA]">
                      BACHELOR OF COMPUTER SCIENCE
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-[#8CC0EB]">INFORMATICS</span>
                  </div>

                  <h4 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    President University
                  </h4>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-foreground/80 font-mono">
                    <span className="flex items-center gap-1.5 text-[#8CC0EB]">
                      <Sparkles size={14} /> Artificial Intelligence Concentration
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar size={14} /> Sept 2024 – Present
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin size={14} /> Cikarang, Indonesia
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/80 pt-2 max-w-2xl">
                    <T
                      en="Building a strong theoretical foundation in computer science and artificial intelligence while actively translating coursework into applied software projects, data systems, and real-world tools."
                      id="Membangun fondasi teori yang kuat dalam ilmu komputer dan kecerdasan buatan sambil secara aktif menerjemahkan perkuliahan menjadi proyek perangkat lunak terapan, sistem data, dan aplikasi dunia nyata."
                    />
                  </p>
                </div>

                {/* Right Academic Metrics Box */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-4 border-t lg:border-t-0 lg:border-l border-[#8CC0EB]/30 pt-6 lg:pt-0 lg:pl-8">
                  {/* GPA Prominent Stat Box */}
                  <div className="rounded-xl border border-[#8CC0EB] bg-[#AEE2FF]/30 dark:bg-[#8CC0EB]/20 p-5 shadow-xs">
                    <div className="font-mono text-[0.62rem] font-bold tracking-[0.24em] text-[#172033] dark:text-[#AEE2FF] uppercase">
                      ACADEMIC MILESTONE :: GPA
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#172033] dark:text-[#F4F1EA]">
                        3.78
                      </span>
                      <span className="font-mono text-sm font-semibold text-muted-foreground">
                        / 4.00
                      </span>
                    </div>
                    <div className="mt-1 font-mono text-[0.65rem] font-semibold text-[#8CC0EB]">
                      High Academic Standing
                    </div>
                  </div>

                  {/* Scholarship Badge */}
                  <div className="rounded-xl border border-border/80 bg-background/90 p-4">
                    <div className="flex items-center gap-2 font-mono text-[0.62rem] font-bold tracking-[0.2em] text-[#8CC0EB]">
                      <Award size={14} className="text-[#8CC0EB]" />
                      MERIT SCHOLARSHIP
                    </div>
                    <div className="mt-1 text-xs sm:text-sm font-bold text-foreground">
                      Jababeka Scholarship
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground font-mono">
                      2nd Rank Awardee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* LAYER B: PROFESSIONAL EXPERIENCE */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <Briefcase size={20} className="text-[#8CC0EB]" />
                <h3 className="font-mono text-xs font-bold tracking-[0.28em] text-[#8CC0EB] uppercase">
                  PROFESSIONAL EXPERIENCE
                </h3>
              </div>
              <span className="font-mono text-[0.62rem] text-muted-foreground uppercase tracking-widest hidden sm:inline">
                Real-World Contribution
              </span>
            </div>
          </Reveal>

          <div className="mt-8 space-y-8">
            {/* Experience Item 1: Internship & Career Center (ICC) */}
            <Reveal delay={100}>
              <div className="group rounded-2xl border border-[#8CC0EB]/50 bg-[#FEF9F2]/90 dark:bg-[#172331]/90 p-6 sm:p-8 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.62rem] font-bold tracking-[0.22em] text-[#8CC0EB]">
                      <span>INTERNSHIP & CAREER CENTER (ICC)</span>
                      <span>·</span>
                      <span className="text-muted-foreground">PRESIDENT UNIVERSITY</span>
                    </div>
                    <h4 className="mt-2 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      Talent Acquisition
                    </h4>
                  </div>
                  <div className="rounded-full border border-[#8CC0EB]/40 bg-background px-4 py-1.5 font-mono text-xs font-semibold text-foreground/80 shadow-2xs">
                    Nov 2025 – Dec 2025
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-8 space-y-3">
                    <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
                      <T
                        en="Worked with the Talent Acquisition team at the Internship & Career Center, evaluating student career profiles, validating academic career data, and streamlining career readiness operations."
                        id="Bekerja bersama tim Talent Acquisition di Internship & Career Center, mengevaluasi profil karir mahasiswa, memvalidasi data karir akademik, dan mengoptimalkan operasional kesiapan karir."
                      />
                    </p>
                    <ul className="space-y-2 pt-1 text-xs sm:text-sm text-foreground/80">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-[#8CC0EB] shrink-0 mt-0.5" />
                        <span>
                          Reviewed and verified <strong>900+ student resumes</strong> through the
                          President University Information System.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-[#8CC0EB] shrink-0 mt-0.5" />
                        <span>
                          Collaborated with the Talent Acquisition team to evaluate student career
                          profiles and support career-readiness data analytics.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Callout Metric Box */}
                  <div className="lg:col-span-4 flex flex-col justify-center rounded-xl border border-[#8CC0EB]/40 bg-[#EAF6FD]/80 dark:bg-[#101820]/80 p-5">
                    <div className="flex items-center gap-2 font-mono text-[0.6rem] font-bold tracking-[0.2em] text-[#8CC0EB] uppercase">
                      <FileCheck size={14} /> IMPACT METRIC
                    </div>
                    <div className="mt-2 font-serif text-3xl font-bold text-foreground">900+</div>
                    <div className="mt-1 text-xs text-foreground/80 font-sans">
                      Student Resumes Reviewed & Verified via University Info System
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Experience Item 2: Setsail BizAccel */}
            <Reveal delay={150}>
              <div className="group rounded-2xl border border-[#8CC0EB]/50 bg-[#FEF9F2]/90 dark:bg-[#172331]/90 p-6 sm:p-8 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.62rem] font-bold tracking-[0.22em] text-[#8CC0EB]">
                      <span>SETSAIL BIZACCEL</span>
                      <span>·</span>
                      <span className="text-muted-foreground">INCUBATOR & ACCELERATOR</span>
                    </div>
                    <h4 className="mt-2 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      Web Developer
                    </h4>
                  </div>
                  <div className="rounded-full border border-[#8CC0EB]/40 bg-background px-4 py-1.5 font-mono text-xs font-semibold text-foreground/80 shadow-2xs">
                    Oct 2024 – May 2025
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
                    <T
                      en="Early professional experience in web development and cross-functional operations inside an active university business incubator."
                      id="Pengalaman profesional awal dalam pengembangan web dan operasional lintas fungsi di dalam inkubator bisnis universitas."
                    />
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-foreground/80">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#8CC0EB] shrink-0 mt-0.5" />
                      <span>
                        Maintained and enhanced the Setsail BizAccel website using ZOHO, Tailwind
                        CSS, and JavaScript.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#8CC0EB] shrink-0 mt-0.5" />
                      <span>
                        Collaborated across web development, multimedia, event operations, and
                        documentation functions.
                      </span>
                    </li>
                  </ul>

                  {/* Visual Cross-Functional Progression Flow */}
                  <div className="mt-6 rounded-xl border border-[#8CC0EB]/40 bg-[#EAF6FD]/70 dark:bg-[#101820]/70 p-5">
                    <div className="font-mono text-[0.6rem] font-bold tracking-[0.24em] text-[#8CC0EB] uppercase">
                      CROSS-FUNCTIONAL SKILL EVOLUTION AT SETSAIL:
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[
                        { step: "01", title: "Web Development", tech: "ZOHO · Tailwind · JS" },
                        { step: "02", title: "Multimedia", tech: "Visual & Content Assets" },
                        { step: "03", title: "Event Operations", tech: "Operational Support" },
                        { step: "04", title: "Documentation", tech: "Process & Reporting" },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="relative rounded-lg border border-[#8CC0EB]/30 bg-background/80 p-3"
                        >
                          <div className="font-mono text-[0.58rem] font-bold text-[#8CC0EB]">
                            {item.step}
                          </div>
                          <div className="mt-1 font-sans text-xs font-bold text-foreground">
                            {item.title}
                          </div>
                          <div className="mt-0.5 font-mono text-[0.56rem] text-muted-foreground">
                            {item.tech}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* LAYER C: ORGANIZATIONS & ACTIVITIES (Secondary Visual Layer) */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <Users size={20} className="text-[#8CC0EB]" />
                <h3 className="font-mono text-xs font-bold tracking-[0.28em] text-[#8CC0EB] uppercase">
                  COMMUNITY, LEADERSHIP & IMPACT
                </h3>
              </div>
              <span className="font-mono text-[0.62rem] text-muted-foreground uppercase tracking-widest hidden sm:inline">
                Supporting Experiences
              </span>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Activity 1 */}
            <Reveal delay={100}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border/80 bg-[#FEF9F2]/70 dark:bg-[#172331]/70 p-6 transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-xs">
                <div>
                  <div className="flex items-center justify-between font-mono text-[0.6rem] font-bold tracking-[0.2em] text-[#8CC0EB]">
                    <span>COMMUNITY WORKSHOP</span>
                    <span className="text-muted-foreground">2025</span>
                  </div>
                  <h4 className="mt-3 font-serif text-xl font-bold tracking-tight text-foreground">
                    Social Impact Experience
                  </h4>
                  <div className="mt-1 font-mono text-[0.62rem] font-semibold text-[#8CC0EB]">
                    Role: Facilitator
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                    Contributed to community workshops focused on English communication, resume
                    building, and job interview readiness for aspiring talent.
                  </p>
                </div>
                <div className="mt-6 border-t border-border/50 pt-3 flex items-center gap-1.5 font-mono text-[0.6rem] text-muted-foreground">
                  <Sparkles size={12} className="text-[#8CC0EB]" />
                  <span>Resume & Career Workshops</span>
                </div>
              </div>
            </Reveal>

            {/* Activity 2 */}
            <Reveal delay={150}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border/80 bg-[#FEF9F2]/70 dark:bg-[#172331]/70 p-6 transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-xs">
                <div>
                  <div className="flex items-center justify-between font-mono text-[0.6rem] font-bold tracking-[0.2em] text-[#8CC0EB]">
                    <span>STUDENT ORIENTATION</span>
                    <span className="text-muted-foreground">2025</span>
                  </div>
                  <h4 className="mt-3 font-serif text-xl font-bold tracking-tight text-foreground">
                    Pre-University Orientation
                  </h4>
                  <div className="mt-1 font-mono text-[0.62rem] font-semibold text-[#8CC0EB]">
                    Role: Facilitator
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                    Guided 200+ freshmen students in building modern digital resumes and optimizing
                    their professional LinkedIn profiles.
                  </p>
                </div>
                <div className="mt-6 border-t border-border/50 pt-3 flex items-center gap-1.5 font-mono text-[0.6rem] text-muted-foreground">
                  <Users size={12} className="text-[#8CC0EB]" />
                  <span>Mentored 200+ Freshmen</span>
                </div>
              </div>
            </Reveal>

            {/* Activity 3 */}
            <Reveal delay={200}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border/80 bg-[#FEF9F2]/70 dark:bg-[#172331]/70 p-6 transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-xs">
                <div>
                  <div className="flex items-center justify-between font-mono text-[0.6rem] font-bold tracking-[0.2em] text-[#8CC0EB]">
                    <span>YOUTH EVENT</span>
                    <span className="text-muted-foreground">2025</span>
                  </div>
                  <h4 className="mt-3 font-serif text-xl font-bold tracking-tight text-foreground">
                    Lens of Life: Record Your Moments
                  </h4>
                  <div className="mt-1 font-mono text-[0.62rem] font-semibold text-[#8CC0EB]">
                    Role: PIC / Event Organizer
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                    Led an educational creative workshop focused on video production and editing
                    using CapCut and Canva for young participants.
                  </p>
                </div>
                <div className="mt-6 border-t border-border/50 pt-3 flex items-center gap-1.5 font-mono text-[0.6rem] text-muted-foreground">
                  <Video size={12} className="text-[#8CC0EB]" />
                  <span>Media & Creative Workshop</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* LAYER D: MILESTONES & TIMELINE NODES */}
        <div className="mt-24">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <Trophy size={20} className="text-[#8CC0EB]" />
                <h3 className="font-mono text-xs font-bold tracking-[0.28em] text-[#8CC0EB] uppercase">
                  MILESTONES & RECOGNITION
                </h3>
              </div>

              {/* Interactive Year Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {(["ALL", "2024", "2025", "2026"] as YearTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    data-hover="FILTER"
                    className={`rounded-full px-3.5 py-1 font-mono text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === tab
                        ? "border border-[#8CC0EB] bg-[#AEE2FF] text-[#172033] shadow-xs"
                        : "border border-border/80 bg-mist/50 text-foreground/70 hover:border-[#8CC0EB]/60 hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Timeline Nodes Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredMilestones.map((m, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-xl p-5 transition-all duration-300 ${
                    m.highlight
                      ? "border border-[#8CC0EB] bg-[#FEF9F2] dark:bg-[#172331] shadow-xs hover:shadow-md"
                      : "border border-border/80 bg-mist/40 hover:border-[#8CC0EB]/60"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[0.62rem] font-bold">
                      <span className="rounded-full bg-[#AEE2FF]/60 dark:bg-[#8CC0EB]/20 border border-[#8CC0EB]/40 px-2.5 py-0.5 text-[#172033] dark:text-[#F4F1EA]">
                        {m.year}
                      </span>
                      <span className="text-[#8CC0EB] text-[0.58rem] tracking-wider uppercase">
                        <T en={m.category.en} id={m.category.id} />
                      </span>
                    </div>

                    <p className="mt-3.5 text-xs sm:text-sm font-semibold leading-relaxed text-foreground">
                      <T en={m.title.en} id={m.title.id} />
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                    <span className="font-mono text-[0.58rem] text-muted-foreground">
                      Milestone Node
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
