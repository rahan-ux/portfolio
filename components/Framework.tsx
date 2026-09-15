"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const STEPS = [
  { num: "01", title: "UNDERSTAND", description: "Understand financial goals, priorities and current position." },
  { num: "02", title: "STRATEGIZE", description: "Develop a structured financial strategy based on objectives." },
  { num: "03", title: "EXECUTE", description: "Implement the strategy with discipline and consistency." },
  { num: "04", title: "REVIEW", description: "Monitor progress and refine the strategy when required." },
];

export default function Framework() {
  return (
    <section
      id="framework"
      style={{ padding: "4.5rem 0", background: "var(--color-surface-2)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <AnimatedSection>
            <span className="section-label">Process</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3vw, 2.6rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "0.5rem",
              }}
            >
              OUR <span style={{ color: "var(--color-accent-mid)" }}>FRAMEWORK</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="timeline-container">
          {/* Connector Line */}
          <div className="timeline-connector" />

          <div className="timeline-grid">
            {STEPS.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="timeline-step">
                  {/* Number Indicator */}
                  <div className="timeline-number-wrapper">
                    <div className="timeline-number">{step.num}</div>
                  </div>

                  {/* Content Card */}
                  <div
                    className="timeline-content"
                    style={{
                      padding: "1.75rem",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "0.75rem",
                      height: "100%",
                      boxShadow: "var(--shadow-sm)",
                      transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 800,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.75rem",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container { position: relative; }
        .timeline-grid { display: grid; gap: 1.5rem; position: relative; z-index: 1; }

        @media (max-width: 1023px) {
          .timeline-connector {
            position: absolute;
            left: 2rem;
            top: 2rem;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, var(--color-accent) 0%, transparent 100%);
            z-index: 0;
          }
          .timeline-step { display: flex; gap: 1.5rem; position: relative; align-items: flex-start; }
          .timeline-number-wrapper {
            flex-shrink: 0;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background: var(--color-surface);
            border: 2px solid var(--color-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 18px rgba(30,58,138,0.15);
          }
          .timeline-number { font-size: 1.1rem; font-weight: 800; color: var(--color-accent); margin: auto; }
          .timeline-content { flex: 1; }
        }

        @media (min-width: 1024px) {
          .timeline-connector {
            position: absolute;
            top: 2rem;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-mid) 100%);
            z-index: 0;
          }
          .timeline-grid { grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
          .timeline-step { display: flex; flex-direction: column; gap: 1.5rem; position: relative; }
          .timeline-number-wrapper {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background: var(--color-surface);
            border: 2px solid var(--color-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 18px rgba(30,58,138,0.15);
            margin-left: 1.5rem;
          }
          .timeline-number { font-size: 1.1rem; font-weight: 800; color: var(--color-accent); margin: auto; }
        }
        .timeline-content:hover {
          border-color: rgba(30,58,138,0.25);
          box-shadow: 0 8px 30px rgba(30,58,138,0.08);
        }
      `}</style>
    </section>
  );
}
