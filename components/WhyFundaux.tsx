"use client";

import { motion } from "framer-motion";
import { Network, MessageSquareText, Flag, TrendingUp, BarChart4, UserCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const REASONS = [
  { icon: Network, title: "Structured Approach" },
  { icon: MessageSquareText, title: "Transparent Communication" },
  { icon: Flag, title: "Goal-Oriented Strategies" },
  { icon: TrendingUp, title: "Long-Term Perspective" },
  { icon: BarChart4, title: "Data-Informed Decisions" },
  { icon: UserCircle2, title: "Personalized Solutions" },
];

export default function WhyFundaux() {
  return (
    <section id="why-fundaux" style={{ padding: "8rem 0", background: "var(--color-bg)" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <AnimatedSection>
            <span className="section-label">Advantage</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--color-text-primary)" }}>
              WHY <span style={{ color: "var(--color-accent)" }}>FUNDAUX?</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="reasons-grid">
          {REASONS.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div 
                className="reason-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "1rem",
                  transition: "background 0.3s ease, border-color 0.3s ease",
                }}
              >
                <div 
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.5rem",
                    background: "rgba(245, 229, 0, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(245, 229, 0, 0.1)"
                  }}
                >
                  <reason.icon size={20} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
                  {reason.title}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        .reasons-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .reasons-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .reason-item:hover {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(255,255,255,0.2) !important;
        }
      `}</style>
    </section>
  );
}
