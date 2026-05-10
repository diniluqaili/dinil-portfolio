"use client";

import { useLang } from "@/context/LangContext";

export default function Skills() {
  const { t } = useLang();
  const { skills } = t;

  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2.5rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontSize: "0.65rem",
          color: "var(--neon)",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}
      >
        // 02
      </p>

      {/* Title */}
      <h2
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: "3rem",
        }}
      >
        {skills.title}
      </h2>

      {/* Five column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1px",
          background: "var(--edge)",
        }}
      >
        {skills.categories.map((cat, i) => (
          <div
            key={i}
            style={{
              background: "var(--surface)",
              padding: "1.5rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--surface2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--surface)")
            }
          >
            {/* Category name */}
            <p
              style={{
                fontSize: "0.65rem",
                color: "var(--neon)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--edge)",
              }}
            >
              {cat.name}
            </p>

            {/* Items */}
            {cat.items.map((item, j) => (
              <div
                key={j}
                style={{
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  padding: "0.35rem 0",
                  borderBottom:
                    j < cat.items.length - 1
                      ? "1px solid rgba(28,28,46,0.6)"
                      : "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
