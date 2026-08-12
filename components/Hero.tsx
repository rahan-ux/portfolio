"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Activity, ShieldCheck } from "lucide-react";
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
      }}
    >
      {/* Background System */}
      <div className="bg-glow" style={{ width: "80vw", height: "80vw", top: "-20%", left: "-10%" }} />
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
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "9999px",
                  marginBottom: "2rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    boxShadow: "0 0 10px var(--color-accent)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  FINANCIAL STRATEGY • CLARITY • GROWTH
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1
                style={{
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.5rem",
                  color: "var(--color-text-primary)",
                }}
              >
                ACHIEVE YOUR <br />
                <span style={{ color: "var(--color-accent)" }}>FINANCIAL GOALS</span> <br />
                WITH CONFIDENCE.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                  color: "var(--color-text-secondary)",
                  maxWidth: "540px",
                  lineHeight: 1.6,
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
                  marginBottom: "2rem",
                }}
              >
                <a href="#contact" className="btn-primary">
                  GET STARTED <ArrowRight size={18} />
                </a>
                <a href="#framework" className="btn-outline">
                  EXPLORE OUR APPROACH
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-muted)",
                  fontWeight: 500,
                }}
              >
                Founder: Rahan Santhosh
              </p>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN - VISUALIZATION */}
          <div className="hero-visual">
            <AnimatedSection delay={0.3} direction="left">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: "450px",
                  perspective: "1000px",
                }}
              >
                {/* Main Dashboard Card */}
                <motion.div
                  initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
                  animate={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(10, 15, 20, 0.6)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "1.5rem",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                      opacity: 0.5,
                    }}
                  />
                  
                  {/* Top Bar */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                      <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>Total Portfolio Value</div>
                      <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-text-primary)" }}>₹ --,---,---</div>
                    </div>
                    <div style={{ padding: "0.5rem 1rem", background: "rgba(245, 229, 0, 0.1)", borderRadius: "2rem", color: "var(--color-accent)", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <TrendingUp size={16} /> + --.-%
                    </div>
                  </div>

                  {/* Abstract Chart Area */}
                  <div style={{ flex: 1, position: "relative", borderBottom: "1px dashed rgba(255,255,255,0.1)", marginBottom: "1.5rem" }}>
                    {/* SVG Chart Line */}
                    <svg viewBox="0 0 400 150" preserveAspectRatio="none" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M 0,100 C 50,90 100,120 150,80 C 200,40 250,70 300,30 C 350,-10 400,20 400,20"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="drop-shadow(0 0 8px rgba(245,229,0,0.5))"
                      />
                      <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        d="M 0,100 C 50,90 100,120 150,80 C 200,40 250,70 300,30 C 350,-10 400,20 400,20 L 400,150 L 0,150 Z"
                        fill="url(#chartGradient)"
                      />
                    </svg>
                  </div>

                  {/* Bottom Stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "1rem" }}>
                      <Activity size={18} style={{ color: "var(--color-text-secondary)", marginBottom: "0.5rem" }} />
                      <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Risk Metric</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>Optimized</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "1rem" }}>
                      <BarChart3 size={18} style={{ color: "var(--color-text-secondary)", marginBottom: "0.5rem" }} />
                      <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Strategy</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>Long-Term</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Element 1 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    background: "rgba(10, 15, 20, 0.9)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "1rem",
                    borderRadius: "1rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    zIndex: 2,
                  }}
                >
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(245, 229, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ShieldCheck size={16} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Protection</div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>Structured</div>
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
