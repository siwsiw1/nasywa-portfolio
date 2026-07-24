export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[0.7rem] tracking-[0.32em] text-muted-foreground">
        {n} / {label}
      </span>
      <span className="h-px flex-1 max-w-[120px] bg-border" />
    </div>
  );
}
