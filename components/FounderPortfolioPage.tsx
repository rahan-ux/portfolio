"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  Award,
  Target,
  Mail,
  ArrowRight,
  CheckCircle2,
  Building,
  ChevronRight,
  Compass,
  Lock,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const METRICS = [
  { value: "NISM", label: "Series Certified", sub: "Regulatory Compliant" },
  { value: "100%", label: "Capital Focus", sub: "Risk Protection First" },
  { value: "Options", label: "Derivatives Specialist", sub: "Structured Yield" },
  { value: "FUNDAUX", label: "Founder & CEO", sub: "Strategic Leadership" },
];

const METHODOLOGY_STEPS = [
  {
    icon: ShieldCheck,
    title: "1. Capital Preservation Base",
    description:
      "Structuring portfolios around a protected principal core to buffer against tail-risk events and high market volatility.",
  },
  {
    icon: BarChart3,
    title: "2. Quantitative Options Strategy",
    description:
      "Employing mathematical covered-call & hedged options models to generate steady, disciplined cash flow stream.",
  },
  {
    icon: Lock,
    title: "3. Strict Risk Scenarios",
    description:
      "Pre-defining stop-loss limits, delta/gamma exposure thresholds, and stress testing positions under extreme drawdowns.",
  },
  {
    icon: Compass,
    title: "4. Continuous Systemic Audit",
    description:
      "Constantly reviewing market dynamics, rebalancing allocations, and maintaining complete data transparency.",
  },
];

const LEADERSHIP_VALUES = [
  {
    title: "Disciplined Vision",
    description:
      "Focusing on long-term compound growth rather than chasing speculative short-term noise.",
    icon: Lightbulb,
  },
  {
    title: "Complete Transparency",
    description:
      "Building client trust through auditability, clear reporting, and honest risk disclosures.",
    icon: Target,
  },
  {
    title: "Data-Driven Execution",
    description:
      "Removing emotional bias from investment decisions through rigorous quantitative models.",
    icon: TrendingUp,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Upholding NISM standards and institutional governance in every strategic mandate.",
    icon: Award,
  },
];

