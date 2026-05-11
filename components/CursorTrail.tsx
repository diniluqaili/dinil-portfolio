"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Hide on mobile — no mouse
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const cursor = cursorRef.current;
    const trailEl = trailRef.current;
    if (!cursor || !trailEl) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Dot follows cursor exactly
      cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onEnterLink = () => {
      cursor.style.width = "36px";
      cursor.style.height = "36px";
      cursor.style.background = "transparent";
      cursor.style.border = "1.5px solid var(--neon)";
      trailEl.style.width = "6px";
      trailEl.style.height = "6px";
    };

    const onLeaveLink = () => {
      cursor.style.width = "8px";
      cursor.style.height = "8px";
      cursor.style.background = "var(--neon)";
      cursor.style.border = "none";
      trailEl.style.width = "32px";
      trailEl.style.height = "32px";
    };

    // Smooth trailing ring using lerp
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12;
      trail.current.y += (pos.current.y - trail.current.y) * 0.12;

      trailEl.style.transform = `translate(${trail.current.x - 16}px, ${trail.current.y - 16}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMove);

    // All clickable elements expand the cursor
    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Small dot — snaps to cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--neon)",
          pointerEvents: "none",
          zIndex: 999999,
          transition: "width 0.2s, height 0.2s, background 0.2s, border 0.2s",
          willChange: "transform",
        }}
      />

      {/* Larger ring — lags behind smoothly */}
      <div
        ref={trailRef}
        className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(200,255,0,0.4)",
          pointerEvents: "none",
          zIndex: 999998,
          transition: "width 0.2s, height 0.2s",
          willChange: "transform",
        }}
      />
    </>
  );
}
