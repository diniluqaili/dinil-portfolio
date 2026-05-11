"use client";

import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1.75rem",
        fontSize: "0.65rem",
        color: "var(--muted)",
        borderTop: "1px solid var(--edge)",
        letterSpacing: "0.12em",
      }}
    >
      {lang === "en"
        ? `AETOZED ZERO · ${year} · Built with Next.js + TypeScript · Banda Aceh, Indonesia`
        : `AETOZED ZERO · ${year} · Dibangun dengan Next.js + TypeScript · Banda Aceh, Indonesia`}
    </footer>
  );
}
