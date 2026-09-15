"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Mail, Linkedin, Twitter, TrendingUp, ShieldCheck, BookOpen, Target, Users, BarChart3 } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const EXPERTISE = [
  { icon: BarChart3, label: "Derivatives Trading", desc: "Options & futures strategies with structured risk management" },
  { icon: TrendingUp, label: "Portfolio Management", desc: "Systematic investing with capital protection as the core principle" },
  { icon: ShieldCheck, label: "Capital Protection", desc: "Risk-first frameworks designed to preserve and grow wealth" },
  { icon: Target, label: "Financial Planning", desc: "Goal-based planning for individuals and organisations" },
  { icon: BookOpen, label: "NISM Certified Analyst", desc: "Nationally certified research analyst recognised by SEBI" },
  { icon: Users, label: "Client Strategy", desc: "Transparent, disciplined management with clear communication" },
];

const TIMELINE = [
  {
    year: "2021",
    title: "Founded FUNDAUX",
    desc: "Launched FUNDAUX with a vision to bring structured, disciplined financial strategies to everyday investors.",
  },
  {
    year: "2020",
    title: "NISM Certification",
    desc: "Achieved NISM Research Analyst certification, establishing a formal foundation in securities research and analysis.",
  },
  {
    year: "2019",
    title: "Started Derivatives Research",
    desc: "Began deep research into options strategies and derivatives markets, developing systematic trading frameworks.",
  },
  {
    year: "2017",
    title: "Entered Financial Markets",
    desc: "Started the journey in financial markets with a focus on equity research and long-term portfolio construction.",
  },
];

const STATS = [
  { value: "30%", label: "Portfolio Growth" },
  { value: "NISM", label: "Certified Analyst" },
  { value: "100%", label: "Transparent" },
  { value: "2021", label: "Founded FUNDAUX" },
];

