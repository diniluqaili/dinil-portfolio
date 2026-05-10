"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language, Translation } from "@/lib/translations";

interface LangContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextType {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
