import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
type Lang = "en" | "id";

interface Ctx {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  toggleLang: () => void;
}

const SiteCtx = createContext<Ctx | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    if (stored === "dark" || stored === "light") setTheme(stored);
    const l = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (l === "en" || l === "id") setLang(l);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (typeof window !== "undefined") window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <SiteCtx.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
        lang,
        toggleLang: () => setLang((l) => (l === "en" ? "id" : "en")),
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

export function T({ en, id }: { en: string; id: string }) {
  const { lang } = useSite();
  return <>{lang === "en" ? en : id}</>;
}
