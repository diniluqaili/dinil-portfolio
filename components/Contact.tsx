"use client";

import { useLang } from "@/context/LangContext";

export default function Contact() {
  const { t } = useLang();
  const { contact } = t;

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(200,255,0,0.05), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Section label */}
        <p
          style={{
            fontSize: "0.65rem",
            color: "var(--neon)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          // 04
        </p>

        {/* Title */}
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            marginBottom: "1rem",
          }}
        >
          {contact.title}
          <br />
          <span style={{ color: "var(--neon)" }}>{contact.titleAccent}</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--muted)",
            marginBottom: "3rem",
            letterSpacing: "0.05em",
          }}
        >
          {contact.sub}
        </p>

        {/* Contact links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1px",
            background: "var(--edge)",
            maxWidth: 580,
            margin: "0 auto",
          }}
        >
          <a
            href="mailto:aetozed@gmail.com"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              fontSize: "0.78rem",
              background: "var(--surface)",
              color: "var(--text)",
              padding: "1.25rem 1.5rem",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--surface2)";
              e.currentTarget.style.color = "var(--neon)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--surface)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            <span style={{ color: "var(--neon)" }}>✉</span>
            aetozed@gmail.com
          </a>

          <a
            href="https://github.com/aetozed1"
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              fontSize: "0.78rem",
              background: "var(--surface)",
              color: "var(--text)",
              padding: "1.25rem 1.5rem",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--surface2)";
              e.currentTarget.style.color = "var(--neon)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--surface)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            <span style={{ color: "var(--neon)" }}>◆</span>
            github/aetozed1
          </a>
        </div>
      </div>
    </section>
  );
}
