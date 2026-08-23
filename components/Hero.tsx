"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "6rem",
        paddingBottom: "4rem",
        overflow: "hidden",
        background: "linear-gradient(160deg, #F8FAFC 0%, #EEF2FF 50%, #F1F5F9 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "60vw",
          height: "60vw",
          maxWidth: "700px",
          maxHeight: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,58,138,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="bg-grid" />

      <div className="section-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div className="hero-grid">
          {/* LEFT COLUMN */}
          <div className="hero-content">
            <AnimatedSection>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  background: "var(--color-accent-light)",
                  border: "1px solid rgba(30, 58, 138, 0.15)",
                  borderRadius: "9999px",
                  marginBottom: "2rem",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--color-accent-mid)",
                    boxShadow: "0 0 8px rgba(29,78,216,0.5)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "var(--color-accent)",
                    textTransform: "uppercase",
                  }}
                >
                  Financial Strategy · Clarity · Growth
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1
                style={{
                  fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.5rem",
                  color: "var(--color-text-primary)",
                }}
              >
                ACHIEVE YOUR <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  FINANCIAL GOALS
                </span>{" "}
                <br />
                WITH CONFIDENCE.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  color: "var(--color-text-secondary)",
                  maxWidth: "520px",
                  lineHeight: 1.7,
                  marginBottom: "2.5rem",
                }}
              >
                Strategic financial solutions designed to help individuals and organizations build, manage and grow their financial future.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2.5rem",
                }}
              >
                <Link href="/contact" className="btn-primary">
                  GET STARTED <ArrowRight size={17} />
                </Link>
                <Link href="/services" className="btn-outline">
                  OUR SERVICES
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                {[
                  { value: "30%", label: "Portfolio Growth" },
                  { value: "NISM", label: "Certified" },
                  { value: "100%", label: "Transparent" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.02em" }}>{stat.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN - Dashboard Visual */}
          <div className="hero-visual">
            <AnimatedSection delay={0.3} direction="left">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: "460px",
                }}
              >
                {/* Main Dashboard Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "1.5rem",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 20px 60px rgba(15,30,75,0.12)",
                    overflow: "hidden",
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #1E3A8A, #1D4ED8, #60A5FA)",
                    }}
                  />

                  {/* Top Bar */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginBottom: "0.25rem", fontWeight: 500 }}>Portfolio Overview</div>
                      <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "var(--color-text-primary)", letterSpacing: "-0.03em" }}>₹ --,---,---</div>
                    </div>
                    <div style={{ padding: "0.5rem 1rem", background: "rgba(29,78,216,0.1)", borderRadius: "2rem", color: "var(--color-accent-mid)", fontSize: "0.82rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <TrendingUp size={15} /> +30%
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div style={{ flex: 1, position: "relative", borderBottom: "1px dashed var(--color-border)", marginBottom: "1.5rem" }}>
                    <svg viewBox="0 0 400 150" preserveAspectRatio="none" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                      <defs>
                        <linearGradient id="chartGradBlue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M 0,100 C 50,90 100,120 150,80 C 200,40 250,70 300,30 C 350,-10 400,20 400,20"
                        fill="none"
                        stroke="#1D4ED8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        filter="drop-shadow(0 0 6px rgba(29,78,216,0.4))"
                      />
                      <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        d="M 0,100 C 50,90 100,120 150,80 C 200,40 250,70 300,30 C 350,-10 400,20 400,20 L 400,150 L 0,150 Z"
                        fill="url(#chartGradBlue)"
                      />
                    </svg>
                  </div>

                  {/* Bottom Stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div style={{ background: "var(--color-surface-2)", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--color-border)" }}>
                      <Activity size={16} style={{ color: "var(--color-accent-mid)", marginBottom: "0.4rem" }} />
                      <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", marginBottom: "0.2rem" }}>Risk Metric</div>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text-primary)" }}>Optimized</div>
                    </div>
                    <div style={{ background: "var(--color-surface-2)", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--color-border)" }}>
                      <BarChart3 size={16} style={{ color: "var(--color-accent-mid)", marginBottom: "0.4rem" }} />
                      <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", marginBottom: "0.2rem" }}>Strategy</div>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text-primary)" }}>Long-Term</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "-18px",
                    right: "-18px",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    padding: "0.9rem 1.1rem",
                    borderRadius: "1rem",
                    boxShadow: "0 8px 30px rgba(15,30,75,0.10)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    zIndex: 2,
                  }}
                >
                  <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "var(--color-accent-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ShieldCheck size={15} style={{ color: "var(--color-accent-mid)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>Protection</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text-primary)" }}>Structured</div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        .hero-visual {
          display: none;
        }
        @media (min-width: 768px) {
          .hero-visual {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
