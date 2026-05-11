"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Animate progress bar from 0 to 100
    const duration = 2200;
    const interval = 16;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const eased = Math.round((1 - Math.pow(1 - current / steps, 3)) * 100);
      setProgress(eased);

      if (current >= steps) {
        clearInterval(timer);
        // Start exit animation
        setTimeout(() => {
          setLeaving(true);
          // Remove from DOM after animation
          setTimeout(() => setVisible(false), 800);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "var(--dark)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: leaving ? 0 : 1,
        transform: leaving ? "translateY(-20px)" : "translateY(0)",
        transition:
          "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(3rem, 10vw, 6rem)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          marginBottom: "3rem",
          opacity: leaving ? 0 : 1,
          transform: leaving ? "scale(0.95)" : "scale(1)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        AZ<span style={{ color: "var(--neon)" }}>_</span>
      </div>

      {/* Progress bar container */}
      <div
        style={{
          width: "clamp(200px, 40vw, 360px)",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "var(--edge)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${progress}%`,
              background: "var(--neon)",
              boxShadow: "0 0 8px var(--neon)",
              transition: "width 0.05s linear",
            }}
          />
        </div>
      </div>

      {/* Progress number + status */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "clamp(200px, 40vw, 360px)",
        }}
      >
        <p
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "0.65rem",
            color: "var(--muted)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {progress < 30 && "Initializing..."}
          {progress >= 30 && progress < 60 && "Loading assets..."}
          {progress >= 60 && progress < 90 && "Building interface..."}
          {progress >= 90 && "Ready."}
        </p>
        <p
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "var(--neon)",
            letterSpacing: "0.05em",
          }}
        >
          {progress}%
        </p>
      </div>

      {/* Bottom tagline */}
      <p
        style={{
          position: "absolute",
          bottom: "2.5rem",
          fontFamily: "Space Mono, monospace",
          fontSize: "0.62rem",
          color: "var(--muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          opacity: leaving ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      >
        Fullstack · AI · IoT
      </p>
    </div>
  );
}
