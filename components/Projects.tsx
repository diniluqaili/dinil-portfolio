"use client";

import { useLang } from "@/context/LangContext";

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: "0.6rem",
        color: "var(--neon)",
        border: "1px solid rgba(200,255,0,0.2)",
        background: "rgba(200,255,0,0.05)",
        padding: "0.2rem 0.6rem",
        letterSpacing: "0.08em",
        marginRight: "0.4rem",
        marginBottom: "0.4rem",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

export default function Projects() {
  const { t } = useLang();
  const items = t.projects.items;

  return (
    <section
      id="projects"
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
        // 03
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
        {t.projects.title}
      </h2>

      <div style={{ display: "grid", gap: "1px", background: "var(--edge)" }}>
        {/* Row 1: Featured EEG card */}
        <div
          style={{
            background: "var(--surface)",
            padding: "2rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3rem",
            alignItems: "start",
            position: "relative",
            overflow: "hidden",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--surface2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--surface)")
          }
        >
          <div>
            <p
              style={{
                fontSize: "0.62rem",
                color: "var(--neon)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              {items[0].category}
            </p>
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.4rem",
                fontWeight: 900,
                marginBottom: "0.75rem",
                lineHeight: 1.1,
              }}
            >
              {items[0].title}
            </h3>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              {items[0].desc}
            </p>
            <div>
              {items[0].tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>

          {/* Architecture code block */}
          {items[0].architecture && (
            <div
              style={{
                background: "rgba(200,255,0,0.04)",
                border: "1px solid rgba(200,255,0,0.12)",
                padding: "1.5rem",
                fontFamily: "Space Mono, monospace",
                fontSize: "0.75rem",
                lineHeight: 1.8,
                color: "var(--muted)",
              }}
            >
              <div style={{ color: "var(--neon)", marginBottom: "0.5rem" }}>
                // Pipeline Architecture
              </div>
              {items[0].architecture.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              {items[0].meta && (
                <>
                  <div
                    style={{
                      color: "var(--neon)",
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    // Metadata
                  </div>
                  {items[0].meta.map((m) => (
                    <div key={m.label}>
                      {m.label}:{" "}
                      <span style={{ color: "var(--text)" }}>{m.value}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        {/* Row 2: Two medium cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--edge)",
          }}
        >
          {[items[1], items[2]].map((project) => (
            <div
              key={project.id}
              style={{
                background: "var(--surface)",
                padding: "2rem 2.5rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--surface2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--surface)")
              }
            >
              <p
                style={{
                  fontSize: "0.62rem",
                  color: "var(--neon)",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                {project.category}
              </p>
              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  marginBottom: "0.75rem",
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                }}
              >
                {project.desc}
              </p>
              <div>
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Row 3: Slim OpenBCI card */}
        <div
          style={{
            background: "var(--surface)",
            padding: "1.75rem 2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--surface2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--surface)")
          }
        >
          <div style={{ flex: "0 0 auto" }}>
            <p
              style={{
                fontSize: "0.62rem",
                color: "var(--neon)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              {items[3].category}
            </p>
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 900,
                lineHeight: 1.1,
              }}
            >
              {items[3].title}
            </h3>
          </div>
          <p
            style={{
              flex: 1,
              minWidth: 200,
              fontSize: "0.82rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {items[3].desc}
          </p>
          <div style={{ flex: "0 0 auto" }}>
            {items[3].tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
