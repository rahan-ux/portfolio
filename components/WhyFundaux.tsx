"use client";

import { Network, MessageSquareText, Flag, TrendingUp, BarChart4, UserCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const REASONS = [
  { icon: Network, title: "Structured Approach", desc: "Every strategy is built on a disciplined, repeatable framework." },
  { icon: MessageSquareText, title: "Transparent Communication", desc: "You'll always know what we're doing and why." },
  { icon: Flag, title: "Goal-Oriented Strategies", desc: "We start with your goals, not off-the-shelf products." },
  { icon: TrendingUp, title: "Long-Term Perspective", desc: "Sustainable growth over chasing short-term market moves." },
  { icon: BarChart4, title: "Data-Informed Decisions", desc: "Every recommendation is backed by rigorous research." },
  { icon: UserCircle2, title: "Personalized Solutions", desc: "No two clients are the same; your plan reflects that." },
];

export default function WhyFundaux() {
  return (
    <section
      id="why-fundaux"
      style={{ padding: "6rem 0", background: "var(--color-surface-2)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <AnimatedSection>
            <span className="section-label">Advantage</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.5rem" }}>
              WHY <span style={{ color: "var(--color-accent-mid)" }}>FUNDAUX?</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="reasons-grid">
          {REASONS.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <div
                className="reason-item"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  padding: "1.5rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.75rem",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "0.6rem",
                    background: "var(--color-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(30,58,138,0.12)",
                    flexShrink: 0,
                  }}
                >
                  <reason.icon size={18} style={{ color: "var(--color-accent-mid)" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.35rem" }}>
                    {reason.title}
                  </h3>
                  <p style={{ fontSize: "0.87rem", color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                    {reason.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        .reasons-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .reasons-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .reasons-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .reason-item:hover {
          box-shadow: 0 8px 30px rgba(30,58,138,0.08);
          border-color: rgba(30,58,138,0.22);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
