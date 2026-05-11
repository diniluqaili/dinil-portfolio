"use client";

import { useInView } from "@/lib/useInView";
import { useLang } from "@/context/LangContext";

export default function About() {
  const { t } = useLang();
  const { about } = t;
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className={inView ? "section-visible-left" : "section-hidden"}
      style={{
        padding: "6rem 2.5rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <p
        className={inView ? `section-visible anim-delay-1` : "section-hidden"}
        style={{
          fontSize: "0.65rem",
          color: "var(--neon)",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}
      >
        // 01
      </p>

      {/* Title */}
      <h2
        className={inView ? `section-visible anim-delay-2` : "section-hidden"}
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: "3rem",
        }}
      >
        {about.title}
      </h2>

      {/* Two column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left: bio + location */}
        <div>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.9,
              color: "var(--muted)",
              marginBottom: "1.5rem",
            }}
          >
            {about.bio}
          </p>

          {/* Location card */}
          <div
            style={{
              border: "1px solid var(--edge)",
              padding: "1.25rem 1.5rem",
              background: "var(--surface2)",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                color: "var(--neon)",
                letterSpacing: "0.2em",
                marginBottom: "0.4rem",
              }}
            >
              {about.locLabel}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "0.2rem",
              }}
            >
              Banda Aceh, Indonesia
            </p>
            <p style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
              {about.locNote}
            </p>
          </div>
        </div>

        {/* Right: stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--edge)",
          }}
        >
          {about.stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                padding: "2rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "2.8rem",
                  fontWeight: 900,
                  color: "var(--neon)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "var(--muted)",
                  marginTop: "0.4rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
