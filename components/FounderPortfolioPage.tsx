import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Founder from "@/components/Founder";
import Commitments from "@/components/Commitments";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, ShieldCheck, TrendingUp, Award, Target, Mail } from "lucide-react";

export const founderMetadata: Metadata = {
  title: "Rahan Santhosh | Founder Portfolio – FUNDAUX",
  description: "Official portfolio page of Rahan Santhosh, Founder & CEO of FUNDAUX. Learn about his strategic financial vision, leadership philosophy, and disciplined execution.",
  openGraph: {
    title: "Rahan Santhosh | Founder Portfolio – FUNDAUX",
    description: "Official portfolio page of Rahan Santhosh, Founder & CEO of FUNDAUX.",
    url: "https://fundaux.in/Rahan",
    type: "profile",
    images: [
      {
        url: "/founder.jpg",
        width: 800,
        height: 800,
        alt: "Rahan Santhosh - Founder & CEO of FUNDAUX",
      },
    ],
  },
};

export default function FounderPortfolioView() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page Hero */}
        <div className="page-hero" style={{ paddingTop: "7.5rem", paddingBottom: "4.5rem" }}>
          <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
            <span className="page-hero-label">Founder & CEO</span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginTop: "0.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              Rahan <span style={{ color: "#93C5FD" }}>Santhosh</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "1.1rem",
                maxWidth: "540px",
                lineHeight: 1.7,
                marginTop: "1.25rem",
              }}
            >
              Pioneering structured financial strategies, risk management, and long-term capital preservation at FUNDAUX.
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                Connect with Rahan <ArrowRight size={16} />
              </Link>
              <a
                href="mailto:fundauxin@gmail.com"
                className="btn-secondary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Mail size={16} /> Direct Email
              </a>
            </div>
          </div>
        </div>

        {/* Main Founder Component */}
        <Founder />

        {/* Extended Highlights Section */}
        <section style={{ padding: "5rem 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
          <div className="section-container">
            <AnimatedSection>
              <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem" }}>
                <span className="section-label">Core Pillars</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.5rem" }}>
                  Leadership & Strategic Pillars
                </h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem", marginTop: "0.75rem" }}>
                  Every financial decision under Rahan Santhosh&apos;s guidance is rooted in four non-negotiable principles.
                </p>
              </div>
            </AnimatedSection>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <AnimatedSection delay={0.1}>
                <div
                  style={{
                    padding: "2rem",
                    borderRadius: "1rem",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    height: "100%",
                  }}
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "0.5rem", background: "var(--color-accent-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", marginBottom: "1.25rem" }}>
                    <ShieldCheck size={24} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                    Capital Protection First
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                    Prioritizing risk management before pursuing return, ensuring downside protection across market cycles.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div
                  style={{
                    padding: "2rem",
                    borderRadius: "1rem",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    height: "100%",
                  }}
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "0.5rem", background: "var(--color-accent-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", marginBottom: "1.25rem" }}>
                    <TrendingUp size={24} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                    Quantitative Precision
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                    Executing mathematical and derivatives-focused models to extract consistent growth without reckless leverage.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div
                  style={{
                    padding: "2rem",
                    borderRadius: "1rem",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    height: "100%",
                  }}
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "0.5rem", background: "var(--color-accent-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", marginBottom: "1.25rem" }}>
                    <Award size={24} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                    Certified Standards
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                    Adhering strictly to NISM regulatory standards, institutional compliance, and professional financial management.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div
                  style={{
                    padding: "2rem",
                    borderRadius: "1rem",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    height: "100%",
                  }}
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "0.5rem", background: "var(--color-accent-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", marginBottom: "1.25rem" }}>
                    <Target size={24} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                    Uncompromising Integrity
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                    Building transparent client relationships focused on real performance metrics, clarity, and accountability.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Commitments & Contact Banner */}
        <Commitments />

        <section style={{ padding: "4rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", textAlign: "center" }}>
          <div className="section-container">
            <AnimatedSection>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--color-text-primary)" }}>
                Want to collaborate or discuss strategy with Rahan?
              </h2>
              <p style={{ color: "var(--color-text-secondary)", marginTop: "0.75rem", fontSize: "1rem", maxWidth: "520px", margin: "0.75rem auto 1.75rem" }}>
                Reach out directly to schedule a strategy session or learn how FUNDAUX can assist with your financial objectives.
              </p>
              <Link href="/contact" className="btn-primary" style={{ padding: "0.75rem 2rem", fontSize: "1rem" }}>
                Get in Touch
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
