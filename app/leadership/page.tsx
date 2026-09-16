import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Award, ShieldCheck, BarChart3, ExternalLink, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Leadership | FUNDAUX",
  description: "Meet the visionary leadership behind FUNDAUX — Rahan Santhosh, Founder & CEO, and the executive team driving structured wealth management and quantitative strategy.",
};

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero Banner ── */}
        <div className="page-hero" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
          <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "1.5rem",
                padding: "0.35rem 1rem",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "9999px",
              }}
            >
              <Link href="/" style={{ color: "#93C5FD", textDecoration: "none", fontWeight: 500 }}>Home</Link>
              <ChevronRight size={13} />
              <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Leadership</span>
            </div>

            <span className="page-hero-label">Executive Team</span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginTop: "0.75rem",
                letterSpacing: "-0.025em",
              }}
            >
              Our <span style={{ color: "#93C5FD" }}>Leadership</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.05rem",
                maxWidth: "520px",
                lineHeight: 1.72,
                marginTop: "1.1rem",
              }}
            >
              The disciplined minds behind FUNDAUX — combining institutional expertise, quantitative rigour, and a capital-first philosophy to protect and grow investor wealth.
            </p>
          </div>
        </div>

        {/* ── Leadership Grid ── */}
        <section style={{ padding: "5rem 0", background: "var(--color-bg)" }}>
          <div className="section-container">

            {/* Section label */}
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="section-label">Executive Profiles</span>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "var(--color-text-primary)",
                  marginTop: "0.5rem",
                  lineHeight: 1.2,
                }}
              >
                Meet the Team
              </h2>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem", marginTop: "0.6rem", maxWidth: "480px", margin: "0.6rem auto 0" }}>
                Every strategic decision at FUNDAUX flows from the top — shaped by expertise, transparency, and a long-term capital vision.
              </p>
            </div>

            {/* Founder Card — featured */}
            <div
              style={{
                background: "linear-gradient(135deg, #0F1E4B 0%, #1E3A8A 55%, #1D4ED8 100%)",
                borderRadius: "1.5rem",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(15, 30, 75, 0.22)",
                marginBottom: "2.5rem",
                position: "relative",
              }}
            >
              {/* grid texture */}
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "3rem 3rem", pointerEvents: "none" }} />

              <div className="leadership-card-inner" style={{ position: "relative", zIndex: 1 }}>
                {/* Photo */}
                <div className="leadership-photo-col">
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "1rem",
                      overflow: "hidden",
                      border: "2px solid rgba(255,255,255,0.15)",
                      boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
                      aspectRatio: "3 / 3.6",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/founder.jpg"
                      alt="Rahan Santhosh – Founder & CEO"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,18,60,0.75) 0%, rgba(10,18,60,0) 45%)" }} />
                    <div style={{ position: "absolute", bottom: "0.85rem", left: "0.85rem" }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.22rem 0.7rem", borderRadius: "9999px", background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.4)", color: "#34D399", fontSize: "0.7rem", fontWeight: 700 }}>
                        <Award size={11} /> NISM Certified
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="leadership-bio-col">
                  {/* Label */}
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(147,197,253,0.9)", padding: "0.25rem 0.85rem", borderRadius: "9999px", background: "rgba(147,197,253,0.1)", border: "1px solid rgba(147,197,253,0.2)", marginBottom: "0.9rem" }}>
                    Founder & Chief Executive
                  </div>

                  <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.85rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "0 0 0.25rem" }}>
                    Rahan <span style={{ color: "#93C5FD" }}>Santhosh</span>
                  </h2>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "rgba(255,255,255,0.65)", marginBottom: "1.35rem" }}>
                    Founder & CEO — FUNDAUX
                  </p>

                  <p style={{ fontSize: "0.94rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.78, marginBottom: "0.9rem" }}>
                    Rahan Santhosh is the Chairman, Founder, and Chief Executive Officer of FUNDAUX — a next-generation quantitative wealth management firm. A disciplined derivatives specialist and NISM-certified strategist, he has pioneered advanced covered-call frameworks, delta/gamma risk models, and structured capital protection strategies.
                  </p>
                  <p style={{ fontSize: "0.94rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.78, marginBottom: "1.75rem" }}>
                    Under his leadership, FUNDAUX bridges institutional-grade derivatives engineering with individual investor clarity — combining rigorous data transparency, strict regulatory compliance, and a relentless capital-first philosophy.
                  </p>

                  {/* Credential chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", marginBottom: "2rem" }}>
                    {[
                      { icon: Award, label: "NISM Series Certified" },
                      { icon: ShieldCheck, label: "Capital Preservation" },
                      { icon: BarChart3, label: "Options Specialist" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.32rem 0.82rem", borderRadius: "9999px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", fontWeight: 600 }}>
                        <Icon size={13} color="#93C5FD" /> {label}
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                    <Link
                      href="/Rahan"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.5rem", background: "#FFFFFF", color: "#0F1E4B", fontWeight: 700, fontSize: "0.88rem", borderRadius: "0.6rem", textDecoration: "none", letterSpacing: "0.01em", boxShadow: "0 4px 14px rgba(0,0,0,0.2)" }}
                      className="leadership-profile-btn"
                    >
                      <ExternalLink size={15} /> View Full Profile
                    </Link>
                    <Link
                      href="/Rahan/consult"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.5rem", background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.25)", color: "#FFFFFF", fontWeight: 600, fontSize: "0.88rem", borderRadius: "0.6rem", textDecoration: "none", letterSpacing: "0.01em" }}
                      className="leadership-consult-btn"
                    >
                      <ArrowRight size={15} /> Book a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Note — More team coming */}
            <div
              style={{
                textAlign: "center",
                padding: "2.5rem",
                background: "var(--color-surface)",
                border: "1px dashed var(--color-border-strong)",
                borderRadius: "1rem",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🚀</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", margin: "0 0 0.4rem" }}>
                Growing Leadership Team
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", maxWidth: "360px", margin: "0 auto" }}>
                FUNDAUX is expanding. Additional executive profiles will be featured here as the team grows.
              </p>
            </div>

          </div>
        </section>

        {/* ── CTA Strip ── */}
        <section style={{ padding: "4rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
          <div className="section-container" style={{ textAlign: "center" }}>
            <span className="section-label">Get Started</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.5rem", marginBottom: "0.75rem" }}>
              Ready to build your financial roadmap?
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem", maxWidth: "440px", margin: "0 auto 2rem" }}>
              Schedule a private strategy session with Rahan Santhosh and start your journey towards structured, risk-managed wealth growth.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/Rahan/consult" className="btn-primary" style={{ textDecoration: "none" }}>
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline" style={{ textDecoration: "none" }}>
                Contact FUNDAUX
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .leadership-card-inner {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 2.5rem;
          align-items: start;
          padding: 2.5rem;
        }
        .leadership-profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.28) !important;
        }
        .leadership-consult-btn:hover {
          background: rgba(255,255,255,0.18) !important;
        }
        .breadcrumb-link:hover { color: #FFFFFF !important; }
        @media (max-width: 768px) {
          .leadership-card-inner {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
            padding: 1.5rem !important;
          }
          .leadership-photo-col {
            display: flex;
            justify-content: center;
          }
          .leadership-photo-col > div {
            max-width: 220px;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .leadership-photo-col > div { max-width: 180px !important; }
        }
      `}</style>
    </>
  );
}
