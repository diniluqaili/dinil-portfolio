"use client";

import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => null,
});

import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  // Cycle through roles every 2.8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % t.hero.roles.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          pointerEvents: "none",
        }}
      />

      {/* 3D Particle field*/}
      <ParticleField />

      {/* Glow orb top right */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,255,0,0.07), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Glow orb bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,255,0,0.04), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 860 }}>
        {/* Greeting */}
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "var(--muted)",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(3.5rem, 11vw, 7.5rem)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            marginBottom: "0.6rem",
          }}
        >
          DINIL
          <br />
          <span style={{ color: "var(--neon)" }}>UQAILI</span>
        </h1>

        {/* Cycling role */}
        <div
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.3rem)",
            color: "var(--muted)",
            marginBottom: "1.5rem",
            minHeight: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <span style={{ color: "var(--neon)" }}>&gt; </span>
          <span
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              display: "inline-block",
            }}
          >
            {t.hero.roles[roleIdx]}
          </span>
          <span
            style={{
              animation: "blink 1s step-end infinite",
              color: "var(--neon)",
            }}
          >
            _
          </span>
        </div>

        {/* Bio */}
        <p
          style={{
            maxWidth: 520,
            fontSize: "0.88rem",
            lineHeight: 1.85,
            color: "var(--muted)",
            marginBottom: "2.5rem",
          }}
        >
          {t.hero.bio}
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "var(--neon)",
              color: "var(--dark)",
              border: "none",
              padding: "0.8rem 2rem",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "Space Mono, monospace",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#DFFF30";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--neon)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t.hero.ctaWork}
          </button>

          <a href="mailto:aetozed@gmail.com" style={{ textDecoration: "none" }}>
            <button
              style={{
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--edge)",
                padding: "0.8rem 2rem",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "Space Mono, monospace",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--neon)";
                e.currentTarget.style.color = "var(--neon)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--edge)";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              {t.hero.ctaContact}
            </button>
          </a>

          {/* ← ADD THIS: CV Download button */}

          <a
            href="/M. Syarafuddinil Uqaili_Resume_2026.pdf"
            download="M. Syarafuddinil Uqaili_Resume_2026.pdf"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                background: "transparent",
                color: "var(--neon)",
                border: "1px solid var(--neon)",
                padding: "0.8rem 2rem",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "Space Mono, monospace",
                transition: "background 0.2s, color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--neon)";
                e.currentTarget.style.color = "var(--dark)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--neon)";
              }}
            >
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.hero.ctaCV}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
