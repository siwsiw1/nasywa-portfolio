import { SectionLabel } from "./section-label";
import { T } from "./theme-provider";

const stubs = [
  { n: "05", en: "TOOLKIT", id: "PERKAKAS" },
  { n: "06", en: "PROOF", id: "BUKTI" },
  { n: "07", en: "CONNECT", id: "KONTAK" },
];

export function Footer() {
  return (
    <>
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[0.65rem] tracking-[0.28em] text-muted-foreground">
              UPCOMING CHAPTERS
            </span>
            <span className="font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground">
              IN PROGRESS
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {stubs.map((s) => (
              <div
                id={s.en.toLowerCase()}
                key={s.n}
                className="border-t border-border pt-5"
              >
                <SectionLabel n={s.n} label={s.en} />
                <h3 className="mt-4 font-serif text-2xl font-medium tracking-tight text-foreground/60">
                  <T en={s.en.charAt(0) + s.en.slice(1).toLowerCase()} id={s.id.charAt(0) + s.id.slice(1).toLowerCase()} />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <T en="Coming soon — another field note." id="Segera hadir — catatan lapangan berikutnya." />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center md:px-10">
          <div className="font-mono text-[0.62rem] tracking-[0.28em] text-muted-foreground">
            NASYWA CHONIFAHTUN FIQRIHIYAH · FIELD JOURNAL / 2026
          </div>
          <div className="font-mono text-[0.62rem] tracking-[0.28em] text-muted-foreground">
            <T en="STILL EXPLORING." id="MASIH MENJELAJAH." />
          </div>
        </div>
      </footer>
    </>
  );
}
