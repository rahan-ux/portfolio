"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 4rem)",
        display: "flex",
        alignItems: "center",
        paddingTop: "5.5rem",
        paddingBottom: "3rem",
        overflow: "hidden",
        background: "linear-gradient(160deg, var(--hero-bg-start) 0%, var(--hero-bg-mid) 50%, var(--hero-bg-end) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "60vw",
          height: "60vw",
          maxWidth: "700px",
          maxHeight: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,58,138,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="bg-grid" />

      <div className="section-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div className="hero-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          <AnimatedSection>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                background: "var(--color-accent-light)",
                border: "1px solid rgba(30, 58, 138, 0.15)",
                borderRadius: "9999px",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--color-accent-mid)",
                  boxShadow: "0 0 8px rgba(29,78,216,0.5)",
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                }}
              >
                Financial Strategy · Clarity · Growth
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                color: "var(--color-text-primary)",
              }}
            >
              ACHIEVE YOUR <br />
              <span
                style={{
                background: "linear-gradient(135deg, var(--hero-text-gradient-start) 0%, var(--hero-text-gradient-end) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                FINANCIAL GOALS
              </span>{" "}
              <br />
              WITH CONFIDENCE.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "var(--color-text-secondary)",
                maxWidth: "600px",
                lineHeight: 1.7,
                margin: "0 auto 2.5rem auto",
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
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "3.5rem",
              }}
            >
              <Link href="/contact" className="btn-primary">
                GET STARTED <ArrowRight size={17} />
              </Link>
              <Link href="/services" className="btn-outline">
                OUR SERVICES
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="hero-stats-row" style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
              {[
                { value: "30%", label: "Portfolio Growth" },
                { value: "NISM", label: "Certified" },
                { value: "100%", label: "Transparent" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.02em" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
