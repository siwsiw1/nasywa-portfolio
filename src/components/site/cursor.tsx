import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    if (!mq.matches) return;

    document.documentElement.classList.add("cursor-none-all");

    let rx = 0, ry = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      const t = e.target as HTMLElement | null;
      const h = t?.closest("[data-hover]") as HTMLElement | null;
      const val = h?.dataset.hover ?? null;
      setLabel(val);
    };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    const raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-all");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-foreground mix-blend-difference"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[100] flex h-8 w-8 items-center justify-center rounded-full border transition-[width,height,background-color,color] duration-300 ${
          label
            ? "h-[72px] w-[72px] border-transparent bg-foreground text-background"
            : "border-foreground/40 bg-transparent text-transparent"
        }`}
      >
        {label && (
          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase">
            {label === "open" ? "Open ↗" : label}
          </span>
        )}
      </div>
    </>
  );
}
