"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
  Calendar,
  Send,
  AlertCircle,
  Copy,
  Check,
  X,
  ExternalLink,
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

const INPUT_STYLE = {
  width: "100%",
  padding: "0.85rem 1.1rem",
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "0.5rem",
  color: "var(--color-text-primary)",
  outline: "none",
  fontSize: "0.95rem",
  fontFamily: "var(--font-inter), sans-serif",
  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
};

export default function FounderPortfolioView() {
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formHighlighted, setFormHighlighted] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Direct Email Modal Form State
  const [directEmailData, setDirectEmailData] = useState({
    name: "",
    email: "",
    subject: "Direct Inquiry for Rahan Santhosh",
    message: "",
  });
  const [directEmailStatus, setDirectEmailStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [directEmailErrors, setDirectEmailErrors] = useState<Record<string, string>>({});

  // Strategy Meeting Form State
  const [meetingData, setMeetingData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Portfolio Strategy Session",
    preferredDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to strategy meeting form with auto-focus and robust offset calculation
  const scrollToMeeting = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById("schedule-meeting");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      setFormHighlighted(true);
      setTimeout(() => setFormHighlighted(false), 2500);
      setTimeout(() => {
        const input = document.getElementById("meeting-name");
        if (input) input.focus();
      }, 450);
    }
  };

  // Direct email click: copies email, opens native mailto, AND opens direct email modal
  const handleDirectEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      navigator.clipboard.writeText("fundauxin@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 4000);
    } catch (err) {
      console.warn("Clipboard access failed:", err);
    }

    try {
      window.location.href = "mailto:fundauxin@gmail.com?subject=Strategy%20Consultation%20Inquiry%20-%20Rahan%20Santhosh";
    } catch (err) {
      console.warn("Mailto launch failed:", err);
    }

    setEmailModalOpen(true);
    setToastMessage("Copied fundauxin@gmail.com to clipboard! Email window opened.");
    setTimeout(() => setToastMessage(null), 5000);
  };

  // Copy email fallback with toast
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("fundauxin@gmail.com");
    setCopiedEmail(true);
    setToastMessage("Email fundauxin@gmail.com copied to clipboard!");
    setTimeout(() => {
      setCopiedEmail(false);
      setToastMessage(null);
    }, 4000);
  };

  // Handle direct email modal submission via Web3Forms
  const handleDirectEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!directEmailData.name.trim()) errs.name = "Name is required";
    if (!directEmailData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(directEmailData.email.trim())) {
      errs.email = "Invalid email format";
    }
    if (!directEmailData.message.trim()) errs.message = "Message is required";

    if (Object.keys(errs).length > 0) {
      setDirectEmailErrors(errs);
      return;
    }

    setDirectEmailStatus("loading");

    try {
      const data = new FormData();
      data.append("access_key", "7d4571bb-608c-4430-9c40-ac3336a16196");
      data.append("name", directEmailData.name.trim());
      data.append("email", directEmailData.email.trim());
      data.append("subject", `[Direct Email] ${directEmailData.subject.trim()} (${directEmailData.name.trim()})`);
      data.append("message", directEmailData.message.trim());
      data.append("from_name", "Rahan Portfolio - Direct Email Modal");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setDirectEmailStatus("success");
        setDirectEmailData({
          name: "",
          email: "",
          subject: "Direct Inquiry for Rahan Santhosh",
          message: "",
        });
        setTimeout(() => {
          setDirectEmailStatus("idle");
          setEmailModalOpen(false);
        }, 3500);
      } else {
        setDirectEmailStatus("error");
      }
    } catch (err) {
      console.error("Direct email error:", err);
      setDirectEmailStatus("error");
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!meetingData.name.trim()) newErrors.name = "Full Name is required";
    if (!meetingData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(meetingData.email.trim())) {
      newErrors.email = "Invalid email address";
    }
    if (!meetingData.message.trim()) newErrors.message = "Please share your objectives or notes";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      const data = new FormData();
      data.append("access_key", "7d4571bb-608c-4430-9c40-ac3336a16196");
      data.append("name", meetingData.name.trim());
      data.append("email", meetingData.email.trim());
      data.append("phone", meetingData.phone.trim());
      data.append(
        "subject",
        `Strategy Meeting Booking: ${meetingData.topic} (${meetingData.name.trim()})`
      );
      data.append(
        "message",
        `Consultation Topic: ${meetingData.topic}\nPreferred Date/Time: ${meetingData.preferredDate || "Flexible"}\nPhone: ${meetingData.phone || "N/A"}\n\nNotes / Objectives:\n${meetingData.message.trim()}`
      );
      data.append("from_name", "Rahan Portfolio - Strategy Meeting");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMeetingData({
          name: "",
          email: "",
          phone: "",
          topic: "Portfolio Strategy Session",
          preferredDate: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Meeting submit error:", err);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMeetingData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

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
      {/* ── Header: Logo + Name on Left, Only Get in Touch Button on Right ── */}
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
            {/* Left: Official FUNDAUX Logo Image + Name */}
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
                  width: "40px",
                  height: "40px",
                  borderRadius: "0.6rem",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#000000",
                  padding: "4px",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="FUNDAUX"
                  width={32}
                  height={32}
                  style={{ objectFit: "contain" }}
                  priority
                />
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

            {/* Right: Only Get in Touch Button (scrolls directly to form) */}
            <button
              onClick={scrollToMeeting}
              className="btn-primary"
              style={{
                fontSize: "0.88rem",
                padding: "0.55rem 1.4rem",
                cursor: "pointer",
              }}
            >
              Get in Touch
            </button>
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
            {/* Left Column */}
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
                  {/* Schedule Strategy Meeting Button */}
                  <button
                    onClick={scrollToMeeting}
                    className="btn-primary"
                    style={{
                      background: "#FFFFFF",
                      color: "var(--color-accent)",
                      borderColor: "#FFFFFF",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
                      cursor: "pointer",
                    }}
                  >
                    <Calendar size={18} /> Schedule Strategy Meeting <ArrowRight size={16} />
                  </button>

                  {/* Direct Email Button */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <button
                      onClick={handleDirectEmail}
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
                        cursor: "pointer",
                        transition: "background 0.2s ease",
                      }}
                    >
                      <Mail size={16} /> Direct Email
                    </button>

                    <button
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.75rem",
                        borderRadius: "0.5rem",
                        background: "rgba(255, 255, 255, 0.12)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        color: "#FFFFFF",
                        cursor: "pointer",
                      }}
                    >
                      {copiedEmail ? <Check size={16} color="#34D399" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                {copiedEmail && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      fontSize: "0.82rem",
                      color: "#34D399",
                      marginTop: "0.6rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ Email &ldquo;fundauxin@gmail.com&rdquo; copied to clipboard!
                  </motion.div>
                )}
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

      {/* ── FULLY FUNCTIONAL "SCHEDULE STRATEGY MEETING" SECTION ── */}
      <section
        id="schedule-meeting"
        style={{
          padding: "6rem 0",
          background: "var(--color-surface-2)",
          borderTop: "1px solid var(--color-border)",
          scrollMarginTop: "5.5rem",
        }}
      >
        <div className="section-container">
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              background: "var(--color-surface)",
              borderRadius: "1.25rem",
              border: formHighlighted
                ? "2px solid #3B82F6"
                : "1px solid var(--color-border)",
              boxShadow: formHighlighted
                ? "0 0 25px rgba(59, 130, 246, 0.3)"
                : "var(--shadow-card)",
              padding: "3rem 2.5rem",
              transition: "border 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span className="section-label">Direct Consultation</span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--color-text-primary)",
                  marginTop: "0.5rem",
                }}
              >
                Schedule Strategy Meeting
              </h2>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                  lineHeight: 1.65,
                  maxWidth: "520px",
                  margin: "0.5rem auto 0",
                }}
              >
                Book a 1-on-1 strategy consultation directly with Rahan Santhosh to discuss portfolio management, derivatives strategy, or capital protection.
              </p>
            </div>

            {/* Feedback Status Box */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "1.25rem",
                  borderRadius: "0.75rem",
                  background: "#ECFDF5",
                  border: "1px solid #10B981",
                  color: "#065F46",
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={24} color="#10B981" />
                <div>
                  <strong>Meeting Request Received!</strong> Rahan Santhosh or a senior strategy specialist will review your details and contact you shortly.
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "1.25rem",
                  borderRadius: "0.75rem",
                  background: "#FEF2F2",
                  border: "1px solid #EF4444",
                  color: "#991B1B",
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                <AlertCircle size={24} color="#EF4444" />
                <div>
                  Unable to submit meeting request. Please email directly at{" "}
                  <a
                    href="mailto:fundauxin@gmail.com"
                    onClick={handleDirectEmail}
                    style={{ color: "#991B1B", fontWeight: 700, textDecoration: "underline" }}
                  >
                    fundauxin@gmail.com
                  </a>.
                </div>
              </motion.div>
            )}

            {/* Strategy Booking Form */}
            <form onSubmit={handleMeetingSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <label
                    htmlFor="meeting-name"
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Full Name <span style={{ color: "#DC2626" }}>*</span>
                  </label>
                  <input
                    id="meeting-name"
                    type="text"
                    name="name"
                    value={meetingData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahan Santhosh"
                    style={{
                      ...INPUT_STYLE,
                      border: `1px solid ${errors.name ? "#DC2626" : "var(--color-border)"}`,
                    }}
                  />
                  {errors.name && (
                    <span style={{ fontSize: "0.78rem", color: "#DC2626", marginTop: "0.25rem", display: "block" }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="meeting-email"
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Email Address <span style={{ color: "#DC2626" }}>*</span>
                  </label>
                  <input
                    id="meeting-email"
                    type="email"
                    name="email"
                    value={meetingData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    style={{
                      ...INPUT_STYLE,
                      border: `1px solid ${errors.email ? "#DC2626" : "var(--color-border)"}`,
                    }}
                  />
                  {errors.email && (
                    <span style={{ fontSize: "0.78rem", color: "#DC2626", marginTop: "0.25rem", display: "block" }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <label
                    htmlFor="meeting-phone"
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="meeting-phone"
                    type="tel"
                    name="phone"
                    value={meetingData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    style={INPUT_STYLE}
                  />
                </div>

                <div>
                  <label
                    htmlFor="meeting-topic"
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Consultation Subject
                  </label>
                  <select
                    id="meeting-topic"
                    name="topic"
                    value={meetingData.topic}
                    onChange={handleChange}
                    style={{
                      ...INPUT_STYLE,
                      cursor: "pointer",
                    }}
                  >
                    <option value="Portfolio Strategy Session">Portfolio Strategy Session</option>
                    <option value="Options & Hedging Guidance">Options & Hedging Guidance</option>
                    <option value="Capital Protection Consultation">Capital Protection Consultation</option>
                    <option value="General Leadership & Collaboration">General Leadership & Collaboration</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="meeting-date"
                  style={{
                    display: "block",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Preferred Date / Time Window (Optional)
                </label>
                <input
                  id="meeting-date"
                  type="text"
                  name="preferredDate"
                  value={meetingData.preferredDate}
                  onChange={handleChange}
                  placeholder="e.g. Next Monday afternoon or Flexible"
                  style={INPUT_STYLE}
                />
              </div>

              <div>
                <label
                  htmlFor="meeting-message"
                  style={{
                    display: "block",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Notes / Investment Objectives <span style={{ color: "#DC2626" }}>*</span>
                </label>
                <textarea
                  id="meeting-message"
                  name="message"
                  rows={4}
                  value={meetingData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your portfolio goals or topics you would like to discuss..."
                  style={{
                    ...INPUT_STYLE,
                    resize: "vertical",
                    border: `1px solid ${errors.message ? "#DC2626" : "var(--color-border)"}`,
                  }}
                />
                {errors.message && (
                  <span style={{ fontSize: "0.78rem", color: "#DC2626", marginTop: "0.25rem", display: "block" }}>
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary"
                style={{
                  padding: "0.85rem",
                  fontSize: "1rem",
                  width: "100%",
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  marginTop: "0.5rem",
                }}
              >
                {status === "loading" ? (
                  "Scheduling Strategy Meeting..."
                ) : (
                  <>
                    <Calendar size={18} /> Confirm & Schedule Meeting <Send size={16} />
                  </>
                )}
              </button>
            </form>
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
            {/* Logo Image + Monogram Brand */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#000000",
                  padding: "3px",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="FUNDAUX"
                  width={28}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
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

      {/* ── DIRECT EMAIL MODAL ── */}
      <AnimatePresence>
        {emailModalOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.25rem",
              background: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
            onClick={() => setEmailModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "540px",
                background: "var(--color-surface)",
                borderRadius: "1.25rem",
                border: "1px solid var(--color-border-strong)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                padding: "2rem",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setEmailModalOpen(false)}
                aria-label="Close modal"
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text-secondary)",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <div
                  style={{
                    padding: "0.6rem",
                    borderRadius: "0.5rem",
                    background: "var(--color-accent-light)",
                    color: "var(--color-accent-mid)",
                    display: "flex",
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--color-text-primary)" }}>
                    Direct Email to Rahan Santhosh
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                    Founder & CEO — FUNDAUX
                  </p>
                </div>
              </div>

              {/* Email pill box with copy & mailto */}
              <div
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.75rem",
                  padding: "0.85rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  margin: "1.25rem 0 1.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
                  <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--color-accent-mid)" }}>
                    fundauxin@gmail.com
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <button
                    onClick={handleCopyEmail}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.4rem 0.75rem",
                      borderRadius: "0.4rem",
                      background: copiedEmail ? "#D1FAE5" : "var(--color-surface)",
                      border: `1px solid ${copiedEmail ? "#10B981" : "var(--color-border)"}`,
                      color: copiedEmail ? "#065F46" : "var(--color-text-primary)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} color="#10B981" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Copy
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:fundauxin@gmail.com?subject=Strategy%20Consultation%20Inquiry%20-%20Rahan%20Santhosh"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.4rem 0.75rem",
                      borderRadius: "0.4rem",
                      background: "var(--color-accent-mid)",
                      color: "#FFFFFF",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={14} /> Mail App
                  </a>
                </div>
              </div>

              {/* Status alerts */}
              {directEmailStatus === "success" && (
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    background: "#ECFDF5",
                    border: "1px solid #10B981",
                    color: "#065F46",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CheckCircle2 size={20} color="#10B981" />
                  Email sent directly to Rahan Santhosh!
                </div>
              )}

              {directEmailStatus === "error" && (
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    background: "#FEF2F2",
                    border: "1px solid #EF4444",
                    color: "#991B1B",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <AlertCircle size={20} color="#EF4444" />
                  Submission failed. Please use your mail app or try again.
                </div>
              )}

              {/* Direct Form */}
              <form onSubmit={handleDirectEmailSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={directEmailData.name}
                    onChange={(e) => {
                      setDirectEmailData({ ...directEmailData, name: e.target.value });
                      if (directEmailErrors.name) setDirectEmailErrors({ ...directEmailErrors, name: "" });
                    }}
                    placeholder="e.g. Alexander Vance"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      border: `1px solid ${directEmailErrors.name ? "#EF4444" : "var(--color-border)"}`,
                      background: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                      outline: "none",
                      fontSize: "0.9rem",
                    }}
                  />
                  {directEmailErrors.name && (
                    <span style={{ fontSize: "0.78rem", color: "#EF4444", marginTop: "0.2rem", display: "block" }}>
                      {directEmailErrors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    value={directEmailData.email}
                    onChange={(e) => {
                      setDirectEmailData({ ...directEmailData, email: e.target.value });
                      if (directEmailErrors.email) setDirectEmailErrors({ ...directEmailErrors, email: "" });
                    }}
                    placeholder="e.g. alexander@company.com"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      border: `1px solid ${directEmailErrors.email ? "#EF4444" : "var(--color-border)"}`,
                      background: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                      outline: "none",
                      fontSize: "0.9rem",
                    }}
                  />
                  {directEmailErrors.email && (
                    <span style={{ fontSize: "0.78rem", color: "#EF4444", marginTop: "0.2rem", display: "block" }}>
                      {directEmailErrors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    value={directEmailData.subject}
                    onChange={(e) => setDirectEmailData({ ...directEmailData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                      outline: "none",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={directEmailData.message}
                    onChange={(e) => {
                      setDirectEmailData({ ...directEmailData, message: e.target.value });
                      if (directEmailErrors.message) setDirectEmailErrors({ ...directEmailErrors, message: "" });
                    }}
                    placeholder="Write your email message directly to Rahan Santhosh..."
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      border: `1px solid ${directEmailErrors.message ? "#EF4444" : "var(--color-border)"}`,
                      background: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                      outline: "none",
                      fontSize: "0.9rem",
                      resize: "vertical",
                    }}
                  />
                  {directEmailErrors.message && (
                    <span style={{ fontSize: "0.78rem", color: "#EF4444", marginTop: "0.2rem", display: "block" }}>
                      {directEmailErrors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={directEmailStatus === "loading"}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    borderRadius: "0.5rem",
                    background: "var(--color-accent-mid)",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {directEmailStatus === "loading" ? "Sending Email..." : <><Send size={16} /> Send Email Now</>}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── TOAST NOTIFICATION ── */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 1100,
              background: "#0F172A",
              color: "#FFFFFF",
              padding: "0.85rem 1.4rem",
              borderRadius: "0.75rem",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            <CheckCircle2 size={18} color="#34D399" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive Styling ── */}
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
