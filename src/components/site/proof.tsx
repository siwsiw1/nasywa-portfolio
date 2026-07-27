import { useEffect, useState } from "react";
import {
  Award,
  Trophy,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Building2,
  FileText,
  Maximize2,
} from "lucide-react";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { T } from "./theme-provider";

type FilterTab = "ALL" | "CERTIFICATIONS" | "ACHIEVEMENTS" | "COMPETITIONS" | "LEARNING";

type ProofItem = {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  category: "CERTIFICATIONS" | "ACHIEVEMENTS" | "COMPETITIONS" | "LEARNING";
  tabCategories: FilterTab[];
  isFeatured?: boolean;
  isOngoing?: boolean;
  statusBadge?: string;
  desc: { en: string; id: string };
  myContribution?: { en: string; id: string };
  certImageUrl?: string;
  verifyUrl?: string;
  techTags?: string[];
};

const proofItems: ProofItem[] = [
  // FEATURED & CERTIFICATIONS
  {
    id: "oracle-ai-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    category: "CERTIFICATIONS",
    tabCategories: ["ALL", "CERTIFICATIONS"],
    isFeatured: true,
    statusBadge: "AI & CLOUD",
    desc: {
      en: "Foundational cloud certification validating core AI concepts, Machine Learning workflows, Deep Learning models, Generative AI, and Oracle Cloud Infrastructure AI services.",
      id: "Sertifikasi cloud tingkat dasar yang memvalidasi konsep dasar AI, alur kerja Machine Learning, model Deep Learning, Generative AI, dan layanan OCI AI.",
    },
    techTags: ["AI Foundations", "Machine Learning", "Generative AI", "OCI Cloud"],
  },
  {
    id: "bnsp-data-scientist",
    title: "Associate Data Scientist — BNSP",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2024",
    category: "CERTIFICATIONS",
    tabCategories: ["ALL", "CERTIFICATIONS"],
    isFeatured: true,
    statusBadge: "NATIONAL CERTIFICATION",
    certImageUrl: "/certificates/bnsp-data-scientist.png",
    desc: {
      en: "National professional certification (No. Reg. TIK 1565 07930 2024) validating competencies in data collection, data preparation, exploratory data analysis, statistical modeling, and data science methodology.",
      id: "Sertifikasi profesi nasional (No. Reg. TIK 1565 07930 2024) yang memvalidasi kompetensi dalam pengumpulan data, preparasi data, analisis data eksploratif, pemodelan statistik, dan metodologi sains data.",
    },
    techTags: ["Data Science", "Python", "Statistical Modeling", "BNSP"],
  },
  {
    id: "hacksphere-kai-2025",
    title: "Hacksphere × KAI Hackathon — Top 5",
    issuer: "PT Kereta Api Indonesia (KAI) & Hacksphere",
    year: "2025",
    category: "ACHIEVEMENTS",
    tabCategories: ["ALL", "ACHIEVEMENTS", "COMPETITIONS"],
    isFeatured: true,
    statusBadge: "TOP 5 HACKATHON",
    desc: {
      en: "Collaborated in an intensive 48-hour hackathon developing an integrated digital service platform for PT Kereta Api Indonesia.",
      id: "Berkolaborasi dalam hackathon 48 jam untuk mengembangkan platform layanan digital terintegrasi untuk PT Kereta Api Indonesia.",
    },
    myContribution: {
      en: "Developed the frontend for the Lost & Found feature and integrated it into the broader application flow.",
      id: "Mengembangkan antarmuka frontend untuk fitur Lost & Found dan mengintegrasikannya ke dalam alur utama aplikasi.",
    },
    techTags: ["Frontend Dev", "Rapid Prototyping", "Team Hackathon"],
  },
  {
    id: "datathon-ui-2026",
    title: "Datathon RISTEK FASILKOM UI",
    issuer: "Faculty of Computer Science, Universitas Indonesia",
    year: "2026",
    category: "COMPETITIONS",
    tabCategories: ["ALL", "COMPETITIONS"],
    isFeatured: true,
    isOngoing: true,
    statusBadge: "ONGOING COMPETITION",
    desc: {
      en: "Participating in a national data science competition involving real-world data analysis, predictive modeling, and scientific paper development.",
      id: "Berpartisipasi dalam kompetisi sains data nasional yang melibatkan analisis data dunia nyata, pemodelan prediktif, dan penyusunan paper ilmiah.",
    },
    techTags: ["Data Science", "Predictive Modeling", "Scientific Paper"],
  },
  {
    id: "bnsp-network-admin",
    title: "Junior Network Administrator — BNSP",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2025",
    category: "CERTIFICATIONS",
    tabCategories: ["ALL", "CERTIFICATIONS"],
    isFeatured: true,
    statusBadge: "NATIONAL CERTIFICATION",
    desc: {
      en: "National certification validating core skills in network configuration, IP addressing, routing fundamentals, network security, and infrastructure troubleshooting.",
      id: "Sertifikasi nasional yang memvalidasi keahlian inti dalam konfigurasi jaringan, pengalamatan IP, fondasi routing, keamanan jaringan, dan troubleshooting infrastruktur.",
    },
    techTags: ["Networking", "IP Addressing", "Routing", "Infrastructure"],
  },
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google",
    year: "2026",
    category: "CERTIFICATIONS",
    tabCategories: ["ALL", "CERTIFICATIONS"],
    isFeatured: true,
    statusBadge: "GOOGLE CREDENTIAL",
    desc: {
      en: "Professional credential covering practical AI applications, prompt engineering techniques, productivity workflows, and responsible AI principles.",
      id: "Kredensial profesional yang mencakup aplikasi AI praktis, teknik prompt engineering, alur kerja produktivitas, dan prinsip AI yang bertanggung jawab.",
    },
    techTags: ["Applied AI", "Prompt Engineering", "AI Productivity"],
  },

  // ADDITIONAL CERTIFICATIONS & CREDENTIALS
  {
    id: "komdigi-ai-engineer",
    title: "AI Engineer for Millennial",
    issuer: "Kementerian Komunikasi dan Digital (Komdigi)",
    category: "CERTIFICATIONS",
    tabCategories: ["ALL", "CERTIFICATIONS", "LEARNING"],
    desc: {
      en: "Technical training program covering AI fundamentals, machine learning algorithms, and intelligent systems development.",
      id: "Program pelatihan teknis yang mencakup fondasi AI, algoritma machine learning, dan pengembangan sistem cerdas.",
    },
    techTags: ["AI Systems", "Machine Learning", "Komdigi"],
  },
  {
    id: "komdigi-data-engineering",
    title: "Fundamental of Data Engineering",
    issuer: "Kementerian Komunikasi dan Digital (Komdigi)",
    category: "CERTIFICATIONS",
    tabCategories: ["ALL", "CERTIFICATIONS", "LEARNING"],
    desc: {
      en: "Specialized course covering data pipeline fundamentals, ETL processes, data storage paradigms, and relational schema design.",
      id: "Pelatihan khusus fondasi pipeline data, proses ETL, paradigma penyimpanan data, dan desain skema relasional.",
    },
    techTags: ["Data Pipelines", "ETL", "Data Storage"],
  },
  {
    id: "link-women-2025",
    title: "Link Women Intensive Bootcamp — Top 200 Participant",
    issuer: "Markoding, LinkedIn & UN Women Indonesia",
    year: "2025",
    category: "LEARNING",
    tabCategories: ["ALL", "LEARNING", "ACHIEVEMENTS"],
    statusBadge: "TOP 200 BOOTCAMP",
    certImageUrl: "/certificates/link-women-bootcamp-2025.png",
    desc: {
      en: "Certificate of completion (No. MARKODING/CERT/LW/2025.XI/0120) for Link Women Intensive Bootcamp focusing on Artificial Intelligence, held by Markoding, LinkedIn & UN Women Indonesia.",
      id: "Sertifikat kelulusan (No. MARKODING/CERT/LW/2025.XI/0120) Link Women Intensive Bootcamp dengan materi Artificial Intelligence oleh Markoding, LinkedIn & UN Women Indonesia.",
    },
    techTags: ["Artificial Intelligence", "Leadership", "UN Women"],
  },
  {
    id: "kaggle-intro-ml",
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    category: "LEARNING",
    tabCategories: ["ALL", "LEARNING"],
    desc: {
      en: "Practical course covering Decision Trees, Random Forests, model validation, and basic machine learning workflows.",
      id: "Kursus praktis Decision Trees, Random Forests, validasi model, dan alur kerja dasar machine learning.",
    },
    techTags: ["Machine Learning", "Scikit-learn", "Kaggle"],
  },
  {
    id: "kaggle-pandas",
    title: "Pandas Data Manipulation",
    issuer: "Kaggle",
    category: "LEARNING",
    tabCategories: ["ALL", "LEARNING"],
    desc: {
      en: "Hands-on data manipulation course focusing on DataFrame indexing, grouping, sorting, reshaping, and data cleaning.",
      id: "Kursus manipulasi data praktis pengindeksan DataFrame, grouping, sorting, dan pembersihan data.",
    },
    techTags: ["Pandas", "Python Data", "Data Wrangling"],
  },
  {
    id: "komdigi-data-analytics",
    title: "Wawasan Karir dalam Bidang Data Analytics",
    issuer: "Kementerian Komunikasi dan Digital (Komdigi)",
    category: "LEARNING",
    tabCategories: ["ALL", "LEARNING"],
    desc: {
      en: "Industry overview course detailing business intelligence, data analytics roles, data-driven decision making, and tools.",
      id: "Gambaran industri seputar business intelligence, peran analis data, pengambilan keputusan berbasis data, dan alat analisis.",
    },
    techTags: ["Data Analytics", "Business Intelligence"],
  },
  {
    id: "ai-verse-us-embassy",
    title: "The AI-Verse Workshop",
    issuer: "AI Ambassador / U.S. Embassy Jakarta",
    category: "LEARNING",
    tabCategories: ["ALL", "LEARNING"],
    desc: {
      en: "Interactive workshop exploring artificial intelligence innovations, ethics, technology policy, and digital literacy.",
      id: "Workshop interaktif eksplorasi inovasi kecerdasan buatan, etika, kebijakan teknologi, dan literasi digital.",
    },
    techTags: ["AI Ethics", "Tech Innovation", "U.S. Embassy"],
  },
];

