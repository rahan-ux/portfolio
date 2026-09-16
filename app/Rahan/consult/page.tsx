"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Mail,
  Phone,
  Clock,
  User,
  FileText,
  Send,
  ArrowLeft,
  ShieldCheck,
  Building,
} from "lucide-react";

const TOPICS = [
  "Portfolio Strategy Session",
  "Options & Derivatives Advisory",
  "Capital Preservation Planning",
  "Risk Assessment & Management",
  "Wealth Structuring Consultation",
  "NISM Regulatory Guidance",
  "Other",
];

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1.1rem 0.85rem 2.75rem",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "0.6rem",
  color: "#FFFFFF",
  outline: "none",
  fontSize: "0.95rem",
  fontFamily: "var(--font-inter), sans-serif",
  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 700,
  color: "rgba(255,255,255,0.65)",
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};

export default function ConsultPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: TOPICS[0],
    preferredDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Invalid email address";
    }
    if (!formData.message.trim()) errs.message = "Please share your goals or questions";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const data = new FormData();
      data.append("access_key", "7d4571bb-608c-4430-9c40-ac3336a16196");
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("subject", `Consultation Booking: ${formData.topic} — ${formData.name.trim()}`);
      data.append(
        "message",
        `Topic: ${formData.topic}\nPreferred Date/Time: ${formData.preferredDate || "Flexible"}\nPhone: ${formData.phone || "N/A"}\n\nGoals & Notes:\n${formData.message.trim()}`
      );
      data.append("from_name", "Rahan Portfolio - Book a Consultation");
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", topic: TOPICS[0], preferredDate: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #080F2B 0%, #0F1E4B 40%, #1E3A8A 100%)", color: "#FFFFFF", fontFamily: "var(--font-inter,'Inter',sans-serif)", overflowX: "hidden" }}>
      {/* Grid texture */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "3.5rem 3.5rem", pointerEvents: "none", zIndex: 0 }} />

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(8,15,43,0.85)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="section-container">
          <div style={{ height: "3.75rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
            <Link href="/Rahan" style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "0.5rem", overflow: "hidden", background: "#000", padding: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Image src="/logo.png" alt="FUNDAUX" width={28} height={28} style={{ objectFit: "contain" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                <span style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF", whiteSpace: "nowrap" }}>Rahan Santhosh</span>
                <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "rgba(147,197,253,0.85)", letterSpacing: "0.07em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Founder &amp; CEO</span>
              </div>
            </Link>
            <Link href="/Rahan" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.45rem 1rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600, flexShrink: 0 }} className="consult-back-btn">
              <ArrowLeft size={14} /> Back to Profile
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ paddingTop: "4.5rem", paddingBottom: "3.5rem", position: "relative", zIndex: 1 }}>
        <div className="section-container">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "#93C5FD", textDecoration: "none", fontWeight: 500 }}>FUNDAUX</Link>
            <ChevronRight size={13} />
            <Link href="/Rahan" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>Rahan Santhosh</Link>
            <ChevronRight size={13} />
            <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Book a Consultation</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(147,197,253,0.9)", padding: "0.28rem 0.9rem", borderRadius: "9999px", background: "rgba(147,197,253,0.1)", border: "1px solid rgba(147,197,253,0.22)", marginBottom: "1.1rem" }}>
            <Calendar size={12} /> Strategy Session Booking
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.025em", margin: "0 0 1rem" }}>
            Book a <span style={{ color: "#93C5FD" }}>Consultation</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", maxWidth: "520px", lineHeight: 1.72, margin: "0 0 2rem" }}>
            Schedule a private strategy session with Rahan Santhosh to discuss your financial goals, risk profile, and a personalised investment roadmap.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
            {[{ icon: ShieldCheck, text: "NISM Certified Advisor" }, { icon: Clock, text: "Response within 24 hrs" }, { icon: Building, text: "FUNDAUX Confidential" }].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.4rem 1rem", borderRadius: "9999px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
                <Icon size={14} color="#93C5FD" /> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ paddingBottom: "6rem", position: "relative", zIndex: 1 }}>
        <div className="section-container">
          <div className="consult-layout">
            {/* Main Form */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "1.25rem", padding: "2.5rem", backdropFilter: "blur(10px)" }}>
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(16,185,129,0.15)", border: "2px solid rgba(16,185,129,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                    <CheckCircle2 size={36} color="#34D399" />
                  </div>
                  <h2 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 0.75rem" }}>Request Confirmed!</h2>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 2rem" }}>
                    Your consultation request has been submitted. Rahan Santhosh will personally reach out within 24 hours to confirm your session.
                  </p>
                  <Link href="/Rahan" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.75rem", background: "#FFFFFF", color: "#0F1E4B", fontWeight: 700, fontSize: "0.9rem", borderRadius: "0.65rem", textDecoration: "none" }}>
                    <ArrowLeft size={16} /> Back to Profile
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 0.4rem" }}>Your Details</h2>
                  <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", margin: "0 0 2rem" }}>All information is kept strictly confidential.</p>
                  <div className="consult-form-grid">
                    {/* Name */}
                    <div>
                      <label style={LABEL_STYLE}>Full Name *</label>
                      <div style={{ position: "relative" }}>
                        <User size={16} style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)" }} />
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" style={{ ...INPUT_STYLE, borderColor: errors.name ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.15)" }} />
                      </div>
                      {errors.name && <p style={{ color: "#FCA5A5", fontSize: "0.78rem", marginTop: "0.4rem" }}>{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div>
                      <label style={LABEL_STYLE}>Email Address *</label>
                      <div style={{ position: "relative" }}>
                        <Mail size={16} style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)" }} />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" style={{ ...INPUT_STYLE, borderColor: errors.email ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.15)" }} />
                      </div>
                      {errors.email && <p style={{ color: "#FCA5A5", fontSize: "0.78rem", marginTop: "0.4rem" }}>{errors.email}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                      <label style={LABEL_STYLE}>Phone Number</label>
                      <div style={{ position: "relative" }}>
                        <Phone size={16} style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)" }} />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={INPUT_STYLE} />
                      </div>
                    </div>
                    {/* Preferred Date */}
                    <div>
                      <label style={LABEL_STYLE}>Preferred Date / Time</label>
                      <div style={{ position: "relative" }}>
                        <Calendar size={16} style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)" }} />
                        <input type="text" name="preferredDate" value={formData.preferredDate} onChange={handleChange} placeholder="e.g. Weekday afternoons, or flexible" style={INPUT_STYLE} />
                      </div>
                    </div>
                  </div>
                  {/* Topic */}
                  <div style={{ marginTop: "1.25rem" }}>
                    <label style={LABEL_STYLE}>Consultation Topic *</label>
                    <div style={{ position: "relative" }}>
                      <FileText size={16} style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)", pointerEvents: "none" }} />
                      <select name="topic" value={formData.topic} onChange={handleChange} style={{ ...INPUT_STYLE, appearance: "none", WebkitAppearance: "none" }}>
                        {TOPICS.map((t) => (<option key={t} value={t} style={{ background: "#0F1E4B", color: "#FFFFFF" }}>{t}</option>))}
                      </select>
                    </div>
                  </div>
                  {/* Message */}
                  <div style={{ marginTop: "1.25rem" }}>
                    <label style={LABEL_STYLE}>Your Goals &amp; Questions *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Share your current financial situation, objectives, risk appetite, or specific questions you'd like to discuss..." style={{ ...INPUT_STYLE, padding: "0.85rem 1.1rem", resize: "vertical", minHeight: "130px", borderColor: errors.message ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.15)" }} />
                    {errors.message && <p style={{ color: "#FCA5A5", fontSize: "0.78rem", marginTop: "0.4rem" }}>{errors.message}</p>}
                  </div>
                  {status === "error" && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.85rem 1rem", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.35)", borderRadius: "0.6rem", color: "#FCA5A5", fontSize: "0.88rem", marginTop: "1.25rem" }}>
                      <AlertCircle size={17} /> Something went wrong. Please try again or email fundauxin@gmail.com.
                    </div>
                  )}
                  <button type="submit" disabled={status === "loading"} className="consult-submit-btn" style={{ marginTop: "1.75rem", width: "100%", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.55rem", padding: "0.9rem 2rem", background: status === "loading" ? "rgba(255,255,255,0.12)" : "#FFFFFF", color: status === "loading" ? "rgba(255,255,255,0.55)" : "#0F1E4B", fontWeight: 700, fontSize: "0.95rem", borderRadius: "0.65rem", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", letterSpacing: "0.01em" }}>
                    {status === "loading" ? <>Submitting…</> : <><Send size={17} /> Submit Consultation Request <ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Founder card */}
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "1rem", overflow: "hidden" }}>
                <div style={{ position: "relative", aspectRatio: "4/3.2", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/founder.jpg" alt="Rahan Santhosh" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(8,15,43,0.88) 0%,rgba(8,15,43,0) 50%)" }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.22rem 0.65rem", borderRadius: "9999px", background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.4)", color: "#34D399", fontSize: "0.7rem", fontWeight: 700 }}>
                      <CheckCircle2 size={11} /> NISM Certified
                    </div>
                  </div>
                </div>
                <div style={{ padding: "1.1rem 1.25rem" }}>
                  <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#FFFFFF" }}>Rahan Santhosh</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: "0.15rem" }}>Founder &amp; CEO, FUNDAUX</div>
                </div>
              </div>

              {/* What to expect */}
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "1rem", padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 1.1rem" }}>What to Expect</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[{ icon: Clock, title: "30–45 Minute Session", desc: "Focused, personalised discussion" }, { icon: ShieldCheck, title: "Confidential & Private", desc: "Your details stay with us" }, { icon: CheckCircle2, title: "Custom Strategy Notes", desc: "Follow-up summary provided" }].map(({ icon: Icon, title, desc }) => (
                    <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <div style={{ width: "34px", height: "34px", borderRadius: "0.5rem", background: "rgba(147,197,253,0.1)", border: "1px solid rgba(147,197,253,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={15} color="#93C5FD" />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#FFFFFF" }}>{title}</div>
                        <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", marginTop: "0.1rem" }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email alternative */}
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1rem", padding: "1.35rem", textAlign: "center" }}>
                <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.75rem" }}>Prefer to reach out directly?</p>
                <a href="mailto:fundauxin@gmail.com?subject=Consultation%20Inquiry%20-%20Rahan%20Santhosh" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 1.25rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.55rem", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.84rem", fontWeight: 600 }}>
                  <Mail size={14} /> fundauxin@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.5rem 0", position: "relative", zIndex: 1 }}>
        <div className="section-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} FUNDAUX. All rights reserved.</span>
          <Link href="/Rahan" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", color: "#93C5FD", textDecoration: "none", fontWeight: 600 }}>
            <ArrowLeft size={13} /> Back to Rahan Santhosh Profile
          </Link>
        </div>
      </div>

      <style>{`
        .consult-layout { display: grid; grid-template-columns: 1fr 340px; gap: 2rem; align-items: start; }
        .consult-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .consult-back-btn:hover { background: rgba(255,255,255,0.08) !important; }
        .consult-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.3) !important; }
        input:focus, textarea:focus, select:focus { border-color: rgba(147,197,253,0.5) !important; box-shadow: 0 0 0 3px rgba(147,197,253,0.12) !important; }
        select option { background: #0F1E4B; color: #FFFFFF; }
        @media (max-width: 1024px) { .consult-layout { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .consult-form-grid { grid-template-columns: 1fr !important; } .section-container { padding: 0 1rem !important; } }
      `}</style>
    </div>
  );
}
