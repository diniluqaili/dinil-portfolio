"use client";

import { useState } from "react";
import { useInView } from "@/lib/useInView";
import { useLang } from "@/context/LangContext";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLang();
  const { contact } = t;
  const { ref, inView } = useInView();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--edge)",
    color: "var(--text)",
    padding: "0.9rem 1.2rem",
    fontSize: "0.82rem",
    fontFamily: "Space Mono, monospace",
    outline: "none",
    transition: "border-color 0.2s",
    display: "block",
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className={inView ? "section-visible-right" : "section-hidden"}
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

      <div
        style={{
          position: "relative",
          zIndex: 1,
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
            marginBottom: "4rem",
            letterSpacing: "0.05em",
          }}
        >
          {contact.sub}
        </p>

        {/* Two column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: contact links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "var(--edge)",
            }}
          >
            <a
              href="mailto:aetozed@gmail.com"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                fontSize: "0.78rem",
                background: "var(--surface)",
                color: "var(--text)",
                padding: "2rem 1.5rem",
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              aetozed@gmail.com
            </a>

            <a
              href="https://github.com/aetozed1"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                fontSize: "0.78rem",
                background: "var(--surface)",
                color: "var(--text)",
                padding: "2rem 1.5rem",
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              github/aetozed1
            </a>

            <a
              href="https://linkedin.com/in/aetozed"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                fontSize: "0.78rem",
                background: "var(--surface)",
                color: "var(--text)",
                padding: "2rem 1.5rem",
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {contact.linkedin}
            </a>
          </div>

          {/* Right: contact form */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "var(--edge)",
            }}
          >
            {/* Name */}
            <div style={{ background: "var(--surface)", padding: "1.5rem" }}>
              <label
                style={{
                  fontSize: "0.62rem",
                  color: "var(--neon)",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.6rem",
                }}
              >
                {contact.form.name}
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Aetozed Zero"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--neon)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--edge)")}
              />
            </div>

            {/* Email */}
            <div style={{ background: "var(--surface)", padding: "1.5rem" }}>
              <label
                style={{
                  fontSize: "0.62rem",
                  color: "var(--neon)",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.6rem",
                }}
              >
                {contact.form.email}
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@company.com"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--neon)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--edge)")}
              />
            </div>

            {/* Message */}
            <div style={{ background: "var(--surface)", padding: "1.5rem" }}>
              <label
                style={{
                  fontSize: "0.62rem",
                  color: "var(--neon)",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.6rem",
                }}
              >
                {contact.form.message}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--neon)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--edge)")}
              />
            </div>

            {/* Submit */}
            <div style={{ background: "var(--surface)", padding: "1.5rem" }}>
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  background:
                    status === "success" ? "var(--surface2)" : "var(--neon)",
                  color: status === "success" ? "var(--neon)" : "var(--dark)",
                  border:
                    status === "success" ? "1px solid var(--neon)" : "none",
                  padding: "0.9rem 2rem",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontFamily: "Space Mono, monospace",
                  opacity: status === "sending" ? 0.7 : 1,
                  transition: "all 0.2s",
                }}
              >
                {status === "idle" && contact.form.send}
                {status === "sending" && contact.form.sending}
                {status === "success" && contact.form.success}
                {status === "error" && contact.form.error}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
