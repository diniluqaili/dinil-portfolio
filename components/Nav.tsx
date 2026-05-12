"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu after clicking
  };

  return (
    <>
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
          WebkitBackdropFilter: "blur(16px)",
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
          DU<span style={{ color: "var(--text)" }}>_</span>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links">
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--neon)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {t.nav[key]}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "1px solid var(--edge)",
              cursor: "pointer",
              padding: "0.3rem 0.6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s",
              color: "var(--text)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--neon)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--edge)")
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              // Sun icon
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              // Moon icon
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
              </svg>
            )}
          </button>
          {/* Available badge — hidden on mobile via CSS */}
          <div
            className="nav-avail"
            style={{ color: "var(--neon)", letterSpacing: "0.1em" }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--neon)",
                display: "inline-block",
                animation: "pulse2 2s infinite",
                marginRight: "0.5rem",
              }}
            />
            {t.available}
          </div>

          {/* Language toggle */}
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

          {/* Hamburger button — only on mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "1px solid var(--edge)",
              cursor: "pointer",
              padding: "0.4rem 0.6rem",
              display: "none", // shown via CSS on mobile
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: menuOpen ? "var(--neon)" : "var(--text)",
                transition: "background 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: menuOpen ? "var(--neon)" : "var(--text)",
                transition: "background 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: menuOpen ? "var(--neon)" : "var(--text)",
                transition: "background 0.2s",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "57px", // height of nav
            left: 0,
            right: 0,
            zIndex: 998,
            background: "rgba(8,8,14,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--edge)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {(["about", "skills", "projects", "contact"] as const).map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--edge)",
                padding: "1.25rem 2.5rem",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                color: "var(--muted)",
                cursor: "pointer",
                textTransform: "uppercase",
                fontFamily: "Space Mono, monospace",
                textAlign: "left",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--neon)";
                e.currentTarget.style.background = "var(--surface)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.background = "none";
              }}
            >
              {t.nav[key]}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
