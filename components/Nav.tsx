"use client";

import { useLang } from "@/context/LangContext";

export default function Nav() {
  const { lang, setLang, t } = useLang();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.9rem 2.5rem",
        background: "rgba(8,8,14,0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--edge)",
      }}
    >
      {/* Logo */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "1.1rem",
          fontWeight: 900,
          letterSpacing: "0.1em",
          color: "var(--neon)",
          cursor: "pointer",
        }}
      >
        AZ<span style={{ color: "var(--text)" }}>_</span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {(["about", "skills", "projects", "contact"] as const).map((key) => (
          <button
            key={key}
            onClick={() => scrollTo(key)}
            style={{
              background: "none",
              border: "none",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: "var(--muted)",
              cursor: "pointer",
              textTransform: "uppercase",
              fontFamily: "Space Mono, monospace",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {t.nav[key]}
          </button>
        ))}
      </div>

      {/* Right side: available badge + language toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Pulsing available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.65rem",
            color: "var(--neon)",
            letterSpacing: "0.1em",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--neon)",
              display: "inline-block",
              animation: "pulse2 2s infinite",
            }}
          />
          {t.available}
        </div>

        {/* EN / ID toggle */}
        <div
          style={{
            display: "flex",
            gap: "1px",
            border: "1px solid var(--edge)",
          }}
        >
          {(["en", "id"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                background: lang === l ? "var(--neon)" : "transparent",
                color: lang === l ? "var(--dark)" : "var(--muted)",
                border: "none",
                padding: "0.3rem 0.75rem",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                cursor: "pointer",
                fontFamily: "Space Mono, monospace",
                transition: "all 0.2s",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