export default function FounderPortfolioView() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        color: "var(--color-text-primary)",
        fontFamily: "var(--font-inter, 'Inter', sans-serif)",
        overflowX: "hidden",
      }}
    >
      {/* ── Standalone Navigation Bar (Only Name + Get in Touch Button) ── */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled
            ? "rgba(var(--navbar-rgb, 255, 255, 255), 0.97)"
            : "rgba(var(--navbar-rgb, 255, 255, 255), 0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: scrolled ? "var(--shadow-nav)" : "none",
          borderBottom: "1px solid var(--color-border)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="section-container">
          <div
            style={{
              height: "4.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left: Name & Monogram */}
            <a
              href="#overview"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "0.6rem",
                  background: "var(--color-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.04em",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                RS
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  Rahan Santhosh
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "var(--color-accent-mid)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Founder & CEO
                </span>
              </div>
            </a>

            {/* Right: Only Get in Touch CTA */}
            <a
              href="#contact"
              className="btn-primary"
              style={{
                fontSize: "0.88rem",
                padding: "0.55rem 1.4rem",
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.header>

      {/* ── HERO OVERVIEW ── */}
      <section
        id="overview"
        className="page-hero"
        style={{
          paddingTop: "7.5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3.5rem",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left Column: Headline & Intro */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="page-hero-label">Founder & CEO</span>

                <h1
                  style={{
                    fontSize: "clamp(2.4rem, 5vw, 4rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    marginTop: "0.75rem",
                    marginBottom: "1.25rem",
                    color: "#FFFFFF",
                  }}
                >
                  Rahan <span style={{ color: "#93C5FD" }}>Santhosh</span>
                </h1>

                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.75)",
                    maxWidth: "540px",
                    marginBottom: "2.25rem",
                  }}
                >
                  Personal portfolio of Rahan Santhosh — Founder & CEO of FUNDAUX. Pioneering quantitative derivatives management, risk mitigation, and structured financial strategies designed for long-term capital preservation.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="#contact"
                    className="btn-primary"
                    style={{
                      background: "#FFFFFF",
                      color: "var(--color-accent)",
                      borderColor: "#FFFFFF",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    Schedule Strategy Meeting <ArrowRight size={16} />
                  </a>

                  <a
                    href="#methodology"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.6rem",
                      borderRadius: "0.5rem",
                      background: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      color: "#FFFFFF",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "background 0.2s ease",
                    }}
                  >
                    View Strategic Pillars
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Profile Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "360px",
                  borderRadius: "1.25rem",
                  padding: "0.75rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 20px 40px rgba(15, 30, 75, 0.25)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    aspectRatio: "1 / 1",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/founder.jpg"
                    alt="Rahan Santhosh - Founder & CEO"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(15, 30, 75, 0.85) 0%, rgba(15, 30, 75, 0) 65%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.25rem",
                      left: "1.25rem",
                      right: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.25rem 0.7rem",
                        borderRadius: "1rem",
                        background: "rgba(16, 185, 129, 0.2)",
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                        color: "#34D399",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        marginBottom: "0.4rem",
                      }}
                    >
                      <CheckCircle2 size={13} /> Active Founder & Executive
                    </div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        margin: 0,
                      }}
                    >
                      Rahan Santhosh
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "rgba(255,255,255,0.75)",
                        margin: "0.15rem 0 0",
                      }}
                    >
                      Founder & CEO @ FUNDAUX
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KEY METRICS STRIP ── */}
      <section style={{ padding: "3rem 0", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {METRICS.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: "center",
                  padding: "1.25rem",
                  background: "var(--color-surface-2)",
                  borderRadius: "0.75rem",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.85rem",
                    fontWeight: 800,
                    color: "var(--color-accent-mid)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    marginTop: "0.2rem",
                  }}
                >
                  {metric.label}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--color-text-secondary)",
                    marginTop: "0.15rem",
                  }}
                >
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT RAHAN ── */}
      <section
        id="about"
        style={{
          padding: "6rem 0",
          background: "var(--color-bg)",
        }}
      >
        <div className="section-container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem" }}>
            <span className="section-label">Executive Background</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "0.5rem",
              }}
            >
              About Rahan Santhosh
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                marginTop: "0.75rem",
                lineHeight: 1.65,
              }}
            >
              A disciplined mindset built on quantitative analysis, risk control, and transparent leadership.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="about-grid"
          >
            {/* Vision Quote Card */}
            <div
              className="glass-card"
              style={{
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <blockquote
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  color: "var(--color-text-primary)",
                  borderLeft: "4px solid var(--color-accent-mid)",
                  paddingLeft: "1.5rem",
                  margin: "0 0 2rem 0",
                }}
              >
                &ldquo;Sustainable wealth accumulation is never an accident. It requires mathematical discipline, relentless downside protection, and absolute transparency.&rdquo;
              </blockquote>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid var(--color-border)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/founder.jpg"
                    alt="Rahan Santhosh"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Rahan Santhosh
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-accent-mid)", fontWeight: 500 }}>
                    Founder & Chief Executive Officer
                  </div>
                </div>
              </div>
            </div>

            {/* Background Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <Building size={20} color="var(--color-accent-mid)" />
                  Building FUNDAUX
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
                  Rahan founded FUNDAUX with a singular mission: to strip away the opacity and emotional pitfalls of conventional asset management. Under his direction, FUNDAUX blends systematic derivatives strategies with client-first capital governance.
                </p>
              </div>

              <div
                style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <Award size={20} color="var(--color-accent-mid)" />
                  Professional Certifications
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
                  Holding NISM certifications and deep domain knowledge in derivatives, covered options, and equity risk modeling. Rahan ensures that every strategic initiative adheres strictly to Indian regulatory frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY FRAMEWORK ── */}
      <section
        id="methodology"
        style={{
          padding: "6rem 0",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="section-container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem" }}>
            <span className="section-label">Quantitative Framework</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "0.5rem",
              }}
            >
              Investment Methodology
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                marginTop: "0.75rem",
                lineHeight: 1.65,
              }}
            >
              Rahan Santhosh&apos;s 4-step framework for risk-buffered yield generation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {METHODOLOGY_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "0.6rem",
                      background: "var(--color-accent-light)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-accent-mid)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <IconComp size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.65rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP PRINCIPLES ── */}
      <section
        id="leadership"
        style={{
          padding: "6rem 0",
          background: "var(--color-bg)",
        }}
      >
        <div className="section-container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem" }}>
            <span className="section-label">Leadership Principles</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "0.5rem",
              }}
            >
              Core Leadership Values
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                marginTop: "0.75rem",
                lineHeight: 1.65,
              }}
            >
              How Rahan Santhosh guides strategy, culture, and client relationships.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {LEADERSHIP_VALUES.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "2rem",
                    borderRadius: "0.75rem",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "0.5rem",
                        background: "var(--color-accent-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-accent-mid)",
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        margin: 0,
                      }}
                    >
                      {val.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DIRECT CONNECT & CONTACT ── */}
      <section
        id="contact"
        style={{
          padding: "5rem 0",
          background: "linear-gradient(135deg, #0F1E4B 0%, #1E3A8A 100%)",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <div className="section-container">
          <div style={{ maxWidth: "750px", margin: "0 auto" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "1rem",
                padding: "0.3rem 0.9rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "9999px",
              }}
            >
              Direct Connect
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginTop: "0.5rem",
              }}
            >
              Connect with Rahan Santhosh
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: "1.05rem",
                maxWidth: "540px",
                margin: "1rem auto 2.25rem",
                lineHeight: 1.65,
              }}
            >
              Whether you wish to discuss quantitative strategies, explore partnerships, or consult on capital management, reach out directly.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.25rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:fundauxin@gmail.com"
                className="btn-primary"
                style={{
                  background: "#FFFFFF",
                  color: "var(--color-accent)",
                  borderColor: "#FFFFFF",
                  padding: "0.8rem 2rem",
                }}
              >
                <Mail size={18} /> Send Direct Email
              </a>

              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.8rem",
                  borderRadius: "0.5rem",
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                Visit FUNDAUX Contact Page <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "var(--color-text-primary)",
          color: "rgba(255, 255, 255, 0.6)",
          padding: "3rem 0 2rem",
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Monogram Brand */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "0.5rem",
                  background: "#FFFFFF",
                  color: "var(--color-text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                }}
              >
                RS
              </div>
              <div>
                <div style={{ fontWeight: 800, color: "#FFFFFF", fontSize: "1rem" }}>
                  Rahan Santhosh
                </div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.5)" }}>
                  Founder & CEO, FUNDAUX
                </div>
              </div>
            </div>

            <Link
              href="/"
              style={{
                fontSize: "0.85rem",
                color: "#93C5FD",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Back to FUNDAUX Main Site &rarr;
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              paddingTop: "1.5rem",
            }}
          >
            <p style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.4)", margin: 0 }}>
              &copy; 2026 Rahan Santhosh. All rights reserved.
            </p>
            <p style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.3)", margin: 0 }}>
              Disciplined Wealth Management & Capital Protection.
            </p>
          </div>
        </div>
      </footer>

      {/* ── Responsive Grid Styling ── */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1.2fr 0.8fr !important; }
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
