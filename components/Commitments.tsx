"use client";

import { Eye, ShieldCheck, Gem, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const COMMITMENTS = [
  {
    num: "01",
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and full visibility into our strategies, ensuring you always know where you stand.",
  },
  {
    num: "02",
    icon: Target,
    title: "Discipline",
    description: "Rigorous adherence to structured financial frameworks designed to weather market volatility.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Integrity",
    description: "Unwavering commitment to ethical decision-making, putting your financial well-being first.",
  },
  {
    num: "04",
    icon: Gem,
    title: "Long-Term Value",
    description: "Sustainable approaches focused on enduring wealth creation rather than short-term gains.",
  },
];

export default function Commitments() {
  return (
    <section
      id="commitments"
      style={{ padding: "4.5rem 0", background: "var(--color-surface-2)", position: "relative", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Our Principles</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.5rem" }}>
              OUR <span style={{ color: "var(--color-accent-mid)" }}>COMMITMENTS</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="commitments-grid">
          {COMMITMENTS.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className="commitment-card"
                style={{
                  padding: "2.25rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "1rem",
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem" }}>
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
                    }}
                  >
                    <item.icon size={20} style={{ color: "var(--color-accent-mid)" }} />
                  </div>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-border)", lineHeight: 1 }}>
                    {item.num}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.65, fontSize: "0.92rem" }}>
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        .commitments-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .commitments-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .commitments-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .commitment-card:hover {
          border-color: rgba(30,58,138,0.25);
          box-shadow: 0 10px 35px rgba(30,58,138,0.08);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}
