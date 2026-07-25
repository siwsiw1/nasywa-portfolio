import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface Ctx {
  theme: Theme;
  toggleTheme: () => void;
  lang: "en";
  toggleLang: () => void;
  isResumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
}

const SiteCtx = createContext<Ctx | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    if (stored === "dark" || stored === "light") setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (typeof window !== "undefined") window.localStorage.setItem("theme", theme);
    document.documentElement.lang = "en";
  }, [theme]);

  return (
    <SiteCtx.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
        lang: "en",
        toggleLang: () => {},
        isResumeOpen,
        openResume: () => setIsResumeOpen(true),
        closeResume: () => setIsResumeOpen(false),
      }}
    >
      {children}
    </SiteCtx.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteCtx);
  if (!ctx) throw new Error("useSite outside provider");
  return ctx;
}

export function T({ en }: { en: string; id?: string }) {
  return <>{en}</>;
}