export function Proof() {
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");
  const [selectedProof, setSelectedProof] = useState<ProofItem | null>(null);
  const [showAllArchive, setShowAllArchive] = useState(false);

  useEffect(() => {
    if (!selectedProof) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedProof(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedProof]);

  const featuredItems = proofItems.filter((item) => item.isFeatured);

  const filteredArchive = proofItems.filter((item) =>
    activeTab === "ALL" ? true : item.tabCategories.includes(activeTab),
  );

  const INITIAL_ARCHIVE_LIMIT = 6;

  const displayedArchive = showAllArchive
    ? filteredArchive
    : filteredArchive.slice(0, INITIAL_ARCHIVE_LIMIT);

  return (
    <section id="proof" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel n="06" label="PROOF OF LEARNING & ACHIEVEMENTS" />
        </Reveal>

        {/* Narrative Intro */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
                Proof of exploration,
                <br />
                <span className="italic text-[#8CC0EB] font-normal">
                  learning, and achievement.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/85 max-w-2xl">
                <T
                  en="A curated evidence archive of certifications, hackathon achievements, competitions, and technical credentials supporting my work in AI, Data, and Software Development."
                  id="Koleksi bukti terkurasi dari sertifikasi, pencapaian hackathon, kompetisi, dan kredensial teknis yang mendukung karya saya di bidang AI, Data, dan Software."
                />
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex items-end">
            <Reveal delay={150}>
              <div className="w-full rounded-2xl border border-[#8CC0EB] bg-[#AEE2FF]/20 dark:bg-[#8CC0EB]/10 p-6 shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-2 font-mono text-[0.62rem] font-bold tracking-[0.24em] text-[#172033] dark:text-[#AEE2FF] uppercase">
                  <Sparkles size={14} className="text-[#8CC0EB]" />
                  EVIDENCE CONNECTIVITY
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center font-mono text-[0.6rem]">
                  <div className="rounded-lg border border-[#8CC0EB]/40 bg-background/80 p-2">
                    <div className="font-bold text-[#172033] dark:text-[#F4F1EA]">PROJECTS</div>
                    <div className="text-[0.55rem] text-muted-foreground mt-0.5">What I Built</div>
                  </div>
                  <div className="rounded-lg border border-[#8CC0EB]/40 bg-background/80 p-2">
                    <div className="font-bold text-[#172033] dark:text-[#F4F1EA]">TOOLKIT</div>
                    <div className="text-[0.55rem] text-muted-foreground mt-0.5">
                      What I Work With
                    </div>
                  </div>
                  <div className="rounded-lg border border-[#8CC0EB] bg-[#AEE2FF]/40 dark:bg-[#8CC0EB]/30 p-2">
                    <div className="font-bold text-[#172033] dark:text-[#F4F1EA]">PROOF</div>
                    <div className="text-[0.55rem] text-[#8CC0EB] font-bold mt-0.5">Evidence</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* FEATURED PROOF HIGHLIGHTS */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <Trophy size={18} className="text-[#8CC0EB]" />
              <h3 className="font-mono text-xs font-bold tracking-[0.28em] text-[#8CC0EB] uppercase">
                FEATURED HIGHLIGHTS & KEY CREDENTIALS
              </h3>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 60}>
                <div
                  onClick={() => setSelectedProof(item)}
                  data-hover="INSPECT"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-[#8CC0EB]/60 bg-[#FEF9F2]/90 dark:bg-[#172331]/90 p-6 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[0.6rem] font-bold">
                      <span className="rounded-full bg-[#AEE2FF]/60 dark:bg-[#8CC0EB]/20 border border-[#8CC0EB]/40 px-2.5 py-0.5 text-[#172033] dark:text-[#F4F1EA]">
                        {item.statusBadge || item.category}
                      </span>
                      {item.isOngoing ? (
                        <span className="flex items-center gap-1 text-[#8CC0EB] font-bold animate-pulse">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8CC0EB]" /> ONGOING
                        </span>
                      ) : (
                        item.year && <span className="text-[#8CC0EB]">{item.year}</span>
                      )}
                    </div>

                    <div className="mt-3 font-mono text-[0.62rem] font-semibold text-[#8CC0EB]">
                      {item.issuer}
                    </div>

                    <h4 className="mt-2 font-serif text-xl font-bold tracking-tight text-foreground group-hover:text-[#8CC0EB] transition-colors">
                      {item.title}
                    </h4>

                    {item.certImageUrl && (
                      <div className="mt-3 flex items-center gap-1.5 font-mono text-[0.58rem] font-bold text-[#172033] dark:text-[#F4F1EA] bg-[#AEE2FF]/40 dark:bg-[#8CC0EB]/20 border border-[#8CC0EB]/40 rounded-lg px-2.5 py-1 w-fit">
                        <FileText size={12} className="text-[#8CC0EB]" /> DOCUMENT ATTACHED
                      </div>
                    )}

                    <p className="mt-3 text-xs leading-relaxed text-foreground/80 line-clamp-3">
                      <T en={item.desc.en} id={item.desc.id} />
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#8CC0EB]/30 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.techTags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#8CC0EB]/30 bg-background/80 px-2 py-0.5 font-mono text-[0.56rem] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#8CC0EB] group-hover:underline flex items-center gap-1">
                      Inspect ↗
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FULL ARCHIVE & FILTER SYSTEM */}
        <div className="mt-24 border-t border-border pt-16">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
              <div className="flex items-center gap-3">
                <Award size={18} className="text-[#8CC0EB]" />
                <h3 className="font-mono text-xs font-bold tracking-[0.28em] text-[#8CC0EB] uppercase">
                  VERIFIED CREDENTIAL ARCHIVE
                </h3>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    "ALL",
                    "CERTIFICATIONS",
                    "ACHIEVEMENTS",
                    "COMPETITIONS",
                    "LEARNING",
                  ] as FilterTab[]
                ).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setShowAllArchive(false);
                    }}
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

          {/* Archive Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedArchive.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 50}>
                <div
                  onClick={() => setSelectedProof(item)}
                  data-hover="INSPECT"
                  className="group flex h-full flex-col justify-between rounded-xl border border-border/80 bg-[#FEF9F2]/70 dark:bg-[#172331]/70 p-6 transition-all duration-300 hover:border-[#8CC0EB] hover:shadow-xs cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[0.6rem] font-semibold text-[#64748B]">
                      <span className="rounded bg-[#AEE2FF]/40 px-2 py-0.5 text-[#172033] dark:text-[#F4F1EA]">
                        {item.category}
                      </span>
                      {item.isOngoing ? (
                        <span className="text-[#8CC0EB] font-bold">ONGOING</span>
                      ) : (
                        item.year && <span className="text-[#8CC0EB]">{item.year}</span>
                      )}
                    </div>

                    <div className="mt-3 font-mono text-[0.6rem] font-semibold text-[#8CC0EB]">
                      {item.issuer}
                    </div>

                    <h4 className="mt-2 font-serif text-lg font-bold tracking-tight text-foreground group-hover:text-[#8CC0EB] transition-colors">
                      {item.title}
                    </h4>

                    {item.certImageUrl && (
                      <div className="mt-2.5 flex items-center gap-1.5 font-mono text-[0.56rem] font-bold text-[#172033] dark:text-[#F4F1EA] bg-[#AEE2FF]/30 dark:bg-[#8CC0EB]/20 border border-[#8CC0EB]/30 rounded-md px-2 py-0.5 w-fit">
                        <FileText size={11} className="text-[#8CC0EB]" /> VERIFIED IMAGE
                      </div>
                    )}

                    <p className="mt-2.5 text-xs leading-relaxed text-foreground/80 line-clamp-2">
                      <T en={item.desc.en} id={item.desc.id} />
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="font-mono text-[0.58rem] text-muted-foreground">
                      Verified Credential
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#8CC0EB]">
                      Inspect ↗
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Expand Archive Button */}
          {filteredArchive.length > INITIAL_ARCHIVE_LIMIT && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAllArchive((prev) => !prev)}
                data-hover={showAllArchive ? "LESS" : "MORE"}
                className="inline-flex items-center gap-2.5 rounded-full border border-[#8CC0EB] bg-[#EAF6FD] dark:bg-[#172331] px-6 py-3 font-mono text-xs font-bold text-[#172033] dark:text-[#F4F1EA] shadow-xs transition-all duration-300 hover:bg-[#AEE2FF] hover:border-[#8CC0EB] hover:shadow-md cursor-pointer"
              >
                {showAllArchive ? (
                  <>
                    SHOW LESS CREDENTIALS <ChevronUp size={15} />
                  </>
                ) : (
                  <>
                    SEE ALL PROOF & CREDENTIALS ({filteredArchive.length}) <ChevronDown size={15} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CREDENTIAL INSPECTION MODAL */}
      {selectedProof && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-[#172033]/60 backdrop-blur-md transition-opacity"
          onClick={() => setSelectedProof(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#FEF9F2] dark:bg-[#101820] p-6 sm:p-8 shadow-2xl border border-[#8CC0EB]/50 select-text"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2 font-mono text-[0.62rem] font-bold tracking-[0.2em] text-[#8CC0EB]">
                <span className="rounded-full bg-[#AEE2FF]/50 dark:bg-[#8CC0EB]/20 px-2.5 py-0.5 text-[#172033] dark:text-[#F4F1EA]">
                  {selectedProof.category}
                </span>
                {selectedProof.year && (
                  <>
                    <span>·</span>
                    <span>{selectedProof.year}</span>
                  </>
                )}
              </div>

              <button
                onClick={() => setSelectedProof(null)}
                data-hover="CLOSE"
                className="grid h-8 w-8 place-items-center rounded-full border border-[#8CC0EB]/50 bg-mist hover:bg-[#AEE2FF]/40 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={15} className="text-[#172033] dark:text-[#F4F1EA]" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center gap-1.5 font-mono text-[0.65rem] font-semibold text-[#8CC0EB]">
                  <Building2 size={13} /> {selectedProof.issuer}
                </div>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {selectedProof.title}
                </h3>
              </div>

              {/* Certificate Image Preview Document Box */}
              {selectedProof.certImageUrl && (
                <div className="rounded-xl border border-[#8CC0EB]/50 bg-[#EAF6FD]/90 dark:bg-[#172331]/90 p-3 shadow-inner">
                  <div className="flex items-center justify-between px-2 pb-2 border-b border-[#8CC0EB]/30 font-mono text-[0.62rem] font-bold text-[#8CC0EB]">
                    <span className="flex items-center gap-1.5">
                      <FileText size={13} /> OFFICIAL CERTIFICATE DOCUMENT
                    </span>
                    <a
                      href={selectedProof.certImageUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-hover="EXPAND"
                      className="inline-flex items-center gap-1 text-[#172033] dark:text-[#AEE2FF] hover:underline"
                    >
                      <Maximize2 size={11} /> Open Full High-Res Image ↗
                    </a>
                  </div>
                  <div className="mt-2 overflow-hidden rounded-lg border border-[#8CC0EB]/30 bg-background/50">
                    <a
                      href={selectedProof.certImageUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-hover="EXPAND"
                      className="block group relative cursor-pointer"
                    >
                      <img
                        src={selectedProof.certImageUrl}
                        alt={selectedProof.title}
                        className="w-full h-auto object-contain max-h-[420px] rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-[#FEF9F2]/90 dark:bg-[#101820]/90 px-4 py-2 font-mono text-xs font-bold text-foreground shadow-md backdrop-blur-xs flex items-center gap-1.5">
                          <Maximize2 size={13} /> View Full-Size Certificate
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-[#8CC0EB]/40 bg-[#EAF6FD]/70 dark:bg-[#172331]/70 p-4">
                <div className="font-mono text-[0.6rem] font-bold tracking-[0.2em] text-[#8CC0EB] uppercase">
                  CREDENTIAL DESCRIPTION & CONTEXT
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90 font-medium">
                  <T en={selectedProof.desc.en} id={selectedProof.desc.id} />
                </p>
              </div>

              {selectedProof.myContribution && (
                <div className="rounded-xl border border-[#8CC0EB]/40 bg-[#AEE2FF]/20 dark:bg-[#8CC0EB]/10 p-4">
                  <div className="flex items-center gap-1.5 font-mono text-[0.6rem] font-bold tracking-[0.2em] text-[#8CC0EB] uppercase">
                    <CheckCircle2 size={13} /> MY CONTRIBUTION & ROLE
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90 font-medium">
                    <T en={selectedProof.myContribution.en} id={selectedProof.myContribution.id} />
                  </p>
                </div>
              )}

              {selectedProof.techTags && selectedProof.techTags.length > 0 && (
                <div className="pt-2">
                  <div className="font-mono text-[0.6rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                    ASSOCIATED COMPETENCIES:
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedProof.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#8CC0EB]/40 bg-background px-3 py-1 font-mono text-xs font-semibold text-foreground shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
              <span className="font-mono text-[0.6rem] text-muted-foreground">
                Verified Field Journal Evidence
              </span>
              {selectedProof.certImageUrl ? (
                <a
                  href={selectedProof.certImageUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-hover="FULLSCREEN"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-2 font-mono text-xs font-bold text-[#172033] hover:bg-[#8CC0EB] transition-colors cursor-pointer"
                >
                  VIEW CERTIFICATE IMAGE <ExternalLink size={13} />
                </a>
              ) : selectedProof.verifyUrl ? (
                <a
                  href={selectedProof.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-hover="VERIFY"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-2 font-mono text-xs font-bold text-[#172033] hover:bg-[#8CC0EB] transition-colors cursor-pointer"
                >
                  VERIFY CREDENTIAL <ExternalLink size={13} />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