export default function RahanSanthoshPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          paddingTop: "9rem",
          paddingBottom: "6rem",
          background: "linear-gradient(160deg, var(--hero-bg-start) 0%, var(--hero-bg-mid) 50%, var(--hero-bg-end) 100%)",
          overflow: "hidden",
        }}
      >
        <div className="bg-grid" />
        {/* Decorative blob */}
        <div style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: "60vw", height: "60vw", maxWidth: "600px", maxHeight: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,58,138,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
            <AnimatedSection>
              <span className="section-label">Founder & Chief Strategist</span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--color-text-primary)",
                margin: "1rem 0 0.5rem",
              }}>
                Rahan{" "}
                <span style={{
                  background: "linear-gradient(135deg, var(--hero-text-gradient-start) 0%, var(--hero-text-gradient-end) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Santhosh
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                maxWidth: "600px",
                margin: "1.5rem auto 2.5rem",
              }}>
                NISM-certified financial analyst, derivatives strategist, and the founder of FUNDAUX — helping individuals and organisations achieve their financial goals through clarity, discipline, and structured strategy.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3.5rem" }}>
                <Link href="/contact" className="btn-primary">
                  Work With Me
                </Link>
                <Link href="/" className="btn-outline">
                  Visit FUNDAUX
                </Link>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.3}>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "3rem" }}>
                {STATS.map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.02em" }}>{s.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.2rem" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── About / Bio ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
        <div className="section-container">
          <div className="rahan-bio-grid">
            {/* Left: Identity Card */}
            <AnimatedSection direction="left">
              <div style={{
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
                borderRadius: "1.25rem",
                padding: "2.5rem",
                boxShadow: "var(--shadow-card)",
                position: "sticky",
                top: "6rem",
              }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: "96px", height: "96px", borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-mid) 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 0 0 4px var(--color-accent-light)",
                }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>R</span>
                </div>

                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>Rahan Santhosh</h2>
                <p style={{ fontSize: "0.88rem", color: "var(--color-accent-mid)", fontWeight: 600, marginBottom: "1.5rem" }}>Founder & Chief Financial Strategist</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "2rem" }}>
                  {[
                    { icon: Briefcase, text: "FUNDAUX, India" },
                    { icon: Award, text: "NISM Certified Research Analyst" },
                    { icon: Mail, text: "fundauxin@gmail.com" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Icon size={16} style={{ color: "var(--color-accent-mid)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)" }}>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href="https://linkedin.com/in/rahansanthosh" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: "2.4rem", height: "2.4rem", borderRadius: "0.5rem",
                      background: "var(--color-accent-light)", border: "1px solid var(--color-border-strong)",
                      color: "var(--color-accent)", textDecoration: "none",
                      transition: "background 0.2s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--color-accent)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "var(--color-accent-light)"; e.currentTarget.style.color = "var(--color-accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <Linkedin size={16} />
                  </a>
                  <a href="https://x.com/rahansanthosh" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: "2.4rem", height: "2.4rem", borderRadius: "0.5rem",
                      background: "var(--color-accent-light)", border: "1px solid var(--color-border-strong)",
                      color: "var(--color-accent)", textDecoration: "none",
                      transition: "background 0.2s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--color-accent)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "var(--color-accent-light)"; e.currentTarget.style.color = "var(--color-accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <Twitter size={16} />
                  </a>
                  <a href="mailto:fundauxin@gmail.com"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: "2.4rem", height: "2.4rem", borderRadius: "0.5rem",
                      background: "var(--color-accent-light)", border: "1px solid var(--color-border-strong)",
                      color: "var(--color-accent)", textDecoration: "none",
                      transition: "background 0.2s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--color-accent)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "var(--color-accent-light)"; e.currentTarget.style.color = "var(--color-accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Bio Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <AnimatedSection delay={0.1}>
                <span className="section-label">About</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.75rem", marginBottom: "1.25rem", lineHeight: 1.15 }}>
                  The Person Behind FUNDAUX
                </h2>
                <blockquote style={{
                  fontSize: "1.1rem", fontStyle: "italic", fontWeight: 500,
                  color: "var(--color-text-primary)", lineHeight: 1.7,
                  paddingLeft: "1.5rem", borderLeft: "3px solid var(--color-accent-mid)",
                  marginBottom: "1.5rem",
                }}>
                  "Financial progress begins with clarity, discipline and the right strategy."
                </blockquote>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, fontSize: "0.96rem", marginBottom: "1rem" }}>
                  Rahan Santhosh is the Founder and Chief Financial Strategist of FUNDAUX — a structured fund management firm built on the principles of discipline, transparency, and capital protection. With a deep specialisation in derivatives and options strategies, Rahan has developed systematic frameworks that help investors pursue their financial goals without compromising on risk.
                </p>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, fontSize: "0.96rem" }}>
                  As an NISM-certified Research Analyst, Rahan combines rigorous quantitative research with a client-first philosophy. His approach is rooted in the belief that every financial decision should be backed by data, clarity, and a long-term view — not noise.
                </p>
              </AnimatedSection>

              {/* Vision & Philosophy */}
              <AnimatedSection delay={0.2}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="rahan-cards-grid">
                  {[
                    { title: "Vision", content: "To create a robust financial ecosystem where structured strategies lead to sustainable and long-term financial independence for every client." },
                    { title: "Philosophy", content: "Data-driven decisions, complete transparency, and a disciplined approach to managing risk and identifying opportunities in every market condition." },
                    { title: "Mission", content: "To democratise access to professional-grade financial strategies, making structured fund management available to individuals at every level." },
                    { title: "Values", content: "Integrity first. Every strategy is designed around the client's goals — not commissions, not short-term gains, but lasting financial progress." },
                  ].map((item) => (
                    <div key={item.title} style={{
                      padding: "1.5rem",
                      background: "var(--color-surface-2)",
                      borderRadius: "0.75rem",
                      border: "1px solid var(--color-border)",
                    }}>
                      <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.title}</h4>
                      <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: "0.88rem" }}>{item.content}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Areas of Expertise ──────────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 0", background: "var(--color-bg)" }}>
        <div className="section-container">
          <AnimatedSection style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Expertise</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.75rem" }}>
              Areas of Specialisation
            </h2>
          </AnimatedSection>

          <div className="expertise-grid">
            {EXPERTISE.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08}>
                <div className="glass-card" style={{ padding: "1.75rem", height: "100%" }}>
                  <div style={{
                    width: "2.75rem", height: "2.75rem", borderRadius: "0.6rem",
                    background: "var(--color-accent-light)", display: "flex",
                    alignItems: "center", justifyContent: "center", marginBottom: "1rem",
                    border: "1px solid var(--color-border-strong)",
                  }}>
                    <item.icon size={18} style={{ color: "var(--color-accent-mid)" }} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>{item.label}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Journey / Timeline ──────────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
        <div className="section-container">
          <AnimatedSection style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Journey</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.75rem" }}>
              The Road So Far
            </h2>
          </AnimatedSection>

          <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: "1.5rem", top: 0, bottom: 0,
              width: "2px", background: "var(--color-border-strong)",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {TIMELINE.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div style={{ display: "flex", gap: "2.5rem", paddingBottom: "2.5rem", paddingLeft: "0.25rem" }}>
                    {/* Dot */}
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <div style={{
                        width: "2.5rem", height: "2.5rem", borderRadius: "50%",
                        background: "var(--color-accent)", display: "flex",
                        alignItems: "center", justifyContent: "center",
                        boxShadow: "0 0 0 4px var(--color-accent-light)",
                        zIndex: 1, position: "relative",
                      }}>
                        <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#fff" }}>{item.year.slice(2)}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div style={{ paddingTop: "0.4rem" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-accent-mid)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{item.year}</div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>{item.title}</h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────────────── */}
      <section style={{
        padding: "5rem 0",
        background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-mid) 100%)",
        textAlign: "center",
      }}>
        <div className="section-container">
          <AnimatedSection>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem", lineHeight: 1.2 }}>
              Ready to Start Your Financial Journey?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: "520px", margin: "0 auto 2rem" }}>
              Connect with Rahan directly to discuss your financial goals and explore how FUNDAUX can help.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.8rem 2rem", background: "#fff", color: "var(--color-accent)",
                fontWeight: 700, borderRadius: "0.5rem", textDecoration: "none",
                fontSize: "0.9rem", transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Get in Touch
              </Link>
              <Link href="/services" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.8rem 2rem", background: "rgba(255,255,255,0.15)",
                color: "#fff", fontWeight: 700, borderRadius: "0.5rem",
                textDecoration: "none", fontSize: "0.9rem",
                border: "1.5px solid rgba(255,255,255,0.4)",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Explore Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style>{`
        .rahan-bio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 1024px) {
          .rahan-bio-grid {
            grid-template-columns: 320px 1fr;
            gap: 4rem;
            align-items: start;
          }
        }
        .rahan-cards-grid {
          grid-template-columns: 1fr !important;
        }
        @media (min-width: 640px) {
          .rahan-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .expertise-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .expertise-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .expertise-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </>
  );
}
