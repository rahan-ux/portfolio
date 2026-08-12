"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const STEPS = [
  {
    num: "01",
    title: "UNDERSTAND",
    description: "Understand financial goals, priorities and current position.",
  },
  {
    num: "02",
    title: "STRATEGIZE",
    description: "Develop a structured financial strategy based on objectives.",
  },
  {
    num: "03",
    title: "EXECUTE",
    description: "Implement the strategy with discipline and consistency.",
  },
  {
    num: "04",
    title: "REVIEW",
    description: "Monitor progress and refine the strategy when required.",
  },
];

export default function Framework() {
  return (
    <section id="framework" style={{ padding: "8rem 0", background: "var(--color-surface-2)" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <AnimatedSection>
            <span className="section-label">Process</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--color-text-primary)" }}>
              OUR <span style={{ color: "var(--color-accent)" }}>FRAMEWORK</span>
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
                  
                  {/* Content */}
                  <div className="timeline-content glass-card" style={{ padding: "2rem", height: "100%" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "1rem", letterSpacing: "0.05em" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
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
        .timeline-container {
          position: relative;
        }
        
        .timeline-grid {
          display: grid;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        /* Mobile / Vertical Setup */
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
          
          .timeline-step {
            display: flex;
            gap: 2rem;
            position: relative;
          }
          
          .timeline-number-wrapper {
            flex-shrink: 0;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background: var(--color-surface);
            border: 2px solid var(--color-accent);
            display: flex;
            align-items: center;
            justifyContent: center;
            box-shadow: 0 0 20px rgba(245, 229, 0, 0.2);
          }
          
          .timeline-number {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-accent);
            margin: auto;
          }

          .timeline-content {
            flex: 1;
          }
        }

        /* Desktop / Horizontal Setup */
        @media (min-width: 1024px) {
          .timeline-connector {
            position: absolute;
            top: 2rem;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--color-accent) 0%, transparent 100%);
            z-index: 0;
          }

          .timeline-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
          
          .timeline-step {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            position: relative;
          }

          .timeline-number-wrapper {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background: var(--color-surface);
            border: 2px solid var(--color-accent);
            display: flex;
            align-items: center;
            justifyContent: center;
            box-shadow: 0 0 20px rgba(245, 229, 0, 0.2);
            margin-left: 2rem; /* Offset to look better */
          }

          .timeline-number {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-accent);
            margin: auto;
          }
        }
      `}</style>
    </section>
  );
}
