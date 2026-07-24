export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[0.7rem] font-semibold tracking-[0.32em] text-[#64748B]">
        <span className="text-[#8CC0EB]">{n}</span> / {label}
      </span>
      <span className="h-px flex-1 max-w-[120px] bg-[#8CC0EB]/40" />
    </div>
  );
}
