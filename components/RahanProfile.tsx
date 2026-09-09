"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────────── */
const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "NISM", label: "Certified Analyst" },
  { value: "₹Cr+", label: "Capital Managed" },
];

const CREDENTIALS = [
  {
    icon: "🎓",
    title: "NISM Certified Research Analyst",
    body: "Qualified under the National Institute of Securities Markets — one of India's premier financial regulatory certifications.",
  },
  {
    icon: "📊",
    title: "Derivatives & Options Strategist",
    body: "Specialises in structured derivatives strategies designed to protect capital while generating consistent monthly returns.",
  },
  {
    icon: "🏛️",
    title: "SEBI-Compliant Advisory",
    body: "All strategies and advisory services are conducted in compliance with SEBI regulations, ensuring full transparency and regulatory integrity.",
  },
  {
    icon: "📈",
    title: "Systematic Portfolio Management",
    body: "Applies rule-based, data-driven frameworks to remove emotion from investing and deliver disciplined, measurable outcomes.",
  },
];

const PRINCIPLES = [
  {
    num: "01",
    title: "Clarity Before Execution",
    desc: "Every strategy begins with a crystal-clear understanding of goals, risk appetite, and time horizon — no shortcuts, no assumptions.",
  },
  {
    num: "02",
    title: "Discipline Over Emotion",
    desc: "Markets reward consistency. Rahan's systematic approach eliminates emotional decision-making and enforces rule-based discipline.",
  },
  {
    num: "03",
    title: "Transparency Always",
    desc: "Clients receive complete, honest reporting. No hidden fees, no opaque strategies — just clear communication at every step.",
  },
];

