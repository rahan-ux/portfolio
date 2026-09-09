"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <>
      {/* Introduction Section */}
      <section
        id="introduction"
        style={{ padding: "6rem 0", background: "var(--color-surface)", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50vw",
            height: "100%",
            background: "linear-gradient(135deg, transparent 0%, rgba(30,58,138,0.03) 100%)",
            pointerEvents: "none",
          }}
        />
        <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="intro-grid">
            {/* Left side text */}
            <div style={{ maxWidth: "600px" }}>
              <AnimatedSection>
                <span className="section-label">Introduction</span>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.1,
                  }}
                >
                  BUILDING BETTER{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, var(--hero-text-gradient-start), var(--hero-text-gradient-end))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    FINANCIAL FUTURES
                  </span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  FUNDAUX focuses on structured financial strategies, responsible decision-making
                  and long-term value creation.
                </p>
                <div
                  style={{ width: "50px", height: "3px", background: "var(--color-accent-mid)", borderRadius: "2px" }}
                />
              </AnimatedSection>
            </div>

            {/* Right: numbered steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { num: "01", label: "STRATEGY", desc: "Crafted around your unique financial goals." },
                { num: "02", label: "DISCIPLINE", desc: "Consistent execution with structured frameworks." },
                { num: "03", label: "PROGRESS", desc: "Measurable outcomes and transparent reporting." },
              ].map((stat, i) => (
                <AnimatedSection key={stat.num} delay={0.2 + i * 0.1} direction="left">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                      padding: "1.5rem",
                      background: "var(--color-surface-2)",
                      borderRadius: "0.75rem",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "var(--color-accent-light)",
                        lineHeight: 1,
                        background: "var(--color-accent-light)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        minWidth: "3rem",
                      }}
                    >
                      <span style={{ color: "var(--color-border-strong)" }}>{stat.num}</span>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "var(--color-text-primary)",
                          letterSpacing: "0.06em",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {stat.label}
                      </h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        style={{
          padding: "6rem 0",
          background: "var(--color-surface-2)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="section-container">
          <div className="mission-grid">
            {/* Left text */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <AnimatedSection>
                <span className="section-label">Our Mission</span>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    lineHeight: 1.15,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Turning financial goals into{" "}
                  <span style={{ color: "var(--color-accent-mid)" }}>structured action.</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p style={{ fontSize: "1.05rem", color: "var(--color-text-secondary)", lineHeight: 1.8, maxWidth: "480px" }}>
                  To empower individuals and organizations with structured financial strategies
                  that turn financial goals into measurable progress.
                </p>
              </AnimatedSection>
            </div>

            {/* Right: bar chart visual */}
            <div
              style={{
                position: "relative",
                minHeight: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AnimatedSection delay={0.3} direction="left">
                <div style={{ position: "relative", width: "100%", maxWidth: "420px", height: "260px" }}>
                  {/* Background glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      width: "80%",
                      height: "80%",
                      background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)",
                      filter: "blur(20px)",
                    }}
                  />
                  {/* Bars */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      gap: "1rem",
                      padding: "1rem 2rem",
                    }}
                  >
                    {[40, 60, 45, 80, 100].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: `${height}%`, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.12 + 0.2, ease: "easeOut" }}
                        style={{
                          flex: 1,
                          background:
                            i === 4
                              ? "linear-gradient(180deg, var(--color-accent-mid), var(--color-accent))"
                              : "var(--color-accent-light)",
                          border: "1px solid var(--color-border-strong)",
                          borderRadius: "6px 6px 0 0",
                          boxShadow: i === 4 ? "0 0 20px var(--color-accent-glow)" : "none",
                        }}
                      />
                    ))}
                  </div>
                  {/* Trend line */}
                  <svg
                    viewBox="0 0 400 200"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 2,
                      pointerEvents: "none",
                    }}
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                      d="M 50,150 C 100,140 120,100 180,110 C 240,120 280,60 350,40"
                      fill="none"
                      stroke="var(--color-accent-mid)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                    />
                  </svg>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
        }
        @media (min-width: 1024px) {
          .intro-grid {
            grid-template-columns: 1.2fr 0.8fr;
            align-items: center;
          }
        }
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
        }
        @media (min-width: 1024px) {
          .mission-grid {
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
