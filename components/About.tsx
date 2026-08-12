"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <>
      {/* Introduction Section */}
      <section id="introduction" style={{ padding: "8rem 0", background: "var(--color-bg)", position: "relative", overflow: "hidden" }}>
        <div className="section-container">
          <div className="intro-grid">
            {/* Left side text */}
            <div style={{ maxWidth: "600px" }}>
              <AnimatedSection>
                <span className="section-label">Introduction</span>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--color-text-primary)" }}>
                  BUILDING BETTER <br />
                  <span style={{ color: "var(--color-text-secondary)" }}>FINANCIAL FUTURES</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                  FUNDAUX focuses on structured financial strategies, responsible decision-making and long-term value creation.
                </p>
                <div style={{ width: "60px", height: "2px", background: "var(--color-accent)", borderRadius: "2px" }} />
              </AnimatedSection>
            </div>

            {/* Right side editorial stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { num: "01", label: "STRATEGY" },
                { num: "02", label: "DISCIPLINE" },
                { num: "03", label: "PROGRESS" },
              ].map((stat, i) => (
                <AnimatedSection key={stat.num} delay={0.2 + i * 0.1} direction="left">
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                    <div style={{ fontSize: "3rem", fontWeight: 300, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>
                      {stat.num}
                    </div>
                    <div style={{ paddingTop: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-primary)", letterSpacing: "0.05em" }}>
                        {stat.label}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" style={{ padding: "8rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="section-container">
          <div className="mission-grid">
            {/* Left text */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <AnimatedSection>
                <span className="section-label">Our Mission</span>
                <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                  Turning financial goals into <span style={{ color: "var(--color-accent)" }}>structured action.</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  To empower individuals and organizations with structured financial strategies that turn financial goals into measurable progress.
                </p>
              </AnimatedSection>
            </div>

            {/* Right animated visual */}
            <div style={{ position: "relative", minHeight: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <AnimatedSection delay={0.3} direction="left">
                <div style={{ position: "relative", width: "100%", maxWidth: "450px", height: "300px" }}>
                  {/* Glowing backdrop */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(245, 229, 0, 0.15) 0%, transparent 70%)", filter: "blur(20px)", zIndex: 0 }} />
                  
                  {/* Structured blocks animation */}
                  <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "2rem" }}>
                    {[40, 60, 45, 80, 100].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: `${height}%`, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15 + 0.2, ease: "easeOut" }}
                        style={{
                          width: "12%",
                          background: i === 4 ? "var(--color-accent)" : "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "4px 4px 0 0",
                          boxShadow: i === 4 ? "0 0 20px rgba(245, 229, 0, 0.4)" : "none",
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Floating abstract line */}
                  <svg viewBox="0 0 400 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none" }}>
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                      d="M 50,150 C 100,140 120,100 180,110 C 240,120 280,60 350,40"
                      fill="none"
                      stroke="var(--color-text-primary)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
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
          gap: 4rem;
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
          gap: 4rem;
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
