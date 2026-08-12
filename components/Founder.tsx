"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Founder() {
  return (
    <section id="founder" style={{ padding: "8rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div className="section-container">
        <div className="founder-grid">
          {/* Left: Image / Visual */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <AnimatedSection direction="left">
              <div 
                style={{ 
                  position: "relative",
                  width: "100%", 
                  maxWidth: "400px", 
                  aspectRatio: "3/4",
                  background: "var(--color-surface-2)",
                  borderRadius: "1rem",
                  border: "1px solid var(--color-border)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, rgba(245, 229, 0, 0.05) 0%, transparent 70%)" }} />
                
                {/* Placeholder Image Content */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", color: "var(--color-text-muted)", zIndex: 1 }}>
                  <User size={64} style={{ opacity: 0.5 }} />
                  <span style={{ fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Founder Portrait</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Content */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <AnimatedSection>
              <span className="section-label">Leadership</span>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem", lineHeight: 1.1 }}>
                MEET THE FOUNDER
              </h2>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-accent)", fontWeight: 500, marginBottom: "2.5rem" }}>
                Rahan Santhosh
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <blockquote 
                style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: 500, 
                  color: "var(--color-text-primary)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  paddingLeft: "1.5rem",
                  borderLeft: "2px solid var(--color-accent)",
                  marginBottom: "2.5rem",
                  position: "relative"
                }}
              >
                "Financial progress begins with clarity, discipline and the right strategy."
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>Vision</h4>
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    To create a robust financial ecosystem where structured strategies lead to sustainable and long-term financial independence.
                  </p>
                </div>
                
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>Leadership Philosophy</h4>
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    Believing in data-driven decisions, complete transparency, and a disciplined approach to managing risk and identifying opportunities.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <style>{`
        .founder-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        @media (min-width: 1024px) {
          .founder-grid {
            grid-template-columns: 0.8fr 1.2fr;
            gap: 6rem;
          }
        }
      `}</style>
    </section>
  );
}
