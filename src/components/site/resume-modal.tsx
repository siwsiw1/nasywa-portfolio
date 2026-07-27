import { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { useSite, T } from "./theme-provider";

export function ResumeModal() {
  const { isResumeOpen, closeResume } = useSite();

  useEffect(() => {
    if (!isResumeOpen) return;

    // Lock scroll on body when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Close on Escape key press
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeResume();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isResumeOpen, closeResume]);

  if (!isResumeOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/70 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={closeResume}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative flex flex-col w-full max-w-5xl h-[88vh] bg-background border border-[#8CC0EB]/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#8CC0EB]/30 bg-mist/60">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#8CC0EB]/50 bg-[#AEE2FF]/40 text-[#172033] dark:text-[#F4F1EA]">
              <FileText size={18} />
            </div>
            <div>
              <h3
                id="resume-modal-title"
                className="font-mono text-xs font-bold tracking-wider text-foreground"
              >
                <T en="RÉSUMÉ / CURRICULUM VITAE" id="RESUME / CURRICULUM VITAE" />
              </h3>
              <p className="text-[0.7rem] font-mono text-muted-foreground">
                Nasywa Chonifahtun Fiqrihiyah
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground hover:border-[#8CC0EB] hover:bg-mist transition-colors"
              title="Open in new tab"
            >
              <ExternalLink size={13} />
              <span className="hidden md:inline">
                <T en="Open PDF" id="Buka PDF" />
              </span>
            </a>

            <a
              href="/resume.pdf"
              download="CV_Nasywa_Chonifahtun_Fiqrihiyah.pdf"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#8CC0EB] bg-[#AEE2FF] px-4 py-1.5 text-xs font-semibold text-[#172033] hover:bg-[#8CC0EB] transition-colors shadow-xs"
            >
              <Download size={13} />
              <T en="Download" id="Unduh" />
            </a>

            <button
              onClick={closeResume}
              className="grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-mist hover:border-[#8CC0EB] ml-1 cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Resume PDF display container */}
        <div className="relative flex-1 w-full h-full bg-slate-100 dark:bg-slate-900/60 overflow-hidden">
          <iframe
            src="/resume.pdf#view=FitH"
            className="w-full h-full border-0 bg-white"
            title="Nasywa Chonifahtun Fiqrihiyah Resume"
          />
        </div>
      </div>
    </div>
  );
}
