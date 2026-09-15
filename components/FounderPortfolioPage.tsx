"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  Award,
  Target,
  Mail,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  FileText,
  MapPin,
  Building,
  ChevronRight,
  Compass,
  Lock,
  BarChart3,
  Lightbulb,
} from "lucide-react";


const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "About Rahan", href: "#about" },
  { label: "Methodology", href: "#methodology" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const METRICS = [
  { value: "NISM", label: "Series Certified", sub: "Regulatory Compliant" },
  { value: "100%", label: "Capital Focus", sub: "Risk Protection First" },
  { value: "Option", label: "Derivatives Specialist", sub: "Structured Yield" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#090D16",
        color: "#F1F5F9",
        fontFamily: "var(--font-inter, 'Inter', sans-serif)",
        overflowX: "hidden",
      }}
    >
      {/* ── Standalone Navigation Bar ── */}
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
            ? "rgba(9, 13, 22, 0.92)"
            : "rgba(9, 13, 22, 0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          transition: "background 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "4.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Rahan Personal Brand Monogram */}
          <a
            href="#overview"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "0.75rem",
                background:
                  "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "#FFFFFF",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.35)",
                letterSpacing: "0.05em",
              }}
            >
              RS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
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
                  color: "#93C5FD",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Founder & CEO
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="hidden-mobile-nav"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: "rgba(241, 245, 249, 0.75)",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#60A5FA")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(241, 245, 249, 0.75)")
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <a
              href="#contact"
              className="hidden-mobile-nav"
              style={{
                padding: "0.6rem 1.35rem",
                borderRadius: "0.5rem",
                background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.88rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37, 99, 235, 0.35)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(37, 99, 235, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 4px 14px rgba(37, 99, 235, 0.35)";
              }}
            >
              Get in Touch
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="show-mobile-nav"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
                padding: "0.55rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: "4.75rem",
              left: 0,
              right: 0,
              zIndex: 99,
              background: "#0B1120",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "1.5rem",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#F1F5F9",
                    textDecoration: "none",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    padding: "0.5rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  marginTop: "0.5rem",
                  padding: "0.75rem",
                  textAlign: "center",
                  borderRadius: "0.5rem",
                  background: "#2563EB",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SECTION 1: HERO OVERVIEW ── */}
      <section
        id="overview"
        style={{
          position: "relative",
          paddingTop: "9rem",
          paddingBottom: "6rem",
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.25), rgba(9, 13, 22, 0))",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
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
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.4rem 1rem",
                    borderRadius: "2rem",
                    background: "rgba(59, 130, 246, 0.12)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    color: "#93C5FD",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                  }}
                >
                  <Sparkles size={16} />
                  <span>Founder & CEO, FUNDAUX | NISM Certified</span>
                </div>

                <h1
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    marginBottom: "1.5rem",
                    color: "#FFFFFF",
                  }}
                >
                  Engineering <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #93C5FD 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Disciplined Wealth &
                  </span>{" "}
                  <br />
                  Capital Protection.
                </h1>

                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "rgba(241, 245, 249, 0.75)",
                    maxWidth: "540px",
                    marginBottom: "2.5rem",
                  }}
                >
                  Welcome to the personal site of <strong>Rahan Santhosh</strong>. As Founder & CEO of FUNDAUX, I pioneer quantitative derivatives management, risk mitigation, and structured growth strategies designed for long-term consistency.
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
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "0.85rem 1.85rem",
                      borderRadius: "0.6rem",
                      background:
                        "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      boxShadow: "0 8px 24px rgba(37, 99, 235, 0.4)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    Schedule Strategy Meeting <ArrowRight size={18} />
                  </a>

                  <a
                    href="#methodology"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.85rem 1.6rem",
                      borderRadius: "0.6rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F1F5F9",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      transition: "background 0.2s ease",
                    }}
                  >
                    View Investment Pillars
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Visual Card */}
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
                  maxWidth: "420px",
                  borderRadius: "1.5rem",
                  padding: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: "1.25rem",
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
                        "linear-gradient(to top, rgba(9, 13, 22, 0.85) 0%, rgba(9, 13, 22, 0) 60%)",
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
                        padding: "0.3rem 0.75rem",
                        borderRadius: "1rem",
                        background: "rgba(16, 185, 129, 0.2)",
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                        color: "#34D399",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      <CheckCircle2 size={14} /> Active Founder & Executive
                    </div>
                    <h3
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        margin: 0,
                      }}
                    >
                      Rahan Santhosh
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0.2rem 0 0",
                      }}
                    >
                      Founder & CEO @ FUNDAUX
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Key Metrics Banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              marginTop: "5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              padding: "2rem",
              borderRadius: "1.25rem",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            {METRICS.map((metric, idx) => (
              <div key={idx} style={{ textAlign: "center", padding: "0.5rem" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#60A5FA",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginTop: "0.25rem",
                  }}
                >
                  {metric.label}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(241, 245, 249, 0.55)",
                    marginTop: "0.15rem",
                  }}
                >
                  {metric.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: ABOUT RAHAN ── */}
      <section
        id="about"
        style={{
          padding: "6rem 0",
          background: "#0B1120",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 4rem" }}>
            <span
              style={{
                color: "#60A5FA",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Executive Background
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginTop: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              About Rahan Santhosh
            </h2>
            <p
              style={{
                color: "rgba(241, 245, 249, 0.65)",
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
              style={{
                padding: "2.5rem",
                borderRadius: "1.25rem",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
              }}
            >
              <blockquote
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#FFFFFF",
                  borderLeft: "4px solid #3B82F6",
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
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
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
                  <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: "1rem" }}>
                    Rahan Santhosh
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#60A5FA" }}>
                    Founder & Chief Executive Officer
                  </div>
                </div>
              </div>
            </div>

            {/* Story & Background Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "1.25rem",
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <Building size={20} color="#3B82F6" />
                  Building FUNDAUX
                </h3>
                <p
                  style={{
                    color: "rgba(241, 245, 249, 0.7)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Rahan founded FUNDAUX with a singular mission: to strip away the opacity and emotional pitfalls of conventional asset management. Under his direction, FUNDAUX blends systematic derivatives strategies with client-first capital governance.
                </p>
              </div>

              <div
                style={{
                  padding: "2rem",
                  borderRadius: "1.25rem",
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <Award size={20} color="#3B82F6" />
                  Professional Certifications
                </h3>
                <p
                  style={{
                    color: "rgba(241, 245, 249, 0.7)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Holding NISM certifications and deep domain knowledge in derivatives, covered options, and equity risk modeling. Rahan ensures that every strategic initiative adheres strictly to Indian regulatory frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: METHODOLOGY ── */}
      <section
        id="methodology"
        style={{
          padding: "6rem 0",
          background: "#090D16",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 4rem" }}>
            <span
              style={{
                color: "#60A5FA",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Quantitative Framework
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginTop: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Investment Methodology
            </h2>
            <p
              style={{
                color: "rgba(241, 245, 249, 0.65)",
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
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: "2.25rem 1.75rem",
                    borderRadius: "1.25rem",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "0.75rem",
                      background: "rgba(59, 130, 246, 0.15)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#60A5FA",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <IconComp size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(241, 245, 249, 0.65)",
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: LEADERSHIP VALUES ── */}
      <section
        id="leadership"
        style={{
          padding: "6rem 0",
          background: "#0B1120",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 4rem" }}>
            <span
              style={{
                color: "#60A5FA",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Leadership Principles
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginTop: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Core Leadership Values
            </h2>
            <p
              style={{
                color: "rgba(241, 245, 249, 0.65)",
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
                    borderRadius: "1.25rem",
                    background: "rgba(15, 23, 42, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
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
                        background: "rgba(59, 130, 246, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#60A5FA",
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                      }}
                    >
                      {val.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      color: "rgba(241, 245, 249, 0.65)",
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

      {/* ── SECTION 5: DIRECT CONTACT & CONNECT ── */}
      <section
        id="contact"
        style={{
          padding: "6rem 0",
          background:
            "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(37, 99, 235, 0.25), rgba(9, 13, 22, 0))",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              padding: "3.5rem 2.5rem",
              borderRadius: "1.75rem",
              background:
                "linear-gradient(135deg, rgba(30, 58, 138, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            <span
              style={{
                color: "#93C5FD",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Direct Connect
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginTop: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Connect with Rahan Santhosh
            </h2>
            <p
              style={{
                color: "rgba(241, 245, 249, 0.75)",
                fontSize: "1.05rem",
                maxWidth: "540px",
                margin: "1rem auto 2.5rem",
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
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.85rem 1.85rem",
                  borderRadius: "0.6rem",
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)",
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
                  padding: "0.85rem 1.6rem",
                  borderRadius: "0.6rem",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                Visit FUNDAUX Contact Page <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STANDALONE FOOTER ── */}
      <footer
        style={{
          background: "#060911",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "3.5rem 0 2rem",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
              paddingBottom: "2.5rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            {/* Monogram Brand */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "0.6rem",
                  background: "#2563EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  color: "#FFFFFF",
                }}
              >
                RS
              </div>
              <div>
                <div style={{ fontWeight: 800, color: "#FFFFFF", fontSize: "1rem" }}>
                  Rahan Santhosh
                </div>
                <div style={{ fontSize: "0.78rem", color: "rgba(241, 245, 249, 0.5)" }}>
                  Founder & CEO, FUNDAUX
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    color: "rgba(241, 245, 249, 0.55)",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(241, 245, 249, 0.55)")
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              paddingTop: "1.75rem",
            }}
          >
            <p style={{ fontSize: "0.82rem", color: "rgba(241, 245, 249, 0.4)", margin: 0 }}>
              &copy; 2026 Rahan Santhosh. All rights reserved.
            </p>
            <Link
              href="/"
              style={{
                fontSize: "0.82rem",
                color: "#60A5FA",
                textDecoration: "none",
              }}
            >
              Back to FUNDAUX Main Site &rarr;
            </Link>
          </div>
        </div>
      </footer>

      {/* ── Responsive Styling ── */}
      <style>{`
        @media (min-width: 1024px) {
          .hidden-mobile-nav { display: flex !important; }
          .show-mobile-nav { display: none !important; }
          .hero-grid { grid-template-columns: 1.25fr 0.75fr !important; }
          .about-grid { grid-template-columns: 0.9fr 1.1fr !important; }
        }
        @media (max-width: 1023px) {
          .hidden-mobile-nav { display: none !important; }
          .show-mobile-nav { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
