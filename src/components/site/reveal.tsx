import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (el as HTMLElement).style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const T = Tag as unknown as (props: {
    ref: (n: HTMLElement | null) => void;
    className: string;
    children: ReactNode;
  }) => React.JSX.Element;
  return (
    <T
      ref={(n: HTMLElement | null) => {
        ref.current = n;
      }}
      className={`reveal ${className}`}
    >
      {children}
    </T>
  );
}