const SOCIAL_LINKS = [
  {
    id: "rahan-linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/rahansanthosh",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "rahan-twitter",
    label: "Twitter / X",
    href: "https://x.com/rahansanthosh",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "rahan-email",
    label: "Email",
    href: "mailto:fundauxin@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function RahanProfile() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        id="rahan-hero"
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #060d24 0%, #0F1E4B 50%, #1E3A8A 100%)",
          padding: "8rem 0 6rem",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "3rem 3rem",
            pointerEvents: "none",
          }}
        />
        {/* Glowing orbs */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "-10%",
            width: "45rem",
            height: "45rem",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "-10%",
            width: "35rem",
            height: "35rem",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div className="section-container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="rahan-hero-grid">
            {/* Left: Text */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(147,197,253,0.9)",
                    padding: "0.3rem 0.9rem",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "9999px",
                    marginBottom: "1.5rem",
                  }}
                >
                  Founder · FUNDAUX
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.5rem",
                }}
              >
                Rahan
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #93C5FD 0%, #60A5FA 50%, #3B82F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Santhosh
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: "1.15rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                  maxWidth: "520px",
                  marginTop: "1.5rem",
                  marginBottom: "2.5rem",
                }}
              >
                Financial Strategist & NISM Certified Analyst. Founder of{" "}
                <span style={{ color: "#93C5FD", fontWeight: 600 }}>FUNDAUX</span> — a structured
                fund management firm helping individuals and organisations achieve their financial goals
                with clarity, discipline, and measurable progress.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
              >
                <Link
                  id="rahan-cta-fundaux"
                  href="/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.8rem 2rem",
                    background: "#1D4ED8",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                    border: "1.5px solid #1D4ED8",
                    transition: "all 0.25s ease",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1e40af";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(29,78,216,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#1D4ED8";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Explore FUNDAUX
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  id="rahan-cta-contact"
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.8rem 2rem",
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                    border: "1.5px solid rgba(255,255,255,0.2)",
                    transition: "all 0.25s ease",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Get in Touch
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}
              >
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.id}
                    id={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.7)",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(29,78,216,0.5)";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "#3B82F6";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right: Photo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <div className="rahan-photo-wrapper">
                {/* Glowing ring behind photo */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-3px",
                    borderRadius: "1.5rem",
                    background: "linear-gradient(135deg, #3B82F6, #1E3A8A, #60A5FA)",
                    zIndex: 0,
                    filter: "blur(1px)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "1.35rem",
                    overflow: "hidden",
                    background: "#0F1E4B",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/founder.jpg"
                    alt="Rahan Santhosh — Founder of FUNDAUX, Financial Strategist"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    bottom: "-1.25rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#1D4ED8",
                    color: "#fff",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    padding: "0.5rem 1.25rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 6px 24px rgba(29,78,216,0.45)",
                    zIndex: 10,
                  }}
                >
                  NISM Certified · Founder
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="rahan-stats-row"
            style={{ marginTop: "5rem" }}
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "1.5rem 2rem",
                  borderRadius: "0.75rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    fontWeight: 800,
                    color: "#93C5FD",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "0.04em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT / BIO ──────────────────────────────────────────────────────── */}
      <section
        id="rahan-about"
        style={{ padding: "6rem 0", background: "var(--color-surface)", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40vw",
            height: "100%",
            background: "linear-gradient(135deg, transparent 0%, rgba(30,58,138,0.03) 100%)",
            pointerEvents: "none",
          }}
        />
        <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="rahan-about-grid">
            <AnimatedSection>
              <span className="section-label">About Rahan</span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.1,
                  marginTop: "0.5rem",
                  marginBottom: "1.75rem",
                }}
              >
                A Financial Strategist
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #1E3A8A, #1D4ED8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Built on Discipline
                </span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "1.05rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
                  Rahan Santhosh is the Founder and Chief Strategist of <strong style={{ color: "var(--color-text-primary)" }}>FUNDAUX</strong>, a structured financial management firm based in India. With over 5 years of hands-on experience in Indian financial markets, he has built a reputation for data-driven strategies that consistently protect capital while generating returns.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
                  Rahan holds an{" "}
                  <strong style={{ color: "var(--color-text-primary)" }}>NISM Certification</strong> and specialises in derivatives, options structuring, and systematic portfolio management. His philosophy is simple: financial progress begins with clarity, discipline, and the right strategy — executed consistently.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
                  Through FUNDAUX, Rahan has helped 500+ individuals and organisations take a structured approach to their financial goals — replacing guesswork with frameworks that produce measurable, transparent results.
                </p>
              </div>

              <blockquote
                style={{
                  marginTop: "2.5rem",
                  paddingLeft: "1.5rem",
                  borderLeft: "3px solid var(--color-accent-mid)",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "var(--color-text-primary)",
                  fontWeight: 500,
                  lineHeight: 1.7,
                }}
              >
                "Financial progress begins with clarity, discipline, and the right strategy."
                <br />
                <span style={{ fontSize: "0.85rem", fontStyle: "normal", color: "var(--color-text-muted)", fontWeight: 400, marginTop: "0.5rem", display: "block" }}>
                  — Rahan Santhosh, Founder of FUNDAUX
                </span>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { label: "Full Name", value: "Rahan Santhosh" },
                  { label: "Role", value: "Founder & Chief Strategist" },
                  { label: "Organisation", value: "FUNDAUX" },
                  { label: "Certification", value: "NISM Certified Research Analyst" },
                  { label: "Specialisation", value: "Derivatives, Options & Portfolio Management" },
                  { label: "Contact", value: "fundauxin@gmail.com" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      background: "var(--color-surface-2)",
                      borderRadius: "0.6rem",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", minWidth: "7rem" }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-text-primary)", textAlign: "right" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────────────────────────────────── */}
      <section
        id="rahan-credentials"
        style={{
          padding: "6rem 0",
          background: "var(--color-surface-2)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="section-container">
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="section-label">Credentials & Expertise</span>
              <h2
                style={{
                  fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.15,
                  marginTop: "0.75rem",
                }}
              >
                Qualifications That{" "}
                <span style={{ color: "var(--color-accent-mid)" }}>Back Every Strategy</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="rahan-creds-grid">
            {CREDENTIALS.map((cred, i) => (
              <AnimatedSection key={cred.title} delay={0.1 * i}>
                <div
                  className="glass-card"
                  style={{ padding: "2rem", height: "100%" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border-strong)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)";
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "0.75rem",
                      background: "var(--color-accent-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {cred.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {cred.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    {cred.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────────── */}
      <section
        id="rahan-philosophy"
        style={{ padding: "6rem 0", background: "var(--color-surface)" }}
      >
        <div className="section-container">
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="section-label">Leadership Philosophy</span>
              <h2
                style={{
                  fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.15,
                  marginTop: "0.75rem",
                }}
              >
                The Principles Behind
                <br />
                <span style={{ color: "var(--color-accent-mid)" }}>Every Decision</span>
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {PRINCIPLES.map((p, i) => (
              <AnimatedSection key={p.num} delay={0.15 * i}>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    padding: "2rem 2.5rem",
                    background: "var(--color-surface-2)",
                    borderRadius: "1rem",
                    border: "1px solid var(--color-border)",
                    alignItems: "flex-start",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border-strong)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(6px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-card)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: "var(--color-border-strong)",
                      lineHeight: 1,
                      minWidth: "3rem",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {p.num}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECT CTA ──────────────────────────────────────────────────────── */}
      <section
        id="rahan-connect"
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, #0F1E4B 0%, #1E3A8A 60%, #1D4ED8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "3rem 3rem",
            pointerEvents: "none",
          }}
        />
        <div className="section-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <AnimatedSection>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                padding: "0.3rem 0.9rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "9999px",
                marginBottom: "1.5rem",
              }}
            >
              Connect
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginTop: "0.5rem",
                marginBottom: "1.25rem",
              }}
            >
              Ready to Start Your
              <br />
              <span style={{ color: "#93C5FD" }}>Financial Journey?</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                maxWidth: "520px",
                margin: "0 auto 2.5rem",
                lineHeight: 1.75,
              }}
            >
              Reach out to Rahan Santhosh directly or explore FUNDAUX to learn how structured strategies can transform your financial future.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <Link
                id="rahan-connect-fundaux"
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 2.25rem",
                  background: "#FFFFFF",
                  color: "#0F1E4B",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  border: "1.5px solid #FFFFFF",
                  transition: "all 0.25s ease",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#EFF6FF";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FFFFFF";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Visit FUNDAUX
              </Link>
              <a
                id="rahan-connect-email"
                href="mailto:fundauxin@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 2.25rem",
                  background: "rgba(255,255,255,0.08)",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  transition: "all 0.25s ease",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Email Rahan
              </a>
            </div>

            {/* Social row in CTA */}
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={`cta-${s.id}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.7)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Responsive Styles ────────────────────────────────────────────────── */}
      <style>{`
        .rahan-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .rahan-hero-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 5rem;
          }
        }

        .rahan-photo-wrapper {
          position: relative;
          width: 100%;
          max-width: 360px;
          margin: 0 auto;
        }

        .rahan-stats-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        @media (min-width: 768px) {
          .rahan-stats-row {
            flex-wrap: nowrap;
          }
        }

        .rahan-about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .rahan-about-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        .rahan-creds-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .rahan-creds-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .rahan-creds-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </>
  );
}
